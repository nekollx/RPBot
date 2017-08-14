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
    var Item_ID = parseInt(Command_Array[1]);
    var Dual_Gashat_flag = Command_Array[2];
    var Item_ID2 = parseInt(Command_Array[2]);
    var Item_ID3 = parseInt(Command_Array[3]);
    var Item_ID4 = parseInt(Command_Array[4]);
    var Rider_KEY = 55;//default key for the default belt
    var RequiredSlots = 1;
    var ReplacementText = "None";
    var SlotToUse = 1;
    var Class_Low_Range = 6999;
    var Class_High_Range = 8000;
    var ValidChangerIDs = []; 
    var TrasferableChangerIDsExceptions = []; 
    var Series_ID = 16; //drive
    var ValidItemKeyword = [];
    var IsValidItem = 0;
    var ClassID = 0;
    var DefaultClassSub1 = 0;
    var DefaultClassSub2 = 0;
    var DefaultClassSub3 = 0;
    var DefaultClassSub4 = 0;
    var HenshinCount = 1;
    var ItemName = "Signal Bike/Shift Car";
    var SlotName = "Slot";

    ValidItemKeyword.push("signal_bike");
    ValidItemKeyword.push("signal_bike_shift_car");
    ValidItemKeyword.push("shift_car");

    ValidChangerIDs.push(55);//drive driver
    ValidChangerIDs.push(166);//gold drive driver
    ValidChangerIDs.push(57);//mach Driver
    ValidChangerIDs.push(109);//mach mach produced
    ValidChangerIDs.push(1784);//lupine gunner
    ValidChangerIDs.push(1785);//break gunner

    //TrasferableChangerIDsExceptions.push(124);//bugster virus

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

    //if (ClassID == 8150){Rider_KEY = 122;}

    if (DefaultClassSub1 > 0){
        if (isNaN(Item_ID)){
            Item_ID = DefaultClassSub1;
            if (DefaultClassSub2 > 0){HenshinCount++;}            
            if (DefaultClassSub3 > 0){HenshinCount++;}            
            if (DefaultClassSub4 > 0){HenshinCount++;}            
        };//if (isNaN(Item_ID))
    };//if (DefaultClassSub1 > 0)
    if (isNaN(Item_ID)){Item_ID = 0;} 
    if (isNaN(Item_ID2)){Item_ID2 = 0;} 
    if (isNaN(Item_ID3)){Item_ID3 = 0;} 
    if (isNaN(Item_ID4)){Item_ID4 = 0;} 
    if (Item_ID2 > 0){HenshinCount++;}            
    if (Item_ID3 > 0){HenshinCount++;}            
    if (Item_ID4 > 0){HenshinCount++;}            

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
        if (Dual_Gashat_flag != undefined){
            if (Dual_Gashat_flag.toLowerCase().startsWith("alt")){
                Gashat_ID = settings.Weapons_Armor_List.get(parseInt(Item_ID)).Secondary_SkillID;//class id alt
            }else if (Dual_Gashat_flag.toLowerCase().startsWith("mix")){
                Gashat_ID = settings.Weapons_Armor_List.get(parseInt(Item_ID)).Tritary_SkillID;//class id for mixes
            };//if (Dual_Gashat_flag == 2)
        };//if (Dual_Gashat_flag != undefined)
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

        SplitName = Name.split('_');
        for (var s = 0; s < SplitName.length; s++){
            FullName += SplitName[s].charAt(0).toUpperCase() + SplitName[s].slice(1).toLowerCase();
            if (s !=  (SplitName.length-1)){FullName += " ";}
        }//for

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

        ReplacementText = "Primary";
        powertotal += Gashat_LVL_LOW*10;
        ClassIDSub1 = Gashat_ID;
        ClassIDSub2 = 0;
        ClassIDSub3 = 0;
        HenshinText = "Kaigan!";

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
            //RiderEmbed.addField("[Replacing]", RequiredSlots + " ["+ReplacementText+"]", true)
        if ((MentionedSlot1Contents > 0)){RiderEmbed.addField(SlotName, settings.PlayerClassName(MentionedSlot1Contents, "yes"), true)
        }else{RiderEmbed.addField(SlotName, "{Empty}", true)};
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
  aliases: [
            "enginestart!",
            "engine-start!", "engine-start"
        ],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "enginestart",
  description: "",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};