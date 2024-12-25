import { SideEffectBehavior } from "../../interfaces";

export class FreezeEffect implements SideEffectBehavior {
  activate(): void {
    throw new Error("Method not implemented.");
  } 
}
