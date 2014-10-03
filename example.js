var cursor = require('./cursed');
process.stdout.write('\n\n');
cursor.up(2);

var data = {
  a: 0,
  b: 0,
  c: 0
};

var loop = function(num, pos, wait) {
  setInterval(function() {
    cursor.down(pos);
    process.stdout.write(num.toString());
    num++;
    cursor.left(num.toString().length);
    cursor.up(pos);
  }, wait)
}

loop(data.a, 0, 300)
loop(data.b, 1, 200)
loop(data.c, 2, 100)
