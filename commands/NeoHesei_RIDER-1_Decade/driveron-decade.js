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
			  RiderEmbed.setAuthor('Barcode Warrior Decade', settings.botpic)
			  RiderEmbed.setColor('#C0C0C0')
			  RiderEmbed.setTimestamp()
			  RiderEmbed.setURL('http://www.maskedriders.info/Mee6RP/index.php')

         if (msg.content.startsWith("!diend-d")){
                    //RiderEmbed.setThumbnail('http://www.maskedriders.info/Mee6RP/statusPic/Icon-ghost.png')
                    RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/77271-diend_2.jpg')
			        RiderEmbed.setFooter('Data Card ~ DiEnd', settings.serverpic)
                    dbclient.query("UPDATE " + settings.dbtable + " SET CLASS_ID = 1100 WHERE ID = '" + playeruid + "'");
                    dbclient.query("UPDATE " + settings.dbtable + " SET Power_Mult = 1 WHERE ID = '" + playeruid + "'");
                    dbclient.query("UPDATE " + settings.dbtable + " SET CLASS_ID_Sub = 0 WHERE ID = '" + playeruid + "'");
		 } else {
                    //RiderEmbed.setThumbnail('http://www.maskedriders.info/Mee6RP/statusPic/Icon-ghost.png')
                    RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/63570-decade2.jpg')
			        RiderEmbed.setFooter('Data Card ~ Decade', settings.serverpic)
                    dbclient.query("UPDATE " + settings.dbtable + " SET CLASS_ID = 1000 WHERE ID = '" + playeruid + "'");
                    dbclient.query("UPDATE " + settings.dbtable + " SET Power_Mult = 1 WHERE ID = '" + playeruid + "'");
                    dbclient.query("UPDATE " + settings.dbtable + " SET CLASS_ID_Sub = 0 WHERE ID = '" + playeruid + "'");
              }//if else
              //dbclient.release();// After performing the operation then closed the connection.

    msg.channel.send({embed: RiderEmbed});
//console.log('message is: ' + msg)

};//exports run

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: ["diend-driveron"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "decade-driveron",
  description: "",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};