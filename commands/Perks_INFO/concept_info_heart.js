var settings = require('../../settings.js');
var randomHex = require('random-hex');
const discord = require ('discord.js');
var perktext = '';
var thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/LF.gif';
var mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/Fo4_Fortune_Finder.png';

            perktext += 'Heart (??? Minimum ???)\n';
            perktext += 'Rank 1) You thrill for battle, it excites you, drives you on, makes you dangerous. HP is 40% higher, but the longer the battle wages the higher the chance to enter a battle fury which raises all SPECIALs by 1 but at the end you suffer a heart attack and die.\n';
            perktext += 'Rank 2) HP is 60% higher, in Battle Fury SPECIALs are raised by 2.\n';
            perktext += 'Rank 3) HP is are 80% higher, in Battle Fury SPECIALs are raised by 3.\n';
            perktext += 'Rank 4) HP is are 100% higher, in Battle Fury SPECIALs are raised by 4.\n';
            perktext += 'Rank 5) HP is are 120% higher, in Battle Fury SPECIALs are raised by 5.\n\n';

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
  name: "heart",
  description: "",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};//help