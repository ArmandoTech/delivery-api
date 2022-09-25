# areStrings()

- Recibe un array como param obligatorio, lanza err en caso contrario.
- Retorna un boolean indicando si todos los items del array son de tipo string

```
  const persons = [ "edarcode", "lorena" ]
  areStrings(persons) // true

  const aliens = [ "edarcode", { emote: "🤓" }, [] ]
  areStrings(aliens) // false
```
