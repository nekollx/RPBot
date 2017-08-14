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
	var playeruid = msg.author.id;
  var ClassID = 0;
  var PowerM = 1;
  var ClassIDsub = 0;
  const RiderEmbed = new discord.RichEmbed()
			  RiderEmbed.setColor('#C0C0C0')
			  RiderEmbed.setTimestamp()
			  RiderEmbed.setURL('http://www.maskedriders.info/Mee6RP/index.php')

  if (msg.content.startsWith("!bugster-d")){
    //RiderEmbed.setThumbnail('http://www.maskedriders.info/Mee6RP/statusPic/Icon-ghost.png')
    RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/Gashacon_Bugvisor_Pad.png')
		RiderEmbed.setFooter('Data Card ~ Bugster', settings.serverpic)
    ClassID = 9400;
  } else if (msg.content.startsWith("!bugster2-d")){
    //RiderEmbed.setThumbnail('http://www.maskedriders.info/Mee6RP/statusPic/Icon-ghost.png')
    RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/36b1d6ff-37b7-4e2f-8e9f-23a4a55fee42.jpg')
		RiderEmbed.setFooter('Data Card ~ Bugster II', settings.serverpic)
    ClassID = 9600;
  } else if (msg.content.startsWith("!perfect-d")){
    //RiderEmbed.setThumbnail('http://www.maskedriders.info/Mee6RP/statusPic/Icon-ghost.png')
    RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/perfect_knock_out.jpg')
		RiderEmbed.setFooter('Data Card ~ Perfect Puzzle', settings.serverpic)
    ClassID = 9005;
    PowerM = 500;
    ClassIDsub = 9105;
  } else if (msg.content.startsWith("!knockout-d")){
    //RiderEmbed.setThumbnail('http://www.maskedriders.info/Mee6RP/statusPic/Icon-ghost.png')
    RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/perfect_knock_out.jpg')
		RiderEmbed.setFooter('Data Card ~ Knockout Fighter', settings.serverpic)
    ClassID = 9005;
    PowerM = 500;
    ClassIDsub = 9115;
  } else if (msg.content.startsWith("!cronicle-d")){
    //RiderEmbed.setThumbnail('http://www.maskedriders.info/Mee6RP/statusPic/Icon-ghost.png')
    RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/KREA-Kamen_Rider_Chronicle_Gashat.png')
		RiderEmbed.setFooter('Data Card ~ Cronicle', settings.serverpic)
    ClassID = 9500;
    PowerM = 10;
    ClassIDsub = 9501;
  } else if (msg.content.startsWith("!player-d")){
    //RiderEmbed.setThumbnail('http://www.maskedriders.info/Mee6RP/statusPic/Icon-ghost.png')
    RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/555-ar-smartbulke.jpg')
		RiderEmbed.setFooter('Data Card ~ Player', settings.serverpic)
    ClassID = 9900;
    if (playeruid == 237905336143577088)/*LLX*/{ClassID = 9800;}
	} else {
    //RiderEmbed.setThumbnail('http://www.maskedriders.info/Mee6RP/statusPic/Icon-ghost.png')
    RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/gamerdriver.jpg')
		RiderEmbed.setFooter('Data Card ~ Gamer', settings.serverpic)
    ClassID = 9300;
  }//if else
    
    settings.UserList.get(playeruid).CLASS_ID = ClassID;
    settings.UserList.get(playeruid).CLASS_ID_Sub = ClassIDsub;
    settings.UserList.get(playeruid).CLASS_ID_Sub2 = 0;
    settings.UserList.get(playeruid).CLASS_ID_Sub3 = 0;
    settings.UserList.get(playeruid).CLASS_ID_Sub4 = 0;
    settings.UserList.get(playeruid).Power_Mult = PowerM;
    var SQL_String = "UPDATE " + settings.dbtable + " ";
        SQL_String += "SET ";
        SQL_String += "CLASS_ID = "+ClassID+", CLASS_ID_Sub = 0, ";
        SQL_String += "CLASS_ID_Sub2 = 0, CLASS_ID_Sub3 = 0, ";
        SQL_String += "CLASS_ID_Sub4 = 0, Power_Mult = "+PowerM+" ";
        SQL_String += "WHERE ID = '" + playeruid + "'";
    dbclient.query(SQL_String);
    msg.channel.send({embed: RiderEmbed});
};//exports run

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: ["bugster-driveron", "bugster2-driveron", "player-driveron",  
            "perfect-driveron", "knockout-driveron", "cronicle-driveron"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "gamer-driveron",
  description: "",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};