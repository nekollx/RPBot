var settings = require('../../settings.js');
var randomHex = require('random-hex');
const discord = require ('discord.js');
var perktext = '';
var thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/LF.gif';
var mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/Fo4_Fortune_Finder.png';

            perktext += 'Angel (??? Minimum ???)\n';
            perktext += 'Rank 1) All persusation/charisma attempts are 10% easer.\n';
            perktext += 'Rank 2) All persusation/charisma attempts are 20% easer.\n';
            perktext += 'Rank 3) All persusation/charisma attempts are 30% easer.\n';
            perktext += 'Rank 4) All persusation/charisma attempts are 40% easer.\n';
            perktext += 'Rank 5) All persusation/charisma attempts are 50% easer.\n\n';

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
  name: "angel",
  description: "",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};//help