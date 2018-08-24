var Retangulo = function(Altura, Largura) {
  this.Altura = Altura;
  this.Largura = Largura;
  this.setAltura = (Altura) => {
    this.Altura = Altura;
  };
  this.setLargura = (Largura) => {
    this.Largura = Largura;
  };
  this.getAltura = () => {
    return this.Altura;
  };
  this.getLargura = () => {
    return this.Largura;
  };
  this.CalcPerimetro = () => {
    return 2 * this.Altura + 2 * this.Largura;
  };
  this.CalcArea = () => {
    return this.Altura * this.Largura;
  };
};
var Parede = function(Altura, Largura) {
  this.Alt = Altura;
  this.Larg = Largura;
  this.getQtRodape = (rodape) => {
    return this.Larg / rodape.getLargura();
  };
  this.getQtPiso = (piso, rodape) => {
    return (
      (this.Alt * this.Larg - rodape.getAltura() * rodape.getLargura()) /
      (piso.getAltura() * piso.getLargura())
    );
  };
};
var piso = new Retangulo(2, 5);
var rodape = new Retangulo(3, 8);
var parede = new Parede(5, 16);
console.log(parede.getQtPiso(piso, rodape));
