const outputNode = async (params) => {
    const node =/*html*/`
    <div id="outputNode" class="mt-6 flex justify-center items-center flex-col">
        <div class="" >
            <p class="text-3xl text-white font-bold uppercase" >
                Resultado:
            </p>
        </div>
        <div id="outputNode-text" >
        
        </div>
        
    </div>
    `

    return node
}

export default outputNode