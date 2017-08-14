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
            connection.query("SELECT Gender FROM " + settings.dbtable + " WHERE ID = '" + uid + "'", function(err,rows){
                console.log('Data received from Db:\n');
                for (var i = 0; i < rows.length; i++) {
                            if (rows[i].Gender == 1){
                                    connection.query("UPDATE " + settings.dbtable + " SET Gender = 0 WHERE ID = '" + uid + "'");
                                    msg.reply('Changing ' + uidname + "\'s gender to Female.");
                                    //console.log('Changing ' + uidname + "\'s gender to Female.");
                            }else{
                                    connection.query("UPDATE " + settings.dbtable + " SET Gender = 1 WHERE ID = '" + uid + "'");
                                    msg.reply('Changing ' + uidname + "\'s gender to Male.");
                                    //console.log('Changing ' + uidname + "\'s gender to Male.");
                            };
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
  name: "sexchange",
  description: "",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};

