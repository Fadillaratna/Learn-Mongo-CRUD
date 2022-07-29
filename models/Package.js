import mongoose from "mongoose";

// Create schema (structure of database)
const Package = mongoose.Schema({
    packageName: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ['kilo', 'blanket', 'bed_cover', 'tshirt', 'other'],
        required: true 
    },
    price: {
        type: Number,
        required: true
    }
})

// export model (take the Products model which will later be included in the product collection)
export default mongoose.model('Packages', Package)