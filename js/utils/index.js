import dictionary from "./Modules/dic.js";
import Parser from "./Modules/parser.js";

// dictionary
// Parser

let checkText = async (text="") => {
    let inputText = text
    let tokensList = dictionary.tokenize(text)
    const parser = new Parser(tokensList);
    const result = parser.parseExpression();
    const binaryResult = result.toString(2)


    return {
        inputText,
        parser,
        result,
        binaryResult
    }
    
}

export default checkText