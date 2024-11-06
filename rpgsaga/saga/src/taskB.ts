import { funcRes } from './functions';

export function taskB(sliceOfXValues: number[]): number[] {
  const answerB: number[] = [];
  for (const element of sliceOfXValues) {
    answerB.push(funcRes(element));
  }
  return answerB;
}
