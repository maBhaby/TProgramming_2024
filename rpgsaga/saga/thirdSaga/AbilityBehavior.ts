import { Player1 } from "./Player";

export interface AbilityBehavior {
    ability(opponent: Player1);
}