import { Router } from "express";
import addStudent from "../controllers/addStudent.js";
import edit from "../controllers/edit.js";
import remove from "../controllers/delete.js";
import view from "../controllers/view.js";

const router = Router();

router.get("/", view);
router.post("/addstudent", addStudent);
router.post("/:id", edit);
router.post("/:id", remove);

export default router;
