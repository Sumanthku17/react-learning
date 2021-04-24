// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();




// const person = 
// {
//   name : 'Mosh',
//   talk() {},
//   walk() {
//     console.log(this);
//   }
// }

// person.walk();

//const walk = person.walk.bind(person);
//walk();


// const person1 =
// {
//   name : "mosh",
//   jump() {
//     setTimeout(function() {
//       console.log("this",this);
//     },1000);
//   }
// }

// person1.jump(); //returns window object as output.


// const person =
// {
//   name : "mosh",
//   jump() {
//     setTimeout(() => {
//       console.log("this",this);
//     },1000);
//   }
// }

// person.jump(); //arrow function helps in getting inheritence of the person object's method jump.


const colors =['red','green','yellow'];
const vari = colors.map(color => `<li>${color}</li>`);
console.log(vari);