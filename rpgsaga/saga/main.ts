import { Game } from './game';

const playerCount = 2;

if (playerCount % 2 !== 0) {
  console.error('Количество игроков должно быть четным.');
} else {
  const game = new Game(playerCount);
  game.start();
}
