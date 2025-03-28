// import dictionary from "./dic";

// dictionary

/**
 * @class Parser
 * Analiza una lista de tokens y evalúa expresiones binarias simples
 * que incluyen suma, resta y multiplicación entre números binarios.
 */
class Parser {
  /**
   * @constructor
   * @param {Array} tokens - Lista de tokens generados por el lexer
   */
  constructor(tokens = []) {
    this.tokens = tokens;
    this.pos = 0; // Posición actual en la lista de tokens
  }

  /**
   * Devuelve el token actual (el siguiente a procesar)
   * @returns {object} Token actual
   */
  current() {
    return this.tokens[this.pos];
  }

  /**
   * Consume y avanza al siguiente token si coincide con el tipo esperado
   * @param {string} expectedType - Tipo de token esperado
   * @returns {object} Token consumido
   * @throws {Error} Si el tipo de token no es el esperado
   */
  consume(expectedType) {
    const token = this.current();
    if (token?.tokenType === expectedType.toUpperCase()) {
      this.pos++;
      return token;
    }
    throw new Error(`Expected ${expectedType}, got ${token?.tokenType}`);
  }

  /**
   * Verifica si el token actual es de alguno de los tipos proporcionados
   * @param  {...string} types - Lista de tipos de token válidos
   * @returns {boolean} Verdadero si hay coincidencia
   */
  match(...types) {
    const token = this.current();
    return types.includes(token?.tokenType);
  }

  /**
   * Analiza una expresión completa considerando precedencia de operadores.
   * Se encarga de procesar suma y resta.
   * @returns {number} Resultado en base decimal
   */
  parseExpression() {
    let left = this.parseTerm(); // Procesa el primer término

    while (this.match('PLUS', 'MINUS')) {
      const operator = this.current().tokenType;
      this.pos++;
      const right = this.parseTerm(); // Procesa el siguiente término
      left = this.evaluateBinary(left, right, operator); // Evalúa la operación
    }

    return left;
  }

  /**
   * Analiza una subexpresión con prioridad mayor: multiplicación
   * @returns {number} Resultado en base decimal
   */
  parseTerm() {
    let left = this.parseFactor(); // Primer operando

    while (this.match('MULTIPLY')) {
      const operator = this.current().tokenType;
      this.pos++;
      const right = this.parseFactor();
      left = this.evaluateBinary(left, right, operator);
    }

    return left;
  }

  /**
   * Analiza un valor básico: un número binario
   * @returns {number} Valor decimal del número binario
   * @throws {Error} Si el token no es un número binario
   */
  parseFactor() {
    const token = this.current();

    if (token?.tokenType === 'BINARYNUMBER') {
      this.pos++;
      return parseInt(token.matchText, 2); // Convierte binario a decimal
    }

    throw new Error(`Unexpected token: ${token?.tokenType}`);
  }

  /**
   * Evalúa una operación binaria entre dos operandos
   * @param {number} left - Operando izquierdo
   * @param {number} right - Operando derecho
   * @param {string} operator - Tipo de operador (PLUS, MINUS, MULTIPLY)
   * @returns {number} Resultado de la operación
   */
  evaluateBinary(left, right, operator) {
    switch (operator) {
      case 'PLUS': return left + right;
      case 'MINUS': return left - right;
      case 'MULTIPLY': return left * right;
      default:
        throw new Error(`Unsupported operator: ${operator}`);
    }
  }
}

export default Parser;