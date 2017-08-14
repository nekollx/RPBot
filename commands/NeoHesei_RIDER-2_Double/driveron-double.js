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
			  RiderEmbed.setAuthor('Detective Double', settings.botpic)
			  RiderEmbed.setColor('#C0C0C0')
			  RiderEmbed.setTimestamp()
			  RiderEmbed.setURL('http://www.maskedriders.info/Mee6RP/index.php')

         if (msg.content.startsWith("!lost-d")){
                    //RiderEmbed.setThumbnail('http://www.maskedriders.info/Mee6RP/statusPic/Icon-ghost.png')
                    RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/imgrc0080052411.jpg')
			        RiderEmbed.setFooter('Data Card ~ Lost', settings.serverpic)
                    dbclient.query("UPDATE " + settings.dbtable + " SET CLASS_ID = 2200 WHERE ID = '" + playeruid + "'");
                    dbclient.query("UPDATE " + settings.dbtable + " SET Power_Mult = 1 WHERE ID = '" + playeruid + "'");
                    dbclient.query("UPDATE " + settings.dbtable + " SET CLASS_ID_Sub = 0 WHERE ID = '" + playeruid + "'");
         } else if (msg.content.startsWith("!accell-d")){
                    //RiderEmbed.setThumbnail('http://www.maskedriders.info/Mee6RP/statusPic/Icon-ghost.png')
                    RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/Wssd.png')
			        RiderEmbed.setFooter('Data Card ~ Acell', settings.serverpic)
                    dbclient.query("UPDATE " + settings.dbtable + " SET CLASS_ID = 2100 WHERE ID = '" + playeruid + "'");
                    dbclient.query("UPDATE " + settings.dbtable + " SET Power_Mult = 1 WHERE ID = '" + playeruid + "'");
                    dbclient.query("UPDATE " + settings.dbtable + " SET CLASS_ID_Sub = 0 WHERE ID = '" + playeruid + "'");
		 } else {
                    //RiderEmbed.setThumbnail('http://www.maskedriders.info/Mee6RP/statusPic/Icon-ghost.png')
                    RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/141280-double_1.jpg')
			        RiderEmbed.setFooter('Data Card ~ Double', settings.serverpic)
                    dbclient.query("UPDATE " + settings.dbtable + " SET CLASS_ID = 2000 WHERE ID = '" + playeruid + "'");
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
  aliases: ["lost-driveron", "accell-driveron"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "double-driveron",
  description: "",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};