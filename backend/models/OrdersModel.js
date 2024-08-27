const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const OrderSchema = new Schema({
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
    mode: {
        type: String,
        required:true
   }
});
const Order = mongoose.model("Order", OrderSchema);
module.exports= Order;