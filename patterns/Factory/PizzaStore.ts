import { Pizza } from './Pizza'

export abstract class PizzaStore {
  public orderPizza(type: string): Pizza {
    const pizza = this.createPizza(type);

    pizza.prepare()
    pizza.bake()
    pizza.cut()
    pizza.box()

    return pizza
  }

  abstract createPizza(type: string): Pizza
}
