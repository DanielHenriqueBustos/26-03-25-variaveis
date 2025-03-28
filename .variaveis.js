

var nomeDaVariavel = "Valor da Variavel";

let nomeDaVariavelTemporaria = "Valor Temporaria da Variavel";

const nomeDaVariavelSomenteLeitura = "Valor Somente Leitura da Variavel" ;

console.log("nomeDaVariavel:", noemDaVariavel);

console.log("nomeDaVariavelTemporaria:", nomeDaVariavelTemporaria);

console.log("nomeDaVariavelSomenteLeitura:", nomeDaVariavelSomenteLeitura);

var matriz = ["vetor1", "vetor2","vetor3","vetor4","vetor5"];

console.log("matriz, vetor1:", matriz[0]);
// console.log("matriz, vetor1:", matriz[0]);
for (let i = 0; i < matriz.length; i++){
        console.log("matriz[" + i + "]:", matriz[i]);
    }

    class NomeDoObjeto {
    constructor (parametroUm, parametroDois) {
    //this.parametroUm = "Valor Um";
    //this.parametroDois = "Valor Dois";
    this.parametroUm = parametroUm;
    this.parametroDois = parametroDois;

    }
        metodoMostrarParametros(parametroUm, parametroDois) {
            //this.parametroUm = "Valor 1";
            //this.parametroDois = "Valor 2";
            this.parametroUm = parametroUm;
            this.parametroDois =parametroDois;
            return this.parametroUm + " - " + this.parametroDois;
        }
}
const novoObjeto = new NomeDoObjeto();
console.log(novoObjeto.metodoMostrarParametros("um", "dois"));
 class copo {
    (material ,tamanho , cor , modelo)
    this.material = material;
    this.tamanho = tamanho;
    this.cor = cor;
    this.modelo = modelo;

}
metodoMostrarParametros(material ,tamanho ,cor , modelo) {
this.material = material;
this.tamanho = tamanho;
this.cor = cor;
this.modelo = modelo;
return material ,tamanho , cor ,modelo;
}
const copo = new copo();
console.log



