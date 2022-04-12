const asyncHandler = require("express-async-handler");
const res = require("express/lib/response");
const Guideline = require("../models/GuidelineModel");

/**
 * Create new guideline 
 */
const createNewGuideline = asyncHandler(async (req, res) => {

    const { title, description, imagePreview } = req.body;

    if (!title || !description) {
        res.status(400);
        throw new Error("Please enter all fields");
    }

    const guideline = await Guideline.create({
        title,
        description,
        imagePreview,
    });

    if (guideline) {
        res.status(201).json({
            _id         : guideline._id,
            title       : guideline.title,
            description : guideline.description,
            image       : guideline.image,
            imagePreview: guideline.imagePreview,
            message     : "New Guideline Store Successfully!"

        });
    } else {
        res.status(400);
        throw new Error("Failed to create new guideline");
    }
});


/**
 * Get All Guideline List
 */
const getGuidelineList = asyncHandler(async (req, res) => {
    const guideline = await Guideline.find();
    if (guideline) {
        res.status(201).json({
            data   : guideline,
            message: "Guideline list fetch Successfully!"

        });
    } else {
        res.status(400);
        throw new Error("Guideline list not found");
    }
});


/**
 * get single wallet data
 */
const getSingleGuideline = asyncHandler(async (req, res) => {

    const guideline = await Guideline.findById(req.params.id);

    if (guideline) {
        res.status(201).json({
            data   : guideline,
            message: "Guideline data fetch Successfully!"
        });
    } else {
        res.status(400);
        throw new Error("Guideline not found");
    }
});


/**
 * update single guideline data
 */
const updateGuideline = asyncHandler(async (req, res) => {

    const { title, description, imagePreview } = req.body;


    if (!title || !description) {
        res.status(400);
        throw new Error("Please enter all fields");
    }

    const guideline = await Guideline.findById(req.params.id);
    Object.assign(guideline, req.body);
    guideline.save();

    if (guideline) {
        res.status(201).json({
            _id         : guideline._id,
            title       : guideline.title,
            description : guideline.description,
            imagePreview: guideline.imagePreview,
            message     : "Guideline Updated Successfully!"

        });
    } else {
        res.status(400);
        throw new Error("Guideline not found");
    }
});


/**
 * delete single guideline data
 */
const deleteGuideline = asyncHandler(async (req, res) => {

    const guideline = await Guideline.findById(req.params.id);
    await guideline.remove();

    if (guideline) {
        res.status(201).json({
            message: "Guideline deleted Successfully!"
        });
    } else {
        res.status(400);
        throw new Error("Guideline not found");
    }
});

module.exports = { createNewGuideline, getGuidelineList, getSingleGuideline, updateGuideline, deleteGuideline }