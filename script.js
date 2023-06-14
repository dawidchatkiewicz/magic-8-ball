const ball = document.querySelector('img');
const input = document.querySelector('input');
const answer = document.querySelector('.answer');
const error = document.querySelector('.error');

const answerArr = ['Tak!', 'Nie', 'Może', 'Ciężko powiedzieć', 'Nie chcesz znać odpowiedzi na to pytanie...'];

const shakeBall = () => {
	ball.classList.add('shake-animation');
	setTimeout(checkInput, 1000);
};

const checkInput = () => {
	if (input.value !== '' && input.value.slice(-1) === '?') {
		generateAnswer();
		error.textContent = '';
	} else if (input.value !== '' && input.value.slice(-1) !== '?') {
		error.textContent = 'Pytanie kończy się znakiem zapytanie!';
		answer.textContent = '';
	} else {
		error.textContent = 'Zadaj pytanie';
		answer.textContent = '';
	}
	ball.classList.remove('shake-animation');
};

const generateAnswer = () => {
	const number = Math.floor(Math.random() * answerArr.length);
	answer.innerHTML = `<span>Odpowiedź:</span> ${answerArr[number]}`;
};

ball.addEventListener('click', shakeBall);
