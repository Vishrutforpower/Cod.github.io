import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import { nanoid } from 'nanoid';

function HelloWorld() {
  return (
    <form>
      <label>Text input: 
        <input type="text" required/>
      </label>
    </form>
  );
}

function TextInput() {
  return (
    <form>
      <label>File input:
        <input type="file" required/>
      </label>
    </form>
  );
}

const hel = nanoid();


function SendForm() {
  const shoot = () => {
    alert("Your form has been submitted!" + hel);
  }

  return <button onClick={shoot}>Submit</button>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelloWorld />
    <TextInput />
    <SendForm />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
