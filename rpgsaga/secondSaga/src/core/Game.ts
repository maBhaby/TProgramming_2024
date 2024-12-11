import { Player, logger, BaseFightManager, BasePlayersManager } from "../services"
import {
    isEven,
    PlayerFactory,
    randomInt,
    shuffleArray
} from "../lib"
import { GAME_STATE } from "../constants"
import { FightManagerBehavior, PlayersManagerBehavior } from "../interfaces"

export class Game {
    private _players: Player[]
    private _gameState: GAME_STATE
    private _battlePairs: [Player, Player][]
    private _playerBehavior: PlayersManagerBehavior
    private _fightBehavior: FightManagerBehavior

    constructor(players: number = 2) {
        this._gameState = GAME_STATE.INIT
        this._players = []
        this._battlePairs = []
        this._playerBehavior = new BasePlayersManager(PlayerFactory)
        this._fightBehavior = new BaseFightManager(this)

        this._createPlayers(players)
    }

    private _createPlayers (players: number) {
        this._players = this._playerBehavior.createPlayers(players)
    }

    private _createPairs() {
        const shuffledPlayers = shuffleArray(this._players)

        for (let i = 0; i < shuffledPlayers.length; i =+ 2) {
            this._battlePairs.push([shuffledPlayers[i], shuffledPlayers[i + 1]])
        }
    }

    public start() {
        this._createPairs()
        this._gameState = GAME_STATE.RUNNING

        for (let [firstPlayer, secondPlayer] of this._battlePairs) {
            this._fight(firstPlayer, secondPlayer)
        }
    }

    private _fight(firstPlayer: Player, secondPlayer: Player) {
        logger.log(`Сражение ${firstPlayer.name} c ${secondPlayer.name}`)

        let turn = randomInt(0, 1)
        while(firstPlayer.health > 0 && secondPlayer.health > 0) {
            const attacker = isEven(turn) ? firstPlayer : secondPlayer
            const defender = isEven(turn) ? firstPlayer : secondPlayer
        }
    }
}
