const urban = require("relevant-urban");
const Discord = require("discord.js");

exports.run = async (client, message, args, tools) => {


  if (!args[0]) return message.channel.send(`***Digita alguma coisa, seu negro***`);

  let res = await urban(args.join(' ')).catch(e => { 
    return message.channel.send('***Não foi possivel encontrar esta palavra.***');
  });

  const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle(res.word)
    .setDescription(`**Definition:**\n*${res.definition}*\n\n**Example:**\n*${res.example}*`)
    .addField('Rating', `**\`Upvotes: ${res.thumbsUp} | Downvotes: ${res.thumbsDown}\`**`)

  if (res.tags.length > 0 && res.tags.join(' ').length < 1024) {
    embed.addField('Tags', res.tags.join(', '), true)
  }

  message.channel.send(embed);
}

module.exports.help = {
  name: "urban"
}