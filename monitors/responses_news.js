var   settings  = require('../settings.js');
var   randomHex = require('random-hex');
const discord   = require ('discord.js');

exports.run = (client, msg) => {
    var d = new Date();
    var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";
    var n = weekday[d.getDay()]; 

	var anouncement = "ANNOUCEMENTS";
	var anouncement2 = "ANNOUCEMENTS";
		anouncement = "Weekly shows Every Friday, Saturday, and Sunday starting at 6:30 PST/9:30 EST/8:30 Central at www.twitch.tv/cuppallx\n";
		anouncement += "Spandex Friday with 'Tiger and Bunny Finale Focus'\n";
		anouncement += "Toku Saturday with 'Mahou Precure Focus'\n";
		//anouncement += "Toku Saturday with 'Mahou Precure, SUPAIDAMAN, Kamen Rider Ex-Aid, Uchu Setai Kyuranger'\n";
		anouncement += "Power Sunday New Season with 'Spiderman and his Amazing Friends', 'Power Rangers Mystic Force', 'Mystic Knights of Tir Na Nog', and 'Glitter Force'\n";
		//anouncement += "Morphin' Monday with 'G3 Ponies - Dancing in the Clouds'";

    if (n == "Monday"){
		    anouncement2 = "Today is Monday.\n";
		    anouncement2 += "Toku Power Weekend starts in 4 days.\n";
    } else if (n == "Tuesday"){
		    anouncement2 = "Today is Tuesday.\n";
		    anouncement2 += "Toku Power Weekend starts in 3 days.\n";
    } else if (n == "Wednesday"){
		    anouncement2 = "Today is Wednesday.\n";
		    anouncement2 += "Toku Power Weekend starts in 2 days.\n";
    } else if (n == "Thursday"){
		    anouncement2 = "Today is Thursday.\n";
		    anouncement2 += "Toku Power Weekend starts tomarrow.\n";
    } else if (n == "Friday"){
		    anouncement2 = "Today is Friday.\n";
		    anouncement2 += "Spandex Friday starts today at 6:30 PST/9:30 EST/8:30 Central.\n";
    } else if (n == "Saturday"){
		    anouncement2 = "Today is Saturday.\n";
		    anouncement2 += "Toku Saturday starts today at 6:30 PST/9:30 EST/8:30 Central.\n";
    } else if (n == "Sunday"){
		    anouncement2 = "Today is Sunday.\n";
		    anouncement2 += "Power Sunday starts today at 6:30 PST/9:30 EST/8:30 Central.\n";
    };// daily setting if else

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
                                         && (msg.content.toLowerCase().startsWith("showtimes?"))
                                                                                                        ){
	    const RiderEmbed = new discord.RichEmbed()
	          RiderEmbed.setColor(randomHex.generate())
              RiderEmbed.setDescription(anouncement)
        msg.channel.send({embed: RiderEmbed});

	    const RiderEmbed2 = new discord.RichEmbed()
	          RiderEmbed2.setColor(randomHex.generate())
              RiderEmbed2.setDescription(anouncement2)
        msg.channel.send({embed: RiderEmbed2});
	};//if npot a bot id
};//run

exports.conf = {
  enabled: true,
};//conf