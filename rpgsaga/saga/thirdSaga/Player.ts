import { AbilityBehavior } from "./AbilityBehavior";
import { AttackBehavior } from "./AttackBehavior";
import { DEFAULT_PLAYERS_NAME } from "./names";
import { randomInt } from "./randomNumber";

export abstract class Player1 {
    private _name: string
    private _health: number
    private _power: number

    constructor(name: string, health: number, power: number) {
        this._name = name;
        this._health = health;
        this._power = power;
    }

    private _generateStats() {
        return {
            name: DEFAULT_PLAYERS_NAME[randomInt(0, DEFAULT_PLAYERS_NAME.length)],
            health: randomInt(20, 30),
            power: randomInt(4, 6), 
        }
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

    set power(power: number) {
        this._power = power
    }

    protected attackBehavior: AttackBehavior;
    protected abilityBehavior: AbilityBehavior;

    public performAttack(opponent: Player1) {
        this.attackBehavior.attack(opponent);
    }

    public performAbillity(opponent: Player1) {
        this.abilityBehavior.ability(opponent);
    }
}