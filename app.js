const express = require('express')
const app = express()
app.get('/', (request, response) => {
  reposne.sendFile('./gadgets.html', {root: __dirname})
})
module.exports = app
app.listen(3000)
