const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

 if(!['781216386286223360'].some(role => message.member.roles.cache.get(role)) && !message.member.hasPermission('ADMINISTRATOR')) return message.reply(`Bu Komut İçin Yetkiniz Bulunmamaktadır.`) 
  
let tag = ""
const kayıtlı = message.guild.roles.cache.find(r => r.id === '781216804667392051')
const kayıtsız = message.guild.roles.cache.find(r => r.id === '781216659436339200')

if(!kayıtlı) return message.reply('Kayıtlı Rolü Ayarlanmamış.') 
if(!kayıtsız) return message.reply('Kayıtsız Rolü Ayarlanmamış.') 
  
let member = message.mentions.users.first() || client.users.cache.get(args.join(' '))
if(!member) return message.channel.send('Kimi Kayıt Etmem Gerekiyor ?')
let stg = message.guild.member(member)
let isim = args[1]
let yas = args[2]
if(!isim) return message.reply('İsim Belirt.')
if(!yas) return message.reply('Yaş Belirt.')

stg.setNickname(`${tag} ${isim} | ${yas}`)  
stg.roles.add(kayıtlı)
stg.roles.remove(kayıtsız)

db.add(`kayıtSayi.${message.author.id}`, 1)
db.add(`kadinUye.${message.author.id}`, 1)
let kadın = db.get(`kadinUye.${message.author.id}`);
let kayıtlar = db.fetch(`kayıtSayi.${message.author.id}`); 
  
const embed = new Discord.MessageEmbed()
.setTitle(`Kayıt İşlemi Tamamlandı`)
    .addField(`<a:zmrt:781255048029667398> Kayıt Eden:`, `<@${message.author.id}> `) 
    .addField(`<a:tik:781254880428949536> Kayıt Edilen:`, `<@${stg.user.id}> `)
    .addField(`<a:siyah:781255002349633576> Verilen Rol:`, `<@&${kayıtlı.id}> `) 
    .addField(`<a:sonsuz:781254943171411968> Alınan Rol:`, `<@&${kayıtsız.id}> `)
    .addField(`<a:dia:781254878923849749> Yeni İsmin:`, `\`${tag} ${isim} | ${yas}\` `) 
    .addField(`<a:cc:781255054848950303> Yetkili Toplam:`, `\`${kayıtlar}\` Kayıtlara Sahip.`)
.setFooter(`Pinkie Bella ♥ Ropenizim`)
.setColor('GREEN')
client.channels.cache.get('781214721621753916').send(embed)
  
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['kadın','k','woman','girl', 'kız'],
    permLevel: 0
};

exports.help = {
    name: 'kadın',
};