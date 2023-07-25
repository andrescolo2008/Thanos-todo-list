import './style.css'

import { App } from './source/todos/app'; 

import todoStore from './source/store/todo.store';

 todoStore.initStore();

App('#app');


