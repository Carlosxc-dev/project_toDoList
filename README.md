<div align="center"> <img src="work.webp"/> </div> <h1 align="center" style="font-weight: bold;">To-Do List 📝</h1>



<p align="center"> <a href="#started">Getting Started</a> • <a href="#routes">API Endpoints</a> • <a href="#colab">Collaborators</a> • <a href="#contribute">Contribute</a> </p> <p align="center"> <b>This project is a simple To-Do List application to manage tasks. It allows users to perform CRUD operations (Create, Read, Update, Delete) on tasks and is built using HTML, CSS, JavaScript for the frontend, Node.js for the backend, and MongoDB for the database.</b> </p> <h2 id="started">🚀 Getting Started</h2>
How to run the To-Do List project locally.

<h3>Prerequisites</h3>
Ensure the following tools are installed:

NodeJS
Git
MongoDB
VSCode
<h3>Cloning</h3>
To clone the project:

bash
Copiar código
git clone https://github.com/Carlosxc-dev/project_to_do_list.git
<h3> Environment Variables</h3>
Create a .env file at the root of your backend with the following variables:

bash
Copiar código
PORT={your_port}
DATABASE_URL="{your_mongodb_connection_url}"
<h3>Starting</h3>
Steps to run the project:

In one terminal tab, navigate to the backend folder and run:

bash
Copiar código
cd project_to_do_list/backend
npm install
npm run dev
In another terminal tab, navigate to the frontend folder and run:

bash
Copiar código
cd project_to_do_list/frontend
npm install
npm run dev
Then, open your browser and visit http://localhost:5173.

<h2 id="routes">📍 API Endpoints</h2>
Here is the list of API routes used in the To-Do List application.

Route	Description
<kbd>GET /tasks</kbd>	Get all tasks in the database
<kbd>POST /tasks</kbd>	Create a new task
<kbd>PUT /tasks/
</kbd>	Update an existing task
<kbd>DELETE /tasks/
</kbd>	Delete a task
<kbd>GET /tasks/number</kbd>	Get the total number of tasks
<h3 id="get-tasks">GET /tasks</h3>
RESPONSE

json
Copiar código
[
  {
    "id": 1,
    "task": "Buy groceries",
    "completed": false
  }
]
<h3 id="post-tasks">POST /tasks</h3>
REQUEST

json
Copiar código
{
  "task": "Buy groceries"
}
RESPONSE

json
Copiar código
{
  "message": "Task created successfully",
  "data": {
    "id": 1,
    "task": "Buy groceries",
    "completed": false
  }
}
<h3 id="put-tasks">PUT /tasks/:id</h3>
REQUEST

json
Copiar código
{
  "task": "Buy groceries",
  "completed": true
}
RESPONSE

json
Copiar código
{
  "message": "Task updated successfully",
  "data": {
    "id": 1,
    "task": "Buy groceries",
    "completed": true
  }
}
<h3 id="delete-tasks">DELETE /tasks/:id</h3>
RESPONSE

json
Copiar código
{
  "message": "Task deleted successfully",
  "data": {
    "id": 1,
    "task": "Buy groceries",
    "completed": true
  }
}
<h2 id="colab">🤝 Collaborators</h2> <table> <tr> <td align="center"> <a href="#"> <img src="https://avatars.githubusercontent.com/u/61745249?s=400&u=743a07edff42551fed704856e78c3a9e3f556580&v=4" width="100px;" alt="Carlos Profile Picture"/><br> <sub> <b>Carlos Henrique</b> </sub> </a> </td> </tr> </table> <h3>Documentation</h3>
📝 How to create a Pull Request
💾 Commit pattern
