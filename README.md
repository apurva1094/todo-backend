📌 Todo App Backend (Node.js + Express + MongoDB)



A simple and clean backend API for managing todo tasks.

Includes full CRUD operations with MongoDB integration.



🚀 Features



Create a new todo



Get all todos



Get a single todo by ID



Update a todo



Delete a todo



MongoDB Atlas connection



.env configuration



Clean folder structure



📁 Folder Structure

todo-backend/

│── models/

│   └── todoModel.js

│── routes/

│   └── todoRoutes.js

│── server.js

│── package.json

│── .env



⚙️ Tech Stack



Node.js



Express.js



MongoDB + Mongoose



Nodemon



🔌 API Endpoints

POST /api/todos



Create todo

Body:



{

&nbsp; "title": "My first todo"

}



GET /api/todos



Fetch all todos



GET /api/todos/:id



Fetch a single todo by ID



PUT /api/todos/:id



Update todo

Body:



{

&nbsp; "title": "Updated todo",

&nbsp; "completed": true

}



DELETE /api/todos/:id



Delete todo



🛠 Setup Instructions

Install dependencies

npm install



Create .env file

MONGO\_URI=your\_connection\_string

PORT=5000



Start server

npm start



✅ Status



✔ All CRUD routes implemented

✔ Connected to MongoDB

✔ Tested using Postman

✔ Fully functional



🧑‍💻 Author



Apurva Chaudhari



