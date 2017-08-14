exports.run = (client, msg) => {
		msg.channel.sendMessage('Sorry ' + msg.author.username +' that section isn\'t ready yet.');
};

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: [
            "kivacmd", "kiva", "kiva-henshin",
            "den-ocmd", "den-o", "den-o-henshin",
            "denocmd", "deno", "deno-henshin",
            "kabutocmd", "kabuto", "kabuto-henshin",
            "hibikicmd", "hibiki", "hibiki-henshin",
            "bladecmd", "blade", "blade-henshin",
            "faizcmd", "faiz", "faiz-henshin",
            "ryukicmd", "ryuki", "ryuki-henshin",
            "agitocmd", "agito", "agito-henshin",
            "kuugacmd", "kuuga", "kuuga-henshin",
           ],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "sentai",
  description: "",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};