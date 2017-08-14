var settings = require('../../settings.js');
var randomHex = require('random-hex');
const discord = require ('discord.js');

exports.run = (client, msg) => {
		var randomstoryID = settings.getRandomInt(1, 14);
			   const RiderEmbed = new discord.RichEmbed()
					 RiderEmbed.setColor(randomHex.generate())
				if ((randomstoryID == 1) || (randomstoryID == 14)){
						RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/170391854.jpg')
				} else if ((randomstoryID == 3) || (randomstoryID == 12)){
						RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/9dc1bdec-3d77-47f0-bc7e-40161528b2ba.png')
				} else if ((randomstoryID == 5) || (randomstoryID == 10)){
						RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/1cd7081789e6e2963d4f437ad7b88241.jpg')
				} else if ((randomstoryID == 7) || (randomstoryID == 8)){
						RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/49646Dough_1015_NF_403.jpg')
				} else if ((randomstoryID == 9) || (randomstoryID == 6)){
						RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/baked_donuts__square.jpg')
				} else if ((randomstoryID == 11) || (randomstoryID == 4)){
						RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/BX0903H_cinnamon-baked-doughnuts-recipe_s4x3.jpg')
				} else if ((randomstoryID == 13) || (randomstoryID == 2)){
						RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/Omnomnom-490x275.png')
				}//if else
                msg.channel.send({embed: RiderEmbed});
};

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: ["doughnuts"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "doughnut",
  description: "",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};