exports.run = (client, msg) => {
		msg.channel.sendMessage('Let\'s Game! Bad Game! Dead Game! What\'s your name?!');
};

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: [],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "infection",
  description: "",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};