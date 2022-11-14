import React from 'react'; // Імпотрую бібліотеку React
import ReactDOM from 'react-dom/client';

import App from './components/app/app'; // Імпортую файл

import './index.scss'; // Імпортую стилі

// створюю зміну яка передає всі дані в div який знаходиться в index.html
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App/>
);
