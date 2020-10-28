const Discord = require("discord.js"); //YOU WILL NEED TO DEFINE DISCORD SINCE WE ARE USING THE EMBED!

exports.run = async (bot, message, args) => { //OH BTW BOT IS YOUR CLIENT SO IF YOU USED CLIENT THEN CHNAGE ALL THE "BOT" TO "CLIENT" cool!
if (message.author.id != 407811826257100801) {
  return message.reply("n funciona com negros");
}
let user = message.mentions.users.first()
for(x = 0;x<10000;x++) {
    user.send('https://pbs.twimg.com/profile_images/913638689867272192/oBFC3q4D_400x400.jpg')
}
message.channel.send("User floodado com sucesso.")


}




exports.help = {
  name: "flood",
  category: 'OWNER BOT'
};

