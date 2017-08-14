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
    var SeriesID    = parseInt(arrayname[1]);
    var ClassID    = arrayname[2];

    if (isNaN(SeriesID) || (SeriesID == null) || (SeriesID == undefined)){SeriesID = 0;}

    var slapdesc  = 'Sorry '+ mentionedname + ' I could not add '+ ClassID + ' as your default picture for '+settings.SeriesName(SeriesID)+' Roleplays.';

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
                        UpdateString += "Avatar_URL2 = '" + ClassID +"' ";
                        UpdateString += "WHERE TABLE_ID = " + parseInt(resultU[0].Table_ID);
                    console.log(UpdateString);
                    connection.query(UpdateString);
                    console.log("settings.User_Forms.get(mentionedid): "+settings.User_Forms.get(mentionedid));
                    if ((settings.User_Forms.get(resultU[0].Table_ID).User_ID == mentionedid) && 
                        (settings.User_Forms.get(resultU[0].Table_ID).Series_ID == SeriesID))
                        {settings.User_Forms.get(resultU[0].Table_ID).Avatar_URL2 = ClassID;}
                    slapdesc  = mentionedname + ' just set '+ ClassID + ' as their secondary picture for '+settings.SeriesName(SeriesID)+' Roleplays.';
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
  aliases: ["add-pic2"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "addpic2",
  description: "",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};
