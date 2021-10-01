//declara vetor global de erros
let erros = [];
//gera um número aleatorio entre 0 e 100
let sorteado = Math.floor(Math.random() * 100) + 1;
//declara constante de chances
let chances = 6

function apostaNumero() {
    // faz referencia dos elementos de entrada e saida
    let inNumero = document.getElementById('inNumero');
    let numero = Number(inNumero.value); //obtem valor

    if (numero == '' || numero <= 0 || numero > 100 || isNaN(numero)) {
        alert('Informe um número de 1 a 100...');
        inNumero.focus;
        return;
    }
        
    //referencia espaços de saida
        let outDica = document.getElementById('outDica')
        let outErros = document.getElementById('outErros')
        let outChances = document.getElementById('outChances')

    if(numero == sorteado) {
        alert('Parabens você acertou o número sorteado!!!!!!')
        //troca a ordem dos botoes
        btTentar.disabled = true;
        btJogar.className = 'exibe';
        //altera linha de resposta
        outDica.textContent = 'Parabens!! Número Sorteado:' + sorteado;
    }else {
        //se o numero existe no vetor de erros
        if (erros.indexOf(numero) >= 0 ) {
            alert(`Você já tentou este numero ${numero} tente outro...`);
        }else {
            erros.push(numero) //adiciona numero ao vetor
            let numErros = erros.length // obtem tamanho do vetor
            let numChances = chances - numErros; //calcula o numero de chances
            //exibe o numero de erros e de chances do vetor e conteudo
            outErros.textContent = numErros + '(' + erros.join(', ') + ')';
            outChances.textContent = numChances;

            if(numChances == 0) {
                alert('Suas Chances acabaram....')
                btTentar.disabled = true;
                btJogar.className = 'exibe';
                outDica.textContent = 'Gamer Over!! Número sorteado:' + sorteado;
            }else {
                //usa operador ternario para mensagem da dica
                let dica = numero < sorteado ? ' Maior' : ' Menor';
                outDica.textContent = 'Dica: tente um número ' + dica + ' que ' + numero;
            }
            
        }
    }
    //limpa campo de entrada e posiciona cursor neste campo
    inNumero.value;
    inNumero.focus();
}
let btTentar = document.getElementById('btTentar')
btTentar.addEventListener('click', apostaNumero);

function jogarNovamente() {
    location.reload(); //recarrega a pagina
}
let btJogar = document.getElementById('btJogar')
btJogar.addEventListener('click', jogarNovamente);