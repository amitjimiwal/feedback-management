import { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./App.css";
import FeedBack from "./components/FeedBack";
import Form from "./components/Form";
import Feedback from "./lib/type";
function App() {
  const page = useRef<number>(1);
  const [worker] = useState<Worker>(
    new Worker(new URL("./worker.ts", import.meta.url))
  );
  const observableRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDivElement>(null);
  const [total, settotal] = useState<number>(0);
  const [feedbacks, setFeedBacks] = useState<Feedback[] | []>([]);
  function getMoreFeedbacks() {
    if (window.Worker) {
      worker.postMessage(page.current);
      worker.onmessage = (e) => {
        console.log("Worker said: ", e.data);
        if (page.current < e.data.totalPages+2) {
          page.current++;
        } else {
          return;
        }
        settotal(e.data.totalFeedbacks);
        setFeedBacks((prev) => [...prev, ...e.data.data]);
      };
    }
  }
  const options = {
    root: null,
    threshold: 0,
  };
  // useLayoutEffect(() => {
  //   getMoreFeedbacks();
  // }, []);
  useEffect(() => {
    if (ref.current) {
      const observer = new IntersectionObserver(([entries]) => {
        const scrolled = `${Math.floor(entries.intersectionRatio * 100)}%`;
        console.log(`You've scrolled ${scrolled} of the container`);
        console.log(entries.intersectionRatio);
        console.log("fetching page", page.current);
        getMoreFeedbacks();
      }, options);
      observer.observe(ref.current);
      return () => {
        observer.disconnect();
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
      <h3 className="text">All Feedbacks</h3>
      <h4 className="text">Total Feedbacks: {total}</h4>
      <div className="container" ref={observableRef}>
        {feedbacks &&
          feedbacks.map((feedback, index) => (
            <FeedBack
              key={index}
              name={feedback.name}
              feedback={feedback.feedback}
            />
          ))}
      </div>
      <div ref={ref} className="observer"></div>
    </div>
  );
}

export default App;
