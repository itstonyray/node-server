`-¿Qué sucedio al usar async y await?`

Al utilizar `async` y `await`, podemos escribir código asíncrono y que este parezca síncrono. La palabra clave `async` se utiliza para definir una función asíncrona, y la palabra clave `await` se utiliza para esperar a que una promesa se resuelva antes de proceder a la siguiente línea de código. Esto nos permite escribir código que se parece más al código síncrono tradicional y facilita el manejo de operaciones asíncronas.

En este caso, utilizamos `async` y `await` en la función `showMenu()` para esperar las promesas devueltas por las funciones `addTask()`, `deleteTask()` y `completeTask()`. Con el fin de asegurar que cada operación de tarea se complete antes de pasar a la siguiente iteración del bucle.

`-¿Qué sucedio al usar el método then()?`

Por otra parte, el método `then()` es una forma de manejar promesas encadenando métodos. Nos permite adjuntar una función callback que se ejecutará cuando la promesa sea resuelta o rechazada. Usando `then()`, podemos especificar qué debe ocurrir después de que se cumpla una promesa.

En nuestro caso, si eligimos utilizar el método `then()` en lugar de `async/await`, puedes encadenar las llamadas a `then()` para manejar las promesas devueltas por las funciones de tarea. El método `then()` nos va a permitir manejar promesas secuencialmente encadenándolas. Es de mucha utilidad cuando tenemos múltiples operaciones asíncronas que necesitan ser ejecutadas en un orden específico.


`-¿Qué diferencias encontraste entre async, await y el método then()?`

La principal diferencia entre `async/await` y el método `then()` es la forma en la que se escribe el código. El método `async/await` nos permite escribir código asíncrono de manera más sencilla y facil de entender, mientras que el método `then()` nos ofrece una forma más explícita y flexible de manejar promesas.

En general, el que eligamos entre `async/await` y el método `then()` va a depender de las preferencias personales y de los requerimientos específicos de nuestro código. Ambos métodos son válidos y sirven para manejar operaciones asíncronas de forma efectiva.