import { SuperDamage } from "./Ability";
import { Player } from "./Player";

export class Knight extends Player {
    constructor() {
        super()
        super.setAbilities([new SuperDamage(this)])
    }

    useAbility(opponent: Player): void {
        this.abilities.forEach(el => el.activate(opponent))
    }
}