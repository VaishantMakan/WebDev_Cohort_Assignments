const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;

  //check if user already signed-up or not
  const value = await User.findOne({
    username,
    password,
  });

  if (value) {
    res.status(403).json({
      message: "User already signed-up",
    });
  } else {
    const result = User.create({
      username,
      password,
      purchasedCourses: [], //empty array
    });

    if (result) {
      res.json({
        message: "User created successfully",
      });
    } else {
      res.status(403).json({
        message: "Error occurred, User not created",
      });
    }
  }
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic

  const courses = await Course.find({});

  if (courses) {
    res.json({
      courses: courses,
    });
  } else {
    res.json({
      message: "Error while fetching all the courses",
    });
  }
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic

  const username = req.headers.username;

  //fetch the id from header
  const courseId = req.params.courseId;

  //get the course from Course DB and add it in purchasedCourses array of the user
  const course = await Course.findOne({
    _id: courseId,
  });

  if (course) {
    //fetch the purchasedCourses array of the user and update
    try {
      await User.updateOne(
        {
          username: username,
        },
        {
          $push: {
            purchasedCourses: courseId,
          },
        }
      );
    } catch (e) {
      console.log(e);
    }

    res.json({
      message: "Course Purchased successfully",
    });
  } else {
    res.json({
      message: "Given course ID is invalid",
    });
  }
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic

  //fetch the user's purchasedCourses array
  const user = await User.findOne({
    username: req.headers.username,
  });

  if (user) {
    const courses = await Course.find({
      _id: {
        $in: user.purchasedCourses,
      },
    });

    res.json({
      purchasedCourses: courses,
    });
  }
});

module.exports = router;
