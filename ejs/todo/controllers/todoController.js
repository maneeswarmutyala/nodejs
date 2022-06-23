// const fetch =  require('node-fetch');
// import fetch from 'node-fetch';
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const todoController = async (req, res) => {
  if (req.method === "GET") {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos");
    let data = await response.json();
    res.render("index", { todos: data , title : 'Home' });
  }
};

module.exports = todoController;
