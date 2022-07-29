import express from "express";


import {
    getOutlets,
    getOutlet,
    saveOutlet,
    updateOutlet,
    deleteOutlet
} from "../controllers/outletController.js";

const router = express.Router();

router.get('/', getOutlets);
router.get('/:id', getOutlet);
router.post('/', saveOutlet);
router.put('/:id', updateOutlet);
router.delete('/:id', deleteOutlet);

export default router;
