exports.run = (client, msg) => {
		var forms = '';
		var forms2 = '';
		    forms += '\n===Kamen Rider Ex-Aid===\n';
		    forms += '\n"!gamer-driveron", "!bugster-driveron", "!bugster2-driveron",'; 
			forms += '"player-driveron", "!perfect-driveron", "!knockout-driveron", "!cronicle-driveron"';
		    forms += '\n"!Henshin", "!Infection"';
			forms += '\n\nGashats use a format like this: "!henshin! 16';
			forms += '\nRider form is pulled from your "!listforms" inventory and isn\'t needed to be specified.';

			forms2 += '\nFor different forms change the id number of the gashat found with !listitems ';
			forms2 += 'or !inv, you *can* target other players with @mention to help them henshin **but** it ';
			forms2 += 'will only work if either the target or activator have the gashat and proper drivers in ';
			forms2 += 'either of their inventories.'; 
		    //forms += '"I\'m a Kamen Rider!(E)", "I\'m a Kamen Rider!(B)", "I\'m a Kamen Rider!(S)", "I\'m a Kamen Rider!(L)", ';
		    //forms += '"I\'m a Kamen Rider!(R)", "I\'m a Kamen Rider!(A)", "I\'m a Kamen Rider!(T)", "I\'m a Kamen Rider!(O)", ';
		    //forms += '"I\'m a Kamen Rider!(K)", "I\'m a Kamen Rider!(H)", "I\'m a Kamen Rider!(X)", "I\'m a Kamen Rider!(F)"\n';
		    //forms += 'you can also try the above comands in all lowercase and without the apostrophy, or just the leter in parems, ie. (f), (F).\n\n';
		for (x = 0; x < 4; x++){
			if (x == 0){msg.channel.sendMessage(forms);}
			if (x == 3){msg.channel.sendMessage(forms2);}
		};//for
};

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: [],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "exaidcmd",
  description: "List of all exaid commands.",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};