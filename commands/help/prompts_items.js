exports.run = (client, msg) => {
		var forms  = '\n===Item Commands===\n';
		    forms += '"!inv **@playername**" (Lists the target\'s inventory)\n';
		    forms += '"!addinv **<item id>**" (Add the item with the ID to the user\'s inventory)\n';
		    forms += '"!drop **<item id>**" (Drops the item with the ID from the user\'s inventory)\n';
		    forms += '"!createweapon **<name>** **<Damage Floor>** **<Damage Celing>** **<Upgrade Skill ID>** **<Main Skill ID>** **<Secondary Skill ID>** **<Triitary Skill ID>** **<Damage Type ID>**" (Add a new weapon to the system)\n';
		    forms += '"!createarmor **<name>** **<Defense Floor>** **<Defense Celing>** **<Upgrade Skill ID>** **<Main Skill ID>** **<Secondary Skill ID>** **<Triitary Skill ID>** **<Damage Type ID>**" (Add a new armor to the system)\n';
		    forms += '"!createitem **<name>**" (Add a new item to the system)\n';
		    forms += '"!listweapon" (Lists all weapons)\n'; 
		    forms += '"!listarmors" (Lists all armors)\n';
		    forms += '"!listitems" (Lists all items)\n';
		    forms += '"!showcase **<item id>**" (display info on a particular item)\n';
		    forms += '"!editweapon **<item id>** **<name>** **<Damage Floor>** **<Damage Celing>** **<Upgrade Skill ID>** **<Main Skill ID>** **<Secondary Skill ID>** **<Triitary Skill ID>** **<Damage Type ID>**" (Add a new weapon to the system)\n';
		    forms += '"!editarmor **<item id>** **<name>** **<Defense Floor>** **<Defense Celing>** **<Upgrade Skill ID>** **<Main Skill ID>** **<Secondary Skill ID>** **<Triitary Skill ID>** **<Damage Type ID>**" (Add a new armor to the system)\n';
		    forms += '"!edititem **<item id>** **<name>**" (Add a new item to the system)\n';
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
  name: "itemcmd",
  description: "Listing of all command blocks",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};