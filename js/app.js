import checkText from "./utils/index.js"
import mainView from "./views/main.js"



console.log("Hello World!")
let mainNode = document.querySelector("#app")

mainNode.innerHTML = await mainView()




let inputText  = mainNode.querySelector("#inputNode-text")
let outPutNode  = mainNode.querySelector("#outputNode-text")
let inputButton  = mainNode.querySelector("#input-button")

console.log({
    inputText,
    outPutNode,
    inputButton
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

inputButton.addEventListener("click", eventFunction)


document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        eventFunction()
    }
});



