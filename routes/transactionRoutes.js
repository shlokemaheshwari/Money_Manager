const express = require("express");
const { addTransaction, 
    getAllTransaction,
    editTransaction,
    deleteTransaction
}  = require("../controllers/transactionController");


//router object
const router = express.Router();

//routes
//add Transaction POST method
router.post('/add-transaction',addTransaction);
//Edit Transaction POST method
router.post('/edit-transaction',editTransaction);
//Deleted Transaction POST method
router.post('/delete-transaction',deleteTransaction);

//get Transactions
router.post('/get-transaction',getAllTransaction);

module.exports = router;