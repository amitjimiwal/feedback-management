import feedbacks from "../db/feedbackdb.js";
import { Request, Response } from "express";
import Feedback from "../lib/types/feedback.js";

const getAllFeedbacks = async (req: Request, res: Response) => {
     console.log(req.ip);
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
          if (!feedback.name || !feedback.feedback) {
               throw new Error("Invalid payload");
          }
          feedbacks.push({ ...feedback, time: new Date() });
          res.status(201).json({
               success: true,
               message: "New feedback added",
               feedback: feedback
          });
     } catch (error: any) {
          res.status(500).json({
               success: false,
               message: error.message,
          });
     }
}
const getPaginatedFeedbacks = async (req: Request<{
     page: number
}, {
     count : number
}>, res: Response) => {
     let { page } = req.params;
     if (!page) page = 1;
     let { count } = req.body;
     if (!count ) count = 10;
     try {
          const totalPages = Math.floor(feedbacks.length / count);
          if (page > totalPages+1) {
               throw new Error("Exceed");
          }
          const startindex = (page - 1) * count;
          const endIndex = startindex + count ;
          const requiredFeedbacks = feedbacks.reverse().slice(startindex, endIndex);
          return res.status(200).json({
               success: true,
               page,
               totalPages,
               totalFeedbacks:feedbacks.length,
               data: requiredFeedbacks
          })
     } catch (err: any) {
          return res.status(500).json({
               success: false,
               message: err.message
          })
     }
}
export { getAllFeedbacks, addNewFeedback, getPaginatedFeedbacks };