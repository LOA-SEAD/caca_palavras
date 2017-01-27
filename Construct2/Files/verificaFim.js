var terminou = 0;

function atualiza(valor){
  window['terminou'] = valor;
}

function acabou(){
  console.log(terminou);
  return terminou;
}