import { CallableSideEffect } from "../../interfaces";
import { randomInt } from "../../lib";
import { logger } from "../Logger";
import { Player } from "../Players";

export abstract class Ability {
  protected player: Player
  protected opponentSideEffects: CallableSideEffect[]

  constructor(player: Player, sideEffects:CallableSideEffect[] = []) {
    this.opponentSideEffects = sideEffects
    this.player = player
  }

  public abstract activate(opponent: Player): void

  public canUseAbility() {
    logger.debug({
      message: 'Получилось юзануть canUseAbility',
      player: this.player,
    })

    return randomInt(0, 100) >= 70 ? true : false
  }
}
