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
    var uid       = msg.author.id;
    var uidname   = msg.author.username;

    var mentionedid     = uid;
    var mentionedname   = uidname;

    if (msg.mentions.users.first()){
        mentionedid = msg.mentions.users.first().id;
        mentionedname = msg.mentions.users.first().username;
    };//if

    var arrayname = msg.content.split(' ');
    var SeriesID    = parseInt(arrayname[1]);
    var ClassID    = parseInt(arrayname[2]);

    if (isNaN(ClassID) || (ClassID == null) || (ClassID == undefined)){ClassID = 0;}
    if (isNaN(SeriesID) || (SeriesID == null) || (SeriesID == undefined)){SeriesID = 0;}

    var slapdesc  = 'Sorry '+ mentionedname + ' I could not set '+ settings.PlayerClassName(ClassID) + ' as your default for '+settings.SeriesName(SeriesID)+' Roleplays.';

    mysqlPool.getConnection(function(err_u, connection) {
        if(err_u) {console.log("Error on - mysqlPool.getConnection for add weapons/armor/items: "+ err_u)};

        var SQLString  = "SELECT * FROM " + settings.playerforms + " ";
            SQLString += "WHERE User_ID = '" + mentionedid + "' AND ";
            SQLString += "Series_ID = " + SeriesID;
        connection.query(SQLString, {title: 'Update'}, function(errU, resultU) {
            if (errU) console.log(errU);
                if (resultU.length > 0){
                    var UpdateString  = "UPDATE " + settings.playerforms+" ";
                        UpdateString += "SET ";
                        UpdateString += "Class_ID = " + ClassID +", ";
                        UpdateString += "Class_Name = '" + settings.PlayerClassName(ClassID) +"' ";
                        UpdateString += "WHERE TABLE_ID = " + parseInt(resultU[0].Table_ID);
                    console.log(UpdateString);
                    connection.query(UpdateString);
                    if ((settings.User_Forms.get(resultU[0].Table_ID).User_ID == mentionedid) && 
                        (settings.User_Forms.get(resultU[0].Table_ID).Series_ID == SeriesID))
                        {settings.User_Forms.get(resultU[0].Table_ID).Class_ID = ClassID;}
                    slapdesc  = mentionedname + ' just set '+ settings.PlayerClassName(ClassID) + ' as their default for '+settings.SeriesName(SeriesID)+' Roleplays.';
                    const RiderEmbed = new discord.RichEmbed()
                          RiderEmbed.setColor(randomHex.generate())
                          RiderEmbed.setDescription(slapdesc)
                    msg.channel.send({embed: RiderEmbed});
                } else {
                    var insetstring  = "INSERT INTO " + settings.playerforms + " "; 
                        insetstring += "(User_Name, User_ID, Series_Name, Series_ID, Class_Name, Class_ID)"; 
                        insetstring += " VALUES (";
                        insetstring += "'"+mentionedname + "', '" + mentionedid+"', ";
                        insetstring += "'"+settings.SeriesName(SeriesID) + "', " + SeriesID+", ";
                        insetstring += "'"+settings.PlayerClassName(ClassID) + "', " + ClassID;
                        insetstring += ")"; 
                        console.log(insetstring);
                    connection.query(insetstring, {title: 'Insert'}, function(err, result) {
                        if (err) console.log(err);
                        if (result != undefined){
                            console.log('Insert ID: '+result.insertId);
                            settings.User_Forms.set(result.insertId, {
                                Table_ID: result.insertId,
                                User_ID: mentionedid,
                                Series_ID: SeriesID,
                                Class_ID: ClassID,  
                                Bio: '',
                                Parent_ID: 0,
                                Gender: 1,
                                Height: 177,
                                Weight: 142,
                                Race: 0,
                                Power: 10,
                                Strength: 1,
                                Perception: 1,
                                Endurance: 1,
                                Charisma: 1,
                                Intelligence: 1,
                                Agility: 1,
                                Luck: 1,
                                Bonus_Level: 0,
                                Current_HP: 0,
                                Current_MP: 0,
                                Current_IP: 0,
                                Bonus_HP: 0,
                                Bonus_MP: 0,
                                Bonus_IP: 0,
                                Avatar_URL: settings.blankpic,
                                Avatar_URL2: settings.blankpic,
                                Character_Name: "",
                                Class_ID_Sub1: 0,  
                                Class_ID_Sub2: 0, 
                                Class_ID_Sub3: 0,  
                                Class_ID_Sub4: 0  
                            });//settings.User_Forms.set
                            slapdesc  = mentionedname + ' just set '+ settings.PlayerClassName(ClassID) + ' as their default for '+settings.SeriesName(SeriesID)+' Roleplays.';
                            const RiderEmbed = new discord.RichEmbed()
                                  RiderEmbed.setColor(randomHex.generate())
                                  RiderEmbed.setDescription(slapdesc)
                            msg.channel.send({embed: RiderEmbed});
                        } else {
                            slapdesc  = 'Sorry '+mentionedname + ' I can not add '+ settings.PlayerClassName(ClassID) + ' as your default for '+settings.SeriesName(SeriesID)+' Roleplays.';
                            const RiderEmbed = new discord.RichEmbed()
                                RiderEmbed.setColor(randomHex.generate())
                                RiderEmbed.setDescription(slapdesc)
                            msg.channel.send({embed: RiderEmbed});
                        };//if (result.insertId != undefined)
                    });//connection.query(insetstring
                };//if (resultU > 0)
        });//connection.query(SQLString
        connection.release(); // if error occured closed the connection
    });//get connection
};//run

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: ["add-forma"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "addforma",
  description: "",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};
