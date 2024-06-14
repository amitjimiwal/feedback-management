
const getAllFeedbacks = async () => {
     try {
          const response = await fetch(`http://localhost:5555/feedback/all`);
          const data = await response.json();
          return data;
     } catch (error: any) {
          console.error("Error fetching feedback:", error.message);
     }
};
const getPaginatedFeedbacks = async (page: number) => {
     try {
          const response = await fetch(`http://localhost:5555/feedback/paginate/${page}`);
          const data = await response.json();
          return data;
     } catch (error: any) {
          console.error("Error fetching feedback:", error.message);
     }
}
self.onmessage = ({ data }) => {
     getPaginatedFeedbacks(data).then((response) => {
          if (response) {
               console.log(response);
               self.postMessage(response);
          }
     });
}