var settings = require('../../settings.js');
var randomHex = require('random-hex');
const discord = require ('discord.js');
var perktext = '';
var thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/LF.gif';
var mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/Fo4_Fortune_Finder.png';

            perktext += 'Dangerous Zombie (??? Minimum ???)\n';
            perktext += 'Rank 1) They knock you down but you just come back. When killed you revive with 50% HP/AP/IP and -3 to all SPECIALs for the next hour.\n';
            perktext += 'Rank 2) When killed you revive with 60% HP/AP/IP and -2 to all SPECIALs for the next hour.\n';
            perktext += 'Rank 3) When killed you revive with 70% HP/AP/IP and -1 to all SPECIALs for the next hour.\n';
            perktext += 'Rank 4) When killed you revive with 80% HP/AP/IP and no SPECIALs reduction for the next hour.\n';
            perktext += 'Rank 5) When killed you revive with 90% HP/AP/IP and +1 to all SPECIALs for the next hour.\n\n';

exports.run = (client, msg) => {
	const RiderEmbed = new discord.RichEmbed()
		  RiderEmbed.setColor(randomHex.generate())
		  RiderEmbed.setURL('http://www.maskedriders.info/Mee6RP/index.php')
          //RiderEmbed.setThumbnail(thumb)
          //RiderEmbed.setImage(mainpic)
		  RiderEmbed.setDescription(perktext, true)
    msg.channel.sendEmbed(
    RiderEmbed, '', { disableEveryone: true }
    );//message.channel.sendEmbed
};//run

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: [],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: []
};//conf

exports.help = {
  name: "zombie",
  description: "",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};//help