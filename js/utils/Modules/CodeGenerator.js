class CodeGenerator {
    constructor() {
      this.tempCount = 0;
      this.code = [];
    }
  
    generate(node) {
      if (node.type === 'Literal') {
        const temp = this.newTemp();
        this.emit(`${temp} = ${node.value}`);
        return temp;
      }
  
      if (node.type === 'Variable') {
        return node.name; // usar directamente la variable como operando
      }
  
      if (node.type === 'BinaryOperation') {
        const left = this.generate(node.left);
        const right = this.generate(node.right);
        const temp = this.newTemp();
        const op = this.mapOperator(node.operator);
        this.emit(`${temp} = ${left} ${op} ${right}`);
        return temp;
      }
  
      if (node.type === 'Assignment') {
        const result = this.generate(node.value);
        this.emit(`${node.variable} = ${result}`);
        return node.variable;
      }
    }
  
    mapOperator(token) {
      switch (token) {
        case 'PLUS': return '+';
        case 'MINUS': return '-';
        case 'MULTIPLY': return '*';
        default: return token;
      }
    }
  
    newTemp() {
      return `t${this.tempCount++}`;
    }
  
    emit(line) {
      this.code.push(line);
    }
  
    getCode() {
      return this.code;
    }
  }
  
  export default CodeGenerator;
  