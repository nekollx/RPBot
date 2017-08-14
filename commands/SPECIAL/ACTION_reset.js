const discord = require ('discord.js');
var Client   =    require('mysql');
var settings = require('../../settings.js');
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
        var uid     = msg.author.id;
        var uidname = msg.author.username;

            mysqlPool.getConnection(function(err, connection) {
            if(err) throw err;
            connection.query("SELECT * FROM " + settings.dbtable + " WHERE ID = '" + uid + "'", function(err,rows){
                console.log('Data received from Db:\n');
                for (var i = 0; i < rows.length; i++) {
                            connection.query("UPDATE " + settings.dbtable + " SET Strength = 1 WHERE ID = '" + uid + "'");
                            connection.query("UPDATE " + settings.dbtable + " SET Perception = 1 WHERE ID = '" + uid + "'");
                            connection.query("UPDATE " + settings.dbtable + " SET Endurance = 1 WHERE ID = '" + uid + "'");
                            connection.query("UPDATE " + settings.dbtable + " SET Charisma = 1 WHERE ID = '" + uid + "'");
                            connection.query("UPDATE " + settings.dbtable + " SET Intelligence = 1 WHERE ID = '" + uid + "'");
                            connection.query("UPDATE " + settings.dbtable + " SET Agily = 1 WHERE ID = '" + uid + "'");
                            connection.query("UPDATE " + settings.dbtable + " SET Luck = 1 WHERE ID = '" + uid + "'");
                            connection.query("UPDATE " + settings.dbtable + " SET SPECIAL_Points = 28 WHERE ID = '" + uid + "'");
                            console.log("UPDATE " + settings.dbtable + " SET Strength = 1, Perception = 1, Endurance = 1, Charisma = 1, Intelligence = 1, Agily = 1, Luck = 1, SPECIAL_Points = 28, WHERE ID = '" + uid + "'");
                            msg.reply('Reset SPECIALS of ' + uidname + '. Check the website (http://www.maskedriders.info/Mee6RP/) or use !me to confirm.');
                };//for (var i = 0; i < rows.length; i++)
                connection.release(); // if error occured closed the connection
            });//querry "SELECT * FROM RP_Users WHERE ID = '" + uid + "'"
            });//get connection
};//exports run

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: [],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "reset",
  description: "",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};

