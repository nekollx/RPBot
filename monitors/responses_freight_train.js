var settings = require('../settings.js');
const discord = require ('discord.js');
var randomHex = require('random-hex');

exports.run = (client, msg) => {
	var randommemeID = settings.getRandomInt(1, 44);
  var images = [
                'http://www.maskedriders.info/Mee6RP/statusPic/trains/13949913.gif', 
                'http://www.maskedriders.info/Mee6RP/statusPic/trains/train-animated-gif-4.gif', 
                'http://www.maskedriders.info/Mee6RP/statusPic/trains/vintage-train-animated-gif-3.gif' 
               ];//array of images to use
  var slapID = settings.getRandomInt(1, images.length);
  var slapSTRING = images[(slapID-1)];
	
  if ((msg.author.id != 275766529121845249)/*rpbot*/ 
      && (msg.author.id != 170915625722576896)/*Discord RPG*/ 
      && (msg.author.id != 159985870458322944)/*Mee6*/ 
      && (msg.author.id != 83010416610906112)/*Nightbot*/
      && (msg.author.id != 169678500893163520)/*pikagirl*/
      && (msg.author.id != 280837589303296010)/*rpbot neo*/
      && (msg.author.id != 189702078958927872)/*eris bot*/
      && (msg.author.id != 141016540240805888)/*sweetie bot*/){

      if ((randommemeID == 3)  || 
          (msg.content.toLowerCase().startsWith('...like')) || 
          (msg.content.toLowerCase().startsWith('like')) || 
          (msg.content.toLowerCase().endsWith('freight train')) || 
          (msg.content.toLowerCase().endsWith('freight train.'))){
        var description = '...like a freight train.';
        if (((msg.content.toLowerCase().startsWith('...like')) || (msg.content.toLowerCase().startsWith('like'))) && 
            (!msg.content.toLowerCase().endsWith('a') || (!msg.content.toLowerCase().endsWith('a')))){
            description = 'a freight train.';} 
        if (((msg.content.toLowerCase().startsWith('...like a')) || (msg.content.toLowerCase().startsWith('like a'))) && 
            (!msg.content.toLowerCase().endsWith('freight train') || (!msg.content.toLowerCase().endsWith('freight train.')))){
            description = 'freight train.';} 
        if (((!msg.content.toLowerCase().startsWith('...like a')) || (!msg.content.toLowerCase().startsWith('like a'))) && 
            (msg.content.toLowerCase().endsWith('freight train') || (msg.content.toLowerCase().endsWith('freight train.')))){
            description = '...like a';} 
        if (((msg.content.toLowerCase().startsWith('...like a freight')) || (msg.content.toLowerCase().startsWith('like a freight'))) && 
            (!msg.content.toLowerCase().endsWith('train') || (!msg.content.toLowerCase().endsWith('train.')))){
            description = 'train.';} 
        if (((msg.content.toLowerCase().startsWith('...like a freight')) || (msg.content.toLowerCase().startsWith('like a freight'))) && 
            (msg.content.toLowerCase().endsWith('train') || (msg.content.toLowerCase().endsWith('train.')))){
            description = '...like a freight train.';} 

        const RiderEmbed = new discord.RichEmbed()
              RiderEmbed.setColor(randomHex.generate())
              RiderEmbed.setThumbnail(slapSTRING)
              RiderEmbed.setDescription(description)
        msg.channel.send({embed: RiderEmbed});
		};//if 
	};//if
};//run

exports.conf = {
  enabled: true,
  runIn: ["#general"],
};//conf