
const User= require('../module/user');

exports.datacontroller = (req,res,next)=>
{
  
    res.render('form',{
        path:'/data'
    })
}

exports.savedatacontoller= (req,res,next) =>
{
  
  const expenseamount = req.body.expenseamount;
   const description= req.body.description;
   const category = req.body.category;
   

   User.create({
    expenseamount:expenseamount,
    description:description,
    category:category
    
   })
   .then(()=>{
    res.redirect('/print') ;
   })
   .catch((err)=>{
    res.send('Not Found')
   })

}

exports.fetch= (req,res,next)  =>{
User.findAll()
.then((result)=>{
    res.render('table',{
        prod:result
    })
 
}).catch((err)=>{
    res.send("No Data")
})
}

exports.show=(req,res,next) =>{
    let userid=req.params['id']

   User.findAll({where:{id:userid}})
    .then((result)=>{
        res.render('product_details',{
        prod:result
        });
       
    }).catch((err)=>{
        res.send("Not Found")
    })
}

exports.delete= (req,res,next)=>{
    
    let userid=req.params['id']
    console.log(userid)

    User.destroy({where:{id:userid}})
    .then((result)=>{
        res.redirect('/print')
    })
    .catch((e)=>{
        res.send("Not  Found")
    })
    
}

exports.update = (req,res,next) =>{

    let userid = req.params['id']

   User.findAll({where:{id:userid}})
    .then((result)=>{
      
        res.render('update',{
        prod:result
        });
       
    }).catch((err)=>{
        res.send("Not Found")
    })
}

exports.edit= async (req,res,next) =>{
    const p={
         expenseamount : req.body.expenseamount,
         description: req.body.description,
         category : req.body.category,
    }
     const userid= req.body.id  
   await User.update(p,{where:{id:userid}})
   .then((result)=>{
    console.log(result);
       res.redirect('/print')
   })
   .catch((e)=>{console.log(e)})
}

