// Calculando o nível do heroi # Bichu Piruleta #
//Calculadora de Partidas Rankeadas ##

let vitoriasJogador = 60;
let derrotasJogador = 7;
let vitoriasPontuacao = calcularDesempenho(vitoriasJogador, derrotasJogador);
let nivel = [`Ferro`, `Bronze`, `Prata`, `Ouro`, `Diamante`, `Lendário`, 'Imortal'];

let message;


function calcularDesempenho(vitorias, derrotas) {
    let resultado = vitorias - derrotas;
    return resultado;
}


    if (vitoriasPontuacao < 10) {
        message = `O Heroi tem pontuação de : ${vitoriasPontuacao} e está no nível : ${nivel[0]}`;

    } else if (vitoriasPontuacao >= 10 && vitoriasPontuacao <= 20) {
        message = `O Heroi tem pontuação de : ${vitoriasPontuacao} e está no nível : ${nivel[1]}`;

    } else if (vitoriasPontuacao >= 21 && vitoriasPontuacao <= 50) {
        message = `O Heroi tem pontuação de : ${vitoriasPontuacao} e está no nível : ${nivel[2]}`;

    } else if (vitoriasPontuacao >= 51 && vitoriasPontuacao <= 80) {
        message = `O Heroi tem pontuação de : ${vitoriasPontuacao} e está no nível : ${nivel[3]}`;

    } else if (vitoriasPontuacao >= 81 && vitoriasPontuacao <= 90) {
        message = `O Heroi tem pontuação de : ${vitoriasPontuacao} e está no nível : ${nivel[4]}`;

    } else if (vitoriasPontuacaos >= 91 && vitoriasPontuacao <= 100) {
        message = `O Heroi tem pontuação de : ${vitoriasPontuacao} e está no nível : ${nivel[5]}`;

    } else if (vitoriasPontuacao >= 101) {
        message = `O Heroi tem pontuação de : ${vitoriasPontuacao} e está no nível : ${nivel[6]}`;
    }

    console.log(message);
