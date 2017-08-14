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
      var special = "Endurance";
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
  aliases: ["endurance-2", "endurance-3", "endurance-4", "endurance-5", 
            "endurance-6", "endurance-7", "endurance-8", "endurance-9",  "endurance-10",
            "endurance-11", "endurance-12", "endurance-13", "endurance-14",  "endurance-15",
            "endurance-16", "endurance-17", "endurance-18", "endurance-19",  "endurance-20",
            "endurance-21", "endurance-22", "endurance-23", "endurance-24",  "endurance-25",
            "endurance-26", "endurance-27", "endurance-28", "endurance-29",  "endurance-30"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "endurance-1",
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
