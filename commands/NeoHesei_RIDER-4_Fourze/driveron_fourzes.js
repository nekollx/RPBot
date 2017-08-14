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
			  RiderEmbed.setAuthor('Space Galaxy Fourze', settings.botpic)
			  RiderEmbed.setColor('#C0C0C0')
			  RiderEmbed.setTimestamp()
			  RiderEmbed.setURL('http://www.maskedriders.info/Mee6RP/index.php')

              if (msg.content.startsWith("!meteor")){
                    RiderEmbed.setThumbnail('http://www.maskedriders.info/Mee6RP/statusPic/kamen_rider_meteor_symbol_by_alpha_vector-d4qr85i.jpg')
                    RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/Meteodriver.jpg')
			              RiderEmbed.setFooter('Data Card ~ Meteor', settings.serverpic)
                    dbclient.query("UPDATE " + settings.dbtable + " SET CLASS_ID = 4100 WHERE ID = '" + playeruid + "'");
                    dbclient.query("UPDATE " + settings.dbtable + " SET Power_Mult = 1 WHERE ID = '" + playeruid + "'");
                    dbclient.query("UPDATE " + settings.dbtable + " SET CLASS_ID_Sub = 0 WHERE ID = '" + playeruid + "'");
              } else if (msg.content.startsWith("!nadashiko")){
                    RiderEmbed.setThumbnail('http://www.maskedriders.info/Mee6RP/statusPic/kamen_rider_nadeshiko_hd_by_markolios-d9uhl0l.png')
                    RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/nadashikodriver.jpg')
			              RiderEmbed.setFooter('Data Card ~ Nadashiko', settings.serverpic)
                    dbclient.query("UPDATE " + settings.dbtable + " SET CLASS_ID = 4110 WHERE ID = '" + playeruid + "'");
                    dbclient.query("UPDATE " + settings.dbtable + " SET Power_Mult = 1 WHERE ID = '" + playeruid + "'");
                    dbclient.query("UPDATE " + settings.dbtable + " SET CLASS_ID_Sub = 0 WHERE ID = '" + playeruid + "'");
		          } else {
                    RiderEmbed.setThumbnail('http://www.maskedriders.info/Mee6RP/statusPic/kamen_rider_fourze_symbol_by_alpha_vector-d4i2kn8.jpg')
                    RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/Fourze_Driver.jpg')
			              RiderEmbed.setFooter('Data Card ~ Fourze', settings.serverpic)
                    dbclient.query("UPDATE " + settings.dbtable + " SET CLASS_ID = 4000 WHERE ID = '" + playeruid + "'");
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
  aliases: ["meteor-driveron", "nadashiko-driveron"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "fourze-driveron",
  description: "",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};