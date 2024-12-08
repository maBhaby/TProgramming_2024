import { FlyBehavior } from "./FlyBehavior";
import { QuackBehavior } from "./QuackBehavior";

export abstract class Duck {

    protected flyBehavior: FlyBehavior;
    protected quackBehavior: QuackBehavior;

    public abstract display(): void;

    public perfromFly() {
        this.flyBehavior.fly();
    }

    public perfromQuack() {
        this.quackBehavior.quack();
    }

    public swim() {
        console.log("All ducks float, even decoys!");
    }
}

