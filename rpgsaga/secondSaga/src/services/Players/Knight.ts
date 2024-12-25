import { SuperDamage } from "../Ability";
import { Player } from "./Player";

export class Knight extends Player {
    constructor() {
        super()
        this.role = 'Рыцарь'
        this.setAbilities([new SuperDamage(this)])
    }

    useAbility(opponent: Player): void {
        this.abilities.forEach(el => el.activate(opponent))
    }

    attack(opponent: Player): void {
        // opponent.health -= this.power 
        this.abilities.map(el => el.activate(opponent))
    }
}
