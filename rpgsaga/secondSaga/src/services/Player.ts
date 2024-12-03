import { DEFAULT_PLAYERS_NAME } from "../constants"
import { getUniqId, randomInt } from "../lib"

interface PlayerParams {
    name: string
    health: number
    power: number
}

export abstract class Player {
    private _name: string
    private _health: number
    private _power: number
    private _id: string

    get id() {
        return this._id
    }

    get name() {
        return this._name
    }

    set name(name: string) {
        this._name = name
    }

    get health() {
        return this._health
    }

    set health(payload: number) {
        if (payload <= 0) {
            this._health = payload
            return
        } this._health = payload
    }

    get power() {
        return this._power
    }

    constructor (params?: PlayerParams) {
        const { name, health, power } = params ?? this._generateStats()
        this._name = name;
        this._health = health;
        this._power = power;
        this._id = getUniqId()
    }

    private _generateStats() {
        return {
            name: DEFAULT_PLAYERS_NAME[randomInt(0, DEFAULT_PLAYERS_NAME.length)],
            health: randomInt(20, 30),
            power: randomInt(4, 6), 
        }
    }

    abstract attack(opponent: Player): void;

    abstract useAbility(opponent: Player): void;
}