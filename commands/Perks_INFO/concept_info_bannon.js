var settings = require('../../settings.js');
var randomHex = require('random-hex');
const discord = require ('discord.js');
var perktext = '';
var thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/LF.gif';
var mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/Fo4_Fortune_Finder.png';

            perktext += 'Reverse Enginnering [Bannon] (??? Minimum ???)\n';
            perktext += 'Rank 1) You aren\'t creative enough to create your own inventions but you can make others works better, +1 to the Power Multipler of any class.\n';
            perktext += 'Rank 2) +2 to the Power Multipler of any class.\n';
            perktext += 'Rank 3) +3 to the Power Multipler of any class.\n';
            perktext += 'Rank 4) +4 to the Power Multipler of any class.\n';
            perktext += 'Rank 5) +5 to the Power Multipler of any class.\n\n';

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
  name: "bannon",
  description: "",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};//help