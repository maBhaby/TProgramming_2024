import { funcRes } from "./functions"

export function taskB(slice_of_x_values: number[]): number[] {
    let answer_b: number[] = [];
    for (let element of slice_of_x_values) {
        answer_b.push(funcRes(element));
    }
    return answer_b;
}

console.log(taskB([-1,-2,-3,-3]))