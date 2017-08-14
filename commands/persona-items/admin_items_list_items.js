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
            if (settings.Weapons_Armor_List.get(i).Type == 2){
                var FullName = settings.ParseName(settings.Weapons_Armor_List.get(i).Name);
                    slapdesc = '[ID: ' + settings.Weapons_Armor_List.get(i).ID + '] **' + FullName + '**\n';
                if (arrayname0[1] != undefined){
                    Name = arrayname0[1].toLowerCase();
                    if (settings.Weapons_Armor_List.get(i).Name.toLowerCase().startsWith(Name)){
                        var Gashat_LVL_LOW = settings.Weapons_Armor_List.get(i).DMG_Floor;
                        var Gashat_LVL_HIGH = settings.Weapons_Armor_List.get(i).DMG_High;
                        var Series_ID = settings.Weapons_Armor_List.get(i).Series_ID;
                        const RiderEmbed = new discord.RichEmbed()
                              RiderEmbed.setThumbnail(settings.Weapons_Armor_List.get(i).ImageURL)
                              RiderEmbed.setColor(randomHex.generate())
                              RiderEmbed.setDescription(slapdesc)
                        if (settings.Weapons_Armor_List.get(i).ImageURL2 != settings.blankpic){
                              RiderEmbed.setImage(settings.Weapons_Armor_List.get(i).ImageURL2)
                        } else {RiderEmbed.setImage(settings.Weapons_Armor_List.get(i).ImageURL)}
                        if (Gashat_LVL_LOW >= parseInt(192311813)){Gashat_LVL_LOW = "__**SWARM**__";}
                        if (Gashat_LVL_HIGH >= parseInt(192311813)){Gashat_LVL_HIGH = "__**SWARM**__";}
                        if (settings.Weapons_Armor_List.get(i).Weight > 0){RiderEmbed.addField("Weight", settings.Weapons_Armor_List.get(i).Weight, true)}
                              RiderEmbed.addField("Series", settings.SeriesName(Series_ID), true)
                        if ((settings.Weapons_Armor_List.get(i).Name.toLowerCase().startsWith("changer"))){
                            //if a changer
                            RiderEmbed.addField("Number Of "+settings.SubFormName(Series_ID)+" Slots", settings.Weapons_Armor_List.get(i).Upgrade_SkillID, true)
                        } else if ((settings.Weapons_Armor_List.get(i).Name.toLowerCase().startsWith("driver"))){
                            //if a driver
                            RiderEmbed.addField("Number Of "+settings.SubFormName(Series_ID)+" Slots", settings.Weapons_Armor_List.get(i).Upgrade_SkillID, true)
                        } else if ((settings.Weapons_Armor_List.get(i).Name.toLowerCase().startsWith("misc"))){
                            // if misc
                        } else {
                                RiderEmbed.addField(settings.SubFormName(Series_ID)+" Level {Low}", Gashat_LVL_LOW, true)
                                RiderEmbed.addField(settings.SubFormName(Series_ID)+" Level {High}", Gashat_LVL_HIGH, true)
                            if (settings.Weapons_Armor_List.get(i).Upgrade_SkillID > 0){RiderEmbed.addField("Size", settings.Weapons_Armor_List.get(i).Upgrade_SkillID, true)}
                            if (settings.Weapons_Armor_List.get(i).Main_SkillID > 0){RiderEmbed.addField("Primary Key", "*"+settings.PlayerClassName(settings.Weapons_Armor_List.get(i).Main_SkillID, "yes")+"*", true)}
                            if (settings.Weapons_Armor_List.get(i).Secondary_SkillID > 0){RiderEmbed.addField("Secondary Key", "*"+settings.PlayerClassName(settings.Weapons_Armor_List.get(i).Secondary_SkillID, "yes")+"*", true)}
                            if (settings.Weapons_Armor_List.get(i).Tritary_SkillID > 0){RiderEmbed.addField("Tritary Key", "*"+settings.PlayerClassName(settings.Weapons_Armor_List.get(i).Tritary_SkillID, "yes")+"*", true)}
                        };//if ((rows[i].Name.toLowerCase().startsWith
                            msg.channel.send({embed: RiderEmbed});
                        };//if (settings.Weapons_Armor_List.get(i).Name.toLowerCase().startsWith(Name))
                } else {
                    var Gashat_LVL_LOW = settings.Weapons_Armor_List.get(i).DMG_Floor;
                    var Gashat_LVL_HIGH = settings.Weapons_Armor_List.get(i).DMG_High;
                    var Series_ID = settings.Weapons_Armor_List.get(i).Series_ID;
                    const RiderEmbed = new discord.RichEmbed()
                          RiderEmbed.setThumbnail(settings.Weapons_Armor_List.get(i).ImageURL)
                          RiderEmbed.setColor(randomHex.generate())
                          RiderEmbed.setDescription(slapdesc)
                    if (settings.Weapons_Armor_List.get(i).ImageURL2 != settings.blankpic){
                          RiderEmbed.setImage(settings.Weapons_Armor_List.get(i).ImageURL2)
                    } else {RiderEmbed.setImage(settings.Weapons_Armor_List.get(i).ImageURL)}
                    if (Gashat_LVL_LOW >= parseInt(192311813)){Gashat_LVL_LOW = "__**SWARM**__";}
                    if (Gashat_LVL_HIGH >= parseInt(192311813)){Gashat_LVL_HIGH = "__**SWARM**__";}
                    if (settings.Weapons_Armor_List.get(i).Weight > 0){RiderEmbed.addField("Weight", settings.Weapons_Armor_List.get(i).Weight, true)}
                          RiderEmbed.addField("Series", settings.SeriesName(Series_ID), true)
                    if ((settings.Weapons_Armor_List.get(i).Name.toLowerCase().startsWith("changer"))){
                        //if a changer
                        RiderEmbed.addField("Number Of "+settings.SubFormName(Series_ID)+" Slots", settings.Weapons_Armor_List.get(i).Upgrade_SkillID, true)
                    } else if ((settings.Weapons_Armor_List.get(i).Name.toLowerCase().startsWith("driver"))){
                        //if a driver
                        RiderEmbed.addField("Number Of "+settings.SubFormName(Series_ID)+" Slots", settings.Weapons_Armor_List.get(i).Upgrade_SkillID, true)
                    } else if ((settings.Weapons_Armor_List.get(i).Name.toLowerCase().startsWith("misc"))){
                        // if misc
                    } else {
                            RiderEmbed.addField(settings.SubFormName(Series_ID)+" Level {Low}", Gashat_LVL_LOW, true)
                            RiderEmbed.addField(settings.SubFormName(Series_ID)+" Level {High}", Gashat_LVL_HIGH, true)
                        if (settings.Weapons_Armor_List.get(i).Upgrade_SkillID > 0){RiderEmbed.addField("Size", settings.Weapons_Armor_List.get(i).Upgrade_SkillID, true)}
                        if (settings.Weapons_Armor_List.get(i).Main_SkillID > 0){RiderEmbed.addField("Primary Key", "*"+settings.PlayerClassName(settings.Weapons_Armor_List.get(i).Main_SkillID, "yes")+"*", true)}
                        if (settings.Weapons_Armor_List.get(i).Secondary_SkillID > 0){RiderEmbed.addField("Secondary Key", "*"+settings.PlayerClassName(settings.Weapons_Armor_List.get(i).Secondary_SkillID, "yes")+"*", true)}
                        if (settings.Weapons_Armor_List.get(i).Tritary_SkillID > 0){RiderEmbed.addField("Tritary Key", "*"+settings.PlayerClassName(settings.Weapons_Armor_List.get(i).Tritary_SkillID, "yes")+"*", true)}
                    };//if ((rows[i].Name.toLowerCase().startsWith
                    msg.channel.send({embed: RiderEmbed});
                };//if (arrayname0[1] != undefined)
            };//if ((settings.Weapons_Armor_List.get(i).Type == 2))
        };//if (settings.Weapons_Armor_List.get(i)
    }//for (var i = 0; i < settings.Weapons_Armor_List.size; i++)
};//exports run

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: [
            "list-items", "listitems", 
            "list-item" , "listitem", 
            "item"
           ],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "items",
  description: "",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};

