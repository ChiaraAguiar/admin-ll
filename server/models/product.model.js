const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    titulo: { type: String },
    precio: { type: Number },
    descripcion: { type: String }
}, { timestamps: true });

modules.exports.Product = mongoose.models('Products', ProductSchema);

