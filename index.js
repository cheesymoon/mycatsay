const chalk = require('chalk');

const args = process.argv.slice(2);
const angryIndex = args.indexOf('--angry')

const isAngry = angryIndex >= 0;
if (isAngry) {
  args.splice(angryIndex);
}
const words = args.join(' ');

const phrase = isAngry
  ? chalk.redBright.bold(words)
  : chalk.yellowBright(words);

const catSay = `
      ／＞　 フ
     |  ${isAngry ? '\\' : '_'}　${isAngry ? '/' : '_'} |
   ／\` ミ＿xノ    ${phrase && `< ${phrase}`}
 /　　 　　 |
/　 ヽ　　 ﾉ
`;

console.log(chalk.white(catSay));