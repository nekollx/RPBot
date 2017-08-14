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

    var slapdesc  = mentionedname + ' just added '+ FullName + ' to their inventory.';

    if ((ItemID < 1) || (isNaN(ItemID)) || (ItemID == undefined) || (ItemID == null)){
        slapdesc  = 'Item id not reconized so could not be added to ' + mentionedname + '\'s inventory.';
    } else {
    mysqlPool.getConnection(function(err_u, connection) {
        if(err_u) {console.log("Error on - mysqlPool.getConnection for add weapons/armor/items: "+ err_u)};

        var SQLString  = "SELECT * FROM " + settings.playerinventory + " ";
            SQLString += "WHERE Player_ID = '" + mentionedid + "' AND ";
            SQLString += "ID = " + ItemID;
        connection.query(SQLString, {title: 'Update'}, function(errU, resultU) {
            if (errU) console.log(errU);
                if (resultU.length > 0){
                    var UpdateString  = "UPDATE " + settings.playerinventory+" ";
                        UpdateString += "SET RANKS = " + ((resultU[0].RANKS)+1)+" ";
                        UpdateString += "WHERE TABLE_ID = " + resultU[0].TABLE_ID;
                    console.log(UpdateString);
                    connection.query(UpdateString);
                } else {
                    var insetstring  = "INSERT INTO " + settings.playerinventory + " "; 
                        insetstring += "(ID, Player_ID)"; 
                        insetstring += "VALUES ('";
                        insetstring += ItemID + "', " + mentionedid + ")"; 
                    connection.query(insetstring);//connection.query(insetstring
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
            "add-inventory",
            "add-inv",
            "addinv"
           ],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "addinventory",
  description: "",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};
