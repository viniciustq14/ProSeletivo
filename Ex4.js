var area = prompt("O tamanho da area :");
var lata = 18;
var Tlatas;
var preco;
if (area <= lata * 3) {
  document.write("1 lata e R$80,00");
} else {
  Tlata = Math.floor(area / (lata * 3) + 1);
  preco = Tlata * 80;
  document.write(Tlata + " lata e R$" + preco);
}