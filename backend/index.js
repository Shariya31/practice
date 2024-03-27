const express = require('express')
const app = express();
const cors = require('cors')
const db = require('./db')
const bodyParser = require('body-parser')
const port = 9900;

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res)=>{
    res.send('welcome')
})

// import the routes
const personRoute = require('./routes/personRoute')
const menuItemRoute = require('./routes/menuItemRoute')


// use the routes
app.use('/person', personRoute)
app.use('/menuItems', menuItemRoute)

app.listen(port, ()=>{
    console.log(`Server is running on port http://localhost:${port}`)

})

