var settings = require('../settings.js');
var randomHex = require('random-hex');
const discord = require ('discord.js');

exports.run = (client, msg) => {
	var randommemeID = settings.getRandomInt(1, 82);
	if ((msg.author.id != 275766529121845249)/*rpbot*/ 
        && (msg.author.id != 170915625722576896)/*Discord RPG*/ 
        && (msg.author.id != 159985870458322944)/*Mee6*/ 
        && (msg.author.id != 83010416610906112)/*Nightbot*/
        && (msg.author.id != 169678500893163520)/*pikagirl*/
        && (msg.author.id != 280837589303296010)/*rpbot neo*/
        && (msg.author.id != 189702078958927872)/*eris bot*/
        && (msg.author.id != 141016540240805888)/*sweetie bot*/
        && (client.channel != 296255084633915394)/*rp channel*/){
		if (((randommemeID == 7) && (msg.author.id != 237905336143577088)/*LLX*/) || msg.content.startsWith('a moment of silence') || msg.content.startsWith('!prayer')){

            var images = [
						  'http://www.maskedriders.info/Mee6RP/statusPic/Kouta-san.jpg',
						  'http://www.maskedriders.info/Mee6RP/statusPic/gaim-46.jpg',
						  'http://www.maskedriders.info/Mee6RP/statusPic/Kouta_motb.jpg',
						  'http://www.maskedriders.info/Mee6RP/statusPic/gaim46-1009.jpg',
						  'http://www.maskedriders.info/Mee6RP/statusPic/976963e86566ac3d5db945a180d5df2a.jpg'
                        ];//array of images to use
			var slapID = settings.getRandomInt(1, images.length);
			var slapSTRING = images[(slapID-1)];

			const RiderEmbed = new discord.RichEmbed()
				  RiderEmbed.setColor(randomHex.generate())
				  RiderEmbed.setImage(slapSTRING)

			msg.channel.sendEmbed(RiderEmbed, 'Oh Lord Kouta forgive these mortals for they know not what they do.', { disableEveryone: true });
		};//if
	};//if
};//run

exports.conf = {
  enabled: true,
};//conf