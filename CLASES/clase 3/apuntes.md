# Ciclos

Tambien se le llaman bucles o iterraciones. Volver a repetir un trzo de codigo. 

# ciclos por conteo
for (un numero de veces especificas)

# ciclos por condicionales
Se repite mientras la condición...  do, do while

# For

"desde" zona donde se estableces valores iniciales de las variables que controlan el ciclo. 

El "hasta" es el único elemento que decide si se repite o se detiene el ciclo.

La "actualización" es el nuevo valor que se asigna después de cada repetición a las variables que controlan la repetición.

```javascript
for(desde; hasta; actualización) {
 … //lo que se escriba acá se ejecutará mientras dure el ciclo
}
```

# Sentencia Break

A veces, cuando escribimos una estructura for, necesitamos que bajo cierta condición el ciclo se interrumpa. Para eso se utiliza la sentencia break.
Al escribir esa línea dentro de un ciclo for, el mismo se interrumpirá como si hubiera finalizado.

```javascript
for (let i = 1; i <= 10; i++) {
    //Si la variable i es igual 5 interrumpo el for. 
    if(i == 5){
        break;
    }
    alert(i);
}
```

# Sentencia continue
A veces, cuando escribimos una estructura for, necesitamos que bajo cierta condición, el ciclo saltee esa repetición y siga con la próxima. Para eso se utiliza la sentencia continue. (NO ES TAN COMÚN)

```javascript
for (let i = 1; i <= 10; i++) {
    //Si la variable i es 5, no se interpreta la repetición
    if(i == 5){
        continue;
    }
    alert(i);
}
```
# While
El funcionamiento del bucle while se resume en: mientras se cumpla la condición indicada, repite las instrucciones incluidas dentro del bucle.

# DO WHILE
La estructura do...while permite crear bucles que se ejecutan una o más veces, dependiendo de la condición indicada.
A diferencia de while, garantiza que el bloque de código se interpreta al menos una vez, porque la condición se evalúa al final.

# Switch
No es un ciclo. Cuando tengo mucho para evaluar. en vez de poner el if, if else y else. Es una estructura más amigable.