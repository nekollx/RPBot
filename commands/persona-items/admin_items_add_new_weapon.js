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
    var uid               = msg.author.id;
    var uidname           = msg.author.username;
    var arrayname         = msg.content.split(' ');
    var Name              = arrayname[1].toLowerCase();
    var Type              = 0;//weapon

    var FullName = '';
    var SplitName = Name.split('_');
    for (var s = 0; s < SplitName.length; s++){
        FullName += SplitName[s].charAt(0).toUpperCase() + SplitName[s].slice(1).toLowerCase();
        if (s !=  (SplitName.length-1)){FullName += " ";}
    }//for

    var slapdesc  = uidname + ' just added '+ FullName;

    mysqlPool.getConnection(function(err_u, connection) {
        if(err_u) {console.log("Error on - mysqlPool.getConnection for add items: "+ err_u)} else {;
            var insetstring  = "INSERT INTO " + settings.dbweaponarmortable + " "; 
                insetstring += "(Name, Type)"; 
                insetstring += "VALUES ('";
                insetstring += Name + "', " + Type + ")"; 
            connection.query(insetstring, {title: 'Insert'}, function(err, result) {
                if (err) console.log(err);
                if (result != undefined){
                    //console.log('Item Insert ID: '+result.insertId);
                    settings.Weapons_Armor_List.set(result.insertId, {
                        ID: result.insertId,
                        Name: Name,
                        Type: Type,
                        Weight: 0.25,
                        DMG_Floor: 0,
                        DMG_High: 0,
                        Upgrade_SkillID: 0,
                        Main_SkillID: 0,
                        Secondary_SkillID: 0,
                        Tritary_SkillID: 0,
                        DamageClass: 0,
                        Strength: 0,
                        Perception: 0,
                        Endurance: 0,
                        Charisma: 0,
                        Intelligence: 0,
                        Agility: 0,
                        Luck: 0,
                        Bonus_Ballistic_Resist: 0,
                        Bonus_Fire_Resist: 0,
                        Bonus_Cryo_Resist: 0,
                        Bonus_Posion_Resist: 0,
                        Bonus_Toxic_Resist: 0,
                        Bonus_Energy_Resist: 0,
                        Bonus_Electric_Resist: 0,
                        Bonus_Special_Resist: 0,
                        Bonus_Ballistic_Threshold: 0,
                        Bonus_Fire_Threshold: 0,
                        Bonus_Cryo_Threshold: 0,
                        Bonus_Posion_Threshold: 0,
                        Bonus_Toxic_Threshold: 0,
                        Bonus_Energy_Threshold: 0,
                        Bonus_Electric_Threshold: 0,
                        Bonus_Special_Threshold: 0,
                        Bonus_HP: 0,
                        Bonus_MP: 0,
                        Bonus_IP: 0
                    });//settings.Weapons_Armor_List
                    slapdesc  = uidname + ' just added '+ FullName;
                    const RiderEmbed = new discord.RichEmbed()
                        RiderEmbed.setColor(randomHex.generate())
                        RiderEmbed.setDescription(slapdesc)
                    msg.channel.send({embed: RiderEmbed});
                } else {
                    slapdesc  = 'Sorry '+uidname+' I can not add '+ FullName  + ' as it already exists.';
                    const RiderEmbed = new discord.RichEmbed()
                        RiderEmbed.setColor(randomHex.generate())
                        RiderEmbed.setDescription(slapdesc)
                    msg.channel.send({embed: RiderEmbed});
                };//if (result.insertId != undefined)
            });//connection.query(insetstring
            connection.release(); // if error occured closed the connection
        };//if(err_u)
    });//get connection
};//run

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: [
            "create-weapon", "createweapon", 
            "create-weapons", "createweapons"
           ],
  permLevel: 2,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "newweapon",
  description: "",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};
