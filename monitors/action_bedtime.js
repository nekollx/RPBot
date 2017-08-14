var settings = require('../settings.js');
var randomHex = require('random-hex');
const discord = require ('discord.js');
const yt = require('ytdl-core');

exports.run = (client, msg) => {
	if (   msg.content.startsWith('rpbot, read me a bedtime') 
        || msg.content.startsWith('rpbot, tell me a bedtime') 
        || msg.content.startsWith('tell me a bedtime') 
        || msg.content.startsWith('read me a bedtime')   
        || msg.content.startsWith('!storytime')   
        || msg.content.startsWith('!story')                        ){
		var story = 'title';
		var randomstoryID = settings.getRandomInt(1, 28);
				if ((randomstoryID == 1) || (randomstoryID == 3) || (randomstoryID == 5)){
  						if (!msg.member.voiceChannel) {
								msg.reply(`Please be in a voice channel first!`);
						} else {
								settings.voiceChannel = msg.member.voiceChannel;
								PlayAudio("https://youtu.be/ISXLG1JxAhc", settings.voiceChannel);
								settings.array.push("https://youtu.be/ISXLG1JxAhc");
						};//if (!voiceChannel)
                                console.log('Reading: A City Rat And A Village Rat [story id: ' + randomstoryID + ']');
								story = 'A City Rat And A Village Rat\n\n';
								story += 'Once there were two rats who were good friends. One of them lived in a city and the other lived in a village. ';
								story += 'Both of them exchanged news of their well being through other rats who travelled between the two places.\n';
								story += 'Once the city rat wished to meet his village friend. He sent the message through some rats of the village. ';
								story += 'The village friend was very excited about his friends visit. He made preparations to welcome him. ';
								story += 'To receive his friend, he went to the border of the village wearing a traditional dress like dhoti, kurta and cap, with a garland in his hand. ';
								story += 'However, his city friend was wearing a suit, boots and a neck tie. They hugged each other and exchanged greeting.\n';
								story += 'The village rat welcomed him and said, "We have fresh and unpolluted air here. The atmosphere in the city is impure."\n';
								story += 'They gossiped a lot and exchanged their views on different topics. Then, they sat down to eat. The village rat served him fruits and boiled wheat grains.\n';
								story += 'Read more at http://www.kidsgen.com/stories/bedtime_stories/the_city_rat_and_the_village_rat.htm#rseCxyzhl1gFuMcX.99';
				} else if ((randomstoryID == 2) || (randomstoryID == 4) || (randomstoryID == 6)) {
						if (!msg.member.voiceChannel) {
								msg.reply(`Please be in a voice channel first!`);
						} else {
								settings.voiceChannel = msg.member.voiceChannel;
								PlayAudio("https://youtu.be/PuGUgM8Yem4", settings.voiceChannel);
								settings.array.push("https://youtu.be/PuGUgM8Yem4");
						};//if (!voiceChannel)
                                console.log('Reading: A Wise Parrot [story id: ' + randomstoryID + ']');
								story = 'A Wise Parrot\n\n';
								story += 'Once upon a time there lived a parrot in a forest. He was very handsome. ';
								story += 'His beak and wings were very beautiful. His younger brother also lived with him. Both were living happily in the forest.\n';
								story += 'His beak and wings were very beautiful. ';
								story += 'His younger brother also lived with him. Both were living happily in the forest.\n';
								story += 'One day, a hunter came to the forest. He saw the pair of the parrots and thought, ';
								story += '‘These parrots are very beautiful and special. I will present them to the king,’ He spread his net in the jungle to catch them. Soon both the parrots were trapped.\n';
								story += 'He kept them in a cage and went to the place. He said to the king, ';
								story += '"O king, see this beautiful pair of parrots. I caught them in the deep forest. Seeing their beauty I decided to bring them to you. They will add to the beauty of your palace."\n';
								story += 'The king was very happy. He gave one thousand coins to the hunter. He kept both the parrots in a golden cage and ordered his servants to look after them well.\n';
								story += 'Read more at http://www.kidsgen.com/stories/bedtime_stories/a_wise_parrot.htm#9Xb28Ypgp6ssoYIW.99';	
				} else if ((randomstoryID == 7) || (randomstoryID == 9) || (randomstoryID == 11)) {
						if (!msg.member.voiceChannel) {
								msg.reply(`Please be in a voice channel first!`);
						} else {
								settings.voiceChannel = msg.member.voiceChannel;
								PlayAudio("https://youtu.be/J1YiTeMKV7o", settings.voiceChannel);
								settings.array.push("https://youtu.be/J1YiTeMKV7o");
						};//if (!voiceChannel)
                                console.log('Reading: A Wolf And Seven Lambs [story id: ' + randomstoryID + ']');
								story = 'A Wolf And Seven Lambs\n\n';
								story += 'Once there lived a goat along with her seven kids near a forest. She loved her kids very much.\n';
								story += 'One day while the goat was going to collect food for her kids, she said to them, "Kids! I am going to the forest to bring food. You should not quarrel. ';
								story += 'And listen! Do not open the door for anyone except me. The Wolf always eyes you greedily." She kissed her kids and bade goodbye.\n';
								story += 'The wolf was already waiting for the goat to depart. He was very fond of the lamb’s flesh. ';
								story += 'He went to the hut of the goat and knocked at the door, "Hello kids! Here is your mother. Open the door. I have brought good food for you." ';
								story += 'The kids were intelligent, they recognized the voice of the wolf and said, "O wicked wolf! Do not try to fool us. Go away!"\n';
								story += 'Then the wolf practiced speaking like the goat and came again. This time, he spoke in a loud voice, "Hello kids! Open the door. It is your mother here. Be quick."\n';
								story += 'Read more at http://www.kidsgen.com/stories/bedtime_stories/a_wolf_and_seven_lambs.htm#fZ3ACu6wHVl88fwL.99';
				} else if ((randomstoryID == 8) || (randomstoryID == 10) || (randomstoryID == 12)) {
						if (!msg.member.voiceChannel) {
								msg.reply(`Please be in a voice channel first!`);
						} else {
								settings.voiceChannel = msg.member.voiceChannel;
								PlayAudio("https://youtu.be/-Piz5vqJnhs", settings.voiceChannel);
								settings.array.push("https://youtu.be/-Piz5vqJnhs");
						};//if (!voiceChannel)
                                console.log('Reading: Commencement of A New Life [story id: ' + randomstoryID + ']');
								story = 'Commencement of A New Life\n\n';
								story += 'Once, there was rich man. He had earned the money by doing hard labour. He had a son named Karim. He often used to say to his son, ';
								story += '"Karim, you are my only son. All my wealth is yours. There is none to share the wealth you. You are supposed to increase the wealth with hard labour and should not waste."\n';
								story += '"Don\'t worry father! I will not waste the money unnecessarily." Karim would assure his father.\n';
								story += 'But his assurances were false. He had fallen in a company of bad friends. He used to waste money in drinking, gambling and enjoying dances.\n';
								story += 'His friends were very happy and used to flatter him for liberally spending money on them." He would also like their flattery and would be ready to spend more money on them.\n';
								story += 'When his father came to know about his bad habits, he was badly upset. He thought, \'If Karim continue to waste money like this I would soon be penniless. ';
								story += 'So I will talk to him today to mend his ways.\'\n';
								story += 'Read more at http://www.kidsgen.com/stories/bedtime_stories/commencement_of_new_life.htm#DBI2mfb8T8j47oKG.99';
				} else if ((randomstoryID == 13) || (randomstoryID == 15) || (randomstoryID == 17)) {
						if (!msg.member.voiceChannel) {
								msg.reply(`Please be in a voice channel first!`);
						} else {
								settings.voiceChannel = msg.member.voiceChannel;
								PlayAudio("https://youtu.be/NoCpj2CW4mA", settings.voiceChannel);
								settings.array.push("https://youtu.be/NoCpj2CW4mA");
						};//if (!voiceChannel)
                                console.log('Reading: Destiny\'s Knock [story id: ' + randomstoryID + ']');
								story = 'Destiny\'s Knock\n\n';
								story += 'Long long ago there was a beautiful palace in the middle of the Baghdad city. ';
								story += 'The building was surrounded by beautiful orchards. Music playing created soothing atmosphere. ';
								story += 'The palace was so attractive that whoever saw it could not help praising its beauty. ';
								story += 'There was no other building equivalent to it in beauty and splendor in Baghdad.\n';
								story += 'One day, a poor man happened to come to the palace. He was surprised to see the beauty of the building. ';
								story += 'He thought, \'The building appears very beautiful from outside, it must be much more attractive from inside. ';
								story += 'But how can I see the interior of the palace?\' He was shabbily dressed and therefore was hesitating to enter. Right then, he observed that some people were going inside. ';
								story += 'He thought, "Why can\'t I go inside with these people?" He decided to enter thinking that nobody will pinpoint him in the midst of the crowd. ';
								story += 'So he ran to join the crowd. At the gate, he saw the owner welcoming the guests and asking them, ';
								story += '"I hope you did not have to face any difficulty in reaching here?" All of them thanked him for his cooperation in their business and expressed their gratitude to him. ';
								story += 'Thereafter, he took them to the auditorium and discussed with them various issues regarding business.\n';
								story += 'Read more at http://www.kidsgen.com/stories/bedtime_stories/destiny_knocks.htm#kwLp3IhwlOhLJ72j.99';
				} else if ((randomstoryID == 14) || (randomstoryID == 16) || (randomstoryID == 18)) {
						if (!msg.member.voiceChannel) {
								msg.reply(`Please be in a voice channel first!`);
						} else {
								settings.voiceChannel = msg.member.voiceChannel;
								PlayAudio("https://youtu.be/SXnso4pbyeM", settings.voiceChannel);
								settings.array.push("https://youtu.be/SXnso4pbyeM");
						};//if (!voiceChannel)
                                console.log('Reading: Evil Has An Evil End [story id: ' + randomstoryID + ']');
								story = 'Evil Has An Evil End\n\n';
								story += 'There lived a notorious monkey named Cheenu in the Champak forest. He used to harass the small and weak animals and birds. ';
								story += 'Sometimes, he destroyed the birds’ nests and threw away their eggs. Rabbits were afraid of being scratched by him. ';
								story += 'He used to twist the tail of jackals’. Almost all the animals were afraid of the monkey and wanted to get rid of him. ';
								story += 'But how could they get rid of the monkey? What should they do?\n';
								story += 'There was a clever jackal in the same forest. He decided to teach a lesson to Cheenu. He went to the monkey and said, "Your body is very attractive. ';
								story += 'The golden hair further adds to the beauty of your body, still one thing is wrong in you." The monkey said with surprise, "What is wrong with my body?" The jackal replied, ';
								story += '"Your body is red which does not suit your body. If you do as I tell, your face will shine like the moon." ';
								story += 'The monkey was overjoyed and became restless to know the method to beautify his face and asked excitedly, "Tell me the method quickly to make my face glow." ';
								story += 'The jackal said "If you eat the swargafal (fruit of heaven), your face will shine like the moon." The monkey again asked, "How can I get swargafal?" ';
								story += 'The jackal replied, "It lies in the forehead of an elephant. When you see an elephant, hit his forehead with a stone and this way the swargafal will come to his trunk, ';
								story += 'and when the elephant try to catch you, quickly take out the swargafal from his trunk."\n';
								story += 'Read more at http://www.kidsgen.com/stories/bedtime_stories/evil_has_an_evil_end.htm#COfICOCj7uX062bE.99';
				} else if ((randomstoryID == 19) || (randomstoryID == 21) || (randomstoryID == 23)) {
						if (!msg.member.voiceChannel) {
								msg.reply(`Please be in a voice channel first!`);
						} else {
								settings.voiceChannel = msg.member.voiceChannel;
								PlayAudio("https://youtu.be/L3PLoRXnywk", settings.voiceChannel);
								settings.array.push("https://youtu.be/L3PLoRXnywk");
						};//if (!voiceChannel)
                                console.log('Reading: Importance of Guru [story id: ' + randomstoryID + ']');
								story = 'Importance of Guru\n\n';
								story += 'According to a mythological story, Indra, the king of gods, after defeating the devils,was enjoying the luxuries and comforts of heaven. ';
								story += 'Beautiful apsaras (heavenly dancers) were dancing to the tune of music in the court of Indra. Somras (divine liquor) was also being served to the gods. ';
								story += 'All the gods were intoxicated and enjoying the victory over the devils.\n';
								story += 'While they were busy enjoying, Guru Brihaspati entered the court but the gods failed to notice him and did not pay any attention or respect to him.\n';
								story += 'Hurt by the behavior of the gods, Guru Brihaspati became very sad. He felt that their victory over the demons had gone into their heads, and now they were going astray. ';
								story += 'He felt insulted. He thought, \'There was no difference left between the devils and the gods.\' He pondered further, \'It is shameful to be the guru of such gods.\' ';
								story += 'He immediately came out of Indra\'s court.\n';
								story += 'Read more at http://www.kidsgen.com/stories/bedtime_stories/importance_of_guru.htm#Orco8RXZT7OQ5P8f.99';
				} else {
						if (!msg.member.voiceChannel) {
								msg.reply(`Please be in a voice channel first!`);
						} else {
								settings.voiceChannel = msg.member.voiceChannel;
								PlayAudio("https://youtu.be/nu_Efqxdnis", settings.voiceChannel);
								settings.array.push("https://youtu.be/nu_Efqxdnis");
						};//if (!voiceChannel)
                                console.log('Reading: Laughter of A Fish [story id: ' + randomstoryID + ']');
								story = 'Laughter of A Fish\n\n';
								story += 'Queen was sitting near a windowOnce upon a time there was a king named Firozshah, who ruled over Kashmir. His wife was sitting near the window, she saw a woman selling fish. ';
								story += 'She asked her if she had any female fish. The fish-selling woman said, "NO, I have only male fish." With this the woman moved ahead. ';
								story += 'As she moved forward, the queen heard the laughter of a fish. The queen was surprised. She thought that the fish was laughing at her. She got annoyed and rushed to the king. ';
								story += 'She narrated the whole incident to him. But the king could not decide what to do. He called his Prime Minister Hussain who was very intelligent. ';
								story += 'The king narrated whole incident and asked the minister to solve the riddle – why the fish had dared to laugh at the queen. ';
								story += 'The king further said, "I give you fifteen days to solve the riddle and if you fail, you will be beheaded." ';
								story += 'Hussain thought deeply and decided to set out on a journey to unfold the puzzle the next day.\n';
								story += 'He met an old farmer named Rehman on his way who was going to pahalgam. Hussain thought of making friends with him who might help him in solving the riddle. ';
								story += 'Thus, Hussain accompanied him to Phalgam.\n';
								story += 'Read more at http://www.kidsgen.com/stories/bedtime_stories/laughter_of_a_fish.htm#8K8oyRgrQHqi3sYB.99';
				}//end iff random number
		msg.channel.sendMessage('Okay ' + msg.author.username + ' here\'s a bedtime story:\n' + story + ' [story id: ' + randomstoryID + ']');
    };//if  
};//run

exports.conf = {
  enabled: true,
};//conf

function PlayAudio(tubelink, voice) {
    if (settings.botTalking == 0){
		  settings.botTalking = 1;
		voice.join()
		.then(connnection => {
			let stream = yt(tubelink, {audioonly: true});
			const dispatcher = connnection.playStream(stream);
			dispatcher.on('end', () => {
			settings.botTalking = 0;
			settings.array.splice(0, 1);
			});//dispatcher
		});//then connection
	}//if
}//function
