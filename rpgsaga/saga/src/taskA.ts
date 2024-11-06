import { funcRes } from './functions';

export function taskA(xStart: number, xEnd: number, xStep: number): number[] {
  const answerA: number[] = [];
  for (let i = xStart; i < xEnd; i += xStep) {
    answerA.push(funcRes(i));
  }
  return answerA;
}
