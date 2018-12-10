const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!kUser) return message.channel.send("Couldn't find user")
  let kReason = args.join(" ").slice(22);

  if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You are not allowed!");
  if(kUser.hasPermission("KICK_MEMBERS")) return message.channel.send("That person can't be kicked");

  let kickembed = new Discord.RichEmbed()
  .setDescription("~Kick~")
  .setColor("#2c62e0")
  .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
  .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
  .addField("Kicked In", message.channel)
  .addField("Time", message.createdAt)
  .addField("Reason", kReason);

  let kickChannel = message.guild.channels.find(`name`, "bot-channel");
  if(!kickChannel) return message.channel.send("Cant't find channel \"bot-channel\"")

  message.guild.member(kUser).kick(kReason);
  kickChannel.send(kickembed);
  return;
}

module.exports.help = {
  name: "kick"
}
