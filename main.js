//variáveis
let gameState = ['', '', '', '', '', '', '', '', '',];
let activePlayer = 'X';
let isGameRunning = true;

//constante para condições de vitória
const windConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
  ];

const statusElement = document.querySelector('status-display');
const cellElements = document.querySelector('.cell');
const restartBtn = document.querySelector('restart-button');

//
