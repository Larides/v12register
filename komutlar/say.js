const Discord = require("discord.js");

exports.run = async (client, message, args) => {
//-----------------------------------------------------------------------\\
  

const aktif = message.guild.members.cache.filter(aktif => aktif.presence.status != "offline").size
const toplam = message.guild.memberCount
const ses = message.guild.channels.cache.filter(channel => channel.type === "voice").map(channel => channel.members.size).reduce((a, b) => a + b)
const booster = message.guild.roles.cache.get('781269190719438919').members.size

//-----------------------------------------------------------------------\\

const embed = new Discord.MessageEmbed()
.setColor('BLACK')
.setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
.setDescription(`**<a:tik:781254880428949536> Toplam Üyelerimiz · \`${toplam}\`

<a:tik:781254880428949536> Aktif Üyelerimiz · \`${aktif}\`

<a:tik:781254880428949536> Sesteki Üyelerimiz · \`${ses}\`

<a:tik:781254880428949536> Boost Basan Üyelerimiz · \`${booster}\`**`)
message.channel.send(embed)
}

//-----------------------------------------------------------------------\\

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "say"
};