import dictionary from "./Modules/dic.js";
import Parser from "./Modules/parser.js";

// dictionary
// Parser

let checkText = async (text="") => {
    let inputText = text
    let tokensList = dictionary.tokenize(text)
    const parser = new Parser(tokensList);
    const result = parser.parseExpression();

    return {
        inputText,
        parser,
        result
    }
    
}

export default checkText