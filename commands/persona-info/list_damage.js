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
    var slapdesc = '['+settings.DamageClassMin+': ' + settings.DamageName(settings.DamageClassMin) + ']\n';

    for (var i = (settings.DamageClassMin + 1); i <= settings.DamageClassLimit; i++) {
        if (settings.DamageName(parseInt(i)) != ""){
            slapdesc += '[' + i + ': ' + settings.DamageName(parseInt(i)) + ']\n';
        };//if
    };//for
	msg.channel.send(slapdesc);
};//run

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: ["list-damage"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "listdamage",
  description: "",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};