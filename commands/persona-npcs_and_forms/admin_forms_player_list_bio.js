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
    var uid       = msg.author.id;
    var uidname   = msg.author.username;

    var mentionedid     = uid;
    var mentionedname   = uidname;

    if (msg.mentions.users.first()){
        mentionedid = msg.mentions.users.first().id;
        mentionedname = msg.mentions.users.first().username;
    };//if

    var arrayname = msg.content.split(' ');
    var slapdesc    = mentionedname + ' has the following bios:\n';

    for (var i = 0; i < settings.User_Forms.size; i++) {
        if ((settings.User_Forms.get(i).User_ID == mentionedid) && (settings.User_Forms.get(i) != undefined)){
            slapdesc += settings.User_Forms.get(i).Bio;
            var SeriesID = settings.User_Forms.get(i).Series_ID;
            slapdesc += ' ['+settings.SeriesName(SeriesID)+' Roleplays]\n';
        };//if
    };//for
    const RiderEmbed = new discord.RichEmbed()
          RiderEmbed.setColor(randomHex.generate())
          RiderEmbed.setDescription(slapdesc)
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
  name: "listbio",
  description: "",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};
