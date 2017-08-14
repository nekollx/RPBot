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
    var arrayname = msg.content.split(' ');
    var ItemID    = parseInt(arrayname[1]);
    var Name      = "";
    if ((settings.Weapons_Armor_List.get(ItemID) != undefined)){
        Name = settings.Weapons_Armor_List.get(ItemID).Name;
    };//if ((Name == undefined)

    var FullName = '';
    var SplitName = Name.split('_');
    for (var s = 0; s < SplitName.length; s++){
        FullName += SplitName[s].charAt(0).toUpperCase() + SplitName[s].slice(1).toLowerCase();
        if (s !=  (SplitName.length-1)){FullName += " ";}
    }//for

    var slapdesc  = uidname + ' just dropped '+ FullName + ' from their inventory.';

    if ((ItemID < 1) || (isNaN(ItemID)) || (ItemID == undefined) || (ItemID == null)){
        slapdesc  = 'Item id not reconized so could not be added to ' + uidname + '\'s inventory.';
    } else {
    mysqlPool.getConnection(function(err_u, connection) {
        if(err_u) {console.log("Error on - mysqlPool.getConnection for add weapons/armor/items: "+ err_u)};

        var SQLString  = "SELECT * FROM " + settings.playerinventory + " ";
            SQLString += "WHERE Player_ID = '" + uid + "' AND ";
            SQLString += "ID = " + ItemID;
        connection.query(SQLString, {title: 'Update'}, function(errU, resultU) {
            if (errU) console.log(errU);
                if (resultU.length > 0){
                    var UpdateString  = "";
                    if (((resultU[0].RANKS)-1) < 1){
                        UpdateString  = "DELETE FROM " + settings.playerinventory+" ";
                        UpdateString += "WHERE TABLE_ID = " + resultU[0].TABLE_ID;
                    } else {
                        UpdateString  = "UPDATE " + settings.playerinventory+" ";
                        UpdateString += "SET RANKS = " + ((resultU[0].RANKS)-1)+" ";
                        UpdateString += "WHERE TABLE_ID = " + resultU[0].TABLE_ID;
                    };//if (((resultU[0].RANKS)-1) < 1)
                    console.log(UpdateString);
                    connection.query(UpdateString);
                } else {
                    slapdesc = uidname + ' does not own '+ FullName + ' so it could not be dropped.';
                };//if (resultU > 0)
        });//connection.query(SQLString
        connection.release(); // if error occured closed the connection
    });//get connection
    };//if/else ((ItemID < 1)
    const RiderEmbed = new discord.RichEmbed()
          RiderEmbed.setColor(randomHex.generate())
          RiderEmbed.setDescription(slapdesc)
    msg.channel.send({embed: RiderEmbed});
};//run

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: [
            "drop-inventory",
            "drop-inv",
            "dropinv",
            "drop"
           ],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "dropinventory",
  description: "",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};
