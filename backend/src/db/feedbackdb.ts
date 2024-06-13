import Feedback from "../lib/types/feedback.js";

const feedbacks: Feedback[] = [{
     name: "John Doe",
     feedback: "Great feedback Management System",
     time: new Date(),
}, {
     name: "Amit",
     feedback: "I love this website. I have used many feedback websites but this is the best one. I will recommend this to my friends",
     time: new Date(),
}];
//generate feedbacks
for (let i = 0; i < 100; i++) {
     feedbacks.push({
          name: `User ${i}`,
          feedback: `This is the feedback from user ${i}`,
          time: new Date(),
     });
}
export default feedbacks;