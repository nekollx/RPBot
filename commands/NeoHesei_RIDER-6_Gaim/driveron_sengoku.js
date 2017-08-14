const discord = require ('discord.js');
var Client   =    require('mysql');
var settings = require('../../settings.js');

var dbclient = '';

exports.init = (client) => {
        dbclient = Client.createConnection({
                    host: settings.dbhost,
                    user: settings.dbuser,
                    password: settings.dbpassword,
                    database: settings.dbdatabase,
        });//client = Client.createConnection
};//init

exports.run = (client, msg) => {
	    var playeruid = msg.author.id;
        const RiderEmbed = new discord.RichEmbed()
			  RiderEmbed.setAuthor('Toukenden Gaim', settings.botpic)
			  RiderEmbed.setColor('#C0C0C0')
			  RiderEmbed.setTimestamp()
			  RiderEmbed.setURL('http://www.maskedriders.info/Mee6RP/index.php')

              if (msg.content.startsWith("!baron")){
                    RiderEmbed.setThumbnail('http://www.maskedriders.info/Mee6RP/statusPic/krbaronplate.png')
                    RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/Sengoku_Driver_(Gaim)..jpg')
			  RiderEmbed.setFooter('Data Card ~ Baron', settings.serverpic)
                    dbclient.query("UPDATE " + settings.dbtable + " SET CLASS_ID = 6100 WHERE ID = '" + playeruid + "'");
                    dbclient.query("UPDATE " + settings.dbtable + " SET Power_Mult = 1 WHERE ID = '" + playeruid + "'");
                    dbclient.query("UPDATE " + settings.dbtable + " SET CLASS_ID_Sub = 0 WHERE ID = '" + playeruid + "'");
              } else if (msg.content.startsWith("!ryugen-d")){
                    RiderEmbed.setThumbnail('http://www.maskedriders.info/Mee6RP/statusPic/krryugenplate.jpg')
                    RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/Sengoku_Driver_(Gaim)..jpg')
			  RiderEmbed.setFooter('Data Card ~ Ryugen', settings.serverpic)
                    dbclient.query("UPDATE " + settings.dbtable + " SET CLASS_ID = 6110 WHERE ID = '" + playeruid + "'");
                    dbclient.query("UPDATE " + settings.dbtable + " SET Power_Mult = 1 WHERE ID = '" + playeruid + "'");
                    dbclient.query("UPDATE " + settings.dbtable + " SET CLASS_ID_Sub = 0 WHERE ID = '" + playeruid + "'");
              } else if (msg.content.startsWith("!zangetsu-d")){
                    RiderEmbed.setThumbnail('http://www.maskedriders.info/Mee6RP/statusPic/krzengetsuplate.jpg')
                    RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/Sengoku_Driver_(Gaim)..jpg')
			  RiderEmbed.setFooter('Data Card ~ Zangetsu', settings.serverpic)
                    dbclient.query("UPDATE " + settings.dbtable + " SET CLASS_ID = 6120 WHERE ID = '" + playeruid + "'");
                    dbclient.query("UPDATE " + settings.dbtable + " SET Power_Mult = 1 WHERE ID = '" + playeruid + "'");
                    dbclient.query("UPDATE " + settings.dbtable + " SET CLASS_ID_Sub = 0 WHERE ID = '" + playeruid + "'");
              } else if (msg.content.startsWith("!gridon")){
                    RiderEmbed.setThumbnail('http://www.maskedriders.info/Mee6RP/statusPic/krgridonplate.jpg')
                    RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/Sengoku_Driver_(Gaim)..jpg')
			  RiderEmbed.setFooter('Data Card ~ Gridon', settings.serverpic)
                    dbclient.query("UPDATE " + settings.dbtable + " SET CLASS_ID = 6130 WHERE ID = '" + playeruid + "'");
                    dbclient.query("UPDATE " + settings.dbtable + " SET Power_Mult = 1 WHERE ID = '" + playeruid + "'");
                    dbclient.query("UPDATE " + settings.dbtable + " SET CLASS_ID_Sub = 0 WHERE ID = '" + playeruid + "'");
              } else if (msg.content.startsWith("!kurokage")){
                    RiderEmbed.setThumbnail('http://www.maskedriders.info/Mee6RP/statusPic/krkurokageplate.png')
                    RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/Sengoku_Driver_(Gaim)..jpg')
			  RiderEmbed.setFooter('Data Card ~ Kurokage', settings.serverpic)
                    dbclient.query("UPDATE " + settings.dbtable + " SET CLASS_ID = 6140 WHERE ID = '" + playeruid + "'");
                    dbclient.query("UPDATE " + settings.dbtable + " SET Power_Mult = 1 WHERE ID = '" + playeruid + "'");
                    dbclient.query("UPDATE " + settings.dbtable + " SET CLASS_ID_Sub = 0 WHERE ID = '" + playeruid + "'");
              } else if (msg.content.startsWith("!bravo")){
                    RiderEmbed.setThumbnail('http://www.maskedriders.info/Mee6RP/statusPic/Bravo_faceplate_01.png')
                    RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/Sengoku_Driver_(Gaim)..jpg')
			  RiderEmbed.setFooter('Data Card ~ Bravo', settings.serverpic)
                    dbclient.query("UPDATE " + settings.dbtable + " SET CLASS_ID = 6150 WHERE ID = '" + playeruid + "'");
                    dbclient.query("UPDATE " + settings.dbtable + " SET Power_Mult = 1 WHERE ID = '" + playeruid + "'");
                    dbclient.query("UPDATE " + settings.dbtable + " SET CLASS_ID_Sub = 0 WHERE ID = '" + playeruid + "'");
              } else if (msg.content.startsWith("!knuckle-d")){
                    RiderEmbed.setThumbnail('http://www.maskedriders.info/Mee6RP/statusPic/Blank_Faceplate.png')
                    RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/Sengoku_Driver_(Gaim)..jpg')
			  RiderEmbed.setFooter('Data Card ~ Knuckle', settings.serverpic)
                    dbclient.query("UPDATE " + settings.dbtable + " SET CLASS_ID = 6160 WHERE ID = '" + playeruid + "'");
                    dbclient.query("UPDATE " + settings.dbtable + " SET Power_Mult = 1 WHERE ID = '" + playeruid + "'");
                    dbclient.query("UPDATE " + settings.dbtable + " SET CLASS_ID_Sub = 0 WHERE ID = '" + playeruid + "'");
              } else if (msg.content.startsWith("!ryugen-yomi")){
                    RiderEmbed.setThumbnail('http://www.maskedriders.info/Mee6RP/statusPic/krryugenyomiplate.JPG')
                    RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/Sengoku_Driver_(Gaim)..jpg')
			  RiderEmbed.setFooter('Data Card ~ Ryugen (Yomi)', settings.serverpic)
                    dbclient.query("UPDATE " + settings.dbtable + " SET CLASS_ID = 6170 WHERE ID = '" + playeruid + "'");
                    dbclient.query("UPDATE " + settings.dbtable + " SET Power_Mult = 1 WHERE ID = '" + playeruid + "'");
                    dbclient.query("UPDATE " + settings.dbtable + " SET CLASS_ID_Sub = 0 WHERE ID = '" + playeruid + "'");
              } else if (msg.content.startsWith("!jam")){
                    RiderEmbed.setThumbnail('http://www.maskedriders.info/Mee6RP/statusPic/Jam_Faceplate.png')
                    RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/Sengoku_Driver_(Gaim)..jpg')
			  RiderEmbed.setFooter('Data Card ~ Jam', settings.serverpic)
                    dbclient.query("UPDATE " + settings.dbtable + " SET CLASS_ID = 6180 WHERE ID = '" + playeruid + "'");
                    dbclient.query("UPDATE " + settings.dbtable + " SET Power_Mult = 1 WHERE ID = '" + playeruid + "'");
                    dbclient.query("UPDATE " + settings.dbtable + " SET CLASS_ID_Sub = 0 WHERE ID = '" + playeruid + "'");
              } else if (msg.content.startsWith("!trooper")){
                    RiderEmbed.setThumbnail('http://www.maskedriders.info/Mee6RP/statusPic/Blank_Faceplate.png')
                    RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/Sengoku_Driver_(Gaim)..jpg')
			  RiderEmbed.setFooter('Data Card ~ Kurokage', settings.serverpic)
                    dbclient.query("UPDATE " + settings.dbtable + " SET CLASS_ID = 6190 WHERE ID = '" + playeruid + "'");
                    dbclient.query("UPDATE " + settings.dbtable + " SET Power_Mult = 1 WHERE ID = '" + playeruid + "'");
                    dbclient.query("UPDATE " + settings.dbtable + " SET CLASS_ID_Sub = 0 WHERE ID = '" + playeruid + "'");
              } else if (msg.content.startsWith("!saver")){
                    //RiderEmbed.setThumbnail('http://www.maskedriders.info/Mee6RP/statusPic/krkurokageplate.png')
                    RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/Sengoku_Driver_(Gaim)..jpg')
			  RiderEmbed.setFooter('Data Card ~ Saver', settings.serverpic)
                    dbclient.query("UPDATE " + settings.dbtable + " SET CLASS_ID = 6200 WHERE ID = '" + playeruid + "'");
                    dbclient.query("UPDATE " + settings.dbtable + " SET Power_Mult = 1 WHERE ID = '" + playeruid + "'");
                    dbclient.query("UPDATE " + settings.dbtable + " SET CLASS_ID_Sub = 0 WHERE ID = '" + playeruid + "'");
              } else if (msg.content.startsWith("!bujin")){
                    RiderEmbed.setThumbnail('http://www.maskedriders.info/Mee6RP/statusPic/Bujin_Gaim_FacePlate.png')
                    RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/Sengoku_Driver_(Gaim)..jpg')
			  RiderEmbed.setFooter('Data Card ~ Bujin Gaim', settings.serverpic)
                    dbclient.query("UPDATE " + settings.dbtable + " SET CLASS_ID = 6210 WHERE ID = '" + playeruid + "'");
                    dbclient.query("UPDATE " + settings.dbtable + " SET Power_Mult = 1 WHERE ID = '" + playeruid + "'");
                    dbclient.query("UPDATE " + settings.dbtable + " SET CLASS_ID_Sub = 0 WHERE ID = '" + playeruid + "'");
              } else if (msg.content.startsWith("!idunn")){
                    RiderEmbed.setThumbnail('http://www.maskedriders.info/Mee6RP/statusPic/kridunnplate.jpg')
                    RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/Sengoku_Driver_(Gaim)..jpg')
			  RiderEmbed.setFooter('Data Card ~ Idunn', settings.serverpic)
                    dbclient.query("UPDATE " + settings.dbtable + " SET CLASS_ID = 6220 WHERE ID = '" + playeruid + "'");
                    dbclient.query("UPDATE " + settings.dbtable + " SET Power_Mult = 1 WHERE ID = '" + playeruid + "'");
                    dbclient.query("UPDATE " + settings.dbtable + " SET CLASS_ID_Sub = 0 WHERE ID = '" + playeruid + "'");
              } else if (msg.content.startsWith("!fifteen")){
                    RiderEmbed.setThumbnail('http://www.maskedriders.info/Mee6RP/statusPic/krfifteenplate.jpg')
                    RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/Sengoku_Driver_(Gaim)..jpg')
			  RiderEmbed.setFooter('Data Card ~ Fifteen', settings.serverpic)
                    dbclient.query("UPDATE " + settings.dbtable + " SET CLASS_ID = 6230 WHERE ID = '" + playeruid + "'");
                    dbclient.query("UPDATE " + settings.dbtable + " SET Power_Mult = 1 WHERE ID = '" + playeruid + "'");
                    dbclient.query("UPDATE " + settings.dbtable + " SET CLASS_ID_Sub = 0 WHERE ID = '" + playeruid + "'");
              } else if (msg.content.startsWith("!mars")){
                    RiderEmbed.setThumbnail('http://www.maskedriders.info/Mee6RP/statusPic/Mars_Faceplate.png')
                    RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/Sengoku_Driver_(Gaim)..jpg')
			  RiderEmbed.setFooter('Data Card ~ Mars', settings.serverpic)
                    dbclient.query("UPDATE " + settings.dbtable + " SET CLASS_ID = 6240 WHERE ID = '" + playeruid + "'");
                    dbclient.query("UPDATE " + settings.dbtable + " SET Power_Mult = 1 WHERE ID = '" + playeruid + "'");
                    dbclient.query("UPDATE " + settings.dbtable + " SET CLASS_ID_Sub = 0 WHERE ID = '" + playeruid + "'");
              } else if (msg.content.startsWith("!black-gaim")){
                    //RiderEmbed.setThumbnail('http://www.maskedriders.info/Mee6RP/statusPic/Mars_Faceplate.png')
                    RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/Sengoku_Driver_(Gaim)..jpg')
			  RiderEmbed.setFooter('Data Card ~ Gaim (Yami)', settings.serverpic)
                    dbclient.query("UPDATE " + settings.dbtable + " SET CLASS_ID = 6250 WHERE ID = '" + playeruid + "'");
                    dbclient.query("UPDATE " + settings.dbtable + " SET Power_Mult = 1 WHERE ID = '" + playeruid + "'");
                    dbclient.query("UPDATE " + settings.dbtable + " SET CLASS_ID_Sub = 0 WHERE ID = '" + playeruid + "'");
              } else if (msg.content.startsWith("!kamuro")){
                    RiderEmbed.setThumbnail('http://www.maskedriders.info/Mee6RP/statusPic/Kamuro_Faceplate.png')
                    RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/Sengoku_Driver_(Gaim)..jpg')
			  RiderEmbed.setFooter('Data Card ~ Kamuro', settings.serverpic)
                    dbclient.query("UPDATE " + settings.dbtable + " SET CLASS_ID = 6260 WHERE ID = '" + playeruid + "'");
                    dbclient.query("UPDATE " + settings.dbtable + " SET Power_Mult = 1 WHERE ID = '" + playeruid + "'");
                    dbclient.query("UPDATE " + settings.dbtable + " SET CLASS_ID_Sub = 0 WHERE ID = '" + playeruid + "'");
              } else if (msg.content.startsWith("!black-baron")){
                    RiderEmbed.setThumbnail('http://www.maskedriders.info/Mee6RP/statusPic/Black_Baron_Faceplate.png')
                    RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/Sengoku_Driver_(Gaim)..jpg')
			  RiderEmbed.setFooter('Data Card ~ Baron (Black)', settings.serverpic)
                    dbclient.query("UPDATE " + settings.dbtable + " SET CLASS_ID = 6270 WHERE ID = '" + playeruid + "'");
                    dbclient.query("UPDATE " + settings.dbtable + " SET Power_Mult = 1 WHERE ID = '" + playeruid + "'");
                    dbclient.query("UPDATE " + settings.dbtable + " SET CLASS_ID_Sub = 0 WHERE ID = '" + playeruid + "'");
              } else if (msg.content.startsWith("!maja")){
                    RiderEmbed.setThumbnail('http://www.maskedriders.info/Mee6RP/statusPic/Maja_Rider_Indicator.png')
                    RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/Sengoku_Driver_(Gaim)..jpg')
			  RiderEmbed.setFooter('Data Card ~ Maja', settings.serverpic)
                    dbclient.query("UPDATE " + settings.dbtable + " SET CLASS_ID = 6280 WHERE ID = '" + playeruid + "'");
                    dbclient.query("UPDATE " + settings.dbtable + " SET Power_Mult = 1 WHERE ID = '" + playeruid + "'");
                    dbclient.query("UPDATE " + settings.dbtable + " SET CLASS_ID_Sub = 0 WHERE ID = '" + playeruid + "'");
              } else if (msg.content.startsWith("!duke-d")){
                    RiderEmbed.setThumbnail('http://www.maskedriders.info/Mee6RP/statusPic/Duke_Faceplate.png')
                    RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/Sengoku_Driver_(Gaim)..jpg')
			  RiderEmbed.setFooter('Data Card ~ Duke', settings.serverpic)
                    dbclient.query("UPDATE " + settings.dbtable + " SET CLASS_ID = 6290 WHERE ID = '" + playeruid + "'");
                    dbclient.query("UPDATE " + settings.dbtable + " SET Power_Mult = 1 WHERE ID = '" + playeruid + "'");
                    dbclient.query("UPDATE " + settings.dbtable + " SET CLASS_ID_Sub = 0 WHERE ID = '" + playeruid + "'");
              } else if (msg.content.startsWith("!duke-shin")){
                    //RiderEmbed.setThumbnail('http://www.maskedriders.info/Mee6RP/statusPic/Duke_Faceplate.png')
                    RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/genisisdriver.png')
			  RiderEmbed.setFooter('Data Card ~ Duke', settings.serverpic)
                    dbclient.query("UPDATE " + settings.dbtable + " SET CLASS_ID = 6300 WHERE ID = '" + playeruid + "'");
                    dbclient.query("UPDATE " + settings.dbtable + " SET Power_Mult = 1 WHERE ID = '" + playeruid + "'");
                    dbclient.query("UPDATE " + settings.dbtable + " SET CLASS_ID_Sub = 0 WHERE ID = '" + playeruid + "'");
              } else if (msg.content.startsWith("!zengetsu-shin")){
                    //RiderEmbed.setThumbnail('http://www.maskedriders.info/Mee6RP/statusPic/Duke_Faceplate.png')
                    RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/genisisdriver.png')
			  RiderEmbed.setFooter('Data Card ~ Zengetsu Shin', settings.serverpic)
                    dbclient.query("UPDATE " + settings.dbtable + " SET CLASS_ID = 6310 WHERE ID = '" + playeruid + "'");
                    dbclient.query("UPDATE " + settings.dbtable + " SET Power_Mult = 1 WHERE ID = '" + playeruid + "'");
                    dbclient.query("UPDATE " + settings.dbtable + " SET CLASS_ID_Sub = 0 WHERE ID = '" + playeruid + "'");
              } else if (msg.content.startsWith("!marika-shin")){
                    //RiderEmbed.setThumbnail('http://www.maskedriders.info/Mee6RP/statusPic/Duke_Faceplate.png')
                    RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/genisisdriver.png')
			  RiderEmbed.setFooter('Data Card ~ Marika', settings.serverpic)
                    dbclient.query("UPDATE " + settings.dbtable + " SET CLASS_ID = 6320 WHERE ID = '" + playeruid + "'");
                    dbclient.query("UPDATE " + settings.dbtable + " SET Power_Mult = 1 WHERE ID = '" + playeruid + "'");
                    dbclient.query("UPDATE " + settings.dbtable + " SET CLASS_ID_Sub = 0 WHERE ID = '" + playeruid + "'");
              } else if (msg.content.startsWith("!baron-shin")){
                    //RiderEmbed.setThumbnail('http://www.maskedriders.info/Mee6RP/statusPic/Duke_Faceplate.png')
                    RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/genisisdriver.png')
			  RiderEmbed.setFooter('Data Card ~ Baron', settings.serverpic)
                    dbclient.query("UPDATE " + settings.dbtable + " SET CLASS_ID = 6330 WHERE ID = '" + playeruid + "'");
                    dbclient.query("UPDATE " + settings.dbtable + " SET Power_Mult = 1 WHERE ID = '" + playeruid + "'");
                    dbclient.query("UPDATE " + settings.dbtable + " SET CLASS_ID_Sub = 0 WHERE ID = '" + playeruid + "'");

              } else if (msg.content.startsWith("!sid-shin")){
                    //RiderEmbed.setThumbnail('http://www.maskedriders.info/Mee6RP/statusPic/Duke_Faceplate.png')
                    RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/genisisdriver.png')
			  RiderEmbed.setFooter('Data Card ~ Sigurd', settings.serverpic)
                    dbclient.query("UPDATE " + settings.dbtable + " SET CLASS_ID = 6340 WHERE ID = '" + playeruid + "'");
                    dbclient.query("UPDATE " + settings.dbtable + " SET Power_Mult = 1 WHERE ID = '" + playeruid + "'");
                    dbclient.query("UPDATE " + settings.dbtable + " SET CLASS_ID_Sub = 0 WHERE ID = '" + playeruid + "'");
              } else if (msg.content.startsWith("!kurokage-shin")){
                    //RiderEmbed.setThumbnail('http://www.maskedriders.info/Mee6RP/statusPic/Duke_Faceplate.png')
                    RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/genisisdriver.png')
			  RiderEmbed.setFooter('Data Card ~ Kurokage Shin', settings.serverpic)
                    dbclient.query("UPDATE " + settings.dbtable + " SET CLASS_ID = 6350 WHERE ID = '" + playeruid + "'");
                    dbclient.query("UPDATE " + settings.dbtable + " SET Power_Mult = 1 WHERE ID = '" + playeruid + "'");
                    dbclient.query("UPDATE " + settings.dbtable + " SET CLASS_ID_Sub = 0 WHERE ID = '" + playeruid + "'");
              } else if (msg.content.startsWith("!tyrant-shin")){
                    //RiderEmbed.setThumbnail('http://www.maskedriders.info/Mee6RP/statusPic/Duke_Faceplate.png')
                    RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/genisisdriver.png')
			  RiderEmbed.setFooter('Data Card ~ Tyrant', settings.serverpic)
                    dbclient.query("UPDATE " + settings.dbtable + " SET CLASS_ID = 6360 WHERE ID = '" + playeruid + "'");
                    dbclient.query("UPDATE " + settings.dbtable + " SET Power_Mult = 1 WHERE ID = '" + playeruid + "'");
                    dbclient.query("UPDATE " + settings.dbtable + " SET CLASS_ID_Sub = 0 WHERE ID = '" + playeruid + "'");


		  } else {
                    RiderEmbed.setThumbnail('http://www.maskedriders.info/Mee6RP/statusPic/krgaimplate.png')
                    RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/Sengoku_Driver_(Gaim)..jpg')
			  RiderEmbed.setFooter('Data Card ~ Gaim', settings.serverpic)
                    dbclient.query("UPDATE " + settings.dbtable + " SET CLASS_ID = 6000 WHERE ID = '" + playeruid + "'");
                    dbclient.query("UPDATE " + settings.dbtable + " SET Power_Mult = 1 WHERE ID = '" + playeruid + "'");
                    dbclient.query("UPDATE " + settings.dbtable + " SET CLASS_ID_Sub = 0 WHERE ID = '" + playeruid + "'");
              }//if else
              //dbclient.release();// After performing the operation then closed the connection.

	  msg.channel.sendEmbed(
	  RiderEmbed, '', { disableEveryone: true }
	  );//message.channel.sendEmbed
//console.log('message is: ' + msg)

};//exports run

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: [
            "baron-driveron", "ryugen-driveron", "zangetsu-driveron", "gridon-driveron", "kurokage-driveron", 
            "bravo-driveron", "knuckle-driveron", "ryugen-yomi-driveron", "jam-driveron", "trooper-driveron", 
            "saver-driveron", "bujin-gaim-driveron", "idunn-driveron", "fifteen-driveron", "mars-driveron", 
            "black-gaim-driveron", "kamuro-driveron", "black-baron-driveron", "maja-driveron", "duke-driveron",
            "duke-shin-driveron", "zengetsu-shin-driveron", "marika-shin-driveron", "baron-shin-driveron", 
            "sid-shin-driveron", "kurokage-shin-driveron", "tyrant-shin-driveron"
           ],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "gaim-driveron",
  description: "",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};