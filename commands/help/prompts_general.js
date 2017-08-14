exports.run = (client, msg) => {
		var forms  = '\n===General Commands===\n';
		    forms += '"!prayer", "!suplicate", "!doughnut", "!clams", "!hmm", ';
				forms += '"!onichan", "!robocount", "!roboknight", "!swarm"\n';
				forms += '"!slapx**number** **@playername**"\n';
				forms += '"!takaru **@playername** **+victim**"\n';
				forms += '"!eulogy **@victim**"\n';
				forms += '"!shame **@victim**"\n';
				forms += '"!masatoshimon", "!modssse", "!powerscombined", "!captainplanet", "!planet", "!gandalf", "!fly", ';
				forms += '"!gogo", "!installingmodssse", "!seworthit", "!shirts", "!sunday", "!friday", "!saturday", !time", "!toys", "!trap"\n';
				forms += '"!8ball" (question must end with a ?)\n';
				forms += '"!card" (number between 1 and 10)\n';
				forms += '"!coin" (flip a coin)\n';
				forms += '"!insult" **@mention**\n';
				forms += '"!urban" **any work**\n';
				forms += '"!yomomma" (tells a yo mamma joke)\n';
		msg.channel.sendMessage(forms);

		var forms2 = '\n===Audio Commands===\n';
		    forms2 += '"!luna", "!trigger", "!triggered", "!rickroll", "!advice", "!impossible", "!spandex", "!roboknight" , "!robocount"\n';
		    forms2 += '"!awesome", "!legoawesome", "!overawesome", "!wakeup", "!evwakeup", "!kvwakeup"\n';
				forms2 += '"!anythinggoes", "!livemore", "!journey", "!allyouneed", "!firedup", "!kita", "!nobodysperfect", "!castoff", ';
				forms2 += '"!gottabelive", "!excited", "!nofear", "!morphintime", "!breakthechain", "!thereforweare", "!mask"\n';
		    forms2 += '\n===Custom Audio Commands===\n';
		    forms2 += '"!popsong" (this will end the entire song que and RPBot will leave the voice channel)\n';
		    forms2 += '"!play **any number of youtube url seperated by spaces**"\n';
		msg.channel.sendMessage(forms2);

		var forms3 = '\n===Auto Responses===\n';
		    forms3 += '"back", "afk"\n';
		    forms3 += '\n===Auto Commands===\n';
		    forms3 += 'slap, announcements, ask Lord Kouta for forgivness, just kidding, like a freight train\n';
		    forms3 += '\n===Storytime Commands===\n';
		    forms3 += '"rpbot, read me a bedtime story", "rpbot, tell me a bedtime story", "tell me a bedtime story", "read me a bedtime story", "!storytime", "!story"\n';
		    forms3 += '\n===General Commands===\n';
		    forms3 += '"!generalcmd", "!specialcmd", "!rpcmd", "!perkcmd"\n';
		msg.channel.sendMessage(forms3);
};//run

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: ["gencmd"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "generalcmd",
  description: "Listing of all command blocks",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};