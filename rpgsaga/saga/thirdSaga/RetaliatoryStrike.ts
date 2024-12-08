import { AbilityBehavior } from "./AbilityBehavior";
import { Player1 } from "./Player";

export class RetaliatoryStrike implements AbilityBehavior{
    ability(opponent: Player1): void {
        // Увеличиваем урон на 30%
        const additionalDamage = opponent.power * 0.3;
        const totalDamage = opponent.power + additionalDamage;

        // Наносим урон противнику
        opponent.health -= totalDamage;

        console.log(`(${opponent.constructor.name}) ${opponent.name} использует Удар возмездия и наносит ${totalDamage} урона противнику.`);
    }
}