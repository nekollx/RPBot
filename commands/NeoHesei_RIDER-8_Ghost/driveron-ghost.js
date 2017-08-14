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

  if (msg.content.startsWith("!specter-d")){
    RiderEmbed.setThumbnail('http://www.maskedriders.info/Mee6RP/statusPic/kamen_rider_specter_logo_by_raidenzein-d92nezy.png')
    RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/KRGh-Ghost_Driver.png')
		RiderEmbed.setFooter('Data Card ~ Specter', settings.serverpic)
    ClassID = 8100;
  } else if (msg.content.startsWith("!necrom-d")){
    RiderEmbed.setThumbnail('http://www.maskedriders.info/Mee6RP/statusPic/kamen_rider_necrom_logo_by_raidenzein-d9jv1c7.png')
    RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/Megauloder_Collapsed.jpg')
		RiderEmbed.setFooter('Data Card ~ Necrom', settings.serverpic)
    ClassID = 8110;
  } else if (msg.content.startsWith("!dark-ghost-d")){
    RiderEmbed.setThumbnail('http://www.maskedriders.info/Mee6RP/statusPic/kamen_rider_dark_ghost_hd_by_markolios-da488b7.png')
    RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/KRGh-Ghost_Driver.png')
		RiderEmbed.setFooter('Data Card ~ Dark Ghost', settings.serverpic)
    ClassID = 8120;
  } else if (msg.content.startsWith("!zero-specter-d")){
    RiderEmbed.setThumbnail('http://www.maskedriders.info/Mee6RP/statusPic/kamen_rider_zero_specter_hd_by_markolios-da5kmpc.png')
    RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/KRGh-Ghost_Driver.png')
		RiderEmbed.setFooter('Data Card ~ Zero Specter', settings.serverpic)
    ClassID = 8130;
  } else if (msg.content.startsWith("!genma-d")){
    //RiderEmbed.setThumbnail('http://www.maskedriders.info/Mee6RP/statusPic/Icon-drive.png')
    RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/goods_pic4_3627291_20160223115345.jpg')
		RiderEmbed.setFooter('Data Card ~ Genma', settings.serverpic)
    ClassID = 8160;
  } else if (msg.content.startsWith("!extremer-d")){
    RiderEmbed.setThumbnail('http://www.maskedriders.info/Mee6RP/statusPic/extremer_full_body_by_markolios-dadmebc.png')
    RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/ExtremerDriver.png')
		RiderEmbed.setFooter('Data Card ~ Extremer', settings.serverpic)
    ClassID = 8140;
  } else if (msg.content.startsWith("!greatful-d")){
    RiderEmbed.setThumbnail('http://www.maskedriders.info/Mee6RP/statusPic/kamen_rider_ghost_grateful_logo_by_raidenzein-d9tfbvu.png')
    RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/EDG_Standby.png')
		RiderEmbed.setFooter('Data Card ~ Greatful', settings.serverpic)
    ClassID = 8150;
	} else {
    RiderEmbed.setThumbnail('http://www.maskedriders.info/Mee6RP/statusPic/Icon-ghost.png')
    RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/KRGh-Ghost_Driver.png')
		RiderEmbed.setFooter('Data Card ~ Ghost', settings.serverpic)
    ClassID = 8000;
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
  aliases: ["specter-driveron", "necrom-driveron", "dark-ghost-driveron", "zero-specter-driveron",
            "genma-driveron", "extremer-driveron", "greatful-driveron"
           ],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "ghost-driveron",
  description: "",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};