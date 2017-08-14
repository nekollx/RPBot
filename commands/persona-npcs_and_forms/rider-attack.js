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
    var uid = msg.author.id; var uidname = msg.author.username;
    var mentionedid = uid; var mentionedname = uidname;
    var rankstoaddLIMIT = 3; var ComboLIMIT = rankstoaddLIMIT;
    var FreeCast = "no";

    var CritRoll = Math.floor(Math.random() * 100); var HitRoll = Math.floor(Math.random() * 100);
    var DisarmRoll = Math.floor(Math.random() * 100); var CrippleRoll = Math.floor(Math.random() * 100);
    var ParalyzeRoll = Math.floor(Math.random() * 100); var StunRoll = Math.floor(Math.random() * 100);
    var SneakRoll = Math.floor(Math.random() * 100); var RestrainRoll = Math.floor(Math.random() * 100);
    var FourLeafRoll = Math.floor(Math.random() * 100);
        
    if (msg.mentions.users.first()){
        mentionedid   = msg.mentions.users.first().id;
        mentionedname = msg.mentions.users.first().username;
    };//if

    var Bonus_HP = 0; var Bonus_MP = 0; var Bonus_IP = 0; 
    var Bonus_Strength = 0; var Bonus_Perception = 0; var Bonus_Endurance = 0; 
    var Bonus_Charisma = 0; var Bonus_Intelligence = 0; var Bonus_Agility = 0; var Bonus_Luck = 0; 
    var Bonus_BalisticResist = 0; var Bonus_FireResist = 0; var Bonus_CryoResist = 0; 
    var Bonus_ToxicResist = 0; var Bonus_ElecResist = 0; var Bonus_EnergyResist = 0; 
    var Bonus_PosionResist = 0; var Bonus_SpecialResist = 0; 
    var Bonus_BalisticDT = 0; var Bonus_FireDT = 0; var Bonus_CryoDT = 0; var Bonus_ToxicDT = 0; 
    var Bonus_ElecDT = 0; var Bonus_EnergyDT = 0; var Bonus_PosionDT = 0; var Bonus_SpecialDT = 0; 
    var Bonus_Power_Mult = 0; var Bonus_level = 0;
    var AttackerCurrentHP = 0; var AttackerCurrentAP = 0; var AttackerCurrentIP = 0; 
    var AttackerCritPercent = 0; var AttackerBankedCrits = 0; var CurrentCostStat = 0; 
    var CritSucceeded = 0;
    var SPECIALSkillCount = 0; var SPECIALToHitSkillCount = 0; var SPECIALSneakSkillCount = 0; 
    var SPECIALLuckSkillCount = 0; var CostReductSkillCount = 0; 
    var attackerLevel = 0; var powertotal = 0; 
    var BetterCritsCount = 0; var AwarenessCount = 0; var BlackWidowCount = 0; var LadyKillerCount = 0;
    var AdamantiumCount = 0; var BloddyMessCount = 0; var AntiToxinCount = 0; var ChilledCount = 0;
    var FireproofCount = 0; var RadResistCount = 0; var RefractorCount = 0; var ToughnessCount = 0;
    var CritBankerCount = 0; var DemoExpertCount = 0; var FourLeafCount = 0; var SteadyAimCount = 0;
    var BasherCount = 0; var BigLeaguesCount = 0; var CommandoCount = 0; var ConcentratedFireCount = 0;
    var GhoulishCount = 0; var GrimReaperCount = 0; var GunFuCount = 0; var GunslingerCount = 0;
    var HeavyGunnerCount = 0; var IronFistCount = 0; var KonoichiCount = 0; var LifegiverCount = 0;
    var MissFortuneCount = 0; var MisterSandmanCount = 0; var MovingTargetCount = 0; var MysteriousStrangerCount = 0;
    var NerdRageCount = 0; var NightPersonCount = 0; var NinjaCount = 0; var NuclearPhysicistCount = 0;
    var PainTrainCount = 0; var PartyBoyCount = 0; var PenetratorCount = 0; var QuickHandsCount = 0;
    var RicochetCount = 0; var RiflemanCount = 0; var RootedCount = 0; var SneakCount = 0;
    var SniperCount = 0; var SolarPoweredCount = 0;
    var attackerReady = 0;

    var Bonus_HP2 = 0; var Bonus_MP2 = 0; var Bonus_IP2 = 0; 
    var Bonus_Strength2 = 0; var Bonus_Perception2 = 0; var Bonus_Endurance2 = 0; 
    var Bonus_Charisma2 = 0; var Bonus_Intelligence2 = 0; var Bonus_Agility2 = 0; var Bonus_Luck2 = 0; 
    var Bonus_BalisticResist2 = 0; var Bonus_FireResist2 = 0; var Bonus_CryoResist2 = 0; 
    var Bonus_ToxicResist2 = 0; var Bonus_ElecResist2 = 0; var Bonus_EnergyResist2 = 0; 
    var Bonus_PosionResist2 = 0; var Bonus_SpecialResist2 = 0; 
    var Bonus_BalisticDT2 = 0; var Bonus_FireDT2 = 0; var Bonus_CryoDT2 = 0; var Bonus_ToxicDT2 = 0; 
    var Bonus_ElecDT2 = 0; var Bonus_EnergyDT2 = 0; var Bonus_PosionDT2 = 0; var Bonus_SpecialDT2 = 0; 
    var Bonus_Power_Mult2 = 0; var Bonus_level2 = 0; var totalDT = 0;
    var ResistUPPER = 0; var ResistLOWER = 0; var ResistRoll = 0; var MaxRESISTPercent = 0;
    var TotalDMGStack = 0; var MaxHMI = 0; var CurrentHMI = 0; var BaseCurrentHMI = 0; 
    var SPECIALLuckSkillCountDefender = 0; var SPECIALDodgeSkillCount = 0; 
    var SPECIALResistSkillCount = 0; var SPECIALSneakDetectSkillCount = 0; 
    var defenderLevel = 0; var powertotalDefender = 0;
    var BetterCritsCount2 = 0; var AwarenessCount2 = 0; var BlackWidowCount2 = 0; var LadyKillerCount2 = 0;
    var AdamantiumCount2 = 0; var BloddyMessCount2 = 0; var AntiToxinCount2 = 0; var ChilledCount2 = 0;
    var FireproofCount2 = 0; var RadResistCount2 = 0; var RefractorCount2 = 0; var ToughnessCount2 = 0;
    var CritBankerCount2 = 0; var DemoExpertCount2 = 0; var FourLeafCount2 = 0; var SteadyAimCount2 = 0;
    var BasherCount2 = 0; var BigLeaguesCount2 = 0; var CommandoCount2 = 0; var ConcentratedFireCount2 = 0;
    var GhoulishCount2 = 0; var GrimReaperCount2 = 0; var GunFuCount2 = 0; var GunslingerCount2 = 0;
    var HeavyGunnerCount2 = 0; var IronFistCount2 = 0; var KonoichiCount2 = 0; var LifegiverCount2 = 0;
    var MissFortuneCount2 = 0; var MisterSandmanCount2 = 0; var MovingTargetCount2 = 0; var MysteriousStrangerCount2 = 0;
    var NerdRageCount2 = 0; var NightPersonCount2 = 0; var NinjaCount2 = 0; var NuclearPhysicistCount2 = 0;
    var PainTrainCount2 = 0; var PartyBoyCount2 = 0; var PenetratorCount2 = 0; var QuickHandsCount2 = 0;
    var RicochetCount2 = 0; var RiflemanCount2 = 0; var RootedCount2 = 0; var SneakCount2 = 0;
    var SniperCount2 = 0; var SolarPoweredCount2 = 0;
    var DefenderCurrentHP = 0; var DefenderCurrentAP = 0; var DefenderCurrentIP = 0;
    var DefenderCLASS_ID = 0; var DefenderCLASS_ID_Sub = 0; var DefenderCLASS_ID_Sub2 = 0; 
    var DefenderCLASS_ID_Sub3 = 0; var DefenderCLASS_ID_Sub4 = 0; var DefenderPower_Mult = 0;
    var defenderReady = 0;

    /*****************************************FLASH KICK*****************************************/
        var action              = "Flash Kick"; 
        var slapSTRING          = 'default image string url';

        var TargetStat          = 'HP';//what stat is effected by this
        var CostStat            = 'AP';//what state is drained to use
        var TargetStatModifier  = '-';//what does this move do to the target state ie '-' reduces the target, '+' increases
        var BaseCritGain        = 0.1; //how much base crit meter, out of 1, is gained on a sucessful hit
        var APCost              = 20;//attack base cost
        var CritChance          = 5;//chance as a percent of scoreing a critical hit
        var DisarmChance        = 5;//chance as a percent of disarming the target
        var CrippleChance       = 5;//chance as a percent of crippling one of the target's limbs (head, torso, arms, legs)
        var ParalyzeChance      = 5;//chance as a percent of paralyzing the target
        var RestrainChance      = 5;//chance as a percent of restraining the target
        var StunChance          = 5;//chance as a percent of stunning the target
        var FourLeafChance      = 0;//chance as a percent of fillingthe crit meter with four leraf clover

        var ParalyzeDuration    = 1;//how long will a it last
        var RestrainDuration    = 1;//how long will a it last
        var StunDuration        = 1;//how long will a it last

        var IgnoreArmor         = 0;//ignores a portion of the targets armor
        var IgnoreArmorPercentOrStatic = 0;//1 if IgnoreArmor should be treated as a percent 0 for a static value

        var CritMulti           = 2;//how much is damage multiplied by a crit
        var SneakMulti          = 3;//how much is damage multiplied by a sneak attack
        var MultiHitDmgDecay    = .9;//when excecuting multi hit whats the decay ofthe damange on each subsequent hit, ie HIT 1 = 100% hit 2 is Hit1*decay
        var MultiHitAccDecay    = .9;//when excecuting multi hit whats the decay of the accuracy on each subsequent hit, ie HIT 1 = 100% hit 2 is Hit1*decay
        var ToHitBonus          = 0;//A flat base buff to Tohit
        var DodgeBonus          = 0;//A flat base buff to dodge
        var DamageMultiplier    = 1;//A base buff to damage

        var DamageSPECIALName      = "Strength";
        var SPECIALSkillID         = 110;//strength
        var ToHitSPECIALName       = "Perception";
        var SPECIALToHitSkillID    = 120;//perception
        var ToSneakSPECIALName     = "Agility";
        var SPECIALToSneakSkillID  = 160;//agility
        var CostReductSPECIALName = "Endurance";
        var CostReductSkillID     = 130;//endurance
        var CostReductPercent     = .05;//how much does this reduce the cost of attacks ie: Apcost - (Apcost*(CostReductPercent*ranks))
        var SPECIALLuckSkillID     = 170;//luck

        var ToDodgeSPECIALName     = "Agility";
        var SPECIALToDodgeSkillID  = 160;//agility
        var ResistSPECIALName     = "Endurance";
        var SPECIALResistSkillID  = 130;//endurance
        var SneakDetectSPECIALName    = "Perception";
        var SPECIALSneakDetectSkillID = 120;//perception

        var DamageType             = 0;//balastic
        var DamageStyle            = 0;//Hand to Hand
        var AutomaticFlag          = 10;//set to 5 if the attack is something like an automatic rifle or pistol
        var AttackSoundLevel       = 2;//2 is normal 0 is silent, 4 is realy loud  

        var images = [
                      'http://www.maskedriders.info/Mee6RP/statusPic/tumblr_nijgbxWVc21s0rmumo1_500.gif', 
                      'http://www.maskedriders.info/Mee6RP/statusPic/tenor.gif', 
                      'http://www.maskedriders.info/Mee6RP/statusPic/PibzEQ.gif' 
                     ];//array of images to use
        /*****************************************FLASH KICK*****************************************/
        /*****************************************PUNCH*****************************************/
        if (msg.content.startsWith("!punch")){
            action = "Punch"; 
            APCost = 10;
            images = [
                      'http://www.maskedriders.info/Mee6RP/statusPic/Kamen_Rider_Joker_Rider_Punch.jpg', 
                      'http://www.maskedriders.info/Mee6RP/statusPic/Rider_Punch_(Movie_War_Mega_Max).gif', 
                      'http://www.maskedriders.info/Mee6RP/statusPic/3816539-7bhpeyx.gif', 
                      'http://www.maskedriders.info/Mee6RP/statusPic/tumblr_myz5exQUOl1sqhgewo1_400.gif', 
                      'http://www.maskedriders.info/Mee6RP/statusPic/ab6065193d481428c0ceb2025ad6c2e6.gif', 
                      'http://www.maskedriders.info/Mee6RP/statusPic/tumblr_nwt5mg6jQU1smqt6fo2_r1_500.gif'
                     ];//array of images to use
        };//if (msg.content.startsWith("!punch"))
        /*****************************************PUNCH*****************************************/
        /*****************************************KICK*****************************************/
        if (msg.content.startsWith("!kick")){
            action = "Kick"; 
            APCost = 12;
            images = [
                      'http://www.maskedriders.info/Mee6RP/statusPic/tumblr_inline_o8qnu5OAwW1tuosbx_500.gif', 
                      'http://www.maskedriders.info/Mee6RP/statusPic/RXKick.gif~c200.gif', 
                      'http://www.maskedriders.info/Mee6RP/statusPic/V3_Return_Kick_(Movie_War_Mega_Max).gif', 
                      'http://www.maskedriders.info/Mee6RP/statusPic/tumblr_neobu9o2U21rzf4fso1_400.gif', 
                      'http://www.maskedriders.info/Mee6RP/statusPic/taku-kabutoriderkick.gif', 
                      'http://www.maskedriders.info/Mee6RP/statusPic/giphy.gif', 
                      'http://www.maskedriders.info/Mee6RP/statusPic/gmqfXNe.gif', 
                      'http://www.maskedriders.info/Mee6RP/statusPic/Rider-Kick-tokusatsu-35890940-285-217.gif', 
                      'http://www.maskedriders.info/Mee6RP/statusPic/tumblr_mjr9kzpp5m1s7edb8o1_500.gif', 
                      'http://www.maskedriders.info/Mee6RP/statusPic/golden-red-kuuga-rider-kick.gif', 
                      'http://www.maskedriders.info/Mee6RP/statusPic/rider-kick-decade-o.gif', 
                      'http://www.maskedriders.info/Mee6RP/statusPic/riderkickk.gif~c200.gif', 
                      'http://www.maskedriders.info/Mee6RP/statusPic/giphy2.gif', 
                      'http://www.maskedriders.info/Mee6RP/statusPic/1390452447091.gif', 
                      'http://www.maskedriders.info/Mee6RP/statusPic/e36.gif', 
                      'http://www.maskedriders.info/Mee6RP/statusPic/rider-kick-o.gif', 
                      'http://www.maskedriders.info/Mee6RP/statusPic/tumblr_m4cmdquKek1qa69wso1_500.gif', 
                      'http://www.maskedriders.info/Mee6RP/statusPic/3UsgU.gif'
                     ];//array of images to use
        };//if (msg.content.startsWith("!punch"))
        /*****************************************KICK*****************************************/
        /*****************************************WHIP GRAB*****************************************/
        if (msg.content.startsWith("!grab")){
            action = "Whip Grab"; 
            APCost = 6;
            DamageMultiplier    = 0.05;//A base buff to damage
            DisarmChance        = 50;//chance as a percent of disarming the target

            images = [
                      'http://www.maskedriders.info/Mee6RP/statusPic/MB2-GIF-1.gif', 
                      'http://www.maskedriders.info/Mee6RP/statusPic/SWRS3-Sabine-uses-laser-whip-to-grab-Darksaber.gif', 
                     ];//array of images to use
        };//if (msg.content.startsWith("!punch"))
        /*****************************************WHIP GRAB*****************************************/
        /*****************************************SNARE*****************************************/
        if (msg.content.startsWith("!snare")){
            action = "Whip Snare"; 
            APCost = 8;
            DamageMultiplier    = 0.01;//A base buff to damage
            RestrainChance      = 60;//chance as a percent of restraining the target
            RestrainDuration    = 10;//how long will a it last

            images = [
                      'http://www.maskedriders.info/Mee6RP/statusPic/tumblr_ojvj5lilUn1v48qoyo1_500.gif', 
                     ];//array of images to use
        };//if (msg.content.startsWith("!punch"))
        /*****************************************SNARE*****************************************/
        /*****************************************HEAL*****************************************/
        if (msg.content.startsWith("!heal")){
            action = "Healing Touch"; 
            APCost = 100;
            CostStat            = 'IP';//what state is drained to use
            TargetStatModifier  = '+';//what does this move do to the target state ie '-' reduces the target, '+' increases

            DamageSPECIALName      = "Intelligence";
            SPECIALSkillID         = 150;//intelligence
            CostReductSPECIALName = "Intelligence";
            CostReductSkillID     = 150;//intelligence
            CostReductPercent     = .01;//how much does this reduce the cost of attacks ie: Apcost - (Apcost*(CostReductPercent*ranks))
            ToHitBonus            = settings.SPECIALLimit;//A flat base buff to Tohit
            DodgeBonus            = settings.SPECIALFloor;//A flat base buff to dodge
            HitRoll               = settings.SPECIALLimit;

            DamageType             = 6;//special
            DamageStyle            = 0;//Hand to Hand
            DisarmChance        = settings.SPECIALFloor;
            CrippleChance       = settings.SPECIALFloor;
            ParalyzeChance      = settings.SPECIALFloor;
            StunChance          = settings.SPECIALFloor;
            
                images = [
                        'http://www.maskedriders.info/Mee6RP/statusPic/Healing_magic.gif', 
                        'http://www.maskedriders.info/Mee6RP/statusPic/Healing_Spell.gif', 
                        'http://www.maskedriders.info/Mee6RP/statusPic/tumblr_n3kgs67pH71r0nm8qo1_r1_500.gif', 
                        'http://www.maskedriders.info/Mee6RP/statusPic/f44ed5bc4604abc3c5a817b1041b5c9b994f3963_hq.gif', 
                        'http://www.maskedriders.info/Mee6RP/statusPic/578de148c7f4c5a59840e1b9a3714f2dc361babc_hq.gif', 
                        'http://www.maskedriders.info/Mee6RP/statusPic/hands.gif'
                        ];//array of images to use
            };//if (msg.content.startsWith("!punch"))
        /*****************************************HEAL*****************************************/
        /*****************************************MEDITATE (RECOVER IP)*****************************************/
        if (msg.content.startsWith("!meditate")){
            console.log("here");
            action = "Meditate"; 
            FreeCast = "yes";
            TargetStat          = 'IP';//what stat is effected by this
            CostStat            = 'IP';//what state is drained to use
            TargetStatModifier  = '+';//what does this move do to the target state ie '-' reduces the target, '+' increases
            mentionedid = uid; 
            mentionedname = uidname;
            ComboLIMIT = 1;

            DamageSPECIALName      = "Intelligence";
            SPECIALSkillID         = 150;//intelligence
            CostReductSPECIALName = "Intelligence";
            CostReductSkillID     = 150;//intelligence
            CostReductPercent     = .01;//how much does this reduce the cost of attacks ie: Apcost - (Apcost*(CostReductPercent*ranks))
            ToHitBonus            = settings.SPECIALLimit;//A flat base buff to Tohit
            DodgeBonus            = settings.SPECIALFloor;//A flat base buff to dodge
            HitRoll               = settings.SPECIALLimit;

            DamageType             = 6;//special
            DamageStyle            = 0;//Hand to Hand
            DisarmChance        = settings.SPECIALFloor;
            CrippleChance       = settings.SPECIALFloor;
            ParalyzeChance      = settings.SPECIALFloor;
            StunChance          = settings.SPECIALFloor;
            
                images = [
                        'http://www.maskedriders.info/Mee6RP/statusPic/Genji_meditate.gif', 
                        'http://www.maskedriders.info/Mee6RP/statusPic/source.gif', 
                        'http://www.maskedriders.info/Mee6RP/statusPic/422d90ae9792ed01dd84aa8d011829b4.gif', 
                        'http://www.maskedriders.info/Mee6RP/statusPic/giphy-1.gif', 
                        'http://www.maskedriders.info/Mee6RP/statusPic/tumblr_ncqqe1cBdI1s7mho6o1_r1_1280.gif', 
                        'http://www.maskedriders.info/Mee6RP/statusPic/tenor2.gif', 
                        'http://www.maskedriders.info/Mee6RP/statusPic/meditategiphy.gif', 
                        ];//array of images to use
        };//if (msg.content.startsWith("!punch"))
        /*****************************************MEDITATE (RECOVER IP)*****************************************/
        /*****************************************REST (RECOVER AP)*****************************************/
        if (msg.content.startsWith("!rest")){
            console.log("here");
            action = "Take A Knee"; 
            FreeCast = "yes";
            TargetStat          = 'AP';//what stat is effected by this
            CostStat            = 'AP';//what state is drained to use
            TargetStatModifier  = '+';//what does this move do to the target state ie '-' reduces the target, '+' increases
            mentionedid = uid; 
            mentionedname = uidname;
            ComboLIMIT = 1;

            DamageSPECIALName      = "Agility";
            SPECIALSkillID         = 160;//agility
            CostReductSPECIALName = "Agility";
            CostReductSkillID     = 160;//agility
            CostReductPercent     = .01;//how much does this reduce the cost of attacks ie: Apcost - (Apcost*(CostReductPercent*ranks))
            ToHitBonus            = settings.SPECIALLimit;//A flat base buff to Tohit
            DodgeBonus            = settings.SPECIALFloor;//A flat base buff to dodge
            HitRoll               = settings.SPECIALLimit;

            DamageType             = 6;//special
            DamageStyle            = 0;//Hand to Hand
            DisarmChance        = settings.SPECIALFloor;
            CrippleChance       = settings.SPECIALFloor;
            ParalyzeChance      = settings.SPECIALFloor;
            StunChance          = settings.SPECIALFloor;
            
                images = [
                        'http://www.maskedriders.info/Mee6RP/statusPic/129030168_14646734618111n.gif', 
                        'http://www.maskedriders.info/Mee6RP/statusPic/400x400_The_5_Minute_Daily_Stretching_Routine_Runners_Stretch.gif', 
                        'http://www.maskedriders.info/Mee6RP/statusPic/Dynamic_lunges_4.gif', 
                        'http://www.maskedriders.info/Mee6RP/statusPic/LNqPdBV.gif', 
                        'http://www.maskedriders.info/Mee6RP/statusPic/leighyogacentralpark2.gif', 
                        'http://www.maskedriders.info/Mee6RP/statusPic/leighyogacentralpark13.gif', 
                        'http://www.maskedriders.info/Mee6RP/statusPic/D6Yzmsk.gif', 
                        ];//array of images to use
        };//if (msg.content.startsWith("!punch"))
        /*****************************************REST (RECOVER AP)*****************************************/
        /*****************************************FULL HEAL*****************************************/
        if (msg.content.startsWith("!fullh")){
            action = "Resurection"; 
            APCost = 1000;
            CostStat            = 'IP';//what state is drained to use
            TargetStatModifier  = '+';//what does this move do to the target state ie '-' reduces the target, '+' increases
            DamageMultiplier    = 1000;//A base buff to damage

            DamageSPECIALName      = "Intelligence";
            SPECIALSkillID         = 150;//intelligence
            CostReductSPECIALName = "Intelligence";
            CostReductSkillID     = 150;//intelligence
            CostReductPercent     = .01;//how much does this reduce the cost of attacks ie: Apcost - (Apcost*(CostReductPercent*ranks))
            ToHitBonus            = settings.SPECIALLimit;//A flat base buff to Tohit
            DodgeBonus            = settings.SPECIALFloor;//A flat base buff to dodge
            HitRoll               = settings.SPECIALLimit;

            DamageType             = 6;//special
            DamageStyle            = 0;//Hand to Hand
            DisarmChance        = settings.SPECIALFloor;
            CrippleChance       = settings.SPECIALFloor;
            ParalyzeChance      = settings.SPECIALFloor;
            StunChance          = settings.SPECIALFloor;
            
                images = [
                        'http://www.maskedriders.info/Mee6RP/statusPic/Healing_magic.gif', 
                        'http://www.maskedriders.info/Mee6RP/statusPic/Healing_Spell.gif', 
                        'http://www.maskedriders.info/Mee6RP/statusPic/tumblr_n3kgs67pH71r0nm8qo1_r1_500.gif', 
                        'http://www.maskedriders.info/Mee6RP/statusPic/f44ed5bc4604abc3c5a817b1041b5c9b994f3963_hq.gif', 
                        'http://www.maskedriders.info/Mee6RP/statusPic/578de148c7f4c5a59840e1b9a3714f2dc361babc_hq.gif', 
                        'http://www.maskedriders.info/Mee6RP/statusPic/hands.gif'
                        ];//array of images to use
            };//if (msg.content.startsWith("!punch"))
    /*****************************************FULL HEAL*****************************************/
//////////////////////////////////////////////////////////////////////////////
    mysqlPool.getConnection(function(err_u, connection) {
        if(err_u) {console.log("Error on - mysqlPool.getConnection for user array creation: "+ err_u)};
    /************************************** Additional modifiers **************************************/
        var combatlog = ""; var combatlog2 = ""; var combatlog3 = "";  var combatlog4 = "";

        var rankstoadd = parseInt(msg.content.split("x").pop());
        var flag       = "!";
        var manualCrit = "!";
        var IsSneaking = "!";
        var NPCFlag    = msg.content.split("%").pop();
        var AllFlags =  msg.content.split("?");
        for (q = 0; q < AllFlags.length; q++){
            if (AllFlags[q].startsWith('debug')){flag = 'debug';};
            if (AllFlags[q].startsWith('crit')){manualCrit = 'crit';};
            if (AllFlags[q].startsWith('sneak')){IsSneaking = 'sneak';};
        };//for (q = 0; q < AllFlags.length; q++)

        if (isNaN(rankstoadd)){rankstoadd = 1;} else 
        if (rankstoadd > settings.MoveComboLimit){rankstoadd = settings.MoveComboLimit;};
        if (ComboLIMIT > rankstoaddLIMIT){ComboLIMIT = rankstoaddLIMIT;};
        if (rankstoadd > ComboLIMIT){rankstoadd = ComboLIMIT;};
//console.log("rankstoadd: "+rankstoadd);

        var slapID = settings.getRandomInt(1, images.length);
        slapSTRING = images[(slapID-1)];
////////////////////////////////////////////////////////////////////////////////////////

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

                    if (settings.Buff_Debuff_List.get(d).target_id == mentionedid){
                        Bonus_HP2 += settings.Buff_Debuff_List.get(d).HP;
                        Bonus_MP2 += settings.Buff_Debuff_List.get(d).MP;
                        Bonus_IP2 += settings.Buff_Debuff_List.get(d).IP;
                        Bonus_Strength2 += settings.Buff_Debuff_List.get(d).Strength;
                        Bonus_Perception2 += settings.Buff_Debuff_List.get(d).Perception;
                        Bonus_Endurance2 += settings.Buff_Debuff_List.get(d).Endurance;
                        Bonus_Charisma2 += settings.Buff_Debuff_List.get(d).Charisma;
                        Bonus_Intelligence2 += settings.Buff_Debuff_List.get(d).Intelligence;
                        Bonus_Agility2 += settings.Buff_Debuff_List.get(d).Agility;
                        Bonus_Luck2 += settings.Buff_Debuff_List.get(d).Luck;
                        Bonus_BalisticResist2 += settings.Buff_Debuff_List.get(d).BalisticResist;
                        Bonus_FireResist2 += settings.Buff_Debuff_List.get(d).FireResist;
                        Bonus_CryoResist2 += settings.Buff_Debuff_List.get(d).CryoResist;
                        Bonus_ToxicResist2 += settings.Buff_Debuff_List.get(d).ToxicResist;
                        Bonus_ElecResist2 += settings.Buff_Debuff_List.get(d).ElecResist;
                        Bonus_EnergyResist2 += settings.Buff_Debuff_List.get(d).EnergyResist;
                        Bonus_PosionResist2 += settings.Buff_Debuff_List.get(d).PosionResist;
                        Bonus_SpecialResist2 += settings.Buff_Debuff_List.get(d).SpecialResist;
                        Bonus_BalisticDT2 += settings.Buff_Debuff_List.get(d).BalisticDT;
                        Bonus_FireDT2 += settings.Buff_Debuff_List.get(d).FireDT;
                        Bonus_CryoDT2 += settings.Buff_Debuff_List.get(d).CryoDT;
                        Bonus_ToxicDT2 += settings.Buff_Debuff_List.get(d).ToxicDT;
                        Bonus_ElecDT2 += settings.Buff_Debuff_List.get(d).ElecDT;
                        Bonus_EnergyDT2 += settings.Buff_Debuff_List.get(d).EnergyDT;
                        Bonus_PosionDT2 += settings.Buff_Debuff_List.get(d).PosionDT;
                        Bonus_SpecialDT2 += settings.Buff_Debuff_List.get(d).SpecialDT;
                        Bonus_Power_Mult2 += settings.Buff_Debuff_List.get(d).Power_Mult;
                        Bonus_level2 += settings.Buff_Debuff_List.get(d).level;
                    };//if (settings.Buff_Debuff_List.get(d).target_id == mentionedid)
                };//if (settings.Buff_Debuff_List.get(d).target_id != undefined)
                if(d == (settings.Buff_Debuff_List.size - 1)){attackerReady++;}else{attackerReady = 0;}
                if(d == (settings.Buff_Debuff_List.size - 1)){defenderReady++;}else{defenderReady = 0;}
            };//for (d = 0; d < resultU.length; d++)

            if (settings.UserList.get(mentionedid) != undefined){
                Bonus_Power_Mult2 += settings.UserList.get(mentionedid).Power_Mult_Boost;
                defenderLevel = settings.UserList.get(mentionedid).Level;
                powertotalDefender = settings.UserList.get(mentionedid).Power_Mult;
                if (
                    (settings.UserList.get(mentionedid).IsLevelCapped == 0) && 
                    (Bonus_Power_Mult2 >= settings.UserList.get(mentionedid).Power_Mult)){
                    powertotalDefender = powertotalDefender * 2;
                } else {
                    powertotalDefender = powertotalDefender + Bonus_Power_Mult2;
                };//if
                if (powertotalDefender < 1){powertotalDefender = 1};

                if (settings.UserList.get(mentionedid).IsLevelCapped == 0){
                    defenderLevel = parseInt(powertotalDefender/10);
                };//if
                if ((defenderLevel == undefined) || (defenderLevel == null) || (defenderLevel < 1)){defenderLevel = 1;}
                defenderLevel += Bonus_level2;

                Bonus_HP2 += settings.UserList.get(mentionedid).Bonus_HP;
                Bonus_MP2 += settings.UserList.get(mentionedid).Bonus_MP;
                Bonus_IP2 += settings.UserList.get(mentionedid).Bonus_IP;
                DefenderCurrentHP = settings.UserList.get(mentionedid).HP; 
                DefenderCurrentAP = settings.UserList.get(mentionedid).MP; 
                DefenderCurrentIP = settings.UserList.get(mentionedid).IP;
                DefenderCLASS_ID = settings.UserList.get(mentionedid).CLASS_ID;
                DefenderCLASS_ID_Sub = settings.UserList.get(mentionedid).CLASS_ID_Sub;
                DefenderCLASS_ID_Sub2 = settings.UserList.get(mentionedid).CLASS_ID_Sub2;
                DefenderCLASS_ID_Sub3 = settings.UserList.get(mentionedid).CLASS_ID_Sub3;
                DefenderCLASS_ID_Sub4 = settings.UserList.get(mentionedid).CLASS_ID_Sub4;
                DefenderPower_Mult = settings.UserList.get(mentionedid).Power_Mult;
            };//(settings.UserList.get(mentionedid) != undefined)

            if (settings.UserList.get(uid) != undefined){
                Bonus_Power_Mult += settings.UserList.get(uid).Power_Mult_Boost;
                attackerLevel = settings.UserList.get(uid).Level;
                powertotal = settings.UserList.get(uid).Power_Mult;
                if (
                    (settings.UserList.get(uid).IsLevelCapped == 0) && 
                    (Bonus_Power_Mult >= settings.UserList.get(uid).Power_Mult)){
                    powertotal = powertotal * 2;
                } else {
                    powertotal = powertotal + Bonus_Power_Mult;
                };//if
                if (powertotal < 1){powertotal = 1};

                if (settings.UserList.get(uid).IsLevelCapped == 0){
                    attackerLevel = parseInt(powertotal/10);
                };//if
                if ((attackerLevel == undefined) || (attackerLevel == null) || (attackerLevel < 1)){attackerLevel = 1;}
                attackerLevel += Bonus_level;

                Bonus_HP += settings.UserList.get(uid).Bonus_HP;
                Bonus_MP += settings.UserList.get(uid).Bonus_MP;
                Bonus_IP += settings.UserList.get(uid).Bonus_IP;
                AttackerCurrentHP = settings.UserList.get(uid).HP; 
                AttackerCurrentAP = settings.UserList.get(uid).MP; 
                AttackerCurrentIP = settings.UserList.get(uid).IP;
                AttackerCritPercent = settings.UserList.get(uid).Critical_Meter_Percent;
                AttackerBankedCrits = settings.UserList.get(uid).Banked_Criticals;
            };//(settings.UserList.get(uid) != undefined)     
        
        if (!isNaN(uid)){
            for (f = 0; f < settings.UserSkillList.size; f++){
                if (settings.UserSkillList.get(f).PLAYER_ID == uid){
                    if (settings.UserSkillList.get(f).PERK_ID == 670){BetterCritsCount += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 320){AwarenessCount += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 241){BlackWidowCount += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 240){LadyKillerCount += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 730){AdamantiumCount += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 670){BloddyMessCount += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 370){AntiToxinCount += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 531){ChilledCount += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 230){FireproofCount += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 630){RadResistCount += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 720){RefractorCount += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 3){ToughnessCount += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 770){CritBankerCount += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 520){DemoExpertCount += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 970){FourLeafCount += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 710){SteadyAimCount += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 810){BasherCount += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 210){BigLeaguesCount += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 260){CommandoCount += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 1020){ConcentratedFireCount += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 930){GhoulishCount += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 870){GrimReaperCount += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 1060){GunFuCount += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 6){GunslingerCount += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 510){HeavyGunnerCount += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 1){IronFistCount += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 761){KonoichiCount += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 330){LifegiverCount += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 471){MissFortuneCount += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 460){MisterSandmanCount += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 660){MovingTargetCount += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 470){MysteriousStrangerCount += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 1050){NerdRageCount += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 620){NightPersonCount += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 760){NinjaCount += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 950){NuclearPhysicistCount += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 1010){PainTrainCount += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 740){PartyBoyCount += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 920){PenetratorCount += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 860){QuickHandsCount += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 1070){RicochetCount += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 220){RiflemanCount += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 910){RootedCount += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 360){SneakCount += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 820){SniperCount += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 1030){SolarPoweredCount += settings.UserSkillList.get(f).RANKS;};

                    if (settings.UserSkillList.get(f).PERK_ID == SPECIALSkillID){SPECIALSkillCount += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == SPECIALToHitSkillID){SPECIALToHitSkillCount += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == SPECIALToSneakSkillID){SPECIALSneakSkillCount += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == CostReductSkillID){CostReductSkillCount += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == SPECIALLuckSkillID){SPECIALLuckSkillCount += settings.UserSkillList.get(f).RANKS;};
                };//if (settings.UserSkillList.get(i).PLAYER_ID == uid)

                if (settings.UserSkillList.get(f).PLAYER_ID == mentionedid){
                    if (settings.UserSkillList.get(f).PERK_ID == 670){BetterCritsCount2 += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 320){AwarenessCount2 += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 241){BlackWidowCount2 += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 240){LadyKillerCount2 += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 730){AdamantiumCount2 += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 670){BloddyMessCount2 += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 370){AntiToxinCount2 += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 531){ChilledCount2 += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 230){FireproofCount2 += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 630){RadResistCount2 += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 720){RefractorCount2 += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 3){ToughnessCount2 += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 770){CritBankerCount2 += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 520){DemoExpertCount2 += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 970){FourLeafCount2 += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 710){SteadyAimCount2 += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 810){BasherCount2 += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 210){BigLeaguesCount2 += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 260){CommandoCount2 += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 1020){ConcentratedFireCount2 += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 930){GhoulishCount2 += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 870){GrimReaperCount2 += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 1060){GunFuCount2 += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 6){GunslingerCount2 += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 510){HeavyGunnerCount2 += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 1){IronFistCount2 += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 761){KonoichiCount2 += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 330){LifegiverCount2 += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 471){MissFortuneCount2 += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 460){MisterSandmanCount2 += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 660){MovingTargetCount2 += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 470){MysteriousStrangerCount2 += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 1050){NerdRageCount2 += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 620){NightPersonCount2 += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 760){NinjaCount2 += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 950){NuclearPhysicistCount2 += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 1010){PainTrainCount2 += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 740){PartyBoyCount2 += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 920){PenetratorCount2 += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 860){QuickHandsCount2 += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 1070){RicochetCount2 += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 220){RiflemanCount2 += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 910){RootedCount2 += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 360){SneakCount2 += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 820){SniperCount2 += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == 1030){SolarPoweredCount2 += settings.UserSkillList.get(f).RANKS;};

                    if (settings.UserSkillList.get(f).PERK_ID == SPECIALToDodgeSkillID){SPECIALDodgeSkillCount += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == SPECIALResistSkillID){SPECIALResistSkillCount += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == SPECIALSneakDetectSkillID){SPECIALSneakDetectSkillCount += settings.UserSkillList.get(f).RANKS;};
                    if (settings.UserSkillList.get(f).PERK_ID == SPECIALLuckSkillID){SPECIALLuckSkillCountDefender += settings.UserSkillList.get(f).RANKS;};
                };//if (settings.UserSkillList.get(i).PLAYER_ID == mentionedid)
                if(f == (settings.UserSkillList.size - 1)){attackerReady++;}else{attackerReady = 0;}
                if(f == (settings.UserSkillList.size - 1)){defenderReady++;}else{defenderReady = 0;}
            };//for
        };//if
//////////////////////////////////////////////////////////////////////////////////////////////
    if (settings.UserList.get(uid) == undefined){
        const RiderEmbed = new discord.RichEmbed()
              RiderEmbed.setColor(randomHex.generate())
              RiderEmbed.setAuthor(ActionLog + '!', settings.botpic)
              RiderEmbed.setDescription(uidname+" NOT RECONIZED")
        msg.channel.send({embed: RiderEmbed});
    } else if (settings.UserList.get(uid).HP < 1){
        const RiderEmbed = new discord.RichEmbed()
              RiderEmbed.setColor(randomHex.generate())
              RiderEmbed.setAuthor(ActionLog + '!', settings.botpic)
              RiderEmbed.setDescription("YOU ARE DEAD")
        msg.channel.send({embed: RiderEmbed});
    } else if ((attackerReady > 0) && (defenderReady > 0)){
                    var TotalCostReduc = parseInt(settings.UserList.get(uid)[CostReductSPECIALName]);
                    if (CostReductSPECIALName == "Strength"){
                        TotalCostReduc += Bonus_Strength;
                    }else if (CostReductSPECIALName == "Perception"){
                        TotalCostReduc += Bonus_Perception;
                    }else if (CostReductSPECIALName == "Endurance"){
                        TotalCostReduc += Bonus_Endurance;
                    }else if (CostReductSPECIALName == "Charisma"){
                        TotalCostReduc += Bonus_Charisma;
                    }else if (CostReductSPECIALName == "Intelligence"){
                        TotalCostReduc += Bonus_Intelligence;
                    }else if (CostReductSPECIALName == "Agility"){
                        TotalCostReduc += Bonus_Agility;
                    }else if (CostReductSPECIALName == "Luck"){
                        TotalCostReduc += Bonus_Luck;
                    };//if check on SPECIAL to ad bonus
                        TotalCostReduc += parseInt(CostReductSkillCount);
                        TotalCostReduc  = TotalCostReduc*powertotal;

                    var TotalLCK  = parseInt(settings.UserList.get(uid).Luck);
                        TotalLCK += Bonus_Luck;
                        TotalLCK += parseInt(SPECIALLuckSkillCount);
                        TotalLCK  = TotalLCK*powertotal;

                    var DMGBuffs = 0;
                    var TotalDMG = parseInt(settings.UserList.get(uid)[DamageSPECIALName]);
                    if (DamageSPECIALName == "Strength"){
                        TotalDMG += Bonus_Strength;
                    }else if (DamageSPECIALName == "Perception"){
                        TotalDMG += Bonus_Perception;
                    }else if (DamageSPECIALName == "Endurance"){
                        TotalDMG += Bonus_Endurance;
                    }else if (DamageSPECIALName == "Charisma"){
                        TotalDMG += Bonus_Charisma;
                    }else if (DamageSPECIALName == "Intelligence"){
                        TotalDMG += Bonus_Intelligence;
                    }else if (DamageSPECIALName == "Agility"){
                        TotalDMG += Bonus_Agility;
                    }else if (DamageSPECIALName == "Luck"){
                        TotalDMG += Bonus_Luck;
                    };//if check on SPECIAL to ad bonus
                        TotalDMG += parseInt(SPECIALSkillCount);
                        TotalDMG = TotalDMG*powertotal;
                        if (AwarenessCount > 1){
                        DMGBuffs += (AwarenessCount-1)*0.05;
                        };//if (AwarenessCount > 1)
                        if ((BlackWidowCount > 0) && (settings.UserList.get(uid).Gender == 1)){
                            DMGBuffs += (BlackWidowCount)*0.05;
                        };//if (AwarenessCount > 1)
                        if ((LadyKillerCount > 0) && (settings.UserList.get(uid).Gender == 0)){
                            DMGBuffs += (LadyKillerCount)*0.05;
                        };//if (AwarenessCount > 1)
                        if (BloddyMessCount > 0){
                            DMGBuffs += (BloddyMessCount)*0.05;
                        };//if (AwarenessCount > 1)
                        if (IronFistCount > 0){
                            DMGBuffs += (IronFistCount)*0.2;
                        };//if (AwarenessCount > 1)
                        TotalDMG += TotalDMG*DMGBuffs;
                        TotalDMG  = TotalDMG*DamageMultiplier;

                    var TotalSNEAK = parseInt(settings.UserList.get(uid)[ToSneakSPECIALName]);
                    if (ToSneakSPECIALName == "Strength"){
                        TotalSNEAK += Bonus_Strength;
                    }else if (ToSneakSPECIALName == "Perception"){
                        TotalSNEAK += Bonus_Perception;
                    }else if (ToSneakSPECIALName == "Endurance"){
                        TotalSNEAK += Bonus_Endurance;
                    }else if (ToSneakSPECIALName == "Charisma"){
                        TotalSNEAK += Bonus_Charisma;
                    }else if (ToSneakSPECIALName == "Intelligence"){
                        TotalSNEAK += Bonus_Intelligence;
                    }else if (ToSneakSPECIALName == "Agility"){
                        TotalSNEAK += Bonus_Agility;
                    }else if (ToSneakSPECIALName == "Luck"){
                        TotalSNEAK += Bonus_Luck;
                    };//if check on SPECIAL to ad bonus
                        TotalSNEAK += parseInt(SPECIALSneakSkillCount);
                        TotalSNEAK = (TotalSNEAK*powertotal)+(TotalLCK*0.05);

                    var TotalToHIT = parseInt(settings.UserList.get(uid)[ToHitSPECIALName]);
                    if (ToHitSPECIALName == "Strength"){
                        TotalToHIT += Bonus_Strength;
                    }else if (ToHitSPECIALName == "Perception"){
                        TotalToHIT += Bonus_Perception;
                    }else if (ToHitSPECIALName == "Endurance"){
                        TotalToHIT += Bonus_Endurance;
                    }else if (ToHitSPECIALName == "Charisma"){
                        TotalToHIT += Bonus_Charisma;
                    }else if (ToHitSPECIALName == "Intelligence"){
                        TotalToHIT += Bonus_Intelligence;
                    }else if (ToHitSPECIALName == "Agility"){
                        TotalToHIT += Bonus_Agility;
                    }else if (ToHitSPECIALName == "Luck"){
                        TotalToHIT += Bonus_Luck;
                    };//if check on SPECIAL to ad bonus
                        TotalToHIT += parseInt(SPECIALToHitSkillCount);
                        TotalToHIT = (TotalToHIT*powertotal)+(TotalLCK*0.05);
                        if (AwarenessCount > 1){
                        TotalToHIT += (TotalDMG*(AwarenessCount-1)*0.05);
                        };//if (AwarenessCount > 1)
                        TotalToHIT += ToHitBonus;
                        if ((settings.UserList.get(uid).Stunned_Duration > 0)){
                            TotalToHIT = TotalToHIT*0.8;
                        };//reduce to hit and dodge
                        if ((settings.UserList.get(uid).Paralyzed_Duration > 0)){
                            TotalToHIT = 0;
                        };//zero out dodge if restrained or paralyzed

                    BaseCritGain = BaseCritGain + (TotalLCK*0.05);

                    var TotalLCKDefender  = 0;
                    var TotalDODGE = 0;

                        if (settings.UserList.get(mentionedid) != undefined){
                            TotalLCKDefender = parseInt(settings.UserList.get(mentionedid).Luck);
                            TotalDODGE = parseInt(settings.UserList.get(mentionedid)[ToDodgeSPECIALName]);
                        };//if (settings.UserList.get(mentionedid) != undefined)

                        TotalLCKDefender += Bonus_Luck2;
                        TotalLCKDefender += parseInt(SPECIALLuckSkillCountDefender);
                        TotalLCKDefender  = TotalLCKDefender*powertotalDefender;

                    if (ToDodgeSPECIALName == "Strength"){
                        TotalDODGE += Bonus_Strength2;
                    }else if (ToDodgeSPECIALName == "Perception"){
                        TotalDODGE += Bonus_Perception2;
                    }else if (ToDodgeSPECIALName == "Endurance"){
                        TotalDODGE += Bonus_Endurance2;
                    }else if (ToDodgeSPECIALName == "Charisma"){
                        TotalDODGE += Bonus_Charisma2;
                    }else if (ToDodgeSPECIALName == "Intelligence"){
                        TotalDODGE += Bonus_Intelligence2;
                    }else if (ToDodgeSPECIALName == "Agility"){
                        TotalDODGE += Bonus_Agility2;
                    }else if (ToDodgeSPECIALName == "Luck"){
                        TotalDODGE += Bonus_Luck2;
                    };//if check on SPECIAL to ad bonus
                        TotalDODGE += parseInt(SPECIALDodgeSkillCount);
                        TotalDODGE = (TotalDODGE*powertotalDefender)+(TotalLCKDefender*0.05);
                        TotalDODGE += DodgeBonus;
                    if (settings.UserList.get(mentionedid) != undefined){                        
                        if ((settings.UserList.get(mentionedid).Stunned_Duration > 0)){
                            TotalDODGE = TotalDODGE*0.8;
                        };//reduce to hit and dodge
                    };//if (settings.UserList.get(mentionedid) != undefined)
                    if (settings.UserList.get(mentionedid) != undefined){                        
                        if ((settings.UserList.get(mentionedid).Paralyzed_Duration > 0) ||
                            (settings.UserList.get(mentionedid).Restrained_Duration > 0)){
                            TotalDODGE = 0;
                        };//zero out dodge if restrained or paralyzed
                    };//if (settings.UserList.get(mentionedid) != undefined)

                    var TotalSneakDetect = 0;
                    if (settings.UserList.get(mentionedid) != undefined){                        
                        TotalSneakDetect = parseInt(settings.UserList.get(mentionedid)[SneakDetectSPECIALName]);
                    };//if (settings.UserList.get(mentionedid) != undefined)
                    if (SneakDetectSPECIALName == "Strength"){
                        TotalSneakDetect += Bonus_Strength2;
                    }else if (SneakDetectSPECIALName == "Perception"){
                        TotalSneakDetect += Bonus_Perception2;
                    }else if (SneakDetectSPECIALName == "Endurance"){
                        TotalSneakDetect += Bonus_Endurance2;
                    }else if (SneakDetectSPECIALName == "Charisma"){
                        TotalSneakDetect += Bonus_Charisma2;
                    }else if (SneakDetectSPECIALName == "Intelligence"){
                        TotalSneakDetect += Bonus_Intelligence2;
                    }else if (SneakDetectSPECIALName == "Agility"){
                        TotalSneakDetect += Bonus_Agility2;
                    }else if (SneakDetectSPECIALName == "Luck"){
                        TotalSneakDetect += Bonus_Luck2;
                    };//if check on SPECIAL to ad bonus
                        TotalSneakDetect += parseInt(SPECIALSneakDetectSkillCount);
                        TotalSneakDetect = TotalSneakDetect*powertotalDefender;

                    var TotalRESIST = 0;
                    if (settings.UserList.get(mentionedid) != undefined){                        
                        TotalRESIST = parseInt(settings.UserList.get(mentionedid)[ResistSPECIALName]);
                    };//if (settings.UserList.get(mentionedid) != undefined)
                        TotalRESIST += parseInt(SPECIALResistSkillCount);
                    if (DamageType == 0){//Balistic
                        TotalRESIST += Bonus_BalisticResist2;
                    }else if (DamageType == 1){//fire
                        TotalRESIST += Bonus_FireResist2;
                    }else if (DamageType == 2){//cryo
                        TotalRESIST += Bonus_CryoResist2;
                    }else if (DamageType == 3){//poison
                        TotalRESIST += Bonus_PosionResist2;
                    }else if (DamageType == 4){//toxic
                        TotalRESIST += Bonus_ToxicResist2;
                    }else if (DamageType == 5){//energy
                        TotalRESIST += Bonus_EnergyResist2;
                    }else if (DamageType == 6){//special
                        TotalRESIST += Bonus_SpecialResist2;
                    }else if (DamageType == 7){//electrical
                        TotalRESIST += Bonus_ElecResist2;
                    };//if check on damage type to ad bonus
                        TotalRESIST = TotalRESIST*powertotalDefender;

                    if (FreeCast == "no"){
                        APCost = APCost - (APCost*(CostReductPercent*(TotalCostReduc)));
                        if (APCost < 1){APCost = 1};
                    }else {
                        APCost = 0;
                    };//if (FreeCast == "no")

                    CritMulti = CritMulti + (BetterCritsCount * 0.5);
                    CritChance = CritChance + (TotalLCK*0.05); 
                    var CritThreshhold = 100 - CritChance

                    var HitChance = (TotalToHIT/TotalDODGE)*100;
                        HitChance = HitChance + (TotalLCK*0.05);
                    var HitThreshhold = 100 - HitChance

                    var SneakChance = (TotalSNEAK/TotalSneakDetect)*100;
                    if (SneakCount > 0){
                        SneakChance += (SneakChance*0.2)+((SneakChance*0.1)*(SneakCount-1));
                    };//if (SneakCount > 0)
                        SneakChance = SneakChance + (TotalLCK*0.05);
                    var SneakThreshhold = 100 - SneakChance

                    if (IronFistCount >= 2){DisarmChance += 15;};
                    if (IronFistCount >= 3){CrippleChance += 15;};
                    if (IronFistCount >= 4){CrippleChance += 10;};
                    if (IronFistCount >= 5){ParalyzeChance += 15;};

                    if ((DamageStyle == 0) || (DamageStyle == 1)){//melle or hand to hand
                        if (KonoichiCount >= 1){SneakMulti += 2.5;};
                        if (KonoichiCount >= 2){SneakMulti += 0.5;};
                        if (KonoichiCount >= 3){SneakMulti += 0.5;};
                        if (KonoichiCount >= 4){SneakMulti += 0.5;};
                        if (KonoichiCount >= 5){SneakMulti += 0.5;};
                        if (NinjaCount >= 1){
                            SneakMulti += 4;
                            CritMulti += 3;
                        };//if (NinjaCount >= 1)
                        if (NinjaCount >= 2){
                            SneakMulti += 1;
                            CritMulti += 1;
                        };//if (NinjaCount >= 2)
                        if (NinjaCount >= 3){
                            SneakMulti += 5;
                            CritMulti += 4;
                        };//if (NinjaCount >= 3)
                        if (NinjaCount >= 4){
                            SneakMulti += 2;
                            CritMulti += 2;
                        };//if (NinjaCount >= 4)
                        if (NinjaCount >= 5){
                            SneakMulti += 2;
                            CritMulti += 2;
                        };//if (NinjaCount >= 5)
                    } else {
                        if (NinjaCount >= 1){
                            SneakMulti += 2.5;
                            CritMulti += 2.25;
                        };//if (NinjaCount >= 1)
                        if (NinjaCount >= 2){
                            SneakMulti += 0.5;
                            CritMulti += 0.25;
                        };//if (NinjaCount >= 2)
                        if (NinjaCount >= 3){
                            SneakMulti += 0.5;
                            CritMulti += 0.25;
                        };//if (NinjaCount >= 3)
                        if (NinjaCount >= 4){
                            SneakMulti += 0.5;
                            CritMulti += 0.25;
                        };//if (NinjaCount >= 4)
                        if (NinjaCount >= 5){
                            SneakMulti += 0.5;
                            CritMulti += 0.25;
                        };//if (NinjaCount >= 5)
                    };//if ((DamageStyle == 0) || (DamageStyle == 1))
                    var CriticalMeter = settings.UserList.get(uid).Critical_Meter_Percent;

                    if (settings.UserList.get(mentionedid) != undefined){
                        if (TargetStat == 'HP'){
                            MaxHMI = settings.MaxHPCalculator(defenderLevel, TotalRESIST, powertotalDefender, Bonus_HP2, 0/*LifegiverCount2*/);
                        } else if (TargetStat == 'AP'){
                            MaxHMI = settings.MaxMPCalculator(defenderLevel, TotalRESIST, powertotalDefender, Bonus_MP2, 0/*bonus skill count*/);
                        } else if (TargetStat == 'IP'){
                            MaxHMI = settings.MaxIPCalculator(defenderLevel, TotalRESIST, powertotalDefender, Bonus_IP2, 0/*bonus skill count*/);
                        };//if (TargetStat == 'HP')
                        if ((MaxHMI == undefined) || (MaxHMI == null)){MaxHMI = 1;}

                        if (TargetStat == 'HP'){
                            CurrentHMI = settings.UserList.get(mentionedid).HP
                        } else if (TargetStat == 'AP'){
                            CurrentHMI = settings.UserList.get(mentionedid).MP
                        } else if (TargetStat == 'IP'){
                            CurrentHMI = settings.UserList.get(mentionedid).IP
                        };//if (TargetStat == 'HP')
                        if ((CurrentHMI == undefined) || (CurrentHMI == null)){CurrentHMI = 1;}

                        if (TargetStat == 'HP'){
                            BaseCurrentHMI = settings.UserList.get(mentionedid).HP
                        } else if (TargetStat == 'AP'){
                            BaseCurrentHMI = settings.UserList.get(mentionedid).MP
                        } else if (TargetStat == 'IP'){
                            BaseCurrentHMI = settings.UserList.get(mentionedid).IP
                        };//if (TargetStat == 'HP')
                        if ((BaseCurrentHMI == undefined) || (BaseCurrentHMI == null)){BaseCurrentHMI = 1;}
                    };//if (settings.UserList.get(mentionedid) != undefined)

                    if (settings.UserList.get(uid) != undefined){
                        if (CostStat == 'HP'){
                            CurrentCostStat = settings.UserList.get(uid).HP
                        } else if (CostStat == 'AP'){
                            CurrentCostStat = settings.UserList.get(uid).MP
                        } else if (CostStat == 'IP'){
                            CurrentCostStat = settings.UserList.get(uid).IP
                        };//if (CostStat == 'HP')
                        if ((CurrentCostStat == undefined) || (CurrentCostStat == null)){CurrentCostStat = 1;}
                    };//if (settings.UserList.get(mentionedid) != undefined)

/////////////////////////////////////////////////////////////////////
                    combatlog = "[Level:"+attackerLevel.toLocaleString()+" | Power:"+powertotal.toLocaleString()+"] ";
                    combatlog += "**"+uidname+"**";
                    combatlog += " is "+settings.MoveType(TargetStatModifier);
                    if (uid != mentionedid){
                        combatlog += "\n*[Level:"+defenderLevel.toLocaleString()+" | Power:"+powertotalDefender.toLocaleString()+"] ";
                    }else{
                        combatlog += " *" + settings.GenderString(settings.UserList.get(uid).Gender);
                    };//if (uid != mentionedid)

                    if (!NPCFlag.startsWith('!')){
                        combatlog += NPCFlag;}
                    else {
                        if (uid != mentionedid){
                        combatlog += mentionedname;
                        };//if (uid != mentionedid)
                    };//if (!NPCFlag.startsWith('!'))
                    combatlog += "'s* ***"+TargetStat+"***";
                    combatlog += "\n"+settings.DamageStyle(AutomaticFlag);
                    combatlog += " ["+settings.DamageName(DamageType);
                    combatlog += " - "+settings.DamageStyle(DamageStyle);
                    combatlog += " {Audio Level: "+settings.AttackSoundLevel(AttackSoundLevel)+"}]";
                    combatlog += "\n";
                    if (APCost > 0){
                        combatlog += "for **"+(APCost*rankstoadd).toLocaleString()+"** of *"+CurrentCostStat.toLocaleString()+" "+CostStat+"*\n";
                    };//if (APCost > 0)
                            if ((settings.UserList.get(uid).Stunned_Duration > 0)){
                                combatlog += "\n"+uidname+" is **Stunned for "+settings.UserList.get(uid).Stunned_Duration+" turns** and has 20% reduced Accuracy and Dodge!\n";
                            };//zero out dodge if restrained or paralyzed                      

                    for (var u = 0; u < rankstoadd ; u++){
                        if (u > 0){
                            TotalDMG = TotalDMG * MultiHitDmgDecay;
                            HitRoll = Math.floor(Math.random() * 100);
                            CritRoll = Math.floor(Math.random() * 100);
                            HitChance = HitChance * MultiHitAccDecay;
                            HitThreshhold = 100 - HitChance
                        };//if (u > 0)

                        var UpperTotal = Math.floor(TotalDMG*powertotal)
                        var LowerTotal = Math.floor(UpperTotal*0.1); 
                        var combatDMG = settings.getRandomInt(LowerTotal, UpperTotal);
                        var MaxDMGPercent = (combatDMG/UpperTotal) * 100;

                        combatlog += "\n";
                        if ((IsSneaking.startsWith('sneak')) && (SneakRoll >= SneakThreshhold)){
                            UpperTotal    = UpperTotal*SneakMulti;
                            LowerTotal    = LowerTotal*SneakMulti; 
                            combatDMG     = combatDMG*SneakMulti;
                            MaxDMGPercent = (combatDMG/UpperTotal) * 100;
                            combatlog += '**UNDETECTED!** ';
                        } else if (IsSneaking.startsWith('sneak')){
                            combatlog += '**DETECTED!** ';
                        };//if ((IsSneaking.startsWith('sneak')) && (SneakRoll >= SneakThreshhold))

                        if ((HitRoll > 0) && 
                            (manualCrit.startsWith('crit')) && 
                            (parseInt(AttackerBankedCrits) > 0)){
                                HitRoll += settings.HPLimit;
                            };//if manual crit is valid and hit roll is > 0 ignore the roll and just cruit
                        if (HitRoll >= HitThreshhold){
                            if (
                                (parseInt(AttackerBankedCrits) > 0) && 
                                (manualCrit.startsWith('crit'))){
                                var banks = parseInt(AttackerBankedCrits);
                                    banks = banks - 1;
                                var updateAttackerCrits  = "UPDATE " + settings.dbtable + " ";
                                    updateAttackerCrits += "SET ";
                                    updateAttackerCrits += "Banked_Criticals = " + banks + " ";
                                    updateAttackerCrits += "WHERE ID = '" + uid + "'";
                                connection.query(updateAttackerCrits);
                                AttackerBankedCrits = banks;
                                combatlog += "{Manual}**CRITICAL HIT!**";
                                CritSucceeded = 1;
                            } else if (!manualCrit.startsWith('crit')){
                                if (CritRoll >= CritThreshhold){
                                    combatlog += "{Auto}**CRITICAL HIT!**";
                                    CritSucceeded = 1;
                                } else {
                                    combatlog += "**HIT!**"
                                };//if (CritRoll >= CritThreshhold)
                            };//if ((parseInt(AttackerBankedCrits) > 0)...

                                FourLeafChance = (15*FourLeafCount);
                                var FourLeafThreshhold = 100 - FourLeafChance;
                                var CritGainLimit = AttackerCritPercent + (BaseCritGain*100);
                                if (KonoichiCount >= 1){CritGainLimit += 0.05;};
                                if (KonoichiCount >= 2){CritGainLimit += 0.02;};
                                if (KonoichiCount >= 3){CritGainLimit += 0.02;};
                                if (KonoichiCount >= 4){CritGainLimit += 0.02;};
                                if (KonoichiCount >= 5){CritGainLimit += 0.03;};
                                if (FourLeafRoll >= FourLeafThreshhold){CritGainLimit += 100;}
                                var CritBankerTotal = AttackerBankedCrits;
                                if (CritGainLimit > (((CritBankerCount+1)+CritBankerTotal)*100)){CritBankerTotal = (CritBankerCount+1)};
                                if (CritGainLimit > 100){CritGainLimit = 100;}
                                AttackerBankedCrits = CritBankerTotal;
                                AttackerCritPercent = CritGainLimit;
                                var updateAttackerCrits  = "UPDATE " + settings.dbtable + " ";
                                    updateAttackerCrits += "SET ";
                                    updateAttackerCrits += "Critical_Meter_Percent = " + CritGainLimit + ", ";
                                    updateAttackerCrits += "Banked_Criticals = " + CritBankerTotal + " ";
                                    updateAttackerCrits += "WHERE ID = '" + uid + "'";
                                connection.query(updateAttackerCrits, function(err_db,rows_db){
                                if (err_db) {console.log("Error on UPDATE crits: "+ err_db);}
                                })

                            if (CritSucceeded == 1){
                                UpperTotal    = UpperTotal/SneakMulti;
                                LowerTotal    = LowerTotal/SneakMulti; 
                                combatDMG     = combatDMG/SneakMulti;
                                MaxDMGPercent = (combatDMG/UpperTotal) * 100;
                                if ((IsSneaking.startsWith('sneak')) && (SneakRoll >= SneakThreshhold)){
                                    combatlog    += " [Damage: "+(CritMulti+SneakMulti)+"]";
                                    UpperTotal    = UpperTotal*(CritMulti+SneakMulti);
                                    LowerTotal    = LowerTotal*(CritMulti+SneakMulti); 
                                    combatDMG     = combatDMG*(CritMulti+SneakMulti);
                                    MaxDMGPercent = (combatDMG/UpperTotal) * 100;
                                } else {
                                    combatlog    += " [Damage: "+CritMulti+"]";
                                    UpperTotal    = UpperTotal*CritMulti;
                                    LowerTotal    = LowerTotal*CritMulti; 
                                    combatDMG     = combatDMG*CritMulti;
                                    MaxDMGPercent = (combatDMG/UpperTotal) * 100;
                                }//if ((IsSneaking.startsWith('sneak')) && (SneakRoll >= SneakThreshhold))
                            };//if (CritSucceeded == 1)
                        
                            if (TargetStatModifier  == '-'){
                                combatlog += "\nDamage ";
                            } else if (TargetStatModifier  == '+'){
                                combatlog += "\nRestoration ";
                            };//if (TargetStatModifier  == '-')

                            if (combatDMG > 0){
                                combatlog += "Roll: **"+combatDMG.toLocaleString()+"** *("+MaxDMGPercent.toLocaleString()+"%)*";
                            } else {
                                combatlog += "was negligiable.";                            
                            };//if (combatDMG > 0)
                        
                            if (TargetStatModifier  == '-'){
                                if (DamageType == 0){//Balistic
                                    totalDT += Bonus_BalisticDT2;
                                }else if (DamageType == 1){//fire
                                    totalDT += Bonus_FireDT2;
                                }else if (DamageType == 2){//cryo
                                    totalDT += Bonus_CryoDT2;
                                }else if (DamageType == 3){//poison
                                    totalDT += Bonus_PosionDT2;
                                }else if (DamageType == 4){//toxic
                                    totalDT += Bonus_ToxicDT2;
                                }else if (DamageType == 5){//energy
                                    totalDT += Bonus_EnergyDT2;
                                }else if (DamageType == 6){//special
                                    totalDT += Bonus_SpecialDT2;
                                }else if (DamageType == 7){//electrical
                                    totalDT += Bonus_ElecDT2;
                                };//if check on damage type to ad bonus
                                if (totalDT > 0){
                                combatlog += "\n";
                                combatlog += totalDT + " Points of damage will be negated by DT/Armor."
                                };//if (totalDT > 0)

                                if (IgnoreArmor > 0){
                                    combatlog += "\n";
                                    if (IgnoreArmorPercentOrStatic == 0){
                                        combatlog += IgnoreArmor + " Points of armor"
                                        totalDT -= IgnoreArmor;
                                    }else{
                                        combatlog += IgnoreArmor + "% armor"
                                        totalDT = totalDT * ((100 - IgnoreArmor)/100);
                                    }//if (IgnoreArmorPercentOrStatic == 0)
                                    combatlog += ' will be ignored.';
                                };//if (IgnoreArmor > 0)

                            if ((settings.UserList.get(mentionedid) != undefined)){
                                if ((settings.UserList.get(mentionedid).Paralyzed_Duration > 0)){
                                    combatlog += "\n"+mentionedname+" is **Paralyzed for "+settings.UserList.get(mentionedid).Paralyzed_Duration+" turns** and can not Dodge!\n";
                                };//zero out dodge if restrained or paralyzed

                                if ((settings.UserList.get(mentionedid).Restrained_Duration > 0)){
                                    combatlog += "\n"+mentionedname+" is **Restrained for "+settings.UserList.get(mentionedid).Restrained_Duration+" turns** and can not Dodge!\n";
                                };//zero out dodge if restrained or paralyzed                      

                                if ((settings.UserList.get(mentionedid).Stunned_Duration > 0)){
                                    combatlog += "\n"+mentionedname+" is **Stunned for "+settings.UserList.get(mentionedid).Stunned_Duration+" turns** and has 20% reduced Accuracy and Dodge!\n";
                                };//zero out dodge if restrained or paralyzed                      
                            };//if ((settings.UserList.get(mentionedid) != undefined)){

                                var DisarmThreshhold = 100 - DisarmChance; 
                                if (DisarmRoll >= DisarmThreshhold){
                                    combatlog += "\n"+mentionedname+" was disarmed!";
                                };//if (DisarmRoll >= DisarmThreshhold)

                                var CrippleThreshhold = 100 - CrippleChance; 
                                if (CrippleRoll >= CrippleThreshhold){
                                    combatlog += "\n"+mentionedname+" was crippled!";
                                };//if (CrippleRoll >= CrippleThreshhold)

                                var ParalyzeThreshhold = 100 - ParalyzeChance; 
                                if (ParalyzeRoll >= ParalyzeThreshhold){
                                    combatlog += "\n"+mentionedname+" was paralyzed for "+ParalyzeDuration+" additional turns {Can not Dodge, can not Attack}!";
                                    ParalyzeDuration += settings.UserList.get(mentionedid).Paralyzed_Duration;
                                    var update  = "UPDATE " + settings.dbtable + " ";
                                        update += "SET ";
                                        update += "Paralyzed_Duration = " + ParalyzeDuration + " ";
                                        update += "WHERE ID = '" + mentionedid + "'";
                                    connection.query(update);
                                };//if (ParalyzeRoll >= ParalyzeThreshhold)

                                var StunThreshhold = 100 - StunChance; 
                                if (StunRoll >= StunThreshhold){
                                    combatlog += "\n"+mentionedname+" was stunned for "+StunDuration+" additional turns {Accurracy and Dodge reduced}!";
                                    StunDuration += settings.UserList.get(mentionedid).Stunned_Duration;
                                    var update  = "UPDATE " + settings.dbtable + " ";
                                        update += "SET ";
                                        update += "Stunned_Duration = " + StunDuration + " ";
                                        update += "WHERE ID = '" + mentionedid + "'";
                                    connection.query(update);
                                };//if (StunRoll >= StunThreshhold)

                                var RestrainThreshhold = 100 - RestrainChance; 
                                if (RestrainRoll >= RestrainThreshhold){
                                    combatlog += "\n"+mentionedname+" was restrained for "+RestrainDuration+" additional turns {Can not Dodge}!";
                                    RestrainDuration += settings.UserList.get(mentionedid).Restrained_Duration;
                                    var update  = "UPDATE " + settings.dbtable + " ";
                                        update += "SET ";
                                        update += "Restrained_Duration = " + RestrainDuration + " ";
                                        update += "WHERE ID = '" + mentionedid + "'";
                                    connection.query(update);
                                };//if (StunRoll >= StunThreshhold)

                                if (DamageType == 0){//"Balistic"
                                    ResistUPPER = settings.ResistBALISTICCalculator(defenderLevel, TotalRESIST, 0/*ToughnessCount2*/, powertotalDefender);
                                } else if (DamageType == 1){//"Fire"
                                    ResistUPPER = settings.ResistFIRECalculator(defenderLevel, TotalRESIST, 0/*FireproofCount*/, powertotalDefender);
                                } else if (DamageType == 2){//"Cryo"
                                    ResistUPPER = settings.ResistCRYOCalculator(defenderLevel, TotalRESIST, 0/*ToughnessCount2*/, powertotalDefender);
                                } else if (DamageType == 3){//"Poison"
                                    ResistUPPER = settings.ResistPOSIONCalculator(defenderLevel, TotalRESIST, 0/*ToughnessCount2*/, powertotalDefender);
                                } else if (DamageType == 4){//"Toxic"
                                    ResistUPPER = settings.ResistTOXICCalculator(defenderLevel, TotalRESIST, 0/*ToughnessCount2*/, powertotalDefender);
                                } else if (DamageType == 5){//"Energy"
                                    ResistUPPER = settings.ResistENERGYCalculator(defenderLevel, TotalRESIST, 0/*ToughnessCount2*/, powertotalDefender);
                                } else if (DamageType == 6){//"Special"
                                    ResistUPPER = 0;
                                } else if (DamageType == 7){//"electrical"
                                    ResistUPPER = settings.ResistENERGYCalculator(defenderLevel, TotalRESIST, 0/*ToughnessCount2*/, powertotalDefender);
                                }//else if (DamageType == 0)

                                if ((ResistUPPER == undefined) || (ResistUPPER == null)){ResistUPPER = 1;}
                                ResistLOWER      = Math.floor(ResistUPPER*0.1); 
                                ResistRoll       = settings.getRandomInt(ResistLOWER, ResistUPPER);
                                ResistRoll      += totalDT;
                                MaxRESISTPercent = (ResistRoll/ResistUPPER) * 100;

                                combatlog += "\n"+mentionedname + ' resisted for **' + ResistRoll.toLocaleString() + '**!\n';
                                if (ResistRoll >= combatDMG){
                                    combatDMG = 0;
                                    combatlog += uidname + ' could not breach ' + mentionedname + '\'s defenses and **deals no damage**!\n'
                                } else {
                                    combatDMG = combatDMG - ResistRoll;
                                };//if (ResistRoll >= combatDMG)
                            };//if (TargetStatModifier  == '-')

                            if (TargetStatModifier  == '-'){
                                CurrentHMI = CurrentHMI - combatDMG;
                            } else if (TargetStatModifier  == '+'){
                                CurrentHMI = CurrentHMI + combatDMG;
                            };//if (TargetStatModifier  == '-')
                            TotalDMGStack = TotalDMGStack + combatDMG;

                        } else {
                            if ((settings.UserList.get(uid).Paralyzed_Duration > 0)){
                                combatlog += "\n"+uidname+" is **Paralyzed for "+settings.UserList.get(uid).Paralyzed_Duration+" turns** and can not Attack!";
                            } else {
                                combatlog += "**MISS**";
                            }//zero out dodge if restrained or paralyzed
                        };//if/else for hit threshhold
///////////////////////////////////////////////////////////////////////////////////////////                
                            if ((flag.startsWith('debug')) && (u == 0)){
                                combatlog2 += "\n\nDamage will drop to "+(MultiHitDmgDecay*100).toLocaleString()+'% of the previous hit on a multi hit.';
                                combatlog2 += "\nAccuracy will drop to "+(MultiHitAccDecay*100).toLocaleString()+'% of the previous tohit on a multi hit.';
                            };//if (flag.startsWith('debug'))
                                combatlog2 += '\n\nNeed to roll higher then '+(HitThreshhold).toLocaleString()+'%';
                                combatlog2 += '\nRolling for a hit...'+HitRoll.toLocaleString()+'%';
                                combatlog2 += "\n\nATTACK "+u+":{Auto} Crit Chance is: *"+CritChance.toLocaleString()+'%*';
                                combatlog2 += "\n**"+CritThreshhold.toLocaleString()+"%** needed...";
                                combatlog2 += "***"+CritRoll.toLocaleString()+'%***';

                                combatlog2 += "\nDamage Range: **"+LowerTotal.toLocaleString()+"** - **"+UpperTotal.toLocaleString()+"**";
                                combatlog2 += "\nDamage Roll: **"+combatDMG.toLocaleString()+"** *("+MaxDMGPercent.toLocaleString()+"%)*";

                                combatlog2 += "\nDefense Range: **"+ResistLOWER.toLocaleString()+"** - **"+ResistUPPER.toLocaleString()+"**";
                                combatlog2 += "\nDefense Roll: **"+ResistRoll.toLocaleString()+"** *("+MaxRESISTPercent.toLocaleString()+"%)*";

                                var DisarmThreshhold = 100 - DisarmChance; 
                                combatlog4 += '\n\nATTACK '+u+':*Rolling for Status Effects:*';
                                combatlog4 += '\n**Disarm** '+DisarmChance+'% Chance - Need '
                                combatlog4 += (DisarmThreshhold).toLocaleString()+'%';
                                combatlog4 += '\nRolling for disarm...'+DisarmRoll.toLocaleString()+'%';

                                var CrippleThreshhold = 100 - CrippleChance; 
                                combatlog4 += '\n**Cripple** '+CrippleChance+'% Chance - Need '
                                combatlog4 += (CrippleThreshhold).toLocaleString()+'%';
                                combatlog4 += '\nRolling for cripple...'+CrippleRoll.toLocaleString()+'%';

                                var ParalyzeThreshhold = 100 - ParalyzeChance; 
                                combatlog4 += '\n**Paralyze** '+ParalyzeChance+'% Chance - Need '
                                combatlog4 += (ParalyzeThreshhold).toLocaleString()+'%';
                                combatlog4 += '\nRolling for paralyze...'+ParalyzeRoll.toLocaleString()+'%';
                                combatlog4 += '\nCurrent paralyze duration is '+ParalyzeDuration.toLocaleString()+' turns.';

                                var StunThreshhold = 100 - StunChance; 
                                combatlog4 += '\n**Stun** '+StunChance+'% Chance - Need '
                                combatlog4 += (StunThreshhold).toLocaleString()+'%';
                                combatlog4 += '\nRolling for stun...'+StunRoll.toLocaleString()+'%';
                                combatlog4 += '\nCurrent stun duration is '+StunDuration.toLocaleString()+' turns.';

                                var RestrainThreshhold = 100 - RestrainChance; 
                                combatlog4 += '\n**Restrain** '+RestrainChance+'% Chance - Need '
                                combatlog4 += (RestrainThreshhold).toLocaleString()+'%';
                                combatlog4 += '\nRolling for restrain...'+RestrainRoll.toLocaleString()+'%';
                                combatlog4 += '\nCurrent restrain duration is '+RestrainDuration.toLocaleString()+' turns.';
//////////////////////////////////////////////////////////////////////////////////////////////
                    };//for (var u = 0; u < rankstoadd ; u++)

                    combatlog += "\n\nThe Critical Meter will fill: *";
                    if ((BaseCritGain*100) > 100){
                        combatlog +="x"+BaseCritGain.toLocaleString()+"*";
                    } else {
                        combatlog +=(BaseCritGain*100).toLocaleString()+"%* of *"+CriticalMeter+"%*";                    
                    };//if ((BaseCritGain*100) > 100)
                    combatlog += " per attack.";
                    if (rankstoadd > 1){
                    combatlog += "\nCombined Damage: **"+TotalDMGStack.toLocaleString()+"**";
                    };// (rankstoadd > 1)
/////////////////////////////////////////////////////////////////////////////////////////////////
/**********************************************************************************************/
/////////////////////////////////////////////////////////////////////////////////////////////////
                    //if (CurrentHMI <= 0){CurrentHMI = 0;};
                    if (CurrentHMI > (10*MaxHMI)){CurrentHMI = (10*MaxHMI);};
                    if (TotalDMGStack > (10*MaxHMI)){TotalDMGStack = (10*MaxHMI);};
                    if ((APCost*rankstoadd) <= CurrentCostStat){
                        var ModifiedCost = CurrentCostStat - (APCost*rankstoadd);  
                        if ((attackerLevel != null) && (attackerLevel != undefined) && (attackerLevel != 0)){
                            if (CostStat == 'HP'){
                                connection.query("UPDATE " + settings.dbtable + " SET Current_HP = " + ModifiedCost + " WHERE ID = '" + uid + "'");
                                AttackerCurrentHP = ModifiedCost; 
                            } else if (CostStat == 'AP'){
                                connection.query("UPDATE " + settings.dbtable + " SET Current_MP = " + ModifiedCost + " WHERE ID = '" + uid + "'");
                                AttackerCurrentAP = ModifiedCost; 
                            } else if (CostStat == 'IP'){
                                connection.query("UPDATE " + settings.dbtable + " SET Current_IP = " + ModifiedCost + " WHERE ID = '" + uid + "'");
                                AttackerCurrentIP = ModifiedCost;
                            };//if (CostStat == 'HP')
                        };//if ((attackerLevel != null)
                        if ((defenderLevel != null) && (defenderLevel != undefined) && (defenderLevel != 0)){
                            if ((BaseCurrentHMI <= 0) && (TargetStatModifier  != '+')){
                                combatlog += 'But ' + mentionedname + ' is already defeated!\n**You\'re beating a dead ' + settings.PlayerClassName(settings.UserList.get(mentionedid).CLASS_ID_Boost, "no") + '**! *Stop already*!\n';
                            } else if (CurrentHMI >= settings.HPFloor){
                                    if (TargetStat == 'HP'){
                                        connection.query("UPDATE " + settings.dbtable + " SET Current_HP = " + CurrentHMI + " WHERE ID = '" + mentionedid + "'");
                                        DefenderCurrentHP = CurrentHMI; 
                                    } else if (TargetStat == 'AP'){
                                        connection.query("UPDATE " + settings.dbtable + " SET Current_MP = " + CurrentHMI + " WHERE ID = '" + mentionedid + "'");
                                        DefenderCurrentAP = CurrentHMI; 
                                    } else if (TargetStat == 'IP'){
                                        connection.query("UPDATE " + settings.dbtable + " SET Current_IP = " + CurrentHMI + " WHERE ID = '" + mentionedid + "'");
                                        DefenderCurrentIP = CurrentHMI;
                                    };//if (TargetStat == 'HP')
                            } else if ((CurrentHMI <= 0) && (TargetStatModifier  != '+')){
                                    var DefenderSQLUpdate  = "UPDATE " + settings.dbtable + " ";
                                        DefenderSQLUpdate += "SET ";
                                        DefenderSQLUpdate += "CLASS_ID = 0, CLASS_ID_Sub = 0, ";
                                        DefenderSQLUpdate += "CLASS_ID_Sub2 = 0, CLASS_ID_Sub3 = 0, ";
                                        DefenderSQLUpdate += "CLASS_ID_Sub4 = 0, Power_Mult = 1 ";
                                        DefenderSQLUpdate += "WHERE ID = '" + mentionedid + "'";
                                    connection.query(DefenderSQLUpdate);
                                    DefenderCLASS_ID = 0;
                                    DefenderCLASS_ID_Sub = 0;
                                    DefenderCLASS_ID_Sub2 = 0;
                                    DefenderCLASS_ID_Sub3 = 0;
                                    DefenderCLASS_ID_Sub4 = 0;
                                    DefenderPower_Mult = 1;
                                    combatlog += '\n**'+ mentionedname + ' was DEFEATED/Forced Dehenshin (HP < 1)**\nPower Multiplier and class have been reset.';
                                    console.log('DEFEATED! (HP < 1) Forced Dehenshin ~ Reset Class/Power of '+ mentionedname + ' with user id of ' + mentionedid);
                                };//if (CurrentHMI <= 0)
                        };//if ((defenderLevel != null)
                    };//if ((APCost*rankstoadd) <= CurrentCostStat)
/////////////////////////////////////////////////////////////////////////////////////////////////
/**********************************************************************************************/
/////////////////////////////////////////////////////////////////////////////////////////////////
                    var HMIDifference = (CurrentHMI/MaxHMI)*100;
                    combatlog += '\n**' + CurrentHMI.toLocaleString() + '** *(' + HMIDifference.toLocaleString() + '%)* of **' + MaxHMI.toLocaleString() + ' '+TargetStat+'** of *' + mentionedname + '*\'s remains!'

                    if (flag.startsWith('debug')){
                        combatlog3 += "\nInternal Database returned **"+settings.UserList.size+"** Valid players.";

                        combatlog3 += '\n\n**ATTACKER:**\n'+DamageSPECIALName+' is Damage SPECIAL: ';
                        combatlog3 += settings.UserList.get(uid)[DamageSPECIALName]+' Base ';
                        combatlog3 += ' + '+SPECIALSkillCount+' bonus';
                        combatlog3 += "\n"+settings.PlayerPerkName(SPECIALSkillID)+" will buff Damage."

                        combatlog3 += '\n'+ToHitSPECIALName+' is ToHit SPECIAL: ';
                        combatlog3 += settings.UserList.get(uid)[ToHitSPECIALName]+' Base ';
                        combatlog3 += ' + '+SPECIALToHitSkillCount+' bonus';
                        combatlog3 += "\n"+settings.PlayerPerkName(SPECIALToHitSkillID)+" will buff ToHit."

                        combatlog3 += '\n'+ToSneakSPECIALName+' is Sneaking SPECIAL: ';
                        combatlog3 += settings.UserList.get(uid)[ToSneakSPECIALName]+' Base ';
                        combatlog3 += ' + '+SPECIALSneakSkillCount+' bonus';
                        combatlog3 += "\n"+settings.PlayerPerkName(SPECIALToSneakSkillID)+" will buff Sneak Chance."

                        combatlog3 += '\n'+CostReductSPECIALName+' is Cost Reduction SPECIAL: ';
                        combatlog3 += settings.UserList.get(uid)[CostReductSPECIALName]+' Base ';
                        combatlog3 += ' + '+CostReductSkillCount+' bonus';
                        combatlog3 += "\n"+settings.PlayerPerkName(CostReductSkillID)+" will reduce skill cost by "+(CostReductPercent*100)+"% per point of total"+CostReductSPECIALName;

                        combatlog3 += '\n'+settings.UserList.get(uid).Luck+' Base ';
                        combatlog3 += ' + '+SPECIALLuckSkillCount+' bonus Luck';
                        combatlog3 += "\n"+settings.PlayerPerkName(SPECIALLuckSkillID)+" will buff attacker\'s hit chance, sneak, and auto crit chance."

                        combatlog3 += '\n\n**DEFENDER:**\n'+ToDodgeSPECIALName+' is Dodge SPECIAL: ';
                        combatlog3 += settings.UserList.get(mentionedid)[ToDodgeSPECIALName]+' Base ';
                        combatlog3 += ' + '+SPECIALDodgeSkillCount+' bonus';
                        combatlog3 += "\n"+settings.PlayerPerkName(SPECIALToDodgeSkillID)+" will buff Dodge."

                        combatlog3 += '\n'+ResistSPECIALName+' is Resistance SPECIAL: ';
                        combatlog3 += settings.UserList.get(mentionedid)[ResistSPECIALName]+' Base ';
                        combatlog3 += ' + '+SPECIALResistSkillCount+' bonus';
                        combatlog3 += "\n"+settings.PlayerPerkName(SPECIALResistSkillID)+" will buff Resistance."

                        combatlog3 += '\n'+SneakDetectSPECIALName+' is Sneak Detection SPECIAL: ';
                        combatlog3 += settings.UserList.get(mentionedid)[SneakDetectSPECIALName]+' Base ';
                        combatlog3 += ' + '+SPECIALSneakDetectSkillCount+' bonus';
                        combatlog3 += "\n"+settings.PlayerPerkName(SPECIALSneakDetectSkillID)+" will buff Detection."

                        combatlog3 += '\n'+settings.UserList.get(mentionedid).Luck+' Base Luck';
                        combatlog3 += ' + '+SPECIALLuckSkillCountDefender+' bonus Luck';
                        combatlog3 += "\n"+settings.PlayerPerkName(SPECIALLuckSkillID)+" will buff defender\'s dodge and detection."

                        combatlog3 += '\n\n'+uidname+' has the following Perks:\n'
                        if (BetterCritsCount > 0){combatlog3 += '[Better Criticals '+BetterCritsCount+']';}
                        if (AwarenessCount > 0){combatlog3 += '[Awareness '+AwarenessCount+']';}
                        if (BlackWidowCount > 0){combatlog3 += '[Black Widow '+BlackWidowCount+']';}
                        if (LadyKillerCount > 0){combatlog3 += '[Lady Killer '+LadyKillerCount+']';}
                        if (AdamantiumCount > 0){combatlog3 += '[Adamantium Skeleton '+AdamantiumCount+']';}
                        if (BloddyMessCount > 0){combatlog3 += '[Bloddy Mess '+BloddyMessCount+']';}
                        if (AntiToxinCount > 0){combatlog3 += '[Anti Toxin '+AntiToxinCount+']';}
                        if (ChilledCount > 0){combatlog3 += '[Chilled '+ChilledCount+']';}
                        if (FireproofCount > 0){combatlog3 += '[Fireproof '+FireproofCount+']';}
                        if (RadResistCount > 0){combatlog3 += '[Rad Resist '+RadResistCount+']';}
                        if (RefractorCount > 0){combatlog3 += '[Refractor '+RefractorCount+']';}
                        if (ToughnessCount > 0){combatlog3 += '[Toughness '+ToughnessCount+']';}
                        if (CritBankerCount > 0){combatlog3 += '[Critical Banker '+CritBankerCount+']';}
                        if (DemoExpertCount > 0){combatlog3 += '[Demolitions Expert '+DemoExpertCount+']';}
                        if (FourLeafCount > 0){combatlog3 += '[Four Leaf Clover '+FourLeafCount+']';}
                        if (SteadyAimCount > 0){combatlog3 += '[Steady Aim '+SteadyAimCount+']';}
                        if (BasherCount > 0){combatlog3 += '[Basher '+BasherCount+']';}
                        if (BigLeaguesCount > 0){combatlog3 += '[Big Leagues '+BigLeaguesCount+']';}
                        if (CommandoCount > 0){combatlog3 += '[Commando '+CommandoCount+']';}
                        if (ConcentratedFireCount > 0){combatlog3 += '[Concentrated Fire '+ConcentratedFireCount+']';}
                        if (GhoulishCount > 0){combatlog3 += '[Ghoulish '+GhoulishCount+']';}
                        if (GrimReaperCount > 0){combatlog3 += '[Grim Reaper\'s Sprint '+GrimReaperCount+']';}
                        if (GunFuCount > 0){combatlog3 += '[Gun Fu '+GunFuCount+']';}
                        if (GunslingerCount > 0){combatlog3 += '[Gunslinger '+GunslingerCount+']';}
                        if (HeavyGunnerCount > 0){combatlog3 += '[Heavy Gunner '+HeavyGunnerCount+']';}
                        if (IronFistCount > 0){combatlog3 += '[Iron Fist '+IronFistCount+']';}
                        if (KonoichiCount > 0){combatlog3 += '[Konoichi '+KonoichiCount+']';}
                        if (LifegiverCount > 0){combatlog3 += '[Lifegiver '+LifegiverCount+']';}
                        if (MissFortuneCount > 0){combatlog3 += '[Miss Fortune '+MissFortuneCount+']';}
                        if (MisterSandmanCount > 0){combatlog3 += 'Mister Sandman '+MisterSandmanCount+']';}
                        if (MovingTargetCount > 0){combatlog3 += '[Moving Target '+MovingTargetCount+']';}
                        if (MysteriousStrangerCount > 0){combatlog3 += '[Mysterious Stranger '+MysteriousStrangerCount+']';}
                        if (NerdRageCount > 0){combatlog3 += '[Nerd Rage '+NerdRageCount+']';}
                        if (NightPersonCount > 0){combatlog3 += '[Night Person '+NightPersonCount+'.]';}
                        if (NinjaCount > 0){combatlog3 += '[Ninja '+NinjaCount+']';}
                        if (NuclearPhysicistCount > 0){combatlog3 += '[Nuclear Physicist '+NuclearPhysicistCount+']';}
                        if (PainTrainCount > 0){combatlog3 += '[Pain Train '+PainTrainCount+']';}
                        if (PartyBoyCount > 0){combatlog3 += '[Party Boy '+PartyBoyCount+']';}
                        if (PenetratorCount > 0){combatlog3 += '[Penetrator '+PenetratorCount+']';}
                        if (QuickHandsCount > 0){combatlog3 += '[Quick Hands '+QuickHandsCount+']';}
                        if (RicochetCount > 0){combatlog3 += '[Ricochet '+RicochetCount+']';}
                        if (RiflemanCount > 0){combatlog3 += '[Rifleman '+RiflemanCount+']';}
                        if (RootedCount > 0){combatlog3 += '[Rooted '+RootedCount+']';}
                        if (SneakCount > 0){combatlog3 += '[Sneak '+SneakCount+']';}
                        if (SniperCount > 0){combatlog3 += '[Sniper '+SniperCount+']';}
                        if (SolarPoweredCount > 0){combatlog3 += '[Solar Powered '+SolarPoweredCount+']';}

                        combatlog3 += '\n\n'+mentionedname+' has the following Perks:\n'
                        if (BetterCritsCount2 > 0){combatlog3 += '[Better Criticals '+BetterCritsCount2+']';}
                        if (AwarenessCount2 > 0){combatlog3 += '[Awareness '+AwarenessCount2+']';}
                        if (BlackWidowCount2 > 0){combatlog3 += '[Black Widow '+BlackWidowCount2+']';}
                        if (LadyKillerCount2 > 0){combatlog3 += '[Lady Killer '+LadyKillerCount2+']';}
                        if (AdamantiumCount2 > 0){combatlog3 += '[Adamantium Skeleton '+AdamantiumCount2+']';}
                        if (BloddyMessCount2 > 0){combatlog3 += '[Bloddy Mess '+BloddyMessCount2+']';}
                        if (AntiToxinCount2 > 0){combatlog3 += '[Anti Toxin '+AntiToxinCount2+']';}
                        if (ChilledCount2 > 0){combatlog3 += '[Chilled '+ChilledCount2+']';}
                        if (FireproofCount2 > 0){combatlog3 += '[Fireproof '+FireproofCount2+']';}
                        if (RadResistCount2 > 0){combatlog3 += '[Rad Resist '+RadResistCount2+']';}
                        if (RefractorCount2 > 0){combatlog3 += '[Refractor '+RefractorCount2+']';}
                        if (ToughnessCount2 > 0){combatlog3 += '[Toughness '+ToughnessCount2+']';}
                        if (CritBankerCount2 > 0){combatlog3 += '[Critical Banker '+CritBankerCount2+']';}
                        if (DemoExpertCount2 > 0){combatlog3 += '[Demolitions Expert '+DemoExpertCount2+']';}
                        if (FourLeafCount2 > 0){combatlog3 += '[Four Leaf Clover '+FourLeafCount2+']';}
                        if (SteadyAimCount2 > 0){combatlog3 += '[Steady Aim '+SteadyAimCount2+']';}
                        if (BasherCount2 > 0){combatlog3 += '[Basher '+BasherCount2+']';}
                        if (BigLeaguesCount2 > 0){combatlog3 += '[Big Leagues '+BigLeaguesCount2+']';}
                        if (CommandoCount2 > 0){combatlog3 += '[Commando '+CommandoCount2+']';}
                        if (ConcentratedFireCount2 > 0){combatlog3 += '[Concentrated Fire '+ConcentratedFireCount2+']';}
                        if (GhoulishCount2 > 0){combatlog3 += '[Ghoulish '+GhoulishCount2+']';}
                        if (GrimReaperCount2 > 0){combatlog3 += '[Grim Reaper\'s Sprint '+GrimReaperCount2+']';}
                        if (GunFuCount2 > 0){combatlog3 += '[Gun Fu '+GunFuCount2+']';}
                        if (GunslingerCount2 > 0){combatlog3 += '[Gunslinger '+GunslingerCount2+']';}
                        if (HeavyGunnerCount2 > 0){combatlog3 += '[Heavy Gunner '+HeavyGunnerCount2+']';}
                        if (IronFistCount2 > 0){combatlog3 += '[Iron Fist '+IronFistCount2+']';}
                        if (KonoichiCount2 > 0){combatlog3 += '[Konoichi '+KonoichiCount2+']';}
                        if (LifegiverCount2 > 0){combatlog3 += '[Lifegiver '+LifegiverCount2+']';}
                        if (MissFortuneCount2 > 0){combatlog3 += '[Miss Fortune '+MissFortuneCount2+']';}
                        if (MisterSandmanCount2 > 0){combatlog3 += 'Mister Sandman '+MisterSandmanCount2+']';}
                        if (MovingTargetCount2 > 0){combatlog3 += '[Moving Target '+MovingTargetCount2+']';}
                        if (MysteriousStrangerCount2 > 0){combatlog3 += '[Mysterious Stranger '+MysteriousStrangerCount2+']';}
                        if (NerdRageCount2 > 0){combatlog3 += '[Nerd Rage '+NerdRageCount2+']';}
                        if (NightPersonCount2 > 0){combatlog3 += '[Night Person '+NightPersonCount2+'.]';}
                        if (NinjaCount2 > 0){combatlog3 += '[Ninja '+NinjaCount2+']';}
                        if (NuclearPhysicistCount2 > 0){combatlog3 += '[Nuclear Physicist '+NuclearPhysicistCount2+']';}
                        if (PainTrainCount2 > 0){combatlog3 += '[Pain Train '+PainTrainCount2+']';}
                        if (PartyBoyCount2 > 0){combatlog3 += '[Party Boy '+PartyBoyCount2+']';}
                        if (PenetratorCount2 > 0){combatlog3 += '[Penetrator '+PenetratorCount2+']';}
                        if (QuickHandsCount2 > 0){combatlog3 += '[Quick Hands '+QuickHandsCount2+']';}
                        if (RicochetCount2 > 0){combatlog3 += '[Ricochet '+RicochetCount2+']';}
                        if (RiflemanCount2 > 0){combatlog3 += '[Rifleman '+RiflemanCount2+']';}
                        if (RootedCount2 > 0){combatlog3 += '[Rooted '+RootedCount2+']';}
                        if (SneakCount2 > 0){combatlog3 += '[Sneak '+SneakCount2+']';}
                        if (SniperCount2 > 0){combatlog3 += '[Sniper '+SniperCount2+']';}
                        if (SolarPoweredCount2 > 0){combatlog3 += '[Solar Powered '+SolarPoweredCount2+']';}
                        //if (settings.UserSkillList.get(uid).Ninja.Rank > 0){combatlog += 'Ninja '+settings.UserSkillList.get(uid).Ninja.Rank+'.';}
                    };//Debug additional data
/////////////////////////////////////////////////////////////////////
                    if (settings.UserList.get(uid) != undefined){
                        settings.UserList.set(uid, {
                            Gender: settings.UserList.get(uid).Gender,
                            Height: settings.UserList.get(uid).Height,
                            Weight: settings.UserList.get(uid).Weight,
                            Fitness: settings.UserList.get(uid).Fitness,
                            Bonus_HP: settings.UserList.get(uid).Bonus_HP,
                            HP: AttackerCurrentHP,
                            Bonus_MP: settings.UserList.get(uid).Bonus_MP,
                            MP: AttackerCurrentAP,
                            Bonus_IP: settings.UserList.get(uid).Bonus_IP,
                            IP: AttackerCurrentIP,
                            Strength: settings.UserList.get(uid).Strength,
                            Perception: settings.UserList.get(uid).Perception,
                            Endurance: settings.UserList.get(uid).Endurance,
                            Charisma: settings.UserList.get(uid).Charisma,
                            Intelligence: settings.UserList.get(uid).Intelligence,
                            Agility: settings.UserList.get(uid).Agility,
                            Luck: settings.UserList.get(uid).Luck,
                            SPECIAL_Points: settings.UserList.get(uid).SPECIAL_Points,
                            CLASS_ID: settings.UserList.get(uid).CLASS_ID,
                            CLASS_ID_Boost: settings.UserList.get(uid).CLASS_ID_Boost,
                            CLASS_ID_Sub: settings.UserList.get(uid).CLASS_ID_Sub,
                            CLASS_ID_Sub2: settings.UserList.get(uid).CLASS_ID_Sub2,
                            CLASS_ID_Sub3: settings.UserList.get(uid).CLASS_ID_Sub3,
                            CLASS_ID_Sub4: settings.UserList.get(uid).CLASS_ID_Sub4,
                            Power_Mult: settings.UserList.get(uid).Power_Mult,
                            Power_Mult_Boost: settings.UserList.get(uid).Power_Mult_Boost,
                            Level: settings.UserList.get(uid).Level,
                            Level_XP: settings.UserList.get(uid).Level_XP,
                            Total_XP: settings.UserList.get(uid).Total_XP,
                            XP: settings.UserList.get(uid).XP,
                            XP_Percent: settings.UserList.get(uid).XP_Percent,
                            Player_Rank: settings.UserList.get(uid).Player_Rank,
                            Player_Rank_Total: settings.UserList.get(uid).Player_Rank_Total, 
                            Banked_Criticals: AttackerBankedCrits,
                            Critical_Meter_Percent: AttackerCritPercent,
                            Paralyzed_Duration: ParalyzeDuration,
                            Stunned_Duration: StunDuration,
                            Restrained_Duration: RestrainDuration,
                            IsLevelCapped: settings.UserList.get(uid).IsLevelCapped
                        });//settings.UserList.set
                    };//if (settings.UserList.get(uid) != undefined)

                    if (settings.UserList.get(mentionedid) != undefined){
                        settings.UserList.set(mentionedid, {
                            Gender: settings.UserList.get(mentionedid).Gender,
                            Height: settings.UserList.get(mentionedid).Height,
                            Weight: settings.UserList.get(mentionedid).Weight,
                            Fitness: settings.UserList.get(mentionedid).Fitness,
                            Bonus_HP: settings.UserList.get(mentionedid).Bonus_HP,
                            HP: DefenderCurrentHP,
                            Bonus_MP: settings.UserList.get(mentionedid).Bonus_MP,
                            MP: DefenderCurrentAP,
                            Bonus_IP: settings.UserList.get(mentionedid).Bonus_IP,
                            IP: DefenderCurrentIP,
                            Strength: settings.UserList.get(mentionedid).Strength,
                            Perception: settings.UserList.get(mentionedid).Perception,
                            Endurance: settings.UserList.get(mentionedid).Endurance,
                            Charisma: settings.UserList.get(mentionedid).Charisma,
                            Intelligence: settings.UserList.get(mentionedid).Intelligence,
                            Agility: settings.UserList.get(mentionedid).Agility,
                            Luck: settings.UserList.get(mentionedid).Luck,
                            SPECIAL_Points: settings.UserList.get(mentionedid).SPECIAL_Points,
                            CLASS_ID: DefenderCLASS_ID,
                            CLASS_ID_Boost: settings.UserList.get(mentionedid).CLASS_ID_Boost,
                            CLASS_ID_Sub: DefenderCLASS_ID_Sub,
                            CLASS_ID_Sub2: DefenderCLASS_ID_Sub2,
                            CLASS_ID_Sub3: DefenderCLASS_ID_Sub3,
                            CLASS_ID_Sub4: DefenderCLASS_ID_Sub4,
                            Power_Mult: DefenderPower_Mult,
                            Power_Mult_Boost: settings.UserList.get(mentionedid).Power_Mult_Boost,
                            Level: settings.UserList.get(mentionedid).Level,
                            Level_XP: settings.UserList.get(mentionedid).Level_XP,
                            Total_XP: settings.UserList.get(mentionedid).Total_XP,
                            XP: settings.UserList.get(mentionedid).XP,
                            XP_Percent: settings.UserList.get(mentionedid).XP_Percent,
                            Player_Rank: settings.UserList.get(mentionedid).Player_Rank,
                            Player_Rank_Total: settings.UserList.get(mentionedid).Player_Rank_Total, 
                            Banked_Criticals: settings.UserList.get(mentionedid).Banked_Criticals,
                            Critical_Meter_Percent: settings.UserList.get(mentionedid).Critical_Meter_Percent,
                            Paralyzed_Duration: ParalyzeDuration,
                            Stunned_Duration: StunDuration,
                            Restrained_Duration: RestrainDuration,
                            IsLevelCapped: settings.UserList.get(mentionedid).IsLevelCapped
                        });//settings.UserList.set
                    };//if (settings.UserList.get(mentionedid) != undefined)
};//if ((attackerReady > 0) && (defenderReady > 0))
///////////////output display block///////////////
                    var ActionLog = '';
                    if (IsSneaking.startsWith('sneak')){ActionLog += 'Stealth '};
                    ActionLog += action;
                    if (rankstoadd > 1){ActionLog += " x"+rankstoadd.toLocaleString();};
                    if (settings.UserList.get(uid).HP > 0){
                        const RiderEmbed = new discord.RichEmbed()
                            RiderEmbed.setColor(randomHex.generate())
                            RiderEmbed.setAuthor(ActionLog + '!', settings.botpic)
                            RiderEmbed.setDescription(combatlog)
                            RiderEmbed.setImage(slapSTRING)
                        msg.channel.send({embed: RiderEmbed});
                    };//if (settings.UserList.get(uid).HP > 0){

                    if (flag.startsWith('debug')){
                        msg.reply('DEBUGGING: '+ action + '! '+combatlog2);
                        msg.reply('DEBUGGING: '+ action + '! '+combatlog3);
                        msg.reply('DEBUGGING: '+ action + '! '+combatlog4);
                    };//if (flag.startsWith('debug'))
///////////////output display block///////////////
                    connection.release(); 
        });//mysqlPool.getConnection
};//run

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: [
            "kick",
            "punch",
            "meditate",
            "rest",
            "grab",
            "snare",
            "heal",
            "fullheal"
           ],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "flashkick",
  description: "",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};