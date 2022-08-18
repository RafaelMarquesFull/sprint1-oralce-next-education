function start() {
  var buttonEncriptar = document.querySelector('.botao1');
  buttonEncriptar.addEventListener('click', quandoClicado);
}

function encriptador(dados) {
  if (dados.includes('a')) {
    rest = dados.replaceAll('a', 'ai');
    if (rest.includes('e')) {
      rest = rest.replaceAll('e', 'enter');
      if (rest.includes('i')) {
        rest = rest.replaceAll('i', 'imes');
        if (rest.includes('o')) {
          rest = rest.replaceAll('o', 'imes');
          if (rest.includes('u')) {
            rest = rest.replaceAll('u', 'imes');
          }
        }
      }
    }
  }

  return rest;
}

function quandoClicado() {
  var dadosBrutos = document.querySelector('.entrada-texto');
  var dados = dadosBrutos.value;
  var result = document.querySelector('.cripto-result');

  var criptoFinal = encriptador(dados);
  result.textContent = criptoFinal;
}
start();
