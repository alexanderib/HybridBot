const base64 = require("js-base64").Base64;
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const b64Decoded = base64.decode(args.join(" "));
    let embed = new Discord.RichEmbed()
    .setAuthor('Base64 Decode')
    .setColor('RANDOM')
    .addField(':inbox_tray: Input', `\`\`\`js\n${args.join(" ")}\`\`\``)
    .addField(':outbox_tray: Output', `\`\`\`\n${b64Decoded}\`\`\``)
    message.channel.send(embed)
}
 
module.exports.help = {
  name: "decode"
}