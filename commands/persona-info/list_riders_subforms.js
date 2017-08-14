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
    for (var w = 1; w < 10; w++) {
        var slapdesc2 = '';
        var low = w*100;
        var high = w+1;
            high = high*100;
        for (var i = low; i < high; i++) {
            if (settings.PlayerClassName(parseInt(i), "yes") != ""){
                if (settings.PlayerClassName(parseInt(i), "yes").toLowerCase().startsWith(" {")){
                    slapdesc2 += '[' + i + ': ' + settings.PlayerClassName(parseInt(i), "yes") + ']\n';
                };//if
            };//if
        };//for
        if (slapdesc2 != ""){msg.channel.send(slapdesc2);}
        w++;
    };//for

    var Old_High = 0;
    for (var w = 10; w < 100; w++) {
//console.log("Old High: "+Old_High);
        var slapdesc2 = '';
        var low = w*100;
//        if (low > Old_High){low = Old_High;}
        var high = low+100;
            Old_High = high;
//console.log("Low: "+low+", High: "+high);
        for (var i = low; i < high; i++) {
            if (settings.PlayerClassName(parseInt(i), "yes") != ""){
                if (settings.PlayerClassName(parseInt(i), "yes").toLowerCase().startsWith(" {")){
                    slapdesc2 += '[' + i + ': ' + settings.PlayerClassName(parseInt(i), "yes") + ']\n';
                };//if
            };//if
        };//for
        if (slapdesc2 != ""){msg.channel.send(slapdesc2);}
        //w++;
    };//for
};//run

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: [
            "list-rider-subs", "list-riders-subs",
            "listriderssubs"
           ],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "listridersubs",
  description: "",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};