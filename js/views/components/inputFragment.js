const inputNode = async (params) => {
    const node = /*html*/`
    <div id="inputNode" class="flex justify-center items-center flex-col">
             <div class="input-text-container my-6">
                <h2 class="text-4xl text-center font-bold text-white uppercase">
                This is a title
                </h2>
             </div>

             <div class="input-data-container flex justify-center items-center w-4/5">
                 <textarea id="inputNode-text"  name="textarea" rows="5" cols="15" placeholder="Ingresa la suma aquí"></textarea>
             </div>
        </div>
    `
    return node
}

export default inputNode