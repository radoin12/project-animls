import mongoose from 'mongoose';
const animalSchema=mongoose.Schema({
    type:'',
    nom:'',
    url:'',
})
const pets=mongoose.model('animal',animalSchema)
export default pets
