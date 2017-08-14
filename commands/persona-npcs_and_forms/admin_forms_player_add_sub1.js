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

//    if (msg.mentions.users.first()){
//        mentionedid = msg.mentions.users.first().id;
//        mentionedname = msg.mentions.users.first().username;
//    };//if

    var arrayname = msg.content.split(' ');
    var SeriesID    = parseInt(arrayname[1]);
    var ClassID    = parseInt(arrayname[2]);
    var ClassNameID = 0;

    if (isNaN(ClassID) || (ClassID == null) || (ClassID == undefined)){ClassID = 0;}
    if (isNaN(SeriesID) || (SeriesID == null) || (SeriesID == undefined)){SeriesID = 0;}
    if (ClassID > 0){ClassNameID = settings.Weapons_Armor_List.get(ClassID).Main_SkillID;}

    var slapdesc  = 'Sorry '+ mentionedname + ' I could not set '+ settings.PlayerClassName(ClassNameID, "yes") + ' as your default for '+settings.SeriesName(SeriesID)+' Roleplays.';

    mysqlPool.getConnection(function(err_u, connection) {
        if(err_u) {console.log("Error on - mysqlPool.getConnection for add weapons/armor/items: "+ err_u)};

        var SQLString  = "SELECT * FROM " + settings.playerforms + " ";
            SQLString += "WHERE User_ID = '" + mentionedid + "' AND ";
            SQLString += "Series_ID = " + SeriesID;
        connection.query(SQLString, {title: 'Update'}, function(errU, resultU) {
            if (errU) console.log(errU);
                if (resultU.length > 0){
                    var UpdateString  = "UPDATE " + settings.playerforms+" ";
                        UpdateString += "SET ";
                        UpdateString += "Class_ID_Sub1 = " + ClassID +", ";
                        UpdateString += "Class_ID_Sub1_Name = '" + settings.PlayerClassName(ClassNameID, "yes") +"' ";
                        UpdateString += "WHERE TABLE_ID = " + parseInt(resultU[0].Table_ID);
                    console.log(UpdateString);
                    connection.query(UpdateString);
                    if ((settings.User_Forms.get(resultU[0].Table_ID).User_ID == mentionedid) && 
                        (settings.User_Forms.get(resultU[0].Table_ID).Series_ID == SeriesID))
                        {settings.User_Forms.get(resultU[0].Table_ID).Class_ID_Sub1 = ClassID;}
                    slapdesc  = mentionedname + ' just set '+ settings.PlayerClassName(ClassNameID, "yes") + ' as their default for '+settings.SeriesName(SeriesID)+' Roleplays.';
                    const RiderEmbed = new discord.RichEmbed()
                        RiderEmbed.setColor(randomHex.generate())
                        RiderEmbed.setDescription(slapdesc)
                    msg.channel.send({embed: RiderEmbed});
                };//if (resultU.length > 0)
       });//connection.query(SQLString
        connection.release(); // if error occured closed the connection
    });//get connection
};//run

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: ["add-sub-1"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "addsub1",
  description: "",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};
