exports.run = (client, msg) => {
		var forms  = '\n===SPECIAL Commands (Info)===\n';
		    forms += '"!debug", "!specials", "!perkcmd"\n';
		    forms += '\n===SPECIAL Commands (Info)===\n';
		    forms += '"!scard **@playername**" (display target\'s or self\'s skill list)\n';
		    forms += '"!pcard **@playername**" (display target\'s or self\'s profile)\n';
		    forms += '"!me **@playername**" (display target\'s or self\'s profile)\n';
		    forms += '"!you **@playername**" (display target\'s or self\'s profile)\n';
		    forms += '"!level **@playername**" (display target\'s or self\'s level)\n';
			forms += '\n===SPECIAL Commands (Action)===\n';
		    forms += '"!powerdown", "!reset"\n';
		    forms += '"!strength+**number**", "!perception+**number**", "!endurance+**number**", "!charisma+**number**",';
		    forms += '"!intelligence+**number**", "!agility+**number**", "!luck+**number**"\n';
		    forms += '"!strength-**number**", "!perception-**number**", "!endurance-**number**", "!charisma-**number**",';
		    forms += '"!intelligence-**number**", "!agility-**number**", "!luck-**number**"\n';
		msg.channel.sendMessage(forms);
};//run

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: ["cmd", "command", "comand", "commands", "comands"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "specialcmd",
  description: "Listing of all command blocks",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};