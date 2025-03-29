const inputNode = async (params) => {
    const node = /*html*/`
    <div id="inputNode" class="flex justify-center items-center flex-col">
             <div class="input-text-container my-6 flex justify-center items-center flex-col">
                <h2 class="text-4xl text-center font-bold text-white uppercase">
                Calculadora de numeros binarios
                </h2>
                <p class="text-slate-400 text-center italic w-2/4 mt-4" >
                *Ingrese una cadena de texto separada por espacios que 
                incluya numeros binarios y operaciones, se acepta suma, resta y multiplicación
                 </p>
             </div>

             <div class="input-data-container flex justify-center items-center w-4/5">
                 <textarea id="inputNode-text"  name="textarea" rows="5" cols="15" placeholder="Ingresa la suma aquí"></textarea>
             </div>
             <div class="input-button-container">
                <div class="input-button w-56 h-16 my-6 flex justify-center items-start bg-blue-600 rounded-md cursor-pointer"
                 id="input-button"
                 title = "Click o presione Enter para realizar la operación" >
                    <p class="text-white font-bold text-3xl mt-2 " > Resultado </p>
                </div>
             </div>
        </div>
    `
    return node
}

export default inputNode