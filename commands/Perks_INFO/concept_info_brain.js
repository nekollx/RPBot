var settings = require('../../settings.js');
var randomHex = require('random-hex');
const discord = require ('discord.js');
var perktext = '';
var thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/LF.gif';
var mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/Fo4_Fortune_Finder.png';

            perktext += 'Brain (??? Minimum ???)\n';
            perktext += 'Rank 1) Clever and tricky you just have a mind for plannning, MP and IP are 40% higher.\n';
            perktext += 'Rank 2) MP and IP are 60% higher.\n';
            perktext += 'Rank 3) MP and IP are 80% higher.\n';
            perktext += 'Rank 4) MP and IP are 100% higher.\n';
            perktext += 'Rank 5) MP and IP are 120% higher.\n\n';

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
  name: "brain",
  description: "",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};//help