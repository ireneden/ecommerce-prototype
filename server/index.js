const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

var Sequelize = require('sequelize')
var sequelize = new Sequelize('postgres://postgres:secret@localhost:5432/postgres')

app.listen(4001, () => console.log('Express API listening on port 4001'))

app.use(function(request, response, next) {
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    response.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE')
    next()
  })


  const Ad = sequelize.define('ad', {
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    price: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false
    },
    image: {
        type: Sequelize.STRING,
      },
    email: {
        type: Sequelize.STRING,
      },
    phone: {
        type: Sequelize.INTEGER,
      }}, {
    tableName: 'ads',
    timestamps: false
    })
    


    app.get('/ads', (request, response) => {
        Ad.findAll({
          attributes: ['id', 'title', 'price', 'description', 'image', 'email', 'phone']
        })
          .then(result => {
            response.send({
                ads: result
            })
          })
          .catch(error => {
            response.status(500).send({error: 'Something went wrong with Postgres'})
          })
    })


    app.get('/ads/:id', (request, response) => {
        const adId = request.params.id
        Ad.findById(adId)
          .then(result => {
              if (!result) {
                  response.status(404).send({error: 'Does not exist'})
              }
              else {
                  response.send(result)
              }
          })
          .catch(error => {
            response.status(500).send({error: 'Something went wrong with Postgres'})
          })
    })
    

    app.post('/ads', (request, response) => {
        const ad = request.body
        console.log(ad)
        Ad.create(ad).then(entity => {
            response.status(201).send(entity)
        })
      })

      //test with: http post :4001/ads title="New Ad test" price=5 description="Whatever" image="dhsjf" email="clacla@djdj.com" phone="2223"

      