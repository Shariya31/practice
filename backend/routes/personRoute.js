const express = require('express')
const router = express.Router();

const person = require('../models/person')

router.get('/', async (req, res)=>{
    try {
        const data = await person.find();
        res.status(200).json(data)
    } catch (error) {
        console.log('error')
    }
})
router.post('/', async(req, res)=>{
    try {
        const data = req.body;
        const newPerson = new person(data)
        
        const response = await newPerson.save();
        console.log('data saved', response);
        res.status(200).json(response)
    } catch (error) {
        console.log(error)
        res.status(500).json({error: 'internal server error'})
    }
})

router.get('/:workType', async(req, res)=>{
    try {
        let workType = req.params.workType;
        if(workType === 'chef' || workType === 'waiter' || workType === 'manager'){
            let response = await person.find({work: workType})
            res.status(200).json(response)
        }
        else{
            console.log("Invalid params")
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({error: 'internal server error'})
    }

})

router.put('/:id', async (req, res)=>{
    try {
        const personId = req.params.id
        const updatedPersonData = req.body
        let response = await person.findByIdAndUpdate(personId, updatedPersonData, {
            new: true,
            runValidators: true
        })
        console.log(req.params)
        if(!response){
            return res.status(404).json({error: 'person not found'})
        }

        console.log('data saved')
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({error: 'internal server error'})        
    }
})

router.delete('/:id', async (req, res)=>{
    try {
        let personId = req.params.id
        let response = await person.findByIdAndDelete(personId)
        if(!response){
            return res.status(404).json({error: 'person not found'})
        }

        console.log("person deleted")
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({error: 'Internal server error'})
    }
})
module.exports = router