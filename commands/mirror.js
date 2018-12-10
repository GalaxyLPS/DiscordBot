const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  message.reply(message.author.avatarURL);
  return;
}

module.exports.help = {
  name: "mirror"
}
