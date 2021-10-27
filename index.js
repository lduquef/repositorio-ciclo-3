"use strict"
const express = require("express");
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const Product = require("./modelo/product");
const Usuario = require("./modelo/usuario")
const Ventas = require("./modelo/venta");
const cors =require("cors");
const venta = require("./modelo/venta");
const jwt = require('express-jwt');
const  jwks = require('jwks-rsa');


const app = express();
app.use(cors());

const port = process.env.PORT || 3001

var jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://misiontic-proyecto.us.auth0.com/.well-known/jwks.json'
  }),
  audience: 'api-autenticacion-DeveloperGroup-mintic',
  issuer: 'https://misiontic-proyecto.us.auth0.com/',
  algorithms: ['RS256']
});

app.use(jwtCheck);


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/api/product", (req, res) => {
    Product.find({}, function (err, productos) {
        if (err)
            return res.status(500).send({ message: `Error al realizar la petición: ${err}` })
        if (!productos)
            return res.status(404).send({ message: `No existen productos` })
        res.status(200).send({ productos })
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
        res.status(200).send({ productos })
    })
})

app.post("/api/venta", (req, res) => {
    console.log("POST /api/venta")
    console.log(req.body)
     let venta = new Ventas()
     venta.datos = req.body.datos
     venta.listaVenta = req.body.listaVenta
     venta.unidad= req.body.unidad
     venta.total=req.body.total
     venta.estado=req.body.estado
     

    venta.save((err, ventaStored) => {
        if (err) {
            res.status(500).send({ message: `Error al salvar la base de datos: ${err} ` })
        }
        res.status(201).send({ venta: ventaStored })

    })
})

app.put("/api/venta", (req, res) => {
    console.log(req.body.id)
    let venta = req.body.id
    let update = req.body
    Product.findByIdAndUpdate(venta, update, (err,  ventaUpdated) =>{
        if (err) {
         return res.status(500).send({ message: `Error al actuaizar producto: ${err} ` })
            
        }
        res.status(201).send({ venta: ventaUpdated})
    })


})

app.delete("/api/venta/", (req, res) => {
    
    let venta = req.body.id
    venta.findById(venta, (err, venta)  =>{
        if (err) {
         return res.status(500).send({ message: `Error al eliminar venta: ${err} ` })
        }
         venta.remove(err =>{
             if  (err) {
                return res.status(500).send({ message: `Error al eliminar venta: ${err} ` })
        }
        res.status(201).send({message: "La venta ha sido eliminado"})
    })

    })
})
app.get("/api/usuario", (req, res) => {
    Usuario.find({}, function (err, usuarios) {
        if (err)
            return res.status(500).send({ message: `Error al realizar la petición: ${err}` })
        if (!usuarios)
            return res.status(404).send({ message: `No existen usuarios` })
            res.status(200).send({ usuarios })
    })
})

app.put("/api/usuario", (req, res) => {
    console.log(req.body.id)
    let usuario = req.body.id
    let update = req.body
    Usuario.findByIdAndUpdate(usuario, update, (err,  usuarioUpdated) =>{
        if (err) {
         return res.status(500).send({ message: `Error al actuaizar usuario: ${err} ` })
            
        }
        res.status(201).send({ usuario: usuarioUpdated})
    })
})

app.delete("/api/usuario/", (req, res) => {
    
    let usuario = req.body.id
    Usuario.findById(usuario, (err, usuario)  =>{
        if (err) {
         return res.status(500).send({ message: `Error al eliminar usuario: ${err} ` })
        }
         usuario.remove(err =>{
             if  (err) {
                return res.status(500).send({ message: `Error al eliminar usuario: ${err} ` })
        }
        res.status(201).send({message: "El usuario ha sido eliminado"})
    })

    })
})

app.post("/api/usuario", (req, res) => {
    console.log("POST /api/usuario")
    console.log(req.body)
     let usuario = new Usuario()
     usuario.nombre= req.body.nombre
     usuario.email=req.body.email
     usuario.estado=req.body.estado
     usuario.rol=req.body.rol
     usuario.listaUsuarios = req.body.listaUsuario

    usuario.save((err, usuarioStored) => {
        if (err) {
            res.status(500).send({ message: `Error al salvar la base de datos: ${err} ` })
        }
        res.status(201).send({ usuario: usuarioStored })

    })
})

var MONGODB_URI = "mongodb+srv://admin:admin123@cluster0.fjnmf.mongodb.net/api";

mongoose.connect(MONGODB_URI, (err, res) => {
    if (err) {
        return console.log(`error al conectar en base de datos: ${err} `)
    }
    console.log("conexion de bases establecida con éxito")

    app.listen(port, () => {

        console.log(`API REST corriendo en http:/localhost:${port}`)
    })


});
