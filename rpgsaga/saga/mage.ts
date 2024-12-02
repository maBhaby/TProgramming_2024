import { Player } from './player';

export let mesmerized = false;

export class Mage extends Player {
  private lastTurnUsedAbility: boolean = false;

  constructor(name: string, health: number, power: number) {
    super(name, health, power);
  }

  attack(opponent: Player): void {
    if (mesmerized) {
      mesmerized = false;
    }
    opponent.health -= this.power;
    console.log(`${this.name} наносит урон ${this.power} противнику ${opponent.name}`);
  }

  useAbility(opponent: Player): void {
    if (this.lastTurnUsedAbility) {
      this.lastTurnUsedAbility = false;
      this.attack(opponent); // Выполняем обычную атаку, если способность уже использовалась в предыдущем ходу
    } else {
      mesmerized = true;
      this.lastTurnUsedAbility = true;
      console.log(`${this.name} использует Заворожение, ${opponent.name} пропускает ход`);
      opponent.health -= this.power;
      console.log(`${this.name} наносит урон ${this.power} противнику ${opponent.name}`);
    }
  }
}
