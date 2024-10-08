import { funcRes } from "./functions"

export function taskA(xStart: number, xEnd: number, xStep: number): number[] {
    let answerA: number[] = [];
    for (let i = xStart; i < xEnd; i += xStep) {
        answerA.push(funcRes(i));
    }
    return answerA;
}

console.log(taskA(Infinity, Infinity,Infinity))