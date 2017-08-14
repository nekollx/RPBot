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
	      RiderEmbed.setThumbnail('http://www.maskedriders.info/Mee6RP/statusPic/Beast.PNG')

        mysqlPool.getConnection(function(err, connection) {
        if(err) throw err;
        connection.query("SELECT * FROM " + settings.dbtable + " WHERE ID = '" + playeruid + "'", function(err,rows){
              validform = rows[0].CLASS_ID;
              RiderEmbed.setFooter('Data Card ~' + settings.PlayerClassName(validform), settings.serverpic)

                if ((validform >= 5000) && (validform < 6000)){
                            if (validform == 5100){//wiseman
                                    RiderEmbed.setDescription('Level: 6', true)
                                    connection.query("UPDATE " + settings.dbtable + " SET Power_Mult = 7 WHERE ID = '" + playeruid + "'");
                            } else if (validform == 5120){//sorcerer
                                    RiderEmbed.setDescription('Level: 5', true)
                                    connection.query("UPDATE " + settings.dbtable + " SET Power_Mult = 6 WHERE ID = '" + playeruid + "'");
                            } else if (validform == 5110){//mage
                                    RiderEmbed.setDescription('Level: 4', true)
                                    connection.query("UPDATE " + settings.dbtable + " SET Power_Mult = 5 WHERE ID = '" + playeruid + "'");
                            } else if ((validform == 5130) || (validform == 5140)) {//beast and magic beast
                                            if (msg.content.endsWith("cancel)")) {
                                                connection.query("UPDATE " + settings.dbtable + " SET Power_Mult = 1 WHERE ID = '" + playeruid + "'");
                                            } else {
                                                RiderEmbed.setDescription('Level: 3', true)
                                                connection.query("UPDATE " + settings.dbtable + " SET Power_Mult = 4 WHERE ID = '" + playeruid + "'");
                                            };//ifelse
                            } else {//wizard
                                    RiderEmbed.setDescription('Level: 3', true)
                                    connection.query("UPDATE " + settings.dbtable + " SET Power_Mult = 4 WHERE ID = '" + playeruid + "'");
                            };//if else

                                    if (validform == 5000){
                                        RiderEmbed.addField('Beast', 'Please.', true)
                                        RiderEmbed.addField('Transform', 'Transform into a weaker incompatable Style.', true)
                                        //RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/Kr_wizard_beast_mantle.jpg')
                                    } else if ((validform == 5130) || (validform == 5140)) { 
                                            if (msg.content.endsWith("cancel)")) {
                                                RiderEmbed.addField('Set!', 'Noooooooooo!', true)
                                                //RiderEmbed.addField('Transform', 'Transform into an ancient wizard.', true)
                                                RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/Beastdriver.png')
                                            }else{ 
                                                RiderEmbed.addField('Set!', 'Open! L-I-O-N, Lion!', true)
                                                RiderEmbed.addField('Transform', 'Transform into an ancient wizard.', true)
                                                RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/L-i-o-n_lion.png')
                                            };//if else
                                    } else { 
                                        RiderEmbed.addField('Beast', 'Now!', true)
                                        RiderEmbed.addField('Transform', 'Transform into a weaker incompatable Style.', true)
                                    };//seperate wizard from the rest
                 
                } else {
                            RiderEmbed.setThumbnail(settings.serverpic)
                            RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/wrongrider.png')
                };//if ((validform

                msg.channel.sendEmbed(
                RiderEmbed, '', { disableEveryone: true }
                );//message.channel.sendEmbed
                //console.log('message is: ' + msg)

                if (msg.content.endsWith("cancel)")) {
		                msg.channel.sendMessage('Hey now, stop teasing the driver ' + msg.author.username + ' >:}');
                };//if

                connection.release(); // if error occured closed the connection
        });//querry "SELECT * FROM RP_Users WHERE ID = '" + uid + "'"
        });//get connection
};//exports run

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: ["henshin(beast-cancel)"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "henshin(beast)",
  description: "",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};