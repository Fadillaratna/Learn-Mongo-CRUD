import express from "express";


import {
    getMembers,
    getMember,
    saveMember,
    updateMember,
    deleteMember
} from "../controllers/memberController.js";

const router = express.Router();

router.get('/', getMembers);
router.get('/:id', getMember);
router.post('/', saveMember);
router.put('/:id', updateMember);
router.delete('/:id', deleteMember);

export default router;
