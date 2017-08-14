exports.run = (client, msg) => {
		var forms = '===KOMANDA SYSTEM===\n';
		    forms += '\n===Kamen Rider Double===\n';
		    forms += '"!double-driveron", "!lost-driveron", "!accell-driveron"\n';
		msg.channel.sendMessage(forms);
};

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: ["doublehenshin", "doublecmd", "double"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "double-henshin",
  description: "List of all Double henshin commands.",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};