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
            for (f = 0; f < settings.UserSkillList.size; f++){
                if (settings.UserSkillList.get(f).PLAYER_ID == uid){
                    settings.UserSkillList.delete(f);
                };//if (settings.UserSkillList.get(f).Perk_Index == parseInt(resultI[0].Perk_Index))
            };//for (f = 0; f < settings.UserSkillList.size; f++)
            connection.query("DELETE FROM " + settings.dbskilltable + " WHERE PLAYER_ID = '" + uid + "'");
            console.log("DELETE FROM " + settings.dbskilltable + " WHERE PLAYER_ID = '" + uid + "'");
            msg.reply('Deleted all ' + uidname + "'s perks, use !scard to confirm.");
        connection.release(); // if error occured closed the connection
    });//get connection
};//exports run

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: ["clearperks", "resetperks", "reset-perks"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "clear-perks",
  description: "",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};

