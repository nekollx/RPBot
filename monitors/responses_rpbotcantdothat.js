var settings = require('../settings.js');

exports.run = (client, msg) => {
	var randommemeID = settings.getRandomInt(1, 82);
    //console.log('Neo is monitoring for a response: '+ msg.content + ' and rolled a '+randommemeID);
	if (
                                            (msg.author.id != 275766529121845249)/*rpbot*/ 
                                         && (msg.author.id != 170915625722576896)/*Discord RPG*/ 
                                         && (msg.author.id != 159985870458322944)/*Mee6*/ 
                                         && (msg.author.id != 83010416610906112)/*Nightbot*/
                                         && (msg.author.id != 169678500893163520)/*pikagirl*/
                                         && (msg.author.id != 280837589303296010)/*rpbot neo*/
                                         && (msg.author.id != 189702078958927872)/*eris bot*/
                                         && (msg.author.id != 141016540240805888)/*sweetie bot*/
                                                                                                        ){
		if ((randommemeID == 9)  && (msg.author.id != 237905336143577088)/*LLX*/) {
			msg.reply('I\'m sorry '+ msg.author.username + ' I can\'t do that.\n...\n..\n.\nJust Kidding.');
		};//if
	};//if
};//run

exports.conf = {
  enabled: true,
};//conf