import { solutions } from '.';
import { testCases } from '.';

const PROBLEM_NAME = 'Leet-01-Two-sum';

describe(PROBLEM_NAME, () => {
  solutions.map((solution, i) => {
    describe(`Testing solution : ${i}: ${solution.name}`, () => {
      testCases.map((testCase, j) => {
        test(`Test inputs: ${testCase.inputs.join('|')} => ${
          testCase.output as string
        }`, () => {
          expect(
            solution.function(testCase.inputs[0], testCase.inputs[1]),
          ).toStrictEqual(testCase.output);
        });
      });
    });
  });
});
