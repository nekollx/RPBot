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
    var uidavatar = msg.author.avatarURL; var mentionedavatar = uidavatar;
    var arrayname = msg.content.split(' ');
    var NPCID    = parseInt(arrayname[1]);

    var mentionedid     = uid;
    var mentionedname   = uidname;

    if (msg.mentions.users.first()){
        mentionedid = msg.mentions.users.first().id;
        mentionedname = msg.mentions.users.first().username;
        mentionedavatar = msg.mentions.users.first().avatarURL;
    };//if
    if (uidavatar != null){
        settings.avypic = uidavatar;
    }else {
        settings.avypic = settings.blankpic;
    };//if (uidavatar != null)

    if (mentionedavatar == null){
        mentionedavatar = settings.blankpic;
    };//if (mentionedavatar == null)

    var arrayname = msg.content.split(' ');
    var slapdesc    = mentionedname + ' plays the following roles:\n';


    if (!isNaN(NPCID)){
        var i = parseInt(NPCID);
        for (var w = 0; w < (settings.User_Forms.size*20); w++) {
            if (settings.User_Forms.get(w) != undefined){
                if ((settings.User_Forms.get(w).User_ID == mentionedid) &&
                    (settings.User_Forms.get(w).Series_ID == NPCID)){i = settings.User_Forms.get(w).Table_ID}
            };//if
            };//for
            if (settings.User_Forms.get(i) != undefined){
                if (settings.User_Forms.get(i).User_ID == mentionedid){
                    var ClassID = 0;
                    if (settings.User_Forms.get(i).Class_ID != undefined){
                        ClassID = settings.User_Forms.get(i).Class_ID;
                        var SPECIAL_CAP = 35;
                        var Total_Specials = 0;
                        var CharName = settings.User_Forms.get(i).Character_Name;
                        var Power = settings.User_Forms.get(i).Power;
                        var Strength = settings.User_Forms.get(i).Strength;
                        var Perception = settings.User_Forms.get(i).Perception;
                        var Endurance = settings.User_Forms.get(i).Endurance;
                        var Charisma = settings.User_Forms.get(i).Charisma;
                        var Intelligence = settings.User_Forms.get(i).Intelligence;
                        var Agility = settings.User_Forms.get(i).Agility;
                        var Luck = settings.User_Forms.get(i).Luck;
                        var Base_Strength = settings.User_Forms.get(i).Strength;
                        var Base_Perception = settings.User_Forms.get(i).Perception;
                        var Base_Endurance = settings.User_Forms.get(i).Endurance;
                        var Base_Charisma = settings.User_Forms.get(i).Charisma;
                        var Base_Intelligence = settings.User_Forms.get(i).Intelligence;
                        var Base_Agility = settings.User_Forms.get(i).Agility;
                        var Base_Luck = settings.User_Forms.get(i).Luck;
                            Total_Specials += Base_Strength; 
                            Total_Specials += Base_Perception; 
                            Total_Specials += Base_Endurance; 
                            Total_Specials += Base_Charisma; 
                            Total_Specials += Base_Intelligence; 
                            Total_Specials += Base_Agility; 
                            Total_Specials += Base_Luck; 
                        var SpecialPoints = SPECIAL_CAP - Total_Specials;
                        var ToughnessCount = 0;
                        var FireproofCount = 0;
                        var ChilledCount = 0;
                        var AntitoxinCount = 0;
                        var RadResistCount = 0;
                        var RefractorCount = 0;
                        var RefractorCount = 0;

                        var ClassIDsub1 = settings.User_Forms.get(i).Class_ID_Sub1;
                        if (settings.Weapons_Armor_List.get(ClassIDsub1) != undefined){
                            Power += parseInt(settings.Weapons_Armor_List.get(ClassIDsub1).DMG_Floor)*10;
                            Strength += parseInt(settings.Weapons_Armor_List.get(ClassIDsub1).Strength);
                            Perception += parseInt(settings.Weapons_Armor_List.get(ClassIDsub1).Perception);
                            Endurance += parseInt(settings.Weapons_Armor_List.get(ClassIDsub1).Endurance);
                            Charisma += parseInt(settings.Weapons_Armor_List.get(ClassIDsub1).Charisma);
                            Intelligence += parseInt(settings.Weapons_Armor_List.get(ClassIDsub1).Intelligence);
                            Agility += parseInt(settings.Weapons_Armor_List.get(ClassIDsub1).Agility);
                            Luck += parseInt(settings.Weapons_Armor_List.get(ClassIDsub1).Luck);
                            ClassIDsub1 = settings.Weapons_Armor_List.get(ClassIDsub1).Main_SkillID;
                        };//if (settings.Weapons_Armor_List.get(ClassIDsub1) != undefined)
                        var ClassIDsub2 = settings.User_Forms.get(i).Class_ID_Sub2;
                        if (settings.Weapons_Armor_List.get(ClassIDsub2) != undefined){
                            Power += parseInt(settings.Weapons_Armor_List.get(ClassIDsub2).DMG_High)*10;
                            Strength += parseInt(settings.Weapons_Armor_List.get(ClassIDsub2).Strength);
                            Perception += parseInt(settings.Weapons_Armor_List.get(ClassIDsub2).Perception);
                            Endurance += parseInt(settings.Weapons_Armor_List.get(ClassIDsub2).Endurance);
                            Charisma += parseInt(settings.Weapons_Armor_List.get(ClassIDsub2).Charisma);
                            Intelligence += parseInt(settings.Weapons_Armor_List.get(ClassIDsub2).Intelligence);
                            Agility += parseInt(settings.Weapons_Armor_List.get(ClassIDsub2).Agility);
                            Luck += parseInt(settings.Weapons_Armor_List.get(ClassIDsub2).Luck);
                            ClassIDsub2 = settings.Weapons_Armor_List.get(ClassIDsub2).Main_SkillID;
                        };//if (settings.Weapons_Armor_List.get(ClassIDsub2) != undefined)
                        var ClassIDsub3 = settings.User_Forms.get(i).Class_ID_Sub3;
                        if (settings.Weapons_Armor_List.get(ClassIDsub3) != undefined){
                            Power += parseInt(settings.Weapons_Armor_List.get(ClassIDsub3).DMG_High)*10;
                            Strength += parseInt(settings.Weapons_Armor_List.get(ClassIDsub3).Strength);
                            Perception += parseInt(settings.Weapons_Armor_List.get(ClassIDsub3).Perception);
                            Endurance += parseInt(settings.Weapons_Armor_List.get(ClassIDsub3).Endurance);
                            Charisma += parseInt(settings.Weapons_Armor_List.get(ClassIDsub3).Charisma);
                            Intelligence += parseInt(settings.Weapons_Armor_List.get(ClassIDsub3).Intelligence);
                            Agility += parseInt(settings.Weapons_Armor_List.get(ClassIDsub3).Agility);
                            Luck += parseInt(settings.Weapons_Armor_List.get(ClassIDsub3).Luck);
                            ClassIDsub3 = settings.Weapons_Armor_List.get(ClassIDsub3).Main_SkillID;
                        };//if (settings.Weapons_Armor_List.get(ClassIDsub3) != undefined)
                        var ClassIDsub4 = settings.User_Forms.get(i).Class_ID_Sub4;
                        if (settings.Weapons_Armor_List.get(ClassIDsub4) != undefined){
                            Power += parseInt(settings.Weapons_Armor_List.get(ClassIDsub4).DMG_High)*10;
                            Strength += parseInt(settings.Weapons_Armor_List.get(ClassIDsub4).Strength);
                            Perception += parseInt(settings.Weapons_Armor_List.get(ClassIDsub4).Perception);
                            Endurance += parseInt(settings.Weapons_Armor_List.get(ClassIDsub4).Endurance);
                            Charisma += parseInt(settings.Weapons_Armor_List.get(ClassIDsub4).Charisma);
                            Intelligence += parseInt(settings.Weapons_Armor_List.get(ClassIDsub4).Intelligence);
                            Agility += parseInt(settings.Weapons_Armor_List.get(ClassIDsub4).Agility);
                            Luck += parseInt(settings.Weapons_Armor_List.get(ClassIDsub4).Luck);
                            ClassIDsub4 = settings.Weapons_Armor_List.get(ClassIDsub4).Main_SkillID;
                        };//if (settings.Weapons_Armor_List.get(ClassIDsub4) != undefined)
                        var Level = Power/10;
                        var Bonus_Level = parseInt(settings.User_Forms.get(i).Bonus_Level);
                        var Current_HP = parseInt(settings.User_Forms.get(i).Current_HP);
                        var Current_MP = parseInt(settings.User_Forms.get(i).Current_MP);
                        var Current_IP = parseInt(settings.User_Forms.get(i).Current_IP);
                        var Bonus_HP = parseInt(settings.User_Forms.get(i).Bonus_HP);
                        var Bonus_MP = parseInt(settings.User_Forms.get(i).Bonus_MP);
                        var Bonus_IP = parseInt(settings.User_Forms.get(i).Bonus_IP);
                        var Total_Levels = parseInt(Level) + parseInt(Bonus_Level);
                        var SpecialPoints = SPECIAL_CAP - Total_Specials;
                        var PerkPoints = Bonus_Level + (parseInt(settings.User_Forms.get(i).Power)/10);

                        var Gender = parseInt(settings.User_Forms.get(i).Gender);
                        var Height = parseInt(settings.User_Forms.get(i).Height);
                        var Weight = parseInt(settings.User_Forms.get(i).Weight);
                        var Race = parseInt(settings.User_Forms.get(i).Race);
                        var Fitness = parseInt(settings.User_Forms.get(i).Fitness);
                        var PlayerHeight       = settings.HeightCalculator(Height);
                        var PlayerHeightFeet   = Math.floor(PlayerHeight);
                        var PlayerHeightInches = PlayerHeight % 1;
                            PlayerHeightInches = PlayerHeightInches * 100;
                            PlayerHeightInches = Math.floor(PlayerHeightInches);
                            PlayerHeightInches = PlayerHeightInches / 12;
                            PlayerHeightInches = Math.round(100*PlayerHeightInches)/100;
                        var PlayerHeightString = PlayerHeightFeet + ' Feet, ' + PlayerHeightInches + ' Inches';

                        var Bonus_BalisticResist = parseInt(settings.User_Forms.get(i).Bonus_Ballistic_Resist);
                        var Bonus_FireResist = parseInt(settings.User_Forms.get(i).Bonus_Fire_Resist);
                        var Bonus_CryoResist = parseInt(settings.User_Forms.get(i).Bonus_Cryo_Resist);
                        var Bonus_PosionResist = parseInt(settings.User_Forms.get(i).Bonus_Posion_Resist);
                        var Bonus_ToxicResist = parseInt(settings.User_Forms.get(i).Bonus_Toxic_Resist);
                        var Bonus_EnergyResist = parseInt(settings.User_Forms.get(i).Bonus_Energy_Resist);
                        var Bonus_ElecResist = parseInt(settings.User_Forms.get(i).Bonus_Electric_Resist);
                        var Bonus_SpecialResist = parseInt(settings.User_Forms.get(i).Bonus_Special_Resist);

                        var Bonus_BalisticThreshold = parseInt(settings.User_Forms.get(i).Bonus_Ballistic_Threshold);
                        var Bonus_FireThreshold = parseInt(settings.User_Forms.get(i).Bonus_Fire_Threshold);
                        var Bonus_CryoThreshold = parseInt(settings.User_Forms.get(i).Bonus_Cryo_Threshold);
                        var Bonus_PosionThreshold = parseInt(settings.User_Forms.get(i).Bonus_Posion_Threshold);
                        var Bonus_ToxicThreshold = parseInt(settings.User_Forms.get(i).Bonus_Toxic_Threshold);
                        var Bonus_EnergyThreshold = parseInt(settings.User_Forms.get(i).Bonus_Energy_Threshold);
                        var Bonus_ElecThreshold = parseInt(settings.User_Forms.get(i).Bonus_Electric_Threshold);
                        var Bonus_SpecialThreshold = parseInt(settings.User_Forms.get(i).Bonus_Special_Threshold);

                        var Avatar_URL = settings.blankpic;
                        if (settings.User_Forms.get(i).Avatar_URL != undefined){
                            Avatar_URL = settings.User_Forms.get(i).Avatar_URL;
                        };//if

                        var Avatar_URL2 = settings.blankpic;
                        if (settings.User_Forms.get(i).Avatar_URL2 != undefined){
                            Avatar_URL2 = settings.User_Forms.get(i).Avatar_URL2;
                        };//if

                        if (ClassIDsub1 == ""){ClassIDsub1 = 0;}
                        if (ClassIDsub2 == ""){ClassIDsub2 = 0;}
                        if (ClassIDsub3 == ""){ClassIDsub3 = 0;}
                        if (ClassIDsub4 == ""){ClassIDsub4 = 0;}

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

                        var StrengthString = "["+Base_Strength.toLocaleString()+"]["+(Strength - Base_Strength).toLocaleString()+"]["+(Strength*Power).toLocaleString()+"]"
                        var PerceptionString = "["+Base_Perception.toLocaleString()+"]["+(Perception - Base_Perception).toLocaleString()+"]["+(Perception*Power).toLocaleString()+"]"
                        var EnduranceString = "["+Base_Endurance.toLocaleString()+"]["+(Endurance - Base_Endurance).toLocaleString()+"]["+(Endurance*Power).toLocaleString()+"]"
                        var CharismaString = "["+Base_Charisma.toLocaleString()+"]["+(Charisma - Base_Charisma).toLocaleString()+"]["+(Charisma*Power).toLocaleString()+"]"
                        var IntelligenceString = "["+Base_Intelligence.toLocaleString()+"]["+(Intelligence - Base_Intelligence).toLocaleString()+"]["+(Intelligence*Power).toLocaleString()+"]"
                        var AgilityString = "["+Base_Agility.toLocaleString()+"]["+(Agility - Base_Agility).toLocaleString()+"]["+(Agility*Power).toLocaleString()+"]"
                        var LuckString = "["+Base_Luck.toLocaleString()+"]["+(Luck - Base_Luck).toLocaleString()+"]["+(Luck*Power).toLocaleString()+"]"

                        var SeriesID = parseInt(settings.User_Forms.get(i).Series_ID);
                        const RiderEmbed = new discord.RichEmbed()
                            RiderEmbed.setColor(randomHex.generate())
                            RiderEmbed.setAuthor(settings.PlayerClassName(ClassID) + " ["+mentionedname+" - "+settings.SeriesName(SeriesID)+"]", mentionedavatar)
                            RiderEmbed.setThumbnail(Avatar_URL)
                        if (CharName != ""){
                            RiderEmbed.addField("Name", CharName, true)
                            RiderEmbed.addBlankField (true)
                        };//if (CharName != "")
                            RiderEmbed.addField("Level", Level.toLocaleString(), true)
                            RiderEmbed.addField("Power", Power.toLocaleString(), true)
                            RiderEmbed.addField("Perk Points", PerkPoints.toLocaleString(), true)
                        if (SpecialPoints > 0){RiderEmbed.addField("SPECIAL Point", SpecialPoints.toLocaleString(), true)}
                        else {RiderEmbed.addBlankField (true)}
                            RiderEmbed.addField("Gender", settings.GenderName(Gender), true)
                            RiderEmbed.addField("Height", PlayerHeightString+" ["+Height+" cm]", true)
                            RiderEmbed.addField("Weight", Weight.toLocaleString()+" lbs ["+settings.FitnessName(Fitness)+"]", true)
                            RiderEmbed.addField("Race", settings.RaceName(Race), true)
                        if (ClassIDsub1 > 0){RiderEmbed.addField(settings.SubFormName(SeriesID)+" 1", settings.PlayerClassName(ClassIDsub1, "yes"), true)}
                        else {RiderEmbed.addField(settings.SubFormName(SeriesID)+" 1", "{None}", true)}
                        if (ClassIDsub2 > 0){RiderEmbed.addField(settings.SubFormName(SeriesID)+" 2", settings.PlayerClassName(ClassIDsub2, "yes"), true)}
                        else {RiderEmbed.addField(settings.SubFormName(SeriesID)+" 2", "{None}", true)}
                        if (ClassIDsub3 > 0){RiderEmbed.addField(settings.SubFormName(SeriesID)+" 3", settings.PlayerClassName(ClassIDsub3, "yes"), true)}
                        else {RiderEmbed.addField(settings.SubFormName(SeriesID)+" 3", "{None}", true)}
                        if (ClassIDsub4 > 0){RiderEmbed.addField("Sub Form 4", settings.PlayerClassName(ClassIDsub4, "yes"), true)}
                        else {RiderEmbed.addField(settings.SubFormName(SeriesID)+" 4", "{None}", true)}
                            RiderEmbed.addField("Strength [Base][Items][Total]", StrengthString, true)
                            RiderEmbed.addField("Perception [Base][Items][Total]", PerceptionString, true)
                            RiderEmbed.addField("Endurance [Base][Items][Total]", EnduranceString, true)
                            RiderEmbed.addField("Charisma [Base][Items][Total]", CharismaString, true)
                            RiderEmbed.addField("Intelligence [Base][Items][Total]", IntelligenceString, true)
                            RiderEmbed.addField("Agility [Base][Items][Total]", AgilityString, true)
                            RiderEmbed.addField("Luck [Base][Items][Total]", LuckString, true)
                        slapdesc = settings.User_Forms.get(i).Bio;
                        RiderEmbed.setDescription(slapdesc)
                        msg.channel.send({embed: RiderEmbed});

                        const RiderEmbed2 = new discord.RichEmbed()
                            RiderEmbed2.setThumbnail(Avatar_URL2)
                            RiderEmbed2.setAuthor(settings.PlayerClassName(ClassID) + " ["+mentionedname+" - "+settings.SeriesName(SeriesID)+"]", mentionedavatar)
                            RiderEmbed2.addField("HP", HP_String, true)
                            RiderEmbed2.addField("AP", MP_String, true)
                            RiderEmbed2.addField("IP", IP_String, true)
                            RiderEmbed2.addBlankField (true)
                            RiderEmbed2.addField("Balistic Resist", ResistBALISTIC.toLocaleString()+"["+ResistBALISTICMult.toLocaleString()+"]", true)
                            RiderEmbed2.addField("Fire Resist", ResistFIRE.toLocaleString()+"["+ResistFIREMult.toLocaleString()+"]", true)
                            RiderEmbed2.addField("Cryo Resist", ResistCRYO.toLocaleString()+"["+ResistCRYOMult.toLocaleString()+"]", true)
                            RiderEmbed2.addField("Posion Resist", ResistPOSION.toLocaleString()+"["+ResistPOSIONMult.toLocaleString()+"]", true)
                            RiderEmbed2.addField("Toxic Resist", ResistTOXIC.toLocaleString()+"["+ResistTOXICMult.toLocaleString()+"]", true)
                            RiderEmbed2.addField("Energy Resist", ResistENERGY.toLocaleString()+"["+ResistENERGYMult.toLocaleString()+"]", true)
                            RiderEmbed2.addField("Electricity Resist", ResistELECTRICITY.toLocaleString()+"["+ResistELECTRICITYMult.toLocaleString()+"]", true)
                            RiderEmbed2.addField("Special Resist", ResistSPECIAL.toLocaleString()+"["+ResistSPECIALMult.toLocaleString()+"]", true)
                            RiderEmbed2.addField("Balistic Threshold", Bonus_BalisticThreshold.toLocaleString(), true)
                            RiderEmbed2.addField("Fire Threshold", Bonus_FireThreshold.toLocaleString(), true)
                            RiderEmbed2.addField("Cryo Threshold", Bonus_CryoThreshold.toLocaleString(), true)
                            RiderEmbed2.addField("Posion Threshold", Bonus_PosionThreshold.toLocaleString(), true)
                            RiderEmbed2.addField("Toxic Threshold", Bonus_ToxicThreshold.toLocaleString(), true)
                            RiderEmbed2.addField("Energy Threshold", Bonus_EnergyThreshold.toLocaleString(), true)
                            RiderEmbed2.addField("Electricity Threshold", Bonus_ElecThreshold.toLocaleString(), true)
                            RiderEmbed2.addField("Special Threshold", Bonus_SpecialThreshold.toLocaleString(), true)
                        msg.channel.send({embed: RiderEmbed2});
                    };//if (settings.User_Forms.get(i).Class_ID != undefined)

                    var strtotal = Strength;
                    var bonuscarry = 0;
                    var UserWeight = 0;
                    invdesc = '';

                    for (f = 0; f < settings.UserSkillList.size; f++){
                        if (settings.UserSkillList.get(f).PLAYER_ID == mentionedid){
                            if (settings.UserSkillList.get(f).PERK_ID == 110){//strength boost
                                strtotal += settings.UserSkillList.get(f).RANKS;
                            };//if (settings.UserSkillList.get(f).PERK_ID == 110)
                            if (settings.UserSkillList.get(f).PERK_ID == 610){//strong back
                                bonuscarry += settings.UserSkillList.get(f).RANKS;
                            };//if (settings.UserSkillList.get(f).PERK_ID == 110)
                        };//if (settings.UserSkillList.get(i).PLAYER_ID == uid)
                    };//for

                    for (var i = 0; i < settings.User_Inventory.size; i++) {
                        if (settings.User_Inventory.get(i).Player_ID == mentionedid){
                            var InventoryID = settings.User_Inventory.get(i).TABLE_ID;
                            var InventoryPlayerID = settings.User_Inventory.get(i).Player_ID;
                            var InventoryItemID = settings.User_Inventory.get(i).ID;
                            var InventoryRanks = settings.User_Inventory.get(i).RANKS;
                            var ItemName = settings.Weapons_Armor_List.get(InventoryItemID).Name;
                                ItemName = settings.ParseName(ItemName);
                            var ItemWeight = settings.Weapons_Armor_List.get(InventoryItemID).Weight;

                            if (settings.Weapons_Armor_List.get(InventoryItemID).Series_ID == NPCID){
                                UserWeight += (ItemWeight*InventoryRanks);
                                invdesc += '[ID: ' + InventoryItemID + '] **' + ItemName + '**';
                                if (InventoryRanks > 1){invdesc += " x"+InventoryRanks}
                                invdesc += '\n';
                            };//if (settings.Weapons_Armor_List.get(InventoryItemID).Series_ID == NPCID
                        };//if (settings.User_Inventory.get(i).Player_ID = mentionedid)
                    };//for

                    strtotal = strtotal*Power;
                    var carryCapacity = settings.CarryCalculator(strtotal, bonuscarry);
                    var EncumberPercent = (UserWeight/carryCapacity)*100; 
                        invdesc += '[' + UserWeight.toLocaleString() + '/' + carryCapacity.toLocaleString() + ' Carry Weight {'+EncumberPercent.toLocaleString()+'%}]';
                    const RiderEmbed = new discord.RichEmbed()
                        RiderEmbed.setColor(randomHex.generate())
                        RiderEmbed.setThumbnail(mentionedavatar)
                        RiderEmbed.setDescription(invdesc)
                    msg.channel.send({embed: RiderEmbed});

                } else {
                    msg.channel.send("I'm Sorry "+mentionedname+" I could not find any data on you.");
                };//if (settings.User_Forms.get(i).User_ID == mentionedid)
            };//if (settings.User_Forms.get(i) != undefined)

    var strtotal = settings.UserList.get(mentionedid).Strength;
    var bonuscarry = 0;
    var UserWeight = 0;
        for (f = 0; f < settings.UserSkillList.size; f++){
            if (settings.UserSkillList.get(f).PLAYER_ID == mentionedid){
                if (settings.UserSkillList.get(f).PERK_ID == 110){//strength boost
                    strtotal += settings.UserSkillList.get(f).RANKS;
                };//if (settings.UserSkillList.get(f).PERK_ID == 110)
                if (settings.UserSkillList.get(f).PERK_ID == 610){//strong back
                    bonuscarry += settings.UserSkillList.get(f).RANKS;
                };//if (settings.UserSkillList.get(f).PERK_ID == 110)
            };//if (settings.UserSkillList.get(i).PLAYER_ID == uid)
        };//for


    } else {
        var NoSpam = 0;
        for (var i = 0; i < (settings.User_Forms.size*20); i++) {
            if (settings.User_Forms.get(i) != undefined){
                if (settings.User_Forms.get(i).User_ID == mentionedid){
                console.log(mentionedname+": "+settings.User_Forms.get(i).User_ID);
                    var ClassID = 0;
                    if (settings.User_Forms.get(i).Class_ID != undefined){
                        ClassID = settings.User_Forms.get(i).Class_ID;
                        var SPECIAL_CAP = 35;
                        var Total_Specials = 0;
                        var CharName = settings.User_Forms.get(i).Character_Name;
                        var Power = settings.User_Forms.get(i).Power;
                        var Strength = settings.User_Forms.get(i).Strength;
                        var Perception = settings.User_Forms.get(i).Perception;
                        var Endurance = settings.User_Forms.get(i).Endurance;
                        var Charisma = settings.User_Forms.get(i).Charisma;
                        var Intelligence = settings.User_Forms.get(i).Intelligence;
                        var Agility = settings.User_Forms.get(i).Agility;
                        var Luck = settings.User_Forms.get(i).Luck;
                        var Base_Strength = settings.User_Forms.get(i).Strength;
                        var Base_Perception = settings.User_Forms.get(i).Perception;
                        var Base_Endurance = settings.User_Forms.get(i).Endurance;
                        var Base_Charisma = settings.User_Forms.get(i).Charisma;
                        var Base_Intelligence = settings.User_Forms.get(i).Intelligence;
                        var Base_Agility = settings.User_Forms.get(i).Agility;
                        var Base_Luck = settings.User_Forms.get(i).Luck;
                            Total_Specials += Base_Strength; 
                            Total_Specials += Base_Perception; 
                            Total_Specials += Base_Endurance; 
                            Total_Specials += Base_Charisma; 
                            Total_Specials += Base_Intelligence; 
                            Total_Specials += Base_Agility; 
                            Total_Specials += Base_Luck; 
                        var SpecialPoints = SPECIAL_CAP - Total_Specials;
                        var ToughnessCount = 0;
                        var FireproofCount = 0;
                        var ChilledCount = 0;
                        var AntitoxinCount = 0;
                        var RadResistCount = 0;
                        var RefractorCount = 0;
                        var RefractorCount = 0;

                        var ClassIDsub1 = settings.User_Forms.get(i).Class_ID_Sub1;
                        if (settings.Weapons_Armor_List.get(ClassIDsub1) != undefined){
                            Power += parseInt(settings.Weapons_Armor_List.get(ClassIDsub1).DMG_Floor)*10;
                            Strength += parseInt(settings.Weapons_Armor_List.get(ClassIDsub1).Strength);
                            Perception += parseInt(settings.Weapons_Armor_List.get(ClassIDsub1).Perception);
                            Endurance += parseInt(settings.Weapons_Armor_List.get(ClassIDsub1).Endurance);
                            Charisma += parseInt(settings.Weapons_Armor_List.get(ClassIDsub1).Charisma);
                            Intelligence += parseInt(settings.Weapons_Armor_List.get(ClassIDsub1).Intelligence);
                            Agility += parseInt(settings.Weapons_Armor_List.get(ClassIDsub1).Agility);
                            Luck += parseInt(settings.Weapons_Armor_List.get(ClassIDsub1).Luck);
                            ClassIDsub1 = settings.Weapons_Armor_List.get(ClassIDsub1).Main_SkillID;
                        };//if (settings.Weapons_Armor_List.get(ClassIDsub1) != undefined)
                        var ClassIDsub2 = settings.User_Forms.get(i).Class_ID_Sub2;
                        if (settings.Weapons_Armor_List.get(ClassIDsub2) != undefined){
                            Power += parseInt(settings.Weapons_Armor_List.get(ClassIDsub2).DMG_High)*10;
                            Strength += parseInt(settings.Weapons_Armor_List.get(ClassIDsub2).Strength);
                            Perception += parseInt(settings.Weapons_Armor_List.get(ClassIDsub2).Perception);
                            Endurance += parseInt(settings.Weapons_Armor_List.get(ClassIDsub2).Endurance);
                            Charisma += parseInt(settings.Weapons_Armor_List.get(ClassIDsub2).Charisma);
                            Intelligence += parseInt(settings.Weapons_Armor_List.get(ClassIDsub2).Intelligence);
                            Agility += parseInt(settings.Weapons_Armor_List.get(ClassIDsub2).Agility);
                            Luck += parseInt(settings.Weapons_Armor_List.get(ClassIDsub2).Luck);
                            ClassIDsub2 = settings.Weapons_Armor_List.get(ClassIDsub2).Main_SkillID;
                        };//if (settings.Weapons_Armor_List.get(ClassIDsub2) != undefined)
                        var ClassIDsub3 = settings.User_Forms.get(i).Class_ID_Sub3;
                        if (settings.Weapons_Armor_List.get(ClassIDsub3) != undefined){
                            Power += parseInt(settings.Weapons_Armor_List.get(ClassIDsub3).DMG_High)*10;
                            Strength += parseInt(settings.Weapons_Armor_List.get(ClassIDsub3).Strength);
                            Perception += parseInt(settings.Weapons_Armor_List.get(ClassIDsub3).Perception);
                            Endurance += parseInt(settings.Weapons_Armor_List.get(ClassIDsub3).Endurance);
                            Charisma += parseInt(settings.Weapons_Armor_List.get(ClassIDsub3).Charisma);
                            Intelligence += parseInt(settings.Weapons_Armor_List.get(ClassIDsub3).Intelligence);
                            Agility += parseInt(settings.Weapons_Armor_List.get(ClassIDsub3).Agility);
                            Luck += parseInt(settings.Weapons_Armor_List.get(ClassIDsub3).Luck);
                            ClassIDsub3 = settings.Weapons_Armor_List.get(ClassIDsub3).Main_SkillID;
                        };//if (settings.Weapons_Armor_List.get(ClassIDsub3) != undefined)
                        var ClassIDsub4 = settings.User_Forms.get(i).Class_ID_Sub4;
                        if (settings.Weapons_Armor_List.get(ClassIDsub4) != undefined){
                            Power += parseInt(settings.Weapons_Armor_List.get(ClassIDsub4).DMG_High)*10;
                            Strength += parseInt(settings.Weapons_Armor_List.get(ClassIDsub4).Strength);
                            Perception += parseInt(settings.Weapons_Armor_List.get(ClassIDsub4).Perception);
                            Endurance += parseInt(settings.Weapons_Armor_List.get(ClassIDsub4).Endurance);
                            Charisma += parseInt(settings.Weapons_Armor_List.get(ClassIDsub4).Charisma);
                            Intelligence += parseInt(settings.Weapons_Armor_List.get(ClassIDsub4).Intelligence);
                            Agility += parseInt(settings.Weapons_Armor_List.get(ClassIDsub4).Agility);
                            Luck += parseInt(settings.Weapons_Armor_List.get(ClassIDsub4).Luck);
                            ClassIDsub4 = settings.Weapons_Armor_List.get(ClassIDsub4).Main_SkillID;
                        };//if (settings.Weapons_Armor_List.get(ClassIDsub4) != undefined)
                        var Level = Power/10;
                        var Bonus_Level = parseInt(settings.User_Forms.get(i).Bonus_Level);
                        var Current_HP = parseInt(settings.User_Forms.get(i).Current_HP);
                        var Current_MP = parseInt(settings.User_Forms.get(i).Current_MP);
                        var Current_IP = parseInt(settings.User_Forms.get(i).Current_IP);
                        var Bonus_HP = parseInt(settings.User_Forms.get(i).Bonus_HP);
                        var Bonus_MP = parseInt(settings.User_Forms.get(i).Bonus_MP);
                        var Bonus_IP = parseInt(settings.User_Forms.get(i).Bonus_IP);
                        var Total_Levels = parseInt(Level) + parseInt(Bonus_Level);
                        var SpecialPoints = SPECIAL_CAP - Total_Specials;
                        var PerkPoints = Bonus_Level + (parseInt(settings.User_Forms.get(i).Power)/10);

                        var Gender = parseInt(settings.User_Forms.get(i).Gender);
                        var Height = parseInt(settings.User_Forms.get(i).Height);
                        var Weight = parseInt(settings.User_Forms.get(i).Weight);
                        var Race = parseInt(settings.User_Forms.get(i).Race);
                        var Fitness = parseInt(settings.User_Forms.get(i).Fitness);
                        var PlayerHeight       = settings.HeightCalculator(Height);
                        var PlayerHeightFeet   = Math.floor(PlayerHeight);
                        var PlayerHeightInches = PlayerHeight % 1;
                            PlayerHeightInches = PlayerHeightInches * 100;
                            PlayerHeightInches = Math.floor(PlayerHeightInches);
                            PlayerHeightInches = PlayerHeightInches / 12;
                            PlayerHeightInches = Math.round(100*PlayerHeightInches)/100;
                        var PlayerHeightString = PlayerHeightFeet + ' Feet, ' + PlayerHeightInches + ' Inches';

                        var Avatar_URL = settings.blankpic;
                        if (settings.User_Forms.get(i).Avatar_URL != undefined){
                            Avatar_URL = settings.User_Forms.get(i).Avatar_URL;
                        };//if

                        var SeriesID = parseInt(settings.User_Forms.get(i).Series_ID);
                        const RiderEmbed = new discord.RichEmbed()
                            RiderEmbed.setColor(randomHex.generate())
                            RiderEmbed.setAuthor(settings.PlayerClassName(ClassID) + " ["+mentionedname+" - "+settings.SeriesName(SeriesID)+"]", mentionedavatar)
                            RiderEmbed.setThumbnail(Avatar_URL)
                        if (CharName != ""){
                            RiderEmbed.addField("Name", CharName, true)
                            RiderEmbed.addBlankField (true)
                        };//if (CharName != "")
                            RiderEmbed.addField("Level", Level.toLocaleString(), true)
                            RiderEmbed.addField("Power", Power.toLocaleString(), true)
                            RiderEmbed.addField("Perk Points", PerkPoints.toLocaleString(), true)
                        if (SpecialPoints > 0){RiderEmbed.addField("SPECIAL Point", SpecialPoints.toLocaleString(), true)}
                        else {RiderEmbed.addBlankField (true)}
                            RiderEmbed.addField("Gender", settings.GenderName(Gender), true)
                            RiderEmbed.addField("Height", PlayerHeightString+" ["+Height+" cm]", true)
                            RiderEmbed.addField("Weight", Weight.toLocaleString()+" lbs ["+settings.FitnessName(Fitness)+"]", true)
                            RiderEmbed.addField("Race", settings.RaceName(Race), true)
                        if (parseInt(ClassIDsub1) > 0){RiderEmbed.addField(settings.SubFormName(SeriesID)+" 1", "*"+settings.PlayerClassName(ClassIDsub1, "yes")+"*", true)}
                        else {RiderEmbed.addField(settings.SubFormName(SeriesID)+" 1", "{None}", true)}
                        if (parseInt(ClassIDsub2) > 0){RiderEmbed.addField(settings.SubFormName(SeriesID)+" 2", "*"+settings.PlayerClassName(ClassIDsub2, "yes")+"*", true)}
                        else {RiderEmbed.addField(settings.SubFormName(SeriesID)+" 2", "{None}", true)}
                        if (parseInt(ClassIDsub3) > 0){RiderEmbed.addField(settings.SubFormName(SeriesID)+" 3", "*"+settings.PlayerClassName(ClassIDsub3, "yes")+"*", true)}
                        else {RiderEmbed.addField(settings.SubFormName(SeriesID)+" 3", "{None}", true)}
                        if (parseInt(ClassIDsub4) > 0){RiderEmbed.addField("Sub Form 4", "*"+settings.PlayerClassName(ClassIDsub4, "yes")+"*", true)}
                        else {RiderEmbed.addField(settings.SubFormName(SeriesID)+" 4", "{None}", true)}
                        slapdesc = settings.User_Forms.get(i).Bio;
                        RiderEmbed.setDescription(slapdesc)
                        msg.channel.send({embed: RiderEmbed});

                    };//if (settings.User_Forms.get(i).Class_ID != undefined)
                };//if (settings.User_Forms.get(i).User_ID == mentionedid)
                NoSpam ++;
            };//if (settings.User_Forms.get(i) != undefined)
        };//for (var i = 0; i < settings.User_Forms.size; i++)
        if (NoSpam == 0){msg.channel.send("I'm Sorry "+mentionedname+" I could not find any data on you.");}
    };//if (!isNan(NPCID))
};//run

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: [
            "list-form", "list-forms",
            "listforms", 
            "forms", "form"
           ],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "listform",
  description: "",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};
