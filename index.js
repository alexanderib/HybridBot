const Discord = require("discord.js");
const { promisify } = require("util");
const readdir = promisify(require("fs").readdir);
const Enmap = require("enmap");
const bot = new Discord.Client();

require("./node_modules/functions.js")(bot);
bot.config = require("./config.js");
bot.commands = new Enmap();

bot.on("ready", () => {
  bot.user.setActivity('pornô', { type: 'WATCHING' })
  console.log('bot on');
});

const init = async () => {
  const cmdFiles = await readdir("./commands/");
  cmdFiles.forEach(f => {
    if (!f.endsWith(".js")) return;
    const response = bot.loadCommand(f);
    if (response) console.log(response);
  });
  bot.login('');
};



bot.on("message", async message => {
  if (message.author.bot) return;
    if (message.content.indexOf(bot.config.prefix) !== 0) return;
    const args = message.content.slice(bot.config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const cmd = bot.commands.get(command);
    if (!cmd) return;
    message.flags = [];
    while (args[0] && args[0][0] === "-") {
      message.flags.push(args.shift().slice(1));
    }
  cmd.run(bot, message, args);
});
  
init();
