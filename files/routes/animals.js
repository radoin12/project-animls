import  express  from "express";
import {saveAnimals, homeAnimals,deleteAnimals,delAnimals} from "../controllers/animalsControler.js"
const router=express.Router();
router.route('/:param').get(homeAnimals);
export default router
router.route('/:param').post(saveAnimals);
router.route('/delete/:id').get(deleteAnimals);
router.route('/deleteAll').get(delAnimals);
