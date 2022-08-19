//chamada do botão encriptar
function startEncrip() {
  var buttonEncriptar = document.querySelector('.botao1');
  buttonEncriptar.addEventListener('click', clikEncriptar);
}

// função de encriptação

function encriptador(dados) {
  if (dados.includes('a')) {
    var rest = dados.replaceAll('a', 'ai');
    if (rest.includes('e')) {
      rest = rest.replaceAll('e', 'enter');
      if (rest.includes('i')) {
        rest = rest.replaceAll('i', 'imes');
        if (rest.includes('o')) {
          rest = rest.replaceAll('o', 'ober');
          if (rest.includes('u')) {
            rest = rest.replaceAll('u', 'ufat');
          }
        }
      }
    }
  }

  return rest;
}

//quando clicado

function clikEncriptar() {
  var dadosBrutos = document.querySelector('.entrada-texto');
  var result = document.querySelector('#cripto-result');

  var criptoFinal = encriptador(dadosBrutos.value);
  result.textContent = criptoFinal;
}

//comandos para o botão copiar

function copy() {
  var buttonCopiar = document.querySelector('.copiar');
  buttonCopiar.addEventListener('click', clickCopy);
}

function clickCopy() {
  var conteudo = document.getElementById('cripto-result');
  conteudo.select();
  navigator.clipboard.writeText(conteudo.value);
}

//Comando que chama o botão desencriptador

function startDesencrip() {
  var buttonEncriptar = document.querySelector('.botao2');
  buttonEncriptar.addEventListener('click', clikDesencriptar);
}

//Função desencriptadora

function desencriptador(dados) {
  if (dados.includes('ia')) {
    var rest = dados.replaceAll('ia', 'a');
    if (rest.includes('enter')) {
      rest = rest.replaceAll('enter', 'e');
      if (rest.includes('imes')) {
        rest = rest.replaceAll('imes', 'i');
        if (rest.includes('ober')) {
          rest = rest.replaceAll('ober', 'o');
          if (rest.includes('ufat')) {
            rest = rest.replaceAll('ufat', 'u');
          }
        }
      }
    }
  }

  return rest;
}

function clikDesencriptar() {
  var dadosDesencriptados = document.querySelector('.entrada-texto');
  var result = document.querySelector('#cripto-result');

  var criptoFinal = desencriptador(dadosDesencriptados.value);
  result.textContent = criptoFinal;
  alert('testebotão');
}

startEncrip();
copy();
startDesencrip();
