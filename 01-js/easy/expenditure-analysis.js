/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  //create an object that will store the different categories and their total price in all transactions.

  let allCategories = {};

  for (let i = 0; i < transactions.length; i++) {
    //first get the transaction
    const transaction = transactions[i];

    let category = transaction.category;
    let price = transaction.price;

    //if the category already exists in the allCategories obj, then add the price, else add the category
    if (allCategories.hasOwnProperty(category)) {
      allCategories[category] += price;
    } else {
      allCategories[category] = price;
    }
  }

  //now creating an array that will store objs, with the properties category and price.

  let result = [];

  for (const category in allCategories) {
    let finalObj = {
      category: category,
      totalSpent: allCategories[category],
    };

    result.push(finalObj);
  }

  return result;
}

module.exports = calculateTotalSpentByCategory;
