var settings = require('../../settings.js');
var randomHex = require('random-hex');
const discord = require ('discord.js');
var perktext = '';
var thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/LF.gif';
var mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/Fo4_Fortune_Finder.png';

            perktext += 'Counter culture (??? Minimum ???)\n';
            perktext += 'Rank 1) Gender specific perks and other effects don\'t work on you, and in fact you gain the effect in reverse against the user.\n';
            perktext += 'Rank 2) Reversed effects are 10% stronger against the owner.\n';
            perktext += 'Rank 3) Reversed effects are 20% stronger against the owner.\n';
            perktext += 'Rank 4) Reversed effects are 30% stronger against the owner.\n';
            perktext += 'Rank 5) Reversed effects are 40% stronger against the owner, and theire is a 5% chance that each of your attacks with induce SEXCHANGE on the target.\n';
            perktext += 'Effected Perks: Black Widow/Lady Killer, Aquaboy/girl, Actionboy/Girl, Mysterious Stranger/Miss Fortune, Partyboy/girl, Ninja/Konoichi, Intimidation/Sex Appeal, .\n\n';

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
  name: "counter-culture",
  description: "",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};//help