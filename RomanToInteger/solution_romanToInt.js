// OBS: Precisei de ajuda, pois estava pensando de maneira incorreta:
/**
 * Eu entendia numeros romanos como operações:
 * Ex: IV = 5 - 1
 * 
 * Mas na verdade, números romanos, decidem quem é o negativo:
 * IV = (-1) + 5
 * 
 * Na prática pode até não fazer diferença, mas na lógica de programção
 * faz toda a diferença, por isso quebrei tanto a cabeça nesse desafio...
 * 
 * Errado:
 * Se i for menor que i + 1:
 *  result = subtração do atual pelo próximo
 * 
 * Dessa forma, eu acabo usando o próximo como elemento da operação
 * assim quebrando a conta (ou pulando a iteração):
 * início: result = 0
 * 1ª iteração: result = atual + próximo
 * 2ª iteração: result = atual + próximo
 * dessa forma, um dos numeros é usado mais de uma vez (e fazer em duplas gera várias lacunas que falham)
 * 
 * Correto:
 * Se i for menor que i + 1:
 *  Atual é negativo
 * 
 * Dessa forma, ao invés de somar o próximo (dobrando contas) você na verdade faz:
 * inicio: result = 0
 * 1ª iteração: result + atual (negativo ou positivo)
 * 2ª iteração: result + atual
 * dessa forma não usa o proximo, não precisando de puar ou dobrar contas.
 * 
 * ROMANO DEFINE O SINAL!
 */

const s = "MCDLXXVI"

// "MCDLXXVI" = 1476

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const romans = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  let result = 0
  for ( let i = 0; i < s.length; i++) {
    if (romans[s[i]] < romans[s[i+1]]) {
      result += -romans[s[i]]
    } else {
      result += romans[s[i]]
    }
  }
  return result
};

console.log(romanToInt(s));