import { SideEffectBehavior } from "../../interfaces";
import { Player } from "../Players";

export class FireDamageEffect implements SideEffectBehavior {
  private _additionalDamage: number;

  private _isActiveEffect: boolean

  private _usageCounter: number

  private _player: Player

  get isActiveEffect() {
    return this._isActiveEffect
  }

  static MAX_USAGE_COUNT = 2

  constructor(player: Player) {
    this._additionalDamage = 2;
    this._isActiveEffect = true
    this._usageCounter = 0
    this._player = player
  }

  activate(): void {
    if (this.isActiveEffect) {
      this._player.health -= this._additionalDamage

      this._updateUsability()
    }
  }

  private _updateUsability() {
    this._usageCounter += 1

    if (this._usageCounter >= FireDamageEffect.MAX_USAGE_COUNT) {
      this._isActiveEffect = false
    }
  }
}
