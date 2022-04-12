const mongoose = require("mongoose");

const GuidelineModel = mongoose.Schema(
    {
        title      : { type: String, required: true },
        description: { type: String, required: true },
        imagePreview: {
            type    : String,
            required: false,
            default : "https: //ps.w.org/kama-thumbnail/assets/icon-256x256.png?rev = 1627018"
        },
    },
    {
        timestaps: true,
    }
)

const guideline = mongoose.model("guideline", GuidelineModel);

module.exports = guideline