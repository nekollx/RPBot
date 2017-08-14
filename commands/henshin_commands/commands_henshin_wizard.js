exports.run = (client, msg) => {
		var forms = '===KOMANDA SYSTEM===\n';
		    forms += '\n===Kamen Rider Wizard===\n';
		    forms += '"wizard-driveron", "wiseman-driveron", "mage-driveron", "sorcerer-driveron", "beast-driveron", "sbeast-driveron"\n';
		    forms += '"wizard-driveron2", "wiseman-driveron2", "mage-driveron2", "sorcerer-driveron2"\n';
		    forms += '"henshin(mageo1)", "henshin(mageo2)", "henshin(mageo3)", "henshin(mageb)", "henshin(mageg)", "henshin(white)", "henshin(sorc)"\n';
		    forms += '"henshin(flame)", "henshin(huricane)", "henshin(water)", "henshin(land)", "henshin(furbus)", "henshin(infinity)"\n';
		    forms += '"henshin(flamedragon)", "henshin(huricanedragon)", "henshin(waterdragon)", "henshin(landdragon)", ';
		    forms += '"henshin(infinitydragon)", "henshin(infinitydragongold)", "henshin(alldragon)", "henshin(specialrush)"\n';
		    forms += '"henshin(beast-falco)", "henshin(beast-buffa)", "henshin(beast-chameleo)", "henshin(beast-dolphi)", "henshin(beast)", "henshin(beast-cancel)", "henshin(beast-hyper)"\n';
		    forms += 'all commands are proceeded by a exclamantion point (!)\n';
		msg.channel.sendMessage(forms);
};

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: ["wizardhenshin", "wizardcmd", "wizard"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "wizard-henshin",
  description: "List of all Wizard henshin commands.",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};