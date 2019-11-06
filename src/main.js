const SuperConsole = require('./superConsole');

new SuperConsole('>> ALO ALO ALO <<').bg('black').log();
new SuperConsole('>> ALO ALO ALO <<').bg('white').log();
new SuperConsole('>> ALO ALO ALO <<').bg('grey').log();
new SuperConsole('>> ALO ALO ALO <<').bg('red').log();
new SuperConsole('>> ALO ALO ALO <<').bg('magenta').log();
new SuperConsole('>> ALO ALO ALO <<').bg('yellow').log();
new SuperConsole('>> ALO ALO ALO <<').bg('cyan').log();
new SuperConsole('>> ALO ALO ALO <<').bg('green').log();

module.exports = {
  SuperConsole,
};
