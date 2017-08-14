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
    var mentionedid = uid;
    var mentionedname = uidname;

    if (msg.mentions.users.first()){
        mentionedid = msg.mentions.users.first().id;
        mentionedname = msg.mentions.users.first().username;
    };//if

    mysqlPool.getConnection(function(err, connection) {
    if(err) throw err;
    connection.query("UPDATE " + settings.dbtable + " SET CLASS_ID = 0 WHERE ID = '" + mentionedid + "'");
    connection.query("UPDATE " + settings.dbtable + " SET CLASS_ID_Sub = 0 WHERE ID = '" + mentionedid + "'");
    connection.query("UPDATE " + settings.dbtable + " SET CLASS_ID_Sub2 = 0 WHERE ID = '" + mentionedid + "'");
    connection.query("UPDATE " + settings.dbtable + " SET CLASS_ID_Sub3 = 0 WHERE ID = '" + mentionedid + "'");
    connection.query("UPDATE " + settings.dbtable + " SET CLASS_ID_Sub4 = 0 WHERE ID = '" + mentionedid + "'");
    connection.query("UPDATE " + settings.dbtable + " SET Power_Mult = 1 WHERE ID = '" + mentionedid + "'");
		msg.reply('Okay! '+ mentionedname + ' Power Multiplier has been reset along with your class.');
		console.log('Reset Class/Power of '+ mentionedname + ' with user id of ' + mentionedid);
    connection.release(); // if error occured closed the connection
  });//get connection

  if (settings.UserList.get(mentionedid) != undefined){
    settings.UserList.set(mentionedid, {
        Gender: settings.UserList.get(mentionedid).Gender,
        Height: settings.UserList.get(mentionedid).Height,
        Weight: settings.UserList.get(mentionedid).Weight,
        Fitness: settings.UserList.get(mentionedid).Fitness,
        Bonus_HP: settings.UserList.get(mentionedid).Bonus_HP,
        HP: settings.UserList.get(mentionedid).HP,
        Bonus_MP: settings.UserList.get(mentionedid).Bonus_MP,
        MP: settings.UserList.get(mentionedid).MP,
        Bonus_IP: settings.UserList.get(mentionedid).Bonus_IP,
        IP: settings.UserList.get(mentionedid).IP,
        Strength: settings.UserList.get(mentionedid).Strength,
        Perception: settings.UserList.get(mentionedid).Perception,
        Endurance: settings.UserList.get(mentionedid).Endurance,
        Charisma: settings.UserList.get(mentionedid).Charisma,
        Intelligence: settings.UserList.get(mentionedid).Intelligence,
        Agility: settings.UserList.get(mentionedid).Agily,
        Luck: settings.UserList.get(mentionedid).Luck,
        SPECIAL_Points: settings.UserList.get(mentionedid).SPECIAL_Points,
        CLASS_ID: 0,
        CLASS_ID_Boost: settings.UserList.get(mentionedid).CLASS_ID_Boost,
        CLASS_ID_Sub: 0,
        CLASS_ID_Sub2: 0,
        CLASS_ID_Sub3: 0,
        CLASS_ID_Sub4: 0,
        Power_Mult: 1,
        Power_Mult_Boost: settings.UserList.get(mentionedid).Power_Mult_Boost,
        Level: settings.UserList.get(mentionedid).Level,
        Level_XP: settings.UserList.get(mentionedid).Level_XP,
        Total_XP: settings.UserList.get(mentionedid).Total_XP,
        XP: settings.UserList.get(mentionedid).XP,
        XP_Percent: settings.UserList.get(mentionedid).XP_Percent,
        Player_Rank: settings.UserList.get(mentionedid).Player_Rank,
        Player_Rank_Total: settings.UserList.get(mentionedid).Player_Rank_Total, 
        Banked_Criticals: settings.UserList.get(mentionedid).Banked_Criticals,
        Critical_Meter_Percent: settings.UserList.get(mentionedid).Critical_Meter_Percent,
        Paralyzed_Duration: settings.UserList.get(mentionedid).Paralyzed_Duration,
        Stunned_Duration: settings.UserList.get(mentionedid).Stunned_Duration,
        Restrained_Duration: settings.UserList.get(mentionedid).Restrained_Duration,
        IsLevelCapped: settings.UserList.get(mentionedid).IsLevelCapped
    });//settings.UserList.set
  };//if (settings.UserList.get(mentionedid) != undefined)
};//exports run

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: [],
  permLevel: 3,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "powerdowna",
  description: "",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};

