const express = require('express')
const mongoose = require('mongoose')

const app = express()
const todoRoutes = require('./routes/todoRoutes')
const PORT = process.env.PORT || 3000

app.use(express.json())

//connect to database
mongoose.connect('mongodb://localhost/todolist')
    .then(() => console.log('Connection successfully created'))
    .catch(err => console.error(err))

//define the base path

app.use('/todos', todoRoutes)

app.listen(PORT, () => console.log('App running at port ' + PORT))