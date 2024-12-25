import { logger } from "../Logger";
import { Player } from "../Players";
import { FireDamageEffect } from "../SideEffect";
import { Ability } from "./Ability";

export class FireArrows extends Ability {
  constructor (player: Player) {
    super(player, [FireDamageEffect])
  }

  public activate(opponent: Player): void {
    logger.log(`Игрок ${this.player.name} использует супер абилку огненые стрелы по игроку ${opponent.name}`)
    opponent.health -= this.player.power * 1.3
  }
}
