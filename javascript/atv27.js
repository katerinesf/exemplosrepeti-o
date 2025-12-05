//27. Simule um elevador. Cada pessoa que entra informa seu peso. Quando o peso total atingir 180 kg, o elevador informa que atingiu o peso máximo.
let pesoTtl = 0;

while (pesoTotal < 180) {
    let peso = Number(prompt("Informe o peso da pessoa que está entrando no elevador:"));
    
    // se o usuário cancelar ou digitar algo inválido
    if (isNaN(peso) || peso <= 0) {
        alert("Peso inválido! Tente novamente.");
        continue;
    }

    pesoTtl += peso;
    alert("Peso atual no elevador: " + pesoTtl + " kg");
}

alert("Peso máximo atingido! (180 kg)");
