import { MagicalFreeze } from "../Ability";
import { Player } from "./Player";

export class Mage extends Player {
    constructor() {
       super()
       this.role = 'Маг'

       this.setAbilities([new MagicalFreeze(this)])
    }

    attack(opponent: Player): void {
        
    }

    useAbility(opponent: Player): void {
        
    }
}
