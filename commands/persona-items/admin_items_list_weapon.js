const discord = require ('discord.js');
var Client   =    require('mysql');
var settings = require('../../settings.js');
var randomHex = require('random-hex');
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
    var slapdesc = 'No Items in Database';
    var arrayname0 = msg.content.split(' ');
    var Name  = '';

    for (var i = 0; i < (settings.Weapons_Armor_List.size)*9999; i++){
        if (settings.Weapons_Armor_List.get(i) != undefined){
            if (settings.Weapons_Armor_List.get(i).Type == 0){
                if ((settings.Weapons_Armor_List.get(i).Name.toLowerCase().startsWith("changer"))){
                    //ignore if a changer
                } else if ((settings.Weapons_Armor_List.get(i).Name.toLowerCase().startsWith("driver"))){
                    //ignore if a driver
                } else if ((settings.Weapons_Armor_List.get(i).Name.toLowerCase().startsWith("misc"))){
                    //ignore if misc
                } else {
                    var FullName = settings.ParseName(settings.Weapons_Armor_List.get(i).Name);
                        slapdesc = '[ID: ' + settings.Weapons_Armor_List.get(i).ID + '] **' + FullName + '**\n';
                    if (arrayname0[1] != undefined){
                            Name = arrayname0[1].toLowerCase();
                        if (settings.Weapons_Armor_List.get(i).Name.toLowerCase().startsWith(Name)){
                            const RiderEmbed = new discord.RichEmbed()
                                  RiderEmbed.setThumbnail(settings.Weapons_Armor_List.get(i).ImageURL)
                                  RiderEmbed.setColor(randomHex.generate())
                                  RiderEmbed.setDescription(slapdesc)
                            if (settings.Weapons_Armor_List.get(i).ImageURL2 != settings.blankpic){
                                  RiderEmbed.setImage(settings.Weapons_Armor_List.get(i).ImageURL2)
                            } else {RiderEmbed.setImage(settings.Weapons_Armor_List.get(i).ImageURL)}
                            var Gashat_LVL_LOW = settings.Weapons_Armor_List.get(i).DMG_Floor;
                            var Gashat_LVL_HIGH = settings.Weapons_Armor_List.get(i).DMG_High;
                            var Series_ID = settings.Weapons_Armor_List.get(i).Series_ID;
                            if (Gashat_LVL_LOW >= parseInt(192311813)){Gashat_LVL_LOW = "__**SWARM**__";}
                            if (Gashat_LVL_HIGH >= parseInt(192311813)){Gashat_LVL_HIGH = "__**SWARM**__";}
                                  RiderEmbed.addField("Damage {Low}", Gashat_LVL_LOW, true)
                                  RiderEmbed.addField("Damage {High}", Gashat_LVL_HIGH, true)
                            if (settings.Weapons_Armor_List.get(i).Weight > 0){RiderEmbed.addField("Weight", settings.Weapons_Armor_List.get(i).Weight, true)}
                                  RiderEmbed.addField("Series", settings.SeriesName(Series_ID), true)
                            if (settings.Weapons_Armor_List.get(i).Upgrade_SkillID > 0){RiderEmbed.addField("Upgrade", settings.PlayerPerkName(settings.Weapons_Armor_List.get(i).Upgrade_SkillID), true)}
                            if (settings.Weapons_Armor_List.get(i).Main_SkillID > 0){RiderEmbed.addField("Primary Buff", settings.PlayerPerkName(settings.Weapons_Armor_List.get(i).Main_SkillID), true)}
                            if (settings.Weapons_Armor_List.get(i).Secondary_SkillID > 0){RiderEmbed.addField("Secondary Buff", settings.PlayerPerkName(settings.Weapons_Armor_List.get(i).Secondary_SkillID), true)}
                            if (settings.Weapons_Armor_List.get(i).Tritary_SkillID > 0){RiderEmbed.addField("Tritary Buff", settings.PlayerPerkName(settings.Weapons_Armor_List.get(i).Tritary_SkillID), true)}
                            msg.channel.send({embed: RiderEmbed});
                        };//if (settings.Weapons_Armor_List.get(i).Name.toLowerCase().startsWith(Name))
                    } else {
                            const RiderEmbed = new discord.RichEmbed()
                                  RiderEmbed.setThumbnail(settings.Weapons_Armor_List.get(i).ImageURL)
                                  RiderEmbed.setColor(randomHex.generate())
                                  RiderEmbed.setDescription(slapdesc)
                            if (settings.Weapons_Armor_List.get(i).ImageURL2 != settings.blankpic){
                                  RiderEmbed.setImage(settings.Weapons_Armor_List.get(i).ImageURL2)
                            } else {RiderEmbed.setImage(settings.Weapons_Armor_List.get(i).ImageURL)}
                            var Gashat_LVL_LOW = settings.Weapons_Armor_List.get(i).DMG_Floor;
                            var Gashat_LVL_HIGH = settings.Weapons_Armor_List.get(i).DMG_High;
                            var Series_ID = settings.Weapons_Armor_List.get(i).Series_ID;
                            if (Gashat_LVL_LOW >= parseInt(192311813)){Gashat_LVL_LOW = "__**SWARM**__";}
                            if (Gashat_LVL_HIGH >= parseInt(192311813)){Gashat_LVL_HIGH = "__**SWARM**__";}
                                  RiderEmbed.addField("Damage {Low}", Gashat_LVL_LOW, true)
                                  RiderEmbed.addField("Damage {High}", Gashat_LVL_HIGH, true)
                            if (settings.Weapons_Armor_List.get(i).Weight > 0){RiderEmbed.addField("Weight", settings.Weapons_Armor_List.get(i).Weight, true)}
                                  RiderEmbed.addField("Series", settings.SeriesName(Series_ID), true)
                            if (settings.Weapons_Armor_List.get(i).Upgrade_SkillID > 0){RiderEmbed.addField("Upgrade", settings.PlayerPerkName(settings.Weapons_Armor_List.get(i).Upgrade_SkillID), true)}
                            if (settings.Weapons_Armor_List.get(i).Main_SkillID > 0){RiderEmbed.addField("Primary Buff", settings.PlayerPerkName(settings.Weapons_Armor_List.get(i).Main_SkillID), true)}
                            if (settings.Weapons_Armor_List.get(i).Secondary_SkillID > 0){RiderEmbed.addField("Secondary Buff", settings.PlayerPerkName(settings.Weapons_Armor_List.get(i).Secondary_SkillID), true)}
                            if (settings.Weapons_Armor_List.get(i).Tritary_SkillID > 0){RiderEmbed.addField("Tritary Buff", settings.PlayerPerkName(settings.Weapons_Armor_List.get(i).Tritary_SkillID), true)}
                            msg.channel.send({embed: RiderEmbed});
                    };//if (arrayname0[1] != undefined)
                };//if ((rows[i].Name.toLowerCase().startsWith
            };//if ((settings.Weapons_Armor_List.get(i).Type == 2))
        };//if (settings.Weapons_Armor_List.get(i)
    }//for (var i = 0; i < settings.Weapons_Armor_List.size; i++)
};//exports run

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: [
            "list-weapons", "listweapons", 
            "list-weapon" , "listweapon", 
            "weapon" 
           ],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "weapons",
  description: "",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};

