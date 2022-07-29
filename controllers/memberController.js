import Member from "../models/Member.js";

// get all member
export const getMembers = async (req, res) => {
    try{
        const members = await Member.find()
        res.json(members)
    }catch{
        res.status(500).json({message: error.message})
    }
}

// get member by id (single)
export const getMember = async (req, res) => {
    try{
        const member = await Member.findById(req.params.id)
        if(!member) return res.json("Member not found")
        res.json(member)
    }catch{
        res.status(404).json({message: error.message})
    }
}

// create member
export const saveMember = async (req, res) => {
    const member = new Member(req.body)
    try{
        const saveMember = await member.save()
        res.status(201).json(saveMember)
    }catch{
        res.status(400).json({message: error.message})
    }
}

// update member
export const updateMember = async(req,res) => {
    const checkId = await Member.findById(req.params.id)
    if(!checkId) return res.status(404).json({message: "Member not found"})
    try{
        const updateMember = await Member.updateOne({_id : req.params.id}, {$set: req.body})
        res.status(200).json(updateMember)
    }catch{
        res.status(400).json({message: error.message})
    }
}

//delete member
export const deleteMember = async (req,res) => {
    const cekId = await Member.findById(req.params.id)
    if(!cekId) return res.status(404).json({message: "Member not found"})
    try {
        const deleteMember = await Member.deleteOne({_id: req.params.id})
        res.status(200).json(deleteMember)
    }catch (error) {
        res.status(400).json({message: error.message})
    }
}
