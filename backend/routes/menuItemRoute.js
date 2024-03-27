const express = require('express')
const router = express.Router();

//menu items end points
const menuItem = require('../models/menuItems');

router.get('/', async (req, res)=>{
    try {
        const data = await menuItem.find();
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'})
    }

})

router.get('/:taste', async (req, res)=>{
    try {
        let taste = req.params.taste
        if(taste === 'spicy', 'sweet', 'mixed'){
            let response = await menuItem.find({taste: taste})
            res.status(200).json(response)
        }
        else{
            console.log('Invalid params')
        }
        
    } catch (error) {
        
    }
})



router.post('/', async (req, res)=>{
    try {
        const data = req.body;
        const newItem = new menuItem(data)
        const response = await newItem.save();

        res.status(200).json(response)
        console.log('data saved', response)
    } catch (error) {
        res.status(500).json({error: 'internal server error from post new menu items'})        
    }
})

router.put('/:id', async (req, res)=>{
    try {
        let itemId = req.params.id;
    let updatedMenuItem = req.body;
    let response = await menuItem.findByIdAndUpdate(itemId, updatedMenuItem, {
        new: true,
        runValidators: true
    })
    if(!response){
        res.status(404).json({error: "item not found"})
    }

    console.log('item updated')
    res.status(200).json(response)
    } catch (error) {
        res.status(500).json({error: "Internal server error"})
    }
})

router.delete('/:id', async(req,res)=>{
    try {
        let itemId = req.params.id
        let response = await menuItem.findByIdAndDelete(itemId)
        if(!response){
            res.status(404).json({error: 'Item not found'})
        }
        console.log("Item deleted")
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({error: 'Internal server error'})
    }
})

module.exports = router