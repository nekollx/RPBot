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
                var mentionedname = uidname;
        	    var slapSTRING    = 'string';
                var ranklimit     = 999999; 
                var rankstoadd    = parseInt(msg.content.split("x").pop());
        	    var slapID        = settings.getRandomInt(1, 12);

                if (msg.mentions.users.first()){
                    mentionedid   = msg.mentions.users.first().id;
                    mentionedname = msg.mentions.users.first().username;
                }//if

                if (isNaN(rankstoadd)){
                    rankstoadd = 1;
                } else if (rankstoadd > ranklimit){
                    rankstoadd = ranklimit;
                };//if else
                console.log(rankstoadd);
                var slapdesc      = uidname + ' just powered up '+ mentionedname + '\'s Baseline Class to ' + settings.PlayerClassName(rankstoadd, "no") + '! This is purely cosmetic.';

                if ((slapID == 1) || (slapID == 12)){
                        slapSTRING = 'http://www.maskedriders.info/Mee6RP/statusPic/tumblr_mh0229wGT61rhnoyto1_500.gif';
                } else if ((slapID == 3) || (slapID == 10)){
                        slapSTRING = 'http://www.maskedriders.info/Mee6RP/statusPic/b2da9a54c1ededb4afd9e7f3fc7821ad.gif';
                } else if ((slapID == 5) || (slapID == 8)){
                        slapSTRING = 'http://www.maskedriders.info/Mee6RP/statusPic/024848206647c337dea8f666ab1a1550.gif';
                } else if ((slapID == 7) || (slapID == 6)){
                        slapSTRING = 'http://www.maskedriders.info/Mee6RP/statusPic/13949913.gif';
                } else if ((slapID == 9) || (slapID == 4)){
                        slapSTRING = 'http://www.maskedriders.info/Mee6RP/statusPic/a92e47c9f88dc81922da36a918800199.jpg';
                } else if ((slapID == 11) || (slapID == 2)){
                        slapSTRING = 'http://www.maskedriders.info/Mee6RP/statusPic/Water_Breathing.gif';
                }//if else

                const RiderEmbed = new discord.RichEmbed()
                      RiderEmbed.setColor(randomHex.generate())
                      RiderEmbed.setDescription(slapdesc)
		      RiderEmbed.setImage(slapSTRING)
                msg.channel.send({embed: RiderEmbed});

        mysqlPool.getConnection(function(err, connection) {
            if(err) throw err;
                connection.query("UPDATE " + settings.dbtable + " SET CLASS_ID_Boost = " + rankstoadd + " WHERE ID = '" + mentionedid + "'");
                connection.release(); // if error occured closed the connection
        });//get connection
};//run

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: ["classbonus", "class-bonus", "class-power"],
  permLevel: 2,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "bonusclass",
  description: "",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};