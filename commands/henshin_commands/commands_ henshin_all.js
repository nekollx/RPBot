exports.run = (client, msg) => {
		var forms = '===KOMANDA SYSTEM===\n';
		    //forms += '\n===Kamen Rider Kuuga===\n';
		    //forms += '\n===Kamen Rider Agito===\n';
		    //forms += '\n===Kamen Rider Ryuki===\n';
		    //forms += '\n===Kamen Rider Faiz===\n';
		    //forms += '\n===Kamen Rider Blade===\n';
		    //forms += '\n===Kamen Rider Hibiki===\n';
		    //forms += '\n===Kamen Rider Kabuto===\n';
		    //forms += '\n===Kamen Rider Den-O===\n';
		    //forms += '\n===Kamen Rider Kiva===\n';
		    forms += '\n===Kamen Rider Decade===\n';
		    forms += '"!decade-henshin"\n';
		    forms += '\n===Kamen Rider Double===\n';
		    forms += '"!double-henshin"\n';
		    forms += '\n===Kamen Rider OOO===\n';
		    forms += '"!ooos-henshin\n';
		    forms += '\n===Kamen Rider Fourze===\n';
		    forms += '"!fourze-henshin"\n';
		    forms += '\n===Kamen Rider Wizard===\n';
		    forms += '"!wizard-henshin", "!wizard-rings"\n';
		    forms += '\n===Kamen Rider Gaim===\n';
		    forms += '"!gaim-henshin"\n';
		    forms += '\n===Kamen Rider Drive===\n';
		    forms += '"!drive-henshin"\n';
		    forms += '\n===Kamen Rider Ghost===\n';
		    forms += '"!ghost-henshin"\n';
		    forms += '\n===Kamen Rider Ex-Aid===\n';
		    forms += '"!exaidcmd\n';
		msg.channel.sendMessage(forms);
};

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: ["ridercmd", "rider", "driveron"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "henshincmd",
  description: "List of all henshin commands.",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};