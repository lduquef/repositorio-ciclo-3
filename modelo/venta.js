"use strict"

const mongoose = require("mongoose")
const Schema = mongoose.Schema
const VentaSchema = Schema({
    datos : String,
    listaVenta:String,
    unidad:{ type :Number, default:0},
    total:{ type :Number, default:0},
    estado:String
    // {
    //     Fecha : Date,
    //     Factura:{ type :Number, default:0},
    //     cliente:String,
    //     clienteID:{ type :Number, default:0},
    //     vendedor:String,
    //     vendedorID:{ type :Number, default:0},
    //     },
})

module.exports = mongoose.model("Venta", VentaSchema)