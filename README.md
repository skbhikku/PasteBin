📝 PasteBin Clone (MERN Stack)

A full-stack PasteBin-like web application where users can create, store, and share text snippets easily. Built using React.js, Node.js, Express.js, and MongoDB.


---

🚀 Features

Create and save text pastes

Generate unique shareable links

View pastes using URL with time limit and view limit

RESTful API integration

Clean and simple UI

Fully functional frontend–backend integration



---

🛠️ Tech Stack

Frontend

React.js

JavaScript (ES6+)

Fetch API


Backend

Node.js

Express.js

MongoDB

Mongoose



---

📂 Project Structure

PasteBin/
├── frontend/
│   ├── src/
│   ├── package.json
│   └── ...
├── backend/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json


---

⚙️ Installation & Setup

1️⃣ Clone the Repository

git clone https://github.com/skbhikku/PasteBin.git
cd PasteBin

2️⃣ Backend Setup

cd backend
npm install
node server.js

Create a .env file:

MONGO_URI=your_mongodb_connection_string
PORT=5000


---

3️⃣ Frontend Setup

cd frontend
npm install
npm start


---

🔗 API Endpoints

Method	Endpoint	Description

POST	/api/paste	Create new paste
GET	/api/paste/:id	Get paste by ID



---

📌 Key Learnings

MERN stack integration

REST API design

React lifecycle & hooks

Handling JSON responses correctly

Debugging frontend–backend communication issues


👤 Author

Shaik Bhikku

GitHub: https://github.com/skbhikku



⭐ Acknowledgements

This project was built to improve full-stack development skills and understand real-world React + Node integration.

