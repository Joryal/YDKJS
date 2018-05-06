```javascript
function foo(a) {
        var b = a;
        return a + b;
}

var c = foo(2);
```

1. Identifiez toutes les recherches du côté gauche (il y a trois!).
  * foo(a) - Qui inclut un subtil *var a = ..*.
  * var b = ..
  * var c = ..
2. Identifiez toutes les recherches du côté droit (il y a quatre!). 
  * foo(2..
  * = a;
  * a + ..
  * .. + b
