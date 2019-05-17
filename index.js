const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const port = 5000

const tripRouter = require('./routes/tripRouter');

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use(cors())


app.use('/trip', tripRouter);

app.get('/', (req, res) => {
    res.send('hello')
})

app.listen(port, () => {
    console.log('Server is started on port ' + port)
})