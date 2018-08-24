
var inicial;
var final;
var primo = 0;
var i;
var j;
do {
  inicial = prompt("Digite o primeiro : ");
} while (inicial <= 0);

do {
  final = prompt("Digite o ultimo : ");
} while (final <= inicial);

for (i = inicial; i <= final; i++) {
  for (j = 1; j <= i; j++) {
    if (i % j == 0) {
      primo++;
    }
  }
  if (primo == 2) {
    document.write(" " + i);
    primo = 0;
  } else {
    primo = 0;
  }
}

