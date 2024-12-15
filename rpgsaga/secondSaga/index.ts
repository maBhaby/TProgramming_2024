import { Game } from "./src/core/Game";

const game = new Game(2)
game.start()


class Beverage {
  description: string
  milk?: number
  soy?: number
  mocha?: number
  whip?: number

  public cost(): number {
    let currentPrice = 0
    if (this.hasMilk()) {
      currentPrice += this.milk
    } if (this.hasSoy()) {
      currentPrice += this.soy
    } if (this.hasMocha()) {
      currentPrice += this.mocha
    } if (this.hasWhip()) {
      currentPrice += this.whip
    }
    return currentPrice
  }

  hasMilk() {
    return Boolean(this.milk)
  }
  setMilk(price: number) {
    this.milk = price
  }
  hasSoy() {
    return Boolean(this?.soy)
  }
  setSoy(price: number) {
    this.soy = price
  }
  hasMocha() {
    return Boolean(this?.mocha)
  }
  setMocha(price: number) {
    this.mocha = price
  }
  hasWhip() {
    return Boolean(this?.whip)
  }
  setWhip(price: number) {
    this.whip = price
  }
}

class DarkRoast extends Beverage {
  constructor() {
    super()
    this.description = "Most Excellent Dark Roast";
  }
  public cost(): number {
    return 1.4 + super.cost()
  }
}