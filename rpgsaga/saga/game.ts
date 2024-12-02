import { Archer } from './archer';
import { Knight } from './knight';
import { Logger } from './logger';
import { Mage, mesmerized } from './mage';
import { Player } from './player';

export class Game {
  private players: Player[] = [];
  private logger: Logger = new Logger();
  private names: string[] = ['Артур', 'Леголас', 'Гэндольф', 'Белладонна', 'Сириус', 'Моргана', 'Элронд', 'Ариэль'];

  constructor(playerCount: number) {
    this.createPlayers(playerCount);
  }

  createPlayers(playerCount: number): void {
    for (let i = 0; i < playerCount; i++) {
      const name = this.names[Math.floor(Math.random() * this.names.length)];
      const health = 50;
      const power = Math.floor(Math.random() * 10) + 5; // 5-15
      const playerType = Math.floor(Math.random() * 3); // 0, 1, 2

      let player: Player;
      if (playerType === 0) {
        player = new Knight(name, health, power);
      } else if (playerType === 1) {
        player = new Archer(name, health, power);
      } else {
        player = new Mage(name, health, power);
      }
      this.players.push(player);
    }
  }

  public start() {
    while (this.players.length > 1) {
      this.battleRound();
    }
    console.log(`Победитель: ${this.players[0].name}`);
  }

  private battleRound() {
    const pairs = this.createPairs();
    for (const [player1, player2] of pairs) {
      this.battle(player1, player2);
    }
  }

  private createPairs(): [Player, Player][] {
    const pairs: [Player, Player][] = [];
    while (this.players.length > 0) {
      const player1 = this.players.splice(Math.floor(Math.random() * this.players.length), 1)[0];
      const player2 = this.players.splice(Math.floor(Math.random() * this.players.length), 1)[0];
      pairs.push([player1, player2]);
    }
    return pairs;
  }

  private battle(player1: Player, player2: Player) {
    this.logger.log(
      `Сражение: ${player1.constructor.name} ${player1.name} ${player1.health} ${player1.power} vs ${player2.constructor.name} ${player2.name} ${player2.health} ${player2.power}`,
    );

    let turn = 0;
    while (player1.health > 0 && player2.health > 0) {
      const attacker = turn % 2 === 0 ? player1 : player2;
      const defender = turn % 2 === 0 ? player2 : player1;

      // Определяем, будет ли использоваться способность
      if (Math.random() < 0.5) {
        attacker.useAbility(defender);
      } else {
        attacker.attack(defender);
      }

      // Проверяем здоровье противника
      this.logger.log(`здоровье ${defender.name}: ${defender.health}\n`);
      if (defender.health <= 0) {
        this.logger.log(`${defender.name} погибает`);
        break;
      }

      if (mesmerized) {
        turn += 2;
      } else {
        turn++;
      }
    }

    // Добавляем победителя обратно в массив игроков
    if (player1.health > 0) {
      this.players.push(player1);
    } else {
      this.players.push(player2);
    }
  }
}
