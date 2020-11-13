const express = require('express')
const router = express.Router()
const controller = require('../controller/contatosController')

router.get('/', controller.getAll)
router.post('/criar', controller.addContato)
router.get('/nome', controller.getByNome)
router.get('/id', controller.getById)
router.put("/atualizar", controller.updateContact)
router.patch("/atualizar/telefone", controller.updateTel)


module.exports = router