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

    var arrayname = msg.content.split('`');
    var NPCID    = parseInt(arrayname[1]);
    var BIO    = arrayname[2];

    if (isNaN(NPCID) || (NPCID == null) || (NPCID == undefined)){NPCID = 0;}

    mysqlPool.getConnection(function(err_u, connection) {
        if(err_u) {console.log("Error on - mysqlPool.getConnection for add weapons/armor/items: "+ err_u)};

        var SQLString  = "SELECT * FROM " + settings.dbnpctable + " ";
            SQLString += "WHERE id = " + NPCID;
        connection.query(SQLString, {title: 'Update'}, function(errU, resultU) {
            if (errU) console.log(errU);
                if (resultU.length > 0){
                    var UpdateString  = "UPDATE " + settings.dbnpctable+" ";
                        UpdateString += "SET ";
                        UpdateString += "bio = '" + BIO +"' ";
                        UpdateString += "WHERE id = " + NPCID;
                    //console.log(UpdateString);
                    connection.query(UpdateString);
                    settings.NPC_List.get(NPCID).Bio = BIO;
                    var URL = settings.NPC_List.get(NPCID).Avatar_URL;
                    var slapdesc  = '['+ settings.NPC_List.get(NPCID).Self_ID +']';
                        slapdesc  += settings.NPC_List.get(NPCID).Name
                    var Series_Name = ' ['+settings.SeriesName(settings.NPC_List.get(NPCID).Series_ID)+']';
                    const RiderEmbed = new discord.RichEmbed()
                        RiderEmbed.setThumbnail(URL)
                        RiderEmbed.setColor(randomHex.generate())
                        //RiderEmbed.setAuthor(slapdesc)
                        RiderEmbed.addField("Name", slapdesc, true)
                        RiderEmbed.addField("Series", Series_Name, true)
                        RiderEmbed.setDescription(BIO)
                    msg.channel.send({embed: RiderEmbed});
                } else {
                    var slapdesc  = 'Sorry '+uidname+' I can not add '+ BIO  + ' to '+settings.NPC_List.get(NPCID).Name+'.';
                    const RiderEmbed = new discord.RichEmbed()
                          RiderEmbed.setColor(randomHex.generate())
                          RiderEmbed.setDescription(slapdesc)
                    msg.channel.send({embed: RiderEmbed});
                };//if (resultU > 0)
       });//connection.query(SQLString
        connection.release(); // if error occured closed the connection
    });//get connection
};//run

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: ["npc-bio"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "npcbio",
  description: "",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};
