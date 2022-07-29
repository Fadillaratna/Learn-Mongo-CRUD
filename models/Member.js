import mongoose from "mongoose";

// Create schema (structure of database)
const Member = mongoose.Schema({
    memberName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true 
    },
    gender: {
        type: String,
        enum: ['male', 'female'],
        required: true
    },
    tlp: {
        type: String,
        required: true
    }
})


// export model (take the Products model which will later be included in the product collection)
export default mongoose.model('Members', Member)