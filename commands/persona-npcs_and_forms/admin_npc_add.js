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
    var SeriesID    = parseInt(arrayname[1]);
    var NPC_Name    = arrayname[2];

    if (isNaN(SeriesID) || (SeriesID == null) || (SeriesID == undefined)){SeriesID = 0;}

    var slapdesc  = 'Sorry '+ mentionedname + ' I could not add '+ NPC_Name + ' for '+settings.SeriesName(SeriesID)+' Roleplays.';

    mysqlPool.getConnection(function(err_u, connection) {
        if(err_u) {console.log("Error on - mysqlPool.getConnection for add weapons/armor/items: "+ err_u)};

            var insetstring  = "INSERT INTO " + settings.dbnpctable + " "; 
                insetstring += "(owner_name, owner_id, Series_Name, Series_ID, name)"; 
                insetstring += " VALUES (";
                insetstring += "'"+mentionedname + "', '" + mentionedid+"', ";
                insetstring += "'"+settings.SeriesName(SeriesID) + "', " + SeriesID+", ";
                insetstring += "'"+NPC_Name + "'";
                insetstring += ")"; 
            console.log(insetstring);
            connection.query(insetstring, {title: 'Insert'}, function(err, result) {
                if (err) console.log(err);
                if (result != undefined){
                    settings.NPC_List.set(result.insertId, {
                        Self_ID: result.insertId,
                        Owner_ID: mentionedname,
                        Series_ID: SeriesID,
                        Avatar_URL: "",
                        Name: NPC_Name,
                        Bio: "",
                        Power: 10,
                        Parent_ID: 0,
                        Gender: 1,
                        Height: 177,
                        Weight: 142,
                        Race: 0,
                        Strength: 1,
                        Perception: 1,
                        Endurance: 1,
                        Charisma: 1,
                        Intelligence: 1,
                        Agility: 1,
                        Luck: 1,
                        Bonus_Level: 0,
                        Fitness: 0,
                        Bonus_Ballistic_Resist: 0,
                        Bonus_Fire_Resist: 0,
                        Bonus_Cryo_Resist: 0,
                        Bonus_Posion_Resist: 0,
                        Bonus_Toxic_Resist: 0,
                        Bonus_Energy_Resist: 0,
                        Bonus_Electric_Resist: 0,
                        Bonus_Special_Resist: 0,
                        Bonus_Ballistic_Threshold: 0,
                        Bonus_Fire_Threshold: 0,
                        Bonus_Cryo_Threshold: 0,
                        Bonus_Posion_Threshold: 0,
                        Bonus_Toxic_Threshold: 0,
                        Bonus_Energy_Threshold: 0,
                        Bonus_Electric_Threshold: 0,
                        Bonus_Special_Threshold: 0,
                        Current_HP: 0,
                        Current_MP: 0,
                        Current_IP: 0,
                        Bonus_HP: 0,
                        Bonus_MP: 0,
                        Bonus_IP: 0
                    });//settings.NPC_List.set
                    slapdesc  = mentionedname + ' just added '+ NPC_Name + ' to '+settings.SeriesName(SeriesID)+' Roleplays.';
                    const RiderEmbed = new discord.RichEmbed()
                        RiderEmbed.setColor(randomHex.generate())
                        RiderEmbed.setDescription(slapdesc)
                    msg.channel.send({embed: RiderEmbed});
                } else {
                    slapdesc  = 'Sorry '+uidname+' I can not add '+ NPC_Name  + ' as it already exists.';
                    const RiderEmbed = new discord.RichEmbed()
                        RiderEmbed.setColor(randomHex.generate())
                        RiderEmbed.setDescription(slapdesc)
                    msg.channel.send({embed: RiderEmbed});
                };//if (result.insertId != undefined)
            });//connection.query(insetstring
        connection.release(); // if error occured closed the connection
    });//get connection
};//run

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: ["add-npc"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "addnpc",
  description: "",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};
