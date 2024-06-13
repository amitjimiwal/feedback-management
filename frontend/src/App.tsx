import { useEffect, useState } from "react";
import "./App.css";
import FeedBack from "./components/FeedBack";
import Form from "./components/Form";
import Feedback from "./lib/type";
function App() {
  const [total, setTotal] = useState<number>(0);
  const [feedbacks, setFeedBacks] = useState<Feedback[] | []>([]);
  useEffect(() => {
    if (window.Worker) {
      const worker = new Worker(new URL("./worker.ts", import.meta.url));
      worker.onmessage = (e) => {
        console.log("Worker said: ", e.data);
        setTotal(e.data.total);
        setFeedBacks(e.data.data);
      };
    }
  }, []);
  return (
    <div className="page">
      <div className="title">
        <h1>Feedback Website</h1>
        <p>Give Feedback about anything</p>
      </div>
      <Form />
      <h3>All Feedbacks</h3>
      <h4>Total Feedbacks: {total}</h4>
      <div className="container">
        {feedbacks &&
          feedbacks.map((feedback, index) => (
            <FeedBack
              key={index}
              name={feedback.name}
              feedback={feedback.feedback}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
