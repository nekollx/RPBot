const discord = require ('discord.js');
var Client   =    require('mysql');
var settings = require('../../settings.js');
var randomHex = require('random-hex');
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
        var playeruid = msg.author.id;
        var ClassID = 0;
        var PowerM = 1;
        var ClassIDsub = 0;
        const RiderEmbed = new discord.RichEmbed()
              RiderEmbed.setColor('#C0C0C0')
              RiderEmbed.setTimestamp()
              RiderEmbed.setURL('http://www.maskedriders.info/Mee6RP/index.php')
	      RiderEmbed.setThumbnail('http://www.maskedriders.info/Mee6RP/statusPic/Icon-wizard.png')

        if (msg.content.endsWith("2")){
                RiderEmbed.addField('Driver On', 'Now!', true)
                RiderEmbed.addField('Summon', 'WhiteWizarDriver.', true)
                RiderEmbed.setThumbnail('http://www.maskedriders.info/Mee6RP/statusPic/White_Driver_On.jpg')
                RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/Incubator.png')
        } else if ((msg.content.startsWith("!b")) || (msg.content.startsWith("!sb"))){
                RiderEmbed.addField('Driver On', 'Go!', true)
                RiderEmbed.setThumbnail('http://www.maskedriders.info/Mee6RP/statusPic/BeastDriverOn.PNG')
                RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/Beastdriver.png')
        } else {
                RiderEmbed.addField('Driver On', 'Please.', true)
                RiderEmbed.addField('Summon', 'WizarDriver.', true)
                RiderEmbed.setThumbnail('http://www.maskedriders.info/Mee6RP/statusPic/WizardBeltRing.jpg')
                RiderEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/WizardBelt.jpg')
        };//if else

        if (msg.content.startsWith("!b")){
                RiderEmbed.addField('Summon', 'BeastDriver.', true)
        } else if (msg.content.startsWith("!sb")){
                RiderEmbed.addField('Summon', 'BeastDriver (Magic Land).', true)
        };//if/else

        if (msg.content.startsWith("!wiseman")){
                RiderEmbed.setFooter('Data Card ~ Wiseman', settings.serverpic)
                ClassID = 5100;
        } else if (msg.content.startsWith("!sbeast")){
                RiderEmbed.setFooter('Data Card ~ Beast (Magic Land)', settings.serverpic)
                ClassID = 5140;
        } else if (msg.content.startsWith("!beast")){
                RiderEmbed.setFooter('Data Card ~ Beast', settings.serverpic)
                ClassID = 5130;
        } else if (msg.content.startsWith("!sorcerer")){
                RiderEmbed.setFooter('Data Card ~ Sorcerer', settings.serverpic)
                ClassID = 5120;
        } else if (msg.content.startsWith("!mage")){
                RiderEmbed.setFooter('Data Card ~ Mage', settings.serverpic)
                ClassID = 5110;
	} else if (msg.content.startsWith("!wizard")){
                RiderEmbed.setFooter('Data Card ~ Wizard', settings.serverpic)
                ClassID = 5000;
        };//if else
        settings.UserList.get(playeruid).CLASS_ID = ClassID;
        settings.UserList.get(playeruid).CLASS_ID_Sub = ClassIDsub;
        settings.UserList.get(playeruid).CLASS_ID_Sub2 = 0;
        settings.UserList.get(playeruid).CLASS_ID_Sub3 = 0;
        settings.UserList.get(playeruid).CLASS_ID_Sub4 = 0;
        settings.UserList.get(playeruid).Power_Mult = PowerM;
        var SQL_String = "UPDATE " + settings.dbtable + " ";
                SQL_String += "SET ";
                SQL_String += "CLASS_ID = "+ClassID+", CLASS_ID_Sub = 0, ";
                SQL_String += "CLASS_ID_Sub2 = 0, CLASS_ID_Sub3 = 0, ";
                SQL_String += "CLASS_ID_Sub4 = 0, Power_Mult = "+PowerM+" ";
                SQL_String += "WHERE ID = '" + playeruid + "'";
        dbclient.query(SQL_String);
        msg.channel.send({embed: RiderEmbed});
};//exports run

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: ["wizard-driveron2", 
            "wiseman-driveron", "wiseman-driveron2", 
            "sorcerer-driveron", "sorcerer-driveron2", 
            "mage-driveron", "mage-driveron2", 
            "beast-driveron", "sbeast-driveron"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: []
};//exports conf

exports.help = {
  name: "wizard-driveron",
  description: "",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};//exports help