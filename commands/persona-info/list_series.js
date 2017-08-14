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
    var slapdesc = '[-10: Kamen Rider - ' + settings.SeriesName(parseInt(-10)) + ']\n';
    for (var i = -9; i <= 20; i++) {
        if (settings.SeriesName(parseInt(i)) != ""){
            slapdesc += '[' + i + ': Kamen Rider - ' + settings.SeriesName(parseInt(i)) + ']\n';
        };//if
    };//for
	msg.channel.send(slapdesc);

    var slapdesc2 = '';
    for (var i = 21; i <= 1100; i++) {
        if (settings.SeriesName(parseInt(i)) != ""){
            slapdesc2 += '[' + i + ': Sentai - ' + settings.SeriesName(parseInt(i)) + ']\n';
        };//if
    };//for
	msg.channel.send(slapdesc2);
};//run

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: ["list-series"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "listseries",
  description: "",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};