const express = require("express");
const { createNewWallet, updateWallet, walletList, deleteWallet, getSingleWallet } = require("../controllers/WalletControllers")
const router = express.Router();

// router.route('/').post(registerUser)
router.get('/wallet/list', walletList);
router.post('/wallet/create', createNewWallet);
router.get('/wallet/:id', getSingleWallet);
router.patch('/wallet/update/:id', updateWallet);
router.delete('/wallet/delete/:id', deleteWallet);

module.exports = router;