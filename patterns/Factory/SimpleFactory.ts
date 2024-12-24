import { ChicagoPizza } from "./ChicagoPizza";
import { Pizza } from "./Pizza";

export class SimplePizzaFactory {
  create(): Pizza {
    return new ChicagoPizza()
  }
}
