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
    var mentionedid   = uid;
    var mentionedname = uidname;
    var ranklimit     = settings.SPECIALLimit; 
    var rankfloor     = settings.SPECIALFloor; 
    var rankstoadd    = parseInt(msg.content.split(" ").pop());
    var BonusField = 'Power_Mult';
    var totalranks = rankstoadd;

    if (msg.content.toLowerCase().startsWith("!hp")){
        BonusField = 'HP';
    } else if (msg.content.toLowerCase().startsWith("!mp") || msg.content.toLowerCase().startsWith("!ap")){
        BonusField = 'MP';
    } else if (msg.content.toLowerCase().startsWith("!ip")){
        BonusField = 'IP';
    } else if (msg.content.toLowerCase().startsWith("!strength")){
        BonusField = 'Strength';
    } else if (msg.content.toLowerCase().startsWith("!perception")){
        BonusField = 'Perception';
    } else if (msg.content.toLowerCase().startsWith("!endurance")){
        BonusField = 'Endurance';
    } else if (msg.content.toLowerCase().startsWith("!charisma")){
        BonusField = 'Charisma';
    } else if (msg.content.toLowerCase().startsWith("!intelligence")){
        BonusField = 'Intelligence';
    } else if (msg.content.toLowerCase().startsWith("!agility")){
        BonusField = 'Agility';
    } else if (msg.content.toLowerCase().startsWith("!luck")){
        BonusField = 'Luck';
    } else if (msg.content.toLowerCase().startsWith("!bresist")){
        BonusField = 'BalisticResist';
    } else if (msg.content.toLowerCase().startsWith("!fresist")){
        BonusField = 'FireResist';
    } else if (msg.content.toLowerCase().startsWith("!cresist")){
        BonusField = 'CryoResist';
    } else if (msg.content.toLowerCase().startsWith("!tresist")){
        BonusField = 'ToxicResist';
    } else if (msg.content.toLowerCase().startsWith("!eresist")){
        BonusField = 'ElecResist';
    } else if (msg.content.toLowerCase().startsWith("!enresist")){
        BonusField = 'EnergyResist';
    } else if (msg.content.toLowerCase().startsWith("!presist")){
        BonusField = 'PosionResist';
    } else if (msg.content.toLowerCase().startsWith("!sresist")){
        BonusField = 'SpecialResist';
    } else if (msg.content.toLowerCase().startsWith("!bdt")){
        BonusField = 'BalisticDT';
    } else if (msg.content.toLowerCase().startsWith("!fdt")){
        BonusField = 'FireDT';
    } else if (msg.content.toLowerCase().startsWith("!cdt")){
        BonusField = 'CryoDT';
    } else if (msg.content.toLowerCase().startsWith("!tdt")){
        BonusField = 'ToxicDT';
    } else if (msg.content.toLowerCase().startsWith("!edt")){
        BonusField = 'ElecDT';
    } else if (msg.content.toLowerCase().startsWith("!endt")){
        BonusField = 'EnergyDT';
    } else if (msg.content.toLowerCase().startsWith("!pdt")){
        BonusField = 'PosionDT';
    } else if (msg.content.toLowerCase().startsWith("!sdt")){
        BonusField = 'SpecialDT';
    } else if (msg.content.toLowerCase().startsWith("!special")){
        BonusField = 'SPECIAL_Points';
    } else if (msg.content.toLowerCase().startsWith("!class")){
        BonusField = 'CLASS_ID';
    } else if (msg.content.toLowerCase().startsWith("!level")){
        BonusField = 'level';
    };//if (msg.startsWith


    if (msg.mentions.users.first()){
        mentionedid   = msg.mentions.users.first().id;
        mentionedname = msg.mentions.users.first().username;
    }//if

    if (isNaN(rankstoadd)){rankstoadd = 1;};

    var images = [
                  'http://www.maskedriders.info/Mee6RP/statusPic/tumblr_mh0229wGT61rhnoyto1_500.gif',
                  'http://www.maskedriders.info/Mee6RP/statusPic/b2da9a54c1ededb4afd9e7f3fc7821ad.gif',
                  'http://www.maskedriders.info/Mee6RP/statusPic/024848206647c337dea8f666ab1a1550.gif',
                  'http://www.maskedriders.info/Mee6RP/statusPic/13949913.gif',
                  'http://www.maskedriders.info/Mee6RP/statusPic/a92e47c9f88dc81922da36a918800199.jpg',
                  'http://www.maskedriders.info/Mee6RP/statusPic/Water_Breathing.gif'
                 ];//array of images to use
    var slapID = settings.getRandomInt(1, images.length);
    var slapSTRING = images[(slapID-1)];

    const RiderEmbed = new discord.RichEmbed();
          RiderEmbed.setColor(randomHex.generate());

    mysqlPool.getConnection(function(err, connection) {
        if(err) console.log(err);
        var SQLString  = "SELECT * FROM " + settings.dbbuffdebufftable + " ";
            SQLString += "WHERE target_id = '" + mentionedid + "' AND ";
            SQLString += "casting_id = '" + uid + "'";
        connection.query(SQLString, {title: 'Select'}, function(errU, resultU) {
            if (errU) { console.log(errU) } else {
                if (resultU.length > 0){
                    console.log("["+resultU.length+"] Buff/Debuff from "+uidname+" FOR "+mentionedname+" already exists");
                    for (d = 0; d < resultU.length; d++){
                        totalranks += resultU[d][BonusField];
                    };//for (d = 0; d < resultU.length; d++)
                    if (totalranks > settings.ABSOLUTECAP){totalranks = settings.ABSOLUTECAP;};
                    if (totalranks < settings.ABSOLUTEFLOOR){totalranks = settings.ABSOLUTEFLOOR;};
                    var slapdesc = uidname + ' just powered up '+ mentionedname + '\'s with a base '+BonusField+' modifer of ' + totalranks.toLocaleString() + '!';
                    RiderEmbed.setDescription(slapdesc);
                    RiderEmbed.setImage(slapSTRING);
                    msg.channel.send({embed: RiderEmbed});
                    for (d = 0; d < resultU.length; d++){
                        var tableid = resultU[d].TABLE_ID;
                        var UPDATESQL  = "UPDATE " + settings.dbbuffdebufftable + " ";
                            UPDATESQL += "SET "+BonusField+" = " + totalranks + ", ";
                            UPDATESQL += "Casting_Name = '" + uidname + "', ";
                            UPDATESQL += "Target_Name = '" + mentionedname + "' ";
                            UPDATESQL += "WHERE TABLE_ID = " + tableid;
                        if (totalranks >= ranklimit){
                            totalranks -= ranklimit;
                            UPDATESQL  = "UPDATE " + settings.dbbuffdebufftable + " ";
                            UPDATESQL += "SET "+BonusField+" = " + ranklimit + ", ";
                            UPDATESQL += "Casting_Name = '" + uidname + "', ";
                            UPDATESQL += "Target_Name = '" + mentionedname + "' ";
                            UPDATESQL += "WHERE TABLE_ID = " + tableid;
                            connection.query(UPDATESQL, {title: 'Update'}, function(errI, resultI) {if (errI) console.log(errI);});
                        } else if (totalranks <= rankfloor) {
                            totalranks += rankfloor;
                            UPDATESQL  = "UPDATE " + settings.dbbuffdebufftable + " ";
                            UPDATESQL += "SET "+BonusField+" = " + rankfloor + ", ";
                            UPDATESQL += "Casting_Name = '" + uidname + "', ";
                            UPDATESQL += "Target_Name = '" + mentionedname + "' ";
                            UPDATESQL += "WHERE TABLE_ID = " + tableid;
                            connection.query(UPDATESQL, {title: 'Update'}, function(errI, resultI) {if (errI) console.log(errI);});                        
                        } else {
                            connection.query(UPDATESQL, {title: 'Update'}, function(errI, resultI) {if (errI) console.log(errI);});
                            totalranks -= totalranks;
                        };//if ((resultU[d].TABLE_ID + rankstoadd) > ranklimit)
                        var prune  = 0;
                            prune += resultU[d].HP;
                            prune += resultU[d].MP;
                            prune += resultU[d].IP;
                            prune += resultU[d].Strength;
                            prune += resultU[d].Perception;
                            prune += resultU[d].Endurance;
                            prune += resultU[d].Charisma;
                            prune += resultU[d].Intelligence;
                            prune += resultU[d].Agility;
                            prune += resultU[d].Luck;
                            prune += resultU[d].BalisticResist;
                            prune += resultU[d].FireResist;
                            prune += resultU[d].CryoResist;
                            prune += resultU[d].ToxicResist;
                            prune += resultU[d].ElecResist;
                            prune += resultU[d].EnergyResist;
                            prune += resultU[d].PosionResist;
                            prune += resultU[d].SpecialResist;
                            prune += resultU[d].BalisticDT;
                            prune += resultU[d].FireDT;
                            prune += resultU[d].CryoDT;
                            prune += resultU[d].ToxicDT;
                            prune += resultU[d].ElecDT;
                            prune += resultU[d].EnergyDT;
                            prune += resultU[d].PosionDT;
                            prune += resultU[d].SpecialDT;
                            prune += resultU[d].SPECIAL_Points;
                            prune += resultU[d].CLASS_ID;
                            prune += resultU[d].Power_Mult;
                            prune += resultU[d].level;
                        if (prune == 0){
                            var DELETESQL  = "DELETE FROM " + settings.dbbuffdebufftable+" ";
                                DELETESQL += "WHERE TABLE_ID = " + resultU[d].TABLE_ID;
                            connection.query(DELETESQL, {title: 'Prune'}, function(errI, resultI) {if (errI) console.log(errI);});
                            settings.Buff_Debuff_List.delete(rows_db[i].TABLE_ID);
                        };//if (prune == 0)
                        if (d == (resultU.length - 1)){
                            for (q = 0; totalranks > ranklimit; q++){
                                var UPDATESQL  = "INSERT INTO " + settings.dbbuffdebufftable + " ";
                                    UPDATESQL += "("+BonusField+", target_id, casting_id, Casting_Name, Target_Name)";
                                    UPDATESQL += "VALUES ("+ranklimit+", '"+mentionedid+"', '"+uid+"', '"+uidname+"', '"+mentionedname+"')";
                                connection.query(UPDATESQL, {title: 'Insert'}, function(errI, resultI) {if (errI) console.log(errI);});
                                totalranks -= ranklimit;
                            };//for (q = 0; totalranks > ranklimit; q++)
                            if (totalranks > 0){
                                var UPDATESQL  = "INSERT INTO " + settings.dbbuffdebufftable + " ";
                                    UPDATESQL += "("+BonusField+", target_id, casting_id, Casting_Name, Target_Name)";
                                    UPDATESQL += "VALUES ("+totalranks+", '"+mentionedid+"', '"+uid+"', '"+uidname+"', '"+mentionedname+"')";
                                connection.query(UPDATESQL, {title: 'Insert'}, function(errI, resultI) {if (errI) console.log(errI);});                        
                            };//if (totalranks > 0)
                    };//if (d == (resultU.length - 1))
                    };//for (d = 0; d < resultU.length; d++)
                } else {
                    if (totalranks > ranklimit){totalranks = ranklimit;};
                    if (totalranks < rankfloor){totalranks = rankfloor;};
                    console.log("No Buff/Debuff from "+uidname+" FOR "+mentionedname+" already exists");
                    var UPDATESQL  = "INSERT INTO " + settings.dbbuffdebufftable + " ";
                        UPDATESQL += "("+BonusField+", target_id, casting_id, Casting_Name, Target_Name)";
                        UPDATESQL += "VALUES ("+totalranks+", '"+mentionedid+"', '"+uid+"', '"+uidname+"', '"+mentionedname+"')";
                    connection.query(UPDATESQL, {title: 'Insert'}, function(errI, resultI) {if (errI) console.log(errI);});
                    var slapdesc = uidname + ' just powered up '+ mentionedname + '\'s with a base '+BonusField+' modifer of ' + totalranks.toLocaleString() + '!';
                    RiderEmbed.setDescription(slapdesc);
                    RiderEmbed.setImage(slapSTRING);
                    msg.channel.send({embed: RiderEmbed});
                };//if (resultU.length > 0)
            };//if (errU)
            connection.release(); // if error occured closed the connection
        });//connection.query(SQLString
    });//mysqlPool.getConnection
};//run

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: [
            "hp",
            "mp", "ap",
            "ip",
            "strength",
            "perception",
            "endurance",
            "charisma",
            "intelligence",
            "agility",
            "luck",
            "bresist",
            "fresist",
            "cresist",
            "tresist",
            "eresist",
            "enresist",
            "presist",
            "sresist",
            "bdt",
            "fdt",
            "cdt",
            "tdt",
            "edt",
            "endt",
            "pdt",
            "sdt",
            "special",
            "class",
            "level"
           ],
  permLevel: 3,
  botPerms: [3],
  requiredFuncs: []
};

exports.help = {
  name: "power",
  description: "",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};