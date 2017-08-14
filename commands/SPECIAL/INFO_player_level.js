const discord = require ('discord.js');
var Client    =    require('mysql');
var randomHex = require('random-hex');
var settings  = require('../../settings.js');
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

exports.run = (client, message) => {
        var uid       = message.author.id;
        var uidname   = message.author.username;
        var uidavatar = message.author.avatarURL;
        var mentionedid     = uid;
        var mentionedname   = uidname;
        var mentionedavatar = uidavatar;
        if (message.mentions.users.first()){
                uid       = message.mentions.users.first().id;
                uidname   = message.mentions.users.first().username;
                uidavatar = message.mentions.users.first().avatarURL;
        };//if
        if (uidavatar != null){settings.avypic = uidavatar;};
        var Count = 0;
        var playerskillliststring = uidname + " has the following perks:\n";

        const cardEmbed = new discord.RichEmbed()
              cardEmbed.setAuthor(uidname, settings.botpic)
              cardEmbed.setColor(randomHex.generate())
              cardEmbed.setFooter(uidname + ' Skill Card ~ invoked by '+ message.author.username, settings.serverpic)
              cardEmbed.setTimestamp()
              cardEmbed.setURL('http://www.maskedriders.info/Mee6RP/index.php')
              cardEmbed.setThumbnail(settings.avypic)

            mysqlPool.getConnection(function(err, connection) {
            if(err) throw err;
            connection.query("SELECT * FROM " + settings.dbtable + " LEFT JOIN " + settings.dbskilltable + " ON " + settings.dbtable + ".ID = " + settings.dbskilltable + ".PLAYER_ID WHERE " + settings.dbtable + ".ID = '" + uid + "' ORDER BY " + settings.dbskilltable + ".PERK_ID ASC", function(err,rows){
            var userlvl = rows[0].PLACEHOLDER_lvl;
            var powertotal = (rows[0].Power_Mult) + rows[0].Power_Mult_Boost;
            var PlayerLevelXP        = rows[0].PLACEHOLDER_xp;
            var PlayerLevelLVLXP     = settings.XPtoNextLevel(userlvl);
            var PlayerLevelTotalXP   = rows[0].PLACEHOLDER_total_xp;
            var PlayerLevelXPPercent = settings.XPPercentCalc(PlayerLevelXP, PlayerLevelLVLXP);

            var XPString      = PlayerLevelXP.toLocaleString();
                XPString     += '/';
                XPString     += PlayerLevelLVLXP.toLocaleString();
                XPString     += ' [';
                XPString     += PlayerLevelTotalXP.toLocaleString();
                XPString     += ' ~ **';
                XPString     += PlayerLevelXPPercent.toLocaleString();
                XPString     += '**%]';

                cardEmbed.addField('Level [Power Multiplier]', userlvl + ' [' + powertotal + ']', true)//row 4
                cardEmbed.addField('Exp. [Lifetime]', XPString, true)//row 9
                message.channel.sendEmbed(
                cardEmbed, '', { disableEveryone: true }
                );//message.channel.sendEmbed
                connection.release(); // if error occured closed the connection
            });//querry "SELECT * FROM RP_Users WHERE ID = '" + uid + "'"
            });//get connection
};//exports run

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: [],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "level",
  description: "",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};