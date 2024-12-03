
import express from "express"
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { registerCompany, updateCompany,getCompany,getCompanyById } from "../controllers/company.controller.js";
const router=express.Router();

router.route("/registerCompany").post(isAuthenticated,registerCompany);
router.route("/getCompany").get(isAuthenticated,getCompany);
router.route("/get/:id").get(isAuthenticated,getCompanyById);
router.route("/Update/:id").put(isAuthenticated,updateCompany);
export default router;