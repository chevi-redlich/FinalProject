const express = require('express');
const router = express.Router();
const dataService=require('../Services/data.service');
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const i=0;
router.get('/', async (req, res, next) => {
    res.send(await dataService.get('users'));
})
router.get('/:id', async (req, res) => {
    res.send(await data.getById('users', parseInt(req.params.id)))
})
router.post('/',urlencodedParser,async(req,res,next)=>{
    res.send(await dataService.post('users',{
        "id":req.params.id,
        "name":req.params.name,
        "password":req.params.password
    }))
})

module.exports = router;