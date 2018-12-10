const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

  if(!message.guild.voiceConnection) return message.reply("I am not in a voice channel!");
  await message.guild.voiceConnection.disconnect();
  message.reply("I left the voice channel!");
  return;
}

module.exports.help = {
  name: "leave"
}
