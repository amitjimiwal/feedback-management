import { Router } from "express";
import { addNewFeedback, getAllFeedbacks } from "../controllers/feedbackcontroller.js";

export const feedBackRouter: Router = Router();

feedBackRouter.route('/all').get(getAllFeedbacks);
feedBackRouter.route('/add').post(addNewFeedback);
