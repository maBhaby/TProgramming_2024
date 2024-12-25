import { Game } from "../../core/Game";
import { FightManagerBehavior } from "../../interfaces";
import { Observable } from "../../interfaces/Observable";
import { randomInt } from "../../lib";
import { Player } from "../Players";

export class BaseFightManager implements FightManagerBehavior {
  private readonly _game: Game

  constructor(game: Game) {
    this._game = game
  }

  public fight(firstPlayer: Player, secondPlayer: Player): void {
    const getFighters = this.createBattleRole(firstPlayer, secondPlayer)

    while (firstPlayer.health > 0 && secondPlayer.health > 0) {
      const [attacker, defender] = getFighters()
      attacker.attack(defender)
    }
  }

  private createBattleRole(firstPlayer: Player, secondPlayer: Player) {
    let turn = randomInt(0, 1)
    return () => {
      const role = turn === 1 ? [firstPlayer, secondPlayer] : [secondPlayer, firstPlayer]
      turn = turn === 1 ? 0 : 1

      return role
    }
  }
}
