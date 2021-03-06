const levenshtein = require("fast-levenshtein");

exports.run = async (client, msg) => {
  if (msg.author.bot) return;
  if (client.config.selfbot && msg.author.id !== client.user.id) return;

  const conf = client.configuration.get(msg.guild);
  const prefixLength = client.funcs.parseCommand(client, msg, true);
  if (!prefixLength) return;
  const command = client.funcs.parseCommand(client, msg);
  if (command.length && !(client.commands.has(command) || client.aliases.has(command))) {
    const distances = [];
    client.commands.filter(c => c.conf.permLevel <= msg.member.permLevel).forEach((val, cmd) => distances.push({
      dist: levenshtein.get(cmd, command),
      cmd,
    }));
//admincmd, combatcmd, generalcmd, rpcmd, itemcmd, specialcmd
    distances.sort((a, b) => (a.score < b.score ? 1 : -1));
    if (distances[0] && distances[0].dist <= 1) {
      const message = await msg.channel.send(`|\`❔\`| Did you mean \`${conf.prefix + distances[0].cmd}\`?`);
      setTimeout(() => { if (message.deletable) message.delete(); }, 10000);
    }
  }
};

exports.conf = {
  enabled: true,
  requiredModules: ["fast-levenshtein"],
};

exports.help = {
  name: "didyoumean",
  type: "monitors",
  description: "Helps users that type in commands incorrectly.",
};
