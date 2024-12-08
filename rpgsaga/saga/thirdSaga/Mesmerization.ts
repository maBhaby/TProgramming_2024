import { AbilityBehavior } from "./AbilityBehavior";
import { Player1 } from "./Player";

export class Mesmerization implements AbilityBehavior{
    private isActive: boolean = false; // Флаг для отслеживания использования способности

    ability(player: Player1): void {
        if (!this.isActive) {
            this.isActive = true; // Устанавливаем флаг в true при использовании способности
            console.log(`(${player.constructor.name}) ${player.name} использует Заворожение! Противник пропускает ход.`);
        } else {
            console.log(`(${player.constructor.name}) ${player.name} уже использовал Заворожение!`);
        }
    }

    public ignoreDamage(player: Player1): boolean {
        if (this.isActive) {
            this.isActive = false; // Обнуляем флаг после игнорирования урона
            return true; // Игнорируем урон
        }
        return false; // Не игнорируем урон
    }
}