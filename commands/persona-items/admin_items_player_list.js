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
    var uid     = msg.author.id;
    var uidname = msg.author.username;
    var mentionedid   = uid;
    var mentionedname = uidname;
    var uidavatar = msg.author.avatarURL;
    var mentionedavatar = uidavatar;
    var slapdesc = 'No Items in Database';

    if (msg.mentions.users.first()){
        mentionedid   = msg.mentions.users.first().id;
        mentionedname = msg.mentions.users.first().username;
        mentionedavatar = msg.mentions.users.first().avatarURL;
    }//if

    if (uidavatar != null){
        settings.avypic = uidavatar;
    }else {
        settings.avypic = settings.blankpic;
    };//if (uidavatar != null)

    if (mentionedavatar == null){
        mentionedavatar = settings.blankpic;
    };//if (mentionedavatar == null)

    var strtotal = settings.UserList.get(mentionedid).Strength;
    var bonuscarry = 0;
    var UserWeight = 0;
    slapdesc = '';

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
                    UserWeight += (ItemWeight*InventoryRanks);
                    slapdesc += '[ID: ' + InventoryItemID + '] **' + ItemName + '**';
                    if (InventoryRanks > 1){slapdesc += " x"+InventoryRanks}
                    slapdesc += '\n';
            };//if (settings.User_Inventory.get(i).Player_ID = mentionedid)
        };//for

        var powertotal = settings.UserList.get(mentionedid).Power_Mult;
        if (
            (settings.UserList.get(mentionedid).IsLevelCapped == 0) && 
            (settings.UserList.get(mentionedid).Power_Mult_Boost >= settings.UserList.get(mentionedid).Power_Mult)){
            powertotal += settings.UserList.get(mentionedid).Power_Mult;
        } else {
            powertotal += settings.UserList.get(mentionedid).Power_Mult_Boost;
        };//if
        if (powertotal < 1){powertotal = 1};
        strtotal = strtotal*powertotal;
        var carryCapacity = settings.CarryCalculator(strtotal, bonuscarry);
        var EncumberPercent = (UserWeight/carryCapacity)*100; 
            slapdesc += '[' + UserWeight.toLocaleString() + '/' + carryCapacity.toLocaleString() + ' Carry Weight {'+EncumberPercent.toLocaleString()+'%}]';
        const RiderEmbed = new discord.RichEmbed()
              RiderEmbed.setColor(randomHex.generate())
              RiderEmbed.setThumbnail(mentionedavatar)
              RiderEmbed.setDescription(slapdesc)
        msg.channel.send({embed: RiderEmbed});
};//exports run

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: ["list-inventory", "inventory", "inv"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "listinventory",
  description: "",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};

