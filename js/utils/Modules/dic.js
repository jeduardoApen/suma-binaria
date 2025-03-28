/**
 * @class Token
 * Representa un token con su tipo y una o más expresiones regulares.
 */
class Token {
    constructor(token = "", exp) {
      this.token = token.toUpperCase();
      this.exp = Array.isArray(exp) ? exp : [exp];
    }
  }
  
  /**
   * @class Dictionary
   * Maneja el registro y análisis de tokens.
   */
  class Dictionary {
    constructor() {
      this.dic = [];
    }
  
    /**
     * Agrega un token o añade una nueva expresión si el token ya existe.
     * @param {string} name - Tipo del token.
     * @param {object} exp - Expresión regular.
     */
    addToken(name = '', exp) {
      const tokenName = name.toUpperCase();
      const existing = this.dic.find(t => t.token === tokenName);
  
      if (existing) {
        existing.exp.push(exp);
      } else {
        this.dic.push(new Token(name, exp));
      }
      return this.dic;
    }
  
    getList() {
      return this.dic;
    }
  
    getLen() {
      return this.dic.length;
    }
  
    verifyText(text = '', index) {
      const token = this.dic[index];
      return token.exp.some(regex => regex.test(text));
    }
  
    checkExp(text = "", index) {
      const token = this.dic[index];
      for (let exp of token.exp) {
        if (exp.test(text)) {
          const match = text.match(exp);
          if (match) {
            const [matchText, ...tokenDetail] = match;
            return {
              tokenType: token.token,
              matchText,
              tokenDetail,
              idToken: index
            };
          }
        }
      }
    }
  
    /**
     * Retorna el primer token que coincida con el texto.
     * @param {string} text - Texto a verificar.
     * @returns {object|null} - Objeto de token coincidente o null.
     */
    matchTokenInText(text = "") {
      for (let i = 0; i < this.dic.length; i++) {
        if (this.verifyText(text, i)) {
          return this.checkExp(text, i);
        }
      }
      return null;
    }
  
    /**
     * Analiza una cadena completa y retorna una lista de tokens encontrados.
     * @param {string} text - Código fuente a analizar.
     * @returns {Array} - Lista de tokens.
     */
    tokenize(text = "") {
      const tokens = [];
      const words = text.split(/\s+/);
  
      for (let word of words) {
        const result = this.matchTokenInText(word);
        if (result) {
          tokens.push(result);
        } else {
          tokens.push({
            tokenType: 'UNKNOWN',
            matchText: word,
            tokenDetail: [],
            idToken: -1
          });
        }
      }
      return tokens;
    }
  }
  
  const dictionary = new Dictionary();
  
  // 🔽 Registro de tokens
  dictionary.addToken('BinaryNumber', /^[01]+$/);
  dictionary.addToken('Plus', /^\+$/);
  dictionary.addToken('Minus', /^\-$/);
  dictionary.addToken('Multiply', /^\*$/);

  
  // 🔁 Exportar para usar en otro módulo
  export default dictionary;