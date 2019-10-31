const colors = require('colors');

class SuperConsole {
  constructor(string) {
    this.string = string;
  }

  bold() {
    this.string = colors.bold(this.string);
    return this;
  }

  color(colorName) {
    if (SuperConsole.supportedColors().indexOf(colorName) === -1) {
      new SuperConsole('[SUPER-CONSOLE] - COR NÃO SUPORTADA').color('red').bold().log();
    }

    this.string = colors[colorName](this.string);
    return this;
  }

  bg(colorName) {
    if (SuperConsole.supportedColors().indexOf(colorName) === -1) {
      new SuperConsole('[SUPER-CONSOLE] - COR NÃO SUPORTADA NO').color('red').bold().log();
    }

    this.string = colors[`bg${colorName.charAt(0).toUpperCase()}${colorName.slice(1)}`](this.string);
    return this;
  }

  log() {
    // eslint-disable-next-line no-console
    console.log(this.string);
  }

  get() {
    return this.string;
  }

  static colorByType(type) {
    switch (type) {
      case 'info':
        return 'cyan';
      case 'error':
        return 'red';
      case 'warning':
        return 'yellow';
      case 'success':
        return 'green';
      default:
        return 'white';
    }
  }

  static groupLog({
    type,
    group,
    groupColor = 'white',
    message,
    messageColor = 'white',
    reason,
    reasonColor = 'white',
    showTime = true,
  }) {
    const date = new Date();
    let timeNow = '';
    const parsedDate = `[${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}]`;
    if (showTime) timeNow = `${new SuperConsole(parsedDate).bold().get()}`;

    const gColor = type ? SuperConsole.colorByType(type) : groupColor;
    const mColor = type ? SuperConsole.colorByType(type) : messageColor;
    const rColor = type ? SuperConsole.colorByType(type) : reasonColor;

    let result = '\n';
    result = `${result}${timeNow}[${new SuperConsole(group).color(gColor).bold().get()}]`;
    result = `${result} - `;
    result = `${result}${new SuperConsole(message).color(mColor).get()}`;

    if (reason) {
      result = `${result}\n${timeNow}`;
      result = `${result}${new SuperConsole('[REASON]').color(gColor).bold().get()}: `;
      result = `${result}${new SuperConsole(reason).color(rColor).get()}`;
    }

    result = `${result}\n`;
    // eslint-disable-next-line no-console
    console.log(result);
  }

  static supportedColors() {
    return [
      'black',
      'brightBlack',
      'white',
      'brightWhite',
      'grey',
      'brightGrey',
      'red',
      'brightRed',
      'magenta',
      'brightMagenta',
      'yellow',
      'brightYellow',
      'cyan',
      'brightCyan',
      'green',
      'brightGreen',
    ];
  }
}

module.exports = SuperConsole;
