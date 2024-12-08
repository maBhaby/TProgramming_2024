import { MallardDuck } from "./MallardDuck"

export class MiniDuckSimulator {

    private mallard: MallardDuck;

    constructor() {
        this.mallard = new MallardDuck();
        this.mallard.perfromQuack();
        this.mallard.perfromFly();
        this.mallard.display()
    }
    
}

new MiniDuckSimulator()