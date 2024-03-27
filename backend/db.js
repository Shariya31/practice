const moongose = require('mongoose')

const mongoURL = 'mongodb://127.0.0.1:27017/practice'

const connectToDatabase = async()=>{
    await moongose.connect(mongoURL)
}
connectToDatabase();


const db = moongose.connection;

db.on('connected', ()=>{
    console.log('connected to mongodb server')
})


module.exports = db;