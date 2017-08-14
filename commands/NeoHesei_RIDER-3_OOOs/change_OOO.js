const discord = require ('discord.js');
var Client   =    require('mysql');
var settings = require('../../settings.js');
const yt = require('ytdl-core');
var dbclient = '';
var mysqlPool = '';

exports.init = (client) => {
        dbclient = Client.createConnection({
                    host: settings.dbhost,
                    user: settings.dbuser,
                    password: settings.dbpassword,
                    database: settings.dbdatabase,
        });//client = Client.createConnection

        mysqlPool  = Client.createPool({
            host: settings.dbhost,
            user: settings.dbuser,
            password: settings.dbpassword,
            database: settings.dbdatabase,
            port:3306
        }); //my sql pool
};//init

exports.run = (client, msg) => {
    var   validform   = 0;
    var   playeruid   = msg.author.id;
    var   playername  = msg.author.username;
    var   mentionedid   = playeruid;
    var   mentionedname = playername;
    if (msg.mentions.users.first()){
        mentionedid   = msg.mentions.users.first().id;
        mentionedname = msg.mentions.users.first().username;
    };//if
    var msgchannel = msg.channel;
    var arrayname = msg.content.split(' ');
    var formdescription = '';
    var count = 0;
    var taka = 0;
    var kujaku = 0;
    var condor = 0;
    var kuwagata = 0;
    var kamakiri = 0;
    var batta = 0;
    var lion = 0;
    var tora = 0;
    var cheetah = 0;
    var sai = 0;
    var gorilla = 0;
    var zou = 0;
    var shachi = 0;
    var unagi = 0;
    var tako = 0;
    var ptera = 0;
    var tricera = 0;
    var tyranno = 0;
    var cobra = 0;
    var kame = 0;
    var wani = 0;
    var sasori = 0;
    var kani = 0;
    var ebi = 0;
    var same = 0;
    var kujira = 0;
    var ookamiuo = 0;
    var supertaka = 0;
    var supertora = 0;
    var superbatta = 0;
    var imagin = 0;
    var shocker = 0;
    var panda = 0;
    var kangaroo = 0;
    var x = 0;
    var amazon = 0;
    var stronger = 0;

        mysqlPool.getConnection(function(err, connection) {
        if(err) throw err;
        connection.query("SELECT * FROM " + settings.dbtable + " WHERE ID = '" + playeruid + "'", function(err,rows){
                validform = rows[0].CLASS_ID;
                if ((validform >= 3000) && (validform < 3100)){
                            for (var i = 1; i < arrayname.length; i++){
                                if ((arrayname.length < 5) || (((Math.floor(Math.random() * 2) + 1) == 2) && (count < 3))){
                                        if (arrayname[i] == 'taka'){
                                                MedalEmbed ('#C0C0C0', 'http://www.maskedriders.info/Mee6RP/statusPic/HawkMedal.jpg', msgchannel)
                                                taka = taka + 1;
                                        } else if (arrayname[i] == 'kujaku'){
                                                MedalEmbed ('#C0C0C0', 'http://www.maskedriders.info/Mee6RP/statusPic/PeacockMedal.jpg', msgchannel)
                                                kujaku = kujaku + 1;
                                        } else if (arrayname[i] == 'condor'){
                                                MedalEmbed ('#C0C0C0', 'http://www.maskedriders.info/Mee6RP/statusPic/CondorMedal.jpg', msgchannel)
                                                condor = condor + 1;
                                        } else if (arrayname[i] == 'kuwagata'){
                                                MedalEmbed ('#C0C0C0', 'http://www.maskedriders.info/Mee6RP/statusPic/StagBeetleMedal.jpg', msgchannel)
                                                kuwagata = kuwagata + 1;
                                        } else if (arrayname[i] == 'kamakiri'){
                                                MedalEmbed ('#C0C0C0', 'http://www.maskedriders.info/Mee6RP/statusPic/MantisMedal.jpg', msgchannel)
                                                kamakiri = kamakiri + 1;
                                        } else if (arrayname[i] == 'batta'){
                                                MedalEmbed ('#C0C0C0', 'http://www.maskedriders.info/Mee6RP/statusPic/GrasshopperMedal.jpg', msgchannel)
                                                batta = batta + 1;
                                        } else if (arrayname[i] == 'lion'){
                                                MedalEmbed ('#C0C0C0', 'http://www.maskedriders.info/Mee6RP/statusPic/LionMedal.jpg', msgchannel)
                                                lion = lion + 1;
                                        } else if (arrayname[i] == 'tora'){
                                                MedalEmbed ('#C0C0C0', 'http://www.maskedriders.info/Mee6RP/statusPic/TigerMedal.jpg', msgchannel)
                                                tora = tora + 1;
                                        } else if (arrayname[i] == 'cheetah'){
                                                MedalEmbed ('#C0C0C0', 'http://www.maskedriders.info/Mee6RP/statusPic/CheetahMedal.jpg', msgchannel)
                                                cheetah = cheetah + 1;
                                        } else if (arrayname[i] == 'sai'){
                                                MedalEmbed ('#C0C0C0', 'http://www.maskedriders.info/Mee6RP/statusPic/RhinoMedal.jpg', msgchannel)
                                                sai = sai + 1;
                                        } else if (arrayname[i] == 'gorilla'){
                                                MedalEmbed ('#C0C0C0', 'http://www.maskedriders.info/Mee6RP/statusPic/GorillaMedal.jpg', msgchannel)
                                                gorilla = gorilla + 1;
                                        } else if (arrayname[i] == 'zou'){
                                                MedalEmbed ('#C0C0C0', 'http://www.maskedriders.info/Mee6RP/statusPic/ElephantMedal.jpg', msgchannel)
                                                zou = zou + 1;
                                        } else if (arrayname[i] == 'shachi'){
                                                MedalEmbed ('#C0C0C0', 'http://www.maskedriders.info/Mee6RP/statusPic/OrcaWhaleMedal.jpg', msgchannel)
                                                shachi = shachi + 1;
                                        } else if (arrayname[i] == 'unagi'){
                                                MedalEmbed ('#C0C0C0', 'http://www.maskedriders.info/Mee6RP/statusPic/EelMedal.jpg', msgchannel)
                                                unagi = unagi + 1;
                                        } else if (arrayname[i] == 'tako'){
                                                MedalEmbed ('#C0C0C0', 'http://www.maskedriders.info/Mee6RP/statusPic/OctopusMedal.jpg', msgchannel)
                                                tako = tako + 1;
                                        } else if (arrayname[i] == 'ptera'){
                                                MedalEmbed ('#C0C0C0', 'http://www.maskedriders.info/Mee6RP/statusPic/PteranodonMedal.jpg', msgchannel)
                                                ptera = ptera + 1;
                                        } else if (arrayname[i] == 'tricera'){
                                                MedalEmbed ('#C0C0C0', 'http://www.maskedriders.info/Mee6RP/statusPic/TriceratopsMedal.jpg', msgchannel)
                                                tricera = tricera + 1;
                                        } else if (arrayname[i] == 'tyranno'){
                                                MedalEmbed ('#C0C0C0', 'http://www.maskedriders.info/Mee6RP/statusPic/TyrannosaurusMedal.jpg', msgchannel)
                                                tyranno = tyranno + 1;
                                        } else if (arrayname[i] == 'cobra'){
                                                MedalEmbed ('#C0C0C0', 'http://www.maskedriders.info/Mee6RP/statusPic/CobraMedal.jpg', msgchannel)
                                                cobra = cobra + 1;
                                        } else if (arrayname[i] == 'kame'){
                                                MedalEmbed ('#C0C0C0', 'http://www.maskedriders.info/Mee6RP/statusPic/TurtleMedal.jpg', msgchannel)
                                                kame = kame + 1;
                                        } else if (arrayname[i] == 'wani'){
                                                MedalEmbed ('#C0C0C0', 'http://www.maskedriders.info/Mee6RP/statusPic/CrocodileMedal.jpg', msgchannel)
                                                wani = wani + 1;
                                        } else if (arrayname[i] == 'sasori'){
                                                MedalEmbed ('#C0C0C0', 'http://www.maskedriders.info/Mee6RP/statusPic/Sasori_Medal.jpg', msgchannel)
                                                sasori = sasori + 1;
                                        } else if (arrayname[i] == 'kani'){
                                                MedalEmbed ('#C0C0C0', 'http://www.maskedriders.info/Mee6RP/statusPic/Kani_Medal.jpg', msgchannel)
                                                kani = kani + 1;
                                        } else if (arrayname[i] == 'ebi'){
                                                MedalEmbed ('#C0C0C0', 'http://www.maskedriders.info/Mee6RP/statusPic/Ebi_Medal.jpg', msgchannel)
                                                ebi = ebi + 1;
                                        } else if (arrayname[i] == 'same'){
                                                MedalEmbed ('#C0C0C0', 'http://www.maskedriders.info/Mee6RP/statusPic/SharkMedal.jpg', msgchannel)
                                                same = same + 1;
                                        } else if (arrayname[i] == 'kujira'){
                                                MedalEmbed ('#C0C0C0', 'http://www.maskedriders.info/Mee6RP/statusPic/WhaleMedal.jpg', msgchannel)
                                                kujira = kujira + 1;
                                        } else if (arrayname[i] == 'ookamiuo'){
                                                MedalEmbed ('#C0C0C0', 'http://www.maskedriders.info/Mee6RP/statusPic/WolffishMedal.jpg', msgchannel)
                                                ookamiuo = ookamiuo + 1;
                                        } else if (arrayname[i] == 'super-taka'){
                                                MedalEmbed ('#C0C0C0', 'http://www.maskedriders.info/Mee6RP/statusPic/super_taka.jpg', msgchannel)
                                                supertaka = supertaka + 1;
                                        } else if (arrayname[i] == 'super-tora'){
                                                MedalEmbed ('#C0C0C0', 'http://www.maskedriders.info/Mee6RP/statusPic/super_tora.jpg', msgchannel)
                                                supertora = supertora + 1;
                                        } else if (arrayname[i] == 'super-batta'){
                                                MedalEmbed ('#C0C0C0', 'http://www.maskedriders.info/Mee6RP/statusPic/super_batta.jpg', msgchannel)
                                                superbatta = superbatta + 1;
                                        } else if (arrayname[i] == 'imagin'){
                                                imagin = imagin + 1;
                                                MedalEmbed ('#C0C0C0', 'http://www.maskedriders.info/Mee6RP/statusPic/ImaginMedal.jpg', msgchannel)
                                        } else if (arrayname[i] == 'shocker'){
                                                shocker = shocker + 1;
                                                MedalEmbed ('#C0C0C0', 'http://www.maskedriders.info/Mee6RP/statusPic/ShockerMedal.jpg', msgchannel)
                                        } else if (arrayname[i] == 'panda'){
                                                MedalEmbed ('#C0C0C0', 'http://www.maskedriders.info/Mee6RP/statusPic/PandaMedal.jpg', msgchannel)
                                                panda = panda + 1;
                                        } else if (arrayname[i] == 'kangaroo'){
                                                MedalEmbed ('#C0C0C0', 'http://www.maskedriders.info/Mee6RP/statusPic/KangarooMedal.jpg', msgchannel)
                                                kangaroo = kangaroo + 1;
                                        } else if (arrayname[i] == 'x'){
                                                MedalEmbed ('#C0C0C0', 'http://www.maskedriders.info/Mee6RP/statusPic/X_Core_Medal.jpg', msgchannel)
                                                x = x + 1;
                                        } else if (arrayname[i] == 'amazon'){
                                                MedalEmbed ('#C0C0C0', 'http://www.maskedriders.info/Mee6RP/statusPic/Amazon_Core_Medal.jpg', msgchannel)
                                                amazon = amazon + 1;
                                        } else if (arrayname[i] == 'stronger'){
                                                MedalEmbed ('#C0C0C0', 'http://www.maskedriders.info/Mee6RP/statusPic/Stronger_Core_Medal.jpg', msgchannel)
                                                stronger = stronger + 1;
                                        } else {
                                                msg.reply(arrayname[i]+"!");	
                                        }//if array name
                                        count = count + 1;
                                };//if
                            };//for
                } else {
                const comboEmbed = new discord.RichEmbed()
                        comboEmbed.setAuthor('Jungle OOO', settings.botpic)
                        comboEmbed.setColor('#C0C0C0')
                        comboEmbed.setTimestamp()
                        comboEmbed.setURL('http://www.maskedriders.info/Mee6RP/index.php')
                        comboEmbed.setThumbnail('http://media.animevice.com/uploads/0/6872/810528-kamen_rider_ooo_symbol_by_alpha_vector.jpg')
                        comboEmbed.setFooter('Data Card ~ ' + settings.PlayerClassName(validform, "no"), settings.serverpic)
                        comboEmbed.setImage('http://www.maskedriders.info/Mee6RP/statusPic/wrongrider.png')
                        msg.channel.sendEmbed(
                        comboEmbed, formdescription, { disableEveryone: true }
                        );//message.channel.sendEmbed
                };//if ((validform
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                        if ((supertaka + supertora + superbatta) == 3){
                                var lvl = 3;
                                var consoleout = 'Super TaToBa.';
                                    formdescription = '"Super, Super, Super! Super Taka, Super Tora, Super Batta: Su~per Tatoba, Ta-To-Ba! Super!"';
                                var mainpicture = 'http://www.maskedriders.info/Mee6RP/statusPic/OOO_in_Battride_War_II.png';
                                var subid = 3010;
                                var videourl = "https://youtu.be/6W0nmCoyyd4";
                                var thumbnailpicture = '';
                                combodisplay (msgchannel, playeruid, lvl, consoleout, formdescription, validform, subid, mainpicture, thumbnailpicture);
                                voicecatch (msg.member.voiceChannel, msg, videourl);
                        } else if ((taka + tora + batta) == 3){
                                var lvl = 3;
                                var consoleout = 'TaToBa.';
                                formdescription = '"Taka, Tora, Batta: Ta-To-Ba! Tatoba, Ta-To-Ba!"';
                                var mainpicture = 'http://www.maskedriders.info/Mee6RP/statusPic/OOO-Tatoba.PNG';
                                var subid = 3011;
                                var videourl = "https://youtu.be/JJxdHX-f7yM";
                                var videourl2 = "https://youtu.be/h_V-0m4H6kM";
                                var thumbnailpicture = '';
                                combodisplay (msgchannel, playeruid, lvl, consoleout, formdescription, validform, subid, mainpicture, thumbnailpicture);
                                voicecatch (msg.member.voiceChannel, msg, videourl);
                                voicecatch (msg.member.voiceChannel, msg, videourl2);
                        } else if ((taka + kujaku + condor) == 3){
                                var lvl = 3;
                                var consoleout = 'TaJaDoru.';
                                formdescription = '"Taka, Kujaku, Condor: (Eagle screech) Ta~Ja~Dol!"';
                                var mainpicture = 'http://www.maskedriders.info/Mee6RP/statusPic/TaJaDor.png';
                                var subid = 3020;
                                var videourl = "https://youtu.be/pKrOqQAGDg0";
                                var videourl2 = "https://youtu.be/ZNo5AorJiMQ";
                                var thumbnailpicture = '';
                                combodisplay (msgchannel, playeruid, lvl, consoleout, formdescription, validform, subid, mainpicture, thumbnailpicture);
                                voicecatch (msg.member.voiceChannel, msg, videourl);
                                voicecatch (msg.member.voiceChannel, msg, videourl2);
                        } else if ((kamakiri + kuwagata + batta) == 3){
                                var lvl = 3;
                                var consoleout = 'GataKiriBa.';
                                formdescription = '"Kuwagata, Kamakiri, Batta: (Buzz) Ga~ta-Gata-Gata-Kiri, Ba! Gatakiriba!"';
                                var mainpicture = 'http://www.maskedriders.info/Mee6RP/statusPic/Kamen_Rider_OOO_Gatakiriba.png';
                                var subid = 3030;
                                var videourl = "https://youtu.be/8JY9zII10CI";
                                var videourl2 = "https://youtu.be/gmoArPO727k";
                                var thumbnailpicture = '';
                                combodisplay (msgchannel, playeruid, lvl, consoleout, formdescription, validform, subid, mainpicture, thumbnailpicture);
                                voicecatch (msg.member.voiceChannel, msg, videourl);
                                voicecatch (msg.member.voiceChannel, msg, videourl2);
                        } else if ((lion + tora + cheetah) == 3){
                                var lvl = 3;
                                var consoleout = 'LaToraTa.';
                                formdescription = '"Lion, Tora, Cheetah: (Roar) La-Tah La-Tah, La-Tora~~Tar!"';
                                var mainpicture = 'http://www.maskedriders.info/Mee6RP/statusPic/KamenRiderOOOLatorartahForm.png';
                                var subid = 3040;
                                var videourl = "https://youtu.be/7e_APQnpk1A";
                                var videourl2 = "https://youtu.be/dUTHU3Fuu1I";
                                var thumbnailpicture = '';
                                combodisplay (msgchannel, playeruid, lvl, consoleout, formdescription, validform, subid, mainpicture, thumbnailpicture);
                                voicecatch (msg.member.voiceChannel, msg, videourl);
                                voicecatch (msg.member.voiceChannel, msg, videourl2);
                        } else if ((sai + gorilla + zou) == 3){
                                var lvl = 3;
                                var consoleout = 'SaGouZou.';
                                formdescription = '"Sai, Gorilla, Zou: (Dull thud) Sagohzo... (Drum beat) Sa-Goh-Zo!"';
                                var mainpicture = 'http://www.maskedriders.info/Mee6RP/statusPic/KamenRiderOOOSagohzoForm.png';
                                var subid = 3050;
                                var videourl = "https://youtu.be/IBFWqfhcT9c";
                                var videourl2 = "https://youtu.be/rRihTS9ArFQ";
                                var thumbnailpicture = '';
                                combodisplay (msgchannel, playeruid, lvl, consoleout, formdescription, validform, subid, mainpicture, thumbnailpicture);
                                voicecatch (msg.member.voiceChannel, msg, videourl);
                                voicecatch (msg.member.voiceChannel, msg, videourl2);
                        } else if ((shachi + unagi + tako) == 3){
                                var lvl = 3;
                                var consoleout = 'ShaUTa.';
                                formdescription = '"Shachi, Unagi, Tako: (Splash) Sha-Sha-Shauta, Sha-Sha-Shauta!"';
                                var mainpicture = 'http://www.maskedriders.info/Mee6RP/statusPic/KamenRiderOOOShautaForm.png';
                                var subid = 3060;
                                var videourl = "https://youtu.be/sWqvVkHmyhw";
                                var videourl2 = "https://youtu.be/u2K1v3c_kEU";
                                var thumbnailpicture = '';
                                combodisplay (msgchannel, playeruid, lvl, consoleout, formdescription, validform, subid, mainpicture, thumbnailpicture);
                                voicecatch (msg.member.voiceChannel, msg, videourl);
                                voicecatch (msg.member.voiceChannel, msg, videourl2);
                        } else if ((ptera + tricera + tyranno) == 3){
                                var lvl = 3;
                                var consoleout = 'PuToTyranno.';
                                formdescription = '"Ptera, Tricera, Tyranno: (Screech) Pu-To-Tyrannosaurus!"';
                                var mainpicture = 'http://www.maskedriders.info/Mee6RP/statusPic/PuToTyrannosaurus.png';
                                var subid = 3070;
                                var videourl = "https://youtu.be/ZK8-Zr4qVMA";
                                var videourl2 = "https://youtu.be/4a24m9Z6LeY";
                                var thumbnailpicture = '';
                                combodisplay (msgchannel, playeruid, lvl, consoleout, formdescription, validform, subid, mainpicture, thumbnailpicture);
                                voicecatch (msg.member.voiceChannel, msg, videourl);
                                voicecatch (msg.member.voiceChannel, msg, videourl2);
                        } else if ((cobra + kame + wani) == 3){
                                var lvl = 3;
                                var consoleout = 'BuraKaWani.';
                                formdescription = '"Cobra, Kame, Wani: (Snake hiss) Bura-Ka~~Wani!"';
                                var mainpicture = 'http://www.maskedriders.info/Mee6RP/statusPic/Kamen_Rider_OOO_Burakawani.png';
                                var subid = 3080;
                                var videourl = "https://youtu.be/YmKywPwbmOY";
                                var videourl2 = "https://youtu.be/oOcx27sNXVg";
                                var thumbnailpicture = '';
                                combodisplay (msgchannel, playeruid, lvl, consoleout, formdescription, validform, subid, mainpicture, thumbnailpicture);
                                voicecatch (msg.member.voiceChannel, msg, videourl);
                                voicecatch (msg.member.voiceChannel, msg, videourl2);
                        } else if ((taka + imagin + shocker) == 3){
                                var lvl = 3;
                                var consoleout = 'TaMaShii.';
                                formdescription = '"Taka, Imagin, Shocker: Ta-Ma-Shii! Tamashii, Ta-Ma-Shii! Rider Damashii!"';
                                var mainpicture = 'http://www.maskedriders.info/Mee6RP/statusPic/Taka,_Imagin,_Shocker.PNG';
                                var subid = 3090;
                                var videourl = "";
                                var videourl2 = "";
                                var thumbnailpicture = '';
                                combodisplay (msgchannel, playeruid, lvl, consoleout, formdescription, validform, subid, mainpicture, thumbnailpicture);
                                //voicecatch (msg.member.voiceChannel, msg, videourl);
                                //voicecatch (msg.member.voiceChannel, msg, videourl2);
                        } else if ((taka + tora + cheetah) == 3){
                                var lvl = 3;
                                var consoleout = 'Taka, Tora, Cheetah!';
                                formdescription = '"Taka, Tora, Cheetah!"';
                                var mainpicture = 'http://www.maskedriders.info/Mee6RP/statusPic/TakaToraCheetah.png';
                                var subid = 3001;
                                var videourl = "";
                                var videourl2 = "";
                                var thumbnailpicture = '';
                                combodisplay (msgchannel, playeruid, lvl, consoleout, formdescription, validform, subid, mainpicture, thumbnailpicture);
                                //voicecatch (msg.member.voiceChannel, msg, videourl);
                                //voicecatch (msg.member.voiceChannel, msg, videourl2);
                        } else if ((taka + tora + zou) == 3){
                                var lvl = 3;
                                var consoleout = 'Taka, Tora, Zou!';
                                formdescription = '"Taka, Tora, Zou!"';
                                var mainpicture = 'http://www.maskedriders.info/Mee6RP/statusPic/KamenRiderOOOTakatorazoForm.png';
                                var subid = 3001;
                                var videourl = "";
                                var videourl2 = "";
                                var thumbnailpicture = '';
                                combodisplay (msgchannel, playeruid, lvl, consoleout, formdescription, validform, subid, mainpicture, thumbnailpicture);
                                //voicecatch (msg.member.voiceChannel, msg, videourl);
                                //voicecatch (msg.member.voiceChannel, msg, videourl2);
                        } else if ((taka + tora + condor) == 3){
                                var lvl = 3;
                                var consoleout = 'Taka, Tora, Condor!';
                                formdescription = '"Taka, Tora, Condor!"';
                                var mainpicture = 'http://www.maskedriders.info/Mee6RP/statusPic/TakaToraCondor.png';
                                var subid = 3001;
                                var videourl = "";
                                var videourl2 = "";
                                var thumbnailpicture = '';
                                combodisplay (msgchannel, playeruid, lvl, consoleout, formdescription, validform, subid, mainpicture, thumbnailpicture);
                                //voicecatch (msg.member.voiceChannel, msg, videourl);
                                //voicecatch (msg.member.voiceChannel, msg, videourl2);
                        } else if ((taka + tora + tako) == 3){
                                var lvl = 3;
                                var consoleout = 'Taka, Tora, Tako!';
                                formdescription = '"Taka, Tora, Tako!"';
                                var mainpicture = 'http://www.maskedriders.info/Mee6RP/statusPic/Screen_shot_2011-04-30_at_8.32.13_PM.png';
                                var subid = 3001;
                                var videourl = "";
                                var videourl2 = "";
                                var thumbnailpicture = '';
                                combodisplay (msgchannel, playeruid, lvl, consoleout, formdescription, validform, subid, mainpicture, thumbnailpicture);
                                //voicecatch (msg.member.voiceChannel, msg, videourl);
                                //voicecatch (msg.member.voiceChannel, msg, videourl2);
                        } else if ((taka + tora + kangaroo) == 3){
                                var lvl = 3;
                                var consoleout = 'Taka, Tora, Kangaroo!';
                                formdescription = '"Taka, Tora, Kangaroo!"';
                                var mainpicture = 'http://www.maskedriders.info/Mee6RP/statusPic/Kamen_Rider_OOO_TakaToraGaroo_Form.jpg';
                                var subid = 3001;
                                var videourl = "";
                                var videourl2 = "";
                                var thumbnailpicture = '';
                                combodisplay (msgchannel, playeruid, lvl, consoleout, formdescription, validform, subid, mainpicture, thumbnailpicture);
                                //voicecatch (msg.member.voiceChannel, msg, videourl);
                                //voicecatch (msg.member.voiceChannel, msg, videourl2);
                        } else if ((taka + kamakiri + batta) == 3){
                                var lvl = 3;
                                var consoleout = 'Taka, Kamakiri, Batta!';
                                formdescription = '"Taka, Kamakiri, Batta!"';
                                var mainpicture = 'http://www.maskedriders.info/Mee6RP/statusPic/Taka,_Kamikiri,_and_Batta.png';
                                var subid = 3001;
                                var videourl = "";
                                var videourl2 = "";
                                var thumbnailpicture = '';
                                combodisplay (msgchannel, playeruid, lvl, consoleout, formdescription, validform, subid, mainpicture, thumbnailpicture);
                                //voicecatch (msg.member.voiceChannel, msg, videourl);
                                //voicecatch (msg.member.voiceChannel, msg, videourl2);
                        } else if ((taka + kamakiri + cheetah) == 3){
                                var lvl = 3;
                                var consoleout = 'Taka, Kamakiri, Cheetah!';
                                formdescription = '"Taka, Kamakiri, Cheetah!"';
                                var mainpicture = 'http://www.maskedriders.info/Mee6RP/statusPic/Taka,_Kamakiri,_Cheetah.png';
                                var subid = 3001;
                                var videourl = "";
                                var videourl2 = "";
                                var thumbnailpicture = '';
                                combodisplay (msgchannel, playeruid, lvl, consoleout, formdescription, validform, subid, mainpicture, thumbnailpicture);
                                //voicecatch (msg.member.voiceChannel, msg, videourl);
                                //voicecatch (msg.member.voiceChannel, msg, videourl2);
                        } else if ((taka + kamakiri + zou) == 3){
                                var lvl = 3;
                                var consoleout = 'Taka, Kamakiri, Zou!';
                                formdescription = '"Taka, Kamakiri, Zou!"';
                                var mainpicture = 'http://www.maskedriders.info/Mee6RP/statusPic/KamenRiderOOOTakakirizoForm.png';
                                var subid = 3001;
                                var videourl = "";
                                var videourl2 = "";
                                var thumbnailpicture = '';
                                combodisplay (msgchannel, playeruid, lvl, consoleout, formdescription, validform, subid, mainpicture, thumbnailpicture);
                                //voicecatch (msg.member.voiceChannel, msg, videourl);
                                //voicecatch (msg.member.voiceChannel, msg, videourl2);
                        } else if ((taka + kamakiri + condor) == 3){
                                var lvl = 3;
                                var consoleout = 'Taka, Kamakiri, Condor!';
                                formdescription = '"Taka, Kamakiri, Condor!"';
                                var mainpicture = 'http://www.maskedriders.info/Mee6RP/statusPic/KamenRiderOOOTakakiridolForm.png';
                                var subid = 3001;
                                var videourl = "";
                                var videourl2 = "";
                                var thumbnailpicture = '';
                                combodisplay (msgchannel, playeruid, lvl, consoleout, formdescription, validform, subid, mainpicture, thumbnailpicture);
                                //voicecatch (msg.member.voiceChannel, msg, videourl);
                                //voicecatch (msg.member.voiceChannel, msg, videourl2);
                        } else if ((taka + kamakiri + tako) == 3){
                                var lvl = 3;
                                var consoleout = 'Taka, Kamakiri, Tako!';
                                formdescription = '"Taka, Kamakiri, Tako!"';
                                var mainpicture = 'http://www.maskedriders.info/Mee6RP/statusPic/KamenRiderOOOTakakiritaForm.png';
                                var subid = 3001;
                                var videourl = "";
                                var videourl2 = "";
                                var thumbnailpicture = '';
                                combodisplay (msgchannel, playeruid, lvl, consoleout, formdescription, validform, subid, mainpicture, thumbnailpicture);
                                //voicecatch (msg.member.voiceChannel, msg, videourl);
                                //voicecatch (msg.member.voiceChannel, msg, videourl2);
                        } else if ((taka + gorilla + batta) == 3){
                                var lvl = 3;
                                var consoleout = 'Taka, Gorilla, Batta!';
                                formdescription = '"Taka, Gorilla, Batta!"';
                                var mainpicture = 'http://www.maskedriders.info/Mee6RP/statusPic/TakaGoriBa.png';
                                var subid = 3001;
                                var videourl = "";
                                var videourl2 = "";
                                var thumbnailpicture = '';
                                combodisplay (msgchannel, playeruid, lvl, consoleout, formdescription, validform, subid, mainpicture, thumbnailpicture);
                                //voicecatch (msg.member.voiceChannel, msg, videourl);
                                //voicecatch (msg.member.voiceChannel, msg, videourl2);
                        } else if ((taka + gorilla + cheetah) == 3){
                                var lvl = 3;
                                var consoleout = 'Taka, Gorilla, Cheetah!';
                                formdescription = '"Taka, Gorilla, Cheetah!"';
                                var mainpicture = 'http://www.maskedriders.info/Mee6RP/statusPic/KamenRiderOOOTakagoritarForm.png';
                                var subid = 3001;
                                var videourl = "";
                                var videourl2 = "";
                                var thumbnailpicture = '';
                                combodisplay (msgchannel, playeruid, lvl, consoleout, formdescription, validform, subid, mainpicture, thumbnailpicture);
                                //voicecatch (msg.member.voiceChannel, msg, videourl);
                                //voicecatch (msg.member.voiceChannel, msg, videourl2);
                        } else if ((taka + gorilla + zou) == 3){
                                var lvl = 3;
                                var consoleout = 'Taka, Gorilla, Zou!';
                                formdescription = '"Taka, Gorilla, Zou!"';
                                var mainpicture = 'http://www.maskedriders.info/Mee6RP/statusPic/KamenRiderOOOTakagorizoForm.png';
                                var subid = 3001;
                                var videourl = "";
                                var videourl2 = "";
                                var thumbnailpicture = '';
                                combodisplay (msgchannel, playeruid, lvl, consoleout, formdescription, validform, subid, mainpicture, thumbnailpicture);
                                //voicecatch (msg.member.voiceChannel, msg, videourl);
                                //voicecatch (msg.member.voiceChannel, msg, videourl2);
                        } else if ((taka + gorilla + condor) == 3){
                                var lvl = 3;
                                var consoleout = 'Taka, Gorilla, Condor!';
                                formdescription = '"Taka, Gorilla, Condor!"';
                                var mainpicture = 'http://www.maskedriders.info/Mee6RP/statusPic/KamenRiderOOOTakagoridolForm.png';
                                var subid = 3001;
                                var videourl = "";
                                var videourl2 = "";
                                var thumbnailpicture = '';
                                combodisplay (msgchannel, playeruid, lvl, consoleout, formdescription, validform, subid, mainpicture, thumbnailpicture);
                                //voicecatch (msg.member.voiceChannel, msg, videourl);
                                //voicecatch (msg.member.voiceChannel, msg, videourl2);
                        } else if ((taka + gorilla + tako) == 3){
                                var lvl = 3;
                                var consoleout = 'Taka, Gorilla, Tako!';
                                formdescription = '"Taka, Gorilla, Tako!"';
                                var mainpicture = 'http://www.maskedriders.info/Mee6RP/statusPic/TakaGoriTa.png';
                                var subid = 3001;
                                var videourl = "";
                                var videourl2 = "";
                                var thumbnailpicture = '';
                                combodisplay (msgchannel, playeruid, lvl, consoleout, formdescription, validform, subid, mainpicture, thumbnailpicture);
                                //voicecatch (msg.member.voiceChannel, msg, videourl);
                                //voicecatch (msg.member.voiceChannel, msg, videourl2);
                        } else if ((taka + kujaku + batta) == 3){
                                var lvl = 3;
                                var consoleout = 'Taka, Kujaku, Batta!';
                                formdescription = '"Taka, Kujaku, Batta!"';
                                var mainpicture = 'http://www.maskedriders.info/Mee6RP/statusPic/TakaKujakuBatta.png';
                                var subid = 3001;
                                var videourl = "";
                                var videourl2 = "";
                                var thumbnailpicture = '';
                                combodisplay (msgchannel, playeruid, lvl, consoleout, formdescription, validform, subid, mainpicture, thumbnailpicture);
                                //voicecatch (msg.member.voiceChannel, msg, videourl);
                                //voicecatch (msg.member.voiceChannel, msg, videourl2);
                        } else if ((taka + kujaku + cheetah) == 3){
                                var lvl = 3;
                                var consoleout = 'Taka, Kujaku, Cheetah!';
                                formdescription = '"Taka, Kujaku, Cheetah!"';
                                var mainpicture = 'http://www.maskedriders.info/Mee6RP/statusPic/KamenRiderOOOTakajatarForm.png';
                                var subid = 3001;
                                var videourl = "";
                                var videourl2 = "";
                                var thumbnailpicture = '';
                                combodisplay (msgchannel, playeruid, lvl, consoleout, formdescription, validform, subid, mainpicture, thumbnailpicture);
                                //voicecatch (msg.member.voiceChannel, msg, videourl);
                                //voicecatch (msg.member.voiceChannel, msg, videourl2);
                        } else if ((taka + kujaku + zou) == 3){
                                var lvl = 3;
                                var consoleout = 'Taka, Kujaku, Zou!';
                                formdescription = '"Taka, Kujaku, Zou!"';
                                var mainpicture = 'http://www.maskedriders.info/Mee6RP/statusPic/KamenRiderOOOTakajazoForm.png';
                                var subid = 3001;
                                var videourl = "";
                                var videourl2 = "";
                                var thumbnailpicture = '';
                                combodisplay (msgchannel, playeruid, lvl, consoleout, formdescription, validform, subid, mainpicture, thumbnailpicture);
                                //voicecatch (msg.member.voiceChannel, msg, videourl);
                                //voicecatch (msg.member.voiceChannel, msg, videourl2);
                        } else if ((taka + kujaku + tako) == 3){
                                var lvl = 3;
                                var consoleout = 'Taka, Kujaku, Tako!';
                                formdescription = '"Taka, Kujaku, Tako!"';
                                var mainpicture = 'http://www.maskedriders.info/Mee6RP/statusPic/KamenRiderOOOTakajataForm.png';
                                var subid = 3001;
                                var videourl = "";
                                var videourl2 = "";
                                var thumbnailpicture = '';
                                combodisplay (msgchannel, playeruid, lvl, consoleout, formdescription, validform, subid, mainpicture, thumbnailpicture);
                                //voicecatch (msg.member.voiceChannel, msg, videourl);
                                //voicecatch (msg.member.voiceChannel, msg, videourl2);
                        } else if ((taka + unagi + batta) == 3){
                                var lvl = 3;
                                var consoleout = 'Taka, Unagi, Batta!';
                                formdescription = '"Taka, Unagi, Batta!"';
                                var mainpicture = 'http://www.maskedriders.info/Mee6RP/statusPic/TakaUnagiBatta.png';
                                var subid = 3001;
                                var videourl = "";
                                var videourl2 = "";
                                var thumbnailpicture = '';
                                combodisplay (msgchannel, playeruid, lvl, consoleout, formdescription, validform, subid, mainpicture, thumbnailpicture);
                                //voicecatch (msg.member.voiceChannel, msg, videourl);
                                //voicecatch (msg.member.voiceChannel, msg, videourl2);
                        } else if ((taka + unagi + cheetah) == 3){
                                var lvl = 3;
                                var consoleout = 'Taka, Unagi, Cheetah!';
                                formdescription = '"Taka, Unagi, Cheetah!"';
                                var mainpicture = 'http://www.maskedriders.info/Mee6RP/statusPic/Screen_shot_2011-05-03_at_10.18.09_PM.png';
                                var subid = 3001;
                                var videourl = "";
                                var videourl2 = "";
                                var thumbnailpicture = '';
                                combodisplay (msgchannel, playeruid, lvl, consoleout, formdescription, validform, subid, mainpicture, thumbnailpicture);
                                //voicecatch (msg.member.voiceChannel, msg, videourl);
                                //voicecatch (msg.member.voiceChannel, msg, videourl2);
                        } else if ((taka + unagi + zou) == 3){
                                var lvl = 3;
                                var consoleout = 'Taka, Unagi, Zou!';
                                formdescription = '"Taka, Unagi, Zou!"';
                                var mainpicture = 'http://www.maskedriders.info/Mee6RP/statusPic/Screen_shot_2011-07-09_at_8.16.31_PM.png';
                                var subid = 3001;
                                var videourl = "";
                                var videourl2 = "";
                                var thumbnailpicture = '';
                                combodisplay (msgchannel, playeruid, lvl, consoleout, formdescription, validform, subid, mainpicture, thumbnailpicture);
                                //voicecatch (msg.member.voiceChannel, msg, videourl);
                                //voicecatch (msg.member.voiceChannel, msg, videourl2);
                        } else if ((taka + unagi + condor) == 3){
                                var lvl = 3;
                                var consoleout = 'Taka, Unagi, Condor!';
                                formdescription = '"Taka, Unagi, Condor!"';
                                var mainpicture = 'http://www.maskedriders.info/Mee6RP/statusPic/KamenRiderOOOTakaudolForm.png';
                                var subid = 3001;
                                var videourl = "";
                                var videourl2 = "";
                                var thumbnailpicture = '';
                                combodisplay (msgchannel, playeruid, lvl, consoleout, formdescription, validform, subid, mainpicture, thumbnailpicture);
                                //voicecatch (msg.member.voiceChannel, msg, videourl);
                                //voicecatch (msg.member.voiceChannel, msg, videourl2);
                        } else if ((taka + unagi + tako) == 3){
                                var lvl = 3;
                                var consoleout = 'Taka, Unagi, Tako!';
                                formdescription = '"Taka, Unagi, Tako!"';
                                var mainpicture = 'http://www.maskedriders.info/Mee6RP/statusPic/Screen_shot_2011-05-03_at_10.19.02_PM.png';
                                var subid = 3001;
                                var videourl = "";
                                var videourl2 = "";
                                var thumbnailpicture = '';
                                combodisplay (msgchannel, playeruid, lvl, consoleout, formdescription, validform, subid, mainpicture, thumbnailpicture);
                                //voicecatch (msg.member.voiceChannel, msg, videourl);
                                //voicecatch (msg.member.voiceChannel, msg, videourl2);
                        } else if ((taka + panda + batta) == 3){
                                var lvl = 3;
                                var consoleout = 'Taka, Panda, Batta!';
                                formdescription = '"Taka, Panda, Batta!"';
                                var mainpicture = 'http://www.maskedriders.info/Mee6RP/statusPic/SHFiguarts_OOO_Takapanba.jpg';
                                var subid = 3001;
                                var videourl = "";
                                var videourl2 = "";
                                var thumbnailpicture = '';
                                combodisplay (msgchannel, playeruid, lvl, consoleout, formdescription, validform, subid, mainpicture, thumbnailpicture);
                                //voicecatch (msg.member.voiceChannel, msg, videourl);
                                //voicecatch (msg.member.voiceChannel, msg, videourl2);
                        } else if ((taka + kangaroo + batta) == 3){
                                var lvl = 3;
                                var consoleout = 'Taka, Kangaroo, Batta!';
                                formdescription = '"Taka, Kangaroo, Batta!"';
                                var mainpicture = 'http://www.maskedriders.info/Mee6RP/statusPic/Kamen_Rider_OOO_TakaGarooBa_Form.jpg';
                                var subid = 3001;
                                var videourl = "";
                                var videourl2 = "";
                                var thumbnailpicture = '';
                                combodisplay (msgchannel, playeruid, lvl, consoleout, formdescription, validform, subid, mainpicture, thumbnailpicture);
                                //voicecatch (msg.member.voiceChannel, msg, videourl);
                                //voicecatch (msg.member.voiceChannel, msg, videourl2);
                        } else if ((kuwagata + tora + batta) == 3){
                                var lvl = 3;
                                var consoleout = 'Kuwagata, Tora, Batta!';
                                formdescription = '"Kuwagata, Tora, Batta!"';
                                var mainpicture = 'http://www.maskedriders.info/Mee6RP/statusPic/Screen_shot_2011-05-03_at_10.17.14_PM.png';
                                var subid = 3001;
                                var videourl = "";
                                var videourl2 = "";
                                var thumbnailpicture = '';
                                combodisplay (msgchannel, playeruid, lvl, consoleout, formdescription, validform, subid, mainpicture, thumbnailpicture);
                                //voicecatch (msg.member.voiceChannel, msg, videourl);
                                //voicecatch (msg.member.voiceChannel, msg, videourl2);
                        } else if ((kuwagata + tora + cheetah) == 3){
                                var lvl = 3;
                                var consoleout = 'Kuwagata, Tora, Cheetah!';
                                formdescription = '"Kuwagata, Tora, Cheetah!"';
                                var mainpicture = 'http://www.maskedriders.info/Mee6RP/statusPic/KamenRiderOOOGatatoratarForm.png.png';
                                var subid = 3001;
                                var videourl = "";
                                var videourl2 = "";
                                var thumbnailpicture = '';
                                combodisplay (msgchannel, playeruid, lvl, consoleout, formdescription, validform, subid, mainpicture, thumbnailpicture);
                                //voicecatch (msg.member.voiceChannel, msg, videourl);
                                //voicecatch (msg.member.voiceChannel, msg, videourl2);
                        } else if ((kuwagata + tora + zou) == 3){
                                var lvl = 3;
                                var consoleout = 'Kuwagata, Tora, Zou!';
                                formdescription = '"Kuwagata, Tora, Zou!"';
                                var mainpicture = 'http://www.maskedriders.info/Mee6RP/statusPic/KamenRiderOOOGatatorazoForm.png.png';
                                var subid = 3001;
                                var videourl = "";
                                var videourl2 = "";
                                var thumbnailpicture = '';
                                combodisplay (msgchannel, playeruid, lvl, consoleout, formdescription, validform, subid, mainpicture, thumbnailpicture);
                                //voicecatch (msg.member.voiceChannel, msg, videourl);
                                //voicecatch (msg.member.voiceChannel, msg, videourl2);
                        } else if ((kuwagata + tora + condor) == 3){
                                var lvl = 3;
                                var consoleout = 'Kuwagata, Tora, Condor!';
                                formdescription = '"Kuwagata, Tora, Condor!"';
                                var mainpicture = 'http://www.maskedriders.info/Mee6RP/statusPic/Gatatoradol.png';
                                var subid = 3001;
                                var videourl = "";
                                var videourl2 = "";
                                var thumbnailpicture = '';
                                combodisplay (msgchannel, playeruid, lvl, consoleout, formdescription, validform, subid, mainpicture, thumbnailpicture);
                                //voicecatch (msg.member.voiceChannel, msg, videourl);
                                //voicecatch (msg.member.voiceChannel, msg, videourl2);
                        } else if ((kuwagata + tora + tako) == 3){
                                var lvl = 3;
                                var consoleout = 'Kuwagata, Tora, Tako!';
                                formdescription = '"Kuwagata, Tora, Tako!"';
                                var mainpicture = 'http://www.maskedriders.info/Mee6RP/statusPic/KamenRiderOOOGatatorataForm.png.png';
                                var subid = 3001;
                                var videourl = "";
                                var videourl2 = "";
                                var thumbnailpicture = '';
                                combodisplay (msgchannel, playeruid, lvl, consoleout, formdescription, validform, subid, mainpicture, thumbnailpicture);
                                //voicecatch (msg.member.voiceChannel, msg, videourl);
                                //voicecatch (msg.member.voiceChannel, msg, videourl2);
                        } else if ((kuwagata + kamakiri + cheetah) == 3){
                                var lvl = 3;
                                var consoleout = 'Kuwagata, Kamakiri, Cheetah!';
                                formdescription = '"Kuwagata, Kamakiri, Cheetah!"';
                                var mainpicture = 'http://www.maskedriders.info/Mee6RP/statusPic/KamenRiderOOOGatakiritarForm.png';
                                var subid = 3001;
                                var videourl = "";
                                var videourl2 = "";
                                var thumbnailpicture = '';
                                combodisplay (msgchannel, playeruid, lvl, consoleout, formdescription, validform, subid, mainpicture, thumbnailpicture);
                                //voicecatch (msg.member.voiceChannel, msg, videourl);
                                //voicecatch (msg.member.voiceChannel, msg, videourl2);
                        } else if ((kuwagata + kamakiri + zou) == 3){
                                var lvl = 3;
                                var consoleout = 'Kuwagata, Kamakiri, Zou!';
                                formdescription = '"Kuwagata, Kamakiri, Zou!"';
                                var mainpicture = 'http://www.maskedriders.info/Mee6RP/statusPic/KamenRiderOOOGatakirizoForm.png';
                                var subid = 3001;
                                var videourl = "";
                                var videourl2 = "";
                                var thumbnailpicture = '';
                                combodisplay (msgchannel, playeruid, lvl, consoleout, formdescription, validform, subid, mainpicture, thumbnailpicture);
                                //voicecatch (msg.member.voiceChannel, msg, videourl);
                                //voicecatch (msg.member.voiceChannel, msg, videourl2);
                        } else if ((kuwagata + kamakiri + condor) == 3){
                                var lvl = 3;
                                var consoleout = 'Kuwagata, Kamakiri, Condor!';
                                formdescription = '"Kuwagata, Kamakiri, Condor!"';
                                var mainpicture = 'http://www.maskedriders.info/Mee6RP/statusPic/KamenRiderOOOGatakiridolForm.png';
                                var subid = 3001;
                                var videourl = "";
                                var videourl2 = "";
                                var thumbnailpicture = '';
                                combodisplay (msgchannel, playeruid, lvl, consoleout, formdescription, validform, subid, mainpicture, thumbnailpicture);
                                //voicecatch (msg.member.voiceChannel, msg, videourl);
                                //voicecatch (msg.member.voiceChannel, msg, videourl2);
                        } else if ((kuwagata + kamakiri + tako) == 3){
                                var lvl = 3;
                                var consoleout = 'Kuwagata, Kamakiri, Tako!';
                                formdescription = '"Kuwagata, Kamakiri, Tako!"';
                                var mainpicture = 'http://www.maskedriders.info/Mee6RP/statusPic/KamenRiderOOOGatakiritaForm.png';
                                var subid = 3001;
                                var videourl = "";
                                var videourl2 = "";
                                var thumbnailpicture = '';
                                combodisplay (msgchannel, playeruid, lvl, consoleout, formdescription, validform, subid, mainpicture, thumbnailpicture);
                                //voicecatch (msg.member.voiceChannel, msg, videourl);
                                //voicecatch (msg.member.voiceChannel, msg, videourl2);
                        } else if ((kuwagata + gorilla + batta) == 3){
                                var lvl = 3;
                                var consoleout = 'Kuwagata, Gorilla, Batta!';
                                formdescription = '"Kuwagata, Gorilla, Batta!"';
                                var mainpicture = 'http://www.maskedriders.info/Mee6RP/statusPic/KamenRiderOOOGatagoribaForm.png';
                                var subid = 3001;
                                var videourl = "";
                                var videourl2 = "";
                                var thumbnailpicture = '';
                                combodisplay (msgchannel, playeruid, lvl, consoleout, formdescription, validform, subid, mainpicture, thumbnailpicture);
                                //voicecatch (msg.member.voiceChannel, msg, videourl);
                                //voicecatch (msg.member.voiceChannel, msg, videourl2);
                        } else if ((kuwagata + gorilla + cheetah) == 3){
                                var lvl = 3;
                                var consoleout = 'Kuwagata, Gorilla, Cheetah!';
                                formdescription = '"Kuwagata, Gorilla, Cheetah!"';
                                var mainpicture = 'http://www.maskedriders.info/Mee6RP/statusPic/Gatagorietar.png';
                                var subid = 3001;
                                var videourl = "";
                                var videourl2 = "";
                                var thumbnailpicture = '';
                                combodisplay (msgchannel, playeruid, lvl, consoleout, formdescription, validform, subid, mainpicture, thumbnailpicture);
                                //voicecatch (msg.member.voiceChannel, msg, videourl);
                                //voicecatch (msg.member.voiceChannel, msg, videourl2);
                        } else if ((kuwagata + gorilla + zou) == 3){
                                var lvl = 3;
                                var consoleout = 'Kuwagata, Gorilla, Zou!';
                                formdescription = '"Kuwagata, Gorilla, Zou!"';
                                var mainpicture = 'http://www.maskedriders.info/Mee6RP/statusPic/KamenRiderOOOGatagorizoForm.png';
                                var subid = 3001;
                                var videourl = "";
                                var videourl2 = "";
                                var thumbnailpicture = '';
                                combodisplay (msgchannel, playeruid, lvl, consoleout, formdescription, validform, subid, mainpicture, thumbnailpicture);
                                //voicecatch (msg.member.voiceChannel, msg, videourl);
                                //voicecatch (msg.member.voiceChannel, msg, videourl2);
                        } else if ((kuwagata + gorilla + condor) == 3){
                                var lvl = 3;
                                var consoleout = 'Kuwagata, Gorilla, Condor!';
                                formdescription = '"Kuwagata, Gorilla, Condor!"';
                                var mainpicture = 'http://www.maskedriders.info/Mee6RP/statusPic/KamenRiderOOOGatagoridolForm.png';
                                var subid = 3001;
                                var videourl = "";
                                var videourl2 = "";
                                var thumbnailpicture = '';
                                combodisplay (msgchannel, playeruid, lvl, consoleout, formdescription, validform, subid, mainpicture, thumbnailpicture);
                                //voicecatch (msg.member.voiceChannel, msg, videourl);
                                //voicecatch (msg.member.voiceChannel, msg, videourl2);
                        } else if ((kuwagata + gorilla + tako) == 3){
                                var lvl = 3;
                                var consoleout = 'Kuwagata, Gorilla, Tako!';
                                formdescription = '"Kuwagata, Gorilla, Tako!"';
                                var mainpicture = 'http://www.maskedriders.info/Mee6RP/statusPic/KamenRiderOOOGatagoritaForm.png';
                                var subid = 3001;
                                var videourl = "";
                                var videourl2 = "";
                                var thumbnailpicture = '';
                                combodisplay (msgchannel, playeruid, lvl, consoleout, formdescription, validform, subid, mainpicture, thumbnailpicture);
                                //voicecatch (msg.member.voiceChannel, msg, videourl);
                                //voicecatch (msg.member.voiceChannel, msg, videourl2);
                        } else if ((kuwagata + kujaku + batta) == 3){
                                var lvl = 3;
                                var consoleout = 'Kuwagata, Kujaku, Batta!';
                                formdescription = '"Kuwagata, Kujaku, Batta!"';
                                var mainpicture = 'http://www.maskedriders.info/Mee6RP/statusPic/KamenRiderOOOGatajabaForm.png';
                                var subid = 3001;
                                var videourl = "";
                                var videourl2 = "";
                                var thumbnailpicture = '';
                                combodisplay (msgchannel, playeruid, lvl, consoleout, formdescription, validform, subid, mainpicture, thumbnailpicture);
                                //voicecatch (msg.member.voiceChannel, msg, videourl);
                                //voicecatch (msg.member.voiceChannel, msg, videourl2);
                        } else if ((kuwagata + kujaku + cheetah) == 3){
                                var lvl = 3;
                                var consoleout = 'Kuwagata, Kujaku, Cheetah!';
                                formdescription = '"Kuwagata, Kujaku, Cheetah!"';
                                var mainpicture = 'http://www.maskedriders.info/Mee6RP/statusPic/KamenRiderOOOGatajatarForm.png';
                                var subid = 3001;
                                var videourl = "";
                                var videourl2 = "";
                                var thumbnailpicture = '';
                                combodisplay (msgchannel, playeruid, lvl, consoleout, formdescription, validform, subid, mainpicture, thumbnailpicture);
                                //voicecatch (msg.member.voiceChannel, msg, videourl);
                                //voicecatch (msg.member.voiceChannel, msg, videourl2);
                        } else if ((kuwagata + kujaku + zou) == 3){
                                var lvl = 3;
                                var consoleout = 'Kuwagata, Kujaku, Zou!';
                                formdescription = '"Kuwagata, Kujaku, Zou!"';
                                var mainpicture = 'http://www.maskedriders.info/Mee6RP/statusPic/KamenRiderOOOGatajazoForm.png';
                                var subid = 3001;
                                var videourl = "";
                                var videourl2 = "";
                                var thumbnailpicture = '';
                                combodisplay (msgchannel, playeruid, lvl, consoleout, formdescription, validform, subid, mainpicture, thumbnailpicture);
                                //voicecatch (msg.member.voiceChannel, msg, videourl);
                                //voicecatch (msg.member.voiceChannel, msg, videourl2);
                        } else if ((kuwagata + kujaku + condor) == 3){
                                var lvl = 3;
                                var consoleout = 'Kuwagata, Kujaku, Condor!';
                                formdescription = '"Kuwagata, Kujaku, Condor!"';
                                var mainpicture = 'http://www.maskedriders.info/Mee6RP/statusPic/KamenRiderOOOGatajadolForm.png';
                                var subid = 3001;
                                var videourl = "";
                                var videourl2 = "";
                                var thumbnailpicture = '';
                                combodisplay (msgchannel, playeruid, lvl, consoleout, formdescription, validform, subid, mainpicture, thumbnailpicture);
                                //voicecatch (msg.member.voiceChannel, msg, videourl);
                                //voicecatch (msg.member.voiceChannel, msg, videourl2);
                        } else if ((kuwagata + kujaku + tako) == 3){
                                var lvl = 3;
                                var consoleout = 'Kuwagata, Kujaku, Tako!';
                                formdescription = '"Kuwagata, Kujaku, Tako!"';
                                var mainpicture = 'http://www.maskedriders.info/Mee6RP/statusPic/KamenRiderOOOGatajataForm.png';
                                var subid = 3001;
                                var videourl = "";
                                var videourl2 = "";
                                var thumbnailpicture = '';
                                combodisplay (msgchannel, playeruid, lvl, consoleout, formdescription, validform, subid, mainpicture, thumbnailpicture);
                                //voicecatch (msg.member.voiceChannel, msg, videourl);
                                //voicecatch (msg.member.voiceChannel, msg, videourl2);
                        } else if ((kuwagata + unagi + batta) == 3){
                                var lvl = 3;
                                var consoleout = 'Kuwagata, Unagi, Batta!';
                                formdescription = '"Kuwagata, Unagi, Batta!"';
                                var mainpicture = 'http://www.maskedriders.info/Mee6RP/statusPic/KamenRiderOOOGataubaForm.png';
                                var subid = 3001;
                                var videourl = "";
                                var videourl2 = "";
                                var thumbnailpicture = '';
                                combodisplay (msgchannel, playeruid, lvl, consoleout, formdescription, validform, subid, mainpicture, thumbnailpicture);
                                //voicecatch (msg.member.voiceChannel, msg, videourl);
                                //voicecatch (msg.member.voiceChannel, msg, videourl2);
                        } else if ((kuwagata + unagi + cheetah) == 3){
                                var lvl = 3;
                                var consoleout = 'Kuwagata, Unagi, Cheetah!';
                                formdescription = '"Kuwagata, Unagi, Cheetah!"';
                                var mainpicture = 'http://www.maskedriders.info/Mee6RP/statusPic/KamenRiderOOOGatautarForm.png';
                                var subid = 3001;
                                var videourl = "";
                                var videourl2 = "";
                                var thumbnailpicture = '';
                                combodisplay (msgchannel, playeruid, lvl, consoleout, formdescription, validform, subid, mainpicture, thumbnailpicture);
                                //voicecatch (msg.member.voiceChannel, msg, videourl);
                                //voicecatch (msg.member.voiceChannel, msg, videourl2);
                        } else if ((kuwagata + unagi + zou) == 3){
                                var lvl = 3;
                                var consoleout = 'Kuwagata, Unagi, Zou!';
                                formdescription = '"Kuwagata, Unagi, Zou!"';
                                var mainpicture = 'http://www.maskedriders.info/Mee6RP/statusPic/KamenRiderOOOGatauzoForm.png';
                                var subid = 3001;
                                var videourl = "";
                                var videourl2 = "";
                                var thumbnailpicture = '';
                                combodisplay (msgchannel, playeruid, lvl, consoleout, formdescription, validform, subid, mainpicture, thumbnailpicture);
                                //voicecatch (msg.member.voiceChannel, msg, videourl);
                                //voicecatch (msg.member.voiceChannel, msg, videourl2);
                        } else if ((kuwagata + unagi + condor) == 3){
                                var lvl = 3;
                                var consoleout = 'Kuwagata, Unagi, Condor!';
                                formdescription = '"Kuwagata, Unagi, Condor!"';
                                var mainpicture = 'http://www.maskedriders.info/Mee6RP/statusPic/KamenRiderOOOGataudolForm.png';
                                var subid = 3001;
                                var videourl = "";
                                var videourl2 = "";
                                var thumbnailpicture = '';
                                combodisplay (msgchannel, playeruid, lvl, consoleout, formdescription, validform, subid, mainpicture, thumbnailpicture);
                                //voicecatch (msg.member.voiceChannel, msg, videourl);
                                //voicecatch (msg.member.voiceChannel, msg, videourl2);
                        } else if ((kuwagata + unagi + tako) == 3){
                                var lvl = 3;
                                var consoleout = 'Kuwagata, Unagi, Tako!';
                                formdescription = '"Kuwagata, Unagi, Tako!"';
                                var mainpicture = 'http://www.maskedriders.info/Mee6RP/statusPic/KamenRiderOOOGatautaForm.png';
                                var subid = 3001;
                                var videourl = "";
                                var videourl2 = "";
                                var thumbnailpicture = '';
                                combodisplay (msgchannel, playeruid, lvl, consoleout, formdescription, validform, subid, mainpicture, thumbnailpicture);
                                //voicecatch (msg.member.voiceChannel, msg, videourl);
                                //voicecatch (msg.member.voiceChannel, msg, videourl2);
                        } else {
                                var lvl = 3;
                                var consoleout = 'Unknown Combo.';
                                formdescription = '"Unknown Combo!"';
                                var mainpicture = '';
                                var subid = 3001;
                                var videourl = "";
                                var videourl2 = "";
                                var thumbnailpicture = '';
                                combodisplay (msgchannel, playeruid, lvl, consoleout, formdescription, validform, subid, mainpicture, thumbnailpicture);
                                //voicecatch (msg.member.voiceChannel, msg, videourl);
                                //voicecatch (msg.member.voiceChannel, msg, videourl2);
                        };//combos
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                connection.release(); // if error occured closed the connection
        });//querry "SELECT * FROM RP_Users WHERE ID = '" + uid + "'"
        });//get connection
};//exports run

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: [],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "henshin(ooo)",
  description: "",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};

function MedalEmbed (color, iomage, chanel){
const RiderEmbed = new discord.RichEmbed()
      RiderEmbed.setColor(color)
      RiderEmbed.setImage(iomage)
      chanel.sendEmbed(
      RiderEmbed, '', { disableEveryone: true }
      );//message.channel.sendEmbed
}//function


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

function combodisplay (chanel, plr, plevel, consolelogging, descr, mainclassid, subclassid, riderpic, thumbnail){
        console.log (consolelogging);
              if (thumbnail == ''){thumbnail = 'http://media.animevice.com/uploads/0/6872/810528-kamen_rider_ooo_symbol_by_alpha_vector.jpg';};
        mysqlPool.getConnection(function(err, connection) {
        if(err) throw err;
        connection.query("UPDATE RP_Users SET CLASS_ID_Sub = " + subclassid + " WHERE ID = '" + plr + "'");
        connection.query("UPDATE RP_Users SET Power_Mult = " + (plevel + 1) + " WHERE ID = '" + plr + "'");
        const comboEmbed2 = new discord.RichEmbed()
              comboEmbed2.setAuthor('Jungle OOO', settings.botpic)
              comboEmbed2.setDescription('Level: ' + plevel, true)
              comboEmbed2.setColor('#C0C0C0')
              comboEmbed2.setTimestamp()
              comboEmbed2.setURL('http://www.maskedriders.info/Mee6RP/index.php')
              comboEmbed2.setThumbnail(thumbnail)
              if (riderpic != ''){comboEmbed2.setImage(riderpic)}
              comboEmbed2.setFooter('Data Card ~ ' + settings.PlayerClassName(mainclassid, "no") + ' ' + settings.PlayerClassName(subclassid), settings.serverpic)
              chanel.sendEmbed(
              comboEmbed2, descr, { disableEveryone: true }
              );//message.channel.sendEmbed
              connection.release();// After performing the operation then closed the connection.
        });//get connection
};//function

function voicecatch (voicechan, chanel, file){
        if (!voicechan) {
                chanel.reply(`Please be in a voice channel first!`);
        } else {
		settings.voiceChannel = voicechan;
                PlayAudio(file, settings.voiceChannel);
                settings.array.push(file);
        }//if else
};//function
