"use strict"

const mongoose = require("mongoose")
const Schema = mongoose.Schema
const UsuarioSchema = Schema({
    usuario_id:{ type :Number, default:0},
    nombre: String,
    categoria : String
})

module.exports = mongoose.model("usuario", UsuarioSchema)