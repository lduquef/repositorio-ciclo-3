"use strict"

const mongoose = require("mongoose")
const Schema = mongoose.Schema
const VentaSchema = Schema({
    fecha : Date,
    unidad:{ type :Number, default:0},
    total:{ type :Number, default:0},
    listaVenta:String
    // codigo: String,
    // nombre: String,
    // precio:{ type :Number, default:0},
    // estado: String

})

module.exports = mongoose.model("Venta", VentaSchema)