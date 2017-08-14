exports.run = (client, msg) => {
		var forms  = '===Perk Commands (Info)===\n';
		    forms += '"!ghoulish", "!bulletsponge", "!bullet-sponge", "!immolated", "!frozen", "!charged"\n';
		    forms += '"!venemous", "!resonating", "!antitoxin", "!aquaboy", "!aqua-boy", "!aquagirl", "!aqua-girl"\n';
		    forms += '"!cannibal", "!chemresistant", "!chem-resistant", "!chilled",  "!fireproof", "!leadbelly"\n';
		    forms += '"!lead-belly", "!lifegiver", "!radresist", "!rad-resist", "!solarpowered", "!solar-powered"\n';
		    forms += '"!toughness", "!adamantiumskeleton", "!adamantium-skeleton", "!attackdog", "!attack-dog"\n';
		    forms += '"!blackwidow", "!black-widow", "!capcollector", "!cap-collector", "!inspirational"\n';
		    forms += '"!intimidation", "!ladykiller", "!lady-killer", "!localleader", "!local-leader"\n';
		    forms += '"!lonewanderer", "!lone-wanderer", "!partyboy", "!party-boy", "!partygirl", "!party-girl"\n';
		    forms += '"!sexappeal", "!sex-appeal", "!wastelandwhisperer", "!wasteland-whisperer", "!animalfriend"\n';
		    forms += '"!animal-friend", "!blitz", "!commando", "!gunfu", "!gunslinger", "!konoichi", "!mistersandman"\n';
		    forms += '"!mister-sandman", "!movingtarget", "!moving-target", "!ninja", "!quickhands", "!quick-hands"\n';
		    forms += '"!sneak", "!actionboy", "!action-boy", "!actiongirl", "!action-girl", "!ricochet"\n';
		    forms += '"!mysteriousstranger", "!mysterious-stranger", "!missfortune", "!miss-fortune", "!idiotsevant", "!idiot-sevant"\n';
		    forms += '"!grimreaperssprint", "!grim-reapers-sprint", "!fourleafclover", "!four-leaf-clover"\n';
		    forms += '"!fortunefinder", "!fortune-finder", "!criticalbanker", "!critical-banker", "!bettercriticals"\n';
		    forms += '"!better-criticals", "!bloodymess", "!bloody-mess", "!vans", "!scrapper", "!science"\n';
		    forms += '"!roboticsexpert", "!robotics-expert", "!physicist", "!nerdrage", "!nerd-rage", "!medic", "!magick"\n';
		    forms += '"!magicexpert", "!magic-expert", "!hacker", "!gunnut", "!gun-nut", "!chemist", "!scrounger"\n';
		    forms += '"!rifleman", "!refractor", "!pickpocket", "!penetrator", "!nightperson", "!night-person"\n';
		msg.channel.sendMessage(forms);
		var forms2  = '"!locksmith", "!demolitionsexpert", "!demolitions-expert", "!demoexpert", "!demo-expert"\n';
		    forms2 += '"!concentratedfire", "!concentrated-fire", "!awareness", "!sniper", "!basher", "!bigleagues"\n';
		    forms2 += '"!big-leagues", "!blacksmith","!heavygunner", "!heavy-gunner", "!ironfist", "!iron-fist"\n';
		    forms2 += '"!paintrain", "!pain-train", "!rooted", "!steadyaim", "!steady-aim", "!strongback"\n';
		    forms2 += '"!strong-back", "!armorer"\n\n';
				forms2 += '===Perk in Development Commands===\n';
		    forms2 += '"!brain", "!heart", "!counter-culture", "!bannon"\n';
		    forms2 += '"!chaser", "!angel", "!krim", "!lupine", "!zombie"\n\n';
				forms2 += '===Perk Commands (Player)===\n';
		    forms2 += '"!strength-perk**<space>**+**number**", "!perception-perk**<space>**+**number**"\n';
		    forms2 += '"!endurance-perk**<space>**+**number**", "!charisma-perk**<space>**+**number**"\n';
		    forms2 += '"!intelligence-perk**<space>**+**number**", "!agility-perk**<space>**+**number**"\n';
		    forms2 += '"!luck-perk**<space>**+**number**"\n';
		    forms2 += 'To add a perk simple used the info comand with **<space>**+*number* added on the end.\n';
		    forms2 += 'IE for 3 ranks of Iron Fist use, "!ironfist +3" for 1 rank of armorer used "!armorer +1", ';
		    forms2 += 'for 17 ranks of luck use "!luck-perk +17", to **remove** 7 ranks of Strength use "!strength-perk -7" etc.';
				forms2 += '\n\n"!clear-perks" (clears all your perks for a fresh reset)';
		msg.channel.sendMessage(forms2);
};//run

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: ["perks", "perkscmd"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "perkcmd",
  description: "Listing of all command blocks",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};