exports.run = async (bot, message, args) => {
  if (message.author.id != ) {
    return message.channel.send("Não funciona com afrodescendentes.");
}
  if (!args || args.length < 1) return message.reply("Coloque o nome do comando que você quer recarregar.");

  let response = await bot.unloadCommand(args[0]);
  if (response) return message.channel.send(`Erro ao recarregar ${response}`);

  response = bot.loadCommand(args[0]);
  if (response) return message.channel.send(`Erro ao carregar ${response}`);

  message.channel.send(`\`${args[0]}\` recarregado`);
};

exports.help = {
  name: "reload",
  category: 'OWNER BOT'
};
