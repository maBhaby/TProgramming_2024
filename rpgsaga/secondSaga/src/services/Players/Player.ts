import { DEFAULT_PLAYERS_NAME } from "../../constants"
import { SideEffectBehavior } from "../../interfaces"
import { getUniqId, randomInt } from "../../lib"
import { Ability } from "../Ability"
import { logger } from "../Logger"

interface PlayerParams {
    name: string
    health: number
    power: number
}

export abstract class Player {
    private _role: string
    private _name: string
    private _health: number
    private _power: number
    private _id: string
    protected abilities: Ability[]
    protected sideEffects?: SideEffectBehavior[]

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

    get role() {
        return this._role
    }

    set role(arg: string) {
        this._role = arg
    }

    get fullName() {
        return `(${this.role}) ${this.name}`
    }

    constructor (params?: PlayerParams) {
        const { name, health, power } = params ?? this._generateStats()
        this._name = name;
        this._health = health;
        this._power = power;
        this._id = getUniqId()

        this.sideEffects = []
    }

    protected setAbilities(abilities: Ability[]): void {
        this.abilities = abilities
    }

    protected setSideEffects(sideEffects: SideEffectBehavior | SideEffectBehavior[]) {
        const _sideEffects = Array.isArray(sideEffects) ? sideEffects : [sideEffects]
        this.sideEffects.push(..._sideEffects)
    }

    private _generateStats() {
        return {
            name: DEFAULT_PLAYERS_NAME[randomInt(0, DEFAULT_PLAYERS_NAME.length)],
            health: randomInt(20, 30),
            power: randomInt(4, 6), 
        }
    }

    public _baseAttack(opponent: Player) {
        logger.log(`Игрок ${this.fullName} атакует игрока ${opponent.name}`)
        const newHealth = opponent.health - this.power
        opponent.health = newHealth
    }

    abstract attack(opponent: Player): void

    abstract useAbility(opponent: Player): void;
}
