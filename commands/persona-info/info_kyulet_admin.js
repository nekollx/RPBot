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
    var arrayname = msg.content.split('`');
    var task = arrayname[1];
    var images = [
                  'Frozen Traveler', 
                  'Berani', 
                  'Maverik', 
                  'Crazy Kameleon', 
                  'Lazer', 
                  'Masterboy', 
                  'Furbus', 
                  'Kyoryu Crimson'
                 ];//array of images to use
    var slapID = settings.getRandomInt(1, images.length);
    slapSTRING = images[(slapID-1)];

    var text = 'Let\'s Kyulette Chance!: **'+slapSTRING+'** start working on *'+task+'*.';
    msg.reply(text);

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
  name: "kyulette",
  description: "",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};
