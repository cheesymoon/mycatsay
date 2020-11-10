const chalk = require('chalk');

const phrase = 'hi!';


const catSay = `
      ／＞　 フ
     |  _　_ |
   ／\` ミ＿xノ    ${phrase && `< ${phrase}`}
 /　　 　　 |
/　 ヽ　　 ﾉ
`;

console.log(chalk.white(catSay));