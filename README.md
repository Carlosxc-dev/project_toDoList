[JAVASCRIPT__BADGE]: https://img.shields.io/badge/Javascript-000?style=for-the-badge&logo=javascript

<h1 align="center" style="font-weight: bold;">Project ToDoList 💻</h1>

![javascript][JAVASCRIPT__BADGE]
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Google Chrome](https://img.shields.io/badge/Google%20Chrome-4285F4?style=for-the-badge&logo=GoogleChrome&logoColor=white)
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
![Insomnia](https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE)
![Medium](https://img.shields.io/badge/Medium-12100E?style=for-the-badge&logo=medium&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

<p align="center">
 <a href="#about">About</a> • 
 <a href="#started">Getting Started</a> • 
  <a href="#started">App Routes</a> • 
  <a href="#colab">Collaborators</a> •
 <a href="#contribute">Contribute</a>
</p>


<p align="center">
    <img src="image_capa_todolist.png" alt="Image Example" width="1000px">
</p>

<h2 id="started">📌 About</h2>

ToDoList é um projeto desenvolvido para aplicar conceitos de frontend e backend. Ele permite ao usuário criar, visualizar, editar e excluir tarefas em uma lista de afazeres. No frontend, utiliza HTML, CSS e JS para uma interface simples e interativa, enquanto o backend com express gerencia os dados das tarefas com MongoDB. O objetivo é praticar a integração entre essas tecnologias e criar uma aplicação funcional para o gerenciamento de tarefas diárias.

[Acesse o site aqui !](https://project-to-do-list-fawn.vercel.app/)


<h2 id="started">🚀 Getting started</h2>

<h3>Prerequisites</h3>

<ul>
  <li><a href="https://nodejs.org/">Node.js</a> (LTS version recommended)</li>
  <li><a href="https://git-scm.com/">Git</a> (version 2.0 or higher)</li>
  <li><a href="https://www.prisma.io/">Prisma ORM</a> (for database management)</li>
  <li><a href="https://code.visualstudio.com/">Visual Studio Code (VS Code)</a> (recommended IDE)</li>
</ul>


<h3>Cloning</h3>

```bash
git clone https://github.com/Carlosxc-dev/project_toDoList.git
```


<h3> Environment Variables</h2>

Use the `process.env.SERVER_PORT` as reference to create your configuration file `.env` with your environment variables

```yaml
DATABASE_URL="{bancoDados}://{user}:{password}@localhost:{port}/{nameDatabase}?schema=public"
SERVER_PORT = {port}
```

<h3>Starting</h3>

Em uma aba do terminal(cmd) executar:

```bash
cd project_toDoList/backend
npm install .
npm run start
```

Na pasta do projeto:

```bash
cd project_toDoList/frontend
abrir no navegador o arquivo index.html para ver a pagina
```

<h2 id="routes">📍 Application Routes</h2>
​
<table>
  <tr>
    <th>Route</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><kbd>/tasks</kbd></td>
    <td>Retrieves all tasks from the database.</td>
  </tr>
  <tr>
    <td><kbd>/tasks</kbd></td>
    <td>Creates a new task.</td>
  </tr>
  <tr>
    <td><kbd>/tasks/:id</kbd></td>
    <td>Deletes a specific task by ID.</td>
  </tr>
  <tr>
    <td><kbd>/tasks/:id</kbd></td>
    <td>Updates a specific task by ID.</td>
  </tr>
  <tr>
    <td><kbd>/tasks/number</kbd></td>
    <td>Retrieves the total number of tasks.</td>
  </tr>
</table>




<h2 id="colab">🤝 Collaborators</h2>

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/61745249?s=400&u=743a07edff42551fed704856e78c3a9e3f556580&v=4" width="100px;" alt="Carlos Profile Picture"/><br>
        <sub>
          <b>Carlos Henrique</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

<h2 id="contribute">📫 Contribute</h2>

1. `git clone https://github.com/Carlosxc-dev/project_toDoList.git`
2. `git checkout -b feature/NAME`
3. Follow commit patterns
4. Open a Pull Request explaining the problem solved or feature made, if exists, append screenshot of visual modifications and wait for the review!

<h3>Documentations that might help</h3>

[📝 How to create a Pull Request](https://www.atlassian.com/br/git/tutorials/making-a-pull-request)

[💾 Commit pattern](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716)
