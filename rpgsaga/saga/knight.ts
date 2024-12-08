import { Player } from './player';

export class Knight extends Player {
  private revengeFlag: boolean = false;

  attack(opponent: Player): void {
    const damage = this.power;
    if (this.revengeFlag) {
      this.revengeFlag = false; // сброс флага после использования
    }
    opponent.health -= damage;
    console.log(`${this.name} наносит урон ${damage} противнику ${opponent.name}`);
  }

  useAbility(opponent: Player) {
    let damage = this.power;
    this.revengeFlag = true;
    damage += Math.floor(this.power * 0.3);
    opponent.health -= damage;
    console.log(`${this.name} использует Удар возмездия`);
  }
}
