
const getAllFeedbacks = async () => {
     try {
          const response = await fetch(`http://localhost:5555/feedback/all`);
          const data = await response.json();
          return data;
     } catch (error: any) {
          console.error("Error fetching feedback:", error.message);
     }
};
getAllFeedbacks().then((response) => {
     if (response) {
          console.log(response);
          self.postMessage(response);
     }
});