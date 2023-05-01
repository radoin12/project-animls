import asynchandler from 'express-async-handler';
import pets from '../models/animalsModel.js';
const homeAnimals= asynchandler(async(req,res)=>{
    let param=req.params.param
    if(param=='all'){
        const detail=null 
        const animalees=await pets.find()
    res.render('animals/index',{animals:animalees,keyUpdate:detail});
    }else{
        const animalees=await pets.find()
        const detail=await pets.findById(param)
        res.render('animals/index',{animals:animalees,keyUpdate:detail});
    }
});
const saveAnimals=asynchandler(async(req,res)=>{
    const animal=new pets({
        type:req.body.type,
        nom:req.body.nom,
        url:req.body.url,
    })
    let param=req.params.param
    if(param!='all'){
        const detail=await pets.findByIdAndUpdate(param,{
            type:req.body.type,
            nom:req.body.nom,
            url:req.body.url,
        },{new:true})
    }else{
        await animal.save();
    }
    res.redirect('/all');
});
const deleteAnimals=asynchandler(async(req,res)=>{
    let id=req.params.id
   await  pets.findByIdAndDelete(id)
    res.redirect('/all')
});
const delAnimals=asynchandler(async(req,res)=>{
    await pets.remove()
    res.redirect('/all')
})
export {saveAnimals, homeAnimals,deleteAnimals,delAnimals}