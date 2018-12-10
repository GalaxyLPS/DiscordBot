const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!rUser) return message.channel.send("Cant't find user.");
  let reason = args.join(" ").slice(22);

  let reportembed = new Discord.RichEmbed()
  .setDescription("Reports")
  .setColor("#7cff6b")
  .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
  .addField("Reported by", `${message.author} with ID: ${message.author.id}`)
  .addField("Channel", message.channel)
  .addField("Time", message.createdAt)
  .addField("Reason", reason);

  let reportschannel = message.guild.channels.find(`name`, "bot-channel");
  if(!reportschannel) return message.channel.send("Cant't find channel \"bot-channel\"")

  message.delete().catch(O_o=>{});
  reportschannel.send(reportembed);
  return;
}

module.exports.help = {
  name: "report"
}
