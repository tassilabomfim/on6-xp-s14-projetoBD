const { model } = require('../models/contatoSchema')
const contatoCollections = require('../models/contatoSchema')

const getAll = (req, res) => {
    contatoCollections.find((error, contatos) => {
        if(error){
            return res.status(500).send(error)
        } else {
            return res.status(200).send({mensagem:"Tudo certo maravilhosa", contatos})
        }
    })
}

const addContato = (req, res) => {
    const contatoDoBody = req.body // pegando o body que o usuario digitou
    const contato = new contatoCollections(contatoDoBody) //criando um novo dado com o body

    contato.save((error) => {
        if(error){
            return res.status(400).send(error)
        } else {
            return res.status(200).send({mensagem: "Post com sucesso maravilhosa", contato})
        }
    })
}

const getByNome = (req, res) => {
    const  nomeParam  = req.query.nome

    console.log(nomeParam)
    
    
    contatoCollections.find(
        { nome: nomeParam }, //desestriturando o objeto e linkando com nome (propriedade)o objeto
        (error, contatos) => {
            if(error){
                return res.status(500).send(error)
             } else{
                if(contatos) {
                    console.log(contatos)
                    return res.status(200).send(contatos)
                } else {
                    return res.status(500).send({
                        mensagem: "Maravilhosa, esse contato não foi encontrado! :( ",
                        error
                    })
                }
            }

    })
}

const getById = (req, res) => {
    const idParam = req.query
    
    contatoCollections.findById(
         idParam,
        (error, contatos) => {
            if (error) {
                return res.status(500).send(error)
            } else {
                if (contatos) {
                    return res.status(200).send(contatos)
                } else {
                    return res.status(500).send({
                        mensagem:  "Maravilhosa, esse contato não foi encontrado! :( ",
                        error
                    })
                }
            }
        }
    )
}


const updateTel = (req, res) => {
    const idParam = req.query.id
    const telBody = req.body
    const update = { new:true }

    contatoCollections.findByIdAndUpdate(
        idParam,
        telBody,
        update,
        (error, contato) => {
            if (error) {
                return res.status(500).send({
                    mensagem: "Ops, algo errado aconteceu!",
                error
                })
            }else{
                return res.status(200).send({
                    message: "Numero do Contato atualizado com sucesso, maravilhosa!",
                    contato
                })
            }
        }) // error no terminal : Mongoose: `findOneAndUpdate()` and `findOneAndDelete()` without the `useFindAndModify` option set to false are deprecated. See: https://mongoosejs.com/docs/deprecations.html#findandmodify

}

const updateContact = (req, res) =>{
    const idParam = req.query.id
    const contatoBody = req.body
    const update = { new:true }

    contatoCollections.findByIdAndUpdate(
        idParam, 
        contatoBody, 
        update, 
        (error, contato) => {
            if(error){
                return res.status(500).send({
                    mensagem: "Aconteceu um erro", 
                    error
                })
            }else{
                return res.status(200).send({
                    mensagem: "Contato atualizado, maravilhosa",
                    contato
                })
            }
        })

}


         

module.exports = { 
    getAll,
    addContato,
    getByNome,
    getById,
    updateTel,
    updateContact
}