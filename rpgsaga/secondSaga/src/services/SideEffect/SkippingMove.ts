import { SideEffectBehavior } from "../../interfaces";
import { Player } from "../Players";

export class SkippingMove implements SideEffectBehavior {
  private _isActiveEffect: boolean

  private _player: Player

  private _usageCounter: number

  get isActiveEffect() {
    return this._isActiveEffect
  }

  static MAX_USAGE_COUNT = 1

  constructor(player: Player) {
    this._player = player
    this._isActiveEffect = true
    this._usageCounter = 0
  }

  activate(): void {
    if (this.isActiveEffect) {
      // засетать параметр конерктного дебафа
      console.log(this._player)

      this._updateUsability()
    }
  }

  private _updateUsability() {
    this._usageCounter += 1

    if (this._usageCounter >= SkippingMove.MAX_USAGE_COUNT) {
      this._isActiveEffect = false
    }
  }
}
