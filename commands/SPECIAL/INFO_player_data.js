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
        mentionedid = message.mentions.users.first().id;
        mentionedname = message.mentions.users.first().username;
        mentionedavatar = message.mentions.users.first().avatarURL;
    };//if
    if (uidavatar == null){uidavatar = settings.blankpic;};
    if (mentionedavatar == null){mentionedavatar = settings.blankpic;};

    var Bonus_HP = 0; var Bonus_MP = 0; var Bonus_IP = 0; 
    var Bonus_Strength = 0; var Bonus_Perception = 0; var Bonus_Endurance = 0; 
    var Bonus_Charisma = 0; var Bonus_Intelligence = 0; var Bonus_Agility = 0; var Bonus_Luck = 0; 
    var Bonus_BalisticResist = 0; var Bonus_FireResist = 0; var Bonus_CryoResist = 0; 
    var Bonus_ToxicResist = 0; var Bonus_ElecResist = 0; var Bonus_EnergyResist = 0; 
    var Bonus_PosionResist = 0; var Bonus_SpecialResist = 0; 
    var Bonus_BalisticDT = 0; var Bonus_FireDT = 0; var Bonus_CryoDT = 0; var Bonus_ToxicDT = 0; 
    var Bonus_ElecDT = 0; var Bonus_EnergyDT = 0; var Bonus_PosionDT = 0; var Bonus_SpecialDT = 0; 
    var Bonus_SPECIAL_Points = 0; var Bonus_CLASS_ID = 0; var Bonus_Power_Mult = 0; var Bonus_level = 0;
    var ToughnessCount  = 0;//+10 resist per level [id: 3]
    var FireproofCount  = 0;//+10 fire resist per level [id: 230]
    var ChilledCount    = 0;//+10 fronst resist per level [id: 531]
    var RadResistCount  = 0;//+10 special resist per level [id: 630]
    var RefractorCount  = 0;//+10 energy resist per level [id: 720]
    var AntitoxinCount  = 0;//+10 posion resist per level [id: 831]
    var StrongBackCount = 0;//+25 cary weight per level [id: 610]
    var LeadBellyCount  = 0;//15% reduction when eating or drinking [id: 231]
    var LifegiverCount  = 0;//+20 hp per level [id: 330]
    var ChemResistCount = 0;//50% less likly to get addicted, +10% for each rank after 1 [id: 430]
    var CarryWeightCurrent = 0;

    const cardEmbed = new discord.RichEmbed()
          cardEmbed.setAuthor(mentionedname, settings.botpic)
          cardEmbed.setColor(randomHex.generate())
          cardEmbed.setThumbnail(mentionedavatar)
          cardEmbed.setURL('http://www.maskedriders.info/Mee6RP/index.php')

    const cardEmbed2 = new discord.RichEmbed()
          cardEmbed2.setColor(randomHex.generate())
          cardEmbed2.setFooter(mentionedname + ' Data Card ~ invoked by '+ uidname, settings.serverpic)
          cardEmbed2.setTimestamp()
var part1 = 0;

    mysqlPool.getConnection(function(err, connection) {
        if(err) console.log(err);
        var SQLString  = "SELECT * FROM " + settings.dbbuffdebufftable + " ";
            SQLString += "WHERE target_id = '" + mentionedid + "'";
            //console.log(SQLString);
            connection.query(SQLString, {title: 'Select'}, function(errU, resultU) {
                if (errU) { console.log(errU) } else {
                    if (resultU.length > 0){
                        //console.log("["+resultU.length+"] Buff/Debuff from "+uidname+" FOR "+mentionedname+" already exists");
                        for (d = 0; d < resultU.length; d++){
                            Bonus_HP += resultU[d].HP;
                            Bonus_MP += resultU[d].MP;
                            Bonus_IP += resultU[d].IP;
                            Bonus_Strength += resultU[d].Strength;
                            Bonus_Perception += resultU[d].Perception;
                            Bonus_Endurance += resultU[d].Endurance;
                            Bonus_Charisma += resultU[d].Charisma;
                            Bonus_Intelligence += resultU[d].Intelligence;
                            Bonus_Agility += resultU[d].Agility;
                            Bonus_Luck += resultU[d].Luck;
                            Bonus_BalisticResist += resultU[d].BalisticResist;
                            Bonus_FireResist += resultU[d].FireResist;
                            Bonus_CryoResist += resultU[d].CryoResist;
                            Bonus_ToxicResist += resultU[d].ToxicResist;
                            Bonus_ElecResist += resultU[d].ElecResist;
                            Bonus_EnergyResist += resultU[d].EnergyResist;
                            Bonus_PosionResist += resultU[d].PosionResist;
                            Bonus_SpecialResist += resultU[d].SpecialResist;
                            Bonus_BalisticDT += resultU[d].BalisticDT;
                            Bonus_FireDT += resultU[d].FireDT;
                            Bonus_CryoDT += resultU[d].CryoDT;
                            Bonus_ToxicDT += resultU[d].ToxicDT;
                            Bonus_ElecDT += resultU[d].ElecDT;
                            Bonus_EnergyDT += resultU[d].EnergyDT;
                            Bonus_PosionDT += resultU[d].PosionDT;
                            Bonus_SpecialDT += resultU[d].SpecialDT;
                            Bonus_SPECIAL_Points += resultU[d].SPECIAL_Points;
                            Bonus_CLASS_ID += resultU[d].CLASS_ID;
                            Bonus_Power_Mult += resultU[d].Power_Mult;
                            Bonus_level += resultU[d].level;
                        };//for (d = 0; d < resultU.length; d++)
                    };//if (resultU.length > 0)
                };//if (errU) 
            });//connection.query(SQLString
        connection.query("SELECT * FROM " + settings.dbtable + " LEFT JOIN " + settings.dbskilltable + " ON " + settings.dbtable + ".ID = " + settings.dbskilltable + ".PLAYER_ID WHERE " + settings.dbtable + ".ID = '" + mentionedid + "'", function(err,rows){
            for (var i = 0; i < rows.length; i++) {
                GetTotalRank();
                var SPECIALS = new Map();
                SPECIALS.set(mentionedid,{
                    Strength: Bonus_Strength,
                    Perception: Bonus_Perception,
                    Endurance: Bonus_Endurance,
                    Charisma: Bonus_Charisma,
                    Intelligence: Bonus_Intelligence,
                    Agility: Bonus_Agility,
                    Luck: Bonus_Luck
                });//SPECIALS.set

                if (!isNaN(mentionedid) && (settings.UserList.get(mentionedid) != undefined)){
                    for (f = 0; f < settings.UserSkillList.size; f++){
                        if (settings.UserSkillList.get(f).PLAYER_ID == mentionedid){
                            if (settings.UserSkillList.get(f).PERK_ID == 3){ToughnessCount += settings.UserSkillList.get(f).RANKS;};
                            if (settings.UserSkillList.get(f).PERK_ID == 230){FireproofCount += settings.UserSkillList.get(f).RANKS;};
                            if (settings.UserSkillList.get(f).PERK_ID == 231){LeadBellyCount += settings.UserSkillList.get(f).RANKS;};
                            if (settings.UserSkillList.get(f).PERK_ID == 531){ChilledCount += settings.UserSkillList.get(f).RANKS;};
                            if (settings.UserSkillList.get(f).PERK_ID == 630){RadResistCount += settings.UserSkillList.get(f).RANKS;};
                            if (settings.UserSkillList.get(f).PERK_ID == 720){RefractorCount += settings.UserSkillList.get(f).RANKS;};
                            if (settings.UserSkillList.get(f).PERK_ID == 831){AntitoxinCount += settings.UserSkillList.get(f).RANKS;};
                            if (settings.UserSkillList.get(f).PERK_ID == 610){StrongBackCount += settings.UserSkillList.get(f).RANKS;};
                            if (settings.UserSkillList.get(f).PERK_ID == 330){LifegiverCount += settings.UserSkillList.get(f).RANKS;};
                            if (settings.UserSkillList.get(f).PERK_ID == 430){ChemResistCount += settings.UserSkillList.get(f).RANKS;};

                            if (settings.UserSkillList.get(f).PERK_ID == 110){SPECIALS.get(mentionedid).Strength += settings.UserSkillList.get(f).RANKS;};
                            if (settings.UserSkillList.get(f).PERK_ID == 120){SPECIALS.get(mentionedid).Perception += settings.UserSkillList.get(f).RANKS;};
                            if (settings.UserSkillList.get(f).PERK_ID == 130){SPECIALS.get(mentionedid).Endurance += settings.UserSkillList.get(f).RANKS;};
                            if (settings.UserSkillList.get(f).PERK_ID == 140){SPECIALS.get(mentionedid).Charisma += settings.UserSkillList.get(f).RANKS;};
                            if (settings.UserSkillList.get(f).PERK_ID == 150){SPECIALS.get(mentionedid).Intelligence += settings.UserSkillList.get(f).RANKS;};
                            if (settings.UserSkillList.get(f).PERK_ID == 160){SPECIALS.get(mentionedid).Agility += settings.UserSkillList.get(f).RANKS;};
                            if (settings.UserSkillList.get(f).PERK_ID == 170){SPECIALS.get(mentionedid).Luck += settings.UserSkillList.get(f).RANKS;};
                        };//if (settings.UserSkillList.get(i).PLAYER_ID == uid)
                    };//for
                    SPECIALS.get(mentionedid).Strength += settings.UserList.get(mentionedid).Strength;
                    SPECIALS.get(mentionedid).Perception += settings.UserList.get(mentionedid).Perception;
                    SPECIALS.get(mentionedid).Endurance += settings.UserList.get(mentionedid).Endurance;
                    SPECIALS.get(mentionedid).Charisma += settings.UserList.get(mentionedid).Charisma;
                    SPECIALS.get(mentionedid).Intelligence += settings.UserList.get(mentionedid).Intelligence;
                    SPECIALS.get(mentionedid).Agility += settings.UserList.get(mentionedid).Agility;
                    SPECIALS.get(mentionedid).Luck += settings.UserList.get(mentionedid).Luck;
                };//if

                    if (i == (rows.length - 1)){
                        var powertotal = rows[i].Power_Mult + rows[i].Power_Mult_Boost + Bonus_Power_Mult;
                        var StrengthMult = Math.floor(SPECIALS.get(mentionedid).Strength*powertotal);
                        if (StrengthMult == 0){StrengthMult = SPECIALS.get(mentionedid).Strength;};
                        var PerceptionMult = Math.floor(SPECIALS.get(mentionedid).Perception*powertotal);
                        if (PerceptionMult == 0){PerceptionMult = SPECIALS.get(mentionedid).Perception;};
                        var EnduranceMult = Math.floor(SPECIALS.get(mentionedid).Endurance*powertotal);
                        if (EnduranceMult == 0){EnduranceMult = SPECIALS.get(mentionedid).Endurance;};
                        var CharismaMult = Math.floor(SPECIALS.get(mentionedid).Charisma*powertotal);
                        if (CharismaMult == 0){CharismaMult = SPECIALS.get(mentionedid).Charisma;};
                        var IntelligenceMult = Math.floor(SPECIALS.get(mentionedid).Intelligence*powertotal);
                        if (IntelligenceMult == 0){IntelligenceMult = SPECIALS.get(mentionedid).Intelligence;};
                        var AgilyMult = Math.floor(SPECIALS.get(mentionedid).Agility*powertotal);
                        if (AgilyMult == 0){AgilyMult = SPECIALS.get(mentionedid).Agility;};
                        var LuckMult = Math.floor(SPECIALS.get(mentionedid).Luck*powertotal);
                        if (LuckMult == 0){LuckMult = SPECIALS.get(mentionedid).Luck;};

                        var CURRHPCalc           = rows[i].Current_HP;
                        var CURRMPCalc           = rows[i].Current_MP;
                        var CURRIPCalc           = rows[i].Current_IP;
                        var SPECIAL_POINTS       = Bonus_SPECIAL_Points + rows[i].SPECIAL_Points;
                        var CarryWeight          = settings.CarryCalculator(StrengthMult, StrongBackCount);
                        var PlayerHeight         = settings.HeightCalculator(rows[i].Height);
                        var PlayerHeightFeet     = Math.floor(PlayerHeight);
                        var PlayerHeightInches   = PlayerHeight % 1;
                            PlayerHeightInches   = PlayerHeightInches * 100;
                            PlayerHeightInches   = Math.floor(PlayerHeightInches);
                            PlayerHeightInches   = PlayerHeightInches / 12;
                            PlayerHeightInches   = Math.round(100*PlayerHeightInches)/100;
                        var PlayerHeightString   = PlayerHeightFeet + ' Feet, ' + PlayerHeightInches + ' Inches';
                        var PlayerWeight         = rows[i].Weight;
                        var PlayerFitnessID      = rows[i].Fitness;
                        var PlayerFitnessName    = settings.FitnessName(PlayerFitnessID);

                        var PlayerLevel          = rows[i].PLACEHOLDER_lvl + Bonus_level;
                        var PlayerLevelTotalXP   = rows[i].PLACEHOLDER_total_xp;
                        var PlayerLevelXP        = rows[i].PLACEHOLDER_xp;
                        var PlayerRank           = rows[i].PLACEHOLDER_rank;
                        var TotalRank            = settings.playerRankTotal;
                        var PlayerLevelLVLXP     = settings.XPtoNextLevel(PlayerLevel);
                        var PlayerLevelXPPercent = settings.XPPercentCalc(PlayerLevelXP, PlayerLevelLVLXP);
                        var FullClassSTRING      = settings.PlayerClassName(rows[i].CLASS_ID_Boost, "no");
                            FullClassSTRING     += " ";
                            FullClassSTRING     += settings.PlayerClassName(rows[i].CLASS_ID, "no");
                            FullClassSTRING     += " ";
                            FullClassSTRING     += settings.PlayerClassName(rows[i].CLASS_ID_Sub, "yes");
                            FullClassSTRING     += " ";
                            FullClassSTRING     += settings.PlayerClassName(rows[i].CLASS_ID_Sub2, "yes");
                            FullClassSTRING     += " ";
                            FullClassSTRING     += settings.PlayerClassName(rows[i].CLASS_ID_Sub3, "yes");
                            FullClassSTRING     += " ";
                            FullClassSTRING     += settings.PlayerClassName(rows[i].CLASS_ID_Sub4, "yes");

                        var XPString      = PlayerLevelXP.toLocaleString();
                            XPString     += '/';
                            XPString     += PlayerLevelLVLXP.toLocaleString();
                            XPString     += ' [';
                            XPString     += PlayerLevelTotalXP.toLocaleString();
                            XPString     += ' ~ **';
                            XPString     += PlayerLevelXPPercent.toLocaleString();
                            XPString     += '**%]';

                        Bonus_HP += rows[i].MAX_HP;
                        Bonus_MP += rows[i].MAX_MP;
                        Bonus_IP += rows[i].MAX_IP;

                        var MaXHPCalc = settings.MaxHPCalculator(PlayerLevel, SPECIALS.get(mentionedid).Endurance, 1, Bonus_HP, LifegiverCount);
                        var MaXMPCalc = settings.MaxMPCalculator(PlayerLevel, SPECIALS.get(mentionedid).Agility, 1, Bonus_MP, 0);
                        var MaXIPCalc = settings.MaxIPCalculator(PlayerLevel, SPECIALS.get(mentionedid).Intelligence, 1, Bonus_IP, 0);

                        var MaXHPCalcMult = settings.MaxHPCalculator(PlayerLevel, SPECIALS.get(mentionedid).Endurance, powertotal, Bonus_HP, LifegiverCount);
                        var MaXMPCalcMult = settings.MaxMPCalculator(PlayerLevel, SPECIALS.get(mentionedid).Agility, powertotal, Bonus_MP, 0);
                        var MaXIPCalcMult = settings.MaxIPCalculator(PlayerLevel, SPECIALS.get(mentionedid).Intelligence, powertotal, Bonus_IP, 0);

                        var ResistBALISTIC = Bonus_BalisticResist + settings.ResistBALISTICCalculator(PlayerLevel, SPECIALS.get(mentionedid).Endurance, ToughnessCount, 1);
                        var ResistFIRE     = Bonus_FireResist + settings.ResistFIRECalculator(PlayerLevel, SPECIALS.get(mentionedid).Endurance, FireproofCount, 1);
                        var ResistCRYO     = Bonus_CryoResist + settings.ResistCRYOCalculator(PlayerLevel, SPECIALS.get(mentionedid).Endurance, ChilledCount, 1);
                        var ResistPOSION   = Bonus_PosionResist + settings.ResistPOSIONCalculator(PlayerLevel, SPECIALS.get(mentionedid).Endurance, AntitoxinCount, 1);
                        var ResistTOXIC    = Bonus_ToxicResist + settings.ResistTOXICCalculator(PlayerLevel, SPECIALS.get(mentionedid).Endurance, RadResistCount, 1);
                        var ResistENERGY   = Bonus_EnergyResist + settings.ResistENERGYCalculator(PlayerLevel, SPECIALS.get(mentionedid).Endurance, RefractorCount, 1);
                        var ResistELECTRICITY   = Bonus_ElecResist + settings.ResistENERGYCalculator(PlayerLevel, SPECIALS.get(mentionedid).Endurance, RefractorCount, 1);
                        var ResistSPECIAL   = Bonus_SpecialResist;

                        var ResistBALISTICMult = Bonus_BalisticResist + settings.ResistBALISTICCalculator(PlayerLevel, SPECIALS.get(mentionedid).Endurance, ToughnessCount, powertotal);
                        var ResistFIREMult     = Bonus_FireResist + settings.ResistFIRECalculator(PlayerLevel, SPECIALS.get(mentionedid).Endurance, FireproofCount, powertotal);
                        var ResistCRYOMult     = Bonus_CryoResist + settings.ResistCRYOCalculator(PlayerLevel, SPECIALS.get(mentionedid).Endurance, ChilledCount, powertotal);
                        var ResistPOSIONMult   = Bonus_PosionResist + settings.ResistPOSIONCalculator(PlayerLevel, SPECIALS.get(mentionedid).Endurance, AntitoxinCount, powertotal);
                        var ResistTOXICMult    = Bonus_ToxicResist + settings.ResistTOXICCalculator(PlayerLevel, SPECIALS.get(mentionedid).Endurance, RadResistCount, powertotal);
                        var ResistENERGYMult   = Bonus_EnergyResist + settings.ResistENERGYCalculator(PlayerLevel, SPECIALS.get(mentionedid).Endurance, RefractorCount, powertotal);
                        var ResistELECTRICITYMult   = Bonus_ElecResist + settings.ResistENERGYCalculator(PlayerLevel, SPECIALS.get(mentionedid).Endurance, RefractorCount, powertotal);
                        var ResistSPECIALMult   = Bonus_SpecialResist * powertotal;
                        
                        if (rows[i].Gender == 1){pcard = 'Male';}else{pcard = 'Female';};

                        var SQLString  = "SELECT * FROM " + settings.playerinventory + " LEFT JOIN ";
                            SQLString += settings.dbweaponarmortable + " ON " + settings.playerinventory + ".ID = ";
                            SQLString += settings.dbweaponarmortable + ".ID ";
                            SQLString += "WHERE " + settings.playerinventory + ".Player_ID = '" + mentionedid + "' ";
                            SQLString += "ORDER BY " + settings.dbweaponarmortable + ".Name ASC";
                        connection.query(SQLString, function(err,rowsC){
                            if ((rowsC.length > 0) && (rowsC.length != null) && (rowsC.length != undefined) && (!err)){
                                settings.variable = 0;
                                for (var i = 0; i < rowsC.length; i++) {
                                    settings.variable += (rowsC[i].Weight*rowsC[i].RANKS);
                                };//for (var i = 0; i < rowsC.length; i++)
                            };//if
                        });//querry "SELECT * FROM RP_Users WHERE ID = '" + uid + "'"
                        CarryWeightCurrent = settings.variable;

                        var swarmcount = 0;
                        var PowerName = powertotal.toLocaleString();
                        if (powertotal >= parseInt(192311813)){
                            swarmcount = (powertotal/10)/192311813;
                            PowerName = "__**SWARM**__ x"+swarmcount;}

                        if (SPECIAL_POINTS > 0){cardEmbed.addField('SPECIAL Points', SPECIAL_POINTS, true)}//row 1
                        cardEmbed.addField('Gender', pcard, true)//row 2
                        cardEmbed.addField('Rank', PlayerRank + '/' + TotalRank, true)//row 3
                        cardEmbed.addField('Height', PlayerHeightString, true)//row 4
                        cardEmbed.addField('Weight [Fitness]', PlayerWeight.toLocaleString() + ' lbs [' + PlayerFitnessName + ']', true)//row 5
                        cardEmbed.addField('Carry Weight', CarryWeightCurrent.toLocaleString() + '/' + CarryWeight.toLocaleString(), true)//row 6
                        cardEmbed.addField('Class/Form', FullClassSTRING, true)//row 7
                        cardEmbed.addField('Level [Power Multiplier]', PlayerLevel.toLocaleString() + ' [' + PowerName + ']', true)//row 8
                        cardEmbed.addField('Exp. [Lifetime]', XPString, true)//row 9
                        cardEmbed.addField('HP', CURRHPCalc.toLocaleString() + '/' + MaXHPCalcMult.toLocaleString(), true)//row 10
                        cardEmbed.addField('AP', CURRMPCalc.toLocaleString() + '/' + MaXMPCalcMult.toLocaleString(), true)//row 11
                        cardEmbed.addField('IP', CURRIPCalc.toLocaleString() + '/' + MaXIPCalcMult.toLocaleString(), true)//row 12
                        cardEmbed.addField('Strength', SPECIALS.get(mentionedid).Strength.toLocaleString() + " [" + StrengthMult.toLocaleString() + "]", true)//row 13
                        cardEmbed.addField('Perception', SPECIALS.get(mentionedid).Perception.toLocaleString() + " [" + PerceptionMult.toLocaleString() + "]", true)//row 14
                        cardEmbed.addField('Endurance', SPECIALS.get(mentionedid).Endurance.toLocaleString() + " [" + EnduranceMult.toLocaleString() + "]", true)//row 15
                        cardEmbed.addField('Charisma', SPECIALS.get(mentionedid).Charisma.toLocaleString() + " [" + CharismaMult.toLocaleString() + "]", true)//row 16
                        cardEmbed.addField('Intelligence', SPECIALS.get(mentionedid).Intelligence.toLocaleString() + " [" + IntelligenceMult.toLocaleString() + "]", true)//row 17
                        cardEmbed.addField('Agility', SPECIALS.get(mentionedid).Agility.toLocaleString() + " [" + AgilyMult.toLocaleString() + "]", true)//row 18
                        cardEmbed.addField('Luck', SPECIALS.get(mentionedid).Luck.toLocaleString() + " [" + LuckMult.toLocaleString() + "]", true)//row 19

                        part1 = 1;

                        cardEmbed2.addField('Balistic Resist', ResistBALISTIC.toLocaleString() + ' [' + ResistBALISTICMult.toLocaleString() + ']', true)//row 20
                        cardEmbed2.addField('Fire Resist', ResistFIRE.toLocaleString() + ' [' + ResistFIREMult.toLocaleString() + ']', true)//row 21
                        cardEmbed2.addField('Cryo Resist', ResistCRYO.toLocaleString() + ' [' + ResistCRYOMult.toLocaleString() + ']', true)//row 22
                        cardEmbed2.addField('Poison Resist', ResistPOSION.toLocaleString() + ' [' + ResistPOSIONMult.toLocaleString() + ']', true)//row 23
                        cardEmbed2.addField('Toxic Resist', ResistTOXIC.toLocaleString() + ' [' + ResistTOXICMult.toLocaleString() + ']', true)//row 24
                        cardEmbed2.addField('Energy Resist', ResistENERGY.toLocaleString() + ' [' + ResistENERGYMult.toLocaleString() + ']', true)//row 25
                        cardEmbed2.addField('Electric Resist', ResistELECTRICITY.toLocaleString() + ' [' + ResistELECTRICITYMult.toLocaleString() + ']', true)//row 25
                        cardEmbed2.addField('Special Resist', ResistSPECIAL.toLocaleString() + ' [' + ResistSPECIALMult.toLocaleString() + ']', true)//row 25
                        cardEmbed2.addField('Balistic DT', Bonus_BalisticDT.toLocaleString() + ' [' + Bonus_BalisticDT.toLocaleString() + ']', true)//row 20
                        cardEmbed2.addField('Fire DT', Bonus_FireDT.toLocaleString() + ' [' + Bonus_FireDT.toLocaleString() + ']', true)//row 21
                        cardEmbed2.addField('Cryo DT', Bonus_CryoDT.toLocaleString() + ' [' + Bonus_CryoDT.toLocaleString() + ']', true)//row 22
                        cardEmbed2.addField('Poison DT', Bonus_PosionDT.toLocaleString() + ' [' + Bonus_PosionDT.toLocaleString() + ']', true)//row 23
                        cardEmbed2.addField('Toxic DT', Bonus_ToxicDT.toLocaleString() + ' [' + Bonus_ToxicDT.toLocaleString() + ']', true)//row 24
                        cardEmbed2.addField('Energy DT', Bonus_EnergyDT.toLocaleString() + ' [' + Bonus_EnergyDT.toLocaleString() + ']', true)//row 25
                        cardEmbed2.addField('Electric DT', Bonus_ElecDT.toLocaleString() + ' [' + Bonus_ElecDT.toLocaleString() + ']', true)//row 25
                        cardEmbed2.addField('Special DT', Bonus_SpecialDT.toLocaleString() + ' [' + Bonus_SpecialDT.toLocaleString() + ']', true)//row 25
                        cardEmbed2.addField('Turns Stunned', rows[i].Stunned_Duration, true)//row 25
                        cardEmbed2.addField('Turns Restrained', rows[i].Restrained_Duration, true)//row 25
                        cardEmbed2.addField('Turns Paralyzed', rows[i].Paralyzed_Duration, true)//row 25
                    };//catching duplicate fields
                };//for (var i = 0; i < rows.length; i++)

            message.channel.sendEmbed(cardEmbed, '', { disableEveryone: true });
            if (part1 == 1){message.channel.sendEmbed(cardEmbed2, '', { disableEveryone: true });;};

            connection.release(); // if error occured closed the connection
        });//querry "SELECT * FROM RP_Users WHERE ID = '" + uid + "'"
    });//get connection
};//exports run

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: ["me", "rank", "you"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "pcard",
  description: "",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};

function GetTotalRank(){
    mysqlPool.getConnection(function(err, connection) {
        if(err) {
            console.log(err);
        } else {
            connection.query("SELECT ID FROM " + settings.dbtable, function(err2,rows2){
                if (!err2){
                    settings.playerRankTotal = rows2.length;
                };//if (!err2)
            });//querry "SELECT * FROM RP_Users WHERE ID = '" + uid + "'"
            connection.release(); // if error occured closed the connection
        };//if(err)
    });//get connection
}//function
