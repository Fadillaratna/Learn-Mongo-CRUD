import Outlet from "../models/Outlet.js";

// get all outlet
export const getOutlets = async (req, res) => {
    try{
        const outlets = await Outlet.find()
        res.json(outlets)
    }catch{
        res.status(500).json({message: error.message})
    }
}

// get outlet by id (single)
export const getOutlet = async (req, res) => {
    try{
        const pckg = await Outlet.findById(req.params.id)
        if(!pckg) return res.json("Outlet not found")
        res.json(pckg)
    }catch{
        res.status(404).json({message: error.message})
    }
}

// create outlet
export const saveOutlet = async (req, res) => {
    const pckg = new Outlet(req.body)
    try{
        const saveOutlet = await pckg.save()
        res.status(201).json(saveOutlet)
    }catch{
        res.status(400).json({message: error.message})
    }
}

// update outlet
export const updateOutlet = async(req,res) => {
    const checkId = await Outlet.findById(req.params.id)
    if(!checkId) return res.status(404).json({message: "Outlet not found"})
    try{
        const updateOutlet = await Outlet.updateOne({_id : req.params.id}, {$set: req.body})
        res.status(200).json(updateOutlet)
    }catch{
        res.status(400).json({message: error.message})
    }
}

//delete outlet
export const deleteOutlet = async (req,res) => {
    const cekId = await Outlet.findById(req.params.id)
    if(!cekId) return res.status(404).json({message: "Outlet not found"})
    try {
        const deleteOutlet = await Outlet.deleteOne({_id: req.params.id})
        res.status(200).json(deleteOutlet)
    }catch (error) {
        res.status(400).json({message: error.message})
    }
}
