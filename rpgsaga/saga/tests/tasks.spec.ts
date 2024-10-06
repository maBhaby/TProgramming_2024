import { funcRes } from "../src/functions";
import { taskA } from "../src/taskA";
import { taskB } from "../src/taskB";

describe('Testing...', () => {
    describe('funcRes.', () => {
        test('put zero', () => {
            expect(funcRes(0)).toBeNaN
        })
        test('put zero', () => {
            expect(funcRes(0)).toStrictEqual(2)
        })
    });
    describe('taskA', () => {
        test('normal input', () => {
            expect(taskA(1.5, 3.5, 0.4)).toStrictEqual([
                -12.050514435454069,
                -3421.1377910716424,
                222.3016266177437,
                27.05943703309871,
                9.990239702388811,
                5.3598432723001705
              ])
        })
    })
    describe('taskB', () => {

    })
});