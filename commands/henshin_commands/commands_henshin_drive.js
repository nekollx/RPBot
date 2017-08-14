exports.run = (client, msg) => {
		var forms = '===KOMANDA SYSTEM===\n';
		    forms += '\n===Kamen Rider Drive===\n';
		    forms += '"!drive-driveron" "!copy-drive-driveron", "!mach-driveron", "!proto-drive-driveron", ';
			forms += '"machine-chaser-driveron", "chaser-driveron", "zero-drive-driveron", "gold-drive-driveron", ';
			forms += '"mach-production-driveron", "lupin-driveron"\n';
		msg.channel.sendMessage(forms);
};

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: ["drivehenshin", "drivecmd", "drive"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "drive-henshin",
  description: "List of all Drive henshin commands.",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};