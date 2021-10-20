"use strict"

const mongoose = require("mongoose")
const Schema = mongoose.Schema
const ProductSchema = Schema({
    codigo: String,
    nombre: String,
    precio:{ type :Number, default:0},
    estado: String
    //category: { type: String, enum: ["computers", "Phones","accesories"]},
    //description: String
})

module.exports = mongoose.model("Product", ProductSchema)

