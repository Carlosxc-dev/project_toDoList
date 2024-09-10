const tbody = document.querySelector("tbody");
const addForm = document.querySelector(".add-form");
const inputTask = document.querySelector(".input-task");
const number_html = document.querySelector(".n_task");

const url = "https://project-to-do-list-h4ox.vercel.app/";

//api node que faz requisicao para backend
const fetchTasks = async () => {
  const response = await fetch(`${url}/tasks`);
  const tasks = await response.json();
  console.log(tasks);
  return tasks;
};

const addTask = async (event) => {
  event.preventDefault();

  const task = { title: inputTask.value };

  await fetch(`${url}/tasks`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });

  loadTasks();
  inputTask.value = "";
};

const deleteTask = async (id) => {
  await fetch(`${url}/tasks/${id}`, {
    method: "delete",
  });

  loadTasks();
};

const updateTask = async ({ id, title, status }) => {
  await fetch(`${url}/tasks/${id}`, {
    method: "put",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, status }),
  });

  loadTasks();
};

const number_task = async () => {
  const res = await fetch(`${url}/tasks/number`);
  const count = await res.json();
  number_html.innerText = count;
};

const formatDate = (dateUTC) => {
  // Tenta criar uma nova data a partir da string fornecida
  console.log(dateUTC);
  const date = new Date(dateUTC);

  // Verifica se a data criada é válida
  if (isNaN(date.getTime())) {
    console.error("Invalid Date:", dateUTC);
    return "Data inválida";
  }

  // Configura as opções para a formatação
  const options = {
    dateStyle: "short",
    timeStyle: "short",
  };

  // Formata a data para o formato desejado
  return date.toLocaleString("pt-BR", options);
};

const createElement = (tag, innerText = "", innerHTML = "") => {
  const element = document.createElement(tag);

  if (innerText) {
    element.innerText = innerText;
  }

  if (innerHTML) {
    element.innerHTML = innerHTML;
  }

  return element;
};

const createSelect = (value) => {
  const options = `
    <option value="pendente">pendente</option>
    <option value="em andamento">em andamento</option>
    <option value="concluída">concluída</option>
  `;

  const select = createElement("select", "", options);

  select.value = value;

  return select;
};

const createRow = (task) => {
  const { id, title, createdAt, status } = task;
  console.log(createdAt);

  const tr = createElement("tr");
  tr.classList.add("tr_style");

  const tdTitle = createElement("td", title);
  const tdCreatedAt = createElement("td", formatDate(createdAt));
  const tdStatus = createElement("td");
  const tdActions = createElement("td");

  const select = createSelect(status);

  select.addEventListener("change", ({ target }) =>
    updateTask({ ...task, status: target.value })
  );

  const editButton = createElement(
    "button",
    "",
    '<span class="material-symbols-outlined">edit</span>'
  );
  const deleteButton = createElement(
    "button",
    "",
    '<span class="material-symbols-outlined">delete</span>'
  );

  const editForm = createElement("form");
  const editInput = createElement("input");

  editInput.value = title;
  editForm.appendChild(editInput);

  editForm.addEventListener("submit", (event) => {
    event.preventDefault();

    updateTask({ id, title: editInput.value, status });
  });

  editButton.addEventListener("click", () => {
    tdTitle.innerText = "";
    tdTitle.appendChild(editForm);
  });

  editButton.classList.add("btn-action");
  deleteButton.classList.add("btn-action");

  deleteButton.addEventListener("click", () => deleteTask(id));

  tdStatus.appendChild(select);

  tdActions.appendChild(editButton);
  tdActions.appendChild(deleteButton);

  tr.appendChild(tdTitle);
  tr.appendChild(tdCreatedAt);
  tr.appendChild(tdStatus);
  tr.appendChild(tdActions);

  return tr;
};

const loadTasks = async () => {
  const tasks = await fetchTasks();

  tbody.innerHTML = "";

  tasks.forEach((task) => {
    const tr = createRow(task);
    tbody.appendChild(tr);
  });

  number_task();
};

addForm.addEventListener("submit", addTask);

loadTasks();
