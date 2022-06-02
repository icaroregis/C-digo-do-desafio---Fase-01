// A palavra replace significa substituir. É isso o que o método replace() faz, ou seja, substitui um trecho de uma string por outro e retorna a operação em uma nova string.

//O método split() divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array. A divisão é feita procurando um padrão, onde o padrão é fornecido como o primeiro parâmetro na chamada do método.

// O método arr.join() é usado para juntar os elementos de um array em uma string. Os elementos da string serão separados por um separador especificado e seu valor padrão é uma vírgula (,).

function soletrar(texto) {
  console.log(texto.replace('-', '').toLocaleUpperCase().split('').join('-'));
}

soletrar('O reino dos céus é dos violentos');
