const base64 = require("js-base64").Base64;
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const b64Encoded = base64.encode(args.join(" "));
    let embed = new Discord.RichEmbed()
    .setAuthor('Base64 Encode')
    .setColor('RANDOM')
    .addField(':inbox_tray: Input', `\`\`\`js\n${args.join(" ")}\`\`\``)
    .addField(':outbox_tray: Output', `\`\`\`\n${b64Encoded}\`\`\``)
    message.channel.send(embed)
}


 
module.exports.help = {
  name: "encode"
}