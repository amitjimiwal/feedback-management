import React, { useRef } from "react";
import { addFeedBack } from "../api/feedback";

const Form = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const feedbackRef = useRef<HTMLInputElement>(null);
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = nameRef.current?.value;
    const feedback = feedbackRef.current?.value;
    if (!name || !feedback) {
      alert("Please enter a name and feedback");
      return;
    }
    const data = await addFeedBack(name, feedback);
    if (data) alert("Feedback added successfully");
    else alert("Error in adding feedback");
  };
  return (
    <form className="form" onSubmit={submitHandler}>
      <input type="text" placeholder="Name" id="name" ref={nameRef} />
      <input
        type="text"
        placeholder="Feedback"
        id="feedback"
        ref={feedbackRef}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
