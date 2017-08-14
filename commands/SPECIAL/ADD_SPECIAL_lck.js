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
      var modifier = "plus";
      var special = "Luck";
      var rankstoadd = parseInt(msg.content.split("+").pop());

            mysqlPool.getConnection(function(err, connection) {
            if(err) throw err;
            connection.query("SELECT * FROM " + settings.dbtable + " LEFT JOIN " + settings.dbskilltable + " ON " + settings.dbtable + ".ID = " + settings.dbskilltable + ".PLAYER_ID WHERE " + settings.dbtable + ".ID = '" + uid + "'", function(err,rows){
                    if (rows[0].SPECIAL_Points > 0){
                            modSPECIAL (uid, modifier, special, rankstoadd);
                            msg.reply('Adding ' + rankstoadd + ' ' + special + ' to ' + msg.author.username);
                            console.log('Adding ' + rankstoadd + ' ' + special + ' to ' + msg.author.username);
                    } else {
                            msg.reply('Can not add ' + rankstoadd + ' ' + special + ' to ' + msg.author.username + ', SPECIAL points exausted.');
                            console.log('Can not add ' + rankstoadd + ' ' + special + ' to ' + msg.author.username + ', SPECIAL points exausted.');
                    }//if/else
                    connection.release(); // if error occured closed the connection
            });//querry "SELECT * FROM RP_Users WHERE ID = '" + uid + "'"
            });//get connection
};//exports run

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: ["luck+2", "luck+3", "luck+4", "luck+5", 
            "luck+6", "luck+7", "luck+8", "luck+9",  "luck+10",
            "luck+11", "luck+12", "luck+13", "luck+14",  "luck+15",
            "luck+16", "luck+17", "luck+18", "luck+19",  "luck+20",
            "luck+21", "luck+22", "luck+23", "luck+24",  "luck+25",
            "luck+26", "luck+27", "luck+28", "luck+29",  "luck+30"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "luck+1",
  description: "",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};

function modSPECIAL (uid, mod, spec, ammount){
            mysqlPool.getConnection(function(err, connection) {
            if(err) throw err;
            connection.query("SELECT * FROM " + settings.dbtable + " WHERE ID = '" + uid + "'", function(err,rows){
                for (var i = 0; i < rows.length; i++) {
                                var spoints = rows[i].SPECIAL_Points - ammount;
                                if (mod == "minus"){spoints = rows[i].SPECIAL_Points + ammount;};
                                    if (rows[i].SPECIAL_Points > 0){
                                                var str = rows[i].Strength + ammount;

                                                if ((spec == "Strength") && (mod != "minus")){str = rows[i].Strength + ammount};
                                                if ((spec == "Perception") && (mod != "minus")){str = rows[i].Perception + ammount};
                                                if ((spec == "Endurance") && (mod != "minus")){str = rows[i].Endurance + ammount};
                                                if ((spec == "Charisma") && (mod != "minus")){str = rows[i].Charisma + ammount};
                                                if ((spec == "Intelligence") && (mod != "minus")){str = rows[i].Intelligence + ammount};
                                                if ((spec == "Agily") && (mod != "minus")){str = rows[i].Agily + ammount};
                                                if ((spec == "Luck") && (mod != "minus")){str = rows[i].Luck + ammount};

                                                if ((spec == "Strength") && (mod == "minus")){str = rows[i].Strength - ammount};
                                                if ((spec == "Perception") && (mod == "minus")){str = rows[i].Perception - ammount};
                                                if ((spec == "Endurance") && (mod == "minus")){str = rows[i].Endurance - ammount};
                                                if ((spec == "Charisma") && (mod == "minus")){str = rows[i].Charisma - ammount};
                                                if ((spec == "Intelligence") && (mod == "minus")){str = rows[i].Intelligence - ammount};
                                                if ((spec == "Agily") && (mod == "minus")){str = rows[i].Agily - ammount};
                                                if ((spec == "Luck") && (mod == "minus")){str = rows[i].Luck - ammount};

                                                connection.query("UPDATE " + settings.dbtable + " SET " + spec + " = "+ str +" WHERE ID = '" + uid + "'");
                                                console.log("UPDATE " + settings.dbtable + " SET " + spec + " = "+ str +" WHERE ID = '" + uid + "'");
                                                connection.query("UPDATE " + settings.dbtable + " SET SPECIAL_Points = "+ spoints +" WHERE ID = '" + uid + "'");
                                                console.log("UPDATE " + settings.dbtable + " SET SPECIAL_Points = "+ spoints +" WHERE ID = '" + uid + "'");
                                    };//if (rows[i].SPECIAL_Points > 0)
                };//for (var i = 0; i < rows.length; i++)
                connection.release(); // if error occured closed the connection
            });//querry "SELECT * FROM RP_Users WHERE ID = '" + uid + "'"
            });//get connection
}//mod special function
