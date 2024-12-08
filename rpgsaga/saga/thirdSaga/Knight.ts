import { Attack } from "./Attack";
import { Player1 } from "./Player";
import { RetaliatoryStrike } from "./RetaliatoryStrike";

export class Knight extends Player1{
    constructor(name: string, health: number, power: number) {
        super(name, health, power);
        this.attackBehavior = new Attack();
        this.abilityBehavior = new RetaliatoryStrike();
    }
}