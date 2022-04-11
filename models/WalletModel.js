const mongoose = require("mongoose");

const WalletModel = mongoose.Schema(
    {
        title      : { type: String, required: true },
        link       : { type: String, required: true },
        description: { type: String, required: true },
    },
    {
        timestaps: true,
    }
)

const wallet = mongoose.model("wallet", WalletModel);

module.exports = wallet