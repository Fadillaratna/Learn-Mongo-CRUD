import express from "express";


import {
    getPackages,
    getPackage,
    savePackage,
    updatePackage,
    deletePackage
} from "../controllers/packageController.js";

const router = express.Router();

router.get('/', getPackages);
router.get('/:id', getPackage);
router.post('/', savePackage);
router.put('/:id', updatePackage);
router.delete('/:id', deletePackage);

export default router;
