import express from 'express';
import { signup, signin, signout, getUsers, checkUsername} from '../controllers/authController.js';


const router = express.Router();

router.post("/signup", signup)
router.post("/signin", signin)
router.post("/signout", signout)
router.get("/check-username",checkUsername);
router.get("/",getUsers);


export default router;