


const rollBtn = document.getElementById('rollBtn');
const resultP = document.getElementById('result');
const statsP = document.getElementById('stats');

let countSix = 0;

rollBtn.addEventListener('click', () => {
  const dice = Math.floor(Math.random() * 6) + 1;

  const parity = dice % 2 === 0 ? 'Чётное' : 'Нечётное';

  resultP.textContent = `Выпало: ${dice} (${parity})`;

  if (dice === 6) {
    countSix++;
    statsP.textContent = `Шестёрка выпала раз: ${countSix}`;
    statsP.className = 'green'; // делаем текст зелёным для красоты
  } else {
    statsP.className = '';
  }
});