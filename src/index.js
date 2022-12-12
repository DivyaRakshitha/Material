import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import RegisterForm from './form';
//import Lifecycle from './console';
import App from './App';
//import EnhancedLikes from './like';
//import Hoc from './hoc';
//import Comment from './comment';
//import Counter from './counter';
//import ErrorBoundary from './ErrorBoundary';
import reportWebVitals from './reportWebVitals';
//import Error from './error';
//import {App, World } from './hellow';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
