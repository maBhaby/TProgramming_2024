import { Player } from './player';

// Archer.ts
export let burningFlag = false;
export class Archer extends Player {
  constructor(name: string, health: number, power: number) {
    super(name, health, power);
  }
  attack(opponent: Player): void {
    const damage = this.power;
    if (burningFlag) {
      opponent.health -= 2; // урон от горения
      console.log(`${this.name} наносит 2 урона от огненных стрел противнику ${opponent.name}`);
    }
    opponent.health -= damage;
    console.log(`${this.name} наносит урон ${damage} противнику ${opponent.name}`);
  }

  useAbility(opponent: Player) {
    if (!burningFlag) {
      const damage = this.power;
      burningFlag = true;
      opponent.health -= 2;
      opponent.health -= damage;
      console.log(`${this.name} использует Огненные стрелы`);
      console.log(`${this.name} наносит 2 урона от огненных стрел противнику ${opponent.name}`);
      console.log(`${this.name} наносит урон ${damage} противнику ${opponent.name}`);
    } else {
      this.attack(opponent);
    }
  }
}
