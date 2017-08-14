const discord = require ('discord.js');
var settings = require('../../settings.js');
var randomHex = require('random-hex');
var Client    = require('mysql');
var dbclient = '';
var mysqlPool = '';

exports.init = (client) => {
        dbclient = Client.createConnection({
                    host: settings.dbhost,
                    user: settings.dbuser,
                    password: settings.dbpassword,
                    database: settings.dbdatabase,
        });//client = Client.createConnection

        mysqlPool  = Client.createPool({
            host: settings.dbhost,
            user: settings.dbuser,
            password: settings.dbpassword,
            database: settings.dbdatabase,
            port:3306
        }); //my sql pool
};//init

exports.run = (client, msg) => {
                var uid           = msg.author.id;
                var uidname       = msg.author.username;
                var mentionedid   = uid;
                var mentionedname = "a genma";
        	    var slapSTRING    = 'string';
                var ranklimit     = 999999; 
                var rankstoadd    = parseInt(msg.content.split("x").pop());
        	    var slapID        = settings.getRandomInt(1, 12);
        	    var days          = settings.getRandomInt(1, 99);

                if (msg.mentions.users.first()){
                    mentionedid   = msg.mentions.users.first().id;
                    mentionedname = msg.mentions.users.first().username;
                }//if
                if (mentionedname == "a genma"){
                    if (msg.content.split("@").pop() != '!eulogy'){
                        mentionedname = msg.content.split("@").pop();
                    };//if
                };//if

                var slapdesc      = 'My tears are overflowing, because you are by my side, smiling\n';
                    slapdesc     += 'I get the urge to hold you tight, because you are right next to me.\n';
                    slapdesc     += '\n';
                    slapdesc     += 'I\'ll never know why I was born\n';
                    slapdesc     += 'If all I do is think about it\n';
                    slapdesc     += 'So I\'ll live. I\'ll fire up my soul and survive\n';
                    slapdesc     += 'And find the reason someday\n';
                    slapdesc     += '\n';
                    slapdesc     += 'To the comrades I met in this same era!\n';
                    slapdesc     += 'We think, therefore we are\n';
                    slapdesc     += 'Let\'s start a new page of history, my friends!\n';
                    slapdesc     += 'We think, therefore we are\n';
                    slapdesc     += 'Everyone has only one chance to live\n';
                    slapdesc     += 'Live freely!\n';
                    slapdesc     += '\n';
                    slapdesc     += 'My heart is shaking, because I\'m looking at you so intensely.\n';
                    slapdesc     += 'My life is shining out an overflowing power!\n';
                    slapdesc     += '\n';
                    slapdesc     += 'People will die, they will surely die.\n';
                    slapdesc     += 'Someday you as well as I will die.\n';
                    slapdesc     += 'So at the very least,\n';
                    slapdesc     += 'In the time we have to live,\n';
                    slapdesc     += 'Let us spend our lives together.\n';
                    slapdesc     += '\n';
                    slapdesc     += '(Because I\'ll protect you!)\n';
                    slapdesc     += '\n';
                    slapdesc     += 'To the comrades I met in this same era!\n';
                    slapdesc     += 'We think, therefore we are\n';
                    slapdesc     += 'Let\'s start a new page of history, my friends!\n';
                    slapdesc     += 'We think, therefore we are\n';
                    slapdesc     += '\n';
                    slapdesc     += 'To the comrades who draw breath in this era!\n';
                    slapdesc     += 'We think, there we are\n';
                    slapdesc     += 'O flowers, O birds, O wind, O moon, O fickle life!\n';
                    slapdesc     += 'We think, therefore we are\n';
                    slapdesc     += 'Everyone has only one chance to live\n';
                    slapdesc     += 'Live freely!\n';
                    slapdesc     += '--'+ mentionedname;

                if (isNaN(rankstoadd)){
                    rankstoadd = 1;
                } else if (rankstoadd > ranklimit){
                    rankstoadd = ranklimit;
                };//if else

                if ((slapID == 1) || (slapID == 12)){
                        slapSTRING = 'http://www.maskedriders.info/Mee6RP/statusPic/tumblr_nvr1elSi5x1tap43jo2_500.gif';
                } else if ((slapID == 3) || (slapID == 10)){
                        slapSTRING = 'http://www.maskedriders.info/Mee6RP/statusPic/tumblr_nvh3a70gwV1tap43jo2_500.gif';
                } else if ((slapID == 5) || (slapID == 8)){
                        slapSTRING = 'http://www.maskedriders.info/Mee6RP/statusPic/tumblr_o88v2bTfQu1qc7cmzo1_500.gif';
                } else if ((slapID == 7) || (slapID == 6)){
                        slapSTRING = 'http://www.maskedriders.info/Mee6RP/statusPic/tumblr_nvr048PyIk1tap43jo2_500.gif';
                } else if ((slapID == 9) || (slapID == 4)){
                        slapSTRING = 'http://www.maskedriders.info/Mee6RP/statusPic/vGacjkU.gif';
                } else if ((slapID == 11) || (slapID == 2)){
                        slapSTRING = 'http://www.maskedriders.info/Mee6RP/statusPic/Kamen_Rider_Ghost.gif';
                }//if else

                const RiderEmbed = new discord.RichEmbed()
                      RiderEmbed.setColor(randomHex.generate())
                      RiderEmbed.setDescription(slapdesc)
					  RiderEmbed.setImage(slapSTRING)
                msg.channel.send({embed: RiderEmbed});
};//run

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: [],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "eulogy",
  description: "",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};