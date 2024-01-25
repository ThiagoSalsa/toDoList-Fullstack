const connection = require('./connection');

const getAll = async() => {
    const [tasks] = await connection.execute('SELECT * FROM tasks');
    return tasks;
};

const createTask = async(task) => {
    
    const { title } = task;

    const dateUTC = new Date(Date.now()).toUTCString();

    const createdTask = await connection,execute('INSERT INTO tasks(title, status, created_at) VALUES (?, ?, ?)' [1, 'pendente', dateUTC]);

    return createdTask;

}
 
module.exports = {
    getAll,
    createTask
}