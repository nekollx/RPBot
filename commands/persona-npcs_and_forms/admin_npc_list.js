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
    var NPCID    = parseInt(arrayname[1]);

    if (isNaN(NPCID) || (NPCID == null) || (NPCID == undefined)){
        for (var i = 0; i < ((settings.NPC_List.size)*20); i++) {
            if (settings.NPC_List.get(i) != undefined){
                var SeriesID = settings.NPC_List.get(i).Series_ID;
                var slapdesc  = '['+ settings.NPC_List.get(i).Self_ID +']';
                    slapdesc  += settings.NPC_List.get(i).Name
                var Series_Name = ' ['+settings.SeriesName(SeriesID)+']';
                var BIO = settings.NPC_List.get(i).Bio;
                var Power = parseInt(settings.NPC_List.get(i).Power);
                var Level = Power/10;
                var Strength = parseInt(settings.NPC_List.get(i).Strength);
                var Perception = parseInt(settings.NPC_List.get(i).Perception);
                var Endurance = parseInt(settings.NPC_List.get(i).Endurance);
                var Charisma = parseInt(settings.NPC_List.get(i).Charisma);
                var Intelligence = parseInt(settings.NPC_List.get(i).Intelligence);
                var Agility = parseInt(settings.NPC_List.get(i).Agility);
                var Luck = parseInt(settings.NPC_List.get(i).Luck);
                var Gender = parseInt(settings.NPC_List.get(i).Gender);
                var Height = parseInt(settings.NPC_List.get(i).Height);
                var Weight = parseInt(settings.NPC_List.get(i).Weight);
                var Race = parseInt(settings.NPC_List.get(i).Race);
                var PlayerHeight       = settings.HeightCalculator(Height);
                var PlayerHeightFeet   = Math.floor(PlayerHeight);
                var PlayerHeightInches = PlayerHeight % 1;
                    PlayerHeightInches = PlayerHeightInches * 100;
                    PlayerHeightInches = Math.floor(PlayerHeightInches);
                    PlayerHeightInches = PlayerHeightInches / 12;
                    PlayerHeightInches = Math.round(100*PlayerHeightInches)/100;
                var PlayerHeightString = PlayerHeightFeet + ' Feet, ' + PlayerHeightInches + ' Inches';
                var Bonus_Level = parseInt(settings.NPC_List.get(i).Bonus_Level);
                var Current_HP = parseInt(settings.NPC_List.get(i).Current_HP);
                var Current_MP = parseInt(settings.NPC_List.get(i).Current_MP);
                var Current_IP = parseInt(settings.NPC_List.get(i).Current_IP);
                var Bonus_HP = parseInt(settings.NPC_List.get(i).Bonus_HP);
                var Bonus_MP = parseInt(settings.NPC_List.get(i).Bonus_MP);
                var Bonus_IP = parseInt(settings.NPC_List.get(i).Bonus_IP);
                var Fitness = parseInt(settings.NPC_List.get(i).Fitness);
                var Total_Levels = parseInt(Level) + parseInt(Bonus_Level);
                var Bonus_BalisticResist = parseInt(settings.NPC_List.get(i).Bonus_Ballistic_Resist);
                var Bonus_FireResist = parseInt(settings.NPC_List.get(i).Bonus_Fire_Resist);
                var Bonus_CryoResist = parseInt(settings.NPC_List.get(i).Bonus_Cryo_Resist);
                var Bonus_PosionResist = parseInt(settings.NPC_List.get(i).Bonus_Posion_Resist);
                var Bonus_ToxicResist = parseInt(settings.NPC_List.get(i).Bonus_Toxic_Resist);
                var Bonus_EnergyResist = parseInt(settings.NPC_List.get(i).Bonus_Energy_Resist);
                var Bonus_ElecResist = parseInt(settings.NPC_List.get(i).Bonus_Electric_Resist);
                var Bonus_SpecialResist = parseInt(settings.NPC_List.get(i).Bonus_Special_Resist);
                var Bonus_BalisticThreshold = parseInt(settings.NPC_List.get(i).Bonus_Ballistic_Threshold);
                var Bonus_FireThreshold = parseInt(settings.NPC_List.get(i).Bonus_Fire_Threshold);
                var Bonus_CryoThreshold = parseInt(settings.NPC_List.get(i).Bonus_Cryo_Threshold);
                var Bonus_PosionThreshold = parseInt(settings.NPC_List.get(i).Bonus_Posion_Threshold);
                var Bonus_ToxicThreshold = parseInt(settings.NPC_List.get(i).Bonus_Toxic_Threshold);
                var Bonus_EnergyThreshold = parseInt(settings.NPC_List.get(i).Bonus_Energy_Threshold);
                var Bonus_ElecThreshold = parseInt(settings.NPC_List.get(i).Bonus_Electric_Threshold);
                var Bonus_SpecialThreshold = parseInt(settings.NPC_List.get(i).Bonus_Special_Threshold);
                var ToughnessCount = 0;
                var FireproofCount = 0;
                var ChilledCount = 0;
                var AntitoxinCount = 0;
                var RadResistCount = 0;
                var RefractorCount = 0;
                var RefractorCount = 0;

                var MaxH = settings.MaxHPCalculator(Total_Levels, Endurance, Power, Bonus_HP, 0/*LifegiverCount2*/);
                var MaxM = settings.MaxMPCalculator(Total_Levels, Agility, Power, Bonus_MP, 0/*bonus skill count*/);
                var MaxI = settings.MaxIPCalculator(Total_Levels, Intelligence, Power, Bonus_IP, 0/*bonus skill count*/);
                var HP_String = Current_HP.toLocaleString()+"/"+MaxH.toLocaleString()+"["+((Current_HP/MaxH)*100)+"%]";
                var MP_String = Current_MP.toLocaleString()+"/"+MaxM.toLocaleString()+"["+((Current_MP/MaxM)*100)+"%]";
                var IP_String = Current_IP.toLocaleString()+"/"+MaxI.toLocaleString()+"["+((Current_IP/MaxI)*100)+"%]";

                var ResistBALISTIC = Bonus_BalisticResist + settings.ResistBALISTICCalculator(Total_Levels, Endurance, ToughnessCount, 1);
                var ResistFIRE     = Bonus_FireResist + settings.ResistFIRECalculator(Total_Levels, Endurance, FireproofCount, 1);
                var ResistCRYO     = Bonus_CryoResist + settings.ResistCRYOCalculator(Total_Levels, Endurance, ChilledCount, 1);
                var ResistPOSION   = Bonus_PosionResist + settings.ResistPOSIONCalculator(Total_Levels, Endurance, AntitoxinCount, 1);
                var ResistTOXIC    = Bonus_ToxicResist + settings.ResistTOXICCalculator(Total_Levels, Endurance, RadResistCount, 1);
                var ResistENERGY   = Bonus_EnergyResist + settings.ResistENERGYCalculator(Total_Levels, Endurance, RefractorCount, 1);
                var ResistELECTRICITY   = Bonus_ElecResist + settings.ResistENERGYCalculator(Total_Levels, Endurance, RefractorCount, 1);
                var ResistSPECIAL   = Bonus_SpecialResist;

                var ResistBALISTICMult = Bonus_BalisticResist + settings.ResistBALISTICCalculator(Total_Levels, Endurance, ToughnessCount, Power);
                var ResistFIREMult     = Bonus_FireResist + settings.ResistFIRECalculator(Total_Levels, Endurance, FireproofCount, Power);
                var ResistCRYOMult     = Bonus_CryoResist + settings.ResistCRYOCalculator(Total_Levels, Endurance, ChilledCount, Power);
                var ResistPOSIONMult   = Bonus_PosionResist + settings.ResistPOSIONCalculator(Total_Levels, Endurance, AntitoxinCount, Power);
                var ResistTOXICMult    = Bonus_ToxicResist + settings.ResistTOXICCalculator(Total_Levels, Endurance, RadResistCount, Power);
                var ResistENERGYMult   = Bonus_EnergyResist + settings.ResistENERGYCalculator(Total_Levels, Endurance, RefractorCount, Power);
                var ResistELECTRICITYMult   = Bonus_ElecResist + settings.ResistENERGYCalculator(Total_Levels, Endurance, RefractorCount, Power);
                var ResistSPECIALMult   = Bonus_SpecialResist * Power;

                const RiderEmbed = new discord.RichEmbed()
                      RiderEmbed.setThumbnail(settings.NPC_List.get(i).Avatar_URL)
                      RiderEmbed.setColor(randomHex.generate())
                      //RiderEmbed.setAuthor(slapdesc)
                      RiderEmbed.addField("Name", slapdesc, true)
                      RiderEmbed.addField("Series", Series_Name, true)
                      RiderEmbed.addField("Gender", settings.GenderName(Gender), true)
                      RiderEmbed.addField("Height", PlayerHeightString+" ["+Height+" cm]", true)
                      RiderEmbed.addField("Weight", Weight.toLocaleString()+" lbs ["+settings.FitnessName(Fitness)+"]", true)
                      RiderEmbed.addField("Race", settings.RaceName(Race), true)
                      RiderEmbed.addField("Level", Total_Levels.toLocaleString(), true)
                      RiderEmbed.addField("Power", Power.toLocaleString(), true)
                msg.channel.send({embed: RiderEmbed});
            };//if
        };//for
    } else {
            if (settings.NPC_List.get(NPCID) != undefined){
                var SeriesID = settings.NPC_List.get(NPCID).Series_ID;
                var slapdesc  = '['+ settings.NPC_List.get(NPCID).Self_ID +']';
                    slapdesc  += settings.NPC_List.get(NPCID).Name
                var Series_Name = ' ['+settings.SeriesName(SeriesID)+']';
                var BIO = settings.NPC_List.get(NPCID).Bio;
                var Power = settings.NPC_List.get(NPCID).Power;
                var Level = Power/10;
                var Strength = parseInt(settings.NPC_List.get(NPCID).Strength);
                var Perception = parseInt(settings.NPC_List.get(NPCID).Perception);
                var Endurance = parseInt(settings.NPC_List.get(NPCID).Endurance);
                var Charisma = parseInt(settings.NPC_List.get(NPCID).Charisma);
                var Intelligence = parseInt(settings.NPC_List.get(NPCID).Intelligence);
                var Agility = parseInt(settings.NPC_List.get(NPCID).Agility);
                var Luck = parseInt(settings.NPC_List.get(NPCID).Luck);
                var Gender = parseInt(settings.NPC_List.get(NPCID).Gender);
                var Height = parseInt(settings.NPC_List.get(NPCID).Height);
                var Weight = parseInt(settings.NPC_List.get(NPCID).Weight);
                var Race = parseInt(settings.NPC_List.get(NPCID).Race);
                var Fitness = parseInt(settings.NPC_List.get(NPCID).Fitness);
                var PlayerHeight       = settings.HeightCalculator(Height);
                var PlayerHeightFeet   = Math.floor(PlayerHeight);
                var PlayerHeightInches = PlayerHeight % 1;
                    PlayerHeightInches = PlayerHeightInches * 100;
                    PlayerHeightInches = Math.floor(PlayerHeightInches);
                    PlayerHeightInches = PlayerHeightInches / 12;
                    PlayerHeightInches = Math.round(100*PlayerHeightInches)/100;
                var PlayerHeightString = PlayerHeightFeet + ' Feet, ' + PlayerHeightInches + ' Inches';
                var Bonus_Level = parseInt(settings.NPC_List.get(NPCID).Bonus_Level);
                var Current_HP = parseInt(settings.NPC_List.get(NPCID).Current_HP);
                var Current_MP = parseInt(settings.NPC_List.get(NPCID).Current_MP);
                var Current_IP = parseInt(settings.NPC_List.get(NPCID).Current_IP);
                var Bonus_HP = parseInt(settings.NPC_List.get(NPCID).Bonus_HP);
                var Bonus_MP = parseInt(settings.NPC_List.get(NPCID).Bonus_MP);
                var Bonus_IP = parseInt(settings.NPC_List.get(NPCID).Bonus_IP);
                var Total_Levels = parseInt(Level) + parseInt(Bonus_Level);
                var Bonus_BalisticResist = parseInt(settings.NPC_List.get(NPCID).Bonus_Ballistic_Resist);
                var Bonus_FireResist = parseInt(settings.NPC_List.get(NPCID).Bonus_Fire_Resist);
                var Bonus_CryoResist = parseInt(settings.NPC_List.get(NPCID).Bonus_Cryo_Resist);
                var Bonus_PosionResist = parseInt(settings.NPC_List.get(NPCID).Bonus_Posion_Resist);
                var Bonus_ToxicResist = parseInt(settings.NPC_List.get(NPCID).Bonus_Toxic_Resist);
                var Bonus_EnergyResist = parseInt(settings.NPC_List.get(NPCID).Bonus_Energy_Resist);
                var Bonus_ElecResist = parseInt(settings.NPC_List.get(NPCID).Bonus_Electric_Resist);
                var Bonus_SpecialResist = parseInt(settings.NPC_List.get(NPCID).Bonus_Special_Resist);
                var Bonus_BalisticThreshold = parseInt(settings.NPC_List.get(NPCID).Bonus_Ballistic_Threshold);
                var Bonus_FireThreshold = parseInt(settings.NPC_List.get(NPCID).Bonus_Fire_Threshold);
                var Bonus_CryoThreshold = parseInt(settings.NPC_List.get(NPCID).Bonus_Cryo_Threshold);
                var Bonus_PosionThreshold = parseInt(settings.NPC_List.get(NPCID).Bonus_Posion_Threshold);
                var Bonus_ToxicThreshold = parseInt(settings.NPC_List.get(NPCID).Bonus_Toxic_Threshold);
                var Bonus_EnergyThreshold = parseInt(settings.NPC_List.get(NPCID).Bonus_Energy_Threshold);
                var Bonus_ElecThreshold = parseInt(settings.NPC_List.get(NPCID).Bonus_Electric_Threshold);
                var Bonus_SpecialThreshold = parseInt(settings.NPC_List.get(NPCID).Bonus_Special_Threshold);
                var ToughnessCount = 0;
                var FireproofCount = 0;
                var ChilledCount = 0;
                var AntitoxinCount = 0;
                var RadResistCount = 0;
                var RefractorCount = 0;
                var RefractorCount = 0;

                var MaxH = settings.MaxHPCalculator(Total_Levels, Endurance, Power, Bonus_HP, 0/*LifegiverCount2*/);
                var MaxM = settings.MaxMPCalculator(Total_Levels, Agility, Power, Bonus_MP, 0/*bonus skill count*/);
                var MaxI = settings.MaxIPCalculator(Total_Levels, Intelligence, Power, Bonus_IP, 0/*bonus skill count*/);
                var HP_String = Current_HP.toLocaleString()+"/"+MaxH.toLocaleString()+"["+((Current_HP/MaxH)*100)+"%]";
                var MP_String = Current_MP.toLocaleString()+"/"+MaxM.toLocaleString()+"["+((Current_MP/MaxM)*100)+"%]";
                var IP_String = Current_IP.toLocaleString()+"/"+MaxI.toLocaleString()+"["+((Current_IP/MaxI)*100)+"%]";

                var ResistBALISTIC = Bonus_BalisticResist + settings.ResistBALISTICCalculator(Total_Levels, Endurance, ToughnessCount, 1);
                var ResistFIRE     = Bonus_FireResist + settings.ResistFIRECalculator(Total_Levels, Endurance, FireproofCount, 1);
                var ResistCRYO     = Bonus_CryoResist + settings.ResistCRYOCalculator(Total_Levels, Endurance, ChilledCount, 1);
                var ResistPOSION   = Bonus_PosionResist + settings.ResistPOSIONCalculator(Total_Levels, Endurance, AntitoxinCount, 1);
                var ResistTOXIC    = Bonus_ToxicResist + settings.ResistTOXICCalculator(Total_Levels, Endurance, RadResistCount, 1);
                var ResistENERGY   = Bonus_EnergyResist + settings.ResistENERGYCalculator(Total_Levels, Endurance, RefractorCount, 1);
                var ResistELECTRICITY   = Bonus_ElecResist + settings.ResistENERGYCalculator(Total_Levels, Endurance, RefractorCount, 1);
                var ResistSPECIAL   = Bonus_SpecialResist;

                var ResistBALISTICMult = Bonus_BalisticResist + settings.ResistBALISTICCalculator(Total_Levels, Endurance, ToughnessCount, Power);
                var ResistFIREMult     = Bonus_FireResist + settings.ResistFIRECalculator(Total_Levels, Endurance, FireproofCount, Power);
                var ResistCRYOMult     = Bonus_CryoResist + settings.ResistCRYOCalculator(Total_Levels, Endurance, ChilledCount, Power);
                var ResistPOSIONMult   = Bonus_PosionResist + settings.ResistPOSIONCalculator(Total_Levels, Endurance, AntitoxinCount, Power);
                var ResistTOXICMult    = Bonus_ToxicResist + settings.ResistTOXICCalculator(Total_Levels, Endurance, RadResistCount, Power);
                var ResistENERGYMult   = Bonus_EnergyResist + settings.ResistENERGYCalculator(Total_Levels, Endurance, RefractorCount, Power);
                var ResistELECTRICITYMult   = Bonus_ElecResist + settings.ResistENERGYCalculator(Total_Levels, Endurance, RefractorCount, Power);
                var ResistSPECIALMult   = Bonus_SpecialResist * Power;

                const RiderEmbed = new discord.RichEmbed()
                      RiderEmbed.setThumbnail(settings.NPC_List.get(NPCID).Avatar_URL)
                      RiderEmbed.setColor(randomHex.generate())
                      //RiderEmbed.setAuthor(slapdesc)
                      RiderEmbed.addField("Name", slapdesc, true)
                      RiderEmbed.addField("Series", Series_Name, true)
                      RiderEmbed.addField("Gender", settings.GenderName(Gender), true)
                      RiderEmbed.addField("Height", PlayerHeightString+" ["+Height+" cm]", true)
                      RiderEmbed.addField("Weight", Weight.toLocaleString()+" lbs ["+settings.FitnessName(Fitness)+"]", true)
                      RiderEmbed.addField("Race", settings.RaceName(Race), true)
                      RiderEmbed.addField("Level", Total_Levels.toLocaleString(), true)
                      RiderEmbed.addField("Power", Power.toLocaleString(), true)
                      RiderEmbed.addField("Strength", Strength.toLocaleString()+"["+(Strength*Power).toLocaleString()+"]", true)
                      RiderEmbed.addField("Perception", Perception.toLocaleString()+"["+(Perception*Power).toLocaleString()+"]", true)
                      RiderEmbed.addField("Endurance", Endurance.toLocaleString()+"["+(Endurance*Power).toLocaleString()+"]", true)
                      RiderEmbed.addField("Charisma", Charisma.toLocaleString()+"["+(Charisma*Power).toLocaleString()+"]", true)
                      RiderEmbed.addField("Intelligence", Intelligence.toLocaleString()+"["+(Intelligence*Power).toLocaleString()+"]", true)
                      RiderEmbed.addField("Agility", Agility.toLocaleString()+"["+(Agility*Power).toLocaleString()+"]", true)
                      RiderEmbed.addField("Luck", Luck.toLocaleString()+"["+(Luck*Power).toLocaleString()+"]", true)
                msg.channel.send({embed: RiderEmbed});
                const RiderEmbed2 = new discord.RichEmbed()
                      RiderEmbed2.addField("HP", HP_String, true)
                      RiderEmbed2.addField("AP", MP_String, true)
                      RiderEmbed2.addField("IP", IP_String, true)
                      RiderEmbed2.addField("Balistic Resist", ResistBALISTIC.toLocaleString()+"["+ResistBALISTICMult.toLocaleString()+"]", true)
                      RiderEmbed2.addField("Fire Resist", ResistFIRE.toLocaleString()+"["+ResistFIREMult.toLocaleString()+"]", true)
                      RiderEmbed2.addField("Cryo Resist", ResistCRYO.toLocaleString()+"["+ResistCRYOMult.toLocaleString()+"]", true)
                      RiderEmbed2.addField("Posion Resist", ResistPOSION.toLocaleString()+"["+ResistPOSIONMult.toLocaleString()+"]", true)
                      RiderEmbed2.addField("Toxic Resist", ResistTOXIC.toLocaleString()+"["+ResistTOXICMult.toLocaleString()+"]", true)
                      RiderEmbed2.addField("Energy Resist", ResistENERGY.toLocaleString()+"["+ResistENERGYMult.toLocaleString()+"]", true)
                      RiderEmbed2.addField("Electricity Resist", ResistELECTRICITY.toLocaleString()+"["+ResistELECTRICITYMult.toLocaleString()+"]", true)
                      RiderEmbed2.addField("Special Resist", ResistSPECIAL.toLocaleString()+"["+ResistSPECIALMult.toLocaleString()+"]", true)
                      RiderEmbed2.addBlankField (true)
                      RiderEmbed2.addField("Balistic Threshold", Bonus_BalisticThreshold.toLocaleString(), true)
                      RiderEmbed2.addField("Fire Threshold", Bonus_FireThreshold.toLocaleString(), true)
                      RiderEmbed2.addField("Cryo Threshold", Bonus_CryoThreshold.toLocaleString(), true)
                      RiderEmbed2.addField("Posion Threshold", Bonus_PosionThreshold.toLocaleString(), true)
                      RiderEmbed2.addField("Toxic Threshold", Bonus_ToxicThreshold.toLocaleString(), true)
                      RiderEmbed2.addField("Energy Threshold", Bonus_EnergyThreshold.toLocaleString(), true)
                      RiderEmbed2.addField("Electricity Threshold", Bonus_ElecThreshold.toLocaleString(), true)
                      RiderEmbed2.addField("Special Threshold", Bonus_SpecialThreshold.toLocaleString(), true)
                      RiderEmbed2.addBlankField (true)
                      RiderEmbed2.setDescription(BIO)
                msg.channel.send({embed: RiderEmbed2});
            };//if
    };//if (isNaN(NPCID) || (NPCID == null) || (NPCID == undefined))
};//run

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: [
            "npcs", "npc",
            "list-npcs",
            "list-npc", "list-npc"
           ],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "listnpcs",
  description: "",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};
