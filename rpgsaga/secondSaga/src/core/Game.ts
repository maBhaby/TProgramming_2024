import { Player, logger } from "../services"
import {
    isEven,
    PlayerFactory,
    PlayerTypeArray,
    randomInt,
    shuffleArray
} from "../lib"

export class Game {
    private _players: Player[]
    private _gameIsOn: boolean
    private _playerFactory: PlayerFactory
    private _battlePairs: [Player, Player][]

    constructor(players: number = 2) {
        this._gameIsOn = false
        this._playerFactory = new PlayerFactory()
        this._players = []
        this._battlePairs = []

        this._createPlayers(players)
    }

    private _createPlayers (players: number) {
        if (isEven(players)) {
            throw new Error('Game: U have to choose only an even number of players')
        }

        for (let i = 0; i < players; i++) {
            const player = this._playerFactory
                .createPlayer(PlayerTypeArray[randomInt(0, PlayerTypeArray.length)])
            this._players.push(player)
        }
    }

    private _createPairs() {
        const shuffledPlayers = shuffleArray(this._players)

        for (let i = 0; i < shuffledPlayers.length; i =+ 2) {
            this._battlePairs.push([shuffledPlayers[i], shuffledPlayers[i + 1]])
        }
    }

    public start() {
        this._createPairs()
        this._gameIsOn = true

        for (let [firstPlayer, secondPlayer] of this._battlePairs) {
            this._battle(firstPlayer, secondPlayer)
        }
    }

    private _battle(firstPlayer: Player, secondPlayer: Player) {
        logger.log(`Сражение ${firstPlayer.name} c ${secondPlayer.name}`)

        let turn = randomInt(0, 1)
        while(firstPlayer.health > 0 && secondPlayer.health > 0) {
            const attacker = isEven(turn) ? firstPlayer : secondPlayer
            const defender = isEven(turn) ? firstPlayer : secondPlayer
        }
    }
}
