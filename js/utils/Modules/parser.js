class ASTParserBin{
  constructor(tokens = []) {
    this.tokens = tokens;
    this.pos = 0;
  }

  current() {
    return this.tokens[this.pos];
  }

  consume(expectedType) {
    const token = this.current();
    if (token?.tokenType === expectedType.toUpperCase()) {
      this.pos++;
      return token;
    }
    throw new Error(`Expected ${expectedType}, got ${token?.tokenType}`);
  }

  match(...types) {
    const token = this.current();
    return types.includes(token?.tokenType);
  }

  parse() {
    if (this.match('VARIABLE')) {
      return this.parseAssignment();
    }
    return this.parseExpression();
  }

  parseAssignment() {
    const variable = this.consume('VARIABLE');
    this.consume('ASSIGN');
    const expr = this.parseExpression();

    return {
      type: 'Assignment',
      variable: variable.matchText,
      value: expr
    };
  }

  parseExpression() {
    let left = this.parseTerm();

    while (this.match('PLUS', 'MINUS')) {
      const operator = this.current().tokenType;
      this.pos++;
      const right = this.parseTerm();

      left = {
        type: 'BinaryOperation',
        operator,
        left,
        right
      };
    }

    return left;
  }

  parseTerm() {
    let left = this.parseFactor();

    while (this.match('MULTIPLY')) {
      const operator = this.current().tokenType;
      this.pos++;
      const right = this.parseFactor();

      left = {
        type: 'BinaryOperation',
        operator,
        left,
        right
      };
    }

    return left;
  }

  /**
   * Reconoce números binarios y variables como factores
   */
  parseFactor() {
    const token = this.current();

    if (token?.tokenType === 'BINARYNUMBER') {
      this.pos++;
      return {
        type: 'Literal',
        value: parseInt(token.matchText, 2)
      };
    }

    if (token?.tokenType === 'VARIABLE') {
      this.pos++;
      return {
        type: 'Variable',
        name: token.matchText
      };
    }

    throw new Error(`Unexpected token: ${token?.tokenType}`);
  }
}

export default ASTParserBin;
