var Conta = function(nome, numero) {
  var nome ;
  var saldo ;
  var numero ;
this.saldo=0;
  this.nome = nome;
  this.numero = numero;

  this.alterarNome = (nome) => {
    this.nome = nome;
  };
  this.depositar = (qt) => {
    this.saldo += qt;
  };
  this.sacar = (qt) => {
      var valida;
    if (this.saldo < qt) {
        
      this.valida = 0;
    } 
    else {
      this.saldo -= qt;
      this.valida = 1;
    }
    return this.valida;
  };
};

var correntista = new Conta("Vinicius", 1);
correntista.alterarNome("Igor");
console.log(correntista.nome);
correntista.depositar(90);
if (correntista.sacar(100) === 1) {
    console.log("Sucesso");
} else {
    console.log("Saldo indisponivel");
  
}
