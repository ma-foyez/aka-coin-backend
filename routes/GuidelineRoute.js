const express = require("express");
const { createNewGuideline, getGuidelineList, getSingleGuideline, updateGuideline, deleteGuideline } = require("../controllers/GuidelineControllers")
const router = express.Router();

router.post('/guideline/create', createNewGuideline);
router.get('/guideline/list', getGuidelineList);
router.get('/guideline/:id', getSingleGuideline);
router.patch('/guideline/update/:id', updateGuideline);
router.delete('/guideline/delete/:id', deleteGuideline);

module.exports = router;