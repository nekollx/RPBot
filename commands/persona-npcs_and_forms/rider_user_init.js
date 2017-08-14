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

    mysqlPool.getConnection(function(err_u, users) {
        if(err_u) {console.log("Error on - mysqlPool.getConnection for user array creation: "+ err_u)};
////////////////////////////////////////////////////////////////////////////////////////////////
        users.query("SELECT * FROM " + settings.dbnpctable + " ORDER BY Series_ID,name ASC", function(err_db,rows_db){
            if (err_db) {
                console.log("Error on users.query - SELECT * FROM settings.dbnpctable: "+ err_db);
            } else {
                if (rows_db.length < 1){
                    console.log("[NO DB ENTRIES FOUND] users.query - SELECT * FROM settings.dbnpctable");
                } else {
                    for (var i = 0; i < rows_db.length; i++) {
                        settings.NPC_List.set(rows_db[i].id, {
                            Self_ID: rows_db[i].id,
                            Owner_ID: rows_db[i].owner_id,
                            Series_ID: rows_db[i].Series_ID,
                            Avatar_URL: rows_db[i].Avatar_URL,
                            Name: rows_db[i].name,
                            Bio: rows_db[i].bio,
                            Parent_ID: rows_db[i].Parent_ID,
                            Gender: rows_db[i].Gender,
                            Height: rows_db[i].Height,
                            Weight: rows_db[i].Weight,
                            Race: rows_db[i].Race,
                            Power: rows_db[i].Power,
                            Strength: rows_db[i].Strength,
                            Perception: rows_db[i].Perception,
                            Endurance: rows_db[i].Endurance,
                            Charisma: rows_db[i].Charisma,
                            Intelligence: rows_db[i].Intelligence,
                            Agility: rows_db[i].Agility,
                            Luck: rows_db[i].Luck,
                            Fitness: rows_db[i].Fitness,
                            Bonus_Ballistic_Resist: rows_db[i].Bonus_Ballistic_Resist,
                            Bonus_Fire_Resist: rows_db[i].Bonus_Fire_Resist,
                            Bonus_Cryo_Resist: rows_db[i].Bonus_Cryo_Resist,
                            Bonus_Posion_Resist: rows_db[i].Bonus_Posion_Resist,
                            Bonus_Toxic_Resist: rows_db[i].Bonus_Toxic_Resist,
                            Bonus_Energy_Resist: rows_db[i].Bonus_Energy_Resist,
                            Bonus_Electric_Resist: rows_db[i].Bonus_Electric_Resist,
                            Bonus_Special_Resist: rows_db[i].Bonus_Special_Resist,
                            Bonus_Ballistic_Threshold: rows_db[i].Bonus_Ballistic_Threshold,
                            Bonus_Fire_Threshold: rows_db[i].Bonus_Fire_Threshold,
                            Bonus_Cryo_Threshold: rows_db[i].Bonus_Cryo_Threshold,
                            Bonus_Posion_Threshold: rows_db[i].Bonus_Posion_Threshold,
                            Bonus_Toxic_Threshold: rows_db[i].Bonus_Toxic_Threshold,
                            Bonus_Energy_Threshold: rows_db[i].Bonus_Energy_Threshold,
                            Bonus_Electric_Threshold: rows_db[i].Bonus_Electric_Threshold,
                            Bonus_Special_Threshold: rows_db[i].Bonus_Special_Threshold,
                            Bonus_Level: rows_db[i].Bonus_Level,
                            Current_HP: rows_db[i].Current_HP,
                            Current_MP: rows_db[i].Current_MP,
                            Current_IP: rows_db[i].Current_IP,
                            Bonus_HP: rows_db[i].Bonus_HP,
                            Bonus_MP: rows_db[i].Bonus_MP,
                            Bonus_IP: rows_db[i].Bonus_IP
                        });//settings.NPC_List.set
                        if (i == (rows_db.length - 1)){console.log("NPC Map Established.");};
                    };//for
                };//if (rows_db.length < 1)
            };//if (err_db)
        });//users.query - SELECT * FROM settings.dbtable
////////////////////////////////////////////////////////////////////////////////////////////////
        users.query("SELECT * FROM " + settings.playerforms + " ORDER BY User_ID,Series_ID DESC", function(err_db,rows_db){
            if (err_db) {
                console.log("Error on users.query - SELECT * FROM settings.playerforms: "+ err_db);
            } else {
                if (rows_db.length < 1){
                    console.log("[NO DB ENTRIES FOUND] users.query - SELECT * FROM settings.playerforms");
                } else {
                    for (var i = 0; i < rows_db.length; i++) {
                        settings.User_Forms.set(rows_db[i].Table_ID, {
                            Table_ID: rows_db[i].Table_ID,
                            User_ID: rows_db[i].User_ID,
                            Series_ID: rows_db[i].Series_ID,
                            Parent_ID: rows_db[i].Parent_ID,
                            Class_ID: rows_db[i].Class_ID,
                            Class_ID_Sub1: rows_db[i].Class_ID_Sub1,                                   
                            Class_ID_Sub2: rows_db[i].Class_ID_Sub2,                                   
                            Class_ID_Sub3: rows_db[i].Class_ID_Sub3,                                   
                            Class_ID_Sub4: rows_db[i].Class_ID_Sub4,                                   
                            Current_HP: rows_db[i].Current_HP,
                            Current_MP: rows_db[i].Current_MP,
                            Current_IP: rows_db[i].Current_IP,
                            Bio: rows_db[i].Bio,
                            Avatar_URL: rows_db[i].Avatar_URL,
                            Avatar_URL2: rows_db[i].Avatar_URL2,
                            Character_Name: rows_db[i].Character_Name,
                            Gender: rows_db[i].Gender,
                            Height: rows_db[i].Height,
                            Weight: rows_db[i].Weight,
                            Race: rows_db[i].Race,
                            Fitness: rows_db[i].Fitness,
                            Power: rows_db[i].Power,
                            Strength: rows_db[i].Strength,
                            Perception: rows_db[i].Perception,
                            Endurance: rows_db[i].Endurance,
                            Charisma: rows_db[i].Charisma,
                            Intelligence: rows_db[i].Intelligence,
                            Agility: rows_db[i].Agility,
                            Luck: rows_db[i].Luck,
                            Bonus_Level: rows_db[i].Bonus_Level,
                            Bonus_HP: rows_db[i].Bonus_HP,
                            Bonus_MP: rows_db[i].Bonus_MP,
                            Bonus_IP: rows_db[i].Bonus_IP,
                            Bonus_Ballistic_Resist: rows_db[i].Bonus_Ballistic_Resist,
                            Bonus_Fire_Resist: rows_db[i].Bonus_Fire_Resist,
                            Bonus_Cryo_Resist: rows_db[i].Bonus_Cryo_Resist,
                            Bonus_Posion_Resist: rows_db[i].Bonus_Posion_Resist,
                            Bonus_Toxic_Resist: rows_db[i].Bonus_Toxic_Resist,
                            Bonus_Energy_Resist: rows_db[i].Bonus_Energy_Resist,
                            Bonus_Electric_Resist: rows_db[i].Bonus_Electric_Resist,
                            Bonus_Special_Resist: rows_db[i].Bonus_Special_Resist,
                            Bonus_Ballistic_Threshold: rows_db[i].Bonus_Ballistic_Threshold,
                            Bonus_Fire_Threshold: rows_db[i].Bonus_Fire_Threshold,
                            Bonus_Cryo_Threshold: rows_db[i].Bonus_Cryo_Threshold,
                            Bonus_Posion_Threshold: rows_db[i].Bonus_Posion_Threshold,
                            Bonus_Toxic_Threshold: rows_db[i].Bonus_Toxic_Threshold,
                            Bonus_Energy_Threshold: rows_db[i].Bonus_Energy_Threshold,
                            Bonus_Electric_Threshold: rows_db[i].Bonus_Electric_Threshold,
                            Bonus_Special_Threshold: rows_db[i].Bonus_Special_Threshold,
                        });//settings.User_Forms.set
                        if (i == (rows_db.length - 1)){console.log("Player Forms Map Established.");};
                    };//for
                };//if (rows_db.length < 1)
            };//if (err_db)
        });//users.query - SELECT * FROM settings.dbtable
////////////////////////////////////////////////////////////////////////////////////////////////
        users.query("SELECT * FROM " + settings.dbskilltable + " ORDER BY PLAYER_ID,PERK_ID DESC", function(err_db,rows_db){
            if (err_db) {
                console.log("Error on users.query - SELECT * FROM settings.dbskilltable: "+ err_db);
            } else {
                if (rows_db.length < 1){
                    console.log("[NO DB ENTRIES FOUND] users.query - SELECT * FROM settings.dbskilltable");
                } else {
                    for (var i = 0; i < rows_db.length; i++) {
                        settings.UserSkillList.set(i, {
                            Perk_Index: rows_db[i].Perk_Index,
                            PERK_ID: rows_db[i].PERK_ID,
                            PLAYER_ID: rows_db[i].PLAYER_ID,
                            RANKS: rows_db[i].RANKS,
                            LEVEL_OR_BONUS: rows_db[i].LEVEL_OR_BONUS
                        });//settings.UserSkillList.set
                        if (i == (rows_db.length - 1)){console.log("Skill Map Established.");};
                    };//for
                };//if (rows_db.length < 1)
            };//if (err_db)
        });//users.query - SELECT * FROM settings.dbtable
////////////////////////////////////////////////////////////////////////////////////////////////
        users.query("SELECT * FROM " + settings.playerinventory + " ORDER BY PLAYER_ID,ID DESC", function(err_db,rows_db){
            if (err_db) {
                console.log("Error on users.query - SELECT * FROM settings.playerinventory: "+ err_db);
            } else {
                if (rows_db.length < 1){
                    console.log("[NO DB ENTRIES FOUND] users.query - SELECT * FROM settings.playerinventory");
                } else {
                    for (var i = 0; i < rows_db.length; i++) {
                        settings.User_Inventory.set(i, {
                            TABLE_ID: rows_db[i].TABLE_ID,
                            ID: rows_db[i].ID,
                            Player_ID: rows_db[i].Player_ID,
                            RANKS: rows_db[i].RANKS  
                        });//settings.User_Inventory.set
                        if (i == (rows_db.length - 1)){console.log("Player Inventory Map Established.");};
                    };//for
                };//if (rows_db.length < 1)
            };//if (err_db)
        });//users.query - SELECT * FROM settings.dbtable
////////////////////////////////////////////////////////////////////////////////////////////////
        users.query("SELECT * FROM " + settings.dbbuffdebufftable + " ORDER BY target_id DESC", function(err_db,rows_db){
            if (err_db) {
                console.log("Error on users.query - SELECT * FROM settings.dbbuffdebufftable: "+ err_db);
            } else {
                if (rows_db.length < 1){
                    console.log("[NO DB ENTRIES FOUND] users.query - SELECT * FROM settings.dbbuffdebufftable");
                } else {
                    for (var i = 0; i < rows_db.length; i++) {
                        settings.Buff_Debuff_List.set(i, {
                            casting_id: rows_db[i].casting_id,
                            target_id: rows_db[i].target_id,
                            HP: rows_db[i].HP,
                            MP: rows_db[i].MP,
                            IP: rows_db[i].IP,
                            Strength: rows_db[i].Strength,
                            Perception: rows_db[i].Perception,
                            Endurance: rows_db[i].Endurance,
                            Charisma: rows_db[i].Charisma,
                            Intelligence: rows_db[i].Intelligence,
                            Agility: rows_db[i].Agility,
                            Luck: rows_db[i].Luck,
                            BalisticResist: rows_db[i].BalisticResist,
                            FireResist: rows_db[i].FireResist,
                            CryoResist: rows_db[i].CryoResist,
                            ToxicResist: rows_db[i].ToxicResist,
                            ElecResist: rows_db[i].ElecResist,
                            EnergyResist: rows_db[i].EnergyResist,
                            PosionResist: rows_db[i].PosionResist,
                            SpecialResist: rows_db[i].SpecialResist,
                            BalisticDT: rows_db[i].BalisticDT,
                            FireDT: rows_db[i].FireDT,
                            CryoDT: rows_db[i].CryoDT,
                            ToxicDT: rows_db[i].ToxicDT,
                            ElecDT: rows_db[i].ElecDT,
                            EnergyDT: rows_db[i].EnergyDT,
                            PosionDT: rows_db[i].PosionDT,
                            SpecialDT: rows_db[i].SpecialDT,
                            SPECIAL_Points: rows_db[i].SPECIAL_Points,
                            CLASS_ID: rows_db[i].CLASS_ID,
                            Power_Mult: rows_db[i].Power_Mult,
                            level: rows_db[i].level,
                            Type: rows_db[i].Type,
                            PositiveOrNegative: rows_db[i].Positiv_Or_Negative
                        });//settings.Buff_Debuff_List.set
                        if (i == (rows_db.length - 1)){console.log("Buff/Debuff Map Established.");};
                    };//for
                };//if (rows_db.length < 1)
            };//if (err_db)
        });//users.query - SELECT * FROM settings.dbtable
////////////////////////////////////////////////////////////////////////////////////////////////
        users.query("SELECT * FROM " + settings.dbweaponarmortable + " ORDER BY Type,Series_ID,Name DESC", function(err_db,rows_db){
            if (err_db) {
                console.log("Error on itemsq.query - SELECT * FROM settings.dbweaponarmortable: "+ err_db);
            } else {
                if (rows_db.length < 1){
                    console.log("[NO DB ENTRIES FOUND] itemsq.query - SELECT * FROM settings.dbweaponarmortable");
                } else {
                    for (var i = 0; i < rows_db.length; i++) {
                        if ((rows_db[i].ID != undefined) || (rows_db[i].ID != null)){
                            var Series_ID = 19;
                            if (rows_db[i].Name.toLowerCase().startsWith("gashat")){
                                users.query("UPDATE " + settings.dbweaponarmortable + " SET Series_ID = "+Series_ID+" WHERE ID = " + rows_db[i].ID);
                                users.query("UPDATE " + settings.dbweaponarmortable + " SET Series_Name = '"+settings.SeriesName(Series_ID)+"' WHERE ID = " + rows_db[i].ID);
                            };//if
                            if (rows_db[i].Name.toLowerCase().startsWith("dual_gashat")){
                                users.query("UPDATE " + settings.dbweaponarmortable + " SET Series_ID = "+Series_ID+" WHERE ID = " + rows_db[i].ID);
                                users.query("UPDATE " + settings.dbweaponarmortable + " SET Series_Name = '"+settings.SeriesName(Series_ID)+"' WHERE ID = " + rows_db[i].ID);
                            };//if
                            Series_ID = 17;
                            if (rows_db[i].Name.toLowerCase().startsWith("eyecon")){
                                users.query("UPDATE " + settings.dbweaponarmortable + " SET Series_ID = "+Series_ID+" WHERE ID = " + rows_db[i].ID);
                                users.query("UPDATE " + settings.dbweaponarmortable + " SET Series_Name = '"+settings.SeriesName(Series_ID)+"' WHERE ID = " + rows_db[i].ID);
                                users.query("UPDATE " + settings.dbweaponarmortable + " SET Upgrade_SkillID = 1 WHERE ID = " + rows_db[i].ID);
                                if (rows_db[i].DMG_Floor < 2) {users.query("UPDATE " + settings.dbweaponarmortable + " SET DMG_Floor = 2 WHERE ID = " + rows_db[i].ID);}
                                if (rows_db[i].DMG_High < 2) {users.query("UPDATE " + settings.dbweaponarmortable + " SET DMG_High = 2 WHERE ID = " + rows_db[i].ID);}
                            };//if
                            Series_ID = 16;
                            if (rows_db[i].Name.toLowerCase().startsWith("signal_bike")){
                                users.query("UPDATE " + settings.dbweaponarmortable + " SET Series_ID = "+Series_ID+" WHERE ID = " + rows_db[i].ID);
                                users.query("UPDATE " + settings.dbweaponarmortable + " SET Series_Name = '"+settings.SeriesName(Series_ID)+"' WHERE ID = " + rows_db[i].ID);
                                users.query("UPDATE " + settings.dbweaponarmortable + " SET Upgrade_SkillID = 1 WHERE ID = " + rows_db[i].ID);
                                if (rows_db[i].DMG_Floor < 2) {users.query("UPDATE " + settings.dbweaponarmortable + " SET DMG_Floor = 2 WHERE ID = " + rows_db[i].ID);}
                                if (rows_db[i].DMG_High < 2) {users.query("UPDATE " + settings.dbweaponarmortable + " SET DMG_High = 2 WHERE ID = " + rows_db[i].ID);}
                            };//if
                            if (rows_db[i].Name.toLowerCase().startsWith("shift_car")){
                                users.query("UPDATE " + settings.dbweaponarmortable + " SET Series_ID = "+Series_ID+" WHERE ID = " + rows_db[i].ID);
                                users.query("UPDATE " + settings.dbweaponarmortable + " SET Series_Name = '"+settings.SeriesName(Series_ID)+"' WHERE ID = " + rows_db[i].ID);
                                users.query("UPDATE " + settings.dbweaponarmortable + " SET Upgrade_SkillID = 1 WHERE ID = " + rows_db[i].ID);
                                if (rows_db[i].DMG_Floor < 2) {users.query("UPDATE " + settings.dbweaponarmortable + " SET DMG_Floor = 2 WHERE ID = " + rows_db[i].ID);}
                                if (rows_db[i].DMG_High < 2) {users.query("UPDATE " + settings.dbweaponarmortable + " SET DMG_High = 2 WHERE ID = " + rows_db[i].ID);}
                            };//if
                            Series_ID = 8;
                            if (rows_db[i].Name.toLowerCase().startsWith("fuestle")){
                                users.query("UPDATE " + settings.dbweaponarmortable + " SET Series_ID = "+Series_ID+" WHERE ID = " + rows_db[i].ID);
                                users.query("UPDATE " + settings.dbweaponarmortable + " SET Series_Name = '"+settings.SeriesName(Series_ID)+"' WHERE ID = " + rows_db[i].ID);
                                users.query("UPDATE " + settings.dbweaponarmortable + " SET Upgrade_SkillID = 1 WHERE ID = " + rows_db[i].ID);
                                if (rows_db[i].DMG_Floor < 2) {users.query("UPDATE " + settings.dbweaponarmortable + " SET DMG_Floor = 2 WHERE ID = " + rows_db[i].ID);}
                                if (rows_db[i].DMG_High < 2) {users.query("UPDATE " + settings.dbweaponarmortable + " SET DMG_High = 2 WHERE ID = " + rows_db[i].ID);}
                            };//if
                            Series_ID = 11;
                            if (rows_db[i].Name.toLowerCase().startsWith("gaia_memory")){
                                users.query("UPDATE " + settings.dbweaponarmortable + " SET Series_ID = "+Series_ID+" WHERE ID = " + rows_db[i].ID);
                                users.query("UPDATE " + settings.dbweaponarmortable + " SET Series_Name = '"+settings.SeriesName(Series_ID)+"' WHERE ID = " + rows_db[i].ID);
                                users.query("UPDATE " + settings.dbweaponarmortable + " SET Upgrade_SkillID = 1 WHERE ID = " + rows_db[i].ID);
                                if (rows_db[i].DMG_Floor < 2) {users.query("UPDATE " + settings.dbweaponarmortable + " SET DMG_Floor = 2 WHERE ID = " + rows_db[i].ID);}
                                if (rows_db[i].DMG_High < 2) {users.query("UPDATE " + settings.dbweaponarmortable + " SET DMG_High = 2 WHERE ID = " + rows_db[i].ID);}
                            };//if
                            Series_ID = 12;
                            if (rows_db[i].Name.toLowerCase().startsWith("medal")){
                                users.query("UPDATE " + settings.dbweaponarmortable + " SET Series_ID = "+Series_ID+" WHERE ID = " + rows_db[i].ID);
                                users.query("UPDATE " + settings.dbweaponarmortable + " SET Series_Name = '"+settings.SeriesName(Series_ID)+"' WHERE ID = " + rows_db[i].ID);
                                users.query("UPDATE " + settings.dbweaponarmortable + " SET Upgrade_SkillID = 1 WHERE ID = " + rows_db[i].ID);
                                if (rows_db[i].DMG_Floor < 2) {users.query("UPDATE " + settings.dbweaponarmortable + " SET DMG_Floor = 2 WHERE ID = " + rows_db[i].ID);}
                                if (rows_db[i].DMG_High < 2) {users.query("UPDATE " + settings.dbweaponarmortable + " SET DMG_High = 2 WHERE ID = " + rows_db[i].ID);}
                            };//if
                            Series_ID = 13;
                            if (rows_db[i].Name.toLowerCase().startsWith("switch")){
                                users.query("UPDATE " + settings.dbweaponarmortable + " SET Series_ID = "+Series_ID+" WHERE ID = " + rows_db[i].ID);
                                users.query("UPDATE " + settings.dbweaponarmortable + " SET Series_Name = '"+settings.SeriesName(Series_ID)+"' WHERE ID = " + rows_db[i].ID);
                                users.query("UPDATE " + settings.dbweaponarmortable + " SET Upgrade_SkillID = 1 WHERE ID = " + rows_db[i].ID);
                                if (rows_db[i].DMG_Floor < 2) {users.query("UPDATE " + settings.dbweaponarmortable + " SET DMG_Floor = 2 WHERE ID = " + rows_db[i].ID);}
                                if (rows_db[i].DMG_High < 2) {users.query("UPDATE " + settings.dbweaponarmortable + " SET DMG_High = 2 WHERE ID = " + rows_db[i].ID);}
                            };//if
                            Series_ID = 14;
                            if (rows_db[i].Name.toLowerCase().startsWith("ring")){
                                users.query("UPDATE " + settings.dbweaponarmortable + " SET Series_ID = "+Series_ID+" WHERE ID = " + rows_db[i].ID);
                                users.query("UPDATE " + settings.dbweaponarmortable + " SET Series_Name = '"+settings.SeriesName(Series_ID)+"' WHERE ID = " + rows_db[i].ID);
                                users.query("UPDATE " + settings.dbweaponarmortable + " SET Upgrade_SkillID = 1 WHERE ID = " + rows_db[i].ID);
                                if (rows_db[i].DMG_Floor < 2) {users.query("UPDATE " + settings.dbweaponarmortable + " SET DMG_Floor = 2 WHERE ID = " + rows_db[i].ID);}
                                if (rows_db[i].DMG_High < 2) {users.query("UPDATE " + settings.dbweaponarmortable + " SET DMG_High = 2 WHERE ID = " + rows_db[i].ID);}
                            };//if
                            Series_ID = 15;
                            if (rows_db[i].Name.toLowerCase().startsWith("lockseed")){
                                users.query("UPDATE " + settings.dbweaponarmortable + " SET Series_ID = "+Series_ID+" WHERE ID = " + rows_db[i].ID);
                                users.query("UPDATE " + settings.dbweaponarmortable + " SET Series_Name = '"+settings.SeriesName(Series_ID)+"' WHERE ID = " + rows_db[i].ID);
                                users.query("UPDATE " + settings.dbweaponarmortable + " SET Upgrade_SkillID = 1 WHERE ID = " + rows_db[i].ID);
                                if (rows_db[i].DMG_Floor < 2) {users.query("UPDATE " + settings.dbweaponarmortable + " SET DMG_Floor = 2 WHERE ID = " + rows_db[i].ID);}
                                if (rows_db[i].DMG_High < 2) {users.query("UPDATE " + settings.dbweaponarmortable + " SET DMG_High = 2 WHERE ID = " + rows_db[i].ID);}
                            };//if
                            Series_ID = 1032;
                            if (rows_db[i].Name.toLowerCase().startsWith("engine_soul")){
                                users.query("UPDATE " + settings.dbweaponarmortable + " SET Series_ID = "+Series_ID+" WHERE ID = " + rows_db[i].ID);
                                users.query("UPDATE " + settings.dbweaponarmortable + " SET Series_Name = '"+settings.SeriesName(Series_ID)+"' WHERE ID = " + rows_db[i].ID);
                                users.query("UPDATE " + settings.dbweaponarmortable + " SET Upgrade_SkillID = 1 WHERE ID = " + rows_db[i].ID);
                                if (rows_db[i].DMG_Floor < 2) {users.query("UPDATE " + settings.dbweaponarmortable + " SET DMG_Floor = 2 WHERE ID = " + rows_db[i].ID);}
                                if (rows_db[i].DMG_High < 2) {users.query("UPDATE " + settings.dbweaponarmortable + " SET DMG_High = 2 WHERE ID = " + rows_db[i].ID);}
                            };//if
                            Series_ID = 1043;
                            if (rows_db[i].Name.toLowerCase().startsWith("hidden_disk")){
                                users.query("UPDATE " + settings.dbweaponarmortable + " SET Series_ID = "+Series_ID+" WHERE ID = " + rows_db[i].ID);
                                users.query("UPDATE " + settings.dbweaponarmortable + " SET Series_Name = '"+settings.SeriesName(Series_ID)+"' WHERE ID = " + rows_db[i].ID);
                                users.query("UPDATE " + settings.dbweaponarmortable + " SET Upgrade_SkillID = 1 WHERE ID = " + rows_db[i].ID);
                                if (rows_db[i].DMG_Floor < 2) {users.query("UPDATE " + settings.dbweaponarmortable + " SET DMG_Floor = 2 WHERE ID = " + rows_db[i].ID);}
                                if (rows_db[i].DMG_High < 2) {users.query("UPDATE " + settings.dbweaponarmortable + " SET DMG_High = 2 WHERE ID = " + rows_db[i].ID);}
                            };//if
                            Series_ID = 1036;
                            if (rows_db[i].Name.toLowerCase().startsWith("zyudenchi")){
                                users.query("UPDATE " + settings.dbweaponarmortable + " SET Series_ID = "+Series_ID+" WHERE ID = " + rows_db[i].ID);
                                users.query("UPDATE " + settings.dbweaponarmortable + " SET Series_Name = '"+settings.SeriesName(Series_ID)+"' WHERE ID = " + rows_db[i].ID);
                                users.query("UPDATE " + settings.dbweaponarmortable + " SET Upgrade_SkillID = 1 WHERE ID = " + rows_db[i].ID);
                                if (rows_db[i].DMG_Floor < 2) {users.query("UPDATE " + settings.dbweaponarmortable + " SET DMG_Floor = 2 WHERE ID = " + rows_db[i].ID);}
                                if (rows_db[i].DMG_High < 2) {users.query("UPDATE " + settings.dbweaponarmortable + " SET DMG_High = 2 WHERE ID = " + rows_db[i].ID);}
                            };//if
                            Series_ID = 1037;
                            if (rows_db[i].Name.toLowerCase().startsWith("ressha")){
                                users.query("UPDATE " + settings.dbweaponarmortable + " SET Series_ID = "+Series_ID+" WHERE ID = " + rows_db[i].ID);
                                users.query("UPDATE " + settings.dbweaponarmortable + " SET Series_Name = '"+settings.SeriesName(Series_ID)+"' WHERE ID = " + rows_db[i].ID);
                                users.query("UPDATE " + settings.dbweaponarmortable + " SET Upgrade_SkillID = 1 WHERE ID = " + rows_db[i].ID);
                                if (rows_db[i].DMG_Floor < 2) {users.query("UPDATE " + settings.dbweaponarmortable + " SET DMG_Floor = 2 WHERE ID = " + rows_db[i].ID);}
                                if (rows_db[i].DMG_High < 2) {users.query("UPDATE " + settings.dbweaponarmortable + " SET DMG_High = 2 WHERE ID = " + rows_db[i].ID);}
                            };//if
                            Series_ID = 1038;
                            if (rows_db[i].Name.toLowerCase().startsWith("nin_shuriken")){
                                users.query("UPDATE " + settings.dbweaponarmortable + " SET Series_ID = "+Series_ID+" WHERE ID = " + rows_db[i].ID);
                                users.query("UPDATE " + settings.dbweaponarmortable + " SET Series_Name = '"+settings.SeriesName(Series_ID)+"' WHERE ID = " + rows_db[i].ID);
                                users.query("UPDATE " + settings.dbweaponarmortable + " SET Upgrade_SkillID = 1 WHERE ID = " + rows_db[i].ID);
                                if (rows_db[i].DMG_Floor < 2) {users.query("UPDATE " + settings.dbweaponarmortable + " SET DMG_Floor = 2 WHERE ID = " + rows_db[i].ID);}
                                if (rows_db[i].DMG_High < 2) {users.query("UPDATE " + settings.dbweaponarmortable + " SET DMG_High = 2 WHERE ID = " + rows_db[i].ID);}
                            };//if
                            Series_ID = 1041;
                            if (rows_db[i].Name.toLowerCase().startsWith("kyutama")){
                                users.query("UPDATE " + settings.dbweaponarmortable + " SET Series_ID = "+Series_ID+" WHERE ID = " + rows_db[i].ID);
                                users.query("UPDATE " + settings.dbweaponarmortable + " SET Series_Name = '"+settings.SeriesName(Series_ID)+"' WHERE ID = " + rows_db[i].ID);
                                users.query("UPDATE " + settings.dbweaponarmortable + " SET Upgrade_SkillID = 1 WHERE ID = " + rows_db[i].ID);
                                if (rows_db[i].DMG_Floor < 2) {users.query("UPDATE " + settings.dbweaponarmortable + " SET DMG_Floor = 2 WHERE ID = " + rows_db[i].ID);}
                                if (rows_db[i].DMG_High < 2) {users.query("UPDATE " + settings.dbweaponarmortable + " SET DMG_High = 2 WHERE ID = " + rows_db[i].ID);}
                            };//if
                            Series_ID = 1044;
                            if (rows_db[i].Name.toLowerCase().startsWith("gosei_card")){
                                users.query("UPDATE " + settings.dbweaponarmortable + " SET Series_ID = "+Series_ID+" WHERE ID = " + rows_db[i].ID);
                                users.query("UPDATE " + settings.dbweaponarmortable + " SET Series_Name = '"+settings.SeriesName(Series_ID)+"' WHERE ID = " + rows_db[i].ID);
                                users.query("UPDATE " + settings.dbweaponarmortable + " SET Upgrade_SkillID = 1 WHERE ID = " + rows_db[i].ID);
                                if (rows_db[i].DMG_Floor < 2) {users.query("UPDATE " + settings.dbweaponarmortable + " SET DMG_Floor = 2 WHERE ID = " + rows_db[i].ID);}
                                if (rows_db[i].DMG_High < 2) {users.query("UPDATE " + settings.dbweaponarmortable + " SET DMG_High = 2 WHERE ID = " + rows_db[i].ID);}
                            };//if
                            if ((!rows_db[i].Name.toLowerCase().startsWith("changer")) ||  
                                (!rows_db[i].Name.toLowerCase().startsWith("driver")) || 
                                (!rows_db[i].Name.toLowerCase().startsWith("misc"))
                               ){
                                if (rows_db[i].Bonus_Ballistic_Threshold < (rows_db[i].DMG_Floor * 10)) {users.query("UPDATE " + settings.dbweaponarmortable + " SET Bonus_Ballistic_Threshold = "+(rows_db[i].DMG_Floor * 10)+" WHERE ID = " + rows_db[i].ID);}
                                if (rows_db[i].Bonus_Fire_Threshold < (rows_db[i].DMG_Floor * 10)) {users.query("UPDATE " + settings.dbweaponarmortable + " SET Bonus_Fire_Threshold = "+(rows_db[i].DMG_Floor * 10)+" WHERE ID = " + rows_db[i].ID);}
                                if (rows_db[i].Bonus_Cryo_Threshold < (rows_db[i].DMG_Floor * 10)) {users.query("UPDATE " + settings.dbweaponarmortable + " SET Bonus_Cryo_Threshold = "+(rows_db[i].DMG_Floor * 10)+" WHERE ID = " + rows_db[i].ID);}
                                if (rows_db[i].Bonus_Posion_Threshold < (rows_db[i].DMG_Floor * 10)) {users.query("UPDATE " + settings.dbweaponarmortable + " SET Bonus_Posion_Threshold = "+(rows_db[i].DMG_Floor * 10)+" WHERE ID = " + rows_db[i].ID);}
                                if (rows_db[i].Bonus_Toxic_Threshold < (rows_db[i].DMG_Floor * 10)) {users.query("UPDATE " + settings.dbweaponarmortable + " SET Bonus_Toxic_Threshold = "+(rows_db[i].DMG_Floor * 10)+" WHERE ID = " + rows_db[i].ID);}
                                if (rows_db[i].Bonus_Energy_Threshold < (rows_db[i].DMG_Floor * 10)) {users.query("UPDATE " + settings.dbweaponarmortable + " SET Bonus_Energy_Threshold = "+(rows_db[i].DMG_Floor * 10)+" WHERE ID = " + rows_db[i].ID);}
                                if (rows_db[i].Bonus_Electric_Threshold < (rows_db[i].DMG_Floor * 10)) {users.query("UPDATE " + settings.dbweaponarmortable + " SET Bonus_Electric_Threshold = "+(rows_db[i].DMG_Floor * 10)+" WHERE ID = " + rows_db[i].ID);}

                                if (rows_db[i].Bonus_Ballistic_Resist < (rows_db[i].DMG_Floor / 2)) {users.query("UPDATE " + settings.dbweaponarmortable + " SET Bonus_Ballistic_Resist = "+(rows_db[i].DMG_Floor / 2)+" WHERE ID = " + rows_db[i].ID);}
                                if (rows_db[i].Bonus_Fire_Resist < (rows_db[i].DMG_Floor / 2)) {users.query("UPDATE " + settings.dbweaponarmortable + " SET Bonus_Fire_Resist = "+(rows_db[i].DMG_Floor / 2)+" WHERE ID = " + rows_db[i].ID);}
                                if (rows_db[i].Bonus_Cryo_Resist < (rows_db[i].DMG_Floor / 2)) {users.query("UPDATE " + settings.dbweaponarmortable + " SET Bonus_Cryo_Resist = "+(rows_db[i].DMG_Floor / 2)+" WHERE ID = " + rows_db[i].ID);}
                                if (rows_db[i].Bonus_Posion_Resist < (rows_db[i].DMG_Floor / 2)) {users.query("UPDATE " + settings.dbweaponarmortable + " SET Bonus_Posion_Resist = "+(rows_db[i].DMG_Floor / 2)+" WHERE ID = " + rows_db[i].ID);}
                                if (rows_db[i].Bonus_Toxic_Resist < (rows_db[i].DMG_Floor / 2)) {users.query("UPDATE " + settings.dbweaponarmortable + " SET Bonus_Toxic_Resist = "+(rows_db[i].DMG_Floor / 2)+" WHERE ID = " + rows_db[i].ID);}
                                if (rows_db[i].Bonus_Energy_Resist < (rows_db[i].DMG_Floor / 2)) {users.query("UPDATE " + settings.dbweaponarmortable + " SET Bonus_Energy_Resist = "+(rows_db[i].DMG_Floor / 2)+" WHERE ID = " + rows_db[i].ID);}
                                if (rows_db[i].Bonus_Electric_Resist < (rows_db[i].DMG_Floor / 2)) {users.query("UPDATE " + settings.dbweaponarmortable + " SET Bonus_Electric_Resist = "+(rows_db[i].DMG_Floor / 2)+" WHERE ID = " + rows_db[i].ID);}

                                if (rows_db[i].Strength < (rows_db[i].DMG_Floor / 2)) {users.query("UPDATE " + settings.dbweaponarmortable + " SET Strength = "+(rows_db[i].DMG_Floor / 2)+" WHERE ID = " + rows_db[i].ID);}
                                if (rows_db[i].Perception < (rows_db[i].DMG_Floor / 2)) {users.query("UPDATE " + settings.dbweaponarmortable + " SET Perception = "+(rows_db[i].DMG_Floor / 2)+" WHERE ID = " + rows_db[i].ID);}
                                if (rows_db[i].Endurance < (rows_db[i].DMG_Floor / 2)) {users.query("UPDATE " + settings.dbweaponarmortable + " SET Endurance = "+(rows_db[i].DMG_Floor / 2)+" WHERE ID = " + rows_db[i].ID);}
                                if (rows_db[i].Charisma < (rows_db[i].DMG_Floor / 2)) {users.query("UPDATE " + settings.dbweaponarmortable + " SET Charisma = "+(rows_db[i].DMG_Floor / 2)+" WHERE ID = " + rows_db[i].ID);}
                                if (rows_db[i].Intelligence < (rows_db[i].DMG_Floor / 2)) {users.query("UPDATE " + settings.dbweaponarmortable + " SET Intelligence = "+(rows_db[i].DMG_Floor / 2)+" WHERE ID = " + rows_db[i].ID);}
                                if (rows_db[i].Agility < (rows_db[i].DMG_Floor / 2)) {users.query("UPDATE " + settings.dbweaponarmortable + " SET Agility = "+(rows_db[i].DMG_Floor / 2)+" WHERE ID = " + rows_db[i].ID);}
                                if (rows_db[i].Luck < (rows_db[i].DMG_Floor / 2)) {users.query("UPDATE " + settings.dbweaponarmortable + " SET Luck = "+(rows_db[i].DMG_Floor / 2)+" WHERE ID = " + rows_db[i].ID);}
                            };//if
                            settings.Weapons_Armor_List.set(rows_db[i].ID, {
                                ID: rows_db[i].ID,
                                Name: rows_db[i].Name,
                                Type: rows_db[i].Type,
                                DamageClass: rows_db[i].DamageClass,
                                Series_ID: rows_db[i].Series_ID,
                                Weight: rows_db[i].Weight,
                                DMG_Floor: rows_db[i].DMG_Floor,
                                DMG_High: rows_db[i].DMG_High,
                                Upgrade_SkillID: rows_db[i].Upgrade_SkillID,
                                Main_SkillID: rows_db[i].Main_SkillID,
                                Secondary_SkillID: rows_db[i].Secondary_SkillID,
                                Tritary_SkillID: rows_db[i].Tritary_SkillID,
                                ImageURL: rows_db[i].ImageURL,
                                ImageURL2: rows_db[i].ImageURL2,
                                Strength: rows_db[i].Strength,
                                Perception: rows_db[i].Perception,
                                Endurance: rows_db[i].Endurance,
                                Charisma: rows_db[i].Charisma,
                                Intelligence: rows_db[i].Intelligence,
                                Agility: rows_db[i].Agility,
                                Luck: rows_db[i].Luck,
                                Bonus_Ballistic_Resist: rows_db[i].Bonus_Ballistic_Resist,
                                Bonus_Fire_Resist: rows_db[i].Bonus_Fire_Resist,
                                Bonus_Cryo_Resist: rows_db[i].Bonus_Cryo_Resist,
                                Bonus_Posion_Resist: rows_db[i].Bonus_Posion_Resist,
                                Bonus_Toxic_Resist: rows_db[i].Bonus_Toxic_Resist,
                                Bonus_Energy_Resist: rows_db[i].Bonus_Energy_Resist,
                                Bonus_Electric_Resist: rows_db[i].Bonus_Electric_Resist,
                                Bonus_Special_Resist: rows_db[i].Bonus_Special_Resist,
                                Bonus_Ballistic_Threshold: rows_db[i].Bonus_Ballistic_Threshold,
                                Bonus_Fire_Threshold: rows_db[i].Bonus_Fire_Threshold,
                                Bonus_Cryo_Threshold: rows_db[i].Bonus_Cryo_Threshold,
                                Bonus_Posion_Threshold: rows_db[i].Bonus_Posion_Threshold,
                                Bonus_Toxic_Threshold: rows_db[i].Bonus_Toxic_Threshold,
                                Bonus_Energy_Threshold: rows_db[i].Bonus_Energy_Threshold,
                                Bonus_Electric_Threshold: rows_db[i].Bonus_Electric_Threshold,
                                Bonus_Special_Threshold: rows_db[i].Bonus_Special_Threshold,
                                Bonus_HP: rows_db[i].Bonus_HP,
                                Bonus_MP: rows_db[i].Bonus_MP,
                                Bonus_IP: rows_db[i].Bonus_IP
                            });//settings.Weapons_Armor_List
                            if (i == (rows_db.length - 1)){console.log("Weapon/Armor/Item Map Established.");};
                        };//if ((rows_dbs[i].ID ! = undifined) || (rows_dbs[i].ID ! = null))
                    }//for (var i = 0; i < rows_dbs.length; i++)
                }//if (rows_dbs.length > 0)
            };//if/else (err_dbs)
        });//users.query(SQLString
////////////////////////////////////////////////////////////////////////////////////////////////
        users.query("SELECT * FROM " + settings.dbtable + " ORDER BY PLACEHOLDER_lvl DESC", function(err_db,rows_db){
            if (err_db) {
                console.log("Error on users.query - SELECT * FROM settings.dbtable: "+ err_db);
            } else {
                if (rows_db.length < 1){
                    console.log("[NO DB ENTRIES FOUND] users.query - SELECT * FROM settings.dbtable");
                } else {
                    for (var i = 0; i < rows_db.length; i++) {
                        settings.UserList.set(rows_db[i].id, {
                            Gender: rows_db[i].Gender,
                            Height: rows_db[i].Height,
                            Weight: rows_db[i].Weight,
                            Fitness: rows_db[i].Fitness,

                            HP: rows_db[i].Current_HP,
                            MP: rows_db[i].Current_MP,
                            IP: rows_db[i].Current_IP,
                            Bonus_HP: rows_db[i].MAX_HP,
                            Bonus_MP: rows_db[i].MAX_MP,
                            Bonus_IP: rows_db[i].MAX_IP,

                            Strength: rows_db[i].Strength,
                            Perception: rows_db[i].Perception,
                            Endurance: rows_db[i].Endurance,
                            Charisma: rows_db[i].Charisma,
                            Intelligence: rows_db[i].Intelligence,
                            Agility: rows_db[i].Agily,
                            Luck: rows_db[i].Luck,

                            SPECIAL_Points: rows_db[i].SPECIAL_Points,
                            Power_Mult: rows_db[i].Power_Mult,
                            Power_Mult_Boost: rows_db[i].Power_Mult_Boost,
                            Level: rows_db[i].PLACEHOLDER_lvl,
                            Level_XP: rows_db[i].PLACEHOLDER_lvl_xp,
                            Total_XP: rows_db[i].PLACEHOLDER_total_xp,
                            XP: rows_db[i].PLACEHOLDER_xp,
                            XP_Percent: rows_db[i].PLACEHOLDER_xp_percent,
                            Player_Rank: rows_db[i].PLACEHOLDER_rank,
                            Player_Rank_Total: rows_db[i].PLACEHOLDER_rank_total, 

                            CLASS_ID: rows_db[i].CLASS_ID,
                            CLASS_ID_Boost: rows_db[i].CLASS_ID_Boost,
                            CLASS_ID_Sub: rows_db[i].CLASS_ID_Sub,
                            CLASS_ID_Sub2: rows_db[i].CLASS_ID_Sub2,
                            CLASS_ID_Sub3: rows_db[i].CLASS_ID_Sub3,
                            CLASS_ID_Sub4: rows_db[i].CLASS_ID_Sub4,

                            Banked_Criticals: rows_db[i].Banked_Criticals,
                            Critical_Meter_Percent: rows_db[i].Critical_Meter_Percent,

                            Condition_Head: rows_db[i].Condition_Head,
                            Condition_Left_Eye: rows_db[i].Condition_Left_Eye,
                            Condition_Right_Eye: rows_db[i].Condition_Right_Eye,
                            Condition_Left_Ear: rows_db[i].Condition_Left_Ear,
                            Condition_Right_Ear: rows_db[i].Condition_Right_Ear,
                            Condition_Torso: rows_db[i].Condition_Torso,
                            Condition_Groin: rows_db[i].Condition_Groin,
                            Condition_Left_Leg: rows_db[i].Condition_Left_Leg,
                            Condition_Right_Leg: rows_db[i].Condition_Right_Leg,
                            Condition_Left_Wing: rows_db[i].Condition_Left_Wing,
                            Condition_Right_Wing: rows_db[i].Condition_Right_Wing,
                            Condition_Tail: rows_db[i].Condition_Tail,

                            Has_Head: rows_db[i].Has_Head,
                            Has_Left_Eye: rows_db[i].Has_Left_Eye,
                            Has_Right_Eye: rows_db[i].Has_Right_Eye,
                            Has_Left_Ear: rows_db[i].Has_Left_Ear,
                            Has_Right_Ear: rows_db[i].Has_Right_Ear,
                            Has_Torso: rows_db[i].Has_Torso,
                            Has_Groin: rows_db[i].Has_Groin,
                            Has_Left_Leg: rows_db[i].Has_Left_Leg,
                            Has_Right_Leg: rows_db[i].Has_Right_Leg,
                            Has_Left_Wing: rows_db[i].Has_Left_Wing,
                            Has_Right_Wing: rows_db[i].Has_Right_Wing,
                            Has_Tail: rows_db[i].Has_Tail,

                            Thirst_Level: rows_db[i].Thirst_Level,
                            Hunger_Level: rows_db[i].Hunger_Level,
                            Tired_Level: rows_db[i].Tired_Level,
                            Is_Sick: rows_db[i].Is_Sick,

                            Toxic_Damage: rows_db[i].Toxic_Damage,
                            Fatigue_Damage: rows_db[i].Fatigue_Damage,
                            Brain_Damage: rows_db[i].Brain_Damage,

                            Toxic_DOT: rows_db[i].Toxic_DOT,
                            Cryo_DOT: rows_db[i].Cryo_DOT,
                            Fire_DOT: rows_db[i].Fire_DOT,
                            Elec_DOT: rows_db[i].Elec_DOT,
                            Posion_DOT: rows_db[i].Posion_DOT,

                            Toxic_Duration: rows_db[i].Toxic_Duration,
                            Cryo_Duration: rows_db[i].Cryo_Duration,
                            Fire_Duration: rows_db[i].Fire_Duration,
                            Elec_Duration: rows_db[i].Elec_Duration,
                            Posion_Duration: rows_db[i].Posion_Duration,

                            Paralyzed_Duration: rows_db[i].Paralyzed_Duration,
                            Stunned_Duration: rows_db[i].Stunned_Duration,
                            Restrained_Duration: rows_db[i].Restrained_Duration,

                            IsLevelCapped: rows_db[i].IsLevelCapped
                        });//settings.UserList.set
                        var SQLQuerry = "UPDATE " + settings.dbskilltable + " SET Player_Name = '" + rows_db[i].Player_Name + "' WHERE PLAYER_ID = '" + rows_db[i].id + "'";
                        var SQLQuerry2 = "UPDATE " + settings.playerinventory + " SET Player_Name = '" + rows_db[i].Player_Name + "' WHERE PLAYER_ID = '" + rows_db[i].id + "'";
                        users.query(SQLQuerry);
                        users.query(SQLQuerry2);
                        if (i == (rows_db.length - 1)){console.log("User Map Established.");};
                    }//for (var i = 0; i < rows_db.length; i++)
                }//if (rows_db.length < 1)
            };//if/else (err_db)
            users.release(); 
        });//users.query - SELECT * FROM settings.dbtable
    });//mysqlPool.getConnection
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
    var genchannel = settings.textChannel;
    const NeoEmbed = new discord.RichEmbed()
          NeoEmbed.setColor(randomHex.generate())
          NeoEmbed.setAuthor('RP Bot Neo', settings.botpic)
          NeoEmbed.setDescription('Back from the void and Ready to Rock!')
          NeoEmbed.setImage('www.maskedriders.info/Mee6RP/statusPic/Beast.PNG')
    client.channels.get(settings.textChannel).send('Back from the void and Ready to Rock!')
};//init

exports.run = (client, msg) => {
    var uid = msg.author.id; var uidname = msg.author.username;
    var mentionedid = uid; var mentionedname = uidname;
    var uidavatar = msg.author.avatarURL; var mentionedavatar = uidavatar;

    if (msg.mentions.users.first()){
        mentionedid     = msg.mentions.users.first().id;
        mentionedname   = msg.mentions.users.first().username;
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
////////////////////////////////////////////////////////////////////////////////////////////////
    if (msg.content.toLowerCase().startsWith('!update')){
        mysqlPool.getConnection(function(err_u, connection) {
            if(err_u) {console.log("Error on - mysqlPool.getConnection for user array creation: "+ err_u)};
////////////////////////////////////////////////////////////////////////////////////////////////
            connection.query("SELECT * FROM " + settings.playerforms + " ORDER BY User_ID,Series_ID DESC", function(err_db,rows_db){
                if (err_db) {
                    console.log("Error on users.query - SELECT * FROM settings.playerforms: "+ err_db);
                } else {
                    if (rows_db.length < 1){
                        console.log("[NO DB ENTRIES FOUND] users.query - SELECT * FROM settings.playerforms");
                    } else {
                        for (var i = 0; i < rows_db.length; i++) {
                            settings.User_Forms.set(rows_db[i].Table_ID, {
                                Table_ID: rows_db[i].Table_ID,
                                User_ID: rows_db[i].User_ID,
                                Series_ID: rows_db[i].Series_ID,
                                Bio: rows_db[i].Bio,
                                Parent_ID: rows_db[i].Parent_ID,
                                Gender: rows_db[i].Gender,
                                Height: rows_db[i].Height,
                                Weight: rows_db[i].Weight,
                                Race: rows_db[i].Race,
                                Power: rows_db[i].Power,
                                Strength: rows_db[i].Strength,
                                Perception: rows_db[i].Perception,
                                Endurance: rows_db[i].Endurance,
                                Charisma: rows_db[i].Charisma,
                                Intelligence: rows_db[i].Intelligence,
                                Agility: rows_db[i].Agility,
                                Luck: rows_db[i].Luck,
                                Bonus_Level: rows_db[i].Bonus_Level,
                                Current_HP: rows_db[i].Current_HP,
                                Current_MP: rows_db[i].Current_MP,
                                Current_IP: rows_db[i].Current_IP,
                                Bonus_HP: rows_db[i].Bonus_HP,
                                Bonus_MP: rows_db[i].Bonus_MP,
                                Bonus_IP: rows_db[i].Bonus_IP,
                                Avatar_URL: rows_db[i].Avatar_URL,
                                Avatar_URL2: rows_db[i].Avatar_URL2,
                                Character_Name: rows_db[i].Character_Name,
                                Fitness: rows_db[i].Fitness,
                                Bonus_Ballistic_Resist: rows_db[i].Bonus_Ballistic_Resist,
                                Bonus_Fire_Resist: rows_db[i].Bonus_Fire_Resist,
                                Bonus_Cryo_Resist: rows_db[i].Bonus_Cryo_Resist,
                                Bonus_Posion_Resist: rows_db[i].Bonus_Posion_Resist,
                                Bonus_Toxic_Resist: rows_db[i].Bonus_Toxic_Resist,
                                Bonus_Energy_Resist: rows_db[i].Bonus_Energy_Resist,
                                Bonus_Electric_Resist: rows_db[i].Bonus_Electric_Resist,
                                Bonus_Special_Resist: rows_db[i].Bonus_Special_Resist,
                                Bonus_Ballistic_Threshold: rows_db[i].Bonus_Ballistic_Threshold,
                                Bonus_Fire_Threshold: rows_db[i].Bonus_Fire_Threshold,
                                Bonus_Cryo_Threshold: rows_db[i].Bonus_Cryo_Threshold,
                                Bonus_Posion_Threshold: rows_db[i].Bonus_Posion_Threshold,
                                Bonus_Toxic_Threshold: rows_db[i].Bonus_Toxic_Threshold,
                                Bonus_Energy_Threshold: rows_db[i].Bonus_Energy_Threshold,
                                Bonus_Electric_Threshold: rows_db[i].Bonus_Electric_Threshold,
                                Bonus_Special_Threshold: rows_db[i].Bonus_Special_Threshold,
                                Class_ID: rows_db[i].Class_ID,
                                Class_ID_Sub1: rows_db[i].Class_ID_Sub1,                                   
                                Class_ID_Sub2: rows_db[i].Class_ID_Sub2,                                   
                                Class_ID_Sub3: rows_db[i].Class_ID_Sub3,                                   
                                Class_ID_Sub4: rows_db[i].Class_ID_Sub4                                   
                            });//settings.User_Forms.set
                            if (i == (rows_db.length - 1)){
                                msg.channel.send("Player Forms Map Refreshed.");
                                console.log("Player Forms Map Refreshed.");
                            };//if (i == (rows_db.length - 1))
                        };//for
                    };//if (rows_db.length < 1)
                };//if (err_db)
            });//connection.query - SELECT * FROM settings.dbtable
////////////////////////////////////////////////////////////////////////////////////////////////
            connection.query("SELECT * FROM " + settings.dbbuffdebufftable + " ORDER BY target_id DESC", function(err_db,rows_db){
                if (err_db) {
                    console.log("Error on users.query - SELECT * FROM settings.dbbuffdebufftable: "+ err_db);
                } else {
                    if (rows_db.length < 1){
                        console.log("[NO DB ENTRIES FOUND] users.query - SELECT * FROM settings.dbbuffdebufftable");
                    } else {
                        for (var i = 0; i < rows_db.length; i++) {
                            settings.Buff_Debuff_List.set(i, {
                                casting_id: rows_db[i].casting_id,
                                target_id: rows_db[i].target_id,
                                HP: rows_db[i].HP,
                                MP: rows_db[i].MP,
                                IP: rows_db[i].IP,
                                Strength: rows_db[i].Strength,
                                Perception: rows_db[i].Perception,
                                Endurance: rows_db[i].Endurance,
                                Charisma: rows_db[i].Charisma,
                                Intelligence: rows_db[i].Intelligence,
                                Agility: rows_db[i].Agility,
                                Luck: rows_db[i].Luck,
                                BalisticResist: rows_db[i].BalisticResist,
                                FireResist: rows_db[i].FireResist,
                                CryoResist: rows_db[i].CryoResist,
                                ToxicResist: rows_db[i].ToxicResist,
                                ElecResist: rows_db[i].ElecResist,
                                EnergyResist: rows_db[i].EnergyResist,
                                PosionResist: rows_db[i].PosionResist,
                                SpecialResist: rows_db[i].SpecialResist,
                                BalisticDT: rows_db[i].BalisticDT,
                                FireDT: rows_db[i].FireDT,
                                CryoDT: rows_db[i].CryoDT,
                                ToxicDT: rows_db[i].ToxicDT,
                                ElecDT: rows_db[i].ElecDT,
                                EnergyDT: rows_db[i].EnergyDT,
                                PosionDT: rows_db[i].PosionDT,
                                SpecialDT: rows_db[i].SpecialDT,
                                SPECIAL_Points: rows_db[i].SPECIAL_Points,
                                CLASS_ID: rows_db[i].CLASS_ID,
                                Power_Mult: rows_db[i].Power_Mult,
                                level: rows_db[i].level,
                                Type: rows_db[i].Type,
                                PositiveOrNegative: rows_db[i].Positiv_Or_Negative
                            });//settings.Buff_Debuff_List.set
                            if (i == (rows_db.length - 1)){
                                msg.channel.send("Buff/Debuff Map Refreshed.");
                                console.log("Buff/Debuff Map Refreshed.");
                            };//if (i == (rows_db.length - 1))
                        };//for
                    };//if (rows_db.length < 1)
                };//if (err_db)
            });//connection.query - SELECT * FROM settings.dbtable
////////////////////////////////////////////////////////////////////////////////////////////////
            connection.query("SELECT * FROM " + settings.dbtable + " ORDER BY PLACEHOLDER_lvl DESC", function(err_db,rows_db){
                if (err_db) {
                        console.log("Error on users.query - SELECT * FROM settings.dbtable: "+ err_db);
                } else {
                    if (rows_db.length < 1){
                        console.log("[NO DB ENTRIES FOUND] users.query - SELECT * FROM settings.dbtable");
                    } else {
                        for (var i = 0; i < rows_db.length; i++) {
                            settings.UserList.set(rows_db[i].id, {
                                Gender: rows_db[i].Gender,
                                Height: rows_db[i].Height,
                                Weight: rows_db[i].Weight,
                                Fitness: rows_db[i].Fitness,

                                HP: rows_db[i].Current_HP,
                                MP: rows_db[i].Current_MP,
                                IP: rows_db[i].Current_IP,
                                Bonus_HP: rows_db[i].MAX_HP,
                                Bonus_MP: rows_db[i].MAX_MP,
                                Bonus_IP: rows_db[i].MAX_IP,

                                Strength: rows_db[i].Strength,
                                Perception: rows_db[i].Perception,
                                Endurance: rows_db[i].Endurance,
                                Charisma: rows_db[i].Charisma,
                                Intelligence: rows_db[i].Intelligence,
                                Agility: rows_db[i].Agily,
                                Luck: rows_db[i].Luck,

                                SPECIAL_Points: rows_db[i].SPECIAL_Points,
                                Power_Mult: rows_db[i].Power_Mult,
                                Power_Mult_Boost: rows_db[i].Power_Mult_Boost,
                                Level: rows_db[i].PLACEHOLDER_lvl,
                                Level_XP: rows_db[i].PLACEHOLDER_lvl_xp,
                                Total_XP: rows_db[i].PLACEHOLDER_total_xp,
                                XP: rows_db[i].PLACEHOLDER_xp,
                                XP_Percent: rows_db[i].PLACEHOLDER_xp_percent,
                                Player_Rank: rows_db[i].PLACEHOLDER_rank,
                                Player_Rank_Total: rows_db[i].PLACEHOLDER_rank_total, 

                                CLASS_ID: rows_db[i].CLASS_ID,
                                CLASS_ID_Boost: rows_db[i].CLASS_ID_Boost,
                                CLASS_ID_Sub: rows_db[i].CLASS_ID_Sub,
                                CLASS_ID_Sub2: rows_db[i].CLASS_ID_Sub2,
                                CLASS_ID_Sub3: rows_db[i].CLASS_ID_Sub3,
                                CLASS_ID_Sub4: rows_db[i].CLASS_ID_Sub4,

                                Banked_Criticals: rows_db[i].Banked_Criticals,
                                Critical_Meter_Percent: rows_db[i].Critical_Meter_Percent,

                                Condition_Head: rows_db[i].Condition_Head,
                                Condition_Left_Eye: rows_db[i].Condition_Left_Eye,
                                Condition_Right_Eye: rows_db[i].Condition_Right_Eye,
                                Condition_Left_Ear: rows_db[i].Condition_Left_Ear,
                                Condition_Right_Ear: rows_db[i].Condition_Right_Ear,
                                Condition_Torso: rows_db[i].Condition_Torso,
                                Condition_Groin: rows_db[i].Condition_Groin,
                                Condition_Left_Leg: rows_db[i].Condition_Left_Leg,
                                Condition_Right_Leg: rows_db[i].Condition_Right_Leg,
                                Condition_Left_Wing: rows_db[i].Condition_Left_Wing,
                                Condition_Right_Wing: rows_db[i].Condition_Right_Wing,
                                Condition_Tail: rows_db[i].Condition_Tail,

                                Has_Head: rows_db[i].Has_Head,
                                Has_Left_Eye: rows_db[i].Has_Left_Eye,
                                Has_Right_Eye: rows_db[i].Has_Right_Eye,
                                Has_Left_Ear: rows_db[i].Has_Left_Ear,
                                Has_Right_Ear: rows_db[i].Has_Right_Ear,
                                Has_Torso: rows_db[i].Has_Torso,
                                Has_Groin: rows_db[i].Has_Groin,
                                Has_Left_Leg: rows_db[i].Has_Left_Leg,
                                Has_Right_Leg: rows_db[i].Has_Right_Leg,
                                Has_Left_Wing: rows_db[i].Has_Left_Wing,
                                Has_Right_Wing: rows_db[i].Has_Right_Wing,
                                Has_Tail: rows_db[i].Has_Tail,

                                Thirst_Level: rows_db[i].Thirst_Level,
                                Hunger_Level: rows_db[i].Hunger_Level,
                                Tired_Level: rows_db[i].Tired_Level,
                                Is_Sick: rows_db[i].Is_Sick,

                                Toxic_Damage: rows_db[i].Toxic_Damage,
                                Fatigue_Damage: rows_db[i].Fatigue_Damage,
                                Brain_Damage: rows_db[i].Brain_Damage,

                                Toxic_DOT: rows_db[i].Toxic_DOT,
                                Cryo_DOT: rows_db[i].Cryo_DOT,
                                Fire_DOT: rows_db[i].Fire_DOT,
                                Elec_DOT: rows_db[i].Elec_DOT,
                                Posion_DOT: rows_db[i].Posion_DOT,

                                Toxic_Duration: rows_db[i].Toxic_Duration,
                                Cryo_Duration: rows_db[i].Cryo_Duration,
                                Fire_Duration: rows_db[i].Fire_Duration,
                                Elec_Duration: rows_db[i].Elec_Duration,
                                Posion_Duration: rows_db[i].Posion_Duration,

                                Paralyzed_Duration: rows_db[i].Paralyzed_Duration,
                                Stunned_Duration: rows_db[i].Stunned_Duration,
                                Restrained_Duration: rows_db[i].Restrained_Duration,

                                IsLevelCapped: rows_db[i].IsLevelCapped
                            });//settings.UserList.set
                            if (i == (rows_db.length - 1)){
                                msg.channel.send("User Map Refreshed.");
                                console.log("User Map Refreshed.");
                            };//if (i == (rows_db.length - 1))
                        }//for (var i = 0; i < rows_db.length; i++)
                    }//if (rows_db.length < 1)
                };//if/else (err_db)
            });//connection.query - SELECT * FROM settings.dbtable
////////////////////////////////////////////////////////////////////////////////////////////////
            connection.query("SELECT * FROM " + settings.dbweaponarmortable + " ORDER BY Type,Series_ID,Name DESC", function(err_db,rows_db){
                if (err_db) {
                    console.log("Error on itemsq.query - SELECT * FROM settings.dbweaponarmortable: "+ err_db);
                } else {
                    if (rows_db.length < 1){
                        console.log("[NO DB ENTRIES FOUND] itemsq.query - SELECT * FROM settings.dbweaponarmortable");
                    } else {
                        for (var i = 0; i < rows_db.length; i++) {
                            if ((rows_db[i].ID != undefined) || (rows_db[i].ID != null)){
                                settings.Weapons_Armor_List.set(rows_db[i].ID, {
                                    ID: rows_db[i].ID,
                                    Name: rows_db[i].Name,
                                    Type: rows_db[i].Type,
                                    DamageClass: rows_db[i].DamageClass,
                                    Series_ID: rows_db[i].Series_ID,
                                    Weight: rows_db[i].Weight,
                                    DMG_Floor: rows_db[i].DMG_Floor,
                                    DMG_High: rows_db[i].DMG_High,
                                    Upgrade_SkillID: rows_db[i].Upgrade_SkillID,
                                    Main_SkillID: rows_db[i].Main_SkillID,
                                    Secondary_SkillID: rows_db[i].Secondary_SkillID,
                                    Tritary_SkillID: rows_db[i].Tritary_SkillID,
                                    ImageURL: rows_db[i].ImageURL,
                                    ImageURL2: rows_db[i].ImageURL2,
                                    Strength: rows_db[i].Strength,
                                    Perception: rows_db[i].Perception,
                                    Endurance: rows_db[i].Endurance,
                                    Charisma: rows_db[i].Charisma,
                                    Intelligence: rows_db[i].Intelligence,
                                    Agility: rows_db[i].Agility,
                                    Luck: rows_db[i].Luck,
                                    Bonus_Ballistic_Resist: rows_db[i].Bonus_Ballistic_Resist,
                                    Bonus_Fire_Resist: rows_db[i].Bonus_Fire_Resist,
                                    Bonus_Cryo_Resist: rows_db[i].Bonus_Cryo_Resist,
                                    Bonus_Posion_Resist: rows_db[i].Bonus_Posion_Resist,
                                    Bonus_Toxic_Resist: rows_db[i].Bonus_Toxic_Resist,
                                    Bonus_Energy_Resist: rows_db[i].Bonus_Energy_Resist,
                                    Bonus_Electric_Resist: rows_db[i].Bonus_Electric_Resist,
                                    Bonus_Special_Resist: rows_db[i].Bonus_Special_Resist,
                                    Bonus_Ballistic_Threshold: rows_db[i].Bonus_Ballistic_Threshold,
                                    Bonus_Fire_Threshold: rows_db[i].Bonus_Fire_Threshold,
                                    Bonus_Cryo_Threshold: rows_db[i].Bonus_Cryo_Threshold,
                                    Bonus_Posion_Threshold: rows_db[i].Bonus_Posion_Threshold,
                                    Bonus_Toxic_Threshold: rows_db[i].Bonus_Toxic_Threshold,
                                    Bonus_Energy_Threshold: rows_db[i].Bonus_Energy_Threshold,
                                    Bonus_Electric_Threshold: rows_db[i].Bonus_Electric_Threshold,
                                    Bonus_Special_Threshold: rows_db[i].Bonus_Special_Threshold,
                                    Bonus_HP: rows_db[i].Bonus_HP,
                                    Bonus_MP: rows_db[i].Bonus_MP,
                                    Bonus_IP: rows_db[i].Bonus_IP
                                });//settings.Weapons_Armor_List
                                if (i == (rows_db.length - 1)){
                                    msg.channel.send("Weapon/Armor/Item Map Refreshed.");
                                    console.log("Weapon/Armor/Item Map Refreshed.");
                                };//if (i == (rows_db.length - 1))
                            };//if ((rows_dbs[i].ID ! = undifined) || (rows_dbs[i].ID ! = null))
                        }//for (var i = 0; i < rows_dbs.length; i++)
                    }//if (rows_dbs.length > 0)
                };//if/else (err_dbs)
            });//connection.query(SQLString
////////////////////////////////////////////////////////////////////////////////////////////////
        connection.query("SELECT * FROM " + settings.playerinventory + " ORDER BY PLAYER_ID,ID DESC", function(err_db,rows_db){
            if (err_db) {
                console.log("Error on users.query - SELECT * FROM settings.playerinventory: "+ err_db);
            } else {
                if (rows_db.length < 1){
                    console.log("[NO DB ENTRIES FOUND] users.query - SELECT * FROM settings.playerinventory");
                } else {
                    for (var i = 0; i < rows_db.length; i++) {
                        settings.User_Inventory.set(i, {
                            TABLE_ID: rows_db[i].TABLE_ID,
                            ID: rows_db[i].ID,
                            Player_ID: rows_db[i].Player_ID,
                            RANKS: rows_db[i].RANKS  
                        });//settings.User_Inventory.set
                        if (i == (rows_db.length - 1)){
                            msg.channel.send("Player Inventory Map Refreshed.");
                            console.log("Player Inventory Map Refreshed.");
                        };//if (i == (rows_db.length - 1))
                    };//for
                };//if (rows_db.length < 1)
            };//if (err_db)
        });//connection.query - SELECT * FROM settings.dbtable
////////////////////////////////////////////////////////////////////////////////////////////////
        connection.query("SELECT * FROM " + settings.dbnpctable + " ORDER BY Series_ID,name ASC", function(err_db,rows_db){
            if (err_db) {
                console.log("Error on users.query - SELECT * FROM settings.dbnpctable: "+ err_db);
            } else {
                if (rows_db.length < 1){
                    console.log("[NO DB ENTRIES FOUND] users.query - SELECT * FROM settings.dbnpctable");
                } else {
                    for (var i = 0; i < rows_db.length; i++) {
                        settings.NPC_List.set(rows_db[i].id, {
                            Self_ID: rows_db[i].id,
                            Owner_ID: rows_db[i].owner_id,
                            Series_ID: rows_db[i].Series_ID,
                            Avatar_URL: rows_db[i].Avatar_URL,
                            Name: rows_db[i].name,
                            Bio: rows_db[i].bio,
                            Parent_ID: rows_db[i].Parent_ID,
                            Gender: rows_db[i].Gender,
                            Height: rows_db[i].Height,
                            Weight: rows_db[i].Weight,
                            Race: rows_db[i].Race,
                            Power: rows_db[i].Power,
                            Strength: rows_db[i].Strength,
                            Perception: rows_db[i].Perception,
                            Endurance: rows_db[i].Endurance,
                            Charisma: rows_db[i].Charisma,
                            Intelligence: rows_db[i].Intelligence,
                            Agility: rows_db[i].Agility,
                            Luck: rows_db[i].Luck,
                            Fitness: rows_db[i].Fitness,
                            Bonus_Ballistic_Resist: rows_db[i].Bonus_Ballistic_Resist,
                            Bonus_Fire_Resist: rows_db[i].Bonus_Fire_Resist,
                            Bonus_Cryo_Resist: rows_db[i].Bonus_Cryo_Resist,
                            Bonus_Posion_Resist: rows_db[i].Bonus_Posion_Resist,
                            Bonus_Toxic_Resist: rows_db[i].Bonus_Toxic_Resist,
                            Bonus_Energy_Resist: rows_db[i].Bonus_Energy_Resist,
                            Bonus_Electric_Resist: rows_db[i].Bonus_Electric_Resist,
                            Bonus_Special_Resist: rows_db[i].Bonus_Special_Resist,
                            Bonus_Ballistic_Threshold: rows_db[i].Bonus_Ballistic_Threshold,
                            Bonus_Fire_Threshold: rows_db[i].Bonus_Fire_Threshold,
                            Bonus_Cryo_Threshold: rows_db[i].Bonus_Cryo_Threshold,
                            Bonus_Posion_Threshold: rows_db[i].Bonus_Posion_Threshold,
                            Bonus_Toxic_Threshold: rows_db[i].Bonus_Toxic_Threshold,
                            Bonus_Energy_Threshold: rows_db[i].Bonus_Energy_Threshold,
                            Bonus_Electric_Threshold: rows_db[i].Bonus_Electric_Threshold,
                            Bonus_Special_Threshold: rows_db[i].Bonus_Special_Threshold,
                            Bonus_Level: rows_db[i].Bonus_Level,
                            Current_HP: rows_db[i].Current_HP,
                            Current_MP: rows_db[i].Current_MP,
                            Current_IP: rows_db[i].Current_IP,
                            Bonus_HP: rows_db[i].Bonus_HP,
                            Bonus_MP: rows_db[i].Bonus_MP,
                            Bonus_IP: rows_db[i].Bonus_IP
                        });//settings.NPC_List.set
                        if (i == (rows_db.length - 1)){
                            msg.channel.send("NPC Map Refreshed.");
                            console.log("NPC Map Refreshed.");
                        };////if (i == (rows_db.length - 1))
                    };//for
                };//if (rows_db.length < 1)
            };//if (err_db)
        });//connection.query - SELECT * FROM settings.dbtable
////////////////////////////////////////////////////////////////////////////////////////////////
        connection.release(); 
    });//mysqlPool.getConnection
////////////////////////////////////////////////////////////////////////////////////////////////
    }else{
    ///////////////output display block///////////////
        const RiderEmbed = new discord.RichEmbed()
              RiderEmbed.setColor(randomHex.generate())
        if (mentionedid == uid){
              RiderEmbed.setAuthor('Summon Neo', settings.botpic)
              RiderEmbed.setImage(settings.neopic)
        } else {
              RiderEmbed.setAuthor('Summon '+mentionedname, settings.botpic)
              RiderEmbed.setImage(mentionedavatar)
        };//if (mentionedid == uid)
        msg.channel.send({embed: RiderEmbed});
    ///////////////output display block///////////////
    };//force map update 
};//run

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: [
            "summon",
            "update"
           ],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "neo",
  description: "",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};