const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("Sorry but you cant give roles!");
  let rMember = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!rMember) return message.reply("Can't find that user!");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Specify a role!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Can't find that role");

  if(!rMember.roles.has(gRole.id)) return message.reply("They dont't have that role!");
  await(rMember.removeRole(gRole.id));

  try {
    await rMember.send(`RIP, you lost the role ${gRole.name}.`);
  } catch(e) {
    message.channel.send(`Congrats to <@${rMember.id}>, we removed ${gRole.name} from them. We tried to DM them, but their DMs are locked. :(`);
  }

}

module.exports.help = {
  name: "removerole"
}
