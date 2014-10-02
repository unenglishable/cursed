module.exports = {
  clearDown: function() {
    process.stdout.clearScreenDown();
  },
  clearLine: function() {
    process.stdout.clearLine(0);
  },
  clearToEOL: function() {
    process.stdout.clearLine(1);
  },
  clearToBOL: function() {
    process.stdout.clearLine(-1);
  },
  up: function(rows) {
    if (rows || rows === 0) {
      process.stdout.moveCursor(0,-rows);
    }
    else {
      process.stdout.moveCursor(0,-1);
    }
  },
  down: function(rows) {
    if (rows || rows === 0) {
      process.stdout.moveCursor(0,rows);
    }
    else {
      process.stdout.moveCursor(0,1);
    }
  },
  right: function(cols) {
    if (cols || cols === 0) {
      process.stdout.moveCursor(cols,0);
    }
    else {
      process.stdout.moveCursor(1,0);
    }
  },
  left: function(cols) {
    if (cols || cols === 0) {
      process.stdout.moveCursor(-cols,0);
    }
    else {
      process.stdout.moveCursor(-1,0);
    }
  },
  position: function(row, col) {
      process.stdout.cursorTo(row,col);
  }
};
