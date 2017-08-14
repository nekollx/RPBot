exports.run = (client, msg) => {
		var forms = '===KOMANDA SYSTEM===\n';
		    forms += '\n===Kamen Rider Wizard===\n';
		    forms += '"ring-gold", "ring-silver", "ring-white", "ring-engage", "ring-engage-fourze", "ring-engage-beast", "ring-chimarise", "ring-griphon", ';
		    forms += '"ring-kick-strike", "ring-dragorise", "ring-connect", "ring-small", "ring-defend", "ring-sleep", "ring-big", "ring-light", "ring-please", ';
		    forms += '"ring-liquid", "ring-bind", "ring-copy", "ring-drill", "ring-smell", "ring-extend", "ring-christmas", "ring-dressup", "ring-excite", ';
		    forms += '"ring-special", "ring-blizard", "ring-thunder", "ring-gravity", "ring-hope", "ring-fall", "ring-teleport", "ring-time", "ring-miracle", ';
		    forms += '"ring-sentai", "ring-flower", "ring-chipuipui", "ring-dance", "ring-explosion", "ring-eclipse"\n';
		    forms += '"ring-garuda", "ring-whitegaruda", "ring-unicorn", "ring-kraken", "ring-golem", "ring-cerberus"\n';
		    forms += '"ring-barricade", "ring-clear", "ring-confuse", "ring-congradulations", "ring-control", "ring-dark", ';
		    forms += '"ring-delicious", "ring-ear", "ring-eye", "ring-flash", "ring-gamble", "ring-happybirthday", ';
		    forms += '"ring-highspeed", "ring-knock", "ring-note", "ring-perfume", "ring-poison", "ring-psychokinesis", ';
		    forms += '"ring-seal", "ring-shutup", "ring-riderrush-h", "ring-riderrush-s"\n';
		    forms += '"ring-falco", "ring-chameleo", "ring-dolphi", "ring-buffa"\n';
		    forms += 'all commands are proceeded by a exclamantion point (!)\n';
		msg.channel.sendMessage(forms);
};

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: ["wizardrings"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "wizard-rings",
  description: "List of all Wizard spell commands.",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};