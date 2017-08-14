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
    var uid           = msg.author.id;
    var uidname       = msg.author.username;
    var rankstoadd    = parseInt(msg.content.split("+").pop());
    var rankstodelete = parseInt(msg.content.split("-").pop());
    var PerkID        = 0;

    var PERKSPECIAL_Name = "";
    var PERKSPECIAL_ID = 0;
    var PERKSPECIAL_Minimum = 0;
    var PERKSPECIAL_MAX_RANKS = 0;
    var Special_Min_Flag = 0;
    var perktext = "";
    var thumb = "";
    var mainpic = "";

    var KEY_User_Perk = 0;
    var SPECIALS = new Map();
    SPECIALS.set(uid,{
        Strength: 0,
        Perception: 0,
        Endurance: 0,
        Charisma: 0,
        Intelligence: 0,
        Agility: 0,
        Luck: 0
    });//SPECIALS.set
                
    if (!isNaN(uid) && (settings.UserList.get(uid) != undefined)){
        for (f = 0; f < settings.UserSkillList.size; f++){
            if (settings.UserSkillList.get(f).PLAYER_ID == uid){
                if (settings.UserSkillList.get(f).PERK_ID == 110){SPECIALS.get(uid).Strength += settings.UserSkillList.get(f).RANKS;};
                if (settings.UserSkillList.get(f).PERK_ID == 120){SPECIALS.get(uid).Perception += settings.UserSkillList.get(f).RANKS;};
                if (settings.UserSkillList.get(f).PERK_ID == 130){SPECIALS.get(uid).Endurance += settings.UserSkillList.get(f).RANKS;};
                if (settings.UserSkillList.get(f).PERK_ID == 140){SPECIALS.get(uid).Charisma += settings.UserSkillList.get(f).RANKS;};
                if (settings.UserSkillList.get(f).PERK_ID == 150){SPECIALS.get(uid).Intelligence += settings.UserSkillList.get(f).RANKS;};
                if (settings.UserSkillList.get(f).PERK_ID == 160){SPECIALS.get(uid).Agility += settings.UserSkillList.get(f).RANKS;};
                if (settings.UserSkillList.get(f).PERK_ID == 170){SPECIALS.get(uid).Luck += settings.UserSkillList.get(f).RANKS;};
            };//if (settings.UserSkillList.get(i).PLAYER_ID == uid)
        };//for
        SPECIALS.get(uid).Strength += settings.UserList.get(uid).Strength;
        SPECIALS.get(uid).Perception += settings.UserList.get(uid).Perception;
        SPECIALS.get(uid).Endurance += settings.UserList.get(uid).Endurance;
        SPECIALS.get(uid).Charisma += settings.UserList.get(uid).Charisma;
        SPECIALS.get(uid).Intelligence += settings.UserList.get(uid).Intelligence;
        SPECIALS.get(uid).Agility += settings.UserList.get(uid).Agility;
        SPECIALS.get(uid).Luck += settings.UserList.get(uid).Luck;
    };//if


    if (msg.content.toLowerCase().startsWith("!stren")){PerkID = 110;} 
    else if (msg.content.toLowerCase().startsWith("!per")){PerkID = 120;} 
    else if (msg.content.toLowerCase().startsWith("!end")){PerkID = 130;} 
    else if (msg.content.toLowerCase().startsWith("!cha")){PerkID = 140;} 
    else if (msg.content.toLowerCase().startsWith("!int")){PerkID = 150;} 
    else if (msg.content.toLowerCase().startsWith("!agi")){PerkID = 160;} 
    else if (msg.content.toLowerCase().startsWith("!luc")){PerkID = 170;}

    else if (msg.content.toLowerCase().startsWith("!armorer")){
        PerkID = 310;
        PERKSPECIAL_Name = "Strength";
        PERKSPECIAL_MAX_RANKS = 5;
        PERKSPECIAL_Minimum = 3;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/SF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/Fo4_Armorer.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Rank 1) You gain access to Rank 1 armor mods, Armor can be refined 20% better.\n';
        perktext += 'Rank 2) You gain access to Rank 2 armor mods, Armor can be refined 40% better.\n';
        perktext += 'Rank 3) You gain access to Rank 3 armor mods, Armor can be refined 60% better.\n';
        perktext += 'Rank 4) You gain access to Rank 4 armor mods, Armor can be refined 80% better.\n';
        perktext += 'Rank 5) You gain access to Rank 5 armor mods, Armor can be refined 100% better.';
    }
    else if (msg.content.toLowerCase().startsWith("!basher")){
        PerkID = 810;
        PERKSPECIAL_Name = "Strength";
        PERKSPECIAL_MAX_RANKS = 5;
        PERKSPECIAL_Minimum = 8;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/SF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/Fo4_Basher.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Rank 1) Get up close and personal! Gun bashing does 25% more damage.\n';
        perktext += 'Rank 2) Gun bashing does 50% more damage. 15% Cripple Chance\n';
        perktext += 'Rank 3) Gun bashing does 75% more damage. 25% Cripple Chance\n';
        perktext += 'Rank 4) Gun bashing does 100% more damage. 35% Cripple Chance\n';
        perktext += 'Rank 5) Gun bashing does 125% more damage. 45%  Cripple Chance';
    }
    else if (msg.content.toLowerCase().startsWith("!big")){
        PerkID = 210;
        PERKSPECIAL_Name = "Strength";
        PERKSPECIAL_MAX_RANKS = 5;
        PERKSPECIAL_Minimum = 2;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/SF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/Fo4_Big_Leagues.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Rank 1) Swing for the fences! Do 20% more melee weapon damage.\n';
        perktext += 'Rank 2) Do 40% more melee weapon damage. 15% Disarm Chance\n';
        perktext += 'Rank 3) Do 60% more melee weapon damage. 25% Disarm Chance\n';
        perktext += 'Rank 4) Do 80% more melee weapon damage. Cone of effect\n';
        perktext += 'Rank 5) Do 100% more melee weapon damage. 15% Cripple Chance';
    }
    else if (msg.content.toLowerCase().startsWith("!blacksmith")){
        PerkID = 410;
        PERKSPECIAL_Name = "Strength";
        PERKSPECIAL_MAX_RANKS = 5;
        PERKSPECIAL_Minimum = 4;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/SF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/Fo4_Blacksmith.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Rank 1) You gain access to base level and Rank 1 melee mods, melee weapons can be refined 20% better.\n';
        perktext += 'Rank 2) You gain access to Rank 2 melee mods, melee weapons can be refined 40% better.\n';
        perktext += 'Rank 3) You gain access to Rank 3 melee mods, melee weapons can be refined 60% better.\n';
        perktext += 'Rank 4) You gain access to Rank 4 melee mods, melee weapons can be refined 80% better.\n';
        perktext += 'Rank 5) You gain access to Rank 5 melee mods, melee weapons can be refined 100% better.';
    }
    else if (msg.content.toLowerCase().startsWith("!heavy")){
        PerkID = 510;
        PERKSPECIAL_Name = "Strength";
        PERKSPECIAL_MAX_RANKS = 5;
        PERKSPECIAL_Minimum = 5;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/SF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/Fo4_Heavy_Gunner.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Rank 1) Thanks to practice and conditioning, heavy guns do 20/40/60/80/100% more damage.\n';
        perktext += 'Rank 2) improved hip fire accuracy.\n';
        perktext += 'Rank 3) improved hip fire accuracy.\n';
        perktext += 'Rank 4) Stagger chance\n';
        perktext += 'Rank 5) cripple Chance';
    }
    else if (msg.content.toLowerCase().startsWith("!iron")){
        PerkID = 1;
        PERKSPECIAL_Name = "Strength";
        PERKSPECIAL_MAX_RANKS = 5;
        PERKSPECIAL_Minimum = 1;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/SF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/Fo4_Iron_Fist.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Rank 1) Channel your chi to unleash devastating fury! Punching attacks do 20% more damage to your opponent.\n';
        perktext += 'Rank 2) Punching attacks do 40% more damage to your opponent. 15% Disarm Chance\n';
        perktext += 'Rank 3) Punching attacks do 60% more damage to your opponent. 15% Cripple Chance\n';
        perktext += 'Rank 4) Punching attacks do 80% more damage to your opponent. 25% Cripple Chance\n';
        perktext += 'Rank 5) Punching attacks do 100% more damage to your opponent. 15% Paralyze Chance';
    }
    else if (msg.content.toLowerCase().startsWith("!pain")){
        PerkID = 1010;
        PERKSPECIAL_Name = "Strength";
        PERKSPECIAL_MAX_RANKS = 5;
        PERKSPECIAL_Minimum = 10;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/SF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/Fo4_Pain_Train.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Rank 1) Choo Choo! All aboard! While wearing Power Armor (or sentai spandex, rider suits, ie any sort of powered suit), sprinting into enemies hurts and staggers them. ';
        perktext += '(Robots and oversized enemies are immune to the stagger.)\n';
        perktext += 'Rank 2) Improves damage and Stagger Chance\n';
        perktext += 'Rank 3) Improves damage and Stagger Chance, can now effect robots\n';
        perktext += 'Rank 4) Improves damage and Stagger Chance, can now effect oversized enemies\n';
        perktext += 'Rank 5) Improves damage and Stagger Chance';
    }
    else if (msg.content.toLowerCase().startsWith("!rooted")){
        PerkID = 910;
        PERKSPECIAL_Name = "Strength";
        PERKSPECIAL_MAX_RANKS = 5;
        PERKSPECIAL_Minimum = 9;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/SF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/Fo4_Rooted.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Rank 1) You\'re part tree! While standing still, you gain +25 Damage Resistance and your melee and unarmed attacks deal 25% more damage.\n';
        perktext += 'Rank 2) +50 Damage Resistance and your melee and unarmed attacks deal 50% more damage. 15% Disarm Chance\n';
        perktext += 'Rank 3) +75 Damage Resistance and your melee and unarmed attacks deal 75% more damage. 25% Disarm Chance\n';
        perktext += 'Rank 4) +100 Damage Resistance and your melee and unarmed attacks deal 100% more damage. 35% Disarm Chance\n';
        perktext += 'Rank 5) +125 Damage Resistance and your melee and unarmed attacks deal 125% more damage. 45% Disarm Chance';
    }
    else if (msg.content.toLowerCase().startsWith("!steady")){
        PerkID = 710;
        PERKSPECIAL_Name = "Strength";
        PERKSPECIAL_MAX_RANKS = 5;
        PERKSPECIAL_Minimum = 7;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/SF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/Fo4_Steady_Aim.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Rank 1) Stay on target! Hip-fire accuracy is improved 15% when firing any gun.\n';
        perktext += 'Rank 2) Stay on target! Hip-fire accuracy is improved 30% when firing any gun.\n';
        perktext += 'Rank 3) Stay on target! Hip-fire accuracy is improved 45% when firing any gun.\n';
        perktext += 'Rank 4) Stay on target! Hip-fire accuracy is improved 60% when firing any gun.\n';
        perktext += 'Rank 5) Stay on target! Hip-fire accuracy is improved 75% when firing any gun.';
    }
    else if (msg.content.toLowerCase().startsWith("!strong")){
        PerkID = 610;
        PERKSPECIAL_Name = "Strength";
        PERKSPECIAL_MAX_RANKS = 5;
        PERKSPECIAL_Minimum = 6;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/SF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/Fo4_Strong_Back.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Rank 1) What are you, part pack mule? Gain +25 to total carry weight.\n';
        perktext += 'Rank 1) What are you, part pack mule? Gain +50 to total carry weight.\n';
        perktext += 'Rank 1) What are you, part pack mule? Gain +75 to total carry weight.\n';
        perktext += 'Rank 1) What are you, part pack mule? Gain +100 to total carry weight.\n';
        perktext += 'Rank 1) What are you, part pack mule? Gain +125 to total carry weight.';
    }
    else if (msg.content.toLowerCase().startsWith("!sniper")){
        PerkID = 820;
        PERKSPECIAL_Name = "Perception";
        PERKSPECIAL_MAX_RANKS = 5;
        PERKSPECIAL_Minimum = 8;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/PF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/sniper.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Rank 1) It\'s all about focus. You have improved control and can hold your breath longer when aiming with scopes.\n';
        perktext += 'Rank 2) Scoped rifles have a 15% chance of knocking down your target.\n';
        perktext += 'Rank 3) Scoped rifles gain +25% accuracy to head shot when aiming.\n';
        perktext += 'Rank 4) Scoped rifles gain +35% accuracy to limbs (excluding head) when aiming.\n';
        perktext += 'Rank 5) Scoped rifles gain +15% chance to cripple when aiming.';
    }
    else if (msg.content.toLowerCase().startsWith("!rifleman")){
        PERKSPECIAL_Name = "Perception";
        PERKSPECIAL_MAX_RANKS = 5;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        PerkID = 220;
        PERKSPECIAL_Minimum = 2;
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/PF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/Fo4_Rifleman.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Rank 1) Attacks with rifles do 20% more damage.\n';
        perktext += 'Rank 2) Attacks with rifles now do 40% more damage and ignore 15 percent of a target’s armor.\n';
        perktext += 'Rank 3) Attacks with rifles now do 60% more damage and ignore 20 percent of a target’s armor.\n';
        perktext += 'Rank 4) Attacks with rifles now do 80% more damage and ignore 25 percent of a target’s armor. They also have a 15% chance of crippling a limb.\n';
        perktext += 'Rank 5) Attacks with rifles now do 100% more damage and ignore 30 percent of a target’s armor. They also have a 25% chance of crippling a limb.';
    }
    else if (msg.content.toLowerCase().startsWith("!refractor")){
        PERKSPECIAL_Name = "Perception";
        PERKSPECIAL_MAX_RANKS = 5;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        PerkID = 720;
        PERKSPECIAL_Minimum = 7;
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/PF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/perception-7.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Rank 1) You must be part mirror! Instantly gain +10 Energy Resistance.\n';
        perktext += 'Rank 2) You now have +20 Energy Resistance.\n';
        perktext += 'Rank 3) You now have +30 Energy Resistance.\n';
        perktext += 'Rank 4) You now have +40 Energy Resistance.\n';
        perktext += 'Rank 5) You now have +50 Energy Resistance.';
    }
    else if (msg.content.toLowerCase().startsWith("!pickpocket")){
        PERKSPECIAL_Name = "Perception";
        PERKSPECIAL_MAX_RANKS = 5;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        PerkID = 2;
        PERKSPECIAL_Minimum = 1;
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/PF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/Fo4_Pickpocket.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Rank 1) Picking pockets is 25 percent easier.\n';
        perktext += 'Rank 2) Picking pockets is now 50% easier. You can place a live grenade in a person’s inventory.\n';
        perktext += 'Rank 3) Picking pockets is now 75% easier, and you can steal equipped weapons.\n';
        perktext += 'Rank 4) Picking pockets is now 100% easier, and you can steal equipped items.\n';
        perktext += 'Rank 5) Picking pockets is now 125% easier.';
    }
    else if (msg.content.toLowerCase().startsWith("!penetrator")){
        PERKSPECIAL_Name = "Perception";
        PERKSPECIAL_MAX_RANKS = 5;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        PerkID = 920;
        PERKSPECIAL_Minimum = 9;
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/PF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/Fo4_Penetrator.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Rank 1) There\'s no place to hide! When aiming you can target an enemy\'s body parts that are blocked by cover, with a decrease in accuracy and damage.\n';
        perktext += 'Rank 2) When aiming when you target an enemy\'s body parts that are blocked by cover, there is no decrease in accuracy.\n';
        perktext += 'Rank 3) When aiming when you target an enemy\'s body parts that are blocked by cover, there is no decrease in damage.\n';
        perktext += 'Rank 4) When aiming when you target an enemy\'s body parts that are blocked by cover, you have a 15% chance to cripple.\n';
        perktext += 'Rank 5) When aiming when you target an enemy\'s body parts that are blocked by cover, you have a 25% chance to cripple.';
    }
    else if (msg.content.toLowerCase().startsWith("!night")){
        PERKSPECIAL_Name = "Perception";
        PERKSPECIAL_MAX_RANKS = 5;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        PerkID = 620;
        PERKSPECIAL_Minimum = 6;
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/PF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/Fo4_Night_Person.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Rank 1) You are a creature of the night! Gain +2 to Intelligence and Perception between the hours of 6:00 p.m. and 6:00 a.m.\n';
        perktext += 'Rank 2) You now have +3 to Intelligence and Perception between the hours of 6:00 p.m. and 6:00 a.m., and night vision when sneaking.\n';
        perktext += 'Rank 3) You have 30 extra health between the hours of 6:00 PM and 6:00 AM.\n';
        perktext += 'Rank 4) You have 30 extra AP between the hours of 6:00 PM and 6:00 AM.\n';
        perktext += 'Rank 5) You have 30 extra IP between the hours of 6:00 PM and 6:00 AM.';
    }
    else if (msg.content.toLowerCase().startsWith("!locksmith")){
        PERKSPECIAL_Name = "Perception";
        PERKSPECIAL_MAX_RANKS = 5;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        PerkID = 420;
        PERKSPECIAL_Minimum = 4;
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/PF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/Fo4_Locksmith.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Rank 1) Your nimble fingers allow you to pick advanced locks. Lower level locks are easier to pick.\n';
        perktext += 'Rank 2) You can pick Expert locks. Lower level locks are easier to pick.\n';
        perktext += 'Rank 3) You can pick Master locks. Lower level locks are easier to pick.\n';
        perktext += 'Rank 4) Your bobby pins never break during lockpicking. Lower level locks are easier to pick.\n';
        perktext += 'Rank 5) Lower level locks are easier to pick.';
    }
    else if (msg.content.toLowerCase().startsWith("!demo")){
        PERKSPECIAL_Name = "Perception";
        PERKSPECIAL_MAX_RANKS = 5;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        PerkID = 520;
        PERKSPECIAL_Minimum = 5;
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/PF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/demolition_expert.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Rank 1) The bigger the boom, the better! Your explosives do 25% more damage, and you can craft explosives at any Chemistry Station.\n';
        perktext += 'Rank 2) Your explosives do 50% more damage, and grenades gain a throwing arc.\n';
        perktext += 'Rank 3) Your explosives do 75% more damage and affect a larger area.\n';
        perktext += 'Rank 4) Your explosives now do double damage. Mines and shot grenades explode for double damage, too.\n';
        perktext += 'Rank 5) Your explosives do 125% more damage.';
    }
    else if (msg.content.toLowerCase().startsWith("!concentrated")){
        PERKSPECIAL_Name = "Perception";
        PERKSPECIAL_MAX_RANKS = 5;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        PerkID = 1020;
        PERKSPECIAL_Minimum = 10;
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/PF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/concentrated_fire.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Rank 1) Stay Focused! When aiming every attack on the same body part gains +10% accuracy.\n';
        perktext += 'Rank 2) When aiming every attack on the same body part gains +15% accuracy.\n';
        perktext += 'Rank 3) When aiming every attack on the same body part gains +20% accuracy and does 20% more damage.\n';
        perktext += 'Rank 4) When aiming every attack on the same body part gains +25% accuracy and does 25% more damage.\n';
        perktext += 'Rank 5) When aiming every attack on the same body part gains +30% accuracy and does 30% more damage.';
    }
    else if (msg.content.toLowerCase().startsWith("!awareness")){
        PERKSPECIAL_Name = "Perception";
        PERKSPECIAL_MAX_RANKS = 5;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        PerkID = 320;
        PERKSPECIAL_Minimum = 3;
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/PF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/perception-3.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Rank 1) To defeat your enemies, know their weaknesses! You can view a target\'s specific damage resistances.\n';
        perktext += 'Rank 2) Knowing their weaknesses lets you attack more efficiently. 5% increase to hit chance and damage dealt when aiming.\n';
        perktext += 'Rank 3) 10% increase to hit chance and damage dealt when aiming.\n';
        perktext += 'Rank 4) 15% increase to hit chance and damage dealt when aiming.\n';
        perktext += 'Rank 5) 20% increase to hit chance and damage dealt when aiming.';
    }
    else if (msg.content.toLowerCase().startsWith("!scrounger")){
        PERKSPECIAL_Name = "Luck";
        PERKSPECIAL_MAX_RANKS = 5;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        PerkID = 270;
        PERKSPECIAL_Minimum = 2;
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/LF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/Fo4_Scrounger.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Rank 1) You find more ammunition in containers.\n';
        perktext += 'Rank 2) You find more ammunition in containers.\n';
        perktext += 'Rank 3) You find more ammunition in containers.\n';
        perktext += 'Rank 4) There is a chance to gain ammo when firing the last round in your magazine.\n';
        perktext += 'Rank 5) There is a chance to gain ammo when firing the last round in your magazine.';
    }
    else if (msg.content.toLowerCase().startsWith("!ricochet")){
        PERKSPECIAL_Name = "Luck";
        PERKSPECIAL_MAX_RANKS = 5;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        PerkID = 1070;
        PERKSPECIAL_Minimum = 10;
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/LF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/Fo4_Ricochet.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Rank 1) What goes around comes around! Any enemy\'s ranged attacks will sometimes ricochet back and instantly kill them. The closer you are to death, the higher the chance.\n';
        perktext += 'Rank 2) There\'s an increased chance that an enemy\'s shot will ricochet back and kill them.\n';
        perktext += 'Rank 3) When an enemy\'s shot ricochets back and kills them, there is a chance your Critical meter gets filled.\n';
        perktext += 'Rank 4) When an enemy\'s shot ricochets back and kills them, there is a chance of entering slow tim for 30 seconds.\n';
        perktext += 'Rank 5) When an enemy\'s shot ricochets back and kills them, there is a chance of healing all toxic damage and your AP/IP/HP will regenerate 50% faster for 10 seconds.';
    }
    else if (msg.content.toLowerCase().startsWith("!mysterious")){
        PERKSPECIAL_Name = "Luck";
        PERKSPECIAL_MAX_RANKS = 5;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        PerkID = 470;
        PERKSPECIAL_Minimum = 4;
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/LF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/Fo4_Mysterious_Stranger_perk.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Rank 1) Who is he? Why does he help? Who cares! The Mysterious Stranger will appear occasionally to lend a hand, with deadly efficiency...\n';
        perktext += 'Rank 2) The Mysterious Stranger appears more often.\n';
        perktext += 'Rank 3) The Mysterious Stranger appears even more often. When he kills an opponent, there is a chance your Critical meter gets filled.\n';
        perktext += 'Rank 4) The Mysterious Stranger appears more often. When he kills an opponent, there is a high chance your Critical meter gets filled.\n';
        perktext += 'Rank 5) The Mysterious Stranger appears more often. When he kills an opponent, there is an even high chance your Critical meter gets filled.';
    }
    else if (msg.content.toLowerCase().startsWith("!miss")){
        PERKSPECIAL_Name = "Luck";
        PERKSPECIAL_MAX_RANKS = 5;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        PerkID = 471;
        PERKSPECIAL_Minimum = 4;
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/LF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/MissFortune.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Rank 1) Who is she? Why does she help? Who cares! Miss Fortune will appear occasionally to lend a hand, increasing your accuracy and fully healing you...\n';
        perktext += 'Rank 2) Miss Fortune appears more often.\n';
        perktext += 'Rank 3) Miss Fortune appears even more often. When you kills an opponent with her blessing, there is a chance your Critical meter gets filled.\n';
        perktext += 'Rank 4) Miss Fortune appears more often. When you kills an opponent with her blessing, there is a high chance your Critical meter gets filled.\n';
        perktext += 'Rank 5) Miss Fortune appears more often. When you kills an opponent with her blessing, there is an even high chance your Critical meter gets filled.';
    }
    else if (msg.content.toLowerCase().startsWith("!idiot")){
        PERKSPECIAL_Name = "Luck";
        PERKSPECIAL_MAX_RANKS = 5;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        PerkID = 570;
        PERKSPECIAL_Minimum = 5;
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/LF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/Fo4_Idiot_Savant.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Rank 1) You\'re not stupid! Just... different. Randomly receive 3x XP from any action, and the lower your Intelligence, the greater the chance.\n';
        perktext += 'Rank 2) You now randomly receive 5x XP from any action. The lower your Intelligence, the greater the chance.\n';
        perktext += 'Rank 3) Randomly receiving bonus XP from any action may trigger 3x XP for all kills for a short period of time. The lower your Intelligence, the greater the chance.\n';
        perktext += 'Rank 4) You now randomly receive 7x XP from any action. The lower your Intelligence, the greater the chance.\n';
        perktext += 'Rank 5) You now randomly receive 9x XP from any action. The lower your Intelligence, the greater the chance.';
    }
    else if (msg.content.toLowerCase().startsWith("!grim")){
        PERKSPECIAL_Name = "Luck";
        PERKSPECIAL_MAX_RANKS = 5;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        PerkID = 870;
        PERKSPECIAL_Minimum = 8;
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/LF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/Fo4_Grim_Reapers_Sprint.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Rank 1) Death becomes you! Any kill has a 15% chance to restore all Action Points.\n';
        perktext += 'Rank 2) Any kill now has a 25% chance to restore all Action Points.\n';
        perktext += 'Rank 3) Any kill has a 35% chance to restore all Action Points and refill your Critical meter.\n';
        perktext += 'Rank 4) Any kill has a 45% chance to restore all Action Points and refill your Critical meter.\n';
        perktext += 'Rank 5) Any kill has a 55% chance to restore all Action Points and refill your Critical meter.';
    }
    else if (msg.content.toLowerCase().startsWith("!four")){
        PERKSPECIAL_Name = "Luck";
        PERKSPECIAL_MAX_RANKS = 5;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        PerkID = 970;
        PERKSPECIAL_Minimum = 9;
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/LF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/Fo4_Four_Leaf_Clover.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Rank 1) Feeling Lucky? You should! Each hit has a chance of filling your Critical meter.\n';
        perktext += 'Rank 2) Each hit now has an even better chance of filling your Critical meter.\n';
        perktext += 'Rank 3) Each hit now has a very good chance of filling your Critical meter.\n';
        perktext += 'Rank 4) Each hit now has an excellent chance of filling your Critical meter.\n';
        perktext += 'Rank 5) Each hit now has an more excellent chance of filling your Critical meter.';
    }
    else if (msg.content.toLowerCase().startsWith("!fortune")){
        PERKSPECIAL_Name = "Luck";
        PERKSPECIAL_MAX_RANKS = 5;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        PerkID = 7;
        PERKSPECIAL_Minimum = 1;
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/LF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/Fo4_Fortune_Finder.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Rank 1) You find more cash in containers.\n';
        perktext += 'Rank 2) You find even more cash in containers.\n';
        perktext += 'Rank 3) You find even more cash in containers.\n';
        perktext += 'Rank 4) You find even more cash in containers, and there is a chance of enemies exploding into a shower of cash when you kill them.\n';
        perktext += 'Rank 5) You find even more cash in containers.';
    }
    else if (msg.content.toLowerCase().startsWith("!critical")){
        PERKSPECIAL_Name = "Luck";
        PERKSPECIAL_MAX_RANKS = 5;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        PerkID = 770;
        PERKSPECIAL_Minimum = 7;
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/LF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/Fo4_Critical_Banker.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Rank 1) You\'re a patient battlefield tactician, and can save a Critical Hit, to be used when aiming when you need it most.\n';
        perktext += 'Rank 2) You can now save 2 Critical Hits, to be used when aiming when you need them the most.\n';
        perktext += 'Rank 3) You can now save 3 Critical Hits, to be used when aiming when you need them the most. Banking a Critical has a chance to save an additional Critical.\n';
        perktext += 'Rank 4) You can now save 4 Critical Hits, to be used when aiming when you need them the most.\n';
        perktext += 'Rank 5) You can now save 5 Critical Hits, to be used when aiming when you need them the most.';
    }
    else if (msg.content.toLowerCase().startsWith("!better")){
        PERKSPECIAL_Name = "Luck";
        PERKSPECIAL_MAX_RANKS = 5;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        PerkID = 670;
        PERKSPECIAL_Minimum = 6;
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/LF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/Fo4_Better_Criticals.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Rank 1) Advanced training for enhanced combat effectiveness! Criticals do 50% more extra damage.\n';
        perktext += 'Rank 2) Your criticals now do twice as much extra damage.\n';
        perktext += 'Rank 3) Your criticals now do 2.5x as much extra damage.\n';
        perktext += 'Rank 4) Your criticals now do 3x as much extra damage.\n';
        perktext += 'Rank 5) Your criticals now do 3.5x as much extra damage.';
    }
    else if (msg.content.toLowerCase().startsWith("!bloody")){
        PERKSPECIAL_Name = "Luck";
        PERKSPECIAL_MAX_RANKS = 5;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        PerkID = 370;
        PERKSPECIAL_Minimum = 3;
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/LF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/Fo4_Bloody_Mess.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Rank 1) +5% bonus damage means enemies will sometimes explode into a gory red paste. Watch out for flying eyeballs!\n';
        perktext += 'Rank 2) You now inflict +10% damage in combat.\n';
        perktext += 'Rank 3) You now inflict +15% damage in combat.\n';
        perktext += 'Rank 4) When an enemy explodes, nearby enemies may suffer the same fate.\n';
        perktext += 'Rank 5) You now inflict +25% damage in combat.';
    }
    else if (msg.content.toLowerCase().startsWith("!vans")){
        PERKSPECIAL_Name = "Intelligence";
        PERKSPECIAL_MAX_RANKS = 5;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        PerkID = 5;
        PERKSPECIAL_Minimum = 1;
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/IF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/vans.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Rank 1) Let Vault-Tec guide you! The path to your closest quest target is displayed.\n';
        perktext += 'Rank 2) Gain +2 to Perception.\n';
        perktext += 'Rank 3) Ranged weapons now have a 5% chance to lock on and hit even moving targets.\n';
        perktext += 'Rank 4) Ranged weapons now have a 10% chance to lock on and hit even moving targets.\n';
        perktext += 'Rank 5) Ranged weapons now have a 15% chance to lock on and hit even moving targets.';
    }
    else if (msg.content.toLowerCase().startsWith("!scrapper")){
        PERKSPECIAL_Name = "Intelligence";
        PERKSPECIAL_MAX_RANKS = 5;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        PerkID = 550;
        PERKSPECIAL_Minimum = 5;
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/IF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/Fo4_Scrapper.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Rank 1) Waste not, want not! You can salvage uncommon components like screws, aluminum, and copper when scrapping weapons and armor.\n';
        perktext += 'Rank 2) You can salvage rare components like circuitry, nuclear material, and fiber optics when scrapping weapons and armor. Items with favorited components are highlighted.\n';
        perktext += 'Rank 3) You get more from salvaging.\n';
        perktext += 'Rank 4) You get even more from salvaging.\n';
        perktext += 'Rank 5) You get even even more from salvaging.';
    }
    else if (msg.content.toLowerCase().startsWith("!science")){
        PERKSPECIAL_Name = "Intelligence";
        PERKSPECIAL_MAX_RANKS = 5;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        PerkID = 650;
        PERKSPECIAL_Minimum = 6;
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/IF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/Fo4_Science!.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Rank 1) Take full advantage of advanced technology with access to base level and Rank 1 high-tech mods, high tech equipment can be refined 20% better.\n';
        perktext += 'Rank 2) You gain access to Rank 2 high-tech mods, high tech equipment can be refined 40% better.\n';
        perktext += 'Rank 3) You gain access to Rank 3 high-tech mods, high tech equipment can be refined 60% better.\n';
        perktext += 'Rank 4) You gain access to Rank 4 high-tech mods, high tech equipment can be refined 80% better.\n';
        perktext += 'Rank 5) You gain access to Rank 5 high-tech mods, high tech equipment can be refined 100% better.';
    }
    else if (msg.content.toLowerCase().startsWith("!robotics")){
        PERKSPECIAL_Name = "Intelligence";
        PERKSPECIAL_MAX_RANKS = 5;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        PerkID = 850;
        PERKSPECIAL_Minimum = 8;
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/IF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/Fo4_Robotics_Expert.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Rank 1) Machines will always serve humans, if you have anything to say about it. Hack a robot, and gain a chance to power it on or off, or initiate a self-destruct.\n';
        perktext += 'Rank 2) When you successfully hack a robot, you can incite it to attack.\n';
        perktext += 'Rank 3) When you successfully hack a robot, you can give it specific commands.\n';
        perktext += 'Rank 4) Hacking can be done at longer ranges.\n';
        perktext += 'Rank 5) Hacking can be done at even longer ranges.';
    }
    else if (msg.content.toLowerCase().startsWith("!physicist")){
        PERKSPECIAL_Name = "Intelligence";
        PERKSPECIAL_MAX_RANKS = 5;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        PerkID = 950;
        PERKSPECIAL_Minimum = 9;
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/IF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/Fo4_Nuclear_Physicist.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Rank 1) You\'ve learned to split the atom...and command it. toxic weapons do 50% more damage and Fusion Cores last an extra 25% longer.\n';
        perktext += 'Rank 2) Toxic weapons now do double damage and Fusion Cores last an extra 50% longer.\n';
        perktext += 'Rank 3) Fusion Cores can be ejected from Power Armor like devastating grenades and Fusion Cores last twice as long, toxic weapons deal 150% damage.\n';
        perktext += 'Rank 4) Toxic weapons now do 200% damage and Fusion Cores last an extra 150% longer.\n';
        perktext += 'Rank 5) Toxic weapons now do 250% damage and Fusion Cores last an extra 200% longer.';
    }
    else if (msg.content.toLowerCase().startsWith("!nerd")){
        PERKSPECIAL_Name = "Intelligence";
        PERKSPECIAL_MAX_RANKS = 5;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        PerkID = 1050;
        PERKSPECIAL_Minimum = 10;
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/IF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/nerd_rage.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Rank 1) Genius. Is. ANGRY! When your Health drops below 20%, time slows and you gain +20 Damage resistance and do 20% more damage while the effect lasts.\n';
        perktext += 'Rank 2) You now gain 30 more Damage Resistance and do 30% more damage while Nerd Rage is in effect.\n';
        perktext += 'Rank 3) You now gain 40 more Damage Resistance and do 40% more damage while Nerd Rage is in effect. Kills you make while enraged restore some lost Health.\n\n';
        perktext += 'Rank 4) You now gain 50 more Damage Resistance and do 50% more damage while Nerd Rage is in effect. Kills you make while enraged restore some lost Health.\n\n';
        perktext += 'Rank 5) You now gain 60 more Damage Resistance and do 60% more damage while Nerd Rage is in effect. Kills you make while enraged restore some lost Health.';
    }
    else if (msg.content.toLowerCase().startsWith("!medic")){
        PERKSPECIAL_Name = "Intelligence";
        PERKSPECIAL_MAX_RANKS = 5;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        PerkID = 250;
        PERKSPECIAL_Minimum = 2;
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/IF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/Fo4_Medic.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Rank 1) Is there a doctor in the house? medical items restore 40% of lost Health, and ChemAway removes 40% of toxic damage.\n';
        perktext += 'Rank 2) Medical items restore 60% of lost Health, and ChemAway removes 60% of toxic damage.\n';
        perktext += 'Rank 3) Medical items restore 80% of lost Health, and ChemAway removes 80% of toxic damage.\n';
        perktext += 'Rank 4) Medical items and RadAway restore all lost health and radiation, and work 10% more quickly.\n';
        perktext += 'Rank 5) Restoration items work 50% faster.';
    }
    else if (msg.content.toLowerCase().startsWith("!magick")){
        PERKSPECIAL_Name = "Intelligence";
        PERKSPECIAL_MAX_RANKS = 5;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        PerkID = 651;
        PERKSPECIAL_Minimum = 6;
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/IF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/Icon-wizard.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Rank 1) Take full advantage of magic with access to base level and Rank 1 magical mods, magical equipment can be refined 20% better.\n';
        perktext += 'Rank 2) You gain access to Rank 2 magical mods, magical equipment can be refined 40% better.\n';
        perktext += 'Rank 3) You gain access to Rank 3 magical mods, magical equipment can be refined 60% better.\n';
        perktext += 'Rank 4) You gain access to Rank 4 magical mods, magical equipment can be refined 80% better.\n';
        perktext += 'Rank 5) You gain access to Rank 5 magical mods, magical equipment can be refined 100% better.';
    }
    else if (msg.content.toLowerCase().startsWith("!magicexpert")){
        PERKSPECIAL_Name = "Intelligence";
        PERKSPECIAL_MAX_RANKS = 5;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        PerkID = 851;
        PERKSPECIAL_Minimum = 8;
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/IF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/Fo4_Robotics_Expert.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Rank 1) Hack a magical construct, and gain a chance to power it on or off, or initiate a self-destruct.\n';
        perktext += 'Rank 2) When you successfully hack a magical construct, you can incite it to attack.\n';
        perktext += 'Rank 3) When you successfully hack a magical construct, you can give it specific commands.\n';
        perktext += 'Rank 4) Hacking can be done at longer ranges.\n';
        perktext += 'Rank 5) Hacking can be done at even longer ranges.';
    }
    else if (msg.content.toLowerCase().startsWith("!hacker")){
        PERKSPECIAL_Name = "Intelligence";
        PERKSPECIAL_MAX_RANKS = 5;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        PerkID = 450;
        PERKSPECIAL_Minimum = 4;
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/IF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/Fo4_Hacker.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Rank 1) Knowledge of cutting-edge computer encryption allows you to hack Advanced terminals\n';
        perktext += 'Rank 2) You can hack Expert terminals.\n';
        perktext += 'Rank 3) You can hack Master terminals.\n';
        perktext += 'Rank 4) When hacking, you never get locked out of a terminal when things go wrong.\n';
        perktext += 'Rank 5) Get an extra chance to hack.';
    }
    else if (msg.content.toLowerCase().startsWith("!gunnut")){
        PERKSPECIAL_Name = "Intelligence";
        PERKSPECIAL_MAX_RANKS = 5;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        PerkID = 350;
        PERKSPECIAL_Minimum = 3;
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/IF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/Fo4_Gun_Nut.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Rank 1) You gain access to base level and Rank 1 gun mods, guns can be refined 20% better.\n';
        perktext += 'Rank 2) You gain access to Rank 2 gun mods, guns can be refined 40% better.\n';
        perktext += 'Rank 3) You gain access to Rank 3 gun mods, guns can be refined 60% better.\n';
        perktext += 'Rank 4) You gain access to Rank 4 gun mods, guns can be refined 80% better.\n';
        perktext += 'Rank 5) You gain access to Rank 5 gun mods, guns can be refined 100% better.';
    }
    else if (msg.content.toLowerCase().startsWith("!chemist")){
        PERKSPECIAL_Name = "Intelligence";
        PERKSPECIAL_MAX_RANKS = 5;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        PerkID = 750;
        PERKSPECIAL_Minimum = 7;
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/IF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/Fo4_Chemist.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Rank 1) Any chems you take last 50% longer. Far out.\n';
        perktext += 'Rank 2) Any chems you take now last twice as long.\n';
        perktext += 'Rank 3) Any chems you take now last an additional 150% longer.\n';
        perktext += 'Rank 4) Any chems you take now last an additional 200% longer.\n';
        perktext += 'Rank 5) Any chems you take now last an additional 250% longer';
    }
    else if (msg.content.toLowerCase().startsWith("!action")){
        PERKSPECIAL_Name = "Agility";
        PERKSPECIAL_MAX_RANKS = 5;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        PerkID = 560;
        PERKSPECIAL_Minimum = 5;
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/AF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/Fo4_Action_Boy.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'There\'s no time to waste!\n';
        perktext += 'Rank 1) Your Action Points now regenerate 25% faster.\n';
        perktext += 'Rank 2) Your Action Points now regenerate 50% faster.\n';
        perktext += 'Rank 3) Your Action Points now regenerate 75% faster.\n';
        perktext += 'Rank 4) Your Action Points now regenerate 100% faster.\n';
        perktext += 'Rank 5) Your Action Points now regenerate 125% faster.';
    }
    else if (msg.content.toLowerCase().startsWith("!blitz")){
        PERKSPECIAL_Name = "Agility";
        PERKSPECIAL_MAX_RANKS = 5;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        PerkID = 960;
        PERKSPECIAL_Minimum = 9;
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/AF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/Fo4_Blitz.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Rank 1) Find the gap and make the tackle! like some sort of flash....step close to melee distance in an instant.\n';
        perktext += 'Rank 2) Close to melee distance from further away in a flash...step.\n';
        perktext += 'Rank 3) Close to melee distance from even further away in a flash...step.\n';
        perktext += 'Rank 4) Close to melee distance from yet even further away in a flash...step.\n';
        perktext += 'Rank 5) Close to melee distance from further quite far away in a flash...step.';
    }
    else if (msg.content.toLowerCase().startsWith("!commando")){
        PERKSPECIAL_Name = "Agility";
        PERKSPECIAL_MAX_RANKS = 5;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        PerkID = 260;
        PERKSPECIAL_Minimum = 2;
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/AF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/Fo4_Commando.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Rank 1) Rigorous combat training means automatic weapons do 20% more damage\n';
        perktext += 'Rank 2) Attacks with automatic weapons do 40% more damage, with improved hip fire accuracy.\n';
        perktext += 'Rank 3) Attacks with automatic weapons do 60% more damage. Hip fire accuracy is improved even more.\n';
        perktext += 'Rank 4) Attacks with automatic weapons do 80% more damage and gain a chance to stagger opponents.\n';
        perktext += 'Rank 5) Your automatic weapons now do double damage and have a greater chance to stagger opponents.';
    }
    else if (msg.content.toLowerCase().startsWith("!gunfu")){
        PERKSPECIAL_Name = "Agility";
        PERKSPECIAL_MAX_RANKS = 5;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        PerkID = 1060;
        PERKSPECIAL_Minimum = 10;
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/AF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/gun_fu.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Rank 1) You\'ve learned to apply ancient martial arts to gunplay! Do 25% more damage to your second aimed target and beyond.\n';
        perktext += 'Rank 2) When aiming you do 50% more damage to your third target and beyond.\n';
        perktext += 'Rank 3) When aiming you instantly do a Critical Hit against your fourth target and beyond.\n';
        perktext += 'Rank 4) When aiming you instantly do a Critical Hit against your third target and beyond.\n';
        perktext += 'Rank 5) When aiming you instantly do a Critical Hit against your second target and beyond.';
    }
    else if (msg.content.toLowerCase().startsWith("!gunslinger")){
        PERKSPECIAL_Name = "Agility";
        PERKSPECIAL_MAX_RANKS = 5;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        PerkID = 6;
        PERKSPECIAL_Minimum = 1;
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/AF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/Fo4_Gunslinger.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Rank 1) Channel the spirit of the old west! Pistols do 20% more damage.\n';
        perktext += 'Rank 2) Pistols now do 40% more damage and have increased range.\n';
        perktext += 'Rank 3) Pistols now do 60% more damage and range is increased even further.\n';
        perktext += 'Rank 4) Pistols now do 80% more damage and their attacks can disarm opponents.\n';
        perktext += 'Rank 5) Pistols now do double damage. Their attacks have a much better chance to disarm opponents, and may even cripple a limb.';
    }
    else if (msg.content.toLowerCase().startsWith("!konoichi")){
        PERKSPECIAL_Name = "Agility";
        PERKSPECIAL_MAX_RANKS = 5;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        PerkID = 761;
        PERKSPECIAL_Minimum = 7;
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/AF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/L5W6pHy.gif';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'The untimate inflitrator! The shadowy konoichi or female ninjas are masters of subterfuge after all who ever expect a proper lady to stab you in the back?\n';
        perktext += 'Rank 1) your melee sneak attack do 2.5x normal damage and criticals build 5% faster.\n';
        perktext += 'Rank 2) Your melee sneak attacks do 3x normal damage and criticals build 7% faster.\n';
        perktext += 'Rank 3) Your melee sneak attacks do 3.5x normal damage and criticals build 9% faster.\n';
        perktext += 'Rank 4) Your melee sneak attacks do 4x normal damage and criticals build 11% faster.\n';
        perktext += 'Rank 5) Your melee sneak attacks do 4.5x normal damage and criticals build 15% faster.';
    }
    else if (msg.content.toLowerCase().startsWith("!mister")){
        PERKSPECIAL_Name = "Agility";
        PERKSPECIAL_MAX_RANKS = 5;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        PerkID = 460;
        PERKSPECIAL_Minimum = 4;
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/AF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/Fo4_Mister_Sandman.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Rank 1) As an agent of death, you can instantly kill a sleeping person. Your silenced weapons do an additional 15% sneak attack damage.\n';
        perktext += 'Rank 2) Your silenced weapons do an additional 30% sneak attack damage.\n';
        perktext += 'Rank 3) Your silenced weapons now do 50% more sneak attack damage.\n';
        perktext += 'Rank 4) Your silenced weapons now do 70% more sneak attack damage.\n';
        perktext += 'Rank 5) Your silenced weapons now do 90% more sneak attack damage.';
    }
    else if (msg.content.toLowerCase().startsWith("!moving")){
        PERKSPECIAL_Name = "Agility";
        PERKSPECIAL_MAX_RANKS = 5;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        PerkID = 660;
        PERKSPECIAL_Minimum = 6;
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/AF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/Fo4_Moving_Target.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Rank 1) They can\'t hurt what they can\'t hit! Get 25+ Damage Resistance and 25+ Energy Resistance when you\'re sprinting.\n';
        perktext += 'Rank 2) You now get +50 Damage Resistance and +50 Energy Resistance when you\'re sprinting.\n';
        perktext += 'Rank 3) Sprinting costs 50% fewer Action Points.\n';
        perktext += 'Rank 4) You now get +60 Damage Resistance and +60 Energy Resistance when you\'re sprinting. Sprinting costs 60% fewer Action Points.\n';
        perktext += 'Rank 5) You now get +70 Damage Resistance and +70 Energy Resistance when you\'re sprinting. Sprinting costs 70% fewer Action Points.';
    }
    else if (msg.content.toLowerCase().startsWith("!ninja")){
        PERKSPECIAL_Name = "Agility";
        PERKSPECIAL_MAX_RANKS = 5;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        PerkID = 760;
        PERKSPECIAL_Minimum = 7;
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/AF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/Fo4_Ninja.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Trained as a shadow warrior, your ranged, melee sneak and normal attacks do more damage.\n';
        perktext += 'Rank 1) Ranged sneak attacks do 2.5x damage, non sneak ranged is 2.25x, melee sneak attacks do 4x damage, non sneak melee is 3x.\n';
        perktext += 'Rank 2) Ranged sneak attacks do 3.0x damage, non sneak ranged is 2.50x, melee sneak attacks do 5x damage, non sneak melee is 4x.\n';
        perktext += 'Rank 3) Ranged sneak attacks do 3.5x damage, non sneak ranged is 2.75x, melee sneak attacks do 10x damage, non sneak melee is 8x.\n';
        perktext += 'Rank 4) Ranged sneak attacks do 4.0x damage, non sneak ranged is 3.00x, melee sneak attacks do 12x damage, non sneak melee is 10x.\n';
        perktext += 'Rank 5) Ranged sneak attacks do 4.5x damage, non sneak ranged is 3.25x, melee sneak attacks do 14x damage, non sneak melee is 12x.';
    }
    else if (msg.content.toLowerCase().startsWith("!quick")){
        PERKSPECIAL_Name = "Agility";
        PERKSPECIAL_MAX_RANKS = 5;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        PerkID = 860;
        PERKSPECIAL_Minimum = 8;
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/AF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/153px-Quick_hands.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Rank 1) In combat, there\'s no time to hesitate. You can reload all guns faster.\n';
        perktext += 'Rank 2) You can reload all guns even faster.\n';
        perktext += 'Rank 3) Quick and efficient. You gain 10 additional Action Points.\n';
        perktext += 'Rank 4) Quick and efficient. You gain 10 additional IP.\n';
        perktext += 'Rank 5) Quick and efficient. You gain 10 additional AP and IP.';
    }
    else if (msg.content.toLowerCase().startsWith("!sneak")){
        PERKSPECIAL_Name = "Agility";
        PERKSPECIAL_MAX_RANKS = 5;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        PerkID = 360;
        PERKSPECIAL_Minimum = 3;
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/AF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/Fo4_Sneak_perk.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Rank 1) Become whisper, become shadow. You are 20% harder to detect while sneaking.\n';
        perktext += 'Rank 2) You are now 30% harder to detect while sneaking, and no longer trigger floor-based traps.\n';
        perktext += 'Rank 3) You are now 40% harder to detect while sneaking, and no longer trigger enemy mines.\n';
        perktext += 'Rank 4) You are now 50% harder to detect while sneaking, and running no longer adversely affects stealth.\n';
        perktext += 'Rank 5) Engaging stealth causes distant enemies to lose you.';
    }
    else if (msg.content.toLowerCase().startsWith("!animal")){
        PERKSPECIAL_Name = "Charisma";
        PERKSPECIAL_MAX_RANKS = 5;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        PerkID = 540;
        PERKSPECIAL_Minimum = 5;
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/CF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/Fo4_Animal_Friend.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
            perktext += 'Commune with beasts!\n';
            perktext += 'Rank 1) Aim at any animal below your level and gain a chance to pacify it.\n';
            perktext += 'Rank 2) When you successfully pacify an animal, you can incite it to attack\n';
            perktext += 'Rank 3) When you successfully pacify an animal, you can give it specific commands\n';
            perktext += 'Rank 4) Pacification is 10% easier.\n';
            perktext += 'Rank 5) Pacification is 20% easier.';
    }
    else if (msg.content.toLowerCase().startsWith("!attack")){
        PERKSPECIAL_Name = "Charisma";
        PERKSPECIAL_MAX_RANKS = 5;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        PerkID = 440;
        PERKSPECIAL_Minimum = 4;
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/CF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/Fo4_Attack_Dog.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Rank 1) Your faithful canine companion can hold an enemy, giving you a greater chance to hit them when aiming.\n';
        perktext += 'Rank 2) When your dog holds an enemy, there\'s a chance he\'ll cripple the limb he\'s biting.\n';
        perktext += 'Rank 3) When your dog holds an enemy, there\'s a chance he\'ll cause them to bleed.\n';
        perktext += 'Rank 4) When adventuring with your dog, you take 10% less damage.\n';
        perktext += 'Rank 5) When adventuring with your dog, you deal 10% more damage.';
    }
    else if (msg.content.toLowerCase().startsWith("!black")){
        PERKSPECIAL_Name = "Charisma";
        PERKSPECIAL_MAX_RANKS = 5;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        PerkID = 241;
        PERKSPECIAL_Minimum = 2;
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/CF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/Fo4_Black_Widow.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Rank 1) You\'re charming... and dangerous. Men suffer +5% damage in combat, and are easier to persuade in dialogue.\n';
        perktext += 'Rank 2) Men now suffer +10% damage in combat, and are even easier to persuade in dialogue. They are also easier to pacify with the Intimidation perk.\n';
        perktext += 'Rank 3) Men now suffer +15% damage in combat, and are much easier to persuade in dialogue. They are now even easier to pacify with the Intimidation perk.\n';
        perktext += 'Rank 4) Men now suffer +20% damage in combat, and are much easier to persuade in dialogue. They are now even easier to pacify with the Intimidation perk.\n';
        perktext += 'Rank 5) Men now suffer +25% damage in combat, and are much easier to persuade in dialogue. They are now even easier to pacify with the Intimidation perk.';
    }
    else if (msg.content.toLowerCase().startsWith("!cap")){
        PERKSPECIAL_Name = "Charisma";
        PERKSPECIAL_MAX_RANKS = 5;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        PerkID = 4;
        PERKSPECIAL_Minimum = 1;
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/CF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/Fo4_Cap_Collector.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Rank 1) You\'ve mastered the art of the deal! Buying and selling prices at vendors are 20% better.\n';
        perktext += 'Rank 2) Buying and selling prices at vendors are 25% better.\n';
        perktext += 'Rank 3) Buying and selling prices at vendors are 30% better. You can now invest a total of 500 caps to raise a store\'s buying capacity.\n';
        perktext += 'Rank 4) Buying and selling prices at vendors are 35% better. You can now invest a total of 700 caps to raise a store\'s buying capacity.\n';
        perktext += 'Rank 5) Buying and selling prices at vendors are 40% better. You can now invest a total of 1000 caps to raise a store\'s buying capacity.';
    }
    else if (msg.content.toLowerCase().startsWith("!inspirational")){
        PERKSPECIAL_Name = "Charisma";
        PERKSPECIAL_MAX_RANKS = 5;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        PerkID = 840;
        PERKSPECIAL_Minimum = 8;
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/CF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/Fo4_Inspirational.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Rank 1) Because you lead by example, your companion does more damage in combat, and cannot hurt you.\n';
        perktext += 'Rank 2) Your companion resists more damage in combat, and can\'t be harmed by your attacks.\n';
        perktext += 'Rank 3) Your companion can carry more items.\n';
        perktext += 'Rank 4) Your companions have 10% more health.\n';
        perktext += 'Rank 5) Your companions have 20% more health.';
    }
    else if (msg.content.toLowerCase().startsWith("!intimidation")){
        PERKSPECIAL_Name = "Charisma";
        PERKSPECIAL_MAX_RANKS = 5;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        PerkID = 1040;
        PERKSPECIAL_Minimum = 10;
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/CF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/Fo4_Intimidation.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Rank 1) Time to show everyone who\'s boss! With your gun, aim at any human opponent below your level and gain a chance to pacify them.\n';
        perktext += 'Rank 2) When pacify someone, you can incite them to attack.\n';
        perktext += 'Rank 3) When pacify someone, you can give them specific commands.\n';
        perktext += 'Rank 4) Pacification is 10% easier.\n';
        perktext += 'Rank 5) Pacification is 20% easier.';
    }
    else if (msg.content.toLowerCase().startsWith("!lady")){
        PERKSPECIAL_Name = "Charisma";
        PERKSPECIAL_MAX_RANKS = 5;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        PerkID = 240;
        PERKSPECIAL_Minimum = 2;
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/CF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/Fo4_Lady_Killer.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Rank 1) You\'re charming... and dangerous. Women suffer +5% damage in combat, and are easier to persuade in dialogue.\n';
        perktext += 'Rank 2) Women now suffer +10% damage in combat, and are even easier to persuade in dialogue. They are also easier to pacify with the Intimidation perk.\n';
        perktext += 'Rank 3) Women now suffer +15% damage in combat, and are much easier to persuade in dialogue. They are now even easier to pacify with the Intimidation perk.\n';
        perktext += 'Rank 4) Women now suffer +20% damage in combat, and are much easier to persuade in dialogue. They are now even easier to pacify with the Intimidation perk.\n';
        perktext += 'Rank 5) Women now suffer +25% damage in combat, and are much easier to persuade in dialogue. They are now even easier to pacify with the Intimidation perk.';
    }
    else if (msg.content.toLowerCase().startsWith("!local")){
        PERKSPECIAL_Name = "Charisma";
        PERKSPECIAL_MAX_RANKS = 5;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        PerkID = 640;
        PERKSPECIAL_Minimum = 6;
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/CF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/Fo4_Local_Leader.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Rank 1) As the ruler everyone turns to, you are able to establish supply lines between your workshop settlements.\n';
        perktext += 'Rank 2) You can build stores and workstations at workshop settlements.\n';
        perktext += 'Rank 3) You can build Training Centers at workshop settlements allowing you to train your settlers in new skills or improve existing skills.\n';
        perktext += 'Rank 4) You can build Magi-Tech Centers at workshop settlements for implanting cybernetics or magical enchantments.\n';
        perktext += 'Rank 5) You can build RDR Factories at workshop settlements for the creator of Rider Belt Systems or Sentai Changer Systems.\n\n';
    }
    else if (msg.content.toLowerCase().startsWith("!lone")){
        PERKSPECIAL_Name = "Charisma";
        PERKSPECIAL_MAX_RANKS = 5;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        PerkID = 340;
        PERKSPECIAL_Minimum = 3;
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/CF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/Fo4_Lone_Wanderer.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Rank 1) Who needs friends, anyway? When adventuring without a companion, you take 15% less damage and carry weight increases by 50.\n';
        perktext += 'Rank 2) When adventuring without a companion, you take 30% less damage and carry weight increases by 100\n';
        perktext += 'Rank 3) When adventuring without a companion, you do 25% more damage.\n';
        perktext += 'Rank 4) When adventuring without a companion, you have 25 more action points.\n';
        perktext += 'Rank 5) When adventuring without a companion, you have 25 more intelligence points.';
    }
    else if (msg.content.toLowerCase().startsWith("!party")){
        PERKSPECIAL_Name = "Charisma";
        PERKSPECIAL_MAX_RANKS = 5;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        PerkID = 740;
        PERKSPECIAL_Minimum = 7;
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/CF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/Fo4_Party_Boy.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Rank 1) Nobody has a good time like you! There\'s no chance you\'ll get addicted to alcohol.\n';
        perktext += 'Rank 2) The effects of alcohol are doubled.\n';
        perktext += 'Rank 3) Your Luck is increased by 3 while you\'re under the influence of alcohol.\n';
        perktext += 'Rank 4) Your Luck is increased by 4 while you\'re under the influence of alcohol.\n';
        perktext += 'Rank 5) Your Luck is increased by 5 while you\'re under the influence of alcohol.';
    }
    else if (msg.content.toLowerCase().startsWith("!sex")){
        PERKSPECIAL_Name = "Charisma";
        PERKSPECIAL_MAX_RANKS = 5;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        PerkID = 1041;
        PERKSPECIAL_Minimum = 10;
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/CF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/Fo4_Intimidation.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Rank 1) Not a fan of guns? use your va va voom to charm any human opponent below your level and gain a chance to pacify them.\n';
        perktext += 'Rank 2) When pacify someone, you can incite them to attack.\n';
        perktext += 'Rank 3) When pacify someone, you can give them specific commands.\n';
        perktext += 'Rank 4) Pacification is 10% easier.\n';
        perktext += 'Rank 5) Pacification is 20% easier.';
    }
    else if (msg.content.toLowerCase().startsWith("!wasteland")){
        PERKSPECIAL_Name = "Charisma";
        PERKSPECIAL_MAX_RANKS = 5;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        PerkID = 940;
        PERKSPECIAL_Minimum = 9;
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/CF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/Fo4_Wasteland_Whisperer.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Rank 1) Master the post-apocalypse! With your gun, aim at any Wasteland creature below your level and gain a chance to pacify it.\n';
        perktext += 'Rank 2) When you successfully pacify a creature, you can incite it to attack.\n';
        perktext += 'Rank 3) When you successfully pacify a creature, you can give it specific commands.\n';
        perktext += 'Rank 4) Pacification is 10% easier.\n';
        perktext += 'Rank 5) Pacification is 20% easier.';
    }
    else if (msg.content.toLowerCase().startsWith("!adamantium")){
        PERKSPECIAL_Name = "Endurance";
        PERKSPECIAL_MAX_RANKS = 5;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        PerkID = 730;
        PERKSPECIAL_Minimum = 7;
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/EF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/Fo4_Adamantium_Skeleton.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Rank 1) Your skeleton has been infused with indestructible metal.\n';
        perktext += 'Rank 1) Your limb damage is now reduced by 30%.\n';
        perktext += 'Rank 2) Your limb damage is now reduced by 45%.\n';
        perktext += 'Rank 3) Your limb damage is now reduced by 60%.\n';
        perktext += 'Rank 4) Your limb damage is now reduced by 75%.\n';
        perktext += 'Rank 5) Your limb damage is now reduced by 90%.';    }
    else if (msg.content.toLowerCase().startsWith("!antitoxin")){
        PERKSPECIAL_Name = "Endurance";
        PERKSPECIAL_MAX_RANKS = 5;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        PerkID = 831;
        PERKSPECIAL_Minimum = 8;
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/EF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/153px-Rad_Resistant_FO4.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Take the sting out of life!\n';
        perktext += 'Rank 1) Instantly gain +10 Posion Resistance\n';
        perktext += 'Rank 2) You now have +20 Posion resistance.\n';
        perktext += 'Rank 3) You now have +30 Posion resistance.\n';
        perktext += 'Rank 4) You now have +40 Posion resistance.\n';
        perktext += 'Rank 5) You now have +50 Posion resistance.';
    }
    else if (msg.content.toLowerCase().startsWith("!aqua")){
        PERKSPECIAL_Name = "Endurance";
        PERKSPECIAL_MAX_RANKS = 5;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        PerkID = 530;
        PERKSPECIAL_Minimum = 5;
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/EF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/Fo4_Aquaboy.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Water is your ally.\n';
        perktext += 'Rank 1) You no longer take special damage from swimming, and can hold your breath twice as long.\n';
        perktext += 'Rank 2) You can hold your breath three times as long. You become totally undetectable while submerged.\n';
        perktext += 'Rank 3) You can hold your breath four times as long. You swim 10% faster.\n';
        perktext += 'Rank 4) You can hold your breath five times as long. You swim 20% faster.\n';
        perktext += 'Rank 5) You can hold your breath six times as long. You swim 30% faster.';
    }
    else if (msg.content.toLowerCase().startsWith("!cannibal")){
        PERKSPECIAL_Name = "Endurance";
        PERKSPECIAL_MAX_RANKS = 5;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        PerkID = 830;
        PERKSPECIAL_Minimum = 8;
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/EF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/Fo4_Cannibal.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Rank 1) Feast on mortal flesh to heal your wounds! Eating human corpses restores 10% Health.\n';
        perktext += 'Rank 2) Eating any corpse restores 10% Health. Eating human corpses restores 20% Health.\n';
        perktext += 'Rank 3) Human and non human raw corpses now heal 25% Health.\n';
        perktext += 'Rank 4) Human and non human raw corpses now heal 30% Health.\n';
        perktext += 'Rank 5) Human and non human raw corpses now heal 35% Health.';
    }
    else if (msg.content.toLowerCase().startsWith("!chemresist")){
        PERKSPECIAL_Name = "Endurance";
        PERKSPECIAL_MAX_RANKS = 5;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        PerkID = 430;
        PERKSPECIAL_Minimum = 4;
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/EF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/Fo4_Chem_Resistant.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Rank 1) All the rush without the hassle! You\'re 50% less likely to get addicted when consuming Chems.\n';
        perktext += 'Rank 2) You\'re 60% less likely to get addicted when consuming Chems.\n';
        perktext += 'Rank 3) You\'re 70% less likely to get addicted when consuming Chems.\n';
        perktext += 'Rank 4) You\'re 80% less likely to get addicted when consuming Chems.\n';
        perktext += 'Rank 5) You\'re 90% less likely to get addicted when consuming Chems.';
    }
    else if (msg.content.toLowerCase().startsWith("!chilled")){
        PERKSPECIAL_Name = "Endurance";
        PERKSPECIAL_MAX_RANKS = 5;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        PerkID = 531;
        PERKSPECIAL_Minimum = 5;
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/EF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/Fo4_Toughness.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Rank 1) Chill out! Instantly gain +10 Cryo Resistance\n';
        perktext += 'Rank 2) You now have +20 Cryo resistance.\n';
        perktext += 'Rank 3) You now have +30 Cryo resistance.\n';
        perktext += 'Rank 4) You now have +40 Cryo resistance.\n';
        perktext += 'Rank 5) You now have +50 Cryo resistance.';
    }
    else if (msg.content.toLowerCase().startsWith("!fireproof")){
        PERKSPECIAL_Name = "Endurance";
        PERKSPECIAL_MAX_RANKS = 5;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        PerkID = 230;
        PERKSPECIAL_Minimum = 2;
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/EF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/Fo4_Toughness.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Rank 1) What the hell are you made of? Asesbestos! Instantly gain +10 Fire Resistance\n';
        perktext += 'Rank 2) You now have +20 Fire resistance.\n';
        perktext += 'Rank 3) You now have +30 Fire resistance.\n';
        perktext += 'Rank 4) You now have +40 Fire resistance.\n';
        perktext += 'Rank 5) You now have +50 Fire resistance.';
    }
    else if (msg.content.toLowerCase().startsWith("!lead")){
        PERKSPECIAL_Name = "Endurance";
        PERKSPECIAL_MAX_RANKS = 5;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        PerkID = 231;
        PERKSPECIAL_Minimum = 2;
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/EF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/Fo4_Lead_Belly.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Rank 1) Your digestive tract has adjusted to the weirdness! Take 10% less toxic/radiation/bugstar damage from eating or drinking.\n';
        perktext += 'Rank 2) Take 20% less toxic/radiation/bugstar damage from eating or drinking.\n';
        perktext += 'Rank 3) Take 30% less toxic/radiation/bugstar damage from eating or drinking.\n';
        perktext += 'Rank 4) Take 40% less toxic/radiation/bugstar damage from eating or drinking.\n';
        perktext += 'Rank 5) Take 50% less toxic/radiation/bugstar damage from eating or drinking.';
    }
    else if (msg.content.toLowerCase().startsWith("!life")){
        PERKSPECIAL_Name = "Endurance";
        PERKSPECIAL_MAX_RANKS = 5;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        PerkID = 330;
        PERKSPECIAL_Minimum = 3;
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/EF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/Fo4_Life_Giver.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Rank 1) You embody wellness! Instantly gain +20 maximum Health.\n';
        perktext += 'Rank 2) You instantly gain another +20 maximum Health.\n';
        perktext += 'Rank 3) You instantly gain another +20 maximum Health, and slowly regenerate lost Health 10% faster.\n';
        perktext += 'Rank 4) You instantly gain another +20 maximum Health, and slowly regenerate lost Health 15% faster.\n';
        perktext += 'Rank 5) You instantly gain another +20 maximum Health, and slowly regenerate lost Health 20% faster.';
    }
    else if (msg.content.toLowerCase().startsWith("!rad")){
        PERKSPECIAL_Name = "Endurance";
        PERKSPECIAL_MAX_RANKS = 5;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        PerkID = 630;
        PERKSPECIAL_Minimum = 6;
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/EF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/153px-Rad_Resistant_FO4.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Rank 1) Exposure to the Wasteland has made you more resilient, instantly granting +10 special (toxic/radiation/bugstar) Resistance.\n';
        perktext += 'Rank 2) You now have +20 special Resistance.\n';
        perktext += 'Rank 3) You now have +30 special Resistance.\n';
        perktext += 'Rank 4) You now have +40 special Resistance.\n';
        perktext += 'Rank 5) You now have +50 special Resistance.';
    }
    else if (msg.content.toLowerCase().startsWith("!solar")){
        PERKSPECIAL_Name = "Endurance";
        PERKSPECIAL_MAX_RANKS = 5;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        PerkID = 1030;
        PERKSPECIAL_Minimum = 10;
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/EF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/Fo4_Solar_Powered.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Rank 1) Catch some rays! Gain +2 to Strength and Endurance between the hours of 6:00a.m. and 6:00p.m.\n';
        perktext += 'Rank 2) Sunlight slowly heals your special damage 10% faster.\n';
        perktext += 'Rank 3) Sunlight slowly regenerates your lost Health 10% faster.\n';
        perktext += 'Rank 4) Sunlight slowly regenerates your lost AP 10% faster.\n';
        perktext += 'Rank 5) Sunlight slowly regenerates your lost IP 10% faster.';
    }
    else if (msg.content.toLowerCase().startsWith("!toughness")){
        PERKSPECIAL_Name = "Endurance";
        PERKSPECIAL_MAX_RANKS = 5;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        PerkID = 3;
        PERKSPECIAL_Minimum = 1;
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/EF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/Fo4_Toughness.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Rank 1) If nothing else, you can take a beating! Instantly gain +10 Damage Resistance\n';
        perktext += 'Rank 2) You now have +20 damage resistance.\n';
        perktext += 'Rank 3) You now have +30 damage resistance.\n';
        perktext += 'Rank 4) You now have +40 damage resistance.\n';
        perktext += 'Rank 5) You now have +50 damage resistance.';
    }
    else if (msg.content.toLowerCase().startsWith("!ghoulish")){
        PERKSPECIAL_Name = "Endurance";
        PERKSPECIAL_MAX_RANKS = 5;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        PerkID = 930;
        PERKSPECIAL_Minimum = 9;
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/EF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/Fo4_Ghoulish.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Sure, you\'re still human - on the outside!\n';
        perktext += 'Rank 1) Toxic damage now regenerates your lost Health 10% faster.\n';
        perktext += 'Rank 2) Toxic damage now regenerates your lost Health 15% faster.\n';
        perktext += 'Rank 3) Toxic damage now regenerates your lost Health 20% faster.\n';
        perktext += 'Rank 4) Toxic damage will now begin to slowly heal at 10%, restoring 25% health in the process.\n';
        perktext += 'Rank 5) Toxic damage will now begin to slowly heal at 15%, restoring 30% health in the process.';
    }
    else if (msg.content.toLowerCase().startsWith("!bullet")){
        PERKSPECIAL_Name = "Endurance";
        PERKSPECIAL_MAX_RANKS = 5;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        PerkID = 931;
        PERKSPECIAL_Minimum = 9;
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/EF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/Fo4_Ghoulish.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Sure, you\'re still human - on the outside!\n';
        perktext += 'Rank 1) Ballstic damage now regenerates your lost Health 10% faster.\n';
        perktext += 'Rank 2) Ballstic damage now regenerates your lost Health 15% faster.\n';
        perktext += 'Rank 3) Ballstic damage now regenerates your lost Health 20% faster.\n';
        perktext += 'Rank 4) Ballstic damage will now begin to slowly heal at 10%, restoring 25% health in the process.\n';
        perktext += 'Rank 5) Ballstic damage will now begin to slowly heal at 15%, restoring 30% health in the process.';
    }
    else if (msg.content.toLowerCase().startsWith("!immolated")){
        PERKSPECIAL_Name = "Endurance";
        PERKSPECIAL_MAX_RANKS = 5;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        PerkID = 932;
        PERKSPECIAL_Minimum = 9;
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/EF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/Fo4_Ghoulish.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Sure, you\'re still human - on the outside!\n';
        perktext += 'Rank 1) Fire damage now regenerates your lost Health 10% faster.\n';
        perktext += 'Rank 2) Fire damage now regenerates your lost Health 15% faster.\n';
        perktext += 'Rank 3) Fire damage now regenerates your lost Health 20% faster.\n';
        perktext += 'Rank 4) Fire damage will now begin to slowly heal at 10%, restoring 25% health in the process.\n';
        perktext += 'Rank 5) Fire damage will now begin to slowly heal at 15%, restoring 30% health in the process.';
    }
    else if (msg.content.toLowerCase().startsWith("!frozen")){
        PERKSPECIAL_Name = "Endurance";
        PERKSPECIAL_MAX_RANKS = 5;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        PerkID = 933;
        PERKSPECIAL_Minimum = 9;
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/EF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/Fo4_Ghoulish.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Sure, you\'re still human - on the outside!\n';
        perktext += 'Rank 1) Cryo damage now regenerates your lost Health 10% faster.\n';
        perktext += 'Rank 2) Cryo damage now regenerates your lost Health 15% faster.\n';
        perktext += 'Rank 3) Cryo damage now regenerates your lost Health 20% faster.\n';
        perktext += 'Rank 4) Cryo damage will now begin to slowly heal at 10%, restoring 25% health in the process.\n';
        perktext += 'Rank 5) Cryo damage will now begin to slowly heal at 15%, restoring 30% health in the process.';
    }
    else if (msg.content.toLowerCase().startsWith("!charged")){
        PERKSPECIAL_Name = "Endurance";
        PERKSPECIAL_MAX_RANKS = 5;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        PerkID = 934;
        PERKSPECIAL_Minimum = 9;
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/EF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/Fo4_Ghoulish.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Sure, you\'re still human - on the outside!\n';
        perktext += 'Rank 1) Electrical damage now regenerates your lost Health 10% faster.\n';
        perktext += 'Rank 2) Electrical damage now regenerates your lost Health 15% faster.\n';
        perktext += 'Rank 3) Electrical damage now regenerates your lost Health 20% faster.\n';
        perktext += 'Rank 4) Electrical damage will now begin to slowly heal at 10%, restoring 25% health in the process.\n';
        perktext += 'Rank 5) Electrical damage will now begin to slowly heal at 15%, restoring 30% health in the process.';
    }
    else if (msg.content.toLowerCase().startsWith("!venemous")){
        PERKSPECIAL_Name = "Endurance";
        PERKSPECIAL_MAX_RANKS = 5;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        PerkID = 935;
        PERKSPECIAL_Minimum = 9;
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/EF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/Fo4_Ghoulish.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Sure, you\'re still human - on the outside!\n';
        perktext += 'Rank 1) Posion damage now regenerates your lost Health 10% faster.\n';
        perktext += 'Rank 2) Posion damage now regenerates your lost Health 15% faster.\n';
        perktext += 'Rank 3) Posion damage now regenerates your lost Health 20% faster.\n';
        perktext += 'Rank 4) Posion damage will now begin to slowly heal at 10%, restoring 25% health in the process.\n';
        perktext += 'Rank 5) Posion damage will now begin to slowly heal at 15%, restoring 30% health in the process.';
    }
    else if (msg.content.toLowerCase().startsWith("!resonating")){
        PERKSPECIAL_Name = "Endurance";
        PERKSPECIAL_MAX_RANKS = 5;
        KEY_User_Perk = SPECIALS.get(uid)[PERKSPECIAL_Name];
        PerkID = 936;
        PERKSPECIAL_Minimum = 9;
        thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/EF.gif';
        mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/Fo4_Ghoulish.png';
        perktext = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender)+' ('+PERKSPECIAL_Name+' Minimum '+PERKSPECIAL_Minimum+')\n';
        perktext += 'Sure, you\'re still human - on the outside!\n';
        perktext += 'Rank 1) Energy damage now regenerates your lost Health 10% faster.\n';
        perktext += 'Rank 2) Energy damage now regenerates your lost Health 15% faster.\n';
        perktext += 'Rank 3) Energy damage now regenerates your lost Health 20% faster.\n';
        perktext += 'Rank 4) Energy damage will now begin to slowly heal at 10%, restoring 25% health in the process.\n';
        perktext += 'Rank 5) Energy damage will now begin to slowly heal at 15%, restoring 30% health in the process.';
    };//if (msg.content.toLowerCase().startsWith

    if (isNaN(rankstoadd)){rankstoadd = 0;}
    if (isNaN(rankstodelete)){rankstodelete = 0;}

    var Perk_Name = settings.PlayerPerkName(PerkID, settings.UserList.get(uid).Gender);
    var slapdesc  = 'Could not add '+ Perk_Name + ' to '+ uidname +', not enough perk points.';

    if (rankstoadd < 1){
        const RiderEmbed = new discord.RichEmbed()
              RiderEmbed.setColor(randomHex.generate())
              RiderEmbed.setURL('http://www.maskedriders.info/Mee6RP/index.php')
              RiderEmbed.setThumbnail(thumb)
              RiderEmbed.setImage(mainpic)
              RiderEmbed.setDescription(perktext, true)
        msg.channel.sendEmbed(
        RiderEmbed, '', { disableEveryone: true }
        );//message.channel.sendEmbed
    };//if (rankstoadd < 1)



    if ((msg.content.toLowerCase().startsWith("!special")) || (msg.content.toLowerCase().startsWith("!specials"))){
        var thumb = 'http://www.maskedriders.info/Mee6RP/statusPic/SPECIAL.jpg';
        var mainpic = 'http://www.maskedriders.info/Mee6RP/statusPic/BrZHmjJ.png';
        var SPECIALrange = '[Range: ' + settings.SPECIALFloor.toLocaleString() + ' to ' + settings.SPECIALLimit.toLocaleString() + ']';
        var HPrange = '[Range: ' + settings.HPFloor.toLocaleString() + ' to ' + settings.HPLimit.toLocaleString() + ']';

        const RiderEmbed = new discord.RichEmbed()
            RiderEmbed.setColor(randomHex.generate())
            RiderEmbed.setURL('http://www.maskedriders.info/Mee6RP/index.php')
            RiderEmbed.setThumbnail(thumb)
            RiderEmbed.setImage(mainpic)
            RiderEmbed.addField('Strength', 'Determines lifting power and melee/hand to hand damage. [Added via !strength+**number**]' + SPECIALrange, true)/*1*/
            RiderEmbed.addField('Perception', 'Determines accuracy and view distance. [Added via !perception+**number**]' + SPECIALrange, true)
            RiderEmbed.addField('Endurance', 'Determines resistance to damage, and drain rate of AP. [Added via !endurance+**number**]' + SPECIALrange, true)
            RiderEmbed.addField('Charisma', 'Determines your social skill. [Added via !charisma+**number**]' + SPECIALrange, true)
            RiderEmbed.addField('Intelligence', 'Determines xp gain rate, and drain rate of IP. [Added via !intelligence+**number**]' + SPECIALrange, true)
            RiderEmbed.addField('Agility', 'Determines evasion, and max AP. [Added via !agility+**number**]' + SPECIALrange, true)
            RiderEmbed.addField('Luck', 'Just a little bit of everything. [Added via !luck+**number**]' + SPECIALrange, true)/*7*/
            RiderEmbed.addField('Level', 'How strong you are. [Determined by EXP]', true)/*8*/
            RiderEmbed.addField('EXP', 'Experience Points, what is needed to level up. [gain with every text post in ANY channel, type !status at any time for details]', true)/*8*/
        msg.channel.sendEmbed(
        RiderEmbed, '', { disableEveryone: true }
        );//message.channel.sendEmbed

        const RiderEmbed2 = new discord.RichEmbed()
            RiderEmbed2.setColor(randomHex.generate())
            RiderEmbed2.setURL('http://www.maskedriders.info/Mee6RP/index.php')
            RiderEmbed2.setThumbnail(thumb)
            RiderEmbed2.setImage(mainpic)
            RiderEmbed2.addField('HP', 'Your physical fortitude, when HP reaches zero you die/dehenshin (if transformed). ' + HPrange, true)/*9*/
            RiderEmbed2.addField('AP', 'Your energy for physical actions, when AP reaches zeo you can no longer perform advanced actions and are limited to basic attacks like kicks and punches. Action Boy/Girl effects the regen per post rate.' + HPrange, true)/*10*/
            RiderEmbed2.addField('IP', 'Your energy for magical actions, when IP reaches zeo you can no longer perform any magical actions. ' + HPrange, true)/*11*/
            RiderEmbed2.addField('MP', 'Deprecated term, used interchangable with AP.', true)/*12*/
            RiderEmbed2.addField('Balistic Resist', 'Base defense to Balistic/standard physical damage, calculated from a combination of level, Endurance, the Toughness Perk, and your Power Multiplier.', true)/*13*/
            RiderEmbed2.addField('Fire Resist', 'Base defense to fire/heat damage, calculated from a combination of level, Endurance, the Fireproof Perk, and your Power Multiplier.', true)/*14*/
            RiderEmbed2.addField('Cryo Resist', 'Base defense to cold/ice damage, calculated from a combination of level, Endurance, the Chilled Perk, and your Power Multiplier.', true)/*15*/
            RiderEmbed2.addField('Poison Resist', 'Base defense to posion effects, calculated from a combination of level, Endurance, the Antitoxin Perk, and your Power Multiplier.', true)/*16*/
            RiderEmbed2.addField('Toxic Resist', 'Base defense to special damage (toxic, radiation, bugster virus, etc), calculated from a combination of level, Endurance, the Rad Resist Perk, and your Power Multiplier.', true)/*17*/
            RiderEmbed2.addField('Energy Resist', 'Base defense to energy/magical damage, calculated from a combination of level, Endurance, the Refractor Perk, and your Power Multiplier.', true)/*18*/
        msg.channel.sendEmbed(
        RiderEmbed2, '', { disableEveryone: true }
        );//message.channel.sendEmbed
    } else { 
        mysqlPool.getConnection(function(err_u, connection) {
            if(err_u) {console.log("Error on - mysqlPool.getConnection for add SPECIAL PERK: "+ err_u)};
            if (rankstodelete > 0){
                var SQLString  = "SELECT * FROM " + settings.dbskilltable + " ";
                    SQLString += "WHERE Player_ID = '" + uid + "' AND ";
                    SQLString += "PERK_ID = " + PerkID;
                connection.query(SQLString, {title: 'Select'}, function(errU, resultU) {
                    if (errU) console.log(errU);
                    if (resultU.length > 0){
                        rankstodelete = resultU[0].RANKS - rankstodelete;
                        if (rankstodelete < 0){rankstodelete = 0};
                        if (rankstodelete < 1){
                            var UpdateString  = "DELETE FROM " + settings.dbskilltable +" ";
                                UpdateString += "WHERE Perk_Index=" + parseInt(resultU[0].Perk_Index);
                            console.log("["+uidname+" Table-DELETE] "+ UpdateString);
                            connection.query(UpdateString, {title: 'Delete'}, function(errI, resultI) {
                                if (errI) console.log(errI);});
                            for (f = 0; f < settings.UserSkillList.size; f++){
                                if (settings.UserSkillList.get(f).Perk_Index == parseInt(resultU[0].Perk_Index)){
                                    settings.UserSkillList.delete(f);
                                };//if (settings.UserSkillList.get(f).Perk_Index == parseInt(resultI[0].Perk_Index))
                            };//for (f = 0; f < settings.UserSkillList.size; f++)
                        }else{
                            var UpdateString  = "UPDATE " + settings.dbskilltable +" ";
                                UpdateString += "SET RANKS=" + parseInt(rankstodelete) +" ";
                                UpdateString += "WHERE Perk_Index=" + parseInt(resultU[0].Perk_Index);
                            console.log("["+uidname+" Update-DELETE] "+ UpdateString);
                            connection.query(UpdateString, {title: 'Update'}, function(errI, resultI) {
                                if (errI) console.log(errI);});
                            for (f = 0; f < settings.UserSkillList.size; f++){
                                if (settings.UserSkillList.get(f).Perk_Index == parseInt(resultU[0].Perk_Index)){
                                    settings.UserSkillList.set(f, {
                                            Perk_Index: settings.UserSkillList.get(f).Perk_Index,
                                            PERK_ID: settings.UserSkillList.get(f).PERK_ID,
                                            PLAYER_ID: settings.UserSkillList.get(f).PLAYER_ID,
                                            RANKS: rankstodelete,
                                            LEVEL_OR_BONUS: settings.UserSkillList.get(f).LEVEL_OR_BONUS
                                    });//settings.UserSkillList.set
                                };//if (settings.UserSkillList.get(f).Perk_Index == parseInt(resultI[0].Perk_Index))
                            };//for (f = 0; f < settings.UserSkillList.size; f++)
                        };//if (rankstodelete < 1)
                        slapdesc  = uidname + ' just reduced '+ Perk_Name + ' to '+ rankstodelete.toLocaleString() +' for their character.';
                        const RiderEmbed = new discord.RichEmbed()
                            RiderEmbed.setColor(randomHex.generate())
                            RiderEmbed.setDescription(slapdesc)
                        msg.channel.send({embed: RiderEmbed});
                    } else {
                        slapdesc  = 'Could not delete '+ Perk_Name + ' from '+ uidname +', no perk by that name exists for '+uidname+'.';
                        const RiderEmbed = new discord.RichEmbed()
                            RiderEmbed.setColor(randomHex.generate())
                            RiderEmbed.setDescription(slapdesc)
                        msg.channel.send({embed: RiderEmbed});
                    };//if (resultU.length > 0)
                });//connection.query(SQLString
            }else{
                var count = 0;
                var SQLStringC  = "SELECT * FROM " + settings.dbskilltable + " ";
                    SQLStringC += "WHERE Player_ID = '" + uid + "'";
                connection.query(SQLStringC, {title: 'count'}, function(errC, resultC) {
                    if (errC) console.log(errC);
                    for (g = 0; g < resultC.length; g++){count += resultC[g].RANKS;}
                    for (g = 0; ((rankstoadd + (count-1)) >= settings.UserList.get(uid).Level); g++){rankstoadd--;}
                });//connection.query(SQLStringC
                var SQLString  = "SELECT * FROM " + settings.dbskilltable + " ";
                    SQLString += "WHERE Player_ID = '" + uid + "' AND ";
                    SQLString += "PERK_ID = " + PerkID;
                connection.query(SQLString, {title: 'Select'}, function(errU, resultU) {
                    if (errU) console.log(errU);
                    if (resultU.length < settings.UserList.get(uid).Level){
                        if (resultU.length > 0){
                            rankstoadd += resultU[0].RANKS;
                            if (PERKSPECIAL_MAX_RANKS > 0){
                                if (rankstoadd > PERKSPECIAL_MAX_RANKS){
                                    rankstoadd = PERKSPECIAL_MAX_RANKS;
                                };//if (rankstoadd > PERKSPECIAL_MAX_RANKS)
                            };//if (PERKSPECIAL_MAX_RANKS > 0)
                            if ((PERKSPECIAL_Minimum > 0) && (PERKSPECIAL_Minimum > KEY_User_Perk)){
                                rankstoadd = 0;
                                Special_Min_Flag = 1;
                            };//if ((PERKSPECIAL_Minimum > 0) && (PERKSPECIAL_Minimum > KEY_User_Perk))
                            if (rankstoadd > 0){
                                var UpdateString  = "UPDATE " + settings.dbskilltable +" ";
                                    UpdateString += "SET RANKS=" + parseInt(rankstoadd) +" ";
                                    UpdateString += "WHERE Perk_Index=" + parseInt(resultU[0].Perk_Index);
                                console.log("["+uidname+" UPDATE] "+ UpdateString);
                                connection.query(UpdateString, {title: 'Update'}, function(errI, resultI) {
                                    if (errI) console.log(errI);});
                                for (f = 0; f < settings.UserSkillList.size; f++){
                                    if (settings.UserSkillList.get(f).Perk_Index == parseInt(resultU[0].Perk_Index)){
                                        settings.UserSkillList.set(f, {
                                                Perk_Index: settings.UserSkillList.get(f).Perk_Index,
                                                PERK_ID: settings.UserSkillList.get(f).PERK_ID,
                                                PLAYER_ID: settings.UserSkillList.get(f).PLAYER_ID,
                                                RANKS: rankstoadd,
                                                LEVEL_OR_BONUS: settings.UserSkillList.get(f).LEVEL_OR_BONUS
                                        });//settings.UserSkillList.set
                                    };//if (settings.UserSkillList.get(f).Perk_Index == parseInt(resultU[0].Perk_Index))
                                };//for (f = 0; f < settings.UserSkillList.size; f++)
                            } else {
                                slapdesc = 'Could not add '+ Perk_Name + ' to '+ uidname;
                                if (Special_Min_Flag == 1){
                                    slapdesc += ', '+PERKSPECIAL_Name+' Minimum ['+PERKSPECIAL_Minimum.toLocaleString()+'] not met.';
                                    slapdesc += '\n'+ uidname + ' only has ' + KEY_User_Perk + ' ' + PERKSPECIAL_Name;
                                };//if (Special_Min_Flag == 1)
                                const RiderEmbed = new discord.RichEmbed()
                                      RiderEmbed.setColor(randomHex.generate())
                                      RiderEmbed.setDescription(slapdesc)
                                msg.channel.send({embed: RiderEmbed});
                            };//if (rankstoadd > 0)
                        } else {
                            if (PERKSPECIAL_MAX_RANKS > 0){
                                if (rankstoadd > PERKSPECIAL_MAX_RANKS){
                                    rankstoadd = PERKSPECIAL_MAX_RANKS;
                                };//if (rankstoadd > PERKSPECIAL_MAX_RANKS)
                            };//if (PERKSPECIAL_MAX_RANKS > 0)
                            if ((PERKSPECIAL_Minimum > 0) && (PERKSPECIAL_Minimum > KEY_User_Perk)){
                                rankstoadd = 0;
                                Special_Min_Flag = 1;
                            };//if ((PERKSPECIAL_Minimum > 0) && (PERKSPECIAL_Minimum > KEY_User_Perk))
                            if (rankstoadd > 0){
                                var insetstring  = "INSERT INTO " + settings.dbskilltable + " "; 
                                    insetstring += "(PLAYER_ID, PERK_ID, RANKS)"; 
                                    insetstring += "VALUES ('";
                                    insetstring += uid + "', " + PerkID + ", " + rankstoadd + ")"; 
                                console.log("["+uidname+" INSERT] "+ insetstring);
                                connection.query(insetstring, {title: 'Insert'}, function(errI, resultI) {
                                    if (errI) console.log(errI);
                                        console.log("resultI.insertId: "+resultI.insertId);1
                                        settings.UserSkillList.set(settings.UserSkillList.size, {
                                                Perk_Index: resultI.insertId,
                                                PERK_ID: PerkID,
                                                PLAYER_ID: uid,
                                                RANKS: rankstoadd,
                                                LEVEL_OR_BONUS: 1
                                        });//settings.UserSkillList.set
                                });
                            } else {
                                slapdesc = 'Could not add '+ Perk_Name + ' to '+ uidname;
                                if (Special_Min_Flag == 1){
                                    slapdesc += ', '+PERKSPECIAL_Name+' Minimum ['+PERKSPECIAL_Minimum.toLocaleString()+'] not met.';
                                    slapdesc += '\n'+ uidname + ' only has ' + KEY_User_Perk + ' ' + PERKSPECIAL_Name;
                                };//if (Special_Min_Flag == 1)
                                const RiderEmbed = new discord.RichEmbed()
                                      RiderEmbed.setColor(randomHex.generate())
                                      RiderEmbed.setDescription(slapdesc)
                                msg.channel.send({embed: RiderEmbed});
                            };//if (rankstoadd > 0)
                        };//if (resultU > 0)
                        if (rankstoadd > 0){
                            slapdesc  = uidname + ' just updated '+ Perk_Name + ' to '+ rankstoadd.toLocaleString() +' on their character.';
                            const RiderEmbed = new discord.RichEmbed()
                                  RiderEmbed.setColor(randomHex.generate())
                                  RiderEmbed.setDescription(slapdesc)
                                msg.channel.send({embed: RiderEmbed});
                        };//if (rankstoadd > 0)
                    };//if (resultU.length < settings.UserList.get(uid).Level)
                });//connection.query(SQLString
            };//if (rankstodelete > 0)
            connection.release(); // if error occured closed the connection
        });//get connection
    };//if (msg.content.toLowerCase().startsWith("!special"))
};//run

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: [
            "specials", 
            "ghoulish", 
            "bulletsponge", "bullet-sponge", 
            "immolated", 
            "frozen", 
            "charged", 
            "venemous", 
            "resonating", 
            "antitoxin", 
            "aquaboy", "aqua-boy", "aquagirl", "aqua-girl",  
            "cannibal", 
            "chemresistant", "chem-resistant",  
            "chilled", 
            "fireproof", 
            "leadbelly", "lead-belly", 
            "lifegiver", 
            "radresist", "rad-resist", 
            "solarpowered", "solar-powered", 
            "toughness", 
            "adamantiumskeleton", "adamantium-skeleton", 
            "attackdog", "attack-dog",
            "blackwidow", "black-widow",
            "capcollector", "cap-collector",
            "inspirational",
            "intimidation",
            "ladykiller", "lady-killer",
            "localleader", "local-leader",
            "lonewanderer", "lone-wanderer",
            "partyboy", "party-boy", "partygirl", "party-girl",
            "sexappeal", "sex-appeal",
            "wastelandwhisperer", "wasteland-whisperer",
            "animalfriend", "animal-friend",
            "blitz",
            "commando",
            "gunfu",
            "gunslinger",
            "konoichi",
            "mistersandman", "mister-sandman",
            "movingtarget", "moving-target",
            "ninja",
            "quickhands", "quick-hands",
            "sneak",
            "actionboy", "action-boy", "actiongirl", "action-girl",
            "ricochet",
            "mysteriousstranger", "mysterious-stranger",
            "missfortune", "miss-fortune",
            "idiotsevant", "idiot-sevant",
            "grimreaperssprint", "grim-reapers-sprint",
            "fourleafclover", "four-leaf-clover",
            "fortunefinder", "fortune-finder",
            "criticalbanker", "critical-banker",
            "bettercriticals", "better-criticals",
            "bloodymess", "bloody-mess",
            "vans",
            "scrapper",
            "science",
            "roboticsexpert", "robotics-expert",
            "physicist",
            "nerdrage", "nerd-rage",
            "medic",
            "magick",
            "magicexpert", "magic-expert",
            "hacker",
            "gunnut", "gun-nut",
            "chemist",
            "scrounger",
            "rifleman",
            "refractor",
            "pickpocket",
            "penetrator",
            "nightperson", "night-person",
            "locksmith",
            "demolitionsexpert", "demolitions-expert", "demoexpert", "demo-expert",
            "concentratedfire", "concentrated-fire",
            "awareness",
            "sniper",
            "basher",
            "bigleagues", "big-leagues",
            "blacksmith", 
            "heavygunner", "heavy-gunner",
            "ironfist", "iron-fist",
            "paintrain", "pain-train",
            "rooted",
            "steadyaim", "steady-aim",
            "strongback", "strong-back",
            "armorer",
            "strength-perk",
            "perception-perk",
            "endurance-perk",
            "charisma-perk",
            "intelligence-perk",
            "agility-perk",
            "luck-perk"
           ],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "special",
  description: "",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};
