const tbody = document.querySelector('tbody');

const fetchTasks = async() => {
    const response = await fetch('http://localhost:3333/tasks');
    const tasks = await response.json()
    return tasks;
}

const createElement = (tag, innerText = '') => {
    const element = document.createElement(tag);
    element.innerText = innerText;
    return element;
}

const task = {
    id: 1,
    title: 'Estude mais',
    create_at: '00 Janeiro de 2023 00:12',
    status: 'pendente'
}

const createRow = (task) => {

    const { id, title, create_at, status } = task;

    const tr = createElement('tr')
    const tdTitle = createElement('td', title);
    const tdCreatedAt = createElement('td', create_at);
    const tdStatus = createElement('td');
    const tdActions = createElement('td');

    const editButton = createElement('button')
}
