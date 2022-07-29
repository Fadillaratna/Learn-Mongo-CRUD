import mongoose from "mongoose";

// Create schema (structure of database)
const Outlet = mongoose.Schema({
    outletName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true 
    },
    tlp: {
        type: String,
        required: true
    }
})


// export model (take the Products model which will later be included in the product collection)
export default mongoose.model('Outlets', Outlet)