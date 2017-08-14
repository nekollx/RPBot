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

      if (msg.content.startsWith("!mach-d")){
            RiderEmbed.setThumbnail('http://www.maskedriders.info/Mee6RP/statusPic/Icon-drive.png')
            RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/MachDriverHonoh.png')
		RiderEmbed.setFooter('Data Card ~ Mach', settings.serverpic)
            ClassID = 7110;
      } else if (msg.content.startsWith("!proto-drive")){
            RiderEmbed.setThumbnail('http://www.maskedriders.info/Mee6RP/statusPic/Icon-drive.png')
            RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/drivedrive.jpg')
		RiderEmbed.setFooter('Data Card ~ Protodrive', settings.serverpic)
            ClassID = 7100;
      } else if (msg.content.startsWith("!chaser")){
            RiderEmbed.setThumbnail('http://www.maskedriders.info/Mee6RP/statusPic/Icon-drive.png')
            RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/MachDriverHonoh.png')
		RiderEmbed.setFooter('Data Card ~ Chaser', settings.serverpic)
            ClassID = 7120;
      } else if (msg.content.startsWith("!machine-c")){
            RiderEmbed.setThumbnail('http://www.maskedriders.info/Mee6RP/statusPic/mashin_chaser_by_markolios_d85ko07_by_markolios-dao4fux.png')
            RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/Break_Gunner.png')
		RiderEmbed.setFooter('Data Card ~ Mashin Chaser', settings.serverpic)
            ClassID = 7170;
      } else if (msg.content.startsWith("!gold-drive")){
            RiderEmbed.setThumbnail('http://www.maskedriders.info/Mee6RP/statusPic/Icon-drive.png')
            RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/Premium-Bandai-DX-Gold-Drive-Banno-Driver-Official-003.jpg')
		RiderEmbed.setFooter('Data Card ~ Gold Drive', settings.serverpic)
            ClassID = 7140;
      } else if (msg.content.startsWith("!mach-p")){
            RiderEmbed.setThumbnail('http://www.maskedriders.info/Mee6RP/statusPic/Icon-drive.png')
            RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/MachDriverHonoh.png')
		RiderEmbed.setFooter('Data Card ~ Mach (Mass Produced)', settings.serverpic)
            ClassID = 7150;
      } else if (msg.content.startsWith("!lupin")){
            RiderEmbed.setThumbnail('http://www.maskedriders.info/Mee6RP/statusPic/kamen_rider_lupin_symbol_by_raidenzein-d8tsf0l.png')
            RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/Lupin_Gunner.png')
		RiderEmbed.setFooter('Data Card ~ Lupin', settings.serverpic)
            ClassID = 7130;
      } else if (msg.content.startsWith("!zero-drive")){
            RiderEmbed.setThumbnail('http://www.maskedriders.info/Mee6RP/statusPic/Icon-drive.png')
            RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/drivedrive.jpg')
		RiderEmbed.setFooter('Data Card ~ Zero Drive', settings.serverpic)
            ClassID = 7160;
      } else if (msg.content.startsWith("!copy-drive-d")){
            RiderEmbed.setThumbnail('http://www.maskedriders.info/Mee6RP/statusPic/Icon-drive.png')
            RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/drivedrive.jpg')
		RiderEmbed.setFooter('Data Card ~ Drive (Imitation)', settings.serverpic)
            ClassID = 7180;
	} else {
            RiderEmbed.setThumbnail('http://www.maskedriders.info/Mee6RP/statusPic/Icon-drive.png')
            RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/drivedrive.jpg')
		RiderEmbed.setFooter('Data Card ~ Drive', settings.serverpic)
            ClassID = 7000;
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
  aliases: ["copy-drive-driveron", "mach-driveron", "proto-drive-driveron", "machine-chaser-driveron", "chaser-driveron", 
            "zero-drive-driveron", "gold-drive-driveron", "mach-production-driveron", "lupin-driveron"
           ],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "drive-driveron",
  description: "",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};