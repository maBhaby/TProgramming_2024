import { Player1 } from "./Player";

export interface AttackBehavior {
    attack(opponent: Player1): void;
}