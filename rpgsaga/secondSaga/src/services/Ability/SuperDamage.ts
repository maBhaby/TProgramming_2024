import { logger } from "../Logger";
import { Player } from "../Players";
import { Ability } from "./Ability";

export class SuperDamage extends Ability {
  public activate(opponent: Player): void {
    if (this.canUseAbility()) {
      logger.log(`Игрок ${this.player.fullName} использует супер удар по игроку ${opponent.fullName}`)
      opponent.health -= this.player.power * 1.3
    } else {
      this.player._baseAttack(opponent)
    }
  }
}
