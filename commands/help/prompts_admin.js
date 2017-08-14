exports.run = (client, msg) => {
	var forms = '\n===Admin Commands===\n';
		forms += '"!power **number** **@playername**" (Add or Remove a Power Multiplier to a player that is added on top of henshin multipliers)\n';
		forms += '"!hp **number** **@playername**" (Add or Remove bonus HP, this is on top of your normal HP Multipliers but is not effected by said multipliers it\'s a flat gain)\n';
		forms += '"!mp **number** **@playername**" or "!ap **number** **@playername**" (Add or Remove bonus AP,  this is on top of your normal AP Multipliers but is not effected by said multipliers it\'s a flat gain)\n';
		forms += '"!ip **number** **@playername**" (Add or Remove bonus IP,  this is on top of your normal IP Multipliers but is not effected by said multipliers it\'s a flat gain)\n';
      	forms += '"!strength **number** **@playername**" (Add or Remove bonus Strength, Functionally the same as the SPECIAL Perk)\n';
		forms += '"!perception **number** **@playername**" (Add or Remove bonus Perception, Functionally the same as the SPECIAL Perk)\n';
		forms += '"!endurance **number** **@playername**" (Add or Remove bonus Endurance, Functionally the same as the SPECIAL Perk)\n';
		forms += '"!charisma **number** **@playername**" (Add or Remove bonus Charisma, Functionally the same as the SPECIAL Perk)\n';
		forms += '"!intelligence **number** **@playername**" (Add or Remove bonus Intelligence, Functionally the same as the SPECIAL Perk)\n';
		forms += '"!agility **number** **@playername**" (Add or Remove bonus Agility, Functionally the same as the SPECIAL Perk)\n';
		forms += '"!luck **number** **@playername**" (Add or Remove bonus Luck, Functionally the same as the SPECIAL Perk)';
  	msg.channel.send(forms);

  	var forms2 = '"!bresist **number** **@playername**" (Add or Remove bonus Ballistic Resist)\n';
		forms2 += '"!fresist **number** **@playername**" (Add or Remove bonus Fire Resist)\n';
		forms2 += '"!cresist **number** **@playername**" (Add or Remove bonus Cryo Resist)\n';
		forms2 += '"!tresist **number** **@playername**" (Add or Remove bonus Toxic Resist)\n';
		forms2 += '"!eresist **number** **@playername**" (Add or Remove bonus Electric Resist)\n';
		forms2 += '"!enresist **number** **@playername**" (Add or Remove bonus Energy Resist)\n';
		forms2 += '"!presist **number** **@playername**" (Add or Remove bonus Posion Resist)\n';
		forms2 += '"!sresist **number** **@playername**" (Add or Remove bonus Special Resist)\n';
		forms2 += '"!bdt **number** **@playername**" (Add or Remove bonus Ballistic Damage Threshhold)\n';
		forms2 += '"!fdt **number** **@playername**" (Add or Remove bonus Fire Damage Threshhold)\n';
		forms2 += '"!cdt **number** **@playername**" (Add or Remove bonus Cryo Damage Threshhold)\n';
		forms2 += '"!tdt **number** **@playername**" (Add or Remove bonus Toxic Damage Threshhold)\n';
		forms2 += '"!edt **number** **@playername**" (Add or Remove bonus Electricity Damage Threshhold)\n';
		forms2 += '"!endt **number** **@playername**" (Add or Remove bonus Energy Damage Threshhold)\n';
		forms2 += '"!pdt **number** **@playername**" (Add or Remove bonus Posion Damage Threshhold)\n';
		forms2 += '"!sdt **number** **@playername**" (Add or Remove bonus Special Damage Threshhold)\n';
		forms2 += '"!special **number** **@playername**" (Add or Remove bonus SPECIAL Points)\n';
		forms2 += '"!class **number** **@playername**" (Sets a default class like Overlord, Test dummy, Kamen Rider, a cosmentic change)\n';
		forms2 += '"!level **number** **@playername**" (Add or Remove bonus levels)';
  	msg.channel.send(forms2);
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
  name: "admincmd",
  description: "Listing of all command blocks",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};