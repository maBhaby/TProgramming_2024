import { Player } from "../services"

export interface FightManagerBehavior {
  fight() : void
}

export interface PlayersManagerBehavior {
  createPlayers(players: number): Player[]
}

export interface PairsManagerBehavior {
  createPairs(): any
}
