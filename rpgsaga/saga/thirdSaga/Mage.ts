import { Attack } from "./Attack";
import { Mesmerization } from "./Mesmerization";
import { Player1 } from "./Player";

export class Mage extends Player1{

    private mesmerizationAbility: Mesmerization;

    constructor(name: string, health: number, power: number) {
        super(name, health, power);
        this.attackBehavior = new Attack();
        this.mesmerizationAbility = new Mesmerization();
    }

    public performAbility(player: Player1): void {
        this.mesmerizationAbility.ability(player);
    }

    public performAttack(player: Player1): void {
        // Проверяем, игнорируется ли урон
        if (this.mesmerizationAbility.ignoreDamage(player)) {
            console.log(`(${player.constructor.name}) ${player.name} пропускает ход из-за Заворожения!`);
            return; // Не наносим урон
        }
        super.performAttack(player); // Выполняем обычную атаку
    }
}
