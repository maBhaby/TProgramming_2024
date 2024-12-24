import { Player } from "../services"

export interface FightManagerBehavior {
  fight(firstPlayer: Player, secondPlayer: Player) : void
}

export interface PlayersManagerBehavior {
  createPlayers(players: number): Player[]
}

export interface PairsManagerBehavior {
  createPairs(): any
}
