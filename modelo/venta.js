"use strict"

const mongoose = require("mongoose")
const Schema = mongoose.Schema
const VentaSchema = Schema({
    datos : {
        Fecha : Date,
        Factura:{ type :Number, default:0},
        cliente:String,
        clienteID:{ type :Number, default:0},
        vendedor:String,
        vendedorID:{ type :Number, default:0},
        },
    unidad:{ type :Number, default:0},
    total:{ type :Number, default:0},
    listaVenta:String,
    

})

module.exports = mongoose.model("Venta", VentaSchema)