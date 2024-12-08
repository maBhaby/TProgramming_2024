import { AttackBehavior } from "./AttackBehavior";

export class Attack implements AttackBehavior{
    attack(): void {
        console.log("Использование базовой атаки");
    }
}