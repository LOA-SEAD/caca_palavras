window.terminou = 0;
window.variavelInterna;

// Adding the script tag to the head as suggested before
/*var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'wordfindgame.js';
// Then bind the event to the callback function.
// There are several events for cross browser compatibility.
script.onreadystatechange = acabou;
script.onload = acabou;
// Fire the loading
head.appendChild(script);*/

var ajax = new XMLHttpRequest();
ajax.open( 'GET', 'wordfindgame.js', true ); // <-- the 'false' makes it synchronous
ajax.onreadystatechange = function () {
var script = ajax.response || ajax.responseText;
    if (ajax.readyState === 4) {
        switch( ajax.status) {
            case 200:
                eval.apply( window, [script] );
                break;
            default:
       }
    }
};
ajax.send(null);

var atualiza = function (valor){
  console.log(terminou);
  window['terminou'] = valor;
  window['variavelInterna'] = valor;
  console.log(terminou);
}

var acabou = function (){
  console.log(terminou);
  console.log(variavelInterna);
  return terminou;
}

/*(function (wnd, undefined) {
    var terminou = 0; 

    function atualiza(valor){
        window['terminou'] = valor;
    }

    function acabou(){
        console.log(terminou);
        return terminou;
    }

var person = function () {
} (window));*/