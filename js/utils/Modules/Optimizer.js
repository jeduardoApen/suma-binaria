class Optimizer {
    constructor(symbols = {}) {
      this.symbols = symbols; // Tabla de símbolos externa
    }
  
    optimize(node) {
      if (!node || typeof node !== 'object') return node;
  
      if (node.type === 'Assignment') {
        node.value = this.optimize(node.value);
  
        // Si el valor es constante, guardarlo en la tabla
        if (node.value.type === 'Literal') {
          this.symbols[node.variable] = node.value.value;
        }
  
        return node;
      }
  
      if (node.type === 'BinaryOperation') {
        node.left = this.optimize(node.left);
        node.right = this.optimize(node.right);
  
        const isConst = n => n.type === 'Literal';
  
        // Propagación de constantes si la variable está en la tabla
        if (node.left.type === 'Variable' && this.symbols[node.left.name] !== undefined) {
          node.left = {
            type: 'Literal',
            value: this.symbols[node.left.name]
          };
        }
        if (node.right.type === 'Variable' && this.symbols[node.right.name] !== undefined) {
          node.right = {
            type: 'Literal',
            value: this.symbols[node.right.name]
          };
        }
  
        // Simplificación si ambos lados son constantes
        if (isConst(node.left) && isConst(node.right)) {
          const leftVal = node.left.value;
          const rightVal = node.right.value;
  
          let result;
          switch (node.operator) {
            case 'PLUS': result = leftVal + rightVal; break;
            case 'MINUS': result = leftVal - rightVal; break;
            case 'MULTIPLY': result = leftVal * rightVal; break;
          }
  
          return {
            type: 'Literal',
            value: result
          };
        }
      }
  
      return node;
    }
  }
  
  export default Optimizer;
  