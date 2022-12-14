import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const CustomerSchema = new Schema({
    name: String,
    phone: Number,
    city: String,
    email: String,
    created_on:{
        type: Date,
        default: Date.now
    }
});