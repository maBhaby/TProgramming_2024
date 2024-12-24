import { Game } from "../../core/Game";
import { FightManagerBehavior } from "../../interfaces";
import { Observable } from "../../interfaces/Observable";
import { randomInt } from "../../lib";
import { Player } from "../Players";

export class BaseFightManager implements FightManagerBehavior, Observable {
  private readonly _game: Game

  constructor(game: Game) {
    this._game = game
  }

  public fight(firstPlayer: Player, secondPlayer: Player): void {
    const [attacker, defender] = this.createBattleRole(firstPlayer, secondPlayer)

    while (attacker.health > 0 && defender.health > 0) {
      attacker.attack
    }
  }

  private createBattleRole(firstPlayer: Player, secondPlayer: Player) {
    if (randomInt(0, 1) === 1) {
      return [firstPlayer, secondPlayer]
    } return [secondPlayer, firstPlayer]
  }

  add(): void {
      
  }

  remove(): void {
      
  }

  notify(): void {
      
  }
}
