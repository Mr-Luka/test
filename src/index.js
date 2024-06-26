import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

 const digi = {
        digi1: {
            name: "Agumon",
            friend: "Taichi"
        },
        digi2: {
            name: "Gabumon",
            friend: "Koshiro"
        },
        digi3: {
            name: "Piyomon",
            friend: "Sora"
        },
        digi4: {
            name: "Palmon",
            friend: "Mimi"
        }
    }

export const digimon = () => {
    const messages = Object.values(digi).map(dig => `I love ${dig.name} and ${dig.friend}!`);
    return messages;
}
digimon()
