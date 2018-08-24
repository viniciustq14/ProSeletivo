var salario = 1000;
var aumento = 0.015;
var ano;
for (ano = 2006; ano <= 2018; ano++) {
  salario += 1000 * aumento;
  aumento *= 2;
  window.alert("Ano : " + ano + " Salario :R$" + salario);
  window.alert(aumento);
}
document.write("R$" + salario);
console.log("R$" + salario);
