const nick = document.getElementById('nick');
const message = document.querySelector('#message');
const intervalo = document.querySelector('#dificuldade');
const chances = document.querySelector('#chances');
const guess = document.querySelector('#input-game');
const btnRecomecar = document.querySelector('.btn-recomecar');
const btnGanhou = document.querySelector('.btn-ganhou');

let GuessNumber;
let chancesNumber = 2;

const startGame = () => {
    captar = document.getElementById('nick').value;
    document.getElementById('nickname').innerHTML = captar;
    const optionValue = intervalo.options[intervalo.selectedIndex];
    const text = optionValue.text;
    var img = document.querySelector('#boneca-img');
    img.setAttribute('src', 'src/img/image-1.png');
    if (text == "Opção 1: 1 a 10") {
        console.log(text);
        GuessNumber = Math.floor(Math.random() * 10) + 1;
        console.log(GuessNumber);
    }
    else if (text == "Opção 2: 1 a 100") {
        console.log(text);
        GuessNumber = Math.floor(Math.random() * 100) + 1;
        console.log(GuessNumber);
    }
    else if (text == "Opção 3: 1 a 200") {
        console.log(text);
        GuessNumber = Math.floor(Math.random() * 200) + 1;
        console.log(GuessNumber);
    }
}

const jogar = () => {
    const guessNumber = Number(guess.value);
    console.log(guessNumber);
    if (guessNumber === GuessNumber) {
        message.innerHTML = 'Você acertou!';
        message.style.color = 'green';
        chances.innerHTML = '';
        guess.disabled = true;
        document.getElementById('jogar').disabled = true;
        document.getElementById('jogar').style.opacity = '0.5';
        document.getElementById('jogar').style.cursor = 'not-allowed';
        btnGanhou.style.display = 'block';
    } else if (guessNumber < GuessNumber) {
        message.innerHTML = 'Você errou! o número é maior';
        message.style.color = 'red';
        chances.innerHTML = 'Você ainda tem ' + chancesNumber + ' tentativas';
        chances.style.color = 'red';
        chancesNumber = chancesNumber - 1;
    } else if (guessNumber > GuessNumber) {
        message.innerHTML = 'Você errou! o número é menor';
        message.style.color = 'red';
        chances.innerHTML = 'Você ainda tem ' + chancesNumber + ' tentativas';
        chances.style.color = 'red';
        chancesNumber = chancesNumber - 1;
    }
    if (chancesNumber == 1) {
        var img = document.querySelector('#boneca-img');
        img.setAttribute('src', 'src/img/image-2.png');
    }
    if (chancesNumber == 0) {
        var img = document.querySelector('#boneca-img');
        img.setAttribute('src', 'src/img/image-3.png');
    }
    if (chancesNumber == -1) {
        var img = document.querySelector('#boneca-img');
        img.setAttribute('src', 'src/img/image-4.png');
        message.innerHTML = 'Você perdeu!';
        message.style.color = 'red';
        chances.innerHTML = 'Você não tem mais tentativas';
        chances.style.color = 'red';
        guess.disabled = true;
        document.getElementById('jogar').disabled = true;
        document.getElementById('jogar').style.opacity = '0.5';
        document.getElementById('jogar').style.cursor = 'not-allowed';
        document.getElementById('modal-gameover').style.display = 'flex';
    }

}

const reset = () => {
    location.reload();
}