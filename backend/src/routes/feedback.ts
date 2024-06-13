import { Router } from "express";
import { addNewFeedback, getAllFeedbacks } from "../controllers/feedbackcontroller.js";
import { rateLimit } from 'express-rate-limit'
const limiter = rateLimit({
     windowMs: 10 * 1000, // 10 seconds 
     limit: 1,
     standardHeaders: 'draft-7',
     legacyHeaders: false,
})
export const feedBackRouter: Router = Router();

feedBackRouter.route('/all').get(getAllFeedbacks);
feedBackRouter.route('/add').post(limiter, addNewFeedback);
