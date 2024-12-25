import { Player } from "../Players";
import { Ability } from "./Ability";

export class MagicalFreeze extends Ability {
  constructor(player: Player) {
    super(player, [])
  }

  public activate(opponent: Player): void {
    throw new Error("Method not implemented.");
  }
}
