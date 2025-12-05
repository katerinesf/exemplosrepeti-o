//26. Peça o peso de 5 pessoas e calcule a média dos pesos.
let somaPesos = 0;

for (let i = 1; i <= 5; i++) {
    let peso =Number(prompt("Digite o peso da pessoa " + i + " em kg"));
    somaPesos += peso;

}
let media = somaPesos / 5;

alert ("A média de pesos é: " + media + "kg");