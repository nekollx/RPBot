const discord  = require ('discord.js');
var   Client   = require('mysql');
var   settings = require('../../settings.js');
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
	var   validform   = 0;
	var   playeruid   = msg.author.id;
	var   playername  = msg.author.username;
        var mentionedid   = playeruid;
        var mentionedname = playername;
        if (msg.mentions.users.first()){
            mentionedid   = msg.mentions.users.first().id;
            mentionedname = msg.mentions.users.first().username;
        };//if
        const RiderEmbed = new discord.RichEmbed()
              RiderEmbed.setAuthor('Jungle OOO', settings.botpic)
              RiderEmbed.setColor('#C0C0C0')
              RiderEmbed.setTimestamp()
              RiderEmbed.setURL('http://www.maskedriders.info/Mee6RP/index.php')
              RiderEmbed.setThumbnail('http://media.animevice.com/uploads/0/6872/810528-kamen_rider_ooo_symbol_by_alpha_vector.jpg')

              if (msg.content.startsWith("!birth")){
                    RiderEmbed.setThumbnail('http://media.animevice.com/uploads/0/6872/810528-kamen_rider_ooo_symbol_by_alpha_vector.jpg')
                    RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/birth_driver_by_gohan22_22-d4ezwlc.png')
                    RiderEmbed.setFooter('Data Card ~ Birth', settings.serverpic)
                    mysqlPool.getConnection(function(err, connection) {
                    if(err) throw err;
                          connection.query("UPDATE " + settings.dbtable + " SET CLASS_ID = 3100 WHERE ID = '" + playeruid + "'");
                          connection.query("UPDATE " + settings.dbtable + " SET Power_Mult = 1 WHERE ID = '" + playeruid + "'");
                    connection.release();// After performing the operation then closed the connection.
                    });//get connection
              } else if (msg.content.startsWith("!protobirth")){
                    RiderEmbed.setThumbnail('http://media.animevice.com/uploads/0/6872/810528-kamen_rider_ooo_symbol_by_alpha_vector.jpg')
                    RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/birth_driver_by_gohan22_22-d4ezwlc.png')
                    RiderEmbed.setFooter('Data Card ~ Birth (Prototype)', settings.serverpic)
                    mysqlPool.getConnection(function(err, connection) {
                    if(err) throw err;
                          connection.query("UPDATE " + settings.dbtable + " SET CLASS_ID = 3110 WHERE ID = '" + playeruid + "'");
                          connection.query("UPDATE " + settings.dbtable + " SET Power_Mult = 1 WHERE ID = '" + playeruid + "'");
                    connection.release();// After performing the operation then closed the connection.
                    });//get connection
		          } else {
                    RiderEmbed.setThumbnail('http://media.animevice.com/uploads/0/6872/810528-kamen_rider_ooo_symbol_by_alpha_vector.jpg')
                    RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/Ozu_doraiba.png')
                    RiderEmbed.setFooter('Data Card ~ OOO', settings.serverpic)
                    mysqlPool.getConnection(function(err, connection) {
                    if(err) throw err;
                          connection.query("UPDATE " + settings.dbtable + " SET CLASS_ID = 3000 WHERE ID = '" + playeruid + "'");
                          connection.query("UPDATE " + settings.dbtable + " SET Power_Mult = 1 WHERE ID = '" + playeruid + "'");
                    connection.release();// After performing the operation then closed the connection.
                    });//get connection
              }//if else

	  msg.channel.sendEmbed(
	  RiderEmbed, '', { disableEveryone: true }
	  );//message.channel.sendEmbed
//console.log('message is: ' + msg)

};//exports run

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: ["birth-driveron", "protobirth-driveron"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "ooos-driveron",
  description: "",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};