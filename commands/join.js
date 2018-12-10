const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

  if(!message.member.voiceChannel) return message.reply("You must be in a voice channel to let me join!");
  await message.member.voiceChannel.join();
  message.reply("I joined your voice channel!");
  return;
}

module.exports.help = {
  name: "join"
}
