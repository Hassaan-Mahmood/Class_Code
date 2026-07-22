hello 1
hello 2
hello 3
hello 4
hello 5
hello 6
// <!doctype html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Dice Design</title>
//     <link
//       rel="stylesheet"
//       href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
//     />
//     <link rel="stylesheet" href="style.css" />
//   </head>
//   <body>
//     <div class="dice-container" id="dice-container">
//       <!-- <div class="dice dice-1">
//         <span class="dot center"></span>
//       </div>
//       <div class="dice dice-2 animate__animated animate__flip">
//         <span class="dot top-left"></span>
//         <span class="dot bottom-right"></span>
//       </div>
//       <div class="dice dice-3 animate__animated animate__flip">
//         <span class="dot top-left"></span>
//         <span class="dot center"></span>
//         <span class="dot bottom-right"></span>
//       </div>
//       <div class="dice dice-4 animate__animated animate__flip">
//         <span class="dot top-left"></span>
//         <span class="dot top-right"></span>
//         <span class="dot bottom-left"></span>
//         <span class="dot bottom-right"></span>
//       </div>
//       <div class="dice dice-5 animate__animated animate__flip">
//         <span class="dot top-left"></span>
//         <span class="dot top-right"></span>
//         <span class="dot center"></span>
//         <span class="dot bottom-left"></span>
//         <span class="dot bottom-right"></span>
//       </div>
//       <div class="dice dice-6 animate__animated animate__flip">
//         <span class="dot top-left"></span>
//         <span class="dot top-right"></span>
//         <span class="dot middle-left"></span>
//         <span class="dot middle-right"></span>
//         <span class="dot bottom-left"></span>
//         <span class="dot bottom-right"></span>
//       </div>
//     </div> -->

//     <button class="button-85" role="button" onclick="myGame()">Run</button>


//     <script src="script.js"></script>
//   </body>
// </html>









// body {
//     font-family: Arial, sans-serif;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-direction: column;
//     min-height: 100vh;
//     margin: 0;
//     background-color: #f0f0f0;
// }

// .dice-container {
//     display: flex;
//     justify-content: center;
//     align-items: center;
// }

// .dice {
//     width: 80px;
//     height: 80px;
//     background-color: white;
//     border: 2px solid #000;
//     border-radius: 12px;
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: space-between;
//     align-items: space-between;
//     position: relative;
// }

// .dot {
//     width: 15px;
//     height: 15px;
//     background-color: black;
//     border-radius: 50%;
//     position: absolute;
// }

// .center {
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
// }

// .top-left {
//     top: 10%;
//     left: 10%;
// }

// .top-right {
//     top: 10%;
//     right: 10%;
// }

// .middle-left {
//     top: 50%;
//     left: 10%;
//     transform: translateY(-50%);
// }

// .middle-right {
//     top: 50%;
//     right: 10%;
//     transform: translateY(-50%);
// }

// .bottom-left {
//     bottom: 10%;
//     left: 10%;
// }

// .bottom-right {
//     bottom: 10%;
//     right: 10%;
// }

// /* CSS */
// .button-85 {
//     padding: 0.6em 2em;
//     border: none;
//     outline: none;
//     color: rgb(255, 255, 255);
//     background: #111;
//     cursor: pointer;
//     position: relative;
//     z-index: 0;
//     border-radius: 10px;
//     user-select: none;
//     -webkit-user-select: none;
//     touch-action: manipulation;
//     margin-top: 30px;
// }

// .button-85:before {
//     content: "";
//     background: linear-gradient(45deg,
//             #ff0000,
//             #ff7300,
//             #fffb00,
//             #48ff00,
//             #00ffd5,
//             #002bff,
//             #7a00ff,
//             #ff00c8,
//             #ff0000);
//     position: absolute;
//     top: -2px;
//     left: -2px;
//     background-size: 400%;
//     z-index: -1;
//     filter: blur(5px);
//     -webkit-filter: blur(5px);
//     width: calc(100% + 4px);
//     height: calc(100% + 4px);
//     animation: glowing-button-85 20s linear infinite;
//     transition: opacity 0.3s ease-in-out;
//     border-radius: 10px;
// }

// @keyframes glowing-button-85 {
//     0% {
//         background-position: 0 0;
//     }

//     50% {
//         background-position: 400% 0;
//     }

//     100% {
//         background-position: 0 0;
//     }
// }

// .button-85:after {
//     z-index: -1;
//     content: "";
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     background: #222;
//     left: 0;
//     top: 0;
//     border-radius: 10px;
// }








// let container = document.getElementById("dice-container");
// let randomNumber = Math.ceil(Math.random() * 6);

// function myGame() {
//     if (randomNumber === 1) {
//         container.innerHTML = `<div class="dice dice-2 animate__animated animate__flip">
//         <span class="dot top-left"></span>
//         <spanclass="dot bottom-right"></span>
//       </div>`
//     } else if (randomNumber === 2) {
//         container.innerHTML = `<div class="dice dice-2 animate__animated animate__flip">
//         <span class="dot top-left"></span>
//         <span class="dot bottom-right"></span>
//       </div>`
//     }else if (randomNumber ===3) {
//         container.innerHTML = `<div class="dice dice-3 animate__animated animate__flip">
//         <span class="dot top-left"></span>
//         <span class="dot center"></span>
//         <span class="dot bottom-right"></span>
//       </div>`
//     }else if (randomNumber === 4) {
//         container.innerHTML = `<div class="dice dice-4 animate__animated animate__flip">
//         <span class="dot top-left"></span>
//         <span class="dot top-right"></span>
//         <span class="dot bottom-left"></span>
//         <span class="dot bottom-right"></span>
//       </div>`
//     }else if (randomNumber === 5) {
//         container.innerHTML = `<div class="dice dice-5 animate__animated animate__flip">
//         <span class="dot top-left"></span>
//         <span class="dot top-right"></span>
//         <span class="dot center"></span>
//         <span class="dot bottom-left"></span>
//         <span class="dot bottom-right"></span>
//       </div>`
//     }else if (randomNumber === 6) {
//         container.innerHTML = `<div class="dice dice-6 animate__animated animate__flip">
//         <span class="dot top-left"></span>
//         <span class="dot top-right"></span>
//         <span class="dot middle-left"></span>
//         <span class="dot middle-right"></span>
//         <span class="dot bottom-left"></span>
//         <span class="dot bottom-right"></span>
//       </div>`
//     }
// }


// ====================== Piano ============================

// //HTML

// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Piano</title>
//     <link rel="stylesheet" href="style.css">
// </head>

// <body>
//     <div class="box">

//         <div class="piano">
//             <div class="white" id="stick1" onclick="piano(1)"></div>
//             <div class="white" id="stick2" onclick="piano(2)"></div>
//             <div class="white" id="stick3" onclick="piano(3)"></div>
//             <div class="white" id="stick4" onclick="piano(4)"></div>
//             <div class="white" id="stick5" onclick="piano(5)"></div>
//             <div class="white" id="stick6" onclick="piano(6)"></div>
//             <div class="white" id="stick7" onclick="piano(7)"></div>
//             <div class="white" id="stick8" onclick="piano(8)"></div>
//             <div class="white" id="stick9" onclick="piano(9)"></div>
//             <div class="white" id="stick10" onclick="piano(10)"></div>
//             <div class="white" id="stick11" onclick="piano(11)"></div>
//             <div class="white" id="stick12" onclick="piano(12)"></div>

//             <div class="black b1"></div>
//             <div class="black b2"></div>
//             <div class="black b3"></div>
//             <div class="black b4"></div>
//             <div class="black b5"></div>
//             <div class="black b6"></div>
//             <div class="black b7"></div>
//             <div class="black b8"></div>
//         </div>



//         <button>▶ Play Music</button>
//     </div>

//     <script src="app.js"></script>
// </body>

// </html>




// // CSS
// .box{
//   background:#111;
//   padding:25px;
//   border-radius:20px;
//   box-shadow:0 0 30px black;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   min-height: 100vh;
//   flex-direction: column;
// }

// .piano{
//   display:flex;
//   position:relative;
// }

// .white{
//   width:45px;
//   height:200px;
//   background:white;
//   border:1px solid #aaa;
//   border-radius:0 0 8px 8px;
// }

// .black{
//   position:absolute;
//   top:0;
//   width:28px;
//   height:120px;
//   background:#000;
//   border-radius:0 0 6px 6px;
// }

// /* black key positions */
// .b1{left:32px}
// .b2{left:77px}
// .b3{left:167px}
// .b4{left:212px}
// .b5{left:257px}
// .b6{left:347px}
// .b7{left:392px}
// .b8{left:482px}

// button{
//   margin-top:20px;
//   padding:12px 30px;
//   border:0;
//   border-radius:25px;
//   background:#ffd700;
//   font-size:18px;
//   cursor:pointer;
// }



// // JS

// // // let stick1 = document.getElementById("stick1");
// // // let stick2 = document.getElementById("stick2");
// // // let stick3 = document.getElementById("stick3");
// // // let stick4 = document.getElementById("stick4");
// // // let stick5 = document.getElementById("stick5");
// // // let stick6 = document.getElementById("stick6");
// // // let stick7 = document.getElementById("stick7");
// // // let stick8 = document.getElementById("stick8");
// // // let stick9 = document.getElementById("stick9");
// // // let stick10 = document.getElementById("stick10");
// // // let stick11 = document.getElementById("stick11");
// // // let stick12 = document.getElementById("stick12");

// let music1 = new Audio("Music/music-1.mp3");
// let music2 = new Audio("Music/music-2.mp3");
// let music3 = new Audio("Music/music-3.mp3");
// let music4 = new Audio("Music/music-4.mp3");
// let music5 = new Audio("Music/music-5.mp3");
// let music6 = new Audio("Music/music-6.mp3");
// let music7 = new Audio("Music/music-7.mp3");
// let music8 = new Audio("Music/music-8.mp3");
// let music9 = new Audio("Music/music-9.mp3");
// let music10 = new Audio("Music/music-10.mp3");
// let music11 = new Audio("Music/music-11.mp3");
// let music12 = new Audio("Music/music-12.mp3");


// function piano(index) {

//     pauseSound()

//     if (index === 1) {
//         music1.play();
//     } else if (index === 2) {
//         music2.play();
//     } else if (index === 3) {
//         music3.play();
//     } else if (index === 4) {
//         music4.play();
//     } else if (index === 5) {
//         music5.play();
//     } else if (index === 6) {
//         music6.play();
//     } else if (index === 7) {
//         music7.play();
//     } else if (index === 8) {
//         music8.play();
//     } else if (index === 9) {
//         music9.play();
//     } else if (index === 10) {
//         music10.play();
//     } else if (index === 11) {
//         music11.play();
//     } else if (index === 12) {
//         music12.play();
//     }
// }



// function pauseSound() {
//     music1.pause()
//     music2.pause()
//     music3.pause()
//     music4.pause()
//     music5.pause()
//     music6.pause()
//     music7.pause()
//     music8.pause()
//     music9.pause()
//     music10.pause()
//     music11.pause()
//     music12.pause()
// }




// // ===================== To Do List ======================

// // HTML
// <!doctype html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>To-Do List</title>
//     <link rel="stylesheet" href="style.css" />
//   </head>
//   <body>
//     <div class="container">
//       <h1>📝 To-Do List</h1>

//       <button id="addBtn"  onclick="addTask()">+ Add New Task</button>

//       <ul id="taskList"">

//       </ul>
//     </div>

//     <script src="app.js"></script>
//   </body>
// </html>


// // CSS 

// * {
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
//   font-family: Arial, Helvetica, sans-serif;
// }

// body {
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background: linear-gradient(135deg, #667eea, #764ba2);
// }

// .container {
//   width: 420px;
//   background: white;
//   padding: 25px;
//   border-radius: 20px;
//   box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
// }

// h1 {
//   text-align: center;
//   margin-bottom: 20px;
//   color: #333;
// }

// #addBtn {
//   width: 100%;
//   padding: 14px;
//   border: none;
//   border-radius: 10px;
//   background: #5a67d8;
//   color: white;
//   font-size: 16px;
//   cursor: pointer;
//   transition: 0.3s;
// }

// #addBtn:hover {
//   background: #434190;
// }

// ul {
//   margin-top: 20px;
//   list-style: none;
// }

// li {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   background: #f8f9ff;
//   padding: 15px;
//   margin-bottom: 12px;
//   border-left: 6px solid #5a67d8;
//   border-radius: 12px;
//   box-shadow: 0 5px 12px rgba(0, 0, 0, 0.08);
//   transition: 0.3s;
// }

// li:hover {
//   transform: translateX(6px);
// }

// .task {
//   cursor: pointer;
//   color: #333;
//   font-size: 16px;
// }

// .completed {
//   text-decoration: line-through;
//   color: gray;
// }

// .delete {
//   border: none;
//   background: #ff4d4d;
//   color: white;
//   width: 38px;
//   height: 38px;
//   border-radius: 50%;
//   cursor: pointer;
//   font-size: 18px;
//   transition: 0.3s;
// }

// .delete:hover {
//   background: #d63031;
//   transform: scale(1.1);
// }

// // JS
// var taskList = document.getElementById('taskList')

// var tasks = ["W"];

// function addTask() {
//     var userTask = prompt("Enter your task?");
//     if (userTask === "") {
//         alert("Please fill a value")
//     } else {
//         tasks.push(userTask);
//     }
// }



// function displayTasks() {
//     for (var i = 0; i < tasks.length; i++) {
//         var data = tasks[i];
//         // li startingTag + data + li closing tag
//         taskList.innerHTML = `<li>
//         <span class="task">${data}</span>
//         <button class="delete">🗑</button>
//         </li>`
//         console.log(data)

//     }   
// }


// displayTasks()
// console.log(tasks);


// 18 / July / 2026

//================== Pinao ===============

// <!DOCTYPE html>
// <html lang="en">
// <head>
// <meta charset="UTF-8">
// <meta name="viewport" content="width=device-width, initial-scale=1.0">
// <title>12-Key Piano UI</title>
// <link rel="stylesheet" href="style.css">
// </head>
// <body>

// <div class="piano">

//     <!-- White Keys (7) -->
//     <div class="white"></div>
//     <div class="white"></div>
//     <div class="white"></div>
//     <div class="white"></div>
//     <div class="white"></div>
//     <div class="white"></div>
//     <div class="white"></div>

//     <!-- Black Keys (5) -->
//     <div class="black b1"></div>
//     <div class="black b2"></div>
//     <div class="black b3"></div>
//     <div class="black b4"></div>
//     <div class="black b5"></div>

// </div>

// </body>
// </html>




// // css 
// * {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
// }

// body {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     height: 100vh;
//     background: #222;
//     font-family: Arial, sans-serif;
// }

// .piano {
//     position: relative;
//     display: flex;
//     background: #111;
//     padding: 15px;
//     border-radius: 12px;
//     box-shadow: 0 10px 25px rgba(0, 0, 0, .5);
// }

// /* White Keys */
// .white {
//     width: 70px;
//     height: 280px;
//     background: white;
//     border: 1px solid #444;
//     border-radius: 0 0 8px 8px;
//     margin-right: 2px;
//     cursor: pointer;
//     transition: .15s;
// }

// .white:active {
//     background: #ddd;
// }

// /* Black Keys */
// .black {
//     position: absolute;
//     width: 45px;
//     height: 170px;
//     background: #111;
//     border-radius: 0 0 6px 6px;
//     z-index: 10;
//     cursor: pointer;
//     box-shadow: 2px 2px 8px rgba(0, 0, 0, .5);
// }

// .black:active {
//     background: #444;
// }

// /* Black key positions */
// .b1 {
//     left: 60px;
// }

// .b2 {
//     left: 132px;
// }

// .b3 {
//     left: 276px;
// }

// .b4 {
//     left: 348px;
// }

// .b5 {
//     left: 420px;
// }




// =-==================== To Do List ====================

// // JS
// var taskList = document.getElementById('taskList');

// var tasks = []

// function addTask() {
//     var userTask = prompt("Enter your task?");
//     if (userTask === "") {
//         alert("Please fill a value")
//     } else {
//         tasks.push(userTask);
//         displayTasks()
//     }
// }


// function displayTasks() {
//     taskList.innerHTML = ""
//     for (var i = 0; i < tasks.length; i++) {
//         var item = tasks[i];
//         taskList.innerHTML += `<li>
//            <span class="task">${item}</span>
//           <div>
//             <button class="delete" onclick="deleteList(${i})">🗑</button>
//             <button class="edit" onclick="editTask(${i})">✏️</button>
//           </div>
//         </li>`
//     }
// }

// // var number = 10;
// // number += 20;
// // console.log(number);

// function deleteList(index) {
//     tasks.splice(index, 1);
//     displayTasks();
//     // console.log("Hello");
// }


// function editTask (index){
//     // tasks.slice(index)
//     let data = tasks[index]
//     let newTask = prompt("Edit Your Task", data)
//     tasks.splice(index, 1, newTask);
//     displayTasks();
// }


// // css


// *{
//     margin:0;
//     padding:0;
//     box-sizing:border-box;
//     font-family:Arial, Helvetica, sans-serif;
// }

// body{
//     background:#f4f6f9;
//     display:flex;
//     justify-content:center;
//     align-items:center;
//     min-height:100vh;
// }

// .container{
//     width:420px;
//     background:#fff;
//     padding:25px;
//     border-radius:12px;
//     box-shadow:0 10px 25px rgba(0,0,0,.15);
// }

// h2{
//     text-align:center;
//     color:#333;
//     margin-bottom:20px;
// }

// .input-area{
//     display:flex;
//     gap:10px;
//     margin-bottom:20px;
// }

// input{
//     flex:1;
//     padding:12px;
//     border:2px solid #ddd;
//     border-radius:8px;
//     outline:none;
//     font-size:16px;
// }

// input:focus{
//     border-color:#4CAF50;
// }

// #addBtn{
//     padding:12px 18px;
//     background:#4CAF50;
//     color:white;
//     border:none;
//     border-radius:8px;
//     cursor:pointer;
//     font-weight:bold;
//     width: 100%;
// }

// #addBtn:hover{
//     background:#43a047;
// }

// ul{
//     list-style:none;
// }

// li{
//     background:#f8f8f8;
//     margin-bottom:12px;
//     padding:12px;
//     border-radius:8px;
//     display:flex;
//     justify-content:space-between;
//     align-items:center;
// }

// .task{
//     flex:1;
//     color:#333;
//     font-size:17px;
// }

// .buttons{
//     display:flex;
//     gap:8px;
// }

// button{
//     border:none;
//     padding:8px 12px;
//     border-radius:6px;
//     color:white;
//     cursor:pointer;
// }

// .edit{
//     background:#2196F3;
// }

// .edit:hover{
//     background:#1976D2;
// }

// .delete{
//     background:#f44336;
// }

// .delete:hover{
//     background:#d32f2f;
// }



// HTML
// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>To-Do App</title>
//     <link rel="stylesheet" href="style.css">
// </head>

// <body>

//     <div class="container">

//         <h2>📝 To-Do App</h2>

//         <div class="input-area">
//             <!-- <input type="text" id="taskInput" placeholder="Enter a task..."> -->
//             <button id="addBtn" onclick="addTask()">Add New Task</button>
//         </div>

//         <ul id="taskList"></ul>
        

//     </div>

//     <script src="app.js"></script>

// </body>

// </html>


console.log(1);
console.log(2);
console.log(3);
console.log(4);





