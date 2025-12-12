// Desafio 0
const anos0 = Number(prompt("Desafio 0 - Digite sua idade em anos:"));
const meses0 = anos0 * 12;
const dias0 = anos0 * 365;
alert("Meses: " + meses0 + "\nDias: " + dias0);

// Desafio 1
let A1 = Number(prompt("Desafio 1 - Digite o valor A:"));
let B1 = Number(prompt("Digite o valor B:"));
alert("Valores originais:\nA = " + A1 + "\nB = " + B1);
let temp1 = A1;
A1 = B1;
B1 = temp1;
alert("Valores trocados:\nA = " + A1 + "\nB = " + B1);

// Desafio 2
const n1_2 = Number(prompt("Desafio 2 - Digite o primeiro número:"));
const n2_2 = Number(prompt("Digite o segundo número:"));
if (n1_2 > n2_2) {
    alert("Maior: " + n1_2);
} else {
    alert("Maior: " + n2_2);
}

// Desafio 3
const n1_3 = Number(prompt("Desafio 3 - Digite o primeiro número:"));
const n2_3 = Number(prompt("Digite o segundo número:"));
const n3_3 = Number(prompt("Digite o terceiro número:"));
let menor3 = n1_3;
if (n2_3 < menor3) { menor3 = n2_3; }
if (n3_3 < menor3) { menor3 = n3_3; }
alert("Menor número: " + menor3);

// Desafio 4
const ano4 = Number(prompt("Desafio 4 - Digite o ano:"));
if ((ano4 % 4 === 0 && ano4 % 100 !== 0) || ano4 % 400 === 0) {
    alert("Ano bissexto");
} else {
    alert("Não é bissexto");
}

// Atividade 9
const n1_9 = Number(prompt("Atividade 9 - Digite a primeira nota:"));
const n2_9 = Number(prompt("Digite a segunda nota:"));
const n3_9 = Number(prompt("Digite a terceira nota:"));
const media9 = (n1_9 + n2_9 + n3_9) / 3;
if (media9 >= 7) {
    alert("Aprovado");
} else if (media9 >= 5) {
    alert("Recuperação");
} else {
    alert("Reprovado");
}

// Atividade 10
const sexo10 = prompt("Atividade 10 - Digite H para homem ou M para mulher:");
const altura10 = Number(prompt("Digite sua altura em metros:"));
let peso10 = 0;
if (sexo10 === "H") {
    peso10 = (72.7 * altura10) - 58;
} else if (sexo10 === "M") {
    peso10 = (62.1 * altura10) - 44.7;
}
alert("Peso ideal: " + peso10);

// Atividade 11
const a11 = Number(prompt("Atividade 11 - Digite o primeiro número:"));
const b11 = Number(prompt("Digite o segundo número:"));
const op11 = prompt("Digite a operação (+, -, *, /):");
let resultado11 = "Operação inválida";

if (op11 === "+") {
    resultado11 = a11 + b11;
} else if (op11 === "-") {
    resultado11 = a11 - b11;
} else if (op11 === "*") {
    resultado11 = a11 * b11;
} else if (op11 === "/") {
    resultado11 = a11 / b11;
}

alert("Resultado: " + resultado11);


// Atividade 12
const num12 = Number(prompt("Atividade 12 - Digite um número:"));
if (num12 >= 0) { alert("Positivo"); } else { alert("Negativo"); }

// Atividade 13
const num13 = Number(prompt("Atividade 13 - Digite um número inteiro:"));
if (num13 % 2 === 0) { alert("Par"); } else { alert("Ímpar"); }

// Atividade 15
const n15a = Number(prompt("Atividade 15 - Digite o primeiro número:"));
const n15b = Number(prompt("Digite o segundo número:"));
if (n15a > n15b) { alert("Maior: " + n15a); } else { alert("Maior: " + n15b); }

// Atividade 16
const t1 = Number(prompt("Atividade 16 - Digite o primeiro lado do triângulo:"));
const t2 = Number(prompt("Digite o segundo lado:"));
const t3 = Number(prompt("Digite o terceiro lado:"));
if (t1 + t2 > t3 && t1 + t3 > t2 && t2 + t3 > t1) {
    const base16 = Number(prompt("Digite a base:"));
    const altura16 = Number(prompt("Digite a altura:"));
    alert("Área do triângulo: " + (base16 * altura16 / 2));
} else {
    alert("Não formam triângulo. Valores: " + t1 + ", " + t2 + ", " + t3);
}

// Atividade 17
const cpf17 = prompt("Atividade 17 - Digite seu CPF:");
const dep17 = Number(prompt("Número de dependentes:"));
const renda17 = Number(prompt("Renda mensal:"));
const sm17 = 1412;
const descontoDep17 = dep17 * (sm17 * 0.05);
const base17 = renda17 - descontoDep17;
let aliq17 = 0;
if (base17 / sm17 <= 2) { aliq17 = 0; }
else if (base17 / sm17 <= 3) { aliq17 = 0.05; }
else if (base17 / sm17 <= 5) { aliq17 = 0.10; }
else if (base17 / sm17 <= 7) { aliq17 = 0.15; }
else { aliq17 = 0.20; }
alert("Imposto devido: R$ " + (base17 * aliq17));

// Atividade 17.2
const n1_17p = Number(prompt("Atividade 17.2 - Nota 1:"));
const n2_17p = Number(prompt("Nota 2:"));
const n3_17p = Number(prompt("Nota 3:"));
alert("Média ponderada: " + ((n1_17p * 2 + n2_17p * 3 + n3_17p * 5) / 10));

// Atividade 18
const custo18 = Number(prompt("Atividade 18 - Custo de fábrica:"));
alert("Valor final: " + (custo18 + custo18 * 0.28 + custo18 * 0.45));

// Atividade 19
const cap19 = Number(prompt("Atividade 19 - Capital inicial:"));
const taxa19 = Number(prompt("Taxa de juros (ex:0.05):"));
const dias19 = Number(prompt("Tempo em dias:"));
const juros19 = cap19 * taxa19 * dias19;
alert("Capital: " + cap19 + "\nJuros: " + juros19 + "\nMontante: " + (cap19 + juros19));

// Atividade 20
const ipi20 = Number(prompt("Atividade 20 - Percentual IPI:"));
const val1 = Number(prompt("Valor peça 1:"));
const q1 = Number(prompt("Quantidade peça 1:"));
const val2 = Number(prompt("Valor peça 2:"));
const q2 = Number(prompt("Quantidade peça 2:"));
alert("Total a pagar: " + ((val1 * q1 + val2 * q2) * (1 + ipi20 / 100)));

// Atividade 21
let respSim21 = 0;
for (let i = 1; i <= 8; i++) {
    const resp = prompt("Atividade 21 - Pergunta " + i + " (sim/nao):");
    if (resp === "sim") { respSim21 = respSim21 + 1; }
}
let classific21 = "Inocente";
if (respSim21 === 4) { classific21 = "Suspeito"; }
else if (respSim21 >= 5 && respSim21 <= 7) { classific21 = "Possível criminoso"; }
else if (respSim21 === 8) { classific21 = "Assassino"; }
alert("Classificação: " + classific21);

// Atividade 22
const permitida22 = Number(prompt("Atividade 22 - Velocidade permitida:"));
const medida22 = Number(prompt("Velocidade do motorista:"));
alert("Multa: " + ((medida22 > permitida22 * 1.2) ? "R$ 500,00" : "R$ 102,00"));

// Atividade 23
let entrada23;
do {
    entrada23 = prompt("Atividade 23 - Digite 1 para continuar (qualquer outro número para sair):");
    if (entrada23 === "1") { alert("Batata"); }
} while (entrada23 === "1");

// Atividade 24
const tabuada24 = Number(prompt("Atividade 24 - Digite um número para a tabuada:"));
for (let i = 0; i <= 10; i++) {
    alert(tabuada24 + " x " + i + " = " + (tabuada24 * i));
}

// Atividade 25
const qtd25 = Number(prompt("Atividade 25 - Quantas pessoas serão cadastradas?"));
let somaAlt25 = 0;
for (let i = 0; i < qtd25; i++) {
    somaAlt25 += Number(prompt("Altura da pessoa " + (i + 1) + ":"));
}
alert("Média das alturas: " + (somaAlt25 / qtd25));

// Atividade 26
let somaPesos26 = 0;
for (let i = 0; i < 5; i++) {
    somaPesos26 += Number(prompt("Atividade 26 - Peso da pessoa " + (i + 1) + ":"));
}
alert("Média dos pesos: " + (somaPesos26 / 5));

// Atividade 27
let total27 = 0;
let i27 = 0;
do {
    const peso = Number(prompt("Atividade 27 - Digite o peso da pessoa:"));
    total27 += peso;
    i27++;
} while (total27 < 180);
alert("Atingiu o peso máximo");

//fibonacci

let qtd;

do {
    qtd = Number(prompt("Quantos termos da sequência de Fibonacci você quer?"));
} while (qtd <= 0 || isNaN(qtd));

let seq = "";
let a = 0;
let b = 1;

for (let i = 1; i <= qtd; i++) {
    seq += a + " ";

    let proximo = a + b;
    a = b;
    b = proximo;
}

alert("Sequência de Fibonacci:\n" + seq);


