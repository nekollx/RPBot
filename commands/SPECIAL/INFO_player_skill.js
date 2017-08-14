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
        var playerskillliststring = "";
        var playerskillliststring_overflow1 = "";
        var playerskillliststring_overflow2 = "";
        var playerskillliststring_overflow3 = "";
        var playerskillliststring_overflow4 = "";
        var playerskillliststring_overflow5 = "";

            mysqlPool.getConnection(function(err, connection) {
            if(err) throw err;
            connection.query("SELECT * FROM " + settings.dbtable + " LEFT JOIN " + settings.dbskilltable + " ON " + settings.dbtable + ".id = " + settings.dbskilltable + ".PLAYER_ID WHERE " + settings.dbtable + ".id = '" + uid + "' ORDER BY " + settings.dbskilltable + ".PERK_ID ASC", function(err,rows){
                var FullClassSTRING      = settings.PlayerClassName(rows[0].CLASS_ID_Boost, "no");
                    FullClassSTRING     += " ";
                    FullClassSTRING     += settings.PlayerClassName(rows[0].CLASS_ID, "no");
                    FullClassSTRING     += " ";
                    FullClassSTRING     += settings.PlayerClassName(rows[0].CLASS_ID_Sub, "yes");
                    FullClassSTRING     += " ";
                    FullClassSTRING     += settings.PlayerClassName(rows[0].CLASS_ID_Sub2, "yes");
                    FullClassSTRING     += " ";
                    FullClassSTRING     += settings.PlayerClassName(rows[0].CLASS_ID_Sub3, "yes");
                    FullClassSTRING     += " ";
                    FullClassSTRING     += settings.PlayerClassName(rows[0].CLASS_ID_Sub4, "yes");

                var totalskillcount = 0;
                var userlvl = rows[0].PLACEHOLDER_lvl;
                var powertotal = (rows[0].Power_Mult) + rows[0].Power_Mult_Boost;
                for (f = 0; f < settings.UserSkillList.size; f++){
                    if (settings.UserSkillList.get(f).PLAYER_ID == uid){
                        Count++;
                        if (Count < 20){
                            playerskillliststring += '[' + settings.PlayerPerkName(settings.UserSkillList.get(f).PERK_ID, settings.UserList.get(uid).Gender) + ' ' + settings.UserSkillList.get(f).RANKS + ']';
                        };
                        if ((Count < 40)  && (Count >= 20)){ 
                            playerskillliststring_overflow1 += '[' + settings.PlayerPerkName(settings.UserSkillList.get(f).PERK_ID, settings.UserList.get(uid).Gender) + ' ' + settings.UserSkillList.get(f).RANKS + ']';
                        };
                        if ((Count < 60)  && (Count >= 40)){ 
                            playerskillliststring_overflow2 += '[' + settings.PlayerPerkName(settings.UserSkillList.get(f).PERK_ID, settings.UserList.get(uid).Gender) + ' ' + settings.UserSkillList.get(f).RANKS + ']';
                        };
                        if ((Count < 80)  && (Count >= 60)){ 
                            playerskillliststring_overflow3 += '[' + settings.PlayerPerkName(settings.UserSkillList.get(f).PERK_ID, settings.UserList.get(uid).Gender) + ' ' + settings.UserSkillList.get(f).RANKS + ']';
                        };
                        if ((Count < 100)  && (Count >= 80)){ 
                            playerskillliststring_overflow4 += '[' + settings.PlayerPerkName(settings.UserSkillList.get(f).PERK_ID, settings.UserList.get(uid).Gender) + ' ' + settings.UserSkillList.get(f).RANKS + ']';
                        };
                        if (Count >= 100){ 
                            playerskillliststring_overflow5 += '[' + settings.PlayerPerkName(settings.UserSkillList.get(f).PERK_ID, settings.UserList.get(uid).Gender) + ' ' + settings.UserSkillList.get(f).RANKS + ']';
                        };
                        
                        totalskillcount += settings.UserSkillList.get(f).RANKS;
                    };//if (settings.UserSkillList.get(i).PLAYER_ID == uid)
                };//for
                var playerskillliststring2 = '\nAnd has ' + (userlvl - totalskillcount) + ' perk points left.';

                if (playerskillliststring_overflow1 != ""){
                    const cardEmbed = new discord.RichEmbed()
                          cardEmbed.setAuthor(uidname, settings.botpic)
                          cardEmbed.setThumbnail(settings.avypic)
                          cardEmbed.setColor(randomHex.generate())
                          cardEmbed.setDescription(playerskillliststring_overflow1, true)
                    message.channel.sendEmbed(
                          cardEmbed, '', { disableEveryone: true }
                    );//message.channel.sendEmbed
                };//if (playerskillliststring_overflow1 != "")

                if (playerskillliststring_overflow2 != ""){
                    const cardEmbed = new discord.RichEmbed()
                          cardEmbed.setColor(randomHex.generate())
                          cardEmbed.setDescription(playerskillliststring_overflow2, true)
                    message.channel.sendEmbed(
                          cardEmbed, '', { disableEveryone: true }
                    );//message.channel.sendEmbed
                };//if (playerskillliststring_overflow2 != "")

                if (playerskillliststring_overflow3 != ""){
                    const cardEmbed = new discord.RichEmbed()
                          cardEmbed.setColor(randomHex.generate())
                          cardEmbed.setDescription(playerskillliststring_overflow3, true)
                    message.channel.sendEmbed(
                          cardEmbed, '', { disableEveryone: true }
                    );//message.channel.sendEmbed
                };//if (playerskillliststring_overflow3 != "")

                if (playerskillliststring_overflow4 != ""){
                    const cardEmbed = new discord.RichEmbed()
                          cardEmbed.setColor(randomHex.generate())
                          cardEmbed.setDescription(playerskillliststring_overflow4, true)
                    message.channel.sendEmbed(
                          cardEmbed, '', { disableEveryone: true }
                    );//message.channel.sendEmbed
                };//if (playerskillliststring_overflow4 != "")

                if (playerskillliststring_overflow5 != ""){
                    const cardEmbed = new discord.RichEmbed()
                          cardEmbed.setColor(randomHex.generate())
                          cardEmbed.setDescription(playerskillliststring_overflow5, true)
                    message.channel.sendEmbed(
                          cardEmbed, '', { disableEveryone: true }
                    );//message.channel.sendEmbed
                };//if (playerskillliststring_overflow5 != "")

                const cardEmbed = new discord.RichEmbed()
                    if (playerskillliststring_overflow1 == ""){
                        cardEmbed.setAuthor(uidname, settings.botpic)
                        cardEmbed.setThumbnail(settings.avypic)
                    };//if (playerskillliststring_overflow1 == "")
                      cardEmbed.setColor(randomHex.generate())
                      cardEmbed.setFooter(uidname + ' Skill Card ~ invoked by '+ message.author.username, settings.serverpic)
                      cardEmbed.setTimestamp()
                      cardEmbed.setURL('http://www.maskedriders.info/Mee6RP/index.php')
                      cardEmbed.addField('Level [Power Multiplier]', userlvl + ' [' + powertotal + ']', true)
                      cardEmbed.addField('Class/Form', FullClassSTRING, true)
                      cardEmbed.setDescription(playerskillliststring + playerskillliststring2, true)
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
  name: "scard",
  description: "",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};