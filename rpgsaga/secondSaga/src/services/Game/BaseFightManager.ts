import { Game } from "../../core/Game";
import { FightManagerBehavior } from "../../interfaces";

export class BaseFightManager implements FightManagerBehavior {
  private readonly _game: Game

  constructor(game: Game) {
    this._game = game
  }

  public fight(): void {
    
  }
}