import { ChicagoPizza } from "./ChicagoPizza";
import { Pizza } from "./Pizza";
import { PizzaStore } from "./PizzaStore";

class NYPizzaStore extends PizzaStore {
  createPizza(type: string): Pizza {
    if(type === 'chicago') {
      return new ChicagoPizza()
    } return new ChicagoPizza()
  }
}
