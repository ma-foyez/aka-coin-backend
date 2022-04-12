const mongoose = require("mongoose");

const WalletModel = mongoose.Schema(
    {
        title: { type: String, required: true },
        link: { type: String, required: true },
        description: { type: String, required: true },
        iconPreview: {
            type: String,
            required: false,
            default: "https: //ps.w.org/kama-thumbnail/assets/icon-256x256.png?rev = 1627018"
        },
    },
    {
        timestaps: true,
    }
)

const wallet = mongoose.model("wallet", WalletModel);

module.exports = wallet