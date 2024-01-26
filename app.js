const express= require('express');
const app= express();

const path=require('path');

const sequelize = require('./util/database');

const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, "public"))) 



const routerfile= require('./routes/routes');   
 app.use(routerfile);

 /*app.use('/home',(req,res,next)=>{
   res.render('home')
 }) */


sequelize.sync()
.then(res=>
   { app.listen(3004);  
})                               
.catch((e)=>{
   console.log(e)
})
