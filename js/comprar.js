function carrinho() {

  var modulo = document.getElementsByName('modulo');
  for (var i = 0; i < modulo.length; i++){
    if ( modulo[i].checked ) {
      if(modulo[i].value == "Mod i"){
        var Módulo_i = "Módulo SAC adicionado ao carrinho";
        alert(Módulo_i);
      }else if (modulo[i].value == "Mod ii") {
        var Módulo_ii = "Módulo Gestão adicionado ao carrinho";
        alert(Módulo_ii);
      }else if (modulo[i].value == "Mod iii") {
        var Módulo_iii = "Módulo Vendas adicionado ao carrinho";
        alert(Módulo_iii);
      }
    }
  }

}

function comprar() {

  var comprar 
  if (confirm("Você tem certeza que comprar os pacotes?")) {
    comprar = "Sua compra foi confirmada!";
  } else {
    comprar = "Sua compra foi cancelada!";
  }
  document.getElementById("confirm").innerHTML = comprar;
}
