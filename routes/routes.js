const express=require('express');

const router= express.Router();

const path= require('path');

const improtingfromcontroller= require('../controller/main');

router.get('/form',improtingfromcontroller.datacontroller )

router.post('/add',improtingfromcontroller.savedatacontoller);


router.use('/print', improtingfromcontroller.fetch);

router.use('/product/:id',improtingfromcontroller.show);

router.use('/delete/:id',improtingfromcontroller.delete);

router.use('/update/:id', improtingfromcontroller.update);

router.post('/edit',improtingfromcontroller.edit);
module.exports=router;