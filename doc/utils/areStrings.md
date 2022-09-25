# areStrings()

- Receives an array as mandatory param, throws err otherwise.
- Returns a boolean indicating if all the items in the array are of type string

```
  const persons = [ "edarcode", "lorena" ]
  areStrings(persons) // true

  const aliens = [ "edarcode", { emote: "🤓" }, [] ]
  areStrings(aliens) // false
```
