import express from 'express';
import { signup, signin, signout, getUsers} from '../controllers/authController.js';


const router = express.Router();

router.post("/signup", signup)
router.post("/signin", signin)
router.get("/signout", signout)
router.get("/users/",getUsers);
router.get("/",getUsers);


export default router;