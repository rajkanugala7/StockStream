const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const HoldingSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    qty: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    avg: {
        type: Number,
        required:true
        
    },
    net: {
        type: String,
        required:true
    },
    day: {
        type: String,
        required:true
        
    }
});
const Holding = mongoose.model("Holding", HoldingSchema);
module.exports= Holding;