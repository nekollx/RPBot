const discord = require ('discord.js');
var settings = require('../settings.js');
var randomHex = require('random-hex');
var Client   =    require('mysql');

var forms = '';
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
    var xplow = 25;
    var xphigh = 35;
	var randomxp = settings.getRandomInt(xplow, xphigh);
    var uid           = msg.author.id;
    var uidname       = msg.author.username;
    var uidavatar = msg.author.avatarURL;

    var mentionedid   = uid;
    var mentionedname = uidname;
    var mentionedavatar = uidavatar;

    if (msg.mentions.users.first()){
        mentionedid   = msg.mentions.users.first().id;
        mentionedname = msg.mentions.users.first().username;
        mentionedavatar = msg.mentions.users.first().avatarURL;
    };//if

    if (uidavatar != null){
        settings.avypic = uidavatar;
    }else {
        settings.avypic = settings.blankpic;
        uidavatar = settings.blankpic;
    };//if (uidavatar != null)

    if (mentionedavatar == null){
        mentionedavatar = settings.blankpic;
    };//if (mentionedavatar == null)

    var images = ['http://www.maskedriders.info/Mee6RP/statusPic/Healing_magic.gif',
                  'http://www.maskedriders.info/Mee6RP/statusPic/Healing_Spell.gif',
                  'http://www.maskedriders.info/Mee6RP/statusPic/tumblr_n3kgs67pH71r0nm8qo1_r1_500.gif',
                  'http://www.maskedriders.info/Mee6RP/statusPic/f44ed5bc4604abc3c5a817b1041b5c9b994f3963_hq.gif',
                  'http://www.maskedriders.info/Mee6RP/statusPic/578de148c7f4c5a59840e1b9a3714f2dc361babc_hq.gif',
                  'http://www.maskedriders.info/Mee6RP/statusPic/hands.gif'
                 ];//array of images to use
    var slapID = settings.getRandomInt(1, images.length);
    var slapSTRING  = images[(slapID-1)];
    var count = 0;

    var Bonus_HP = 0; var Bonus_MP = 0; var Bonus_IP = 0; 
    var Bonus_Strength = 0; var Bonus_Perception = 0; var Bonus_Endurance = 0; 
    var Bonus_Charisma = 0; var Bonus_Intelligence = 0; var Bonus_Agility = 0; var Bonus_Luck = 0; 
    var Bonus_BalisticResist = 0; var Bonus_FireResist = 0; var Bonus_CryoResist = 0; 
    var Bonus_ToxicResist = 0; var Bonus_ElecResist = 0; var Bonus_EnergyResist = 0; 
    var Bonus_PosionResist = 0; var Bonus_SpecialResist = 0; 
    var Bonus_BalisticDT = 0; var Bonus_FireDT = 0; var Bonus_CryoDT = 0; var Bonus_ToxicDT = 0; 
    var Bonus_ElecDT = 0; var Bonus_EnergyDT = 0; var Bonus_PosionDT = 0; var Bonus_SpecialDT = 0; 
    var Bonus_Power_Mult = 0; var Bonus_level = 0;
    var CurrentHP = 0; var CurrentAP = 0; var CurrentIP = 0; 
    var CritPercent = 0; var BankedCrits = 0; 

    var Gender = 0; var Height = 0; var Weight = 0; var Fitness = 0; 
    var HP = 0; var MP = 0; var IP = 0; 
    var Strength = 0; var Perception = 0; var Endurance = 0; 
    var Charisma = 0; var Intelligence = 0; var Agility = 0; var Luck = 0; 
    var SPECIAL_Points = 0; var CLASS_ID = 0; var CLASS_ID_Boost = 0; 
    var CLASS_ID_Sub = 0; var CLASS_ID_Sub2 = 0; var CLASS_ID_Sub3 = 0; var CLASS_ID_Sub4 = 0; 
    var Power_Mult = 0; var Power_Mult_Boost = 0; 
    var Level = 0; var Level_XP = 0; var Total_XP = 0; var XP = 0; var XP_Percent = 0; 
    var Player_Rank = 0; var Player_Rank_Total = 0; 
    var Banked_Criticals = 0; var Critical_Meter_Percent = 0; 
    var Paralyzed_Duration = 0; var Stunned_Duration = 0; var Restrained_Duration = 0; 
    var IsLevelCapped = 0; var NoLevelLoop = 0;

    var Condition_Head = 0; var Condition_Left_Eye = 0; var Condition_Right_Eye = 0; 
    var Condition_Left_Ear = 0; var Condition_Right_Ear = 0; 
    var Condition_Torso = 0; var Condition_Groin = 0; 
    var Condition_Left_Leg = 0; var Condition_Right_Leg = 0; 
    var Condition_Left_Wing = 0; var Condition_Right_Wing = 0; var Condition_Tail = 0; 
    
    var Has_Head = 0; var Has_Left_Eye = 0; var Has_Right_Eye = 0; 
    var Has_Left_Ear = 0; var Has_Right_Ear = 0; 
    var Has_Torso = 0; var Has_Groin = 0; 
    var Has_Left_Leg = 0; var Has_Right_Leg = 0; 
    var Has_Left_Wing = 0; var Has_Right_Wing = 0; 
    var Has_Tail = 0; 
    
    var Thirst_Level = 0; var Hunger_Level = 0; var Tired_Level = 0; var Is_Sick = 0; 
    var Toxic_Damage = 0; var Fatigue_Damage = 0; var Brain_Damage = 0; 
    
    var Toxic_DOT = 0; var Cryo_DOT = 0; var Fire_DOT = 0; 
    var Elec_DOT = 0; var Posion_DOT = 0; 
    
    var Toxic_Duration = 0; var Cryo_Duration = 0; var Fire_Duration = 0; 
    var Elec_Duration = 0; var Posion_Duration = 0;
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        if (settings.UserList.get(uid) != undefined){
            Gender += settings.UserList.get(uid).Gender;
            Height += settings.UserList.get(uid).Height;
            Weight += settings.UserList.get(uid).Weight;
            Fitness += settings.UserList.get(uid).Fitness;
            Bonus_HP += settings.UserList.get(uid).Bonus_HP;
            HP += settings.UserList.get(uid).HP;
            Bonus_MP += settings.UserList.get(uid).Bonus_MP;
            MP += settings.UserList.get(uid).MP;
            Bonus_IP += settings.UserList.get(uid).Bonus_IP;
            IP += settings.UserList.get(uid).IP;
            Strength += settings.UserList.get(uid).Strength;
            Perception += settings.UserList.get(uid).Perception;
            Endurance += settings.UserList.get(uid).Endurance;
            Charisma += settings.UserList.get(uid).Charisma;
            Intelligence += settings.UserList.get(uid).Intelligence;
            Agility += settings.UserList.get(uid).Agility;
            Luck += settings.UserList.get(uid).Luck;
            SPECIAL_Points += settings.UserList.get(uid).SPECIAL_Points;
            CLASS_ID += settings.UserList.get(uid).CLASS_ID;
            CLASS_ID_Boost += settings.UserList.get(uid).CLASS_ID_Boost;
            CLASS_ID_Sub += settings.UserList.get(uid).CLASS_ID_Sub;
            CLASS_ID_Sub2 += settings.UserList.get(uid).CLASS_ID_Sub2;
            CLASS_ID_Sub3 += settings.UserList.get(uid).CLASS_ID_Sub3;
            CLASS_ID_Sub4 += settings.UserList.get(uid).CLASS_ID_Sub4;
            Power_Mult += settings.UserList.get(uid).Power_Mult;
            Power_Mult_Boost += settings.UserList.get(uid).Power_Mult_Boost;
            Level += settings.UserList.get(uid).Level;
            Level_XP += settings.UserList.get(uid).Level_XP;
            Total_XP += settings.UserList.get(uid).Total_XP;
            XP += settings.UserList.get(uid).XP;
            XP_Percent += settings.UserList.get(uid).XP_Percent;
            Player_Rank += settings.UserList.get(uid).Player_Rank;
            Player_Rank_Total += settings.UserList.get(uid).Player_Rank_Total;
            Banked_Criticals += settings.UserList.get(uid).Banked_Criticals;
            Critical_Meter_Percent += settings.UserList.get(uid).Critical_Meter_Percent;
            Paralyzed_Duration += settings.UserList.get(uid).Paralyzed_Duration;
            Stunned_Duration += settings.UserList.get(uid).Stunned_Duration;
            Restrained_Duration += settings.UserList.get(uid).Restrained_Duration;

            Condition_Head += settings.UserList.get(uid).Condition_Head;
            Condition_Left_Eye += settings.UserList.get(uid).Condition_Left_Eye;
            Condition_Right_Eye += settings.UserList.get(uid).Condition_Right_Eye;
            Condition_Left_Ear += settings.UserList.get(uid).Condition_Left_Ear;
            Condition_Right_Ear += settings.UserList.get(uid).Condition_Right_Ear;
            Condition_Torso += settings.UserList.get(uid).Condition_Torso;
            Condition_Groin += settings.UserList.get(uid).Condition_Groin;
            Condition_Left_Leg += settings.UserList.get(uid).Condition_Left_Leg;
            Condition_Right_Leg += settings.UserList.get(uid).Condition_Right_Leg;
            Condition_Left_Wing += settings.UserList.get(uid).Condition_Left_Wing;
            Condition_Right_Wing += settings.UserList.get(uid).Condition_Right_Wing;
            Condition_Tail += settings.UserList.get(uid).Condition_Tail;

            Has_Head += settings.UserList.get(uid).Has_Head;
            Has_Left_Eye += settings.UserList.get(uid).Has_Left_Eye;
            Has_Right_Eye += settings.UserList.get(uid).Has_Right_Eye;
            Has_Left_Ear += settings.UserList.get(uid).Has_Left_Ear;
            Has_Right_Ear += settings.UserList.get(uid).Has_Right_Ear;
            Has_Torso += settings.UserList.get(uid).Has_Torso;
            Has_Groin += settings.UserList.get(uid).Has_Groin;
            Has_Left_Leg += settings.UserList.get(uid).Has_Left_Leg;
            Has_Right_Leg += settings.UserList.get(uid).Has_Right_Leg;
            Has_Left_Wing += settings.UserList.get(uid).Has_Left_Wing;
            Has_Right_Wing += settings.UserList.get(uid).Has_Right_Wing;
            Has_Tail += settings.UserList.get(uid).Has_Tail;

            Thirst_Level += settings.UserList.get(uid).Thirst_Level;
            Hunger_Level += settings.UserList.get(uid).Hunger_Level;
            Tired_Level += settings.UserList.get(uid).Tired_Level;
            Is_Sick += settings.UserList.get(uid).Is_Sick;

            Toxic_Damage += settings.UserList.get(uid).Toxic_Damage;
            Fatigue_Damage += settings.UserList.get(uid).Fatigue_Damage;
            Brain_Damage += settings.UserList.get(uid).Brain_Damage;

            Toxic_DOT += settings.UserList.get(uid).Toxic_DOT;
            Cryo_DOT += settings.UserList.get(uid).Cryo_DOT;
            Fire_DOT += settings.UserList.get(uid).Fire_DOT;
            Elec_DOT += settings.UserList.get(uid).Elec_DOT;
            Posion_DOT += settings.UserList.get(uid).Posion_DOT;

            Toxic_Duration += settings.UserList.get(uid).Toxic_Duration;
            Cryo_Duration += settings.UserList.get(uid).Cryo_Duration;
            Fire_Duration += settings.UserList.get(uid).Fire_Duration;
            Elec_Duration += settings.UserList.get(uid).Elec_Duration;
            Posion_Duration += settings.UserList.get(uid).Posion_Duration;

            IsLevelCapped += settings.UserList.get(uid).IsLevelCapped;

            for (d = 0; d < settings.Buff_Debuff_List.size; d++){
                if (settings.Buff_Debuff_List.get(d) != undefined){
                    if (settings.Buff_Debuff_List.get(d).target_id == uid){
                        Bonus_HP += settings.Buff_Debuff_List.get(d).HP;
                        Bonus_MP += settings.Buff_Debuff_List.get(d).MP;
                        Bonus_IP += settings.Buff_Debuff_List.get(d).IP;
                        Bonus_Strength += settings.Buff_Debuff_List.get(d).Strength;
                        Bonus_Perception += settings.Buff_Debuff_List.get(d).Perception;
                        Bonus_Endurance += settings.Buff_Debuff_List.get(d).Endurance;
                        Bonus_Charisma += settings.Buff_Debuff_List.get(d).Charisma;
                        Bonus_Intelligence += settings.Buff_Debuff_List.get(d).Intelligence;
                        Bonus_Agility += settings.Buff_Debuff_List.get(d).Agility;
                        Bonus_Luck += settings.Buff_Debuff_List.get(d).Luck;
                        Bonus_BalisticResist += settings.Buff_Debuff_List.get(d).BalisticResist;
                        Bonus_FireResist += settings.Buff_Debuff_List.get(d).FireResist;
                        Bonus_CryoResist += settings.Buff_Debuff_List.get(d).CryoResist;
                        Bonus_ToxicResist += settings.Buff_Debuff_List.get(d).ToxicResist;
                        Bonus_ElecResist += settings.Buff_Debuff_List.get(d).ElecResist;
                        Bonus_EnergyResist += settings.Buff_Debuff_List.get(d).EnergyResist;
                        Bonus_PosionResist += settings.Buff_Debuff_List.get(d).PosionResist;
                        Bonus_SpecialResist += settings.Buff_Debuff_List.get(d).SpecialResist;
                        Bonus_BalisticDT += settings.Buff_Debuff_List.get(d).BalisticDT;
                        Bonus_FireDT += settings.Buff_Debuff_List.get(d).FireDT;
                        Bonus_CryoDT += settings.Buff_Debuff_List.get(d).CryoDT;
                        Bonus_ToxicDT += settings.Buff_Debuff_List.get(d).ToxicDT;
                        Bonus_ElecDT += settings.Buff_Debuff_List.get(d).ElecDT;
                        Bonus_EnergyDT += settings.Buff_Debuff_List.get(d).EnergyDT;
                        Bonus_PosionDT += settings.Buff_Debuff_List.get(d).PosionDT;
                        Bonus_SpecialDT += settings.Buff_Debuff_List.get(d).SpecialDT;
                        Bonus_Power_Mult += settings.Buff_Debuff_List.get(d).Power_Mult;
                        Bonus_level += settings.Buff_Debuff_List.get(d).level;
                    };//if (settings.Buff_Debuff_List.get(d).target_id == uid)
                };//if (settings.Buff_Debuff_List.get(d) != undefined)
            };//for (d = 0; d < settings.Buff_Debuff_List.size; d++)

            for (f = 0; f < settings.UserSkillList.size; f++){
                if (settings.UserSkillList.get(f) != undefined){
                    if (settings.UserSkillList.get(f).PLAYER_ID == uid){
                        //if (skillid == 110){skillname = "Strength Boost";};
                        if (settings.UserSkillList.get(f).PERK_ID == 110){Bonus_Strength += settings.UserSkillList.get(f).RANKS;};
                        //if (skillid == 120){skillname = "Perception Boost";};
                        if (settings.UserSkillList.get(f).PERK_ID == 120){Bonus_Perception += settings.UserSkillList.get(f).RANKS;};
                        //if (skillid == 130){skillname = "Endurance Boost";};
                        if (settings.UserSkillList.get(f).PERK_ID == 130){Bonus_Endurance += settings.UserSkillList.get(f).RANKS;};
                        //if (skillid == 140){skillname = "Charisma Boost";};
                        if (settings.UserSkillList.get(f).PERK_ID == 140){Bonus_Charisma += settings.UserSkillList.get(f).RANKS;};
                        //if (skillid == 150){skillname = "Intelligence Boost";};
                        if (settings.UserSkillList.get(f).PERK_ID == 150){Bonus_Intelligence += settings.UserSkillList.get(f).RANKS;};
                        //if (skillid == 160){skillname = "Agility Boost";};
                        if (settings.UserSkillList.get(f).PERK_ID == 160){Bonus_Agility += settings.UserSkillList.get(f).RANKS;};
                        //if (skillid == 170){skillname = "Luck Boost";};
                        if (settings.UserSkillList.get(f).PERK_ID == 170){Bonus_Luck += settings.UserSkillList.get(f).RANKS;};
                    };//if (settings.UserSkillList.get(f).PLAYER_ID == uid)
                };//if (settings.UserSkillList.get(f) != undefined)
            };//for (f = 0; f < settings.UserSkillList.size; f++)
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

            var totalpwr = Power_Mult + Power_Mult_Boost + Bonus_Power_Mult;
            if (totalpwr < 1){totalpwr = 1;};
            if (totalpwr > 10*(Level + Bonus_level)){
                console.log("Total Power Excedes Level, Reducing from "+totalpwr.toLocaleString()+" to "+(10*(Level + Bonus_level)).toLocaleString());
                totalpwr = 10*(Level + Bonus_level);
            };//if (totalpwr > 10*(Level + Bonus_level))

            var totalstr = Strength + Bonus_Strength;
            var totalper = Perception + Bonus_Perception;
            var totalend = Endurance + Bonus_Endurance;
            var totalcha = Charisma + Bonus_Charisma;
            var totalint = Intelligence + Bonus_Intelligence;
            var totalagl = Agility + Bonus_Agility;
            var totallck = Luck + Bonus_Luck;
            var Total_Levels = parseInt(Level) + parseInt(Bonus_level);

            var pwrtotalstr = totalstr * totalpwr;
            var pwrtotalper = totalper * totalpwr;
            var pwrtotalend = totalend * totalpwr;
            var pwrtotalcha = totalcha * totalpwr;
            var pwrtotalint = totalint * totalpwr;
            var pwrtotalagl = totalagl * totalpwr;
            var pwrtotallck = totallck * totalpwr;

//console.log("Bonus_Agility: "+Bonus_Agility);
//console.log("Agility: "+Agility);
//console.log("totalagl: "+totalagl);
//console.log("pwrtotalagl: "+pwrtotalagl);

            var PlayerFitnessName    = settings.FitnessName(Fitness);
            var PlayerHeight       = settings.HeightCalculator(Height);
            var PlayerHeightFeet   = Math.floor(PlayerHeight);
            var PlayerHeightInches = PlayerHeight % 1;
                PlayerHeightInches = PlayerHeightInches * 100;
                PlayerHeightInches = Math.floor(PlayerHeightInches);
                PlayerHeightInches = PlayerHeightInches / 12;
                PlayerHeightInches = Math.round(100*PlayerHeightInches)/100;
            var PlayerHeightString = PlayerHeightFeet + ' Feet, ' + PlayerHeightInches + ' Inches';
            var ToughnessCount = 0;
            var FireproofCount = 0;
            var ChilledCount = 0;
            var AntitoxinCount = 0;
            var RadResistCount = 0;
            var RefractorCount = 0;
            var RefractorCount = 0;

            var ResistBALISTIC = Bonus_BalisticResist + settings.ResistBALISTICCalculator(Total_Levels, totalend, ToughnessCount, 1);
            var ResistFIRE     = Bonus_FireResist + settings.ResistFIRECalculator(Total_Levels, totalend, FireproofCount, 1);
            var ResistCRYO     = Bonus_CryoResist + settings.ResistCRYOCalculator(Total_Levels, totalend, ChilledCount, 1);
            var ResistPOSION   = Bonus_PosionResist + settings.ResistPOSIONCalculator(Total_Levels, totalend, AntitoxinCount, 1);
            var ResistTOXIC    = Bonus_ToxicResist + settings.ResistTOXICCalculator(Total_Levels, totalend, RadResistCount, 1);
            var ResistENERGY   = Bonus_EnergyResist + settings.ResistENERGYCalculator(Total_Levels, totalend, RefractorCount, 1);
            var ResistELECTRICITY   = Bonus_ElecResist + settings.ResistENERGYCalculator(Total_Levels, totalend, RefractorCount, 1);
            var ResistSPECIAL   = Bonus_SpecialResist;

            var ResistBALISTICMult = Bonus_BalisticResist + settings.ResistBALISTICCalculator(Total_Levels, totalend, ToughnessCount, totalpwr);
            var ResistFIREMult     = Bonus_FireResist + settings.ResistFIRECalculator(Total_Levels, totalend, FireproofCount, totalpwr);
            var ResistCRYOMult     = Bonus_CryoResist + settings.ResistCRYOCalculator(Total_Levels, totalend, ChilledCount, totalpwr);
            var ResistPOSIONMult   = Bonus_PosionResist + settings.ResistPOSIONCalculator(Total_Levels, totalend, AntitoxinCount, totalpwr);
            var ResistTOXICMult    = Bonus_ToxicResist + settings.ResistTOXICCalculator(Total_Levels, totalend, RadResistCount, totalpwr);
            var ResistENERGYMult   = Bonus_EnergyResist + settings.ResistENERGYCalculator(Total_Levels, totalend, RefractorCount, totalpwr);
            var ResistELECTRICITYMult   = Bonus_ElecResist + settings.ResistENERGYCalculator(Total_Levels, totalend, RefractorCount, totalpwr);
            var ResistSPECIALMult   = Bonus_SpecialResist * totalpwr;

            var intexpmodifier  = Math.floor(randomxp * ((pwrtotalint*0.1) + (pwrtotallck*0.05)));
            var xptonext        = settings.XPtoNextLevel(Level);
            var PlayerLevelTemp = Level;
            var totalXP         = intexpmodifier + randomxp + XP;
            var totalCurrentXP  = intexpmodifier + randomxp + XP;
            var xppercent       = settings.XPPercentCalc(totalCurrentXP, xptonext);

            if (xptonext < totalCurrentXP){
                for (var j = 0; xptonext < totalCurrentXP; j++){
                    totalCurrentXP  = totalCurrentXP - xptonext;
                    PlayerLevelTemp = PlayerLevelTemp + 1;
                    xptonext        = settings.XPtoNextLevel(PlayerLevelTemp);
                    xppercent       = settings.XPPercentCalc(totalCurrentXP, xptonext);
                };//for (var j = 0; xptonext < totalCurrentXP; j++)
            };//if (xptonext < totalCurrentXP)

            for (var h = 0; h < PlayerLevelTemp; h++){
                var xptonow       = Math.floor((h+1) + ((h+1)*0.20));
                    xptonow       = Math.floor(xptonow + (((xptonow*0.60)*(xptonow*0.80))*9.3));
                    totalXP       = Math.floor(totalXP + xptonow);
            };//for (var h = 0; h < PlayerLevelTemp; h++)

            var MaXHPCalc     = settings.MaxHPCalculator(Level, pwrtotalend, totalpwr, Bonus_HP, 0);
            var MaXMPCalc     = settings.MaxMPCalculator(Level, pwrtotalagl, totalpwr, Bonus_MP, 0);
            var MaXIPCalc     = settings.MaxIPCalculator(Level, pwrtotalint, totalpwr, Bonus_IP, 0);
            var healammount    = Math.floor(MaXHPCalc/100);
            var mpammount      = Math.floor(MaXMPCalc/100);
            var ipammount      = Math.floor(MaXIPCalc/100);

            var MaXHPCalcTemp     = settings.MaxHPCalculator(PlayerLevelTemp, pwrtotalend, totalpwr, Bonus_HP, 0);
            var MaXMPCalcTemp     = settings.MaxMPCalculator(PlayerLevelTemp, pwrtotalagl, totalpwr, Bonus_MP, 0);
            var MaXIPCalcTemp     = settings.MaxIPCalculator(PlayerLevelTemp, pwrtotalint, totalpwr, Bonus_IP, 0);
            var healammountTemp    = Math.floor(MaXHPCalcTemp/100);
            var mpammountTemp      = Math.floor(MaXMPCalcTemp/100);
            var ipammountTemp      = Math.floor(MaXIPCalcTemp/100);

            if (MaXHPCalcTemp < settings.HPFloor){
                MaXHPCalcTemp = settings.HPFloor;
            } else if (MaXHPCalcTemp > settings.HPLimit){
                MaXHPCalcTemp = settings.HPLimit;
            };//if

            if (MaXMPCalcTemp < settings.HPFloor){
                MaXMPCalcTemp = settings.HPFloor;
            } else if (MaXMPCalcTemp > settings.HPLimit){
                MaXMPCalcTemp = settings.HPLimit;
            };//if

            if (MaXIPCalcTemp < settings.HPFloor){
                MaXIPCalcTemp = settings.HPFloor;
            } else if (MaXIPCalcTemp > settings.HPLimit){
                MaXIPCalcTemp = settings.HPLimit;
            };//if

            //GetTotalRank();
            //GetPlayerRank(uid);

        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            mysqlPool.getConnection(function(err_u, connection) {
                if(err_u) {console.log("Error on - mysqlPool.getConnection for user array creation: "+ err_u)
                }else{
                    if (HP > (MaXHPCalcTemp*10)){
                        HP = (MaXHPCalcTemp*10);
                    } else if ((HP + healammountTemp) < settings.HPFloor){
                        HP = settings.HPFloor;
                    } else if ((HP + healammountTemp) > settings.HPLimit){
                        HP = settings.HPLimit;
                    } else if ((HP + healammountTemp) < (MaXHPCalcTemp*10)){
                        var hptots = HP + healammountTemp;
                        HP = hptots;
                    };//if/else
                    connection.query("UPDATE " + settings.dbtable + " SET Current_HP = " + HP + " WHERE ID = '" + uid + "'");
                    settings.UserList.get(uid).HP = HP; 
                    //connection.release(); // if error occured closed the connection

                    if (MP > (MaXMPCalcTemp*10)){
                        MP = (MaXMPCalcTemp*10);
                    } else if ((MP + mpammountTemp) < settings.HPFloor){
                        MP = settings.HPFloor;
                    } else if ((MP + mpammountTemp) > settings.HPLimit){
                        MP = settings.HPLimit;
                    } else if ((MP + mpammountTemp) < (MaXMPCalcTemp*10)){
                        var hptots = MP + mpammountTemp;
                        MP = hptots;
                    };//if/else
                    connection.query("UPDATE " + settings.dbtable + " SET Current_MP = " + MP + " WHERE ID = '" + uid + "'");
                    settings.UserList.get(uid).MP = MP; 
                    //connection.release(); // if error occured closed the connection

                    if (IP > (MaXIPCalcTemp*10)){
                        IP = (MaXIPCalcTemp*10);
                    } else if ((IP + ipammountTemp) < settings.HPFloor){
                        IP = settings.HPFloor;
                    } else if ((IP + ipammountTemp) > settings.HPLimit){
                        IP = settings.HPLimit;
                    } else if ((IP + ipammountTemp) < (MaXIPCalcTemp*10)){
                        var hptots = IP + ipammountTemp;
                        IP = hptots;
                    };//if/else
                    connection.query("UPDATE " + settings.dbtable + " SET Current_IP = " + IP + " WHERE ID = '" + uid + "'");
                    settings.UserList.get(uid).IP = IP; 
                    //connection.release(); // if error occured closed the connection

                    if (NoLevelLoop == 0){
                        if (Level != PlayerLevelTemp){
                            var LevelUpString = 'REVEL UP! '+uidname+' has leveled up to **Level '+ PlayerLevelTemp.toLocaleString() +'**! Congraulations, here\'s a free Full Restore (HP/AP/IP) on the house.';
                            console.log(LevelUpString);  
                            connection.query("UPDATE " + settings.dbtable + " SET PLACEHOLDER_lvl = " + PlayerLevelTemp + " WHERE ID = '" + uid + "'");
                            connection.query("UPDATE " + settings.dbtable + " SET Current_HP = " + MaXHPCalcTemp + " WHERE ID = '" + uid + "'");
                            connection.query("UPDATE " + settings.dbtable + " SET Current_MP = " + MaXMPCalcTemp + " WHERE ID = '" + uid + "'");
                            connection.query("UPDATE " + settings.dbtable + " SET Current_IP = " + MaXIPCalcTemp + " WHERE ID = '" + uid + "'");
                            settings.UserList.get(uid).Level = PlayerLevelTemp; 
                            settings.UserList.get(uid).HP = MaXHPCalcTemp; 
                            settings.UserList.get(uid).MP = MaXMPCalcTemp; 
                            settings.UserList.get(uid).IP = MaXIPCalcTemp; 

                            const RiderEmbed = new discord.RichEmbed()
                                RiderEmbed.setColor(randomHex.generate())
                                RiderEmbed.setThumbnail(slapSTRING)
                                RiderEmbed.setAuthor(uidname + ' LEVEL UP!', settings.botpic)
                                RiderEmbed.setDescription(LevelUpString)
                            msg.channel.send({embed: RiderEmbed});
                            //connection.release(); // if error occured closed the connection
                            NoLevelLoop = 1;
                        };//if (Level != PlayerLevelTemp)
                    };//if (NoLevelLoop == 0)

                    if (Total_XP != totalXP){
                        connection.query("UPDATE " + settings.dbtable + " SET PLACEHOLDER_total_xp = " + totalXP + " WHERE ID = '" + uid + "'");
                        settings.UserList.get(uid).Total_XP = totalXP;
                        //connection.release(); // if error occured closed the connection
                    };//if (Total_XP != totalXP)
                    
                    if (XP != totalCurrentXP){
                        connection.query("UPDATE " + settings.dbtable + " SET PLACEHOLDER_xp = " + totalCurrentXP + " WHERE ID = '" + uid + "'");
                        connection.query("UPDATE " + settings.dbtable + " SET Player_Name = '" + uidname.toString() + "' WHERE ID = '" + uid + "'");
                        connection.query("UPDATE " + settings.dbtable + " SET Avatar_URL = '" + uidavatar.toString() + "' WHERE ID = '" + uid + "'");
                        settings.UserList.get(uid).XP = totalCurrentXP;
                        //connection.release(); // if error occured closed the connection
                    };//if (XP != totalCurrentXP)

                    if (Weight > settings.WeightCap){
                        connection.query("UPDATE " + settings.dbtable + " SET Weight = " + settings.WeightCap + " WHERE ID = '" + uid + "'");
                        settings.UserList.get(uid).Weight = settings.WeightCap; 
                        //connection.release(); // if error occured closed the connection
                    } else if (Weight < settings.WeightMin){
                        connection.query("UPDATE " + settings.dbtable + " SET Weight = " + settings.WeightMin + " WHERE ID = '" + uid + "'");
                        settings.UserList.get(uid).Weight = settings.WeightMin; 
                        //connection.release(); // if error occured closed the connection
                    };//if/else

                    if (Height > settings.HeightCap){
                        connection.query("UPDATE " + settings.dbtable + " SET Height = " + settings.HeightCap + " WHERE ID = '" + uid + "'");
                        settings.UserList.get(uid).Height = settings.HeightCap; 
                        //connection.release(); // if error occured closed the connection
                    } else if (Height < settings.HeightMin){
                        connection.query("UPDATE " + settings.dbtable + " SET Height = " + settings.HeightMin + " WHERE ID = '" + uid + "'");
                        settings.UserList.get(uid).Height = settings.HeightMin; 
                        //connection.release(); // if error occured closed the connection
                    };//if/else

                    if (Fitness > settings.FitnessLimit){
                        connection.query("UPDATE " + settings.dbtable + " SET Fitness = " + settings.FitnessLimit + " WHERE ID = '" + uid + "'");
                        settings.UserList.get(uid).Fitness = settings.FitnessLimit; 
                        //connection.release(); // if error occured closed the connection
                    } else if (Fitness < settings.FitnessMin){
                        connection.query("UPDATE " + settings.dbtable + " SET Fitness = " + settings.FitnessMin + " WHERE ID = '" + uid + "'");
                        settings.UserList.get(uid).Fitness = settings.FitnessMin; 
                        //connection.release(); // if error occured closed the connection
                    };//if/else

                    if (Paralyzed_Duration > 0){
                        Paralyzed_Duration = Paralyzed_Duration - 1;
                        connection.query("UPDATE " + settings.dbtable + " SET Paralyzed_Duration = " + Paralyzed_Duration + " WHERE ID = '" + uid + "'");
                        settings.UserList.get(uid).Paralyzed_Duration = Paralyzed_Duration; 
                        //connection.release(); // if error occured closed the connection
                    };//if (Paralyzed_Duration > 0)

                    if (Stunned_Duration > 0){
                        Stunned_Duration = Stunned_Duration - 1;
                        connection.query("UPDATE " + settings.dbtable + " SET Stunned_Duration = " + Stunned_Duration + " WHERE ID = '" + uid + "'");
                        settings.UserList.get(uid).Stunned_Duration = Stunned_Duration; 
                        //connection.release(); // if error occured closed the connection
                    };//if (Stunned_Duration > 0)

                    if (Restrained_Duration > 0){
                        Restrained_Duration = Restrained_Duration - 1;
                        connection.query("UPDATE " + settings.dbtable + " SET Restrained_Duration = " + Restrained_Duration + " WHERE ID = '" + uid + "'");
                        settings.UserList.get(uid).Restrained_Duration = Restrained_Duration; 
                        //connection.release(); // if error occured closed the connection
                    };//if (Restrained_Duration > 0)
                };//if(err_u)
            });//mysqlPool.getConnection(function(err_u, connection)
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            var DurationCount = 0;
            var DOTCount = 0;
            var LevelString = Level.toLocaleString()
            if (PlayerLevelTemp > Level){LevelString += " -> " + PlayerLevelTemp.toLocaleString();}
            var XPEarnedString  = (randomxp+intexpmodifier).toLocaleString() + ' EXP!';
            var MaxXPString = (xphigh + intexpmodifier).toLocaleString();
            var CurrentXPString = totalCurrentXP.toLocaleString() + ' ' + xptonext.toLocaleString() + ' {' + Math.floor(xppercent).toLocaleString() + '%}';
            var TotalXPString = totalXP.toLocaleString();
            var CurrentHPString  = HP.toLocaleString() + ' / ' + MaXHPCalcTemp.toLocaleString() + ' {'+((HP/MaXHPCalcTemp)*100).toLocaleString()+'%}';
            var CurrentAPString  = MP.toLocaleString() + ' / ' + MaXMPCalcTemp.toLocaleString() + ' {'+((MP/MaXMPCalcTemp)*100).toLocaleString()+'%}';
            var CurrentIPString  = IP.toLocaleString() + ' / ' + MaXIPCalcTemp.toLocaleString() + ' {'+((IP/MaXIPCalcTemp)*100).toLocaleString()+'%}';
                                    
            var HPRegenString  = healammountTemp.toLocaleString() +' HP';
            var APRegenString  = mpammountTemp.toLocaleString() +' AP';
            var IPRegenString  = ipammountTemp.toLocaleString() +' IP';

            var StunnedString  = Stunned_Duration.toLocaleString() +' turns';
            var ParalyzedString  = Paralyzed_Duration.toLocaleString() +' turns';
            var RestrainedString  = Restrained_Duration.toLocaleString() +' turns';

            var ToxicString  = 'Taking '+ Toxic_DOT.toLocaleString()+' Toxic Damage for '+ Toxic_Duration.toLocaleString() +' turns';
            var CryoString  = 'Taking '+ Cryo_DOT.toLocaleString()+' Cryo Damage for '+ Cryo_Duration.toLocaleString() +' turns';
            var FireString  = 'Taking '+ Fire_DOT.toLocaleString()+' Fire Damage for '+ Fire_Duration.toLocaleString() +' turns';
            var ElecString  = 'Taking '+ Elec_DOT.toLocaleString()+' Electrical Damage for '+ Elec_Duration.toLocaleString() +' turns';
            var PosionString  = 'Taking '+ Posion_DOT.toLocaleString()+' Posion Damage for '+ Posion_Duration.toLocaleString() +' turns';
            var DOTString = '';
            if (Toxic_DOT > 0){DOTString += ToxicString+'\n'; DOTCount++;}
            if (Cryo_DOT > 0){DOTString += CryoString+'\n'; DOTCount++;}
            if (Fire_DOT > 0){DOTString += FireString+'\n'; DOTCount++;}
            if (Elec_DOT > 0){DOTString += ElecString+'\n'; DOTCount++;}
            if (Posion_DOT > 0){DOTString += PosionString+'\n'; DOTCount++;}
            var swarmcount = 0;
            var PowerName = totalpwr.toLocaleString();
            if (totalpwr >= parseInt(192311813)){
                swarmcount = (totalpwr/10)/192311813;
                PowerName = "__**SWARM**__ x"+swarmcount;}

            var randomcolor = randomHex.generate();
            const RiderEmbed = new discord.RichEmbed()
                  RiderEmbed.setThumbnail(uidavatar)
                  RiderEmbed.setColor(randomcolor)
                  RiderEmbed.setAuthor(uidname)
                  RiderEmbed.addField("Gender", settings.GenderName(Gender), true)
                  RiderEmbed.addField("Height", PlayerHeightString+" ["+Height+" cm]", true)
                  RiderEmbed.addField("Weight", Weight.toLocaleString()+" lbs ["+PlayerFitnessName+"]", true)
                  //RiderEmbed.addField("Race", settings.RaceName(Race), true)
                  RiderEmbed.addField("Level", LevelString, true)
                  RiderEmbed.addField("Power", PowerName, true)
                  RiderEmbed.addField("EXP Earned", XPEarnedString, true)
                  RiderEmbed.addField("Max EXP Earnable", MaxXPString, true)
                  RiderEmbed.addField("Current EXP", CurrentXPString, true)
                  RiderEmbed.addField("Total EXP", TotalXPString, true)
                  RiderEmbed.addField("HP Regen",  HPRegenString, true)
                  RiderEmbed.addField("AP Regen", APRegenString, true)
                  RiderEmbed.addField("IP Regen", IPRegenString, true)
                  RiderEmbed.addField("Current HP", CurrentHPString, true)
                  if (Toxic_Damage > 0){RiderEmbed.addField("Toxic Damage", Toxic_Damage.toLocaleString(), true)}
                  RiderEmbed.addField("Current AP", CurrentAPString, true)
                  if (Fatigue_Damage > 0){RiderEmbed.addField("Fatigue Damage", Fatigue_Damage.toLocaleString(), true)}
                  RiderEmbed.addField("Current IP", CurrentIPString, true)
                  if (Brain_Damage > 0){RiderEmbed.addField("Brain Damage", Brain_Damage.toLocaleString(), true)}
            console.log('['+uidname+'] '+XPEarnedString);
            if (msg.content.toLowerCase().startsWith("!status")){
                msg.channel.send({embed: RiderEmbed});
            };//if (msg.content.toLowerCase().startsWith("!status"))                                                        

            const RiderEmbed1 = new discord.RichEmbed()
                  RiderEmbed1.setThumbnail(uidavatar)
                  RiderEmbed1.setColor(randomcolor)
                  RiderEmbed1.setAuthor(uidname)
                  if (Paralyzed_Duration > 0){DurationCount++; RiderEmbed1.addField("Paralyzed", ParalyzedString, true)}
                  if (Stunned_Duration > 0){DurationCount++; RiderEmbed1.addField("Stunned", StunnedString, true)}
                  if (Restrained_Duration > 0){DurationCount++; RiderEmbed1.addField("Restrained", RestrainedString, true)}
                  if ((DurationCount == 1) || (DurationCount == 3)){RiderEmbed1.addBlankField(true)}
                  if (DOTCount > 0) {RiderEmbed1.addField("Damage Over Time", DOTString, true)
                  RiderEmbed1.addBlankField(true)}
                  if (!isNaN(Thirst_Level)){RiderEmbed1.addField("Thirst", settings.ThirstName(Thirst_Level), true)}
                  if (!isNaN(Hunger_Level)){RiderEmbed1.addField("Hunger", settings.HungerName(Hunger_Level), true)}
                  if (!isNaN(Tired_Level)){RiderEmbed1.addField("Tiredness", settings.SleepName(Tired_Level), true)}
                  if (!isNaN(Is_Sick)){RiderEmbed1.addField("Sickness", settings.SickName(Is_Sick), true)}
                  if (Has_Head > 0){RiderEmbed1.addField("Head Condition", Condition_Head.toLocaleString()+"%", true);
                                    RiderEmbed1.addBlankField(true)}
                  if (Has_Left_Eye > 0){RiderEmbed1.addField("Left Eye Condition", Condition_Left_Eye.toLocaleString()+"%", true);}
                  if (Has_Right_Eye > 0){RiderEmbed1.addField("Right Eye Condition", Condition_Right_Eye.toLocaleString()+"%", true);}
                  if (Has_Left_Ear > 0){RiderEmbed1.addField("Left Ear Condition", Condition_Left_Ear.toLocaleString()+"%", true);}
                  if (Has_Right_Ear > 0){RiderEmbed1.addField("Right Ear Condition", Condition_Right_Ear.toLocaleString()+"%", true);}
                  if (Has_Torso > 0){RiderEmbed1.addField("Torso Condition", Condition_Torso.toLocaleString()+"%", true);}
                  if (Has_Groin > 0){RiderEmbed1.addField("Groin Condition", Condition_Groin.toLocaleString()+"%", true);}
                  if (Has_Left_Leg > 0){RiderEmbed1.addField("Left Leg Condition", Condition_Left_Leg.toLocaleString()+"%", true);}
                  if (Has_Right_Leg > 0){RiderEmbed1.addField("Right Leg Condition", Condition_Right_Leg.toLocaleString()+"%", true);}
                  if (Has_Left_Wing > 0){RiderEmbed1.addField("Left Wing Condition", Condition_Left_Wing.toLocaleString()+"%", true);}
                  if (Has_Right_Wing > 0){RiderEmbed1.addField("Right Wing Condition", Condition_Right_Wing.toLocaleString()+"%", true);}
                  if (Has_Tail > 0){RiderEmbed1.addField("Tail Condition", Condition_Tail.toLocaleString()+"%", true);}
            if (msg.content.toLowerCase().startsWith("!status")){
                msg.channel.send({embed: RiderEmbed1});
            };//if (msg.content.toLowerCase().startsWith("!status"))                                                        

            const RiderEmbed2 = new discord.RichEmbed()
                  RiderEmbed2.setThumbnail(uidavatar)
                  RiderEmbed2.setColor(randomcolor)
                  RiderEmbed2.setAuthor(uidname)
                  RiderEmbed2.addField("Strength", totalstr.toLocaleString()+"["+(totalstr*totalpwr).toLocaleString()+"]", true)
                  RiderEmbed2.addField("Perception", totalper.toLocaleString()+"["+(totalper*totalpwr).toLocaleString()+"]", true)
                  RiderEmbed2.addField("Endurance", totalend.toLocaleString()+"["+(totalend*totalpwr).toLocaleString()+"]", true)
                  RiderEmbed2.addField("Charisma", totalcha.toLocaleString()+"["+(totalcha*totalpwr).toLocaleString()+"]", true)
                  RiderEmbed2.addField("Intelligence", totalint.toLocaleString()+"["+(totalint*totalpwr).toLocaleString()+"]", true)
                  RiderEmbed2.addField("Agility", totalagl.toLocaleString()+"["+(totalagl*totalpwr).toLocaleString()+"]", true)
                  RiderEmbed2.addField("Luck", totallck.toLocaleString()+"["+(totallck*totalpwr).toLocaleString()+"]", true)
                  RiderEmbed2.addBlankField(true)
                  RiderEmbed2.addField("Banked Criticals", Banked_Criticals.toLocaleString(), true)
                  RiderEmbed2.addField("Current Crit Percent", Critical_Meter_Percent.toLocaleString()+"%", true)
            if (msg.content.toLowerCase().startsWith("!status")){
                msg.channel.send({embed: RiderEmbed2});
            };//if (msg.content.toLowerCase().startsWith("!status"))                                                        

            const RiderEmbed3 = new discord.RichEmbed()
                  RiderEmbed3.setThumbnail(uidavatar)
                  RiderEmbed3.setColor(randomcolor)
                  RiderEmbed3.setAuthor(uidname)
                  RiderEmbed3.addField("Balistic Resist", ResistBALISTIC.toLocaleString()+"["+ResistBALISTICMult.toLocaleString()+"]", true)
                  RiderEmbed3.addField("Fire Resist", ResistFIRE.toLocaleString()+"["+ResistFIREMult.toLocaleString()+"]", true)
                  RiderEmbed3.addField("Cryo Resist", ResistCRYO.toLocaleString()+"["+ResistCRYOMult.toLocaleString()+"]", true)
                  RiderEmbed3.addField("Posion Resist", ResistPOSION.toLocaleString()+"["+ResistPOSIONMult.toLocaleString()+"]", true)
                  RiderEmbed3.addField("Toxic Resist", ResistTOXIC.toLocaleString()+"["+ResistTOXICMult.toLocaleString()+"]", true)
                  RiderEmbed3.addField("Energy Resist", ResistENERGY.toLocaleString()+"["+ResistENERGYMult.toLocaleString()+"]", true)
                  RiderEmbed3.addField("Electricity Resist", ResistELECTRICITY.toLocaleString()+"["+ResistELECTRICITYMult.toLocaleString()+"]", true)
                  RiderEmbed3.addField("Special Resist", ResistSPECIAL.toLocaleString()+"["+ResistSPECIALMult.toLocaleString()+"]", true)
                  RiderEmbed3.addField("Balistic Threshold", Bonus_BalisticDT.toLocaleString(), true)
                  RiderEmbed3.addField("Fire Threshold", Bonus_FireDT.toLocaleString(), true)
                  RiderEmbed3.addField("Cryo Threshold", Bonus_CryoDT.toLocaleString(), true)
                  RiderEmbed3.addField("Posion Threshold", Bonus_PosionDT.toLocaleString(), true)
                  RiderEmbed3.addField("Toxic Threshold", Bonus_ToxicDT.toLocaleString(), true)
                  RiderEmbed3.addField("Energy Threshold", Bonus_EnergyDT.toLocaleString(), true)
                  RiderEmbed3.addField("Electricity Threshold", Bonus_ElecDT.toLocaleString(), true)
                  RiderEmbed3.addField("Special Threshold", Bonus_SpecialDT.toLocaleString(), true)
            if (msg.content.toLowerCase().startsWith("!status")){
                msg.channel.send({embed: RiderEmbed3});
            };//if (msg.content.toLowerCase().startsWith("!status"))                                                        
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    } else {
        mysqlPool.getConnection(function(err_u, connection) {
            if(err_u) {console.log("Error on - mysqlPool.getConnection for add new user: "+ err_u)
            }else{
                connection.query("INSERT INTO " + settings.dbtable + " (id) VALUES ('" + uid + "')", {title: 'Insert'}, function(err, result) {
                if (err) {
                    console.log(err);
                }else{
                    settings.UserList.set(uid, {
                        Gender: 0,
                        Height: 0,
                        Weight: 0,
                        Fitness: 0,
                        Bonus_HP: 0,
                        HP: 0,
                        Bonus_MP: 0,
                        MP: 0,
                        Bonus_IP: 0,
                        IP: 0,
                        Strength: 1,
                        Perception: 1,
                        Endurance: 1,
                        Charisma: 1,
                        Intelligence: 1,
                        Agility: 1,
                        Luck: 1,
                        SPECIAL_Points: 28,
                        CLASS_ID: 0,
                        CLASS_ID_Boost: 0,
                        CLASS_ID_Sub: 0,
                        CLASS_ID_Sub2: 0,
                        CLASS_ID_Sub3: 0,
                        CLASS_ID_Sub4: 0,
                        Power_Mult: 1,
                        Power_Mult_Boost: 0,
                        Level: 1,
                        Level_XP: 0,
                        Total_XP: 0,
                        XP: 0,
                        XP_Percent: 0,
                        Player_Rank: 0,
                        Player_Rank_Total: 0, 
                        Banked_Criticals: 0,
                        Critical_Meter_Percent: 0,
                        Paralyzed_Duration: 0,
                        Stunned_Duration: 0,
                        Restrained_Duration: 0,
                        IsLevelCapped: 0
                    });//settings.UserList.set
                };//if (err)					   
                });//connection.query("INSERT INTO " + settings.dbtable + " (id) VALUES ('" + uid + "')"
                //connection.release(); // if error occured closed the connection
            };//if(err_u)
        });//get connection
    };//if (settings.UserList.get(d) != undefined)
};//run

exports.conf = {
  enabled: true,
};//conf