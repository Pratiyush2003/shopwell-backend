import mongoose, { model } from 'mongoose';
const { Schema } = mongoose;
const { ObjectId } = mongoose.Schema.Types

const ProductSchema = new Schema({
    user:{
        type: ObjectId,
        ref: 'user'
    },
    id: {
        type: Number,
        required: true
    },
    price : {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        default: "General"
    },
    brands : {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    }
});
export default model('products', ProductSchema);