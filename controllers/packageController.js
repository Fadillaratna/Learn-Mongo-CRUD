import Package from "../models/Package.js";

// get all package
export const getPackages = async (req, res) => {
    try{
        const packages = await Package.find()
        res.json(packages)
    }catch{
        res.status(500).json({message: error.message})
    }
}

// get package by id (single)
export const getPackage = async (req, res) => {
    try{
        const pckg = await Package.findById(req.params.id)
        if(!pckg) return res.json("Package not found")
        res.json(pckg)
    }catch{
        res.status(404).json({message: error.message})
    }
}

// create package
export const savePackage = async (req, res) => {
    const pckg = new Package(req.body)
    try{
        const savePackage = await pckg.save()
        res.status(201).json(savePackage)
    }catch{
        res.status(400).json({message: error.message})
    }
}

// update package
export const updatePackage = async(req,res) => {
    const checkId = await Package.findById(req.params.id)
    if(!checkId) return res.status(404).json({message: "Package not found"})
    try{
        const updatePackage = await Package.updateOne({_id : req.params.id}, {$set: req.body})
        res.status(200).json(updatePackage)
    }catch{
        res.status(400).json({message: error.message})
    }
}

//delete package
export const deletePackage = async (req,res) => {
    const cekId = await Package.findById(req.params.id)
    if(!cekId) return res.status(404).json({message: "Package not found"})
    try {
        const deletePackage = await Package.deleteOne({_id: req.params.id})
        res.status(200).json(deletePackage)
    }catch (error) {
        res.status(400).json({message: error.message})
    }
}
