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




