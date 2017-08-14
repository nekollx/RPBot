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
	var validform = 0;
	var playeruid = msg.author.id;
	var playername = msg.author.username;
    var mentionedid = playeruid;
    var mentionedname = playername;
    var MissingItemURL = "http://maskedriders.info/Mee6RP/statusPic/missing_item.png";
    var WrongRiderSystem = "http://www.maskedriders.info/Mee6RP/statusPic/wrongrider.png";
    var HenshinText = "";

    if (msg.mentions.users.first()){
        mentionedid   = msg.mentions.users.first().id;
        mentionedname = msg.mentions.users.first().username;
    };//if

    var Command_Array = msg.content.split(' ');
    var Rider_KEY = 5;//default key for the default belt
    var RequiredSlots = 1;
    var ReplacementText = "None";
    var SlotToUse = 1;
    var Class_Low_Range = 8999;
    var Class_High_Range = 10000;
    var ValidChangerIDs = []; 
    var TrasferableChangerIDsExceptions = []; 
    var Series_ID = 19; //ex-aid
    var ValidItemKeyword = [];
    var IsValidItem = 0;
    var ClassID = 0;
    var DefaultClassSub1 = 0;
    var DefaultClassSub2 = 0;
    var DefaultClassSub3 = 0;
    var DefaultClassSub4 = 0;
    var HenshinCount = 1;
    var ItemName = "Gashat";
    var SlotName = "Slot";

    ValidItemKeyword.push("gashat");
    ValidItemKeyword.push("dual_gashat");

    ValidChangerIDs.push(5);//gamer
    ValidChangerIDs.push(173);//gear holder
    ValidChangerIDs.push(56);//player
    ValidChangerIDs.push(167);//bug visor
    ValidChangerIDs.push(169);//bugvisor lve
    ValidChangerIDs.push(168);//bugvisor zwei
    ValidChangerIDs.push(174);//bugster virus
    ValidChangerIDs.push(137);//bugster virus 2

    TrasferableChangerIDsExceptions.push(174);//bugster virus
    TrasferableChangerIDsExceptions.push(137);//bugster virus 2

    for (var i = 0; i < settings.User_Forms.size; i++) {
        if (settings.User_Forms.get(i) != undefined){
            if (settings.User_Forms.get(i).User_ID == mentionedid){
                if (Series_ID == settings.User_Forms.get(i).Series_ID){
                    ClassID = settings.User_Forms.get(i).Class_ID;
                    DefaultClassSub1 = settings.User_Forms.get(i).Class_ID_Sub1;
                    DefaultClassSub2 = settings.User_Forms.get(i).Class_ID_Sub2;
                    DefaultClassSub3 = settings.User_Forms.get(i).Class_ID_Sub3;
                    DefaultClassSub4 = settings.User_Forms.get(i).Class_ID_Sub4;
                };//if
            };//if
        };//if
    };//for

/******************************************/
    if ((ClassID == 9800) || (ClassID == 9900)){Rider_KEY = 56;}
    if ((ClassID == 9400) || (ClassID == 9600)){Rider_KEY = 167;}
    if ((ClassID == 9006) || (ClassID == 9007)){Rider_KEY = 168;}
    if (ClassID == 9017){Rider_KEY = 169;}
    if (ClassID == 9910){Rider_KEY = 173;}

    var Item_ID = 0;
    var Item_ID2 = 0;
    var Item_ID3 = 0;
    var Item_ID4 = 0;
    if (DefaultClassSub1 > 0){
        if (Command_Array[1] == undefined){
            Item_ID = DefaultClassSub1;
            if (DefaultClassSub2 > 0){HenshinCount++;
                Item_ID2 = DefaultClassSub2;}            
            if (DefaultClassSub3 > 0){HenshinCount++;
                Item_ID3 = DefaultClassSub3;}            
            if (DefaultClassSub4 > 0){HenshinCount++;
                Item_ID4 = DefaultClassSub4;}            
        };//if (isNaN(Item_ID))
    };//if (DefaultClassSub1 > 0)

    if (Command_Array.length > 1){
        HenshinCount = 1;
        Item_ID = 0;
        Item_ID2 = 0;
        Item_ID3 = 0;
        Item_ID4 = 0;
        for (r = 0; r < Command_Array.length; r++){
                for (j = 0; j < ValidItemKeyword.length; j++){
                    if (settings.Weapons_Armor_List.get(parseInt(Command_Array[r])) != undefined){
                        if (settings.Weapons_Armor_List.get(parseInt(Command_Array[r])).Name.toLowerCase().startsWith(ValidItemKeyword[j])){
                            IsValidItem = 1;
                            if (Item_ID == 0){
                                Item_ID = parseInt(Command_Array[r])
                            } else if (Item_ID2 == 0){
                                Item_ID2 = parseInt(Command_Array[r])
                                HenshinCount++;
                            } else if (Item_ID3 == 0){
                                Item_ID3 = parseInt(Command_Array[r])
                                HenshinCount++;
                            } else if (Item_ID4 == 0){
                                Item_ID4 = parseInt(Command_Array[r])
                                HenshinCount++;
                            };//if (Item_ID == 0)...
                        };//if
                    };//if (settings.Weapons_Armor_List.get(Command_Array[r]).Name != undefined)
                };//for (j = 0; j < ValidItemKeyword.length; j++)
        };//for (r = 0; r < Command_Array.size; r++)
    };//if (Command_Array.length > 1)

    for (j = 0; j < ValidItemKeyword.length; j++){
        if (settings.Weapons_Armor_List.get(Item_ID) != undefined){
            if (settings.Weapons_Armor_List.get(Item_ID).Name.toLowerCase().startsWith(ValidItemKeyword[j])){
                IsValidItem = 1;
            };//if
        };//if (settings.Weapons_Armor_List.get(Item_ID) != undefined)
    };//for

    if (IsValidItem == 0){
        if (settings.Weapons_Armor_List.get(Item_ID) != undefined){
            console.log(settings.Weapons_Armor_List.get(Item_ID).Name + " is not a valid "+ValidItemKeyword)
        };//if
    };//if (IsValidItem == 0)
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
    var Bonus_HP = 0; var Bonus_MP = 0; var Bonus_IP = 0; 
    var Bonus_Strength = 0; var Bonus_Perception = 0; var Bonus_Endurance = 0; 
    var Bonus_Charisma = 0; var Bonus_Intelligence = 0; var Bonus_Agility = 0; var Bonus_Luck = 0; 
    var Bonus_BalisticResist = 0; var Bonus_FireResist = 0; var Bonus_CryoResist = 0; 
    var Bonus_ToxicResist = 0; var Bonus_ElecResist = 0; var Bonus_EnergyResist = 0; 
    var Bonus_PosionResist = 0; var Bonus_SpecialResist = 0; 
    var Bonus_BalisticDT = 0; var Bonus_FireDT = 0; var Bonus_CryoDT = 0; var Bonus_ToxicDT = 0; 
    var Bonus_ElecDT = 0; var Bonus_EnergyDT = 0; var Bonus_PosionDT = 0; var Bonus_SpecialDT = 0; 
    var Bonus_level = 0;

    var Level_ID = 0; var powertotal = 0; var powertotal_bonus = 0;
    var Gashat_LVL_LOW = 0; var Gashat_LVL_HIGH = 0; var Weight = 0;
    var MentionedSlot1Contents = 0; var MentionedSlot2Contents = 0;
    var MentionedSlot1ItemID = 0; var MentionedSlot2ItemID = 0;
    var Gashat_ID = 0; var Item_Count = 0;
    var ImageURL = ""; var BeltURL = ""; var Name = ""; var FullName = ""; var SplitName = "";

    var userInventory = "**"+playername+"** "; var userHasItems = 0; var UserInventoryIDs = [];
    var UserValidHenshinClass = 0; var UserValidHenshinInfo = "";
    var MentionedInventory = "**"+mentionedname+"** "; var MentionedHasItems = 0; var MentionedInventoryIDs = [];
    var MentionedValidHenshinClass = 0; var MentionedValidHenshinInfo = "";
    var UserValidChanger = 0; var MentionedValidChanger = 0;
    var UserChangerList = ""; var MentionedChangerList = "";
    var ClassIDSub1 = 0; var ClassIDSub2 = 0; var ClassIDSub3 = 0;
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
    for (e = 0; e < HenshinCount; e++){
        Level_ID = 0; powertotal = 0; powertotal_bonus = 0;
        Gashat_LVL_LOW = 0; Gashat_LVL_HIGH = 0; Weight = 0;
        MentionedSlot1Contents = 0; MentionedSlot2Contents = 0;
        MentionedSlot1ItemID = 0; MentionedSlot2ItemID = 0;
        Gashat_ID = 0; Item_Count = 0;
        ImageURL = ""; BeltURL = ""; Name = ""; FullName = ""; SplitName = "";

        userInventory = "**"+playername+"** "; userHasItems = 0; UserInventoryIDs = [];
        UserValidHenshinClass = 0; UserValidHenshinInfo = "";
        MentionedInventory = "**"+mentionedname+"** "; MentionedHasItems = 0; MentionedInventoryIDs = [];
        MentionedValidHenshinClass = 0; MentionedValidHenshinInfo = "";
        UserValidChanger = 0; MentionedValidChanger = 0;
        UserChangerList = ""; MentionedChangerList = "";
        ClassIDSub1 = 0; ClassIDSub2 = 0; ClassIDSub3 = 0;

        if ((DefaultClassSub2 > 0) && (e == 1)){Item_ID = DefaultClassSub2;}            
        if ((DefaultClassSub3 > 0) && (e == 2)){Item_ID = DefaultClassSub3;}            
        if ((DefaultClassSub4 > 0) && (e == 3)){Item_ID = DefaultClassSub4;}            

        if ((Item_ID2 > 0) && (e == 1)){Item_ID = Item_ID2;}            
        if ((Item_ID3 > 0) && (e == 2)){Item_ID = Item_ID3;}            
        if ((Item_ID4 > 0) && (e == 3)){Item_ID = Item_ID4;}            

        if(settings.UserList.get(mentionedid) != undefined){
            if (
                (settings.UserList.get(mentionedid).CLASS_ID > Class_Low_Range) && 
                (settings.UserList.get(mentionedid).CLASS_ID < Class_High_Range)){
                    MentionedValidHenshinClass = 1;
                    MentionedValidHenshinInfo = "Valid henshin form."
            } else {
                    MentionedValidHenshinInfo = "No valid henshin form."
                    if ((UserValidChanger + MentionedValidChanger) > 0){
                        MentionedValidHenshinInfo = "Driver wasn't on at start."
                        const RiderEmbed = new discord.RichEmbed()
                            RiderEmbed.setColor('#C0C0C0')
                            RiderEmbed.setTimestamp()
                            RiderEmbed.setURL('http://www.maskedriders.info/Mee6RP/index.php')
                            RiderEmbed.setImage(BeltURL)
                            //RiderEmbed.setThumbnail(BeltURL)
                        msg.channel.send({embed: RiderEmbed});
                    }else{
                        MentionedValidHenshinInfo = "No valid henshin form."
                    };//if ((UserValidChanger + MentionedValidChanger) > 0)
            };//if class id is in the right rage
            powertotal_bonus += settings.UserList.get(mentionedid).Power_Mult_Boost;
            MentionedSlot1Contents = settings.UserList.get(mentionedid).CLASS_ID_Sub;
            MentionedSlot2Contents = settings.UserList.get(mentionedid).CLASS_ID_Sub2;
        };//if(settings.UserList.get(mentionedid) != undefined)

        for (var i = 0; i < settings.User_Inventory.size; i++) {
            if (settings.User_Inventory.get(i) != undefined){
                if (settings.User_Inventory.get(i).Player_ID == mentionedid){
                    MentionedInventoryIDs.push(settings.User_Inventory.get(i).ID);
                    //console.log("MentionedInventoryIDs:"+MentionedInventoryIDs);
                    if (settings.User_Inventory.get(i).ID == Item_ID){Item_Count ++;}
                };//if (settings.User_Inventory.get(i).Player_ID == mentionedid)

                if (playeruid != mentionedid){
                    if (settings.User_Inventory.get(i).Player_ID == playeruid){
                        UserInventoryIDs.push(settings.User_Inventory.get(i).ID);
                        if (settings.User_Inventory.get(i).ID == Item_ID){Item_Count ++;}
                    };//if (settings.User_Inventory.get(i).Player_ID == mentionedid)
                };//if (playeruid != mentionedid)
            };//if (settings.User_Inventory.get(i) != undefined)
        };//for

        for (d = 0; d < settings.Buff_Debuff_List.size; d++){
            if (settings.Buff_Debuff_List.get(d) != undefined){
                if (settings.Buff_Debuff_List.get(d).target_id == mentionedid){
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
                    powertotal_bonus += settings.Buff_Debuff_List.get(d).Power_Mult;
                    Bonus_level += settings.Buff_Debuff_List.get(d).level;
                };//if (settings.Buff_Debuff_List.get(d).target_id == mentionedid)
            };//if (settings.Buff_Debuff_List.get(d) != undefined)
        };//for (d = 0; d < resultU.length; d++)

    if (settings.Weapons_Armor_List.get(parseInt(Item_ID)) != undefined){
        Gashat_ID = settings.Weapons_Armor_List.get(parseInt(Item_ID)).Main_SkillID;//class id

        for (r = 0; r < Command_Array.length; r++){
            if (Command_Array[r].toLowerCase().startsWith("alt")){
                Gashat_ID = settings.Weapons_Armor_List.get(parseInt(Item_ID)).Secondary_SkillID;//class id alt
            }else if (Command_Array[r].toLowerCase().startsWith("mix")){
                Gashat_ID = settings.Weapons_Armor_List.get(parseInt(Item_ID)).Tritary_SkillID;//class id for mixes
            };//if (Command_Array[r] == 2)
        };//for (r = 0; r < Command_Array.size; r++)
        RequiredSlots = settings.Weapons_Armor_List.get(parseInt(Item_ID)).Upgrade_SkillID;//required slots
    };//if (settings.Weapons_Armor_List.get(parseInt(Item_ID)) != undefined)

        for (g = 0; g < settings.Weapons_Armor_List.size; g++){
            if ((settings.Weapons_Armor_List.get(g) != undefined)){
                if (settings.Weapons_Armor_List.get(g).Main_SkillID == MentionedSlot1Contents)
                {MentionedSlot1ItemID = settings.Weapons_Armor_List.get(g).ID;};
                if (settings.Weapons_Armor_List.get(g).Main_SkillID == MentionedSlot2Contents)
                {MentionedSlot2ItemID = settings.Weapons_Armor_List.get(g).ID;};
            };//if ((settings.Weapons_Armor_List.get(g) != undefined))
        };//for (g = 0; g < settings.Weapons_Armor_List.size; g++)

        if ((settings.Weapons_Armor_List.get(Item_ID) != undefined)){
            Name = settings.Weapons_Armor_List.get(Item_ID).Name;
            ImageURL = settings.Weapons_Armor_List.get(Item_ID).ImageURL;
            BeltURL = settings.Weapons_Armor_List.get(Rider_KEY).ImageURL;
            Weight = settings.Weapons_Armor_List.get(Item_ID).Weight;
            Gashat_LVL_LOW = settings.Weapons_Armor_List.get(Item_ID).DMG_Floor;
            Gashat_LVL_HIGH = settings.Weapons_Armor_List.get(Item_ID).DMG_High;
        };//if ((Name == undefined)

        FullName = settings.ParseName(Name);

        for (g = 0; g < UserInventoryIDs.length; g++){
            if ((settings.Weapons_Armor_List.get(UserInventoryIDs[g]) != undefined)){
                if(settings.Weapons_Armor_List.get(UserInventoryIDs[g]).ID == Item_ID){userHasItems = 1;}
                for (h = 0;  h < ValidChangerIDs.length; h++){
                    if ((settings.Weapons_Armor_List.get(ValidChangerIDs[h]) != undefined)){
                        if(settings.Weapons_Armor_List.get(ValidChangerIDs[h]).ID == UserInventoryIDs[g]){
                            UserValidChanger = 1;
                            var exception = 0;
                            for (m = 0;  m < TrasferableChangerIDsExceptions.length; m++){
                                if (ValidChangerIDs[h] == TrasferableChangerIDsExceptions[m]){exception = 1;};
                            };///for
                            if (exception == 0){ 
                                var FullName2 = '';
                                var SplitName2 = settings.Weapons_Armor_List.get(ValidChangerIDs[h]).Name.split('_');
                                for (var s = 0; s < SplitName2.length; s++){
                                    FullName2 += SplitName2[s].charAt(0).toUpperCase() + SplitName2[s].slice(1).toLowerCase();
                                    if (s !=  (SplitName2.length-1)){FullName2 += " ";}
                                }//for
                                UserChangerList += "["+FullName2+"]\n";
                            };//if if (exception == 0)
                        };//if
                    };//if
                };//for
            };//if
        };//for

        for (g = 0; g < MentionedInventoryIDs.length; g++){
            if ((settings.Weapons_Armor_List.get(MentionedInventoryIDs[g]) != undefined)){
                if(settings.Weapons_Armor_List.get(MentionedInventoryIDs[g]).ID == Item_ID){MentionedHasItems = 1;}
                for (h = 0;  h < ValidChangerIDs.length; h++){
                    if ((settings.Weapons_Armor_List.get(ValidChangerIDs[h]) != undefined)){
                        if(settings.Weapons_Armor_List.get(ValidChangerIDs[h]).ID == MentionedInventoryIDs[g]){
                            MentionedValidChanger = 1;
                            var exception = 0;
                            for (m = 0;  m < TrasferableChangerIDsExceptions.length; m++){
                                if (ValidChangerIDs[h] == TrasferableChangerIDsExceptions[m]){exception = 1;};
                            };///for
                            if (exception == 0){ 
                                var FullName3 = '';
                                var SplitName3 = settings.Weapons_Armor_List.get(ValidChangerIDs[h]).Name.split('_');
                                for (var s = 0; s < SplitName3.length; s++){
                                    FullName3 += SplitName3[s].charAt(0).toUpperCase() + SplitName3[s].slice(1).toLowerCase();
                                    if (s !=  (SplitName3.length-1)){FullName3 += " ";}
                                }//for
                                MentionedChangerList += "["+FullName3+"]\n";
                            };//if if (exception == 0)
                        };//if
                    };//if
                };//for
            };//if
        };//for
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
        if (userHasItems == 0){userInventory += "doesn't own this";
        } else {userInventory += "owns this";};
        if (MentionedHasItems == 0){MentionedInventory += "doesn't own this";
        } else {MentionedInventory += "owns this";};

        if (UserValidChanger == 0){UserValidHenshinInfo += "\ndoesn't own a valid changer";
        } else {UserValidHenshinInfo += "\nowns a valid changer";};
        UserValidHenshinInfo += "\n"+UserChangerList;

        if (MentionedValidChanger == 0){MentionedValidHenshinInfo += "\ndoesn't own a valid changer";
        } else {MentionedValidHenshinInfo += "\nowns a valid changer";};
        MentionedValidHenshinInfo += "\n"+MentionedChangerList;

        if (RequiredSlots == 1){
            if (MentionedSlot1Contents > 0){
                SlotToUse = 2;
                ReplacementText = "Second";
                if (MentionedSlot1ItemID > 0){powertotal += (settings.Weapons_Armor_List.get(MentionedSlot1ItemID).DMG_Floor)*10;};
                powertotal += Gashat_LVL_HIGH*10;
                ClassIDSub1 = MentionedSlot1Contents;
                ClassIDSub2 = Gashat_ID;
                ClassIDSub3 = 0;
            }else{
                ReplacementText = "First";
                powertotal += Gashat_LVL_LOW*10;
                ClassIDSub1 = Gashat_ID;
                ClassIDSub2 = 0;
                ClassIDSub3 = 0;
                HenshinText = "Mecha Game, Super Game, what\'s your name?!";
            };//if (MentionedSlot1Contents > 0)
        }else if (RequiredSlots == 2){
            SlotToUse = 3;
            ReplacementText = "Both";
            powertotal = Gashat_LVL_LOW*10;
            for (r = 0; r < Command_Array.length; r++){
                if (Command_Array[r].toLowerCase().startsWith("mix")){
                    powertotal = Gashat_LVL_HIGH*10;
                } else {
                    powertotal = Gashat_LVL_LOW*10;        
                };//if (Command_Array[r] == 2)
            };//for (r = 0; r < Command_Array.size; r++)
            ClassIDSub1 = Gashat_ID;
            ClassIDSub2 = 0;
            ClassIDSub3 = 0;
        }else if (RequiredSlots == 0){
            SlotToUse = 0;
            ReplacementText = "None";
            if (MentionedSlot1ItemID > 0){powertotal += (settings.Weapons_Armor_List.get(MentionedSlot1ItemID).DMG_Floor)*10;};
            if (MentionedSlot2ItemID > 0){powertotal += (settings.Weapons_Armor_List.get(MentionedSlot2ItemID).DMG_High)*10;};
            powertotal += Gashat_LVL_HIGH*10;
            ClassIDSub1 = MentionedSlot1Contents;
            ClassIDSub2 = MentionedSlot2Contents;
            ClassIDSub3 = Gashat_ID;
        };//if (RequiredSlots == 1)

        if (
            (settings.UserList.get(mentionedid).IsLevelCapped == 0) && 
            (powertotal_bonus >= powertotal)){
                powertotal = powertotal * 2;
        } else {
            powertotal = powertotal + powertotal_bonus;
        };//if
        if (powertotal < 1){powertotal = 1};

        Level_ID  = powertotal/10;
        Level_ID += Bonus_level;
        if (Level_ID >= parseInt(192311813)){Level_ID = "__**SWARM**__";}
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////
        const RiderEmbed = new discord.RichEmbed()
            RiderEmbed.setAuthor(FullName, settings.botpic)
            RiderEmbed.setColor(randomHex.generate())
            RiderEmbed.setURL('http://www.maskedriders.info/Mee6RP/index.php')
            RiderEmbed.setTimestamp()
            RiderEmbed.setDescription('Level '+Level_ID, true)
            RiderEmbed.addField(settings.PlayerClassName(ClassID), settings.PlayerClassName(Gashat_ID), true)
            RiderEmbed.addField("Power", powertotal, true)
            RiderEmbed.addField(ItemName+" Level {Low}", Gashat_LVL_LOW, true)
            RiderEmbed.addField(ItemName+" Level {High}", Gashat_LVL_HIGH, true)
            RiderEmbed.addField("Weight", Weight, true)
            RiderEmbed.addField(SlotName+"s Used [Replacing]", RequiredSlots + " ["+ReplacementText+"]", true)
        if ((MentionedSlot1Contents > 0)){RiderEmbed.addField(SlotName+" 1", "*"+settings.PlayerClassName(MentionedSlot1Contents, "yes")+"*", true)
        }else{RiderEmbed.addField(SlotName+" 1", "{Empty}", true)};
        if ((MentionedSlot2Contents > 0)){RiderEmbed.addField(SlotName+" 2", "*"+settings.PlayerClassName(MentionedSlot2Contents, "yes")+"*", true)
        }else{RiderEmbed.addField(SlotName+" 2", "{Empty}", true)};
        if ((userHasItems + MentionedHasItems) < 1){
            RiderEmbed.setImage(MissingItemURL)
        }else  if (IsValidItem == 0){
            RiderEmbed.setImage(WrongRiderSystem)
        }else{
            if (playeruid != mentionedid){RiderEmbed.addField(userInventory, UserValidHenshinInfo, true)};          
            RiderEmbed.addField(MentionedInventory, MentionedValidHenshinInfo, true)
            if (ImageURL != ""){RiderEmbed.setImage(ImageURL)};
        };//if ((userHasItems + MentionedHasItems) < 1)
        if ((UserValidChanger + MentionedValidChanger) < 1){
            RiderEmbed.setThumbnail(WrongRiderSystem)
        }else  if (IsValidItem == 0){
            RiderEmbed.setThumbnail(WrongRiderSystem)
        }else if (BeltURL != ""){
            RiderEmbed.setThumbnail(BeltURL)
        };//els if
        msg.channel.sendEmbed(RiderEmbed, HenshinText, { disableEveryone: true });

        if (((UserValidChanger + MentionedValidChanger) > 0) && 
            ((userHasItems + MentionedHasItems) > 0) && 
            (IsValidItem != 0)){
            if ((MentionedSlot1ItemID == Item_ID) && (Item_Count > 1)){
                mysqlPool.getConnection(function(err, connection) {
                    if(err) {console.log(err);} else {
                        connection.query("UPDATE " + settings.dbtable + " SET CLASS_ID = "+ClassID+" WHERE ID = '" + mentionedid + "'");
                        connection.query("UPDATE " + settings.dbtable + " SET CLASS_ID_Sub = "+ClassIDSub1+" WHERE ID = '" + mentionedid + "'");
                        connection.query("UPDATE " + settings.dbtable + " SET CLASS_ID_Sub2 = "+ClassIDSub2+" WHERE ID = '" + mentionedid + "'");
                        connection.query("UPDATE " + settings.dbtable + " SET CLASS_ID_Sub3 = "+ClassIDSub3+" WHERE ID = '" + mentionedid + "'");
                        connection.query("UPDATE " + settings.dbtable + " SET Power_Mult = "+powertotal+" WHERE ID = '" + mentionedid + "'");            
                        connection.release(); // if error occured closed the connection
                    };//if(err)
                });//mysqlPool.getConnection
                if (settings.UserList.get(mentionedid) != undefined){
                    settings.UserList.get(mentionedid).CLASS_ID = ClassID;
                    settings.UserList.get(mentionedid).CLASS_ID_Sub = ClassIDSub1;
                    settings.UserList.get(mentionedid).CLASS_ID_Sub2 = ClassIDSub2;
                    settings.UserList.get(mentionedid).CLASS_ID_Sub3 = ClassIDSub3;
                    settings.UserList.get(mentionedid).CLASS_ID_Sub4 = 0;
                    settings.UserList.get(mentionedid).Power_Mult = powertotal;
                };//if (settings.UserList.get(mentionedid) != undefined)
            }else if (MentionedSlot1ItemID != Item_ID){
                mysqlPool.getConnection(function(err, connection) {
                    if(err) {console.log(err);} else {
                        connection.query("UPDATE " + settings.dbtable + " SET CLASS_ID = "+ClassID+" WHERE ID = '" + mentionedid + "'");
                        connection.query("UPDATE " + settings.dbtable + " SET CLASS_ID_Sub = "+ClassIDSub1+" WHERE ID = '" + mentionedid + "'");
                        connection.query("UPDATE " + settings.dbtable + " SET CLASS_ID_Sub2 = "+ClassIDSub2+" WHERE ID = '" + mentionedid + "'");
                        connection.query("UPDATE " + settings.dbtable + " SET CLASS_ID_Sub3 = "+ClassIDSub3+" WHERE ID = '" + mentionedid + "'");
                        connection.query("UPDATE " + settings.dbtable + " SET Power_Mult = "+powertotal+" WHERE ID = '" + mentionedid + "'");            
                        connection.release(); // if error occured closed the connection
                    };//if(err)
                });//mysqlPool.getConnection
                if (settings.UserList.get(mentionedid) != undefined){
                    settings.UserList.get(mentionedid).CLASS_ID = ClassID;
                    settings.UserList.get(mentionedid).CLASS_ID_Sub = ClassIDSub1;
                    settings.UserList.get(mentionedid).CLASS_ID_Sub2 = ClassIDSub2;
                    settings.UserList.get(mentionedid).CLASS_ID_Sub3 = ClassIDSub3;
                    settings.UserList.get(mentionedid).CLASS_ID_Sub4 = 0;
                    settings.UserList.get(mentionedid).Power_Mult = powertotal;
                };//if (settings.UserList.get(mentionedid) != undefined)
            };//if
        };//if (((UserValidChanger + MentionedValidChanger) > 0) && ((userHasItems + MentionedHasItems) > 0))
    };//for (e = 0; e < HenshinCount; e++)
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
};//exports run

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: ["henshin!"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "henshin",
  description: "",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};