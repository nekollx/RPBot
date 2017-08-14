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
    if ((msg.content.toLowerCase().startsWith("!list-rider")) ||
        (msg.content.toLowerCase().startsWith("!list-riders")) ||
        (msg.content.toLowerCase().startsWith("!listrider")) ||
        (msg.content.toLowerCase().startsWith("!listriders")) ){
        var slapdesc = '[0: ' + settings.PlayerClassName(0) + ']\n';
        for (var i = 0; i < 1000; i++) {
            if (settings.PlayerClassName(parseInt(i), "yes") != ""){
                if (!settings.PlayerClassName(parseInt(i), "yes").toLowerCase().startsWith(" {")){
                    slapdesc += '[' + i + ': ' + settings.PlayerClassName(parseInt(i)) + ']\n';
                };//if
            };//if
        };//for
        msg.channel.send(slapdesc);

        for (var w = 1; w < 10; w++) {
            var slapdesc2 = '';
            var low = w*1000;
            var high = w+1;
                high = high*1000;
            for (var i = low; i < high; i++) {
                if (settings.PlayerClassName(parseInt(i), "yes") != ""){
                    if (!settings.PlayerClassName(parseInt(i), "yes").toLowerCase().startsWith(" {")){
                        slapdesc2 += '[' + i + ': ' + settings.PlayerClassName(parseInt(i)) + ']\n';
                    };//if
                };//if
            };//for
            if (slapdesc2 != ""){msg.channel.send(slapdesc2);}
            w++;
        };//for
    };//if ((msg.content.toLowerCase().startsWith("!list-rider")

    if ((msg.content.toLowerCase().startsWith("!list-ranger")) ||
        (msg.content.toLowerCase().startsWith("!list-rangers")) ||
        (msg.content.toLowerCase().startsWith("!listranger")) ||
        (msg.content.toLowerCase().startsWith("!listrangers")) ){
        for (var w = 1; w < 10; w++) {
            var slapdesc3 = '';
            var low = w*10000;
            var high = w+1;
                high = high*10000;
            for (var i = low; i < high; i++) {
                if (settings.PlayerClassName(parseInt(i), "yes") != ""){
                    if (!settings.PlayerClassName(parseInt(i), "yes").toLowerCase().startsWith(" {")){
                        slapdesc3 += '[' + i + ': ' + settings.PlayerClassName(parseInt(i)) + ']\n';
                    };//if
                };//if
            };//for
            if (slapdesc3 != ""){msg.channel.send(slapdesc3);}
            w++;
        };//for
    };//if ((msg.content.toLowerCase().startsWith("!list-rider")

};//run

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: [
            "list-rider", "list-rider",
            "listriders",
            "list-ranger", "list-rangers",
            "listrangers", "listranger", 
            "list-makai", "list-makais",
            "listmakais", "listmakai", 
            "list-precure", "list-precures",
            "listprecures", "listprecure", 
            "list-metal", "list-metals",
            "listmetals", "listmetal", 
            "list-sailor", "list-sailors",
            "listsailors", "listsailor", 
           ],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "listrider",
  description: "",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};