var matrizDeFrutas = ["Banana","Maça","Mamão"];

matrizDeFrutas.push("Abacate");

console.log(matrizDeFrutas.toString());

var indexadorDoVetor = matrizDeFrutas.indexOf("Maçã");//aqui é feita um busca pelo texto "Maçã" e, se encontrado o texto, retorna o número do vetor na matriz, iniciando por 0

matrizDeFrutas.splice(indexadorDoVetor, 1); //aqui é retirado o vetor, ora antes encontrado na variável indexadorDoVetor, sendo o número 1 a indicação da quantidade de vetores; este mesmo método também é utilizzado para substituir vetores em uma matriz

console.log(matrizDeFrutas.toString());