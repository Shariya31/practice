const express = require('express')
const app = express();
const port = 9900

app.get('/', (req, res)=>{
    res.send('<h2>Welcome</h2>')
})

app.get('/person', (req, res)=>{
    let person = {
        name: 'david',
        age: 23,
        height: '5ft',
        hobbies: ['hiking', 'swimming']
    }
    res.send(person)
})






app.listen(port, ()=>{
    console.log(`Server is running at port http://localhost:${port}`)
})