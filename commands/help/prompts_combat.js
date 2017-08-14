exports.run = (client, msg) => {
		var forms  = '\n===Combat Commands===\n';
		    forms += '"!meditate" (A self-limited, single cast IP restore.)\n';
		    forms += '"!rest" (A self-limited, single cast AP restore.)\n';
		    forms += '"!grab x**number** **@playername**" (Attept to disarm an opponent.)\n';
		    forms += '"!snare x**number** **@playername**" (Attept to restrain an opponent.)\n';
		    forms += '"!heal x**number** **@playername**" (This will effect HP, a healing spell on your target, cost IP.)\n';
		    forms += '"!fullheal x**number** **@playername**" (This will effect HP, a more powerful healing spell on your target, cost a large ammount of IP.)\n';
		    forms += '"!flashkick **@playername**" <20 AP>, "!punch **@playername**" <10 AP>, "!kick **@playername**" <12 AP> (Basic Melee/Hand to Hand Attack on your target\'s HP, costs AP to use.)\n';
		    forms += 'There are also Optional flags you can add: \n';
		    forms += 'x**number** (sets the number of attacks for a combo)\n';
		    forms += '?**debug** (enable debug logging)\n';
		    forms += '?**crit** (if you have a banked crital strike this will use it)\n';
		    forms += '?**sneak** (toggles sneaking)\n';
		    forms += '%**<npc id>** (instead of attacking a player this targets an existing registered npc)\n';
		msg.channel.sendMessage(forms);
};//run

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: [],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "combatcmd",
  description: "Listing of all command blocks",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};