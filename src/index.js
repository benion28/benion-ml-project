import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Buffer } from 'buffer';
import crypto from 'crypto-browserify';
import { Stream } from 'stream-browserify';
import { Util } from 'util';
import { createContext, runInContext } from 'vm-browserify';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
// Example usage:
const buf = Buffer.from('hello world', 'utf8');
console.log(buf.toString('hex'));

// Using crypto
const hash = crypto.createHash('sha256');
hash.update('hello world');
console.log(hash.digest('hex'));

// Using Stream
const stream = new Stream();
console.log(stream);

// Using Util
console.log(Util);

// Using vm-browserify
const context = createContext();
const code = 'console.log("Hello from vm-browserify!")';
runInContext(code, context);

console.log(process.env.REACT_APP_API_URL);

root.render(
 <BrowserRouter>
  <App />
 </BrowserRouter>
  
); 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
