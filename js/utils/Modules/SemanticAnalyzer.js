/**
 * @class SemanticAnalyzer
 * Recorre el AST para validar semántica y mantener una tabla de símbolos.
 */

class SemanticAnalyzer {
    constructor() {
      this.symbols = {}; // Tabla de símbolos (variables y sus valores)
    }
  
    /**
     * Punto de entrada del análisis semántico.
     * @param {object} ast - Árbol de sintaxis abstracta
     */
    analyze(ast) {
      switch (ast.type) {
        case 'Assignment':
          this.checkAssignment(ast);
          break;
  
        case 'BinaryOperation':
        case 'Literal':
          return this.evaluateExpression(ast);
  
        default:
          throw new Error(`Unknown AST node type: ${ast.type}`);
      }
    }
  
    /**
     * Valida y registra una asignación.
     */
    checkAssignment(node) {
      const value = this.evaluateExpression(node.value);
      this.symbols[node.variable] = value;
    }
  
    /**
     * Evalúa una expresión binaria, validando tipos y operaciones.
     * @returns {number} Valor decimal
     */
    evaluateExpression(node) {
      if (node.type === 'Literal') {
        return node.value;
      }
  
      if (node.type === 'BinaryOperation') {
        const left = this.evaluateExpression(node.left);
        const right = this.evaluateExpression(node.right);
  
        switch (node.operator) {
          case 'PLUS': return left + right;
          case 'MINUS': return left - right;
          case 'MULTIPLY': return left * right;
          default:
            throw new Error(`Unsupported operator: ${node.operator}`);
        }
      }
  
      throw new Error(`Invalid expression node type: ${node.type}`);
    }
  
    /**
     * Retorna la tabla de símbolos actual
     */
    getSymbolTable() {
      console.log("Tabla de simbolos: ", this.symbols)
      return this.symbols;
    }
  }
  
  export default SemanticAnalyzer;