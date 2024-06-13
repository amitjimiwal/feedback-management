const addFeedBack = async (name: string, feedback: string) => {
     const payload = { name, feedback };
     try {
          const response = await fetch(`${import.meta.env.VITE_APP_BACKEND_URL}/feedback/add`, {
               method: "POST",
               headers: {
                    "Content-Type": "application/json",
               },
               body: JSON.stringify(payload)
          });
          const data = await response.json();
          return data.success;
     } catch (error: any) {
          console.error("Error adding feedback:", error.message);
     }
};

export { addFeedBack };