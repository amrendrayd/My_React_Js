import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import Main from './themeSwitcher/Main';
import TodosMain from './todos/TodosMain';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Main/> */}
    <TodosMain/>
  </React.StrictMode>
);


