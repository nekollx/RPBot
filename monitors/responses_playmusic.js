var settings = require('../settings.js');
const schedule = require('node-schedule');
const yt = require('ytdl-core');
var countseconds = 0;

exports.run = (client, msg) => {
	var rule = new schedule.RecurrenceRule(); // Creates new Recurrence Rule
	rule.second = [0, 10, 20, 30, 40, 50]; 
	var eSCHED = schedule.scheduleJob(rule, function() {
			var vo = settings.voiceChannel;
			var tl = settings.array[0];
		if (settings.array.length > 0) {
		    countseconds = 0;
			PlayAudio(tl, vo, msg);
			//console.log('(array > 0) Playing: '+ settings.array[0] + ' [Array length: ' + settings.array.length + ']');
		} else if ((settings.array.length > 0) && (settings.botTalking == 0)){
			PlayAudio(tl, vo, msg);
			//console.log('(array > 0 and bot not talking) Playing: '+ settings.array[0] + ' [Array length: ' + settings.array.length + ']');
		} else if (msg.member != null){ 
			if ((settings.array.length == 0) && (settings.botTalking == 0) && (msg.member.voiceChannel != '')){
				//console.log('(array == 0 and bot not talking) [Array length: ' + settings.array.length + '] BotTalking: '+ settings.botTalking + ', seconds: ' + countseconds);
				countseconds++;
				//console.log('vo: ' + msg.member.voiceChannel);
				if (countseconds == 3){
					if (typeof vo.leave === "function"){vo.leave();};
					countseconds = 0;
				}//if
			};//if
		}//if
	});//schedule.scheduleJob
};//run

exports.conf = {
  enabled: true,
};//conf

function PlayAudio(tubelink, voice, mg) {
    if (settings.botTalking == 0){
		  settings.botTalking = 1;
		  //console.log(voice);
			voice.join()
			.then(connnection => {
				mg.channel.sendMessage('Playing: '+ tubelink + ' [Array length: ' + settings.array.length + ']');
				let stream = yt(tubelink, {audioonly: true});
				const dispatcher = connnection.playStream(stream);
				dispatcher.on('end', () => {
				settings.botTalking = 0;
				settings.array.splice(0, 1);
				});//dispatcher
			});//then connection
	}//if
}//function

