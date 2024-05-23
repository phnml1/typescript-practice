"use strict";
const btn = document.getElementById('btn');
const input = document.getElementById('todoinput');
const form = document.querySelector('form');
const list = document.getElementById('todolist');
const todos = readTodos();
todos.forEach(createTodo);
// 타입스크립트는 이미 알고있음
// HTML element 반환
// 어떤요소인지를 확실히는 모르므로 HTML element타입
// !는 non null 즉 확실히 요소가 존재한다고(null이 아니라고) 단언
function readTodos() {
    const todosJSON = localStorage.getItem('todos');
    if (todosJSON === null)
        return [];
    return JSON.parse(todosJSON);
}
function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
        text: input.value,
        completed: false,
    };
    createTodo(newTodo);
    todos.push(newTodo);
    localStorage.setItem('todos', JSON.stringify(todos));
    input.value = '';
}
function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}
function createTodo(todo) {
    const newLI = document.createElement("LI");
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;
    checkbox.addEventListener('change', function () {
        todo.completed = checkbox.checked;
        saveTodos();
    });
    newLI === null || newLI === void 0 ? void 0 : newLI.append(todo.text);
    newLI.append(checkbox);
    list === null || list === void 0 ? void 0 : list.append(newLI);
}
form.addEventListener('submit', handleSubmit);
// ?는 btn이 존재할경우
// btn?.addEventListener('click', function () {
//   // console.dir로 prototype보면 타입볼수있음
//   alert(input.value);
//   input.value ='';
// });
// 타입 단언
const mystery = "Hello world!";
const numChars = mystery.length;
