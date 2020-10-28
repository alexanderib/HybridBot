const Discord = require("discord.js");

exports.run = async (bot, message, args) => {

    let user = message.mentions.users.first() || message.author;
    let embed = new Discord.RichEmbed()
    .setAuthor("Avatar do " + user.username)
    .setImage(user.avatarURL)
    message.channel.send({embed});
}


exports.help = {
  name: "avatar",
};




