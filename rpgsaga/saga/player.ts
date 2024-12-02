// Player.ts
export abstract class Player {
  name: string;
  health: number;
  power: number;

  constructor(name: string, health: number, power: number) {
    this.name = name;
    this.health = health;
    this.power = power;
  }
  abstract attack(opponent: Player): void;

  abstract useAbility(opponent: Player): void;
}
