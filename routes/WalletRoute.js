const express = require("express");
const { createNewWallet, updateWallet, walletList, deleteWallet } = require("../controllers/WalletControllers")
const router = express.Router();

// router.route('/').post(registerUser)
router.get('/wallet/list', walletList);
router.post('/wallet/create', createNewWallet);
router.patch('/wallet/update/:id', updateWallet);
router.delete('/wallet/delete/:id', deleteWallet);

module.exports = router;