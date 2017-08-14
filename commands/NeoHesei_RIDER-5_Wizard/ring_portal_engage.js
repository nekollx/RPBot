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
	      RiderEmbed.setThumbnail('http://www.maskedriders.info/Mee6RP/statusPic/Engage.jpg')

        mysqlPool.getConnection(function(err, connection) {
        if(err) throw err;
        connection.query("SELECT * FROM " + settings.dbtable + " WHERE ID = '" + playeruid + "'", function(err,rows){
              validform = rows[0].CLASS_ID;
              RiderEmbed.setFooter('Data Card ~' + settings.PlayerClassName(validform), settings.serverpic)

                      if ((validform >= 5000) && (validform < 6000)){
                            if ((validform == 5100) || (validform == 5120) || (validform == 5110)){//wiseman, sorcerer, mage
                                    RiderEmbed.addField('Engage', 'Now!', true)
                                    RiderEmbed.addField('Portal', 'Enter a Gate\'s Underworld.', true)
                            } else if (validform == 5000){//wizard
                                    RiderEmbed.addField('Engage', 'Please.', true)
                                    RiderEmbed.addField('Portal', 'Enter a Gate\'s Underworld.', true)
                            } else if ((validform == 5140) || ((validform == 5130) && (msg.content.endsWith("beast")))) {//beast in magic land
                                    RiderEmbed.addField('Engage', 'Go!', true)
                                    RiderEmbed.addField('Portal', 'Enter a Gate\'s Underworld.', true)
                            } else if (validform == 5130){//beast
                                    RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/wrongrider.png')
                            }//if else

                                  if (msg.content.endsWith("beast")){
                                    RiderEmbed.setThumbnail('http://www.maskedriders.info/Mee6RP/statusPic/Beast_Engage_Ring.png')
                                  } else if (msg.content.endsWith("fourze")){
                                    RiderEmbed.setThumbnail('http://www.maskedriders.info/Mee6RP/statusPic/Engage_Fourze.JPG')
                                  }//if else

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
  aliases: ["ring-engage-fourze", "ring-engage-beast"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "ring-engage",
  description: "",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};

