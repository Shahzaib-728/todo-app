# ✅ Todo App (MERN Stack)

A full-stack **Task Manager** built using **React**, **Node.js**, **Express**, and **MongoDB Atlas**.  
Manage your todos efficiently with authentication, deadlines, and completion tracking.

---

## 🧩 Features

- 🔐 **User Authentication (JWT)** — secure login & registration  
- 🧠 **CRUD Operations** — add, edit, delete, toggle, and filter tasks  
- ⏰ **Task Deadlines** — set due date & time for each task  
- 💾 **Persistent Storage** — tasks saved on **MongoDB Atlas** + **localStorage**  
- 🪶 **Beautiful UI** — built with **React + Tailwind CSS**  
- 🌐 **RESTful API** with Express.js  
- 🧰 **Context API / Redux-ready** for state management  

---

## 🗂️ Project Structure
todo-app/
│
├── backend/
│ ├── server.js
│ ├── config/
│ │ └── db.js
│ ├── controllers/
│ │ ├── authController.js
│ │ └── todoController.js
│ ├── models/
│ │ ├── User.js
│ │ └── Todo.js
│ ├── middleware/
│ │ └── authMiddleware.js
│ └── routes/
│ ├── authRoutes.js
│ └── todoRoutes.js
│
├── frontend/
│ ├── src/
│ │ ├── services/
│ │ │ └── api.js
│ ├── context/
│ │ │ └── TaskContext.jsx
│ │ ├── components/
│ │ │ ├── TaskForm.jsx
│ │ │ ├── TaskList.jsx
│ │ │ ├── TaskItem.jsx
│ │ │ ├── TaskFilter.jsx
│ │ ├── pages/
│ │ │ ├── Login.jsx
│ │ │ ├── Signup.jsx
│ │ │ └── TodoDashboard.jsx
│ │ ├── App.jsx
│ │ └── main.jsx
│ └── package.json

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/<your-username>/todo-app.git
cd todo-app

cd backend
npm install
npm run dev

MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_secret_key
PORT=5000


cd ../frontend
npm install
npm run dev

🧠 Tech Stack

Frontend: React, Context API, Tailwind CSS, Axios
Backend: Node.js, Express.js, JWT, bcryptjs
Database: MongoDB Atlas
Tools: Git, Vite, Nodemon

🧑‍💻 Author

Muhammad Shahzaib
🚀 Passionate MERN Stack Developer
📬 Connect on LinkedIn
🌐 GitHub Profile
