---
title: 'What is Scope'
author: 'Dan McAtee'
date: '2022-03-02'
image: 'img/scope.jpg'
tags:
  - javascript
  - scope
---

# What is Scope

The current context of execution. The context in which **values** and **expressions** are "visible" or can be referenced. If a variable or other expression is not "in the current scope", then it is unavailable for use. Scopes can also be layered in a hierarchy, so that child scopes have access to parent scopes, but not vice versa.

A **function** serves as a [[closure|lang.js.func.closure]] in JavaScript, and thus creates a scope, so that a variable defined exclusively within the function cannot be accessed from outside the function or within other functions. For instance, the following is invalid:

```js
function exampleFunction() {
  var x = 'declared inside function' // x can only be used in exampleFunction
  console.log('Inside function!')
  console.log(x)
}

console.log(x) // Causes error
```

However, the following code is valid due to the variable being declared outside the function, making it global:

```js
var x = 'declared outside function' // x can only be used in exampleFunction

exampleFunction()

function exampleFunction() {
  console.log('Inside function!')
  console.log(x)
}

console.log('Outside function!')
console.log(x)
```
