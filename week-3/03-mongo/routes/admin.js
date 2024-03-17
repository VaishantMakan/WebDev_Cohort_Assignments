const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  //check if a user with this username already exists or not

  const value = await Admin.findOne({
    username: username,
    password: password,
  });

  if (value) {
    res.status(403).json({
      msg: "User already signed up",
    });
  } else {
    Admin.create({
      username: username,
      password: password,
    })
      .then(function () {
        res.json({
          message: "Admin created successfully",
        });
      })
      .catch(function () {
        res.json({
          message: "Admin not created",
        });
      });
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const title = req.body.title;
  const description = req.body.description;
  const imageLink = req.body.imageLink;
  const price = req.body.price;

  const val = await Course.create({
    title,
    description,
    imageLink,
    price,
  });

  if (val) {
    res.json({
      message: "Course created successfully",
      courseId: val._id,
    });
  }
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const allCourses = await Course.find({}); //we pass no condition to fetch all entries

  if (allCourses) {
    res.json({
      courses: allCourses,
    });
  }
});

module.exports = router;
