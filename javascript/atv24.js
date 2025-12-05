//24. Peça um número e mostre a tabuada dele (de 0 a 10).
let i; 

const num = Number(prompt("Digite um número"));
for (i = 0; i <= 10; i++){
    alert(i + " x " + num + " = " + (i * num))
};