import { Player } from "./Player";
// import { logger } from "./Logger";
import { FireArrows } from "../Ability";

export class Archer extends Player {
    constructor() {
        super()
        this.role = 'Лучник'
        this.setAbilities([new FireArrows(this)])

        console.log(`Создан игрок ${this.fullName}`, this)
    }

    attack(opponent: Player): void {

    }

    useAbility(opponent: Player): void {

    }
}
