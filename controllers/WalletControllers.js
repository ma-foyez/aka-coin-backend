const asyncHandler = require("express-async-handler");
const res = require("express/lib/response");
const Wallet = require("../models/WalletModel");

/**
 * Create new wallet 
 */
const createNewWallet = asyncHandler(async (req, res) => {
    const { title, link, description , iconPreview} = req.body;

    if (!title || !link || !description) {
        res.status(400);
        throw new Error("Please enter all fields");
    }

    const wallet = await Wallet.create({
        title,
        link,
        description,
        iconPreview

    });

    if (wallet) {
        res.status(201).json({
            _id        : wallet._id,
            title      : wallet.title,
            link       : wallet.link,
            description: wallet.description,
            iconPreview: wallet.iconPreview,
            message    : "New Wallet Created Successfully!"

        });
    } else {
        res.status(400);
        throw new Error("Failed to create new wallet");
    }
});

/**
 * Get All wallet list
 */
const walletList = asyncHandler(async (req, res) => {
    const wallet = await Wallet.find();
    if (wallet) {
        res.status(201).json({
            wallet : wallet,
            message: "Wallet list fetch Successfully!"

        });
    } else {
        res.status(400);
        throw new Error("Wallet list not found");
    }
});

/**
 * update single wallet data
 */
const updateWallet = asyncHandler(async (req, res) => {
    const { title, link, description, iconPreview } = req.body;

    if (!title || !link || !description) {
        res.status(400);
        throw new Error("Please enter all fields");
    }

    const wallet = await Wallet.findById(req.params.id);
    Object.assign(wallet, req.body);
    wallet.save();

    if (wallet) {
        res.status(201).json({
            _id        : wallet._id,
            title      : wallet.title,
            link       : wallet.link,
            description: wallet.description,
            iconPreview: wallet.iconPreview,
            message    : "Wallet Updated Successfully!"

        });
    } else {
        res.status(400);
        throw new Error("Wallet not found");
    }
});


/**
 * get single wallet data
 */
const getSingleWallet = asyncHandler(async (req, res) => {

    const wallet = await Wallet.findById(req.params.id);

    if (wallet) {
        res.status(201).json({
            data   : wallet,
            message: "Wallet data fetch Successfully!"
        });
    } else {
        res.status(400);
        throw new Error("Wallet not found");
    }
});

/**
 * delete single wallet data
 */
const deleteWallet = asyncHandler(async (req, res) => {

    const wallet = await Wallet.findById(req.params.id);
    await wallet.remove();

    if (wallet) {
        res.status(201).json({
            message: "Wallet deleted Successfully!"
        });
    } else {
        res.status(400);
        throw new Error("Wallet not found");
    }
});

module.exports = { createNewWallet, updateWallet, walletList, deleteWallet, getSingleWallet }