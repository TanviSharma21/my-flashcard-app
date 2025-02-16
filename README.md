# Flashcard Learning App with the Leitner System

The Flashcard Learning App is a MERN stack web application that leverages the powerful Leitner System— a spaced repetition technique commonly used for flashcards—to help users efficiently learn and retain information. Instead of a generic task manager, this app is focused on flashcard-based learning, allowing users to create, review, and track their progress using the Leitner System.

## Table of Contents
- [Features](#features)
- [Project Structure](#project-structure)
- [Setup & Installation](#setup--installation)
- [Backend API](#backend-api)
- [Frontend](#frontend)
- [Bonus Features](#bonus-features)
- [Thought Process & Evaluation Criteria](#thought-process--evaluation-criteria)
- [Deployment](#deployment)
- [License](#license)

## Features
- **Flashcard Management:**  
  - Create, read, update, and delete flashcards.
  - Each flashcard includes a question, answer, current box level, and next review date.
- **Leitner System Implementation:**  
  - Flashcards start in Box 1.
  - Correct answers move a card to the next box; incorrect answers reset it to Box 1.
  - Higher boxes have longer review intervals.
- **User Authentication (JWT):**  
  - Secure login and registration to allow users to save their progress.
- **Modern UI/UX:**  
  - A clean, minimal, and professional design.
  - Dark mode toggle for better user experience during low-light conditions.
  - Smooth animations (using Framer Motion) for transitions and interactive elements.
- **Responsive Design:**  
  - Optimized for various devices with a distraction-free interface.

## Project Structure

```
├── backend
│   ├── models
│   │   ├── Flashcard.js
│   │   └── User.js
│   ├── routes
│   │   ├── flashcards.js
│   │   └── auth.js
│   ├── middleware
│   │   └── auth.js
│   ├── server.js
│   └── .env
│
└── frontend
    ├── public
    ├── src
    │   ├── components
    │   │   ├── Navbar.jsx
    │   │   ├── Flashcard.jsx
    │   │   ├── FlashcardList.jsx
    │   │   ├── Login.jsx
    │   │   └── Register.jsx
    │   ├── pages
    │   │   ├── Home.jsx
    │   │   └── Dashboard.jsx
    │   ├── context
    │   │   └── AuthContext.js
    │   ├── App.jsx
    │   └── main.jsx
    ├── package.json
    ├── vite.config.js
    └── .env
```

## Setup & Installation

### Prerequisites
- Node.js (v14 or later)
- npm (or yarn)
- MongoDB Atlas account (for backend database)

### Backend Setup
1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend` folder with the following content (replace placeholders with your actual values):
   ```
   MONGO_URI=mongodb+srv://<your_username>:<your_password>@cluster0.mongodb.net/flashcards?retryWrites=true&w=majority
   JWT_SECRET=mySuperSecretKey123
   PORT=5001
   ```
4. Start the backend server:
   ```bash
   node server.js
   ```
   You should see messages indicating that the server is running and connected to MongoDB.

### Frontend Setup
1. Navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
   Make sure additional packages are installed:
   - `@mui/material`
   - `@mui/icons-material`
   - `axios`
   - `react-router-dom`
   - `framer-motion`
3. Start the frontend development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to the URL provided by Vite (commonly `http://localhost:3000`).

## Backend API

The backend API is built using Node.js, Express, and MongoDB (via Mongoose). It provides the following endpoints:

- **POST /flashcards:**  
  Add a new flashcard.
- **GET /flashcards:**  
  Retrieve all flashcards (filtered by next review date if implementing spaced repetition logic).
- **PUT /flashcards/:id:**  
  Update a flashcard (e.g., move it to the next box if answered correctly).
- **DELETE /flashcards/:id:**  
  Delete a flashcard.
- **Authentication Endpoints:**
  - **POST /api/auth/register:** Register a new user.
  - **POST /api/auth/login:** Log in a user and return a JWT token.

The Leitner System logic is implemented in the backend, where flashcards progress through different boxes based on user responses.

## Frontend

The frontend is built with React and uses Material UI for styling, Framer Motion for animations, and Axios for API requests. Key features include:

- A professional Home page with a full-screen background, gradient overlay, and call-to-action button.
- Authentication pages (Login and Register) that interact with the backend and store JWT tokens.
- A Dashboard page that fetches and displays flashcards, indicating which ones are due for review.
- A minimal, clean UI with dark mode toggle and smooth animations.

## Bonus Features

- **Login System (JWT Auth):**  
  Users can register and log in to save their progress.
- **Dark Mode Toggle:**  
  A toggle button in the Navbar allows users to switch between light and dark themes.
- **Animations (Framer Motion):**  
  Smooth transitions and animations enhance the user experience.
- **Deployment:**  
  The project is ready for deployment on platforms like Vercel, Render, or Heroku.

## Thought Process & Evaluation Criteria

- **Code Quality & Best Practices:**  
  The code is modular, clean, and adheres to best practices.
- **Leitner System Implementation:**  
  The flashcards follow the spaced repetition Leitner System, with correct transitions between boxes.
- **UI/UX Simplicity & Usability:**  
  The interface is minimal, modern, and user-friendly, with features like dark mode for better user experience.
- **API Integration & State Management:**  
  The frontend uses Axios to communicate with the backend and manages state with React Hooks.
- **Bonus Features:**  
  Additional features such as JWT authentication, dark mode, and animations further enhance the app.

## Deployment

- **Backend:**  
  Deploy the backend on services such as Render, Heroku, or AWS.
- **Frontend:**  
  Deploy the frontend on platforms like Vercel or Netlify.
- Ensure environment variables are correctly configured in the deployment environment.

## License

This project is licensed under the MIT License.

---

Feel free to contribute, open issues, or suggest improvements. Happy learning and coding!
```
