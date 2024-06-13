# Simple FeedBack Management

## Introduction

Simple system designed to handle user feedback efficiently. It allows users to submit feedback, which is then stored in a in memory database.

## Installation Steps

1. **Clone the repository**
    ```bash
    git clone https://github.com/amitjimiwal/feedback-management.git
    cd feedback-management
    ```

2. **Install the dependencies**
    ```bash
    npm run depinstall
    ```

3. **Set up environment variables**

    Create a `.env` file in the  `backend`  directory and add the following:
    ```
    PORT=3000
    ```
      Create a `.env` file in the  `frontend`  directory and add the following:
    ```
   VITE_APP_BACKEND_URL=http://localhost:5555
    ```

4. **Run the backend**
    ```bash
    npm run dev:backend
    ```
5. **Run the frontend**
    ```bash
    npm run dev:frontend
    ```
  See the root `package.json` file for more installation scripts
 
  The frontend will be running at `http://localhost:5173`.
  The backend will be running at `http://localhost:3000`.

## How It Works
![image](https://github.com/amitjimiwal/feedback-management/assets/90555965/bd76c580-0caa-47bc-b277-121984747276)


