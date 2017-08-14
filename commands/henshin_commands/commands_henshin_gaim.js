exports.run = (client, msg) => {
		var forms = '===KOMANDA SYSTEM===\n';
		    forms += '\n===Kamen Rider Gaim===\n';
		    forms += '"!baron-driveron", "!ryugen-driveron", "!gaim-driveron", ';
		    forms += '"!bravo-driveron", "!knuckle-driveron", "!ryugen-yomi-driveron", "!jam-driveron", "!trooper-driveron", ';
		    forms += '"!saver-driveron", "!bujin-gaim-driveron", "!idunn-driveron", "!fifteen-driveron", "!mars-driveron", ';
		    forms += '"!black-gaim-driveron", "!kamuro-driveron", "!black-baron-driveron", "!maja-driveron", "!duke-driveron", ';
		    forms += '"!duke-shin-driveron", "!zengetsu-shin-driveron", "!marika-shin-driveron", "!baron-shin-driveron", ';
		    forms += '"!sid-shin-driveron", "!kurokage-shin-driveron", "!tyrant-shin-driveron"\n';
		msg.channel.sendMessage(forms);
};

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: ["gaimhenshin", "gaimcmd", "gaim"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "gaim-henshin",
  description: "List of all Gaim henshin commands.",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};