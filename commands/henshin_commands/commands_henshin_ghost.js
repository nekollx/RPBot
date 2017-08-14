exports.run = (client, msg) => {
		var forms = '===KOMANDA SYSTEM===\n';
		    forms += '\n===Kamen Rider Ghost===\n';
		    forms += '"!ghost-driveron", "!specter-driveron", "!necrom-driveron", "!dark-ghost-driveron", ';
			forms += '"!zero-specter-driveron","!genma-driveron", "!extremer-driveron", "!greatful-driveron"\n';
		    //forms += '"Henshin(Ore)", "Henshin(Dark)", "Henshin(Specter)", "Henshin(SpecterN)", "Henshin(Boost)", "Henshin(Mugen)", "Henshin(Special)", "Henshin(Greatful)", ';
		    //forms += '"Henshin(Deep)", "Henshin(Deep2)", "Henshin(Sin)", "Henshin(Furbus)"\n';
		    //forms += '"Henshin(Necrom)", "Henshin(Necrom2)"\n\n';
		msg.channel.sendMessage(forms);
};

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: ["ghosthenshin", "ghostcmd", "ghost"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "ghost-henshin",
  description: "List of all Ghost henshin commands.",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};