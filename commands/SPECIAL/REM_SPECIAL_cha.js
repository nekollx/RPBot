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
      var modifier = "minus";
      var special = "Charisma";
      var rankstoadd = parseInt(msg.content.split("-").pop());

            mysqlPool.getConnection(function(err, connection) {
            if(err) throw err;
            connection.query("SELECT * FROM " + settings.dbtable + " LEFT JOIN " + settings.dbskilltable + " ON " + settings.dbtable + ".ID = " + settings.dbskilltable + ".PLAYER_ID WHERE " + settings.dbtable + ".ID = '" + uid + "'", function(err,rows){
                   if ((rows[0].SPECIAL_Points > 0) || (rows[0].SPECIAL_Points < 29)){
                            modSPECIAL (uid, modifier, special, rankstoadd);
                            msg.reply('Subtracting ' + rankstoadd + ' ' + special + ' to ' + msg.author.username);
                            console.log('Subtracting ' + rankstoadd + ' ' + special + ' to ' + msg.author.username);
                    } else {
                            msg.reply('Can not subtract ' + rankstoadd + ' ' + special + ' to ' + msg.author.username + ', outside range of valid SPECIAL points.');
                            console.log('Can not subtract ' + rankstoadd + ' ' + special + ' to ' + msg.author.username + ', outside range of valid SPECIAL points.');
                    }//if/else
                    connection.release(); // if error occured closed the connection
            });//querry "SELECT * FROM RP_Users WHERE ID = '" + uid + "'"
            });//get connection
};//exports run

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: ["charisma-2", "charisma-3", "charisma-4", "charisma-5", 
            "charisma-6", "charisma-7", "charisma-8", "charisma-9",  "charisma-10",
            "charisma-11", "charisma-12", "charisma-13", "charisma-14",  "charisma-15",
            "charisma-16", "charisma-17", "charisma-18", "charisma-19",  "charisma-20",
            "charisma-21", "charisma-22", "charisma-23", "charisma-24",  "charisma-25",
            "charisma-26", "charisma-27", "charisma-28", "charisma-29",  "charisma-30"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "charisma-1",
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
                                    if ((rows[i].SPECIAL_Points > 0) || (rows[i].SPECIAL_Points < 29)){
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
