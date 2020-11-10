const chalk = require('chalk');

const args = process.argv.slice(2);

const phrase = args.join(' ');

const catSay = `
      ／＞　 フ
     |  _　_ |
   ／\` ミ＿xノ    ${phrase && `< ${phrase}`}
 /　　 　　 |
/　 ヽ　　 ﾉ
`;

console.log(chalk.white(catSay));