const discord = require ('discord.js');
var Client   =    require('mysql');
var settings = require('../../settings.js');
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
	      RiderEmbed.setAuthor('Magic The Wizard', settings.botpic)
	      RiderEmbed.setColor('#C0C0C0')
	      RiderEmbed.setTimestamp()
	      RiderEmbed.setURL('http://www.maskedriders.info/Mee6RP/index.php')
	      RiderEmbed.setThumbnail('http://www.maskedriders.info/Mee6RP/statusPic/WRChangeMage.png')

        mysqlPool.getConnection(function(err, connection) {
        if(err) throw err;
        connection.query("SELECT * FROM " + settings.dbtable + " WHERE ID = '" + playeruid + "'", function(err,rows){
              validform = rows[0].CLASS_ID;
              RiderEmbed.setFooter('Data Card ~' + settings.PlayerClassName(validform), settings.serverpic)

                if ((validform >= 5000) && (validform < 6000)){
                            if (validform == 5100){//wiseman
                                    RiderEmbed.setDescription('Level: 5', true)
                                    RiderEmbed.addField('Change', 'Now!', true)
                                    connection.query("UPDATE " + settings.dbtable + " SET CLASS_ID_Sub = 5200 WHERE ID = '" + playeruid + "'");
                                    connection.query("UPDATE " + settings.dbtable + " SET Power_Mult = 6 WHERE ID = '" + playeruid + "'");
                            } else if (validform == 5120){//sorcerer
                                    RiderEmbed.setDescription('Level: 4', true)
                                    RiderEmbed.addField('Change', 'Now!', true)
                                    connection.query("UPDATE " + settings.dbtable + " SET CLASS_ID_Sub = 5200 WHERE ID = '" + playeruid + "'");
                                    connection.query("UPDATE " + settings.dbtable + " SET Power_Mult = 5 WHERE ID = '" + playeruid + "'");
                            } else if (validform == 5110){//mage
                                    RiderEmbed.setDescription('Level: 3', true)
                                    RiderEmbed.addField('Change', 'Now!', true)
                                    connection.query("UPDATE " + settings.dbtable + " SET CLASS_ID_Sub = 5200 WHERE ID = '" + playeruid + "'");
                                    connection.query("UPDATE " + settings.dbtable + " SET Power_Mult = 4 WHERE ID = '" + playeruid + "'");
                            } else if (validform == 5140){//beast in magic land
                                    RiderEmbed.setDescription('Level: 2', true)
                                    RiderEmbed.addField('The Orgin', 'Please.', true)
				    RiderEmbed.addField('Transform', 'A weak transformation into incompatible style.', true)
                                    connection.query("UPDATE " + settings.dbtable + " SET CLASS_ID_Sub = 5200 WHERE ID = '" + playeruid + "'");
                                    connection.query("UPDATE " + settings.dbtable + " SET Power_Mult = 3 WHERE ID = '" + playeruid + "'");
                            } else {//wizard
                                    RiderEmbed.setDescription('Level: 2', true)
                                    RiderEmbed.addField('The Orgin', 'Please.', true)
				    RiderEmbed.addField('Transform', 'A weak transformation into incompatible style.', true)
                                    connection.query("UPDATE " + settings.dbtable + " SET CLASS_ID_Sub = 5200 WHERE ID = '" + playeruid + "'");
                                    connection.query("UPDATE " + settings.dbtable + " SET Power_Mult = 3 WHERE ID = '" + playeruid + "'");
                            }//if else

                            if (msg.content.endsWith("1)")){
                                RiderEmbed.addField('Transform', 'Transform into the Mage Style (Orange).', true)
                                RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/KRWi-Mage.png')
                            } else if (msg.content.endsWith("2)")){
                                RiderEmbed.addField('Transform', 'Transform into the Mage Style (Soldier).', true)
				RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/KR_wizard_mage.png')
                            } else if (msg.content.endsWith("3)")){
                                RiderEmbed.addField('Transform', 'Transform into the Mage Style (Captain).', true)
				RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/MageCaptain.png')
                            } else if (msg.content.endsWith("b)")){
                                RiderEmbed.addField('Transform', 'Transform into the Mage Style (Blue).', true)
				RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/Pn14.jpg')
                                RiderEmbed.setThumbnail('http://www.maskedriders.info/Mee6RP/statusPic/MPBring.jpg')
                            } else if (msg.content.endsWith("g)")){
                                RiderEmbed.addField('Transform', 'Transform into the Mage Style (Green).', true)
				RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/Pn8.jpg')
                                RiderEmbed.setThumbnail('http://www.maskedriders.info/Mee6RP/statusPic/MPGring.jpg')
                            };//if else
                } else {
                            RiderEmbed.setThumbnail(settings.serverpic)
                            RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/wrongrider.png')
                };//if ((validform

                msg.channel.sendEmbed(
                RiderEmbed, '', { disableEveryone: true }
                );//message.channel.sendEmbed
                connection.release(); // if error occured closed the connection
        });//querry "SELECT * FROM RP_Users WHERE ID = '" + uid + "'"
        });//get connection
};//exports run

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: ["henshin(mageo2)", "henshin(mageo3)", "henshin(mageb)", "henshin(mageg)"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "henshin(mageo1)",
  description: "",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};