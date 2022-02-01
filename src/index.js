import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



// ReactDOM.render(
//   <>
//   <h1>Pozdrav!</h1>
//   <p>Wie geht's?</p>
//   </>,
//   document.getElementById('root')
// );


// ReactDOM.render(
//   <div className='omotac'>
//   <h1>Pozdrav!</h1>
//   <p>Wie geht's?</p>
//   </div>,
//   document.getElementById('root')
// );

//Koristimo JSX za pisanje, a ne HTML
// const prom = <h1>Pozdrav!</h1>;

// ReactDOM.render(
//   <div>
//     {prom}
//     <p>Wie geht's?</p>
//   </div>,
//   document.getElementById('root')
// );



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
