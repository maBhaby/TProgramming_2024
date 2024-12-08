import { Attack } from "./Attack";
import { FireArrows } from "./FireArrows";
import { Player1 } from "./Player";

export class Archer extends Player1{

    private fireArrowsAbility: FireArrows;

    constructor(name: string, health: number, power: number) {
        super(name, health, power);
        this.attackBehavior = new Attack();
        this.fireArrowsAbility = new FireArrows();
    }

    public performAbility(player: Player1): void {
        this.fireArrowsAbility.ability(player);
    }

    public performAttack(player: Player1): void {
        // Применяем урон от Огненных стрел, если способность активна
        this.fireArrowsAbility.applyBurnDamage(player);
        super.performAttack(player); // Выполняем обычную атаку
    }
}