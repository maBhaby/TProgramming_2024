import { Player } from "../Player";

export abstract class Ability {
  protected player: Player

  constructor(player: Player) {
    this.player = player
  }

  public abstract activate(opponent: Player): void
}