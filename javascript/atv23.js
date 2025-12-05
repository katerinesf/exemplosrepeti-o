//23. Enquanto o usuário digitar o número 1, continue mostrando a palavra "Batata".

let num;

do {
    num = Number(prompt("Digite um número"));
    if (num === 1) {
        alert("Batata");
    }
} while (num === 1);
