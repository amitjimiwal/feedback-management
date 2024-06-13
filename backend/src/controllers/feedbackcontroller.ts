import feedbacks from "../db/feedbackdb.js";
import { Request, Response } from "express";
import Feedback from "../lib/types/feedback.js";

const getAllFeedbacks = async (req: Request, res: Response) => {
     try {
          res.status(200).json({
               success: true,
               message: "All feedbacks fetched",
               total: feedbacks.length,
               data: feedbacks
          });
     } catch (error) {
          res.status(500).json({
               success: false,
               message: "Error in fetching feedbacks",
          });
     }
}

const addNewFeedback = async (req: Request, res: Response) => {
     try {
          const feedback: Feedback = req.body;
          if(!feedback.name || !feedback.feedback){
               throw new Error("Invalid payload");
          }
          feedbacks.push({ ...feedback, time: new Date() });
          res.status(201).json({
               success: true,
               message: "New feedback added",
               feedback: feedback
          });
     } catch (error:any) {
          res.status(500).json({
               success: false,
               message: error.message,
          });
     }
}
export { getAllFeedbacks ,addNewFeedback};