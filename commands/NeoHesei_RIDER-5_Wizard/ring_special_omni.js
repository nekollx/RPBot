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
	      RiderEmbed.setThumbnail('http://www.maskedriders.info/Mee6RP/statusPic/KRWi-White_Change.jpg')

        mysqlPool.getConnection(function(err, connection) {
        if(err) throw err;
        connection.query("SELECT * FROM " + settings.dbtable + " WHERE ID = '" + playeruid + "'", function(err,rows){
              validform = rows[0].CLASS_ID;
              RiderEmbed.setFooter('Data Card ~' + settings.PlayerClassName(validform), settings.serverpic)

                if (validform == 5130){
                      RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/wrongrider.png')
                      if (msg.content.endsWith("gold")){
                          RiderEmbed.setThumbnail('http://www.maskedriders.info/Mee6RP/statusPic/Scommonring.png')
                      } else if (msg.content.endsWith("silver")){
                          RiderEmbed.setThumbnail('http://www.maskedriders.info/Mee6RP/statusPic/Sorcerer_Common_Ring_Silver_Variant.JPG')
                      } else {
                          RiderEmbed.setThumbnail('http://www.maskedriders.info/Mee6RP/statusPic/Anillo_común_Mage.jpg')
                      }//if else
                } else {
                      if ((validform >= 5000) && (validform < 6000)){
                                  if (randomspellID == 1){
                                              RiderEmbed.addField('Telephone', 'Now!', true)
                                              RiderEmbed.addField('Special', 'Used as a replacement for telephones.', true)
                                  } else if  (randomspellID == 2){
                                              RiderEmbed.addField('Blast', 'Now!', true)
                                              RiderEmbed.addField('Attack', 'Concentrated Explosion.', true)
                                              RiderEmbed.addField('Lightning', 'Now!', true)
                                              RiderEmbed.addField('Attack', 'Upgraded Thunder.', true)
                                              RiderEmbed.addField('Tornado', 'Now!', true)
                                              RiderEmbed.addField('Attack', 'Traps the target in a multicolored cyclone.', true)
                                              RiderEmbed.addField('Arrow', 'Now!', true)
                                              RiderEmbed.addField('Attack', ' small portal appears in front of the wearers\' hands and shoots small pointed energy blasts.', true)
                                  } else if  (randomspellID == 3){
                                              RiderEmbed.addField('Vanish Strike', 'Now!', true)
                                              RiderEmbed.addField('Attack', 'Allows Sorcerer to execute his Rider Shooting attack with the Dis Halberd.', true)
                                  } else if  (randomspellID == 4){
                                              RiderEmbed.addField('Reflect', 'Now!', true)
                                              RiderEmbed.addField('Defense', 'upgraded Defend/Barrier, can also redirect the attacks it blocks.', true)
                                  } else if  (randomspellID == 5){
                                              RiderEmbed.addField('Heat ', 'Now!', true)
                                              RiderEmbed.addField('Summon', 'Emits scorching fire from user\'s body.', true)
                                              RiderEmbed.addField('Dupe', 'Now!', true)
                                              RiderEmbed.addField('Summon', 'Creates independent copies of the user or weapons.', true)
                                              RiderEmbed.addField('Grill', 'Now!', true)
                                              RiderEmbed.addField('Summon', 'Produces fire to cook food.', true)
                                              RiderEmbed.addField('Splash ', 'Now!', true)
                                              RiderEmbed.addField('Summon', 'Used to spray water.', true)
                                              RiderEmbed.addField('Donuts', 'Now!', true)
                                              RiderEmbed.addField('Summon', 'Summons giant donuts to trap Ghouls with.', true)
                                              RiderEmbed.addField('Hammer', 'Now!', true)
                                              RiderEmbed.addField('Summon', 'Summons a giant hammer from a portal.', true)
                                              RiderEmbed.addField('Curtain', 'Now!', true)
                                              RiderEmbed.addField('Summon', 'Summons a curtain to wrap around the target.', true)
                                              RiderEmbed.addField('Futon', 'Now!', true)
                                              RiderEmbed.addField('Summon', 'Summons a portable matress that can wrap around the target.', true)
                                  };//if else random spell

                                  if (msg.content.endsWith("gold")){
                                    RiderEmbed.setThumbnail('http://www.maskedriders.info/Mee6RP/statusPic/Scommonring.png')
                                  } else if (msg.content.endsWith("silver")){
                                    RiderEmbed.setThumbnail('http://www.maskedriders.info/Mee6RP/statusPic/Sorcerer_Common_Ring_Silver_Variant.JPG')
                                  } else {
                                    RiderEmbed.setThumbnail('http://www.maskedriders.info/Mee6RP/statusPic/Anillo_común_Mage.jpg')
                                  }//if else

                      } else {
                                  RiderEmbed.setThumbnail(settings.serverpic)
                                  RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/wrongrider.png')
                      };//if ((validform
                };//if beast id

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
  aliases: ["ring-silver", "ring-white"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "ring-gold",
  description: "",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};

