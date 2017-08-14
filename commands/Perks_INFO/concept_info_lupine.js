var settings = require('../../settings.js');
var randomHex = require('random-hex');
const discord = require ('discord.js');
var perktext = '';
var thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/LF.gif';
var mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/Fo4_Fortune_Finder.png';

            perktext += 'Unbound (Lupine) (??? Minimum ???)\n';
            perktext += 'Rank 1) Most Riders are limited to limited to what they can do by the Driver they use, you aren\'t and can yse any ofthe tech in that series even if its not compatible with your driver.\n';
            perktext += 'Rank 2) Driver tech compatible with your driver is 20% stronger.\n';
            perktext += 'Rank 3) Create your own driver for your current system.\n';
            perktext += 'Rank 4) Created Driver tech is 20% stronger then the standard.\n';
            perktext += 'Rank 5) Use tech from other Driver systems.\n\n';

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
  name: "lupine",
  description: "",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};//help