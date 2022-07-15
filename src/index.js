// import _ from 'lodash';
import './style.css';
import display from './data';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');
  const todo = document.getElementById('data');

  display();
  return element;
}

document.body.appendChild(component());