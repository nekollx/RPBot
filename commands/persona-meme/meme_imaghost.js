const discord = require ('discord.js');
var settings = require('../../settings.js');
var randomHex = require('random-hex');
var Client    = require('mysql');
var trim    = require('trim');
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
                } else {
                   if ((msg.content.split("@").pop() != msg.content)){
                        mentionedname = msg.content.split("!takaru").pop();
                        mentionedname = msg.content.split("@").pop();
                        var stringarray = mentionedname.split("+");        
                        mentionedname = trim(stringarray[0]);
                 };//if
                }//if

                if ((msg.content.split("+").pop() != msg.content)){
                    uidname = msg.content.split("+").pop();
                    var stringarrayu = uidname.split("+");        
                    uidname = stringarrayu[0];
                    stringarrayu = uidname.split("@");        
                    uidname = trim(stringarrayu[0]);
                };//if

                var slapdesc = 'My name is ' + uidname + ' and I was killed by '+ mentionedname + ' ';
                    slapdesc += 'on my 18th birthday and now I have 99 days to collect all 15 heroic eyecons ';
                    slapdesc += 'and regain my life. There are '+days+' days left.';

                if (isNaN(rankstoadd)){
                    rankstoadd = 1;
                } else if (rankstoadd > ranklimit){
                    rankstoadd = ranklimit;
                };//if else

                var images = ['http://www.maskedriders.info/Mee6RP/statusPic/tumblr_nvr1elSi5x1tap43jo2_500.gif', 
                            'http://www.maskedriders.info/Mee6RP/statusPic/tumblr_nvh3a70gwV1tap43jo2_500.gif', 
                            'http://www.maskedriders.info/Mee6RP/statusPic/tumblr_o88v2bTfQu1qc7cmzo1_500.gif', 
                            'http://www.maskedriders.info/Mee6RP/statusPic/tumblr_nvr048PyIk1tap43jo2_500.gif', 
                            'http://www.maskedriders.info/Mee6RP/statusPic/vGacjkU.gif', 
                            'http://www.maskedriders.info/Mee6RP/statusPic/Kamen_Rider_Ghost.gif'
                            ];//array of images to use
                slapID      = settings.getRandomInt(1, images.length);
        	    slapSTRING  = images[(slapID-1)];                            

                const RiderEmbed = new discord.RichEmbed()
                      RiderEmbed.setColor(randomHex.generate())
                      RiderEmbed.setDescription(slapdesc)
		              RiderEmbed.setImage(slapSTRING)
                msg.channel.send({embed: RiderEmbed});
};//run

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: ["takeru"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "takaru",
  description: "",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};