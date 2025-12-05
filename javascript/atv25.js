//25. Peça quantas pessoas serão cadastradas. Depois, peça a altura de cada uma e calcule a média das alturas.
let quantPeople = Number(prompt("Quantas pessoas serão cadastradas?"));
let soma = 0;   

for (let i = 1; i <= quantPeople; i++) {
    let altura = Number(prompt("Digite a altura da pessoa " + i + " em cm"))
    soma += altura;
}   
let media = soma / quantPeople;

alert("A média das alturas é: " + media + " cm");

