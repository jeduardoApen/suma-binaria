import inputNode from "./components/inputFragment.js"
import outputNode from "./components/outputFragment.js"


let inputFragment = await inputNode()
let outputFragment = await outputNode()


const mainView = async (params) => {
    const view = /*html*/`
    
    <section class="main-container my-4">
        ${inputFragment }
        ${outputFragment}       
    </section>

    
    `
    return view
}

export default mainView