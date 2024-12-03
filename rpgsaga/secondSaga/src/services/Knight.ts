import { Player } from "./Player";

export class Knight extends Player {
    attack(opponent: Player): void {
        const newHealth = opponent.health - this.power
        opponent.health = newHealth
    }

    useAbility(opponent: Player): void {
        const newDamage = this.power * 1.3
        opponent.health = opponent.health - newDamage
    }
}