import express from "express";
import { home } from "../controllers/homeController.js";
import { about } from "../controllers/aboutController.js";
import { project } from "../controllers/projectController.js";
import { resume } from "../controllers/resumeController.js";
import { CreateDoc } from "../controllers/createDocController.js";
import { readDoc } from "../controllers/readDocController.js";
import { deleteDoc } from "../controllers/deleteController.js";
import { CreateMsgDoc } from "../controllers/messageControllers/msgController.js";
const router=express.Router();

router.get('/',home);
router.get('/about',about);
router.get('/project',project);
router.get('/resume',resume);
router.post('/comment',CreateDoc);
router.get('/comment',readDoc);
router.get('/comment/:id',deleteDoc);
router.post('/',CreateMsgDoc);




export default router;