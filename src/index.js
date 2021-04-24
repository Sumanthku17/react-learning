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


// const colors =['red','green','yellow'];
// const vari = colors.map(color => `<li>${color}</li>`);
// console.log(vari); // arr.map funtion


// const sumanth =
// {
//   name:"nanu",
//   age:"",
//   class:""
// }

// //  const nm = sumanth.name;
// // const ag = sumanth.age;
// // const cl = sumanth.class;

// const {name : nm, age : ag, class : cl}= sumanth; // this object destructuring i.e. instead of above 3 lines u can use this single line
// console.log(nm);


const first = [1, 3, 6]
const second = [2, 4, 5]
const combined1 = first.concat(second);
const combined2 = [...first,0,...second]; // spread operator[...arr1,2,4,...arr2]
console.log(combined1);
console.log(combined2);

const first_obj = {name1 : 'my-name', age1 : 25};
const sec_obj = {name : 'your-name', age : 20};
const combi = {...first_obj,sec :'B',...sec_obj};// spread operator{...abj1,...obj2}
console.log(combi);
