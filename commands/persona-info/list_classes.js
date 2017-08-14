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

    var slapdesc = '[0: ' + settings.PlayerClassName(0, "no") + ']\n';
        slapdesc += '[1: ' + settings.PlayerClassName(1, "no") + ']\n';
    var slapdesc2 = '';
    var slapdesc3 = '';
    var slapdesc4 = '';
    var slapdesc5 = '';
    var slapdesc6 = '';

    for (var i = 2; i < 3000; i++) {
        if (settings.PlayerClassName(i, "no") != settings.PlayerClassName(1, "no")){
            slapdesc += '[' + i + ': ' + settings.PlayerClassName(i) + ']\n';
        };//if
    };//for
    for (var i = 3000; i < 4000; i++) {
        if (settings.PlayerClassName(i, "no") != settings.PlayerClassName(1, "no")){
            slapdesc2 += '[' + i + ': ' + settings.PlayerClassName(i) + ']\n';
        };//if
    };//for
    for (var i = 4000; i < 5000; i++) {
        if (settings.PlayerClassName(i, "no") != settings.PlayerClassName(1, "no")){
            slapdesc3 += '[' + i + ': ' + settings.PlayerClassName(i) + ']\n';
        };//if
    };//for
    for (var i = 5000; i < 6000; i++) {
        if (settings.PlayerClassName(i, "no") != settings.PlayerClassName(1, "no")){
            slapdesc4 += '[' + i + ': ' + settings.PlayerClassName(i) + ']\n';
        };//if
    };//for
    for (var i = 6000; i < 10000; i++) {
        if (settings.PlayerClassName(i, "no") != settings.PlayerClassName(1, "no")){
            slapdesc5 += '[' + i + ': ' + settings.PlayerClassName(i) + ']\n';
        };//if
    };//for
    for (var i = 10000; i <= ranklimit; i++) {
        if (settings.PlayerClassName(i, "no") != settings.PlayerClassName(1, "no")){
            slapdesc6 += '[' + i + ': ' + settings.PlayerClassName(i) + ']\n';
        };//if
    };//for
	msg.channel.send(slapdesc);
	msg.channel.send(slapdesc2);
	msg.channel.send(slapdesc3);
	msg.channel.send(slapdesc4);
	msg.channel.send(slapdesc5);
	msg.channel.send(slapdesc6);
};//run

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: ["list-class"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "listclass",
  description: "",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};