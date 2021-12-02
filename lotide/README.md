# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @sahar11/lotide`

**Require it:**

`const _ = require('@sahar11/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(...)`: description
* `function2(...)`: description
* `function3(...)`: description
*
* `countLetters()`: returns an object with the amount of times each letter occurs

* `countOnly()`: counts how many times 'thingToCount' appears in object/array

* `eqArray()`: compares two arrays and returns true or false if theyre equal or not

* `eqObjects()`: compares two objects and returns true or false if theyre equal or not
* `findKey()`: Loops through object and returns the key if callback function returns true
* `findKeyByValue()`: Searches an array and returns the key of a specific value
* `head()`: returns the first value of an array
* `letterPositions()`: returns an object with all the indexes that each letter appears in
* `map()`: clone of array.map()
* `middle()`: returns the middle value(s) of an array
* `tail()`: returns an array without its head
* `takeUntil()`: returns a "slice of the array with elements taken from the beginning." It will keep going until the callback/predicate returns a truthy value
* `without()`: returns array without valueToRemove
