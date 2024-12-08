import { AbilityBehavior } from "./AbilityBehavior";
import { Player1 } from "./Player";

export class FireArrows implements AbilityBehavior{
    private isActive: boolean = false; // Флаг для отслеживания использования способности

    ability(player: Player1): void {
        if (!this.isActive) {
            this.isActive = true; // Устанавливаем флаг в true при использовании способности
            console.log(`(${player.constructor.name}) ${player.name} использует Огненные стрелы! Противник будет гореть.`);
        } else {
            console.log(`(${player.constructor.name}) ${player.name} уже использовал Огненные стрелы!`);
        }
    }

    public applyBurnDamage(player: Player1): void {
        if (this.isActive) {
            player.health -= 2; // Наносим 2 единицы урона
            console.log(`(${player.constructor.name}) ${player.name} теряет 2 единицы жизни от Огненных стрел!`);
        }
    }
}