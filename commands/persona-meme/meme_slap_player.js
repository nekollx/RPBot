var settings = require('../../settings.js');
var randomHex = require('random-hex');
const discord = require ('discord.js');

exports.run = (client, msg) => {
                var uid           = msg.author.id;
                var uidname       = msg.author.username;
                var mentionedid   = uid;
                var mentionedname = uidname;
        	    var slapID        = settings.getRandomInt(1, 54);
                var ranklimit     = 999999; 
                var rankstoadd    = parseInt(msg.content.split("x").pop());

                if (msg.mentions.users.first()){
                    mentionedid   = msg.mentions.users.first().id;
                    mentionedname = msg.mentions.users.first().username;
                };//if

        		var slapdesc = 'I\'m not slapping one of my fellow bots ' + uidname + ' \n'; 
					slapdesc += 'RPBot Neo slapped '+ uidname + '!';

				if (
						(mentionedid != 275766529121845249)/*rpbot*/ 
					&& (mentionedid != 170915625722576896)/*Discord RPG*/ 
					&& (mentionedid != 159985870458322944)/*Mee6*/ 
					&& (mentionedid != 83010416610906112)/*Nightbot*/
					&& (mentionedid != 169678500893163520)/*pikagirl*/
					&& (mentionedid != 280837589303296010)/*rpbot neo*/
					&& (mentionedid != 189702078958927872)/*eris bot*/
					&& (mentionedid != 141016540240805888)/*sweetie bot*/
					){
						slapdesc = uidname + ' slapped '+ mentionedname + '!';
				};//slap exceptions

				if (mentionedid == 237905336143577088)/*LLX*/{
        			slapdesc = 'I\'m not slapping the boss ' + uidname + ' \n'; 
					slapdesc += 'RPBot Neo **Mega** slapped '+ uidname + '!';				
				};//slap reversals

                if (isNaN(rankstoadd)){
                    rankstoadd = 1;
                } else {
                    if (rankstoadd > ranklimit){rankstoadd = ranklimit;};
                    if (rankstoadd > 1){slapdesc = uidname + ' slapped '+ mentionedname + ' ' + rankstoadd + ' times!';};
                };//if else

                var images = ['http://cdn0.dailydot.com/cache/a5/49/a5499c8faf234cc22e955d78d86d7e12.jpg', 
                            'http://orig06.deviantart.net/107e/f/2013/135/d/b/fish_slap_2_by_ibiscorosa-d65djgt.jpg', 
                            'http://2paragraphs.com/wp-content/uploads/2015/02/the-slap-620x375.jpg', 
                            'http://images1.wikia.nocookie.net/__cb20111106180938/gundam/images/6/66/Bright_slap.png', 
                            'http://68.media.tumblr.com/275b45dab5705057db98848a103861cb/tumblr_inline_ojqlnirCQ81rvkpf6_400.jpg', 
                            'https://trialofheroes.files.wordpress.com/2016/08/ghost39-akari-igor-slap-1.jpg', 
                            'https://i.ytimg.com/vi/UxKydKzHW9A/maxresdefault.jpg', 
                            'http://www.maskedriders.info/Mee6RP/statusPic/unnamed.png', 
                            'http://i3.kym-cdn.com/photos/images/original/001/021/431/153.gif', 
                            'http://www.maskedriders.info/Mee6RP/statusPic/slap.png', 
                            'http://2.bp.blogspot.com/-yg--oWXkQs8/UPcshXc1I4I/AAAAAAAAU48/m5YKVxST4Jw/s1600/a+girl+slapped+a+boy+-+Hindi+Latife+-+Pawan+Mall.jpg', 
                            'https://s-media-cache-ak0.pinimg.com/736x/84/f8/c0/84f8c05970b430dc67694be79b96fc79.jpg', 
                            'http://cdn.someecards.com/someecards/usercards/1343635540090_2149692.png', 
                            'http://weknowmemes.com/wp-content/uploads/2012/04/bitch-im-too-tired-to-slap-you.jpg', 
                            'http://cdn.someecards.com/someecards/usercards/if-karma-doesnt-slap-you-in-the-face-i-will--c77f8.png', 
                            'http://cdn.someecards.com/someecards/usercards/1334531982971_9226502.png', 
                            'https://s-media-cache-ak0.pinimg.com/736x/8b/a4/a7/8ba4a7b857077195ad9fc5ffe7b8e1b2.jpg', 
                            'http://sd.keepcalm-o-matic.co.uk/i/keep-talking-and-i-will-slap-you.png', 
                            'http://www.demotivation.us/media/demotivators/demotivation.us_ID-SLAP-YOU-But-Im-pretty-sure-they-would-call-it-animal-cruelty_136192157694.jpg', 
                            'http://cdn.someecards.com/someecards/usercards/MjAxMy05MjZkMWQ5ZGE5YjNmMzRi.png', 
                            'https://cdn.meme.am/cache/instances/folder100/500x/29111100.jpg', 
                            'http://sd.keepcalm-o-matic.co.uk/i/go-away-or-i-ll-slap-you.png', 
                            'https://res.cloudinary.com/teepublic/image/private/s--fwbX1iY8--/t_Preview/b_rgb:484849,c_limit,f_jpg,h_630,q_90,w_630/v1482761460/production/designs/991978_1.jpg', 
                            'http://sd.keepcalm-o-matic.co.uk/i/i-m-not-calm-so-i-m-going-to-slap-you.png', 
                            'http://www.heygidday.biz/media/catalog/product/cache/1/image/800x600/9df78eab33525d08d6e5fb8d27136e95/S/T/STI-0250-01367871946.JPG', 
                            'https://cdn.meme.am/cache/instances/folder836/25558836.jpg', 
                            'http://sd.keepcalm-o-matic.co.uk/i/shut-your-mouth-or-ill-slap-you.png'
                            ];//array of images to use
                slapID      = settings.getRandomInt(1, images.length);
        	    slapSTRING  = images[(slapID-1)];                            



                const RiderEmbed = new discord.RichEmbed()
                      RiderEmbed.setColor(randomHex.generate())
                      RiderEmbed.setDescription(slapdesc)
					  RiderEmbed.setImage(slapSTRING)
                msg.channel.send({embed: RiderEmbed});
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
  name: "slap",
  description: "",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};