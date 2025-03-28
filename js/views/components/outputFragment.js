const outputNode = async (params) => {
    const node =/*html*/`
    <div id="outputNode" class="mt-6 flex justify-center items-center flex-col">
        <div class="" >
            <p class="text-3xl text-white font-bold uppercase" >
                Salida:
            </p>
        </div>
        <div id="outputNode-text" class="overflow-y-auto p-4 my-4" >
            <pre><code id="json-display">
            <!-- Aquí irá tu JSON -->
        </code></pre>
        
        </div>
        
    </div>
    `

    return node
}

export default outputNode