var settings = require('../../settings.js');
var randomHex = require('random-hex');
const discord = require ('discord.js');

exports.run = (client, msg) => {
			var randomID = settings.getRandomInt(1, 10);
			  const RiderEmbed = new discord.RichEmbed()
					RiderEmbed.setColor(randomHex.generate())
				if ((randomID == 1) || (randomID == 10)){
					RiderEmbed.setImage('http://www.denofgeek.us/sites/denofgeekus/files/styles/insert_main_wide_image/public/masked_rider_why_it_didnt_catch_on.png')
				} else if ((randomID == 3) || (randomID == 8)){
					RiderEmbed.setImage('https://i.ytimg.com/vi/vac1_WFCnM8/hqdefault.jpg')
				} else if ((randomID == 5) || (randomID == 6)){
					RiderEmbed.setImage('http://www.rovang.org/wiki/ferbus-mr.jpg')
				} else if ((randomID == 7) || (randomID == 4)){
					RiderEmbed.setImage('http://www.tvsinopse.kinghost.net/m/masked-rider1_arquivos/tvsinopse12015.jpg')
				} else {
					RiderEmbed.setImage('https://i.ytimg.com/vi/fOBy4qFdB_Y/hqdefault.jpg')
				}//if else
			  msg.channel.sendEmbed(
              RiderEmbed, 'Oh Great and Powerful Furbus please show these mortals your mercy.', { disableEveryone: true }
              );//message.channel.sendEmbed
};

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: ["supplicat", "supplicate", "supplication", "suppli"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "supplicat",
  description: "",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};