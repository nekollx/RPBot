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
    var NPCID    = parseInt(arrayname[1]);
    var SPECIAL    = arrayname[2];
    var SPECIALName    = "Strength";

    if (isNaN(NPCID) || (NPCID == null) || (NPCID == undefined)){NPCID = 0;}

    if (msg.content.toLowerCase().startsWith("!npc-perception")){SPECIALName = "Perception";}
    if (msg.content.toLowerCase().startsWith("!npcperception")){SPECIALName = "Perception";}
    if (msg.content.toLowerCase().startsWith("!npc-endurance")){SPECIALName = "Endurance";}
    if (msg.content.toLowerCase().startsWith("!npcendurance")){SPECIALName = "Endurance";}
    if (msg.content.toLowerCase().startsWith("!npc-charisma")){SPECIALName = "Charisma";}
    if (msg.content.toLowerCase().startsWith("!npccharisma")){SPECIALName = "Charisma";}
    if (msg.content.toLowerCase().startsWith("!npc-intelligence")){SPECIALName = "Intelligence";}
    if (msg.content.toLowerCase().startsWith("!npcintelligence")){SPECIALName = "Intelligence";}
    if (msg.content.toLowerCase().startsWith("!npc-agility")){SPECIALName = "Agility";}
    if (msg.content.toLowerCase().startsWith("!npcagility")){SPECIALName = "Agility";}
    if (msg.content.toLowerCase().startsWith("!npc-luck")){SPECIALName = "Luck";}
    if (msg.content.toLowerCase().startsWith("!npcluck")){SPECIALName = "Luck";}
    if (msg.content.toLowerCase().startsWith("!npc-power")){SPECIALName = "Power";}
    if (msg.content.toLowerCase().startsWith("!npcpower")){SPECIALName = "Power";}
    if (msg.content.toLowerCase().startsWith("!npc-gender")){SPECIALName = "Gender";}
    if (msg.content.toLowerCase().startsWith("!npcgender")){SPECIALName = "Gender";}
    if (msg.content.toLowerCase().startsWith("!npc-height")){SPECIALName = "Height";}
    if (msg.content.toLowerCase().startsWith("!npcheight")){SPECIALName = "Height";}
    if (msg.content.toLowerCase().startsWith("!npc-weight")){SPECIALName = "Weight";}
    if (msg.content.toLowerCase().startsWith("!npcweight")){SPECIALName = "Weight";}
    if (msg.content.toLowerCase().startsWith("!npc-race")){SPECIALName = "Race";}
    if (msg.content.toLowerCase().startsWith("!npcrace")){SPECIALName = "Race";}
    if (msg.content.toLowerCase().startsWith("!npc-fitness")){SPECIALName = "Fitness";}
    if (msg.content.toLowerCase().startsWith("!npcfitness")){SPECIALName = "Fitness";}
    if (msg.content.toLowerCase().startsWith("!npc-level")){SPECIALName = "Bonus_Level";}
    if (msg.content.toLowerCase().startsWith("!npclevel")){SPECIALName = "Bonus_Level";}
    if (msg.content.toLowerCase().startsWith("!npchp")){SPECIALName = "Bonus_HP";}
    if (msg.content.toLowerCase().startsWith("!npc-hp")){SPECIALName = "Bonus_HP";}
    if (msg.content.toLowerCase().startsWith("!npc-ap")){SPECIALName = "Bonus_MP";}
    if (msg.content.toLowerCase().startsWith("!npcap")){SPECIALName = "Bonus_MP";}
    if (msg.content.toLowerCase().startsWith("!npc-ip")){SPECIALName = "Bonus_IP";}
    if (msg.content.toLowerCase().startsWith("!npcip")){SPECIALName = "Bonus_IP";}

    if (msg.content.toLowerCase().startsWith("!npc-bresist")){SPECIALName = "Bonus_Ballistic_Resist";}
    if (msg.content.toLowerCase().startsWith("!npcbresist")){SPECIALName = "Bonus_Ballistic_Resist";}
    if (msg.content.toLowerCase().startsWith("!npc-fresist")){SPECIALName = "Bonus_Fire_Resist";}
    if (msg.content.toLowerCase().startsWith("!npcfresist")){SPECIALName = "Bonus_Fire_Resist";}
    if (msg.content.toLowerCase().startsWith("!npc-cresist")){SPECIALName = "Bonus_Cryo_Resist";}
    if (msg.content.toLowerCase().startsWith("!npccresist")){SPECIALName = "Bonus_Cryo_Resist";}
    if (msg.content.toLowerCase().startsWith("!npc-presist")){SPECIALName = "Bonus_Posion_Resist";}
    if (msg.content.toLowerCase().startsWith("!npcpresist")){SPECIALName = "Bonus_Posion_Resist";}
    if (msg.content.toLowerCase().startsWith("!npc-tresist")){SPECIALName = "Bonus_Toxic_Resist";}
    if (msg.content.toLowerCase().startsWith("!npctresist")){SPECIALName = "Bonus_Toxic_Resist";}
    if (msg.content.toLowerCase().startsWith("!npc-enresist")){SPECIALName = "Bonus_Energy_Resist";}
    if (msg.content.toLowerCase().startsWith("!npcenresist")){SPECIALName = "Bonus_Energy_Resist";}
    if (msg.content.toLowerCase().startsWith("!npc-elresist")){SPECIALName = "Bonus_Electric_Resist";}
    if (msg.content.toLowerCase().startsWith("!npcelresist")){SPECIALName = "Bonus_Electric_Resist";}
    if (msg.content.toLowerCase().startsWith("!npc-spresist")){SPECIALName = "Bonus_Special_Resist";}
    if (msg.content.toLowerCase().startsWith("!npcspresist")){SPECIALName = "Bonus_Special_Resist";}

    if (msg.content.toLowerCase().startsWith("!npc-bdt")){SPECIALName = "Bonus_Ballistic_Threshold";}
    if (msg.content.toLowerCase().startsWith("!npcbdt")){SPECIALName = "Bonus_Ballistic_Threshold";}
    if (msg.content.toLowerCase().startsWith("!npc-fdt")){SPECIALName = "Bonus_Fire_Threshold";}
    if (msg.content.toLowerCase().startsWith("!npcfdt")){SPECIALName = "Bonus_Fire_Threshold";}
    if (msg.content.toLowerCase().startsWith("!npc-cdt")){SPECIALName = "Bonus_Cryo_Threshold";}
    if (msg.content.toLowerCase().startsWith("!npccdt")){SPECIALName = "Bonus_Cryo_Threshold";}
    if (msg.content.toLowerCase().startsWith("!npc-pdt")){SPECIALName = "Bonus_Posion_Threshold";}
    if (msg.content.toLowerCase().startsWith("!npcpdt")){SPECIALName = "Bonus_Posion_Threshold";}
    if (msg.content.toLowerCase().startsWith("!npc-tdt")){SPECIALName = "Bonus_Toxic_Threshold";}
    if (msg.content.toLowerCase().startsWith("!npctdt")){SPECIALName = "Bonus_Toxic_Threshold";}
    if (msg.content.toLowerCase().startsWith("!npc-endt")){SPECIALName = "Bonus_Energy_Threshold";}
    if (msg.content.toLowerCase().startsWith("!npcendt")){SPECIALName = "Bonus_Energy_Threshold";}
    if (msg.content.toLowerCase().startsWith("!npc-eldt")){SPECIALName = "Bonus_Electric_Threshold";}
    if (msg.content.toLowerCase().startsWith("!npceldt")){SPECIALName = "Bonus_Electric_Threshold";}
    if (msg.content.toLowerCase().startsWith("!npc-spdt")){SPECIALName = "Bonus_Special_Threshold";}
    if (msg.content.toLowerCase().startsWith("!npcspdt")){SPECIALName = "Bonus_Special_Threshold";}

    if (msg.content.toLowerCase().startsWith("!npc-heal")){SPECIALName = "Current_HP";}
    if (msg.content.toLowerCase().startsWith("!npcheal")){SPECIALName = "Current_HP";}
    if (msg.content.toLowerCase().startsWith("!npc-rest")){SPECIALName = "Current_MP";}
    if (msg.content.toLowerCase().startsWith("!npcrest")){SPECIALName = "Current_MP";}
    if (msg.content.toLowerCase().startsWith("!npc-meditate")){SPECIALName = "Current_IP";}
    if (msg.content.toLowerCase().startsWith("!npcmeditate")){SPECIALName = "Current_IP";}

    mysqlPool.getConnection(function(err_u, connection) {
        if(err_u) {console.log("Error on - mysqlPool.getConnection for add weapons/armor/items: "+ err_u)};

        var SQLString  = "SELECT * FROM " + settings.dbnpctable + " ";
            SQLString += "WHERE id = " + NPCID;
        connection.query(SQLString, {title: 'Update'}, function(errU, resultU) {
            if (errU) console.log(errU);
                if (resultU.length > 0){
                    var BIO = settings.NPC_List.get(NPCID).Bio;
                    var URL = settings.NPC_List.get(NPCID).Avatar_URL;
                    var Power = settings.NPC_List.get(NPCID).Power;
                    var Level = Power/10;
                    var Strength = settings.NPC_List.get(NPCID).Strength;
                    var Perception = settings.NPC_List.get(NPCID).Perception;
                    var Endurance = settings.NPC_List.get(NPCID).Endurance;
                    var Charisma = settings.NPC_List.get(NPCID).Charisma;
                    var Intelligence = settings.NPC_List.get(NPCID).Intelligence;
                    var Agility = settings.NPC_List.get(NPCID).Agility;
                    var Luck = settings.NPC_List.get(NPCID).Luck;
                    var Gender = settings.NPC_List.get(NPCID).Gender;
                    var Height = settings.NPC_List.get(NPCID).Height;
                    var Weight = settings.NPC_List.get(NPCID).Weight;
                    var Race = settings.NPC_List.get(NPCID).Race;
                    var PlayerHeight       = settings.HeightCalculator(Height);
                    var PlayerHeightFeet   = Math.floor(PlayerHeight);
                    var PlayerHeightInches = PlayerHeight % 1;
                        PlayerHeightInches = PlayerHeightInches * 100;
                        PlayerHeightInches = Math.floor(PlayerHeightInches);
                        PlayerHeightInches = PlayerHeightInches / 12;
                        PlayerHeightInches = Math.round(100*PlayerHeightInches)/100;
                    var PlayerHeightString = PlayerHeightFeet + ' Feet, ' + PlayerHeightInches + ' Inches';
                    var Bonus_Level = settings.NPC_List.get(NPCID).Bonus_Level;
                    var Current_HP = settings.NPC_List.get(NPCID).Current_HP;
                    var Current_MP = settings.NPC_List.get(NPCID).Current_MP;
                    var Current_IP = settings.NPC_List.get(NPCID).Current_IP;
                    var Bonus_HP = settings.NPC_List.get(NPCID).Bonus_HP;
                    var Bonus_MP = settings.NPC_List.get(NPCID).Bonus_MP;
                    var Bonus_IP = settings.NPC_List.get(NPCID).Bonus_IP;
                    var Total_Levels = parseInt(Level) + parseInt(Bonus_Level);
                    var MaxH = settings.MaxHPCalculator(Total_Levels, Endurance, Power, Bonus_HP, 0/*LifegiverCount2*/);
                    var MaxM = settings.MaxMPCalculator(Total_Levels, Agility, Power, Bonus_MP, 0/*bonus skill count*/);
                    var MaxI = settings.MaxIPCalculator(Total_Levels, Intelligence, Power, Bonus_IP, 0/*bonus skill count*/);
                    var HP_String = Current_HP.toLocaleString()+"/"+MaxH.toLocaleString()+"["+((Current_HP/MaxH)*100)+"%]";
                    var MP_String = Current_MP.toLocaleString()+"/"+MaxM.toLocaleString()+"["+((Current_MP/MaxM)*100)+"%]";
                    var IP_String = Current_IP.toLocaleString()+"/"+MaxI.toLocaleString()+"["+((Current_IP/MaxI)*100)+"%]";
                    var slapdesc  = '['+ settings.NPC_List.get(NPCID).Self_ID +']';
                        slapdesc  += settings.NPC_List.get(NPCID).Name
                    var Series_Name = ' ['+settings.SeriesName(settings.NPC_List.get(NPCID).Series_ID)+']';

                if ((msg.content.toLowerCase().startsWith("!npc-heal")) ||
                    (msg.content.toLowerCase().startsWith("!npcheal"))
                ){
                    var MaxH = settings.MaxHPCalculator(Total_Levels, Endurance, Power, Bonus_HP, 0/*LifegiverCount2*/);
                    var UpdateString  = "UPDATE " + settings.dbnpctable+" ";
                        UpdateString += "SET ";
                        UpdateString += SPECIALName+" = '" + MaxH +"' ";
                        UpdateString += "WHERE id = " + NPCID;
                    connection.query(UpdateString);
                    settings.NPC_List.get(NPCID)[SPECIALName] = MaxH;
                    var slapdesc  = settings.NPC_List.get(NPCID).Name+' ' +SPECIALName+' set to '+MaxH.toLocaleString()+'.';
                    const RiderEmbed = new discord.RichEmbed()
                          RiderEmbed.setColor(randomHex.generate())
                          RiderEmbed.setDescription(slapdesc)
                    msg.channel.send({embed: RiderEmbed});
                } else if ((msg.content.toLowerCase().startsWith("!npc-rest")) ||
                    (msg.content.toLowerCase().startsWith("!npcrest"))
                ){
                    var MaxM = settings.MaxMPCalculator(Total_Levels, Agility, Power, Bonus_MP, 0/*bonus skill count*/);
                    var UpdateString  = "UPDATE " + settings.dbnpctable+" ";
                        UpdateString += "SET ";
                        UpdateString += SPECIALName+" = '" + MaxM +"' ";
                        UpdateString += "WHERE id = " + NPCID;
                    connection.query(UpdateString);
                    settings.NPC_List.get(NPCID)[SPECIALName] = MaxM;
                    var slapdesc  = settings.NPC_List.get(NPCID).Name+' ' +SPECIALName+' set to '+MaxM.toLocaleString()+'.';
                    const RiderEmbed = new discord.RichEmbed()
                          RiderEmbed.setColor(randomHex.generate())
                          RiderEmbed.setDescription(slapdesc)
                    msg.channel.send({embed: RiderEmbed});
                } else if ((msg.content.toLowerCase().startsWith("!npc-meditate")) ||
                    (msg.content.toLowerCase().startsWith("!npcmeditate"))
                ){
                    var MaxI = settings.MaxIPCalculator(Total_Levels, Intelligence, Power, Bonus_IP, 0/*bonus skill count*/);
                    var UpdateString  = "UPDATE " + settings.dbnpctable+" ";
                        UpdateString += "SET ";
                        UpdateString += SPECIALName+" = '" + MaxI +"' ";
                        UpdateString += "WHERE id = " + NPCID;
                    connection.query(UpdateString);
                    settings.NPC_List.get(NPCID)[SPECIALName] = MaxI;
                    var slapdesc  = settings.NPC_List.get(NPCID).Name+' ' +SPECIALName+' set to '+MaxI.toLocaleString()+'.';
                    const RiderEmbed = new discord.RichEmbed()
                          RiderEmbed.setColor(randomHex.generate())
                          RiderEmbed.setDescription(slapdesc)
                    msg.channel.send({embed: RiderEmbed});
                } else {
                    var UpdateString  = "UPDATE " + settings.dbnpctable+" ";
                        UpdateString += "SET ";
                        UpdateString += SPECIALName+" = '" + SPECIAL +"' ";
                        UpdateString += "WHERE id = " + NPCID;
                    connection.query(UpdateString);
                    settings.NPC_List.get(NPCID)[SPECIALName] = SPECIAL;

                    const RiderEmbed = new discord.RichEmbed()
                        RiderEmbed.setThumbnail(URL)
                        RiderEmbed.setColor(randomHex.generate())
                        //RiderEmbed.setAuthor(slapdesc)
                        RiderEmbed.setDescription(BIO)
                        RiderEmbed.addField("Name", slapdesc, true)
                        RiderEmbed.addField("Series", Series_Name, true)
                        RiderEmbed.addField("Gender", settings.GenderName(Gender), true)
                        RiderEmbed.addField("Height", PlayerHeightString+" ["+Height+" cm]", true)
                        RiderEmbed.addField("Weight", Weight.toLocaleString()+" lbs", true)
                        RiderEmbed.addField("Race", settings.RaceName(Race), true)
                        RiderEmbed.addField("Level", Level.toLocaleString(), true)
                        RiderEmbed.addField("Power", Power.toLocaleString(), true)
                        RiderEmbed.addField("HP", HP_String, true)
                        RiderEmbed.addField("AP", MP_String, true)
                        RiderEmbed.addField("IP", IP_String, true)
                        RiderEmbed.addField("Strength", Strength.toLocaleString(), true)
                        RiderEmbed.addField("Perception", Perception.toLocaleString(), true)
                        RiderEmbed.addField("Endurance", Endurance.toLocaleString(), true)
                        RiderEmbed.addField("Charisma", Charisma.toLocaleString(), true)
                        RiderEmbed.addField("Intelligence", Intelligence.toLocaleString(), true)
                        RiderEmbed.addField("Agility", Agility.toLocaleString(), true)
                        RiderEmbed.addField("Luck", Luck.toLocaleString(), true)
                    msg.channel.send({embed: RiderEmbed});
                    };//if not one ofthe special heals
                };//if (resultU > 0)
       });//connection.query(SQLString
        connection.release(); // if error occured closed the connection
    });//get connection
};//run

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: [
            "npc-strength",
            "npc-perception", "npcperception",
            "npc-endurance", "npcendurance",
            "npc-charisma", "npccharisma",
            "npc-intelligence", "npcintelligence",
            "npc-agility", "npcagility",
            "npc-luck", "npcluck",
            "npc-bresist", "npcbresist",
            "npc-fresist", "npcfresist",
            "npc-cresist", "npccresist",
            "npc-presist", "npcpresist",
            "npc-tresist", "npctresist",
            "npc-enresist", "npcenresist",
            "npc-elresist", "npcelresist",
            "npc-spresist", "npcspresist",
            "npc-bdt", "npcbdt",
            "npc-fdt", "npcfdt",
            "npc-cdt", "npccdt",
            "npc-pdt", "npcpdt",
            "npc-tdt", "npctdt",
            "npc-endt", "npcendt",
            "npc-eldt", "npceldt",
            "npc-spdt", "npcspdt",
            "npc-power", "npcpower",
            "npc-gender", "npcgender",
            "npc-height", "npcheight",
            "npc-weight", "npcweight",
            "npc-fitness", "npcfitness",
            "npc-race", "npcrace",
            "npc-level", "npclevel",
            "npc-hp", "npchp",
            "npc-ap", "npcap",
            "npc-ip", "npcip",
            "npc-heal", "npcheal",
            "npc-rest", "npcrest",
            "npc-meditate", "npcmeditate"
           ],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "npcstrength",
  description: "",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};
