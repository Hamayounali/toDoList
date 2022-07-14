import _ from 'lodash';
import './style.css';
import printMe from './print.js';
import display from './data';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');
  const todo = document.getElementById("data");

  btn.innerHTML = 'Click me';
  btn.onclick = printMe;

  todo.appendChild(btn);
  display();
  return element;
}

document.body.appendChild(component());