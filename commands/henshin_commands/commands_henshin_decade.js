exports.run = (client, msg) => {
		var forms = '===KOMANDA SYSTEM===\n';
		    forms += '\n===Kamen Rider Decade===\n';
		    forms += '"!decade-driveron", "!diend-driveron"\n';
		msg.channel.sendMessage(forms);
};

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: ["decadehenshin", "decadecmd", "decade"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "decade-henshin",
  description: "List of all Decade henshin commands.",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};