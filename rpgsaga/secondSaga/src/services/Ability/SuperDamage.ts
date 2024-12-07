import { logger } from "../Logger";
import { Player } from "../Player";
import { Ability } from "./Ability";

export class SuperDamage extends Ability {
  public activate(opponent: Player): void {
    logger.log(`Игрок ${this.player.name} использует супер абилку по игроку ${opponent.name}`)
    opponent.health -= this.player.power * 1.3
  }
}