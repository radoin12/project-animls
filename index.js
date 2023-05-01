import  express   from "express";
//instance d' express
const app=express();
//importer module body-parser
import bodyParser from "body-parser";
app.use(bodyParser.urlencoded({extended:true}));
//configuration motor template ejs
app.set('view engine','ejs');               //configuration de l'extension
app.set('views','files/views');
//configuration port
const port = 3000;
app.listen(port, () => {console.log(`Example on port ${port}`)});
//configuration DB  ODM:Mongoose
//importer module mongoose
import mongoose from "mongoose";
//function connection server db
const connectDB=async()=>{
    const dbName="Pets";
    const url=`mongodb://127.0.0.1:27017/${dbName}`;
//connection url
    const cnx= await mongoose.connect(url);
    console.log(`DBName:${dbName}`);
    console.log(`url:${url}`);
}
connectDB();
import  homeAnimals  from "./files/routes/animals.js";
app.use(homeAnimals)