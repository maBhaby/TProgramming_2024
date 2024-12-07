import { logger } from "../Logger";
import { Player } from "../Player";
import { Ability } from "./Ability";

export class FireArrows extends Ability {
  public activate(opponent: Player): void {
    logger.log(`Игрок ${this.player.name} использует супер абилку огненые стрелы по игроку ${opponent.name}`)
    opponent.health -= this.player.power * 1.3
  }
}