var settings = require('../../settings.js');
var randomHex = require('random-hex');
const discord = require ('discord.js');
const yt = require('ytdl-core');

exports.run = (client, msg) => {
    var msgtlc = msg.content.toLowerCase(); 
    var swarm_c = Math.floor(Math.random() * 13) + 2;
    for (var f = 0; f < swarm_c; f++){
        var forms = 'swa';
        var swarm_r = Math.floor(Math.random() * 99);
        for (var g = 0; g <= swarm_r; g++){
            forms += 'r';
        };//for
        var swarm_m = Math.floor(Math.random() * 99);
        for (var h = 0; h <= swarm_m; h++){
            forms += 'm';
        };//for
        forms += '...';
        msg.channel.sendMessage(forms);
    };//for
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
  name: "swarm",
  description: "",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};
