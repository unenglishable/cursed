#cursed

A nodejs project aimed at simple, high-speed cursor handling for terminal. It is mostly
just a wrapper around process.stdout methods.

Be aware that using `up`, `down`, `left`, or `right` at the respective edges of
the screen will not move the cursor (possibly overwriting text already on the
screen).

##Usage

```
var cursor = require('cursed');

cursor.down(10);
cursor.up(3);
...
```

##Methods

###position(col, row)

Move cursor to position `col`, `row`.

###move(cols, rows)

Move the cursor down `cols` and right `rows`.

###up([number])

Move the cursor up `number` lines.

###down([number])

Move the cursor down `number` lines.

###left([number])

Move the cursor left `number` lines.

###right([number])

Move the cursor right `number` lines.

###clearDown()

Clear the screen below current position.

###clearLine()

Clear the entire current line.

###clearToEOL()

Clear from the current position up to the end of the line.

###clearToBOL()

Clear from the current position back to the beginning of the line.
