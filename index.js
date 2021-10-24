"use strict"
const express = require("express");
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const Product = require("./modelo/product");
const Usuarios = require("./modelo/usuarios")
const Ventas = require("./modelo/venta");
const cors =require("cors");
const venta = require("./modelo/venta");


const app = express();
app.use(cors())
const port = process.env.PORT || 3001


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/api/product", (req, res) => {
    Product.find({}, function (err, productos) {
        if (err)
            return res.status(500).send({ message: `Error al realizar la petición: ${err}` })
        if (!productos)
            return res.status(404).send({ message: `No existen productos` })
        res.send(200, { productos })
    })
})

app.get("/api/product/:productId", (req, res) => {
    let productId = req.params.productId

    Product.findById(productId, (err, product) => {
        if (err) return res.status(500).send({ message: `Error al realizar la petición: ${err}` })
        if (!product) return res.status(404).send({ message: `El producto no existe` })
        res.status(200).send({ product })
    })
})

app.post("/api/product", (req, res) => {
    console.log("POST /api/product")
    console.log(req.body)

    let product = new Product()
    product.codigo = req.body.codigo
    product.nombre = req.body.nombre
    product.precio = req.body.precio
    product.estado = req.body.estado
   
    //product.category = req.body.category
    //product.description = req.body.description


    product.save((err, productStored) => {
        if (err) {
            res.status(500).send({ message: `Error al salvar la base de datos: ${err} ` })
        }
        res.status(201).send({ product: productStored })

    })
})


app.put("/api/product", (req, res) => {
    console.log(req.body.id)
    let product = req.body.id
    let update = req.body
    Product.findByIdAndUpdate(product, update, (err,  productUpdated) =>{
        if (err) {
         return res.status(500).send({ message: `Error al actuaizar producto: ${err} ` })
            
        }
        res.status(201).send({ product: productUpdated})
    })


})

app.delete("/api/product/", (req, res) => {
    
    let product = req.body.id
    Product.findById(product, (err, product)  =>{
        if (err) {
         return res.status(500).send({ message: `Error al eliminar producto: ${err} ` })
        }
         product.remove(err =>{
             if  (err) {
                return res.status(500).send({ message: `Error al eliminar producto: ${err} ` })
        }
        res.status(201).send({message: "El producto ha sido eliminado"})
    })

    })
})
app.get("/api/venta", (req, res) => {
    venta.find({}, function (err, productos) {
        if (err)
            return res.status(500).send({ message: `Error al realizar la petición: ${err}` })
        if (!productos)
            return res.status(404).send({ message: `No existen productos` })
        res.send(200, { productos })
    })
})

app.post("/api/venta", (req, res) => {
    console.log("POST /api/venta")
    console.log(req.body)
     let venta = new Ventas()
     venta.datos = req.body.datos
     venta.unidad= req.body.unidad
     venta.total=req.body.total
     venta.listaVentas = req.body.listaVenta

    venta.save((err, ventaStored) => {
        if (err) {
            res.status(500).send({ message: `Error al salvar la base de datos: ${err} ` })
        }
        res.status(201).send({ venta: ventaStored })

    })
})
app.get("/api/usuario", (req, res) => {
    Usuarios.find({}, function (err, usuario) {
        if (err)
            return res.status(500).send({ message: `Error al realizar la petición: ${err}` })
        if (!usuario)
            return res.status(404).send({ message: `No existen usuario` })
        res.send(200, { usuario })
    })
})

var MONGODB_URI = "mongodb+srv://admin:admin123@cluster0.fjnmf.mongodb.net";

mongoose.connect(MONGODB_URI, (err, res) => {
    if (err) {
        return console.log(`error al conectar en base de datos: ${err} `)
    }
    console.log("conexion de bases establecida con éxito")

    app.listen(port, () => {

        console.log(`API REST corriendo en http:/localhost:${port}`)
    })


});
