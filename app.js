const express = require('express')
const morgan = require('morgan')
const app = express()
const staticMiddleware = express.static((__dirname, "public"))
const pg = require('pg')
//const path = require('path')

app.use(staticMiddleware)
app.use(morgan('dev'))
console.log('HELOO DAN');

app.get('/', (req, res, next) => {
    res.send("Heloo Josh and Dan!! This is your server ")
})


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App listening in port ${PORT} http://localhost:3000`);

});

