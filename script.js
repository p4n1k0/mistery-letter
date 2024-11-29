const createBtn = document.getElementById('criar-carta');
const textInput = document.getElementById('carta-texto');
const letterCreated = document.getElementById('carta-gerada');
const classes = {
    style: ['newspaper1', 'newspaper2', 'magazine1', 'magazine2'],
    size: ['medium', 'big', 'reallybig'],
    rotation: ['rotateleft', 'rotateright'],
    skew: ['skewleft', 'skewright'],
};


function createLetter() {
    letterCreated.innerHTML = '';
    const words = textInput.value.split(' ');

    if (words[0] === '') {
        letterCreated.innerHTML = 'Por favor, digite o conteúdo da carta.';
    } else {
        for (let i = 0; i < words.length; i += 1) {
            const letter = document.createElement('span');
            letter.innerHTML = words[i];
            letterCreated.appendChild(letter);
        }
    }
    randonClass();
    wordCounter();
}
createBtn.addEventListener('click', createLetter);

function randonClass() {
    const classes = {
        style: ['newspaper', 'magazine1', 'magazine2'],
        size: ['medium', 'big', 'reallybig'],
        rotation: ['rotateleft', 'rotateright'],
        skew: ['skewleft', 'skewright'],
    };

    const words = document.getElementsByTagName('span');
    for (let i = 0; i < words.length; i += 1) {
        for (const j in classes) {
            const randomI = Math.floor(Math.random() * classes[j].length);
            words[i].classList.add(classes[j][randomI]);
        }
    }
}

function reassignClasses(event) {
    const clickedWord = event.target;
    clickedWord.className = '';
    for (const j in classes) {
        const randomIndex = Math.floor(Math.random() * classes[j].length);
        event.target.classList.add(classes[j][randomIndex]);
    }
}

// Conta numero de palavras e mostra em um parágrafo
function wordCounter() {
    const wordCount = document.getElementById('carta-contador');
    wordCount.innerText = `${letterCreated.children.length} PALAVRAS`
}
