exports.run = (client, msg) => {
	var forms0  = '===Admin Commands===\n';
		forms0 += '"!admincmd" (Commands only Admins can use)\n';
		forms0 += '\n===Rider Commands===\n';
		forms0 += '"!henshincmd", "!ridercmd", "!wizardcmd", "!combatcmd", "!itemcmd"\n';
	msg.channel.send(forms0);

	var forms = '\n===Character Creation Commands===\n';
		forms += '"!setheight **<Number>** **@playername**" (Changes the target\'s height in cm (we auto convert it to feet don\'t worry).)\n';
		forms += '"!setweight **<Number>** **@playername**" (Changes the target\'s weight in lbs.)\n';
		forms += '"!setfitness **<Number>** **@playername**" (Changes the target\'s Fitness Grade.)\n';
		forms += '"!sexchange (Changes the target\'s sex between male and female Grade.)\n';
		forms += '"!forms **<Series ID>** **@playername**" (show all default forms by series for the specified user, or yourself if none specified, will show All if no series Id is provide aor just the info for that series if it is)\n';
		forms += '"!listbio **@playername**" (show all bios for the targeted user, or yourself if none specified.)\n';
	msg.channel.send(forms);

	var formsa = '"!addform **<Series ID>** **<Rider ID>**" (Sets the default form name like "Kamen Rider Brave" or "Kamen Rider OOOs" or "Kamen Rider Fourze" for the specified Series)\n';
		formsa += '"!addsub1 **<Series ID>** **<Rider ID>**" (Sets the default sub form name like "Taddle Quest" or "Taka Medal" or "Rocket Module" for the specified Series)\n';
		formsa += '"!addsub2 **<Series ID>** **<Rider ID>**" (Sets the default secondary sub form name like "DoReMeFa Beets" or "Tora Medal" or "Drill Module" for the specified Series)\n';
		formsa += '"!addsub3 **<Series ID>** **<Rider ID>**" (Sets the default tritary sub form name like "Hyper Muteki" or "Batta Medal" or "Chain Array Module" for the specified Series)\n';
		formsa += '"!addsub4 **<Series ID>** **<Rider ID>**" (Sets the default quad sub form name like "Radar Module" for the specified Series)\n';
		formsa += '"!addbio `**<Series ID>**`**<bio, spaces can be used>**" (Sets the default bio for the specified Series, unlike the others where are space seperated to enable the use of spaces and ~~strikethrough~~ the series id is wraped in tick marks (**`**))\n';
		formsa += '"!addname `**<Series ID>**`**<character name, spaces can be used>**" (Sets the default name for the specified Series, unlike the others where are space seperated to enable the use of spaces and ~~strikethrough~~ the series id is wraped in tick marks (**`**))\n';
		formsa += '"!addpic **<Series ID>** **<url to image>**" (Sets the default image for that form and that series)\n';
		formsa += '"!addpic2 **<Series ID>** **<url to image>**" (Sets the secondary image for that form and that series)\n';
	msg.channel.send(formsa);

	var formsb = '"!mystrength **<Series ID>** **<Value>**" (Sets the default strength for the specified character, uses a portion of that characters 28 free "SPECIAL" Points.)\n';
		formsb += '"!myperception **<Series ID>** **<Value>**" (Sets the default  perception for the specified character, uses a portion of that characters 28 free "SPECIAL" Points.)\n';
		formsb += '"!myendurance **<Series ID>** **<Value>**" (Sets the default endurance for the specified character, uses a portion of that characters 28 free "SPECIAL" Points.)\n';
		formsb += '"!mycharisma **<Series ID>** **<Value>**" (Sets the default charisma for the specified character, uses a portion of that characters 28 free "SPECIAL" Points.)\n';
		formsb += '"!myintelligence **<Series ID>** **<Value>**" (Sets the default intelligence for the specified character, uses a portion of that characters 28 free "SPECIAL" Points.)\n';
		formsb += '"!myagility **<Series ID>** **<Value>**" (Sets the default agility for the specified character, uses a portion of that characters 28 free "SPECIAL" Points.)\n';
		formsb += '"!myluck **<Series ID>** **<Value>**" (Sets the default luck for the specified character, uses a portion of that characters 28 free "SPECIAL" Points.)\n';
		formsb += '"!mygender **<Series ID>**" (Switches the default gender for the specified Character)\n';
		formsb += '"!myheight **<Series ID>** **<Value>**" (Sets the default height (in cm) for the specified Character)\n';
		formsb += '"!myweight **<Series ID>** **<Value>**" (Sets the default weight (in lbs) for the specified Character)\n';
		formsb += '"!myrace **<Series ID>** **<Value>**" (Sets the default race for the specified Character)\n';
		formsb += '"!myfitness **<Series ID>** **<Value>**" (Sets the default fitness rank for the specified Character, from !listfitness)\n';
	msg.channel.send(formsb);

	var forms2 = '\n===Roleplay Info Commands===\n';
		forms2 += '"!listweapons" (Lists all weapons and their IDs)\n';
		forms2 += '"!listskills" (Lists all skills and their IDs)\n';
		forms2 += '"!listclass" (Lists all classes and their IDs)\n';
		forms2 += '"!listfitness" (Lists all fitness titles and their IDs)\n';
		forms2 += '"!listgender" (Lists all gender titles and their IDs)\n';
		forms2 += '"!listrace" (Lists all race titles and their IDs)\n';
		forms2 += '"!listdamage" (Lists all damage types and their IDs)\n';
		forms2 += '"!liststyle" (Lists all combat styles and their IDs)\n';
		forms2 += '"!listseries" (Lists all series (sentai/rider/etc) and their IDs)\n';
		forms2 += '"!listrider" (Lists all premade riders/senshi and their IDs)\n';
		forms2 += '"!listridersubs" (Lists all premade riders/senshi sub forms, ie {Orange Arms}, {Mighty Action X}, and their IDs)\n';
		forms2 += '"!listweapons" (Lists all weapons in the system and their IDs)\n';
		forms2 += '"!listarmors" (Lists all armors in the system and their IDs)\n';
		forms2 += '"!listitems" **filter**, ie "gashat" (Lists all items in the system and their IDs, the filter is optional)\n';
		forms2 += '"!listkeyless" (Lists all items without sub forms set, ie {Orange Arms}, {Mighty Action X}, and their IDs)\n';
		forms2 += '"!listlevelless" (Lists all items without levels, ie {Orange Arms}, {Mighty Action X}, and their IDs)\n';
		forms2 += '"!listpicless" (Lists all items without pictures, ie {Orange Arms}, {Mighty Action X}, and their IDs)\n';
	msg.channel.send(forms2);

	var forms3 = '\n===NPC Commands===\n';
		forms3 += '"!npcs" (List All NPCs. can be filtered to just a specific npc if you know the ID Number ie "!npcs 1" will just display Chronos)\n';
		forms3 += '"!addnpc `**<Series ID>**`**<name, spaces are allowed>**" (Creates a new NPC record, this this allows spaces the Series ID is not seleated by a space but rather tick marks)\n';
		forms3 += '"!npcname `**<NPC ID>**`**<name, spaces are allowed>**" (Changes the name of an existing NPC)\n';
		forms3 += '"!npcbio `**<NPC ID>**`**<name, spaces are allowed>**" (Sets a short bio for the specified NPC)\n';
		forms3 += '"!npcavatar **<NPC ID>** **<URL to Image>**" (Sets the default image/avatar for the specified NPC)\n';
		forms3 += '"!npcstrength **<NPC ID>** **<Value>**" (Sets the default strength for the specified NPC)\n';
		forms3 += '"!npcperception **<NPC ID>** **<Value>**" (Sets the default  perception for the specified NPC)\n';
		forms3 += '"!npcendurance **<NPC ID>** **<Value>**" (Sets the default endurance for the specified NPC)\n';
		forms3 += '"!npccharisma **<NPC ID>** **<Value>**" (Sets the default charisma for the specified NPC)\n';
		forms3 += '"!npcintelligence **<NPC ID>** **<Value>**" (Sets the default intelligence for the specified NPC)\n';
		forms3 += '"!npcagility **<NPC ID>** **<Value>**" (Sets the default agility for the specified NPC)\n';
		forms3 += '"!npcluck **<NPC ID>** **<Value>**" (Sets the default luck for the specified NPC)\n';
		forms3 += '"!npcpower **<NPC ID>** **<Value>**" (Sets the default power for the specified NPC)\n';
		forms3 += '"!npcgender **<NPC ID>** **<Value>**" (Sets the default gender for the specified NPC)\n';
		forms3 += '"!npcheight **<NPC ID>** **<Value>**" (Sets the default height (in cm) for the specified NPC)\n';
		forms3 += '"!npcweight **<NPC ID>** **<Value>**" (Sets the default weight (in lbs) for the specified NPC)\n';
		forms3 += '"!npcrace **<NPC ID>** **<Value>**" (Sets the default race for the specified NPC)\n';
		forms3 += '"!npcfitness **<NPC ID>** **<Value>**" (Sets the default fitness rank for the specified NPC, from !listfitness)\n';
		forms3 += '"!npclevel **<NPC ID>** **<Value>**" (Gives extra levels seperate from power for the specified NPC)\n';
	msg.channel.send(forms3);

	var forms3a = '"!npchp **<NPC ID>** **<Value>**" (Gives extra HP for the specified NPC)\n';
		forms3a += '"!npcap **<NPC ID>** **<Value>**" (Gives extra AP for the specified NPC)\n';
		forms3a += '"!npcip **<NPC ID>** **<Value>**" (Gives extra IP for the specified NPC)\n';
		forms3a += '"!npcbresist **<NPC ID>** **<Value>**" (Gives extra Balistic Resist for the specified NPC)\n';
		forms3a += '"!npcfresist **<NPC ID>** **<Value>**" (Gives extra Fire Resist for the specified NPC)\n';
		forms3a += '"!npccresist **<NPC ID>** **<Value>**" (Gives extra Cryo Resist for the specified NPC)\n';
		forms3a += '"!npcpresist **<NPC ID>** **<Value>**" (Gives extra Posion Resist for the specified NPC)\n';
		forms3a += '"!npctresist **<NPC ID>** **<Value>**" (Gives extra Toxic Resist for the specified NPC)\n';
		forms3a += '"!npcenresist **<NPC ID>** **<Value>**" (Gives extra Energy Resist for the specified NPC)\n';
		forms3a += '"!npcelresist **<NPC ID>** **<Value>**" (Gives extra Electric Resist for the specified NPC)\n';
		forms3a += '"!npcspresist **<NPC ID>** **<Value>**" (Gives extra Special Resist for the specified NPC)\n';
		forms3a += '"!npcbdt **<NPC ID>** **<Value>**" (Gives extra Balistic Damage Threshold for the specified NPC)\n';
		forms3a += '"!npcfdt **<NPC ID>** **<Value>**" (Gives extra Fire Damage Threshold for the specified NPC)\n';
		forms3a += '"!npccdt **<NPC ID>** **<Value>**" (Gives extra Cryo Damage Threshold for the specified NPC)\n';
		forms3a += '"!npcpdt **<NPC ID>** **<Value>**" (Gives extra Posion Damage Threshold for the specified NPC)\n';
		forms3a += '"!npctdt **<NPC ID>** **<Value>**" (Gives extra Toxic Damage Threshold for the specified NPC)\n';
		forms3a += '"!npcendt **<NPC ID>** **<Value>**" (Gives extra Energy Damage Threshold for the specified NPC)\n';
		forms3a += '"!npceldt **<NPC ID>** **<Value>**" (Gives extra Electic Damage Threshold for the specified NPC)\n';
		forms3a += '"!npcspdt **<NPC ID>** **<Value>**" (Gives extra Special Damage Threshold for the specified NPC)\n';
	msg.channel.send(forms3a);

	var forms4 = '\n===Item Manipulation Commands (Mods or higher only)===\n';
		forms4 += '"!itemsize **<Item ID>** **<Value>**" (Sets the number of slots on the drive this items takes up, most are 1, but say a Dual Gashat takes up 2, Fourzes Magnet takes up 2, but Hyper Muteki since it can be used with other gashats is 0)\n';
		forms4 += '"!itemseries **<Item ID>** **<Value>**" (Sets the series ID this item is from.)\n';
		forms4 += '"!itemweight **<Item ID>** **<Value>**" (Sets weight of the item, we use 0.25 to represent a single slot gashat so scale acordingly)\n';
		forms4 += '"!itemdamageclass **<Item ID>** **<Value>**" (Sets damage class of the item, ie "Balastic", "Fire", Etc, not useful for all items.)\n';
		forms4 += '"!itempic **<Item ID>** **<URL to Image>**" (Sets the default image/avatar for the specified item)\n';
		forms4 += '"!itempic2 **<Item ID>** **<URL to Image>**" (Sets the secondary image/avatar for the specified item)\n';
		forms4 += '"!itemname **<Item ID>** **<new name>**" (Sets the default name for the specified item)\n';
		forms4 += '"!itemdmglow **<Item ID>** **<Value>**" (Sets the default low damage or power for the specified item)\n';
		forms4 += '"!itemdmghigh **<Item ID>** **<Value>**" (Sets the default high damage or power for the specified item)\n';
		forms4 += '"!itemkey1 **<Item ID>** **<Value>**" (Sets the default primary key from !listridersubs for the specified item)\n';		
		forms4 += '"!itemkey2 **<Item ID>** **<Value>**" (Sets the default secondary key from !listridersubs for the specified item)\n';		
		forms4 += '"!itemkey3 **<Item ID>** **<Value>**" (Sets the default tritary key from !listridersubs for the specified item)\n';		
		forms4 += '"!itemtype **<Item ID>** **<Value>**" (Sets the default type (ie weapon 0, armor 1, item 2) useful when you acidently create an item in the wrong grouping)\n';
	msg.channel.send(forms4);

	var forms4a1 = '"!itemstrength **<Item ID>** **<Value>**" (Sets the default strength modifer for the specified item)\n';
		forms4a1 += '"!itemperception **<Item ID>** **<Value>**" (Sets the default perception modifer for the specified item)\n';
		forms4a1 += '"!itemendurance **<Item ID>** **<Value>**" (Sets the default endurance modifer for the specified item)\n';
		forms4a1 += '"!itemcharisma **<Item ID>** **<Value>**" (Sets the default charisma modifer for the specified item)\n';
		forms4a1 += '"!itemintelligence **<Item ID>** **<Value>**" (Sets the default intelligence modifer for the specified item)\n';
		forms4a1 += '"!itemagility **<Item ID>** **<Value>**" (Sets the default agility modifer for the specified item)\n';
		forms4a1 += '"!itemluck **<Item ID>** **<Value>**" (Sets the default luck modifer for the specified item)\n';
	msg.channel.send(forms4a1);

	var forms4a = '"!itemballistic **<Item ID>** **<Value>**" (Sets the default ballistic resist for the specified item)\n';
		forms4a += '"!itemfire **<Item ID>** **<Value>**" (Sets the default fire resist for the specified item)\n';
		forms4a += '"!itemcryo **<Item ID>** **<Value>**" (Sets the default cryo resist for the specified item)\n';
		forms4a += '"!itemposion **<Item ID>** **<Value>**" (Sets the default posion resist for the specified item)\n';
		forms4a += '"!itemtoxic **<Item ID>** **<Value>**" (Sets the default toxic resist for the specified item)\n';
		forms4a += '"!itemenergy **<Item ID>** **<Value>**" (Sets the default energy resist for the specified item)\n';
		forms4a += '"!itemelectric **<Item ID>** **<Value>**" (Sets the default electric resist for the specified item)\n';
		forms4a += '"!itemspecial **<Item ID>** **<Value>**" (Sets the default special resist for the specified item)\n';
		forms4a += '"!itemballistic_dt **<Item ID>** **<Value>**" (Sets the default ballistic damage threshold for the specified item)\n';
		forms4a += '"!itemfire_dt **<Item ID>** **<Value>**" (Sets the default fire damage threshold for the specified item)\n';
		forms4a += '"!itemcryo_dt **<Item ID>** **<Value>**" (Sets the default cryo damage threshold for the specified item)\n';
		forms4a += '"!itemposion_dt **<Item ID>** **<Value>**" (Sets the default posion damage threshold for the specified item)\n';
		forms4a += '"!itemtoxic_dt **<Item ID>** **<Value>**" (Sets the default toxic damage threshold for the specified item)\n';
		forms4a += '"!itemenergy_dt **<Item ID>** **<Value>**" (Sets the default energy damage threshold for the specified item)\n';
		forms4a += '"!itemelectric_dt **<Item ID>** **<Value>**" (Sets the default electric damage threshold for the specified item)\n';
		forms4a += '"!itemspecial_dt **<Item ID>** **<Value>**" (Sets the default special damage threshold for the specified item)\n';
		forms4a += '"!itemHP **<Item ID>** **<Value>**" (Sets the default HP buff for the specified item)\n';
		forms4a += '"!itemAP **<Item ID>** **<Value>**" (Sets the default AP buff for the specified item)\n';
		forms4a += '"!itemIP **<Item ID>** **<Value>**" (Sets the default IP buff for the specified item)\n';
	msg.channel.send(forms4a);
};//run

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: ["command", "comand", "commands", "comands"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "rpcmd",
  description: "Listing of all command blocks",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};