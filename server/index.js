const express = require('express')

const app = express()

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
    


    app.get('/ad', (request, response) => {
        Ad.findAll({
          attributes: ['id', 'title', 'price', 'description', 'image', 'email', 'phone']
        })
          .then(result => {
            response.send({
                ad: result
            })
          })
          .catch(error => {
            response.status(500).send({error: 'Something went wrong with Postgres'})
          })
    })


    app.get('/ad/:id', (request, response) => {
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
    