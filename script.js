const createBtn = document.getElementById('criar-carta');
const textInput = document.getElementById('carta-texto');
const letterCreated = document.getElementById('carta-gerada');


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
}
createBtn.addEventListener('click', createLetter);
