const express = require('express')
const { route } = require('../app')
const router = express.Router()

router.get('/', function(req, res){
    res.status(200).send({
        titulo: "Agenda de contatinhos - Reprograma",
        version: '1.0.0'
    })
})

module.exports = router