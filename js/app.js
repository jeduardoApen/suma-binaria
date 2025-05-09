/**
 * Se importan modulos
 */

import checkText from "./utils/index.js"
import mainView from "./views/main.js"


/**
 * Nodo principal
 */
console.log("Hello World!")
let mainNode = document.querySelector("#app")

mainNode.innerHTML = await mainView()



/**
 * Sub - nodos necesarios
 */
let inputText  = mainNode.querySelector("#inputNode-text")
let outPutNode  = mainNode.querySelector("#outputNode-text")
let inputButton  = mainNode.querySelector("#input-button")
let inputTestButton  = mainNode.querySelector("#input-test-text")




console.log({
    inputText,
    outPutNode,
    inputButton
})


/**
 * Funcion principal
 */

inputTestButton.addEventListener("click", (eventNode)=>{

    let inputText  = mainNode.querySelector("#inputNode-text")
    console.log("Node", eventNode)

    let textTest =`$a = 1010 + 1 $b = $a + 10`
    inputText.textContent = ""
    inputText.value = textTest

})



let eventFunction = async () => {
    let inputText  = mainNode.querySelector("#inputNode-text")
    let outPutNode  = mainNode.querySelector("#json-display")

    try {
        let textNoSpaces = String(inputText.value).trim()
        let procesText =  await checkText(textNoSpaces)
        console.log(procesText)

        outPutNode.textContent = JSON.stringify(procesText, null, 2);
       
        
    } catch (error) {
        console.log(error)
        outPutNode.textContent = String(error)

    }finally{
             inputText.value =""
    }
}

/**
 * Evento para detectar el boton principal
 */

inputButton.addEventListener("click", eventFunction)

/**
 * Evento para detectar el boton de Enter
 */
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        eventFunction()
    }
});



