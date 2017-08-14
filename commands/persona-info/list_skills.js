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
    var days          = settings.getRandomInt(1, 99);

    if (msg.mentions.users.first()){
            mentionedid   = msg.mentions.users.first().id;
            mentionedname = msg.mentions.users.first().username;
    }//if

    if (isNaN(rankstoadd)){
            rankstoadd = 1;
    } else if (rankstoadd > ranklimit){
            rankstoadd = ranklimit;
    };//if else

    var slapdesc = '[1: ' + settings.PlayerPerkName(parseInt(1)) + ']\n';

    for (var i = 2; i <= 1200; i++) {
        if (settings.PlayerPerkName(parseInt(i)) != ""){
            slapdesc += '[' + i + ': ' + settings.PlayerPerkName(parseInt(i)) + ']\n';
        };//if
    };//for
	msg.channel.send(slapdesc);
};//run

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: ["list-skills"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "listskills",
  description: "",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};