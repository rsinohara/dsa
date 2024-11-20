# Leet code solutions repository

My main goal here is to have a place I can store solutions for my leet code
exercises in order to:

- Have nice annotations
- Share them with other students
- Create my own test cases

While leet code allows you to store multiple solutions and even add noted, it's
not possible to share them and I cannot create placeholders for solutions I want
to implement later.

# How to use

## Just checking solutions

Solutions are stored in this folder structure

-- Problem (name and number from leet code)
----Solutions (name of the solution
like "Brute Force" or "Two pointers")

## Testing solutions

Each problem also contains a series of test cases. They are stored in JSON to be
usable by other languages if needed.

Tests are provided for TS/JS. Just run the test command, specifying the index
test file for the given problem. All the solutions will be tested with the test
cases.

## Adding solutions

Just add a solution in a new file. Be sure to add the references in the index
file, so that it will be tested. You can add details about the solution in
readme.md for the problem.

=> Solutions should be named according to the (main) technique used for their
implementation, like:

- Brute force
- Stack

If there are more solutions with the same main technique, add more descriptions
like:

- Brute force
- Brute force with memo

## Adding a new problem

Copy an existing problem and add specific test cases. You can add more specific
types, and you can adapt the tests to take additional requirements or
simplifications into account (e.g. your problem accepts results in any order).
