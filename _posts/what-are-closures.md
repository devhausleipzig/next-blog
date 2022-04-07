---
title: 'What are closures'
author: 'Dan McAtee'
date: '2022-03-06'
image: 'img/closure.jpg'
tags:
  - javascript
  - functions
  - closure
---

# What are closures

A **closure** is the combination of a function bundled together (enclosed) with references to its surrounding state (**the lexical environment**). In other words, a closure gives you access to an outer function's [[scope|lang.js.func.scope]] from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

## Lexical Scoping

Consider the following example code:

```js
function init() {
  var name = 'Dan' // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, a closure
    alert(name) // use variable declared in the parent function
  }
  displayName()
}
init()
```

`init()` creates a local variable called `name` and a function called `displayName()`. The `displayName()` function is an inner function that is defined in `init()` and is available only withing the body of the `init()` function. Not that the `dispalyName()` function has no local variables of its own. However, since inner function have access to the variables of outer functions, `displayName()` can access the variable `name` declared in the parent function `init()`.

## Closure Example

Cosider the following function:

```js
function makeFunc() {
  var name = 'Dan'
  function displayName() {
    alert(name)
  }
  return displayName
}
const myFunc = makeFunc()
myFunc()
```

Running this code has exactly the same effect as the previous example of the `init()` function above. What's different (and interesting) is that the `displayName()` inner function is returned from the outer function before being executed.

At first glance, it might seem unintuitive that this code still works. In some programming languages, the local variables within a function exist for just the duration of that functios execution. Once `makeFunc()` finishes executing, you might expect that the name variable would no longer be accessible. However, because the code still works as expected, this is obviously not the case in JavaScript.

The reason is that functions in JavaScript form closures. A closure is the combination of the function and the lexical environment withing which that function was declared. This environment consists of any local variables that were in-scope at the time the closure was created. In this case, `myFunc` is a reference to the instance of the function `displayName` that is created when `makeFunc` is run. The instance of `displayName` maintains a reference to its lexical environment, within which the variable `name` exists. For this reason, when `myFunc` is invoked, the variable `name` remains available for use, and "Dan" gets passed to `alert`

Here's a slightly more interesting example - a `makeAdder` function:

```js
function makeAdder(x) {
  return function (y) {
    return x + y
  }
}

const add5 = makeAdder(5)
const add10 = makeAdder(10)

console.log(add5(2)) // 7
console.log(add10(2)) // 12
```

In this example, we have defined a function `makeAdder(x)`, that takes a single argument `x`, and returns a new function. The function it returns takes a single argument `y`, and returns the sum of `x` and `y`.

In essence, `makeAdder` is a fucntion factory. It creates functions that can add a specific value to their argument. In the above example, the function factory creates to new functions - one that adds five to its argument, and one that adds 10.

`add5` and `add10` are both closures. They share the same function body definition, but store different lexical environments. In `add5`'s lexical environment, `x` is 5, while in the lexical environment for `add10`, `x` is 10.
