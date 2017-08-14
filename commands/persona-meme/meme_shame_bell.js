const discord = require ('discord.js');
var Client   =    require('mysql');
var settings = require('../../settings.js');
var randomHex = require('random-hex');
var dbclient = '';
var mysqlPool = '';

exports.run = (client, msg, [user]) => {
  const RiderEmbed = new discord.RichEmbed()
        RiderEmbed.setColor(randomHex.generate())
        RiderEmbed.setTimestamp()
        RiderEmbed.setDescription(`🔔 SHAME 🔔 ${user} 🔔 SHAME 🔔`, true)
        RiderEmbed.setImage("https://cdn.discordapp.com/attachments/267482689529970698/343219081983557634/92f18c51-b7ca-4f3a-ad1c-2e3aac767b9c.gif")
 msg.channel.sendEmbed(RiderEmbed, '', { disableEveryone: true });
};//run 

exports.conf = {
  enabled: true,
  selfbot: false,
  runIn: ["text", "dm", "group"],
  aliases: [],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
  requiredModules: [],
};

exports.help = {
  name: "shame",
  description: "Rings a bell on the server shaming the mentioned person",
  usage: "<user:mention>",
  usageDelim: "",
  type: "commands",
};