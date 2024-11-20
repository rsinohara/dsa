// Read a json file and parse it to an array of objects
import cases from './testCases/testCases.json';

import bruteForce from './solutions/bruteForce';
import sort from './solutions/sort';
import hashmap from './solutions/hashmap';

import { TestCase } from '../../types/testCase';

export const solutions = [
  { function: bruteForce, name: 'Brute force approach' },
  { function: sort, name: 'Sort then search' },
  { function: hashmap, name: 'Using hashmap' },
];

export const testCases = cases as unknown as TestCase[];
