import CodeGenerator from "./Modules/CodeGenerator.js";
import dictionary from "./Modules/dic.js";
import Optimizer from "./Modules/Optimizer.js";
import ASTParserBin from "./Modules/parser.js";
import SemanticAnalyzer from "./Modules/SemanticAnalyzer.js";
CodeGenerator
Optimizer



// dictionary
// Parser

let checkText = async (text="") => {




    const symbols = {};
    const optimizer = new Optimizer(symbols);
    const generator = new CodeGenerator();
    let inputText = text.trim().split('\n')

    for (const line of inputText) {
        let tokensList = dictionary.tokenize(line)
        const parserAST = new ASTParserBin(tokensList)
        const result = parserAST.parse()
        const optimizedAST = optimizer.optimize(result);
        generator.generate(optimizedAST);


    }


    return {
        inputText: inputText,
        result: generator.getCode()

    }


    // const parser = new Parser(tokensList);
    
    // const result = parser.parseExpression();
    //---
    
    // console.log("ast",result)
    // const semanticAnalizer = new SemanticAnalyzer()
    // semanticAnalizer.analyze(result)
    // const table = semanticAnalizer.getSymbolTable()



    // return {
    //     inputText,
    //     parserAST,
    //     result,
    //     table

    // }


    console.log(' Código fuente:\n', inputText.join('\n'));
    console.log('\n Código intermedio:');
    console.log(generator.getCode().join('\n'));
    
}

export default checkText