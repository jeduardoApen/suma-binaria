import mainView from "./views/main.js"



console.log("Hello World!")
let mainNode = document.querySelector("#app")

mainNode.innerHTML = await mainView()