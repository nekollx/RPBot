exports.run = (client, msg) => {
		var forms = '===KOMANDA SYSTEM===\n';
		    forms += '\n===Kamen Rider Fourze===\n';
		    forms += '"!fourze-driveron", "!meteor-driveron", "!nadashiko-driveron"\n';
		msg.channel.sendMessage(forms);
};

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: ["fourzehenshin", "fourzecmd", "fourze"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "fourze-henshin",
  description: "List of all Fourze henshin commands.",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};