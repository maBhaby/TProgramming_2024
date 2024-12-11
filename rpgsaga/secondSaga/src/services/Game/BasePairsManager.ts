import { IPlayerFactory, PlayersManagerBehavior, CallableFactory } from "../../interfaces";
import { isEven, PlayerTypeArray, randomInt } from "../../lib";
import { Player } from "../Players";

export class BasePlayersManager implements PlayersManagerBehavior {
  private _playerFactory: IPlayerFactory

  constructor(PlayerFactory: CallableFactory<IPlayerFactory>) {
    this._playerFactory = new PlayerFactory()
  }

  createPlayers(playersCount: number): Player[] {
    if (!isEven(playersCount)) {
      throw new Error('Game: U have to choose only an even number of players')
    }

    let players = []

    for (let i = 0; i < playersCount; i++) {
      const player = this._playerFactory
        .createPlayer(PlayerTypeArray[randomInt(0, PlayerTypeArray.length)])
      players.push(player)
    }

    return players
  }
}