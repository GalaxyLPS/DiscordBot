const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Couldn't find user")
    let bReason = args.join(" ").slice(22);

    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You are not allowed!");
    if(bUser.hasPermission("BAN_MEMBERS")) return message.channel.send("That person can't be kicked");

    let banembed = new Discord.RichEmbed()
    .setDescription("~Ban~")
    .setColor("#960000")
    .addField("Banned User", `${bUser} with ID ${bUser.id}`)
    .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Banned In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", bReason);

    let banChannel = message.guild.channels.find(`name`, "bot-channel");
    if(!banChannel) return message.channel.send("Cant't find channel \"bot-channel\"")

    message.guild.member(bUser).ban(bReason);
    banChannel.send(banembed);
    return;
}

module.exports.help = {
  name: "ban"
}
