var settings = require('../../settings.js');
var randomHex = require('random-hex');
const discord = require ('discord.js');
var strings = require('node-strings');
const yt = require('ytdl-core');

//strings.italic() to make some text italic (Linux)
//strings.strike() to strike through some text (Linux)
//strings.hidden() to create hidden text (Linux, Mac)
//strings.underline() to underline some text (Linux, Mac)
//strings.blink() to create a text that blinks (Mac, highlighted on Win)
//strings.bold() to make some text bold
//strings.inverse() to invert background and foreground colors
//strings.white() to use white as color
//strings.grey() to use grey as color
//strings.black() to use black as color
//strings.blue() to use blue as color
//strings.cyan() to use cyan as color
//strings.green() to use green as color
//strings.magenta() to use magenta as color
//strings.red() to use red as color
//strings.yellow() to use yellow as color

exports.run = (client, msg) => {
        settings.robocount ++;
        var knight = "hm";
                                  
        for (var i = 1; i <= settings.robocount; i++){
            knight = knight + "m";
        }//for
        knight = knight + "!";
        msg.reply(knight);
        console.log (knight + ": 'm' count is " + settings.robocount);
};//run




exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: ["hm"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "hmm",
  description: "",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};
