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
    var uidavatar = msg.author.avatarURL;

    var mentionedid     = uid;
    var mentionedname   = uidname;
    var mentionedavatar = uidavatar;

    //if (msg.mentions.users.first()){
    //  mentionedid = msg.mentions.users.first().id;
    //  mentionedname = msg.mentions.users.first().username;
    //};//if

    var arrayname = msg.content.split(' ');
    var ItemID    = parseInt(arrayname[1]);
    var SPECIAL    = arrayname[2];
    var SPECIALName    = "Strength";

    if (isNaN(ItemID) || (ItemID == null) || (ItemID == undefined)){ItemID = 0;}

    if (msg.content.toLowerCase().startsWith("!itemdmghigh")){SPECIALName = "DMG_High";}
    if (msg.content.toLowerCase().startsWith("!itemdmglow")){SPECIALName = "DMG_Floor";}
    if (msg.content.toLowerCase().startsWith("!itemdamageclass")){SPECIALName = "DamageClass";}
    if (msg.content.toLowerCase().startsWith("!itemkey1")){SPECIALName = "Main_SkillID";}
    if (msg.content.toLowerCase().startsWith("!itemkey2")){SPECIALName = "Secondary_SkillID";}
    if (msg.content.toLowerCase().startsWith("!itemkey3")){SPECIALName = "Tritary_SkillID";}
    if (msg.content.toLowerCase().startsWith("!itemweight")){SPECIALName = "Weight";}
    if (msg.content.toLowerCase().startsWith("!itemname")){SPECIALName = "Name";}
    if (msg.content.toLowerCase().startsWith("!itempic")){SPECIALName = "ImageURL";}
    if (msg.content.toLowerCase().startsWith("!itempic2")){SPECIALName = "ImageURL2";}
    if (msg.content.toLowerCase().startsWith("!itemseries")){SPECIALName = "Series_ID";}
    if (msg.content.toLowerCase().startsWith("!itemsize")){SPECIALName = "Upgrade_SkillID";}

    if (msg.content.toLowerCase().startsWith("!itemtype")){SPECIALName = "Type";}

    if (msg.content.toLowerCase().startsWith("!itemstrength")){SPECIALName = "Strength";}
    if (msg.content.toLowerCase().startsWith("!itemperception")){SPECIALName = "Perception";}
    if (msg.content.toLowerCase().startsWith("!itemendurance")){SPECIALName = "Endurance";}
    if (msg.content.toLowerCase().startsWith("!itemcharisma")){SPECIALName = "Charisma";}
    if (msg.content.toLowerCase().startsWith("!itemintelligence")){SPECIALName = "Intelligence";}
    if (msg.content.toLowerCase().startsWith("!itemagility")){SPECIALName = "Agility";}
    if (msg.content.toLowerCase().startsWith("!itemluck")){SPECIALName = "Luck";}

    if (msg.content.toLowerCase().startsWith("!itemballistic")){SPECIALName = "Bonus_Ballistic_Resist";}
    if (msg.content.toLowerCase().startsWith("!itemfire")){SPECIALName = "Bonus_Fire_Resist";}
    if (msg.content.toLowerCase().startsWith("!itemcryo")){SPECIALName = "Bonus_Cryo_Resist";}
    if (msg.content.toLowerCase().startsWith("!itemposion")){SPECIALName = "Bonus_Posion_Resist";}
    if (msg.content.toLowerCase().startsWith("!itemtoxic")){SPECIALName = "Bonus_Toxic_Resist";}
    if (msg.content.toLowerCase().startsWith("!itemenergy")){SPECIALName = "Bonus_Energy_Resist";}
    if (msg.content.toLowerCase().startsWith("!itemelectric")){SPECIALName = "Bonus_Electric_Resist";}
    if (msg.content.toLowerCase().startsWith("!itemspecial")){SPECIALName = "Bonus_Special_Resist";}

    if (msg.content.toLowerCase().startsWith("!itemballistic_dt")){SPECIALName = "Bonus_Ballistic_Threshold";}
    if (msg.content.toLowerCase().startsWith("!itemfire_dt")){SPECIALName = "Bonus_Fire_Threshold";}
    if (msg.content.toLowerCase().startsWith("!itemcryo_dt")){SPECIALName = "Bonus_Cryo_Threshold";}
    if (msg.content.toLowerCase().startsWith("!itemposion_dt")){SPECIALName = "Bonus_Posion_Threshold";}
    if (msg.content.toLowerCase().startsWith("!itemtoxic_dt")){SPECIALName = "Bonus_Toxic_Threshold";}
    if (msg.content.toLowerCase().startsWith("!itemenergy_dt")){SPECIALName = "Bonus_Energy_Threshold";}
    if (msg.content.toLowerCase().startsWith("!itemelectric_dt")){SPECIALName = "Bonus_Electric_Threshold";}
    if (msg.content.toLowerCase().startsWith("!itemspecial_dt")){SPECIALName = "Bonus_Special_Threshold";}

    if (msg.content.toLowerCase().startsWith("!itemHP")){SPECIALName = "Bonus_HP";}
    if (msg.content.toLowerCase().startsWith("!itemAP")){SPECIALName = "Bonus_MP";}
    if (msg.content.toLowerCase().startsWith("!itemIP")){SPECIALName = "Bonus_IP";}

    mysqlPool.getConnection(function(err_u, connection) {
        if(err_u) {console.log("Error on - mysqlPool.getConnection for add weapons/armor/items: "+ err_u)};

        var SQLString  = "SELECT * FROM " + settings.dbweaponarmortable + " ";
            SQLString += "WHERE ID = " + ItemID + " ";
        connection.query(SQLString, {title: 'Update'}, function(errU, resultU) {
            if (errU) console.log(errU);
                if (resultU.length > 0){
                    var NPCID = resultU[0].ID;
                    var UpdateString  = "UPDATE " + settings.dbweaponarmortable+" ";
                        UpdateString += "SET ";
                        UpdateString += SPECIALName+" = '" + SPECIAL +"' ";
                        UpdateString += "WHERE ID = " + NPCID;
                    connection.query(UpdateString);
                    settings.Weapons_Armor_List.get(NPCID)[SPECIALName] = SPECIAL;

                    var Gashat_LVL_LOW = 0; var Gashat_LVL_HIGH = 0;
                    var Main_SkillID = 0; var Secondary_SkillID = 0; var Tritary_SkillID = 0;
                    var Weight = 0; var ImageURL = ""; var Name = ""; var SlotsUsed = 0;
                    var Strength = 0; var Perception = 0; var Endurance = 0;
                    var Charisma = 0; var Intelligence = 0; var Agility = 0; var Luck = 0;
                    var Bonus_HP = 0; var Bonus_MP = 0; var Bonus_IP = 0;

                    var Bonus_BalisticResist = 0; var Bonus_FireResist = 0; var Bonus_CryoResist = 0; 
                    var Bonus_PosionResist = 0; var Bonus_ToxicResist = 0; var Bonus_EnergyResist = 0; 
                    var Bonus_ElecResist = 0; var Bonus_SpecialResist = 0; 
                    var Bonus_BalisticThreshold = 0; var Bonus_FireThreshold = 0; var Bonus_CryoThreshold = 0; 
                    var Bonus_PosionThreshold = 0; var Bonus_ToxicThreshold = 0; var Bonus_EnergyThreshold = 0; 
                    var Bonus_ElecThreshold = 0; var Bonus_SpecialThreshold = 0; var Series_ID = 0;

                    if ((settings.Weapons_Armor_List.get(ItemID) != undefined)){
                        Name = settings.Weapons_Armor_List.get(ItemID).Name;
                        ImageURL = settings.Weapons_Armor_List.get(ItemID).ImageURL;
                        ImageURL2 = settings.Weapons_Armor_List.get(ItemID).ImageURL2;
                        Weight = settings.Weapons_Armor_List.get(ItemID).Weight;
                        SlotsUsed = parseInt(settings.Weapons_Armor_List.get(ItemID).Upgrade_SkillID);
                        Gashat_LVL_LOW = parseInt(settings.Weapons_Armor_List.get(ItemID).DMG_Floor);
                        Gashat_LVL_HIGH = parseInt(settings.Weapons_Armor_List.get(ItemID).DMG_High);
                        Main_SkillID = parseInt(settings.Weapons_Armor_List.get(ItemID).Main_SkillID);
                        Secondary_SkillID = parseInt(settings.Weapons_Armor_List.get(ItemID).Secondary_SkillID);
                        Tritary_SkillID = parseInt(settings.Weapons_Armor_List.get(ItemID).Tritary_SkillID);
                        Strength = parseInt(settings.Weapons_Armor_List.get(ItemID).Strength);
                        Perception = parseInt(settings.Weapons_Armor_List.get(ItemID).Perception);
                        Endurance = parseInt(settings.Weapons_Armor_List.get(ItemID).Endurance);
                        Charisma = parseInt(settings.Weapons_Armor_List.get(ItemID).Charisma);
                        Intelligence = parseInt(settings.Weapons_Armor_List.get(ItemID).Intelligence);
                        Agility = parseInt(settings.Weapons_Armor_List.get(ItemID).Agility);
                        Luck = parseInt(settings.Weapons_Armor_List.get(ItemID).Luck);
                        Bonus_HP = parseInt(settings.Weapons_Armor_List.get(ItemID).Bonus_HP);
                        Bonus_MP = parseInt(settings.Weapons_Armor_List.get(ItemID).Bonus_MP);
                        Bonus_IP = parseInt(settings.Weapons_Armor_List.get(ItemID).Bonus_IP);
                        Series_ID = parseInt(settings.Weapons_Armor_List.get(ItemID).Series_ID);

                        Bonus_BalisticResist = parseInt(settings.Weapons_Armor_List.get(ItemID).Bonus_Ballistic_Resist);
                        Bonus_FireResist = parseInt(settings.Weapons_Armor_List.get(ItemID).Bonus_Fire_Resist);
                        Bonus_CryoResist = parseInt(settings.Weapons_Armor_List.get(ItemID).Bonus_Cryo_Resist);
                        Bonus_PosionResist = parseInt(settings.Weapons_Armor_List.get(ItemID).Bonus_Posion_Resist);
                        Bonus_ToxicResist = parseInt(settings.Weapons_Armor_List.get(ItemID).Bonus_Toxic_Resist);
                        Bonus_EnergyResist = parseInt(settings.Weapons_Armor_List.get(ItemID).Bonus_Energy_Resist);
                        Bonus_ElecResist = parseInt(settings.Weapons_Armor_List.get(ItemID).Bonus_Electric_Resist);
                        Bonus_SpecialResist = parseInt(settings.Weapons_Armor_List.get(ItemID).Bonus_Special_Resist);
                        Bonus_BalisticThreshold = parseInt(settings.Weapons_Armor_List.get(ItemID).Bonus_Ballistic_Threshold);
                        Bonus_FireThreshold = parseInt(settings.Weapons_Armor_List.get(ItemID).Bonus_Fire_Threshold);
                        Bonus_CryoThreshold = parseInt(settings.Weapons_Armor_List.get(ItemID).Bonus_Cryo_Threshold);
                        Bonus_PosionThreshold = parseInt(settings.Weapons_Armor_List.get(ItemID).Bonus_Posion_Threshold);
                        Bonus_ToxicThreshold = parseInt(settings.Weapons_Armor_List.get(ItemID).Bonus_Toxic_Threshold);
                        Bonus_EnergyThreshold = parseInt(settings.Weapons_Armor_List.get(ItemID).Bonus_Energy_Threshold);
                        Bonus_ElecThreshold = parseInt(settings.Weapons_Armor_List.get(ItemID).Bonus_Electric_Threshold);
                        Bonus_SpecialThreshold = parseInt(settings.Weapons_Armor_List.get(ItemID).Bonus_Special_Threshold);
                    };//if ((Name == undefined)

                    if (Gashat_LVL_LOW >= parseInt(192311813)){Gashat_LVL_LOW = "__**SWARM**__";}
                    if (Gashat_LVL_HIGH >= parseInt(192311813)){Gashat_LVL_HIGH = "__**SWARM**__";}
                    var SPECIALString  = "["+Strength.toLocaleString()+"]";
                        SPECIALString += "["+Perception.toLocaleString()+"]";
                        SPECIALString += "["+Endurance.toLocaleString()+"]";
                        SPECIALString += "["+Charisma.toLocaleString()+"]";
                        SPECIALString += "["+Intelligence.toLocaleString()+"]";
                        SPECIALString += "["+Agility.toLocaleString()+"]";
                        SPECIALString += "["+Luck.toLocaleString()+"]";
                    var HAIString  = "["+Bonus_HP.toLocaleString()+"]";
                        HAIString += "["+Bonus_MP.toLocaleString()+"]";
                        HAIString += "["+Bonus_IP.toLocaleString()+"]";
                    var ResistString  = "[Ba:"+Bonus_BalisticResist.toLocaleString()+"]";
                        ResistString += "[Fi:"+Bonus_FireResist.toLocaleString()+"]";
                        ResistString += "[Cr:"+Bonus_CryoResist.toLocaleString()+"]";
                        ResistString += "[Po:"+Bonus_PosionResist.toLocaleString()+"]";
                        ResistString += "[To:"+Bonus_ToxicResist.toLocaleString()+"]";
                        ResistString += "[En:"+Bonus_EnergyResist.toLocaleString()+"]";
                        ResistString += "[El:"+Bonus_ElecResist.toLocaleString()+"]";
                        ResistString += "[Sp:"+Bonus_SpecialResist.toLocaleString()+"]";
                    var ThresholdString  = "[Ba:"+Bonus_BalisticThreshold.toLocaleString()+"]";
                        ThresholdString += "[Fi:"+Bonus_FireThreshold.toLocaleString()+"]";
                        ThresholdString += "[Cr:"+Bonus_CryoThreshold.toLocaleString()+"]";
                        ThresholdString += "[Po:"+Bonus_PosionThreshold.toLocaleString()+"]";
                        ThresholdString += "[To:"+Bonus_ToxicThreshold.toLocaleString()+"]";
                        ThresholdString += "[En:"+Bonus_EnergyThreshold.toLocaleString()+"]";
                        ThresholdString += "[El:"+Bonus_ElecThreshold.toLocaleString()+"]";
                        ThresholdString += "[Sp:"+Bonus_SpecialThreshold.toLocaleString()+"]";

                    if ((settings.Weapons_Armor_List.get(ItemID) != undefined)){
                        var FullName = settings.ParseName(Name);
                            slapdesc = "**"+FullName+"**";
                        var Gashat_LVL_LOW = settings.Weapons_Armor_List.get(ItemID).DMG_Floor;
                        var Gashat_LVL_HIGH = settings.Weapons_Armor_List.get(ItemID).DMG_High;
                        var Series_ID = settings.Weapons_Armor_List.get(ItemID).Series_ID;
                        const RiderEmbed = new discord.RichEmbed()
                            RiderEmbed.setThumbnail(settings.Weapons_Armor_List.get(ItemID).ImageURL)
                            RiderEmbed.setColor(randomHex.generate())
                            RiderEmbed.setDescription(slapdesc)
                        if (settings.Weapons_Armor_List.get(ItemID).ImageURL2 != settings.blankpic){
                                RiderEmbed.setImage(settings.Weapons_Armor_List.get(ItemID).ImageURL2)
                        } else {RiderEmbed.setImage(settings.Weapons_Armor_List.get(ItemID).ImageURL)}
                        if (Gashat_LVL_LOW >= parseInt(192311813)){Gashat_LVL_LOW = "__**SWARM**__";}
                        if (Gashat_LVL_HIGH >= parseInt(192311813)){Gashat_LVL_HIGH = "__**SWARM**__";}
                        if (settings.Weapons_Armor_List.get(ItemID).Weight > 0){RiderEmbed.addField("Weight", settings.Weapons_Armor_List.get(ItemID).Weight, true)}
                                RiderEmbed.addField("Series", "*"+settings.SeriesName(Series_ID)+"*", true)
                        if ((settings.Weapons_Armor_List.get(ItemID).Name.toLowerCase().startsWith("changer"))){
                                //if a changer
                                RiderEmbed.addField("Number Of "+settings.SubFormName(Series_ID)+" Slots", settings.Weapons_Armor_List.get(ItemID).Upgrade_SkillID, true)
                        } else if ((settings.Weapons_Armor_List.get(ItemID).Name.toLowerCase().startsWith("driver"))){
                                //if a driver
                                RiderEmbed.addField("Number Of "+settings.SubFormName(Series_ID)+" Slots", settings.Weapons_Armor_List.get(ItemID).Upgrade_SkillID, true)
                        } else if ((settings.Weapons_Armor_List.get(ItemID).Name.toLowerCase().startsWith("misc"))){
                                // if misc
                        } else {
                                RiderEmbed.addField(settings.SubFormName(Series_ID)+" Level {Low}", Gashat_LVL_LOW, true)
                                RiderEmbed.addField(settings.SubFormName(Series_ID)+" Level {High}", Gashat_LVL_HIGH, true)
                            if (settings.Weapons_Armor_List.get(ItemID).Upgrade_SkillID > 0){RiderEmbed.addField("Size", settings.Weapons_Armor_List.get(ItemID).Upgrade_SkillID, true)}
                            if (settings.Weapons_Armor_List.get(ItemID).Main_SkillID > 0){RiderEmbed.addField("Primary Key", "*"+settings.PlayerClassName(settings.Weapons_Armor_List.get(ItemID).Main_SkillID, "yes")+"*", true)}
                            if (settings.Weapons_Armor_List.get(ItemID).Secondary_SkillID > 0){RiderEmbed.addField("Secondary Key", "*"+settings.PlayerClassName(settings.Weapons_Armor_List.get(ItemID).Secondary_SkillID, "yes")+"*", true)}
                            if (settings.Weapons_Armor_List.get(ItemID).Tritary_SkillID > 0){RiderEmbed.addField("Tritary Key", "*"+settings.PlayerClassName(settings.Weapons_Armor_List.get(ItemID).Tritary_SkillID, "yes")+"*", true)}
                        };//if ((rows[i].Name.toLowerCase().startsWith
                            RiderEmbed.addField("S.P.E.C.I.A.L", SPECIALString, true)
                            RiderEmbed.addField("[Bonus] HP AP IP", HAIString, true)
                            RiderEmbed.addField("Resists", ResistString, true)
                            RiderEmbed.addField("Thresholds", ThresholdString, true)
                        msg.channel.send({embed: RiderEmbed});
                    };//if ((Name == undefined)

                };//if (resultU > 0)
       });//connection.query(SQLString
       connection.release(); // if error occured closed the connection
    });//get connection
};//run

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: [
            "itemdmglow",
            "itemdamageclass",
            "itemkey1", "itemkey2", "itemkey3",
            "itemweight",
            "itemname",
            "itempic", "itempic2",
            "itemseries",
            "itemsize",
            "itemtype",
            "itemstrength",
            "itemperception",
            "itemendurance",
            "itemcharisma",
            "itemintelligence",
            "itemagility",
            "itemluck",
            "itemballistic",
            "itemfire",
            "itemcryo",
            "itemposion",
            "itemtoxic",
            "itemenergy",
            "itemelectric",
            "itemspecial",
            "itemballistic_dt",
            "itemfire_dt",
            "itemcryo_dt",
            "itemposion_dt",
            "itemtoxic_dt",
            "itemenergy_dt",
            "itemelectric_dt",
            "itemspecial_dt",
            "itemHP",
            "itemAP",
            "itemIP"
          ],
  permLevel: 2,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "itemdmghigh",
  description: "",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};
