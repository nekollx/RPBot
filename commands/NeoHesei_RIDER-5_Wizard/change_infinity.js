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
	      RiderEmbed.setThumbnail('http://www.maskedriders.info/Mee6RP/statusPic/Infinring.PNG')

        mysqlPool.getConnection(function(err, connection) {
        if(err) throw err;
        connection.query("SELECT * FROM " + settings.dbtable + " WHERE ID = '" + playeruid + "'", function(err,rows){
              validform = rows[0].CLASS_ID;
              RiderEmbed.setFooter('Data Card ~' + settings.PlayerClassName(validform), settings.serverpic)

                if ((validform >= 5000) && (validform < 6000)){
                            if (validform == 5100){//wiseman
                                    RiderEmbed.setDescription('Level: 8', true)
                                    connection.query("UPDATE " + settings.dbtable + " SET CLASS_ID_Sub = 5250 WHERE ID = '" + playeruid + "'");
                                    connection.query("UPDATE " + settings.dbtable + " SET Power_Mult = 9 WHERE ID = '" + playeruid + "'");
                            } else if (validform == 5120){//sorcerer
                                    RiderEmbed.setDescription('Level: 7', true)
                                    connection.query("UPDATE " + settings.dbtable + " SET CLASS_ID_Sub = 5250 WHERE ID = '" + playeruid + "'");
                                    connection.query("UPDATE " + settings.dbtable + " SET Power_Mult = 8 WHERE ID = '" + playeruid + "'");
                            } else if (validform == 5110){//mage
                                    RiderEmbed.setDescription('Level: 6', true)
                                    connection.query("UPDATE " + settings.dbtable + " SET CLASS_ID_Sub = 5250 WHERE ID = '" + playeruid + "'");
                                    connection.query("UPDATE " + settings.dbtable + " SET Power_Mult = 7 WHERE ID = '" + playeruid + "'");
                            } else if (validform == 5140){//beast in magic land
                                    RiderEmbed.setDescription('Level: 5', true)
                                    connection.query("UPDATE " + settings.dbtable + " SET CLASS_ID_Sub = 5050 WHERE ID = '" + playeruid + "'");
                                    connection.query("UPDATE " + settings.dbtable + " SET Power_Mult = 6 WHERE ID = '" + playeruid + "'");
                            } else {//wizard
                                    RiderEmbed.setDescription('Level: 5', true)
                                    connection.query("UPDATE " + settings.dbtable + " SET CLASS_ID_Sub = 5050 WHERE ID = '" + playeruid + "'");
                                    connection.query("UPDATE " + settings.dbtable + " SET Power_Mult = 6 WHERE ID = '" + playeruid + "'");
                            }//if else

                                    if (validform == 5000){
                                        RiderEmbed.addField('Infinity, Please', 'Hi-Sui-Fu-Do, Bou-Zaba-Byu-Dogon!', true)
                                        RiderEmbed.addField('Transform', 'Transforms into Infinity Style.', true)
                                        RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/Infinity.png')
                                    } else if (validform == 5140){//beast in magic land
                                        RiderEmbed.addField('Infinity', 'Go!', true)
                                        RiderEmbed.addField('Transform', 'Transforms into Infinity Style.', true)
                                    } else { 
                                        RiderEmbed.addField('All Mighty, Now!', 'Hi-Sui-Fu-Do, Bou-Zaba-Byu-Dogon!', true)
                                        RiderEmbed.addField('Transform', 'Transforms into All Mighty Style.', true)
                                    };//seperate wizard from the rest
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
  aliases: [],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "henshin(infinity)",
  description: "",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};