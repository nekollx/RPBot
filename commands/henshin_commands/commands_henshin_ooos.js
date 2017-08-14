exports.run = (client, msg) => {
		var forms = '===KOMANDA SYSTEM===\n';
		    forms += '\n===Kamen Rider OOO===\n';
		    forms += '"!ooos-driveron", "!birth-driveron", "!protobirth-driveron"\n';
		    forms += '"!henshin(ooo) *any three or more words seperated by spaces. If more then three words, then three will be chosen at random*\n"';
		    forms += 'Reconized medals are:\n';
		    forms += 'taka, kujaku, condor, kuwagta, kamakiri, batta, lion, tora, cheetah\n';
		    forms += 'sai, gorilla, zou, shachi, unagi, tako, ptera, tricera, tyranno, cobra, kame, wani\n';
		    forms += 'sasori, kani, ebi, same, kujira, ookamiuo, imagin, shocker, panda, kangaroo, x, amazon, and stronger."\n';
		    forms += 'super taka, super tora, super batta\n';
		msg.channel.sendMessage(forms);
};

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: ["oooshenshin", "oooscmd", "ooos"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "ooos-henshin",
  description: "List of all OOOs henshin commands.",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};