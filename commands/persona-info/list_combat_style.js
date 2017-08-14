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
    var slapdesc = '[0: ' + settings.DamageStyle(parseInt(0)) + ']\n';

    for (var i = 1; i <= 6; i++) {
        if (settings.DamageStyle(parseInt(i)) != ""){
            slapdesc += '[' + i + ': ' + settings.DamageStyle(parseInt(i)) + ']\n';
        };//if
    };//for
	msg.channel.send(slapdesc);
};//run

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: ["list-style"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "liststyle",
  description: "",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};