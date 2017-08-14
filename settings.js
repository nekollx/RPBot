exports.dbhost = "~~~~~~~~~~~~~~~~~";
exports.dbuser = "~~~~~~~~~~~~~~~~~";
exports.dbpassword = "~~~~~~~~~~~~~~~~~";

exports.dbdatabase = "nekollx_MEE6RP";
exports.dbtable = "RP_Users";
exports.dbskilltable = "RP_Player_Perk";
exports.dbweaponarmortable = "RP_Weapons_Armor";
exports.dbnpctable = "RP_NPCs";
exports.dbbuffdebufftable = "RP_BUFF_DeBUFF";
exports.playerinventory = "RP_Player_Items";
exports.playerforms = "RP_Player_Forms";

exports.serverpic = 'https://images.discordapp.net/icons/267482689529970698/eea7c3b84d374a8e4d857bee5995788e.jpg';
exports.botpic = 'https://cdn.discordapp.com/app-icons/275766529121845249/d1fd57e9a1058948a5441d61b579966d.jpg';
exports.neopic = 'https://cdn.discordapp.com/app-icons/280837589303296010/8faa6d6cc6edc4a3ef7e87a53aeb4d88.jpg';
exports.avypic = 'http://www.maskedriders.info/Mee6RP/statusPic/discord_logo_by_evilbob0-d9vik37.png';
exports.blankpic = 'http://www.maskedriders.info/Mee6RP/statusPic/discord_logo_by_evilbob0-d9vik37.png';

exports.bot_ID_RPBot = 275766529121845249;
exports.bot_ID_Discord_RPG = 170915625722576896;
exports.bot_ID_Mee6 = 159985870458322944;
exports.bot_ID_Nightbot = 83010416610906112;
exports.bot_ID_Pikagirl = 169678500893163520;
exports.bot_ID_Neo = 280837589303296010;
exports.bot_ID_Eris = 189702078958927872;
exports.bot_ID_Sweetie_Bot = 141016540240805888;
exports.bot_ID_Nadeko = 116275390695079945;

exports.channel = '267482689529970698'; 
exports.testchannel = '277861511723220992'; 
exports.voiceChannel = '267482689529970699';
exports.textChannel = '267482689529970698';
exports.SPECIALFloor         = -99999;
exports.HPFloor          = -999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999;
exports.ABSOLUTEFLOOR   = -9999999999;
exports.SPECIALLimit         = 999999;
exports.MoveComboLimit       = 999999;
exports.HPLimit          = 999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999;
exports.ABSOLUTECAP      = 9999999999;
exports.WeightCap = 700;
exports.WeightMin = 1;
exports.HeightCap = 700;
exports.HeightMin = 1;
exports.FitnessMin = -3;
exports.FitnessLimit = 33;
exports.DamageClassMin = 0;
exports.DamageClassLimit = 9;
exports.botTalking = 0;
exports.playerclassIDName = 0;
exports.playerRank = 0;
exports.playerRankTotal = 0;
exports.robocount = Math.floor(Math.random() * 1000);
exports.array = new Array();//generic array
exports.variable = 0;//generic variable

exports.UserList = new Map();
exports.NPC_List = new Map();
exports.Weapons_Armor_List = new Map();
exports.Buff_Debuff_List = new Map();
exports.UserSkillList = new Map();
exports.User_Inventory = new Map();
exports.User_Forms = new Map();
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
exports.CombatLogString = function(uidname, action, rankstoadd, mentionedname, combatbuff, combatDMG, LowerTotal, UpperTotal, combatbuffmax, Current_HP, ResistBALISTIC2, LowerResistTotal, ResistBALISTIC2max, targethp, HPFloor, targetmaxhp, hitchance, hitroll, attackerAP, apcst, critroll, threshold, critmulti) {
        var hitsucess  = 100 - hitchance;
        var combatlog  = uidname + ' used ***' + action;
        var displayhp = targethp;
        var totaldamage = (combatDMG + combatbuff);
        var hpdifference = (targethp / targetmaxhp) * 100;

        if (targethp < HPFloor){displayhp = HPFloor;} 
        if (rankstoadd > 1){combatlog += ' x' + rankstoadd.toLocaleString();};

            combatlog += '*** on '+ mentionedname + '\n';
            combatlog += 'And a **Hit Chance of ' + (hitchance).toLocaleString() + '%**\n'
            combatlog += 'And a **AP Cost of  '+ (apcst*rankstoadd).toLocaleString() + '** out of **' + (attackerAP).toLocaleString() + '**\n'
 
            if ((apcst*rankstoadd) <= attackerAP){
                if (hitchance < 100){
                    combatlog += 'Rolling for a hit...\n'
                    combatlog += 'Need to roll higher then '+(hitsucess).toLocaleString()+'% and got a '+(hitroll).toLocaleString()+'%\n'
                };//if (hitchance < 100)
 
                if (hitroll >= hitsucess){
                    if (Current_HP > 0){
                        if (critroll >= threshold){
                            totaldamage = totaldamage * critmulti;
                            combatlog  += '**CRITICAL HIT! ' + totaldamage.toLocaleString() + ' ('+ critmulti +'X)** damage dealt!\n';
                        } else {
                            combatlog += '**HIT! ' + totaldamage.toLocaleString() + '** damage dealt!\n';
                        };//if (CritRoll >= CritSucessThreshold)

                        combatlog += mentionedname + ' resisted **' + ResistBALISTIC2.toLocaleString() + '** damage!\n';
                        if (ResistBALISTIC2 >= totaldamage){
                            combatlog += uidname + ' could not breach ' + mentionedname + '\'s defenses and **deals no damage**!\n'
                        } else {
                            combatlog += '**' + displayhp.toLocaleString() + ' (' + hpdifference.toLocaleString() + '%) ** of *' + targetmaxhp.toLocaleString() + '* HP ' + mentionedname + '\'s remains!'
                        };//if (ResistBALISTIC2 >= totaldamage)
                    };//if else (Current_HP > 0)
                } else {
                combatlog += '**MISSED**\n'+ mentionedname + ' dodged your attack!';
                };//if (hitroll > hitsucess)
            }else {
                combatlog += 'But '+ uidname + ' is too exausted (not enough AP) to use the attack and it fails!';
            };//if ((apcst*rankstoadd) <= attackerAP)       

return combatlog;
};//function

exports.getRandomInt = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}//function getRandomInt(min, max)

exports.ClassNameByKey = function(id){
    var ClassName = "Kamen Rider ";
    if ((id.toLowerCase() == "ex") || (id.toLowerCase().startsWith() == "exa")){ClassName += "Ex-Aid";};
    if ((id.toLowerCase() == "brv") || (id.toLowerCase().startsWith() == "bra")){ClassName += "Brave";};
    if ((id.toLowerCase() == "snp") || (id.toLowerCase().startsWith() == "sni")){ClassName += "Snipe";};
    if ((id.toLowerCase() == "lzr") || (id.toLowerCase().startsWith() == "las")){ClassName += "Laser";};
    if ((id.toLowerCase() == "gmn") || (id.toLowerCase() == "genm")){ClassName += "Genm";};
    if ((id.toLowerCase() == "gmn0") || (id.toLowerCase() == "genmzero")){ClassName += "Genm Zero";};
    if ((id.toLowerCase() == "pop") || (id.toLowerCase().startsWith() == "popp")){ClassName += "Poppi";};
    if ((id.toLowerCase() == "prdx") || (id.toLowerCase() == "paradx")){ClassName += "Para-DX";};
    if ((id.toLowerCase() == "prd") || (id.toLowerCase() == "parad")){ClassName = "Bugster: Parad";};
    if ((id.toLowerCase() == "lov") || (id.toLowerCase().startsWith() == "lovet")){ClassName = "Bugster: Lovetica";};
    if ((id.toLowerCase() == "gph") || (id.toLowerCase().startsWith() == "graphi")){ClassName = "Bugster: Graphite";};
    if ((id.toLowerCase() == "dbg") || (id.toLowerCase().startsWith() == "debu")){ClassName = "Bugster: Debug";};
    if ((id.toLowerCase() == "slt") || (id.toLowerCase().startsWith() == "salt")){ClassName = "Bugster: Salty";};
    if ((id.toLowerCase() == "cha") || (id.toLowerCase().startsWith() == "char")){ClassName = "Bugster: Charlie";};
    if ((id.toLowerCase() == "ara") || (id.toLowerCase().startsWith() == "aranb")){ClassName = "Bugster: Aranbura";};
    if ((id.toLowerCase() == "rvl") || (id.toLowerCase().startsWith() == "revol")){ClassName = "Bugster: Revol";};
    if ((id.toLowerCase() == "mtr") || (id.toLowerCase().startsWith() == "motor")){ClassName = "Bugster: Motors";};
    if ((id.toLowerCase() == "hta") || (id.toLowerCase().startsWith() == "hate")){ClassName = "Bugster: Hatena";};
    if ((id.toLowerCase() == "gat") || (id.toLowerCase().startsWith() == "gatt")){ClassName = "Bugster: Gatton";};
    if ((id.toLowerCase() == "ver") || (id.toLowerCase().startsWith() == "vern")){ClassName = "Bugster: Vernier";};
    if ((id.toLowerCase() == "kai") || (id.toLowerCase().startsWith() == "kaid")){ClassName = "Bugster: Kaiden";};
    if ((id.toLowerCase().startsWith() == "cro")){ClassName += "Cronos";};
    if ((id.toLowerCase() == "kiin")){ClassName += "Kiin";};
    if ((id.toLowerCase().startsWith() == "ryu") || (id.toLowerCase().startsWith() == "drag")){ClassName += "Ryuu";};
    if ((id.toLowerCase() == "fbs") || (id.toLowerCase().startsWith() == "furb")){ClassName += "Furbus";};
    if ((id.toLowerCase() == "agl") || (id.toLowerCase().startsWith() == "ange")){ClassName += "Angel";};
    if ((id.toLowerCase() == "hkn") || (id.toLowerCase().startsWith() == "hake")){ClassName += "HaKen";};
    if ((id.toLowerCase().startsWith() == "kuk")){ClassName += "Kūki";};
    if ((id.toLowerCase() == "tka") || (id.toLowerCase().startsWith() == "tak")){ClassName += "Taka";};
    if ((id.toLowerCase() == "ogu") || (id.toLowerCase().startsWith() == "onga")){ClassName += "Ongaku";};
    if ((id.toLowerCase() == "kng") || (id.toLowerCase() == "king")){ClassName += "King";};
    if ((id.toLowerCase() == "mvk") || (id.toLowerCase().startsWith() == "mave")){ClassName += "Maverick";};
    if ((id.toLowerCase().startsWith() == "lex")){ClassName = "Ride Player Lexx";};
    return ClassName;
}//function ClassNameByKey

exports.PlayerClassName = function(classid, skip = "no"){
    var ClassName = "";
    if ((classid == 0) && (skip == "no")){ClassName = "Civilian";};
    if ((classid > 799) && (skip == "no")){ClassName = "Kamen Rider";};
    
    if (classid == 800){ClassName += " Den-O";};
    if (classid == 810){ClassName += " Zeronos";};
    if (classid == 820){ClassName += " Gaoh";};
    if (classid == 830){ClassName += " Nega Den-O";};
    if (classid == 840){ClassName += " Skull";};
    if (classid == 850){ClassName += " Hijack";};
    if (classid == 860){ClassName += " New Den-O";};
    if (classid == 870){ClassName += " G Den-O";};

    if (classid == 900){ClassName += " Kiva";};
    if (classid == 910){ClassName += " Ixa";};
    if (classid == 911){ClassName += " Ixa (Prototype)";};
    if (classid == 920){ClassName += " Saga";};
    if (classid == 930){ClassName += " Dark Kiva";};
    if (classid == 940){ClassName += " New Kiva";};
    if (classid == 950){ClassName += " Rey";};
    if (classid == 960){ClassName += " Arc";};
    if (classid == 970){ClassName += " Kiva-la";};

    if (classid == 1000){ClassName += " Decade";};
    if (classid == 1100){ClassName += " DiEnd";};

    if (classid == 2000){ClassName += " Double";};
    if (classid == 2100){ClassName += " Acell";};
    if (classid == 2200){ClassName += " Lost";};

    if (classid == 3000){ClassName += " OOO";};
        if (classid == 3001){ClassName += " {Unknown Combo}";};
        if (classid == 3010){ClassName += " {TaToBa Combo [Super]}";};
        if (classid == 3011){ClassName += " {TaToBa Combo}";};
        if (classid == 3020){ClassName += " {TaJaDoru Combo}";};
        if (classid == 3030){ClassName += " {GataKiriBa Combo}";};
        if (classid == 3040){ClassName += " {LaToraTa Combo}";};
        if (classid == 3050){ClassName += " {SaGouZou Combo}";};
        if (classid == 3060){ClassName += " {ShaUTa Combo}";};
        if (classid == 3070){ClassName += " {PuToTyranno Combo}";};
        if (classid == 3080){ClassName += " {BuraKaWani Combo}";};
        if (classid == 3090){ClassName += " {TaMaShii Combo}";};
    if (classid == 3100){ClassName += " Birth";};
    if (classid == 3110){ClassName += " Birth (Prototype)";};

    if (classid == 4000){ClassName += " Fourze";};
    if (classid == 4100){ClassName += " Mateor";};
    if (classid == 4110){ClassName += " Nadashiko";};

    if (classid == 5000){ClassName += " Wizard";};
        if (classid == 5010){ClassName += " {Flame Style}";};
        if (classid == 5011){ClassName += " {Flame Dragon Style}";};
        if (classid == 5020){ClassName += " {Water Style}";};
        if (classid == 5021){ClassName += " {Water Dragon Style}";};
        if (classid == 5030){ClassName += " {Land Style}";};
        if (classid == 5031){ClassName += " {Land Dragon Style}";};
        if (classid == 5040){ClassName += " {Hurricane Style}";};
        if (classid == 5041){ClassName += " {Hurricane Dragon Style}";};
    if (classid == 5100){ClassName += " Wiseman";};
        if (classid == 5110){ClassName += " {All Dragon Style}";};
        if (classid == 5111){ClassName += " {Special Rush Style}";};
        if (classid == 5120){ClassName += " {Furbus Style}";};
        if (classid == 5130){ClassName += " {Non Elemental}";};
        if (classid == 5140){ClassName += " {Volcano Style}";};
        if (classid == 5150){ClassName += " {Volcano Phantom Style}";};
        if (classid == 5160){ClassName += " {Hydro Style}";};
        if (classid == 5161){ClassName += " {Hydro Phantom Style}";};
    if (classid == 5200){ClassName += " Mage";};
        if (classid == 5210){ClassName += " {Infinity Style}";};
        if (classid == 5211){ClassName += " {Infinity Dragon Style}";};
        if (classid == 5212){ClassName += " {Infinity Dragon Gold Style}";};
        if (classid == 5213){ClassName += " {All Mighty Style}";};
        if (classid == 5214){ClassName += " {All Mighty Phantom Style}";};
        if (classid == 5215){ClassName += " {All Mighty Phantom Gold Style}";};
        if (classid == 5220){ClassName += " {Dark Lord Style}";};
        if (classid == 5230){ClassName += " {All Phantom Style}";};
        if (classid == 5240){ClassName += " {Hyper}";};
    if (classid == 5300){ClassName += " Sorcerer";};
        if (classid == 5310){ClassName += " {Horizon Style}";};
        if (classid == 5320){ClassName += " {Horizon Phantom Style}";};
        if (classid == 5330){ClassName += " {Tempest Style}";};
        if (classid == 5340){ClassName += " {Tempest Phantom Style}";};
    if (classid == 5400){ClassName += " Beast";};
        if (classid == 5410){ClassName += " {Falco Mantle}";};
        if (classid == 5420){ClassName += " {Buffa Mantle}";};
        if (classid == 5430){ClassName += " {Dolphi Mantle}";};
        if (classid == 5440){ClassName += " {Chameleo Mantle}";};
        if (classid == 5450){ClassName += " {All Griphon Style}";};
        if (classid == 5460){ClassName += " {Flame Griphon Style}";};
        if (classid == 5470){ClassName += " {Water Griphon Style}";};
        if (classid == 5480){ClassName += " {Land Griphon Style}";};
        if (classid == 5481){ClassName += " {Hurricane Griphon Style}";};
        if (classid == 5482){ClassName += " {Infinity Griphon Style}";};
        if (classid == 5483){ClassName += " {Infinity Griphon Gold Style}";};
    if (classid == 5500){ClassName += " Beast (Magic Land)";};

    if (classid == 6000){ClassName += " Gaim";};
        if (classid == 6010){ClassName += " {Orange Arms}";};
        if (classid == 6011){ClassName += " {Pine Arms}";};
        if (classid == 6012){ClassName += " {Ichigo Arms}";};
        if (classid == 6013){ClassName += " {Suika Arms}";};
        if (classid == 6014){ClassName += " {Banana Arms}";};
        if (classid == 6015){ClassName += " {Donguri Arms}";};
        if (classid == 6016){ClassName += " {Durian Arms}";};
        if (classid == 6017){ClassName += " {Kachidoki Arms}";};
        if (classid == 6018){ClassName += " {Kiwami Arms}";};
        if (classid == 6019){ClassName += " {Kabi Orange Arms}";};
        if (classid == 6020){ClassName += " {Fresh Orange Arms}";};
        if (classid == 6021){ClassName += " {Fresh Pine Arms}";};
        if (classid == 6022){ClassName += " {Fresh Ichigo Arms}";};
        if (classid == 6023){ClassName += " {Fresh Suika Arms}";};
        if (classid == 6024){ClassName += " {Fresh Banana Arms}";};
        if (classid == 6025){ClassName += " {Fresh Donguri Arms}";};
        if (classid == 6026){ClassName += " {Fresh Durian Arms}";};
    if (classid == 6100){ClassName += " Baron";};
        if (classid == 6110){ClassName += " {Mango Arms}";};
        if (classid == 6111){ClassName += " {Fresh Mango Arms}";};
        if (classid == 6112){ClassName += " {Kabi Mango Arms}";};
        if (classid == 6120){ClassName += " {Melon Arms}";};
        if (classid == 6121){ClassName += " {Fresh Melon Arms}";};
        if (classid == 6122){ClassName += " {Kabi Melon Arms}";};
        if (classid == 6130){ClassName += " {Kiwi Arms}";};
        if (classid == 6131){ClassName += " {Fresh Kiwi Arms}";};
        if (classid == 6132){ClassName += " {Kabi Kiwi Arms}";};
        if (classid == 6140){ClassName += " {Forbidden Ringo Arms}";};
        if (classid == 6150){ClassName += " {Budou Arms}";};
        if (classid == 6151){ClassName += " {Fresh Budou Arms}";};
        if (classid == 6152){ClassName += " {Kabi Budou Arms}";};
        if (classid == 6160){ClassName += " {Blood Orange Arms}";};
        if (classid == 6170){ClassName += " {Watermelon Arms}";};
        if (classid == 6171){ClassName += " {Fresh Watermelon Arms}";};
        if (classid == 6172){ClassName += " {Kabi Watermelon Arms}";};
        if (classid == 6180){ClassName += " {Matsubokkuri Arms}";};
        if (classid == 6181){ClassName += " {Fresh Matsubokkuri Arms}";};
        if (classid == 6182){ClassName += " {Kabi Matsubokkuri Arms}";};
        if (classid == 6190){ClassName += " {Kurumi Arms}";};
        if (classid == 6191){ClassName += " {Fresh Kurumi Arms}";};
        if (classid == 6192){ClassName += " {Kabi Kurumi Arms}";};
    if (classid == 6200){ClassName += " Ryugen";};
        if (classid == 6210){ClassName += " {Yomotsuheguri Arms}";};
        if (classid == 6220){ClassName += " {Black Ringo Arms}";};
        if (classid == 6230){ClassName += " {Zakuro Arms}";};
        if (classid == 6231){ClassName += " {Fresh Zakuro Arms}";};
        if (classid == 6232){ClassName += " {Kabi Zakuro Arms}";};
        if (classid == 6240){ClassName += " {Fifteen Arms}";};
        if (classid == 6250){ClassName += " {Golden Ringo Arms}";};
        if (classid == 6260){ClassName += " {Black Orange Arms}";};
        if (classid == 6261){ClassName += " {Black Energy Lemon Arms}";};
        if (classid == 6270){ClassName += " {Silver Ringo Arms}";};
        if (classid == 6280){ClassName += " {Maja Arms}";};
        if (classid == 6290){ClassName += " {Himawari Arms}";};
        if (classid == 6291){ClassName += " {Fresh Himawari Arms}";};
        if (classid == 6292){ClassName += " {Kabi Himawari Arms}";};
    if (classid == 6300){ClassName += " Zangetsu";};
        if (classid == 6310){ClassName += " {Lemon Arms}";};
        if (classid == 6311){ClassName += " {Fresh Lemon Arms}";};
        if (classid == 6312){ClassName += " {Kabi Lemon Arms}";};
        if (classid == 6320){ClassName += " {Furbus Arms}";};
        if (classid == 6330){ClassName += " {Cherry Arms}";};
        if (classid == 6331){ClassName += " {Fresh Cherry Arms}";};
        if (classid == 6332){ClassName += " {Kabi Cherry Arms}";};
        if (classid == 6340){ClassName += " {Peach Arms}";};
        if (classid == 6341){ClassName += " {Fresh Peach Arms}";};
        if (classid == 6342){ClassName += " {Kabi Peach Arms}";};
        if (classid == 6350){ClassName += " {Marron Arms}";};
        if (classid == 6351){ClassName += " {Fresh Marron Arms}";};
        if (classid == 6352){ClassName += " {Kabi Marron Arms}";};
    if (classid == 6400){ClassName += " Gridon";};
    if (classid == 6410){ClassName += " Duke (Genisis)";};
    if (classid == 6420){ClassName += " Zengetsu Shin (Genisis)";};
    if (classid == 6430){ClassName += " Marika (Genisis)";};
    if (classid == 6440){ClassName += " Baron (Genisis)";};
    if (classid == 6450){ClassName += " Sigurd (Genisis)";};
    if (classid == 6460){ClassName += " Kurokage Shin (Genisis)";};
    if (classid == 6470){ClassName += " Tyrant (Genisis)";};
    if (classid == 6500){ClassName += " Kurokage";};
    if (classid == 6510){ClassName += " Gaim (Yami)";};
    if (classid == 6520){ClassName += " Kamuro";};
    if (classid == 6530){ClassName += " Baron (Black)";};
    if (classid == 6540){ClassName += " Maja";};
    if (classid == 6550){ClassName += " Duke";};
    if (classid == 6600){ClassName += " Bravo";};
        if (classid == 6610){ClassName += " {Melon Energy}";};
        if (classid == 6611){ClassName += " {Lemon Energy}";};
        if (classid == 6612){ClassName += " {Dragonfruits Energy}";};
        if (classid == 6613){ClassName += " {Cherry Energy}";};
        if (classid == 6614){ClassName += " {Connecting}";};
        if (classid == 6615){ClassName += " {Peach Energy}";};
        if (classid == 6616){ClassName += " {Matsubokkuri Energy}";};
        if (classid == 6617){ClassName += " {Black Lemon Energy}";};
        if (classid == 6618){ClassName += " {Marron Energy}";};
        if (classid == 6619){ClassName += " {Furbus Energy}";};
    if (classid == 6700){ClassName += " Knuckle";};
        if (classid == 6710){ClassName += " {Kabi Pine Arms}";};
        if (classid == 6711){ClassName += " {Kabi Ichigo Arms}";};
        if (classid == 6712){ClassName += " {Kabi Suika Arms}";};
        if (classid == 6713){ClassName += " {Kabi Banana Arms}";};
        if (classid == 6714){ClassName += " {Kabi Donguri Arms}";};
        if (classid == 6715){ClassName += " {Kabi Durian Arms}";};
        if (classid == 6316){ClassName += " {Kabi Cherry Arms}";};
        if (classid == 6317){ClassName += " {Kabi Peach Arms}";};
        if (classid == 6318){ClassName += " {Kabi Lemon Arms}";};
    if (classid == 6800){ClassName += " Ryugen (Yomi)";};
        if (classid == 6810){ClassName += " {Dragonfruit Arms}";};
        if (classid == 6811){ClassName += " {Fresh Dragonfruit Arms}";};
        if (classid == 6812){ClassName += " {Kabi Dragonfruit Arms}";};
        if (classid == 6813){ClassName += " {Sid Arms}";};
        if (classid == 6814){ClassName += " {Energy Orange}";};
        if (classid == 6815){ClassName += " {Energy Budou}";};
        if (classid == 6816){ClassName += " {Energy Banana}";};
        if (classid == 6817){ClassName += " {Energy Mango}";};
        if (classid == 6818){ClassName += " {Energy Kiwi}";};
        if (classid == 6819){ClassName += " {Energy Ichigo}";};
        if (classid == 6820){ClassName += " {Energy Pine}";};
        if (classid == 6821){ClassName += " {Energy Donguri}";};
        if (classid == 6822){ClassName += " {Energy Durian}";};
        if (classid == 6823){ClassName += " {Energy Kurumi}";};
        if (classid == 6824){ClassName += " {Energy Suika}";};
        if (classid == 6825){ClassName += " {Dark Banana}";};
        if (classid == 6826){ClassName += " {Dark Mango}";};
        if (classid == 6827){ClassName += " {Dark Kiwi}";};
        if (classid == 6828){ClassName += " {Dark Durian}";};
        if (classid == 6829){ClassName += " {Dark Kurumi}";};
        if (classid == 6830){ClassName += " {Dark Marron}";};
        if (classid == 6831){ClassName += " {Dark Cherry}";};
        if (classid == 6832){ClassName += " {Dark Lemon}";};
        if (classid == 6833){ClassName += " {Dark Peach}";};
        if (classid == 6834){ClassName += " {Dark Suika}";};
        if (classid == 6835){ClassName += " {Dark Matsubokkuri}";};
        if (classid == 6836){ClassName += " {Dark Energy Orange}";};
        if (classid == 6837){ClassName += " {Dark Energy Budou}";};
        if (classid == 6838){ClassName += " {Dark Energy Mango}";};
        if (classid == 6839){ClassName += " {Dark Energy Kiwi}";};
        if (classid == 6840){ClassName += " {Dark Energy Ichigo}";};
        if (classid == 6841){ClassName += " {Dark Energy Pine}";};
        if (classid == 6842){ClassName += " {Dark Energy Donguri}";};
        if (classid == 6843){ClassName += " {Dark Energy Durian}";};
        if (classid == 6844){ClassName += " {Dark Energy Kurumi}";};
        if (classid == 6845){ClassName += " {Dark Energy Matsubokkuri}";};
        if (classid == 6846){ClassName += " {Dark Energy Marron}";};
        if (classid == 6847){ClassName += " {Dark Energy Cherry}";};
        if (classid == 6848){ClassName += " {Dark Energy Lemon}";};
        if (classid == 6849){ClassName += " {Dark Energy Peach}";};
        if (classid == 6850){ClassName += " {Dark Energy Suika}";};
/*
        if (classid == 6820){ClassName += " {Shocker Arms}";};
        if (classid == 6820){ClassName += " {hocker Leader Arms}";};
        if (classid == 6820){ClassName += " {Shadow Moon Arms}";};
        if (classid == 6820){ClassName += " {Momotaros Arms}";};
        if (classid == 6820){ClassName += " {Urataros Arms}";};
        if (classid == 6820){ClassName += " {Kintaros Arms}";};
        if (classid == 6820){ClassName += " {Ankh Arms}";};
        if (classid == 6820){ClassName += " {Seig Arms}";};
        if (classid == 6820){ClassName += " {Deneb Arms}";};
        if (classid == 6820){ClassName += " {Negataros Arms}";};
        if (classid == 6820){ClassName += " {Roulette Arms}";};
        if (classid == 6820){ClassName += " {Orange Christmas Arms}";};
        if (classid == 6820){ClassName += " {Sakura Huricane}";};
        if (classid == 6820){ClassName += " {Rose Attacker}";};
        if (classid == 6820){ClassName += " {Dandeliner}";};
        if (classid == 6820){ClassName += " {Tulip Hopper}";};
        if (classid == 6820){ClassName += " {Double}";};
        if (classid == 6820){ClassName += " {OOOs}";};
        if (classid == 6820){ClassName += " {Fourze}";};
        if (classid == 6820){ClassName += " {Wizard}";};
        if (classid == 6820){ClassName += " {Gaim}";};
        if (classid == 6820){ClassName += " {Showa Rider}";};
        if (classid == 6820){ClassName += " {Hesei Rider}";};
        if (classid == 6820){ClassName += " {Drive}";};
        if (classid == 6820){ClassName += " {Ichigou}";};
        if (classid == 6820){ClassName += " {Niigou}";};
        if (classid == 6820){ClassName += " {V3}";};
        if (classid == 6820){ClassName += " {Shocker Rider}";};
        if (classid == 6820){ClassName += " {Rider Man}";};
        if (classid == 6820){ClassName += " {X}";};
        if (classid == 6820){ClassName += " {Stronger}";};
        if (classid == 6820){ClassName += " {Skyrider}";};
        if (classid == 6820){ClassName += " {Super-1}";};
        if (classid == 6820){ClassName += " {ZX}";};
        if (classid == 6820){ClassName += " {Black}";};
        if (classid == 6820){ClassName += " {Black RX}";};
        if (classid == 6820){ClassName += " {Amazon}";};
        if (classid == 6820){ClassName += " {Shin}";};
        if (classid == 6820){ClassName += " {ZO}";};
        if (classid == 6820){ClassName += " {J}";};
        if (classid == 6820){ClassName += " {Kuuga}";};
        if (classid == 6820){ClassName += " {Agito}";};
        if (classid == 6820){ClassName += " {Ryuki}";};
        if (classid == 6820){ClassName += " {Kuuga Ultimate}";};
        if (classid == 6820){ClassName += " {Agito Shining}";};
        if (classid == 6820){ClassName += " {Stronger Charge Up}";};
        if (classid == 6820){ClassName += " {Ryuki Survive}";};
        if (classid == 6820){ClassName += " {Blade}";};
        if (classid == 6820){ClassName += " {Blade King}";};
        if (classid == 6820){ClassName += " {Faiz}";};
        if (classid == 6820){ClassName += " {Faiz Blaster}";};
        if (classid == 6820){ClassName += " {Hibiki}";};
        if (classid == 6820){ClassName += " {Hibiki Armed}";};
        if (classid == 6820){ClassName += " {Kabuto}";};
        if (classid == 6820){ClassName += " {Kabuto Hyper}";};
        if (classid == 6820){ClassName += " {Den-O}";};
        if (classid == 6820){ClassName += " {Den-O Climax}";};
        if (classid == 6820){ClassName += " {New Den-O}";};
        if (classid == 6820){ClassName += " {Teddy}";};
        if (classid == 6820){ClassName += " {Kiva}";};
        if (classid == 6820){ClassName += " {Kiva Emperor}";};
        if (classid == 6820){ClassName += " {Decade}";};
        if (classid == 6820){ClassName += " {Decade Complete}";};
        if (classid == 6820){ClassName += " {Double Cyclone Joker Xtreme}";};
        if (classid == 6820){ClassName += " {Joker}";};
        if (classid == 6820){ClassName += " {Skull}";};
        if (classid == 6820){ClassName += " {OOO Tajador}";};
        if (classid == 6820){ClassName += " {OOO Putotyra}";};
        if (classid == 6820){ClassName += " {Fourze Cosmic}";};
        if (classid == 6820){ClassName += " {Meteor}";};
        if (classid == 6820){ClassName += " {Wizard All Dragon}";};
        if (classid == 6820){ClassName += " {Wizard Infinity}";};
        if (classid == 6820){ClassName += " {Beast}";};
        if (classid == 6820){ClassName += " {Beast Hyper}";};
        if (classid == 6820){ClassName += " {Kuuga Dragon}";};
        if (classid == 6820){ClassName += " {Kuuga Pegasus}";};
        if (classid == 6820){ClassName += " {Kuuga Titan}";};
        if (classid == 6820){ClassName += " {Kuuga Rising Titan}";};
        if (classid == 6820){ClassName += " {Kuuga Rising Mighty}";};
        if (classid == 6820){ClassName += " {Kuuga Rising Pegasas}";};
        if (classid == 6820){ClassName += " {Kuuga Rising Dragon}";};
        if (classid == 6820){ClassName += " {Kuuga Rising Ultimate}";};
        if (classid == 6820){ClassName += " {Kuuga Growing}";};
        if (classid == 6820){ClassName += " {Kuuga Amazing}";};
        if (classid == 6820){ClassName += " {Kuuga Amazing Titan}";};
        if (classid == 6820){ClassName += " {Kuuga Amazing Pegasas}";};
        if (classid == 6820){ClassName += " {Kuuga Amazing Dragon}";};
        if (classid == 6820){ClassName += " {Agito Storm}";};
        if (classid == 6820){ClassName += " {Agito Flame}";};
        if (classid == 6820){ClassName += " {Agito Trinity}";};
        if (classid == 6820){ClassName += " {Agito Burning}";};
        if (classid == 6820){ClassName += " {Gills}";};
        if (classid == 6820){ClassName += " {Exceed Gills}";};
        if (classid == 6820){ClassName += " {G3}";};
        if (classid == 6820){ClassName += " {G3X}";};
        if (classid == 6820){ClassName += " {G4}";};
        if (classid == 6820){ClassName += " {Another Agito}";};
        if (classid == 6820){ClassName += " {Tackle}";};
        if (classid == 6820){ClassName += " {Knight}";};
        if (classid == 6820){ClassName += " {Knight Survive}";};
        if (classid == 6820){ClassName += " {Zolda}";};
        if (classid == 6820){ClassName += " {Raia}";};
        if (classid == 6820){ClassName += " {Scizzors}";};
        if (classid == 6820){ClassName += " {Taiga}";};
        if (classid == 6820){ClassName += " {Verde}";};
        if (classid == 6820){ClassName += " {Feme}";};
        if (classid == 6820){ClassName += " {Ryuga}";};
        if (classid == 6820){ClassName += " {Ouja}";};
        if (classid == 6820){ClassName += " {Imperier}";};
        if (classid == 6820){ClassName += " {Gai}";};
        if (classid == 6820){ClassName += " {Odin}";};
        if (classid == 6820){ClassName += " {Alternative}";};
        if (classid == 6820){ClassName += " {Alternative Zero}";};
        if (classid == 6820){ClassName += " {Kixia}";};
        if (classid == 6820){ClassName += " {Delta}";};
        if (classid == 6820){ClassName += " {Psyga}";};
        if (classid == 6820){ClassName += " {Orga}";};
        if (classid == 6820){ClassName += " {Garren}";};
        if (classid == 6820){ClassName += " {Garren Jack}";};
        if (classid == 6820){ClassName += " {Blade Jack}";};
        if (classid == 6820){ClassName += " {Chalice}";};
        if (classid == 6820){ClassName += " {Chalice Wild}";};
        if (classid == 6820){ClassName += " {Glaive}";};
        if (classid == 6820){ClassName += " {Lance}";};
        if (classid == 6820){ClassName += " {Larc}";};
        if (classid == 6820){ClassName += " {Ibuki}";};
        if (classid == 6820){ClassName += " {Todoroki}";};
        if (classid == 6820){ClassName += " {Zanki}";};
        if (classid == 6820){ClassName += " {Kabuki}";};
        if (classid == 6820){ClassName += " {Danki}";};
        if (classid == 6820){ClassName += " {Sabaki}";};
        if (classid == 6820){ClassName += " {Eiki}";};
        if (classid == 6820){ClassName += " {Shouki}";};
        if (classid == 6820){ClassName += " {Gouki}";};
        if (classid == 6820){ClassName += " {Toki}";};
        if (classid == 6820){ClassName += " {Banki}";};
        if (classid == 6820){ClassName += " {Fubiki}";};
        if (classid == 6820){ClassName += " {Amaki}";};
        if (classid == 6820){ClassName += " {Shuki}";};
        if (classid == 6820){ClassName += " {Kyoki}";};
        if (classid == 6820){ClassName += " {Tohki}";};
        if (classid == 6820){ClassName += " {Kirameki}";};
        if (classid == 6820){ClassName += " {Nishiki}";};
        if (classid == 6820){ClassName += " {Habataki}";};
        if (classid == 6820){ClassName += " {Majaki}";};
        if (classid == 6820){ClassName += " {Jaki}";};
        if (classid == 6820){ClassName += " {Kagayaki}";};
        if (classid == 6820){ClassName += " {Michibiki}";};
        if (classid == 6820){ClassName += " {G1}";};
        if (classid == 6820){ClassName += " {Akatsuki}";};
        if (classid == 6820){ClassName += " {Genki}";};
        if (classid == 6820){ClassName += " {Yamabuki}";};
        if (classid == 6820){ClassName += " {Gatack}";};
        if (classid == 6820){ClassName += " {Gatack Hyper}";};
        if (classid == 6820){ClassName += " {Zabee}";};
        if (classid == 6820){ClassName += " {Sasword}";};
        if (classid == 6820){ClassName += " {Drake}";};
        if (classid == 6820){ClassName += " {Punch Hopper}";};
        if (classid == 6820){ClassName += " {Kick Hopper}";};
        if (classid == 6820){ClassName += " {Den-O Plat Form}";};
        if (classid == 6820){ClassName += " {Den-O Gun Form}";};
        if (classid == 6820){ClassName += " {Den-O Rod Form}";};
        if (classid == 6820){ClassName += " {Den-O Axe Form}";};
        if (classid == 6820){ClassName += " {Zeronos}";};
        if (classid == 6820){ClassName += " {Zeronos Vega Form}";};
        if (classid == 6820){ClassName += " {Zeronos Zero Form}";};
        if (classid == 6820){ClassName += " {Ga-Oh}";};
        if (classid == 6820){ClassName += " {G-Den-O}";};
        if (classid == 6820){ClassName += " {Nega Den-O}";};
        if (classid == 6820){ClassName += " {Yuuki}";};
        if (classid == 6820){ClassName += " {Yuuki Skull}";};
        if (classid == 6820){ClassName += " {Ixa}";};
        if (classid == 6820){ClassName += " {Ixa Rising}";};
        if (classid == 6820){ClassName += " {Saga}";};
        if (classid == 6820){ClassName += " {Dark Kiva}";};
        if (classid == 6820){ClassName += " {DiEnd}";};
        if (classid == 6820){ClassName += " {DiEnd Complete}";};
        if (classid == 6820){ClassName += " {W Heat Joker}";};
        if (classid == 6820){ClassName += " {W Luna Joker}";};
        if (classid == 6820){ClassName += " {W Cyclone Metal}";};
        if (classid == 6820){ClassName += " {W Heat Metal}";};
        if (classid == 6820){ClassName += " {W Luna Metal}";};
        if (classid == 6820){ClassName += " {Kiva Bassha Form}";};
        if (classid == 6820){ClassName += " {Kiva Garuru Form}";};
        if (classid == 6820){ClassName += " {Kiva Dogga Form}";};
        if (classid == 6820){ClassName += " {Kiva Dogabaki Form}";};
        if (classid == 6820){ClassName += " {Kiva Dogabaki Emperor Form}";};
        if (classid == 6820){ClassName += " {W Fang Joker}";};
*/
    if (classid == 6900){ClassName += " Jam";};
    if (classid == 6910){ClassName += " Kurokage (Trooper)";};
    if (classid == 6920){ClassName += " Saver";};
    if (classid == 6930){ClassName += " Bujin Gaim";};
    if (classid == 6940){ClassName += " Idunn";};
    if (classid == 6950){ClassName += " Fifteen";};
    if (classid == 6960){ClassName += " Mars";};
    if (classid == 6970){ClassName += " Tiramisu";};
        if (classid == 6971){ClassName += " {Helheim Arms}";};
        if (classid == 6972){ClassName += " {Helheim Energy Arms}";};
    if (classid == 6980){ClassName += " Kuromeisu";};

    if (classid == 7000){ClassName += " Drive";};
        if (classid == 7010){ClassName += " {Type Speed}";};
        if (classid == 7011){ClassName += " {Type Speed (Dark)}";};
        if (classid == 7012){ClassName += " {Type Speed (Gold)}";};
        if (classid == 7013){ClassName += " {Type Speed (Imitation)}";};
        if (classid == 7014){ClassName += " {Type Wild}";};
        if (classid == 7015){ClassName += " {Type Technique}";};
        if (classid == 7016){ClassName += " {Type Dead Heat}";};
        if (classid == 7017){ClassName += " {Type (Super) Dead Heat}";};
        if (classid == 7018){ClassName += " {Type Trideron}";};
        if (classid == 7019){ClassName += " {Type Formula}";};
        if (classid == 7020){ClassName += " {Type Speed (Zero)}";};
        if (classid == 7021){ClassName += " {Type Formula}";};
    if (classid == 7100){ClassName += " Protodrive";};
    if (classid == 7110){ClassName += " Mach";};
    if (classid == 7120){ClassName += " Chaser";};
    if (classid == 7130){ClassName += " Lupin";};
    if (classid == 7140){ClassName += " Gold Drive";};
    if (classid == 7150){ClassName += " Mach (Mass Produced)";};
    if (classid == 7160){ClassName += " Zero Drive";};
    if (classid == 7170){ClassName += " Mashin Chaser";};
    if (classid == 7180){ClassName += " Drive (Imitation)";};
    if (classid == 7200){ClassName += " <PLACEHOLDER>";};
        if (classid == 7210){ClassName += " {Type Mach}";};
        if (classid == 7211){ClassName += " {Type Chaser}";};
        if (classid == 7212){ClassName += " {Type Lupin}";};
        if (classid == 7213){ClassName += " {Type Mach (Production)}";};
        if (classid == 7214){ClassName += " {Type Zero}";};
        if (classid == 7215){ClassName += " {Type Heart}";};
        if (classid == 7216){ClassName += " {Type Brain}";};
        if (classid == 7217){ClassName += " {Type Medic}";};
        if (classid == 7218){ClassName += " {Type Furbus}";};
    if (classid == 7300){ClassName += " <PLACEHOLDER>";};
        if (classid == 7301){ClassName += " {Type High Speed}";};
        if (classid == 7302){ClassName += " {Type Next}";};
        if (classid == 7303){ClassName += " {Type Special}";};
        if (classid == 7304){ClassName += " {Type Ride Crosser}";};
        if (classid == 7305){ClassName += " {Type Heartron}";};
        if (classid == 7306){ClassName += " {Type Max Flare}";};
        if (classid == 7307){ClassName += " {Type Funky Spike}";};
        if (classid == 7308){ClassName += " {Type Midnight Shadow}";};
        if (classid == 7309){ClassName += " {Type Justice Hunter}";};
        if (classid == 7310){ClassName += " {Type Fruits}";};
        if (classid == 7311){ClassName += " {Type Tri-Cyclone}";};
        if (classid == 7312){ClassName += " {Type Rideron}";};
    if (classid == 7400){ClassName += " <PLACEHOLDER>";};
        if (classid == 7401){ClassName += " {Type Dream Vegas}";};
        if (classid == 7402){ClassName += " {Type Dimension Cab}";};
        if (classid == 7403){ClassName += " {Type Massive Monster}";};
        if (classid == 7404){ClassName += " {Type Rumble Dump}";};
        if (classid == 7405){ClassName += " {Type Mad Doctor}";};
        if (classid == 7406){ClassName += " {Type Hooking Wrecker}";};
        if (classid == 7407){ClassName += " {Type Burning Solar}";};
        if (classid == 7408){ClassName += " {Type Colorful Commercial}";};
        if (classid == 7409){ClassName += " {Type Fire Braver}";};
        if (classid == 7410){ClassName += " {Type Rolling Gravity}";};
        if (classid == 7411){ClassName += " {Type Deco Traveller}";};
        if (classid == 7412){ClassName += " {Type Road Winter}";};
    if (classid == 7500){ClassName += " <PLACEHOLDER>";};
        if (classid == 7501){ClassName += " {Type Amazing Circus}";};
        if (classid == 7502){ClassName += " {Type Mantard F01}";};
        if (classid == 7503){ClassName += " {Type Jacky F02}";};
        if (classid == 7504){ClassName += " {Type Sparner F03}";};
        if (classid == 7505){ClassName += " {Type Mega Max Flare}";};
        if (classid == 7506){ClassName += " {Type Next Builder}";};
        if (classid == 7507){ClassName += " {Type Next Deco Traveller}";};
        if (classid == 7508){ClassName += " {Type Next Hunter}";};
        if (classid == 7509){ClassName += " {Type Get Wild}";};
        if (classid == 7510){ClassName += " {Type Ultra Technique}";};
        if (classid == 7511){ClassName += " {Type Get Next}";};
        if (classid == 7512){ClassName += " {Type Spider GP-7}";};
    if (classid == 7600){ClassName += " <PLACEHOLDER>";};
        if (classid == 7601){ClassName += " {Type Dash Formula}";};
        if (classid == 7602){ClassName += " {Type Over Trideron}";};
        if (classid == 7603){ClassName += " {Type Over Heatron}";};
        if (classid == 7604){ClassName += " {Type Ultra Fruits}";};
        if (classid == 7605){ClassName += " {Type Ultra Rideron}";};
        if (classid == 7606){ClassName += " {Type Ultra Tri-Cyclone}";};
        if (classid == 7607){ClassName += " {Type Ultra Spider GP-7}";};
        if (classid == 7608){ClassName += " {Type Super Special}";};
        if (classid == 7609){ClassName += " {Type Ultra Funky Spike}";};
        if (classid == 7610){ClassName += " {Type Super Midnight Shadow}";};
        if (classid == 7611){ClassName += " {Type Dash Justice Hunter}";};
        if (classid == 7612){ClassName += " {Type Get Dream Vegas}";};
    if (classid == 7700){ClassName += " <PLACEHOLDER>";};
        if (classid == 7701){ClassName += " {Type High Dimension Cab}";};
        if (classid == 7702){ClassName += " {Type Super Massive Monster}";};
        if (classid == 7703){ClassName += " {Type Dash Rumble Dump}";};
        if (classid == 7704){ClassName += " {Type Get Mad Doctor}";};
        if (classid == 7705){ClassName += " {Type Mega Burning Solar}";};
        if (classid == 7706){ClassName += " {Type Ultra Colorful Commercial}";};
        if (classid == 7707){ClassName += " {Type High Hooking Wrecker}";};
        if (classid == 7708){ClassName += " {Type Ultra Fire Braver}";};
        if (classid == 7709){ClassName += " {Type High Rolling Gravity}";};
        if (classid == 7710){ClassName += " {Type Super Spin Mixer}";};
        if (classid == 7711){ClassName += " {Type Mega Deco Traveller}";};
        if (classid == 7712){ClassName += " {Type Dash Road Winter}";};
    if (classid == 7800){ClassName += " <PLACEHOLDER>";};
        if (classid == 7801){ClassName += " {Type Get Amazing Circus}";};
        if (classid == 7802){ClassName += " {Type Next 00}";};
        if (classid == 7803){ClassName += " {Type Get Next 00}";};
        if (classid == 7804){ClassName += " {Type Next 01}";};
        if (classid == 7805){ClassName += " {Type Get Next 01}";};
        if (classid == 7806){ClassName += " {Type Next 02}";};
        if (classid == 7807){ClassName += " {Type Get Next 02}";};
        if (classid == 7808){ClassName += " {Type Next 03}";};
        if (classid == 7809){ClassName += " {Type Get Next 03}";};
        if (classid == 7810){ClassName += " {Type Next 04}";};
        if (classid == 7811){ClassName += " {Type Get Next 04}";};
        if (classid == 7812){ClassName += " {Type Next 05}";};
    if (classid == 7900){ClassName += " <PLACEHOLDER>";};
        if (classid == 7901){ClassName += " {Type Get Next 05}";};
        if (classid == 7902){ClassName += " {Type Next 06}";};
        if (classid == 7903){ClassName += " {Type Get Next 06}";};
        if (classid == 7904){ClassName += " {Type Next 07}";};
        if (classid == 7905){ClassName += " {Type Get Next 07}";};
        if (classid == 7906){ClassName += " {Type Mantarn F01 (Upgrade)}";};
        if (classid == 7907){ClassName += " {Type Jacky F02 (Upgrade)}";};
        if (classid == 7908){ClassName += " {Type Sparner F03 (Upgrade)}";};
        if (classid == 7909){ClassName += " {Type Unknown F00}";};
        if (classid == 7910){ClassName += " {Type Swarm}";};
        if (classid == 7911){ClassName += " {Type Get Swarm}";};

    if (classid == 8000){ClassName += " Ghost";};
        if (classid == 8010){ClassName += " {Ore Damashii}";};
        if (classid == 8011){ClassName += " {Specter Damashii}";};
        if (classid == 8012){ClassName += " {Zero Specter Damashii}";};
        if (classid == 8013){ClassName += " {Necrom Damashii}";};
        if (classid == 8014){ClassName += " {Furbus Damashii}";};
        if (classid == 8015){ClassName += " {Dark Necrom (Red)}";};
        if (classid == 8016){ClassName += " {Dark Necrom (Blue)}";};
        if (classid == 8017){ClassName += " {Dark Necrom (Yellow)}";};
        if (classid == 8018){ClassName += " {Dark Necrom (Pink)}";};
        if (classid == 8019){ClassName += " {Ultima Genma}";};
        if (classid == 8020){ClassName += " {Toucon Boost Damashii}";};
        if (classid == 8021){ClassName += " {Mugen Damashii}";};
        if (classid == 8022){ClassName += " {Yujou Boost Damashii}";};
        if (classid == 8023){ClassName += " {Blank Damashii}";};
        if (classid == 8024){ClassName += " {Special Damashii}";};
        if (classid == 8025){ClassName += " {Ikkyu Damashii}";};
        if (classid == 8026){ClassName += " {Pythagoras Damashii}";};
        if (classid == 8027){ClassName += " {Napoleon Damashii}";};
        if (classid == 8028){ClassName += " {Darwin Damashii}";};
        if (classid == 8029){ClassName += " {Shinsegumi Damashii}";};
        if (classid == 8030){ClassName += " {Tenkatoitsu Damashii}";};
        if (classid == 8031){ClassName += " {Da Vinchi Damashii}";};
        if (classid == 8032){ClassName += " {Santa Claus Damashii}";};
        if (classid == 8033){ClassName += " {Kamehameha Damashii}";};
        if (classid == 8034){ClassName += " {Galileo Damashii}";};
        if (classid == 8035){ClassName += " {Shakespeare Damashii}";};
        if (classid == 8036){ClassName += " {Nightingale Damashii}";};
        if (classid == 8037){ClassName += " {Columbus Damashii}";};
        if (classid == 8038){ClassName += " {Ishinomori Damashii}";};
        if (classid == 8039){ClassName += " {Ore Specter Damashii}";};
        if (classid == 8040){ClassName += " {Masato Shimon Damashii}";};
        if (classid == 8041){ClassName += " {John Mars Damashii}";};
        if (classid == 8042){ClassName += " {Ichigo Damashii}";};
        if (classid == 8043){ClassName += " {Showa Damashii}";};
        if (classid == 8044){ClassName += " {Nigo Damashii}";};
        if (classid == 8045){ClassName += " {V3 Damashii}";};
        if (classid == 8046){ClassName += " {Riderman Damashii}";};
        if (classid == 8047){ClassName += " {X Damashii}";};
        if (classid == 8048){ClassName += " {Amazon Damashii}";};
        if (classid == 8049){ClassName += " {Stronger Damashii}";};
        if (classid == 8050){ClassName += " {Skyrider Damashii}";};
        if (classid == 8051){ClassName += " {Super-1 Damashii}";};
        if (classid == 8052){ClassName += " {ZX Damashii}";};
        if (classid == 8053){ClassName += " {Black Damashii}";};
        if (classid == 8054){ClassName += " {Black RX Damashii}";};
        if (classid == 8055){ClassName += " {Shin Damashii}";};
        if (classid == 8056){ClassName += " {Zo Damashii}";};
        if (classid == 8057){ClassName += " {J Damashii}";};
        if (classid == 8058){ClassName += " {Kuuga Damashii}";};
        if (classid == 8059){ClassName += " {Agito Damashii}";};
        if (classid == 8060){ClassName += " {Ryuuki Damashii}";};
        if (classid == 8061){ClassName += " {Faiz Damashii}";};
        if (classid == 8062){ClassName += " {Blade Damashii}";};
        if (classid == 8063){ClassName += " {Hibiki Damashii}";};
        if (classid == 8064){ClassName += " {Kabuto Damashii}";};
        if (classid == 8065){ClassName += " {Den-O Damashii}";};
        if (classid == 8066){ClassName += " {Kiva Damashii}";};
        if (classid == 8067){ClassName += " {Decade Damashii}";};
        if (classid == 8068){ClassName += " {Double Damashii}";};
        if (classid == 8069){ClassName += " {OOOS Damashii}";};
        if (classid == 8070){ClassName += " {Fourze Damashii}";};
        if (classid == 8071){ClassName += " {Wizard Damashii}";};
        if (classid == 8072){ClassName += " {Gaim Damashii}";};
        if (classid == 8073){ClassName += " {Drive Damashii}";};
        if (classid == 8074){ClassName += " {Ex-Aid Damashii}";};
        if (classid == 8075){ClassName += " {Kaixa Damashii}";};
        if (classid == 8076){ClassName += " {Burgermon Damashii}";};
    if (classid == 8100){ClassName += " Specter";};
        if (classid == 8101){ClassName += " {Deep Specter Damashii}";};
        if (classid == 8102){ClassName += " {Sin Specter Damashii}";};
    if (classid == 8110){ClassName += " Necrom";};
        if (classid == 8111){ClassName += " {Necrom Damashii}";};
    if (classid == 8120){ClassName += " Dark Ghost";};
        if (classid == 8121){ClassName += " {Dark Ghost Damashii}";};
    if (classid == 8130){ClassName += " Zero Specter";};
        if (classid == 8131){ClassName += " {Zero Specter Damashii}";};
    if (classid == 8140){ClassName += " Extremer";};
    if (classid == 8150){ClassName += " Greatful";};
        if (classid == 8151){ClassName += " {Musashi Damashii}";};
        if (classid == 8152){ClassName += " {Edison Damashii}";};
        if (classid == 8153){ClassName += " {Robin Hood Damashii}";};
        if (classid == 8154){ClassName += " {Newton Damashii}";};
        if (classid == 8155){ClassName += " {Beeeeeeeethoven Damashii}";};
        if (classid == 8156){ClassName += " {Beeri Aa Kiddo Damashii}";};
        if (classid == 8157){ClassName += " {Benkei Damashii}";};
        if (classid == 8158){ClassName += " {Goemon Damashii}";};
        if (classid == 8159){ClassName += " {Ryoma Damashii}";};
    if (classid == 8160){ClassName += " Genma Rider";};
        if (classid == 8170){ClassName += " {Himiko Damashii}";};
        if (classid == 8171){ClassName += " {Tutankamun Damashii}";};
        if (classid == 8172){ClassName += " {Nobunaga Damashii}";};
        if (classid == 8173){ClassName += " {Houdini Damashii}";};
        if (classid == 8174){ClassName += " {Grimm Damashii}";};
        if (classid == 8175){ClassName += " {Sanzo Damashii}";};
        if (classid == 8176){ClassName += " {Ryuu Damashii}";};

    if (classid == 9000){ClassName += " Ex-Aid";};
    if (classid == 9001){ClassName += " Brave";};
    if (classid == 9002){ClassName += " Snipe";};
    if (classid == 9003){ClassName += " Laser";};
    if (classid == 9004){ClassName += " Genm";};
    if (classid == 9005){ClassName += " Para-DX";};
    if (classid == 9006){ClassName += " Poppi";};
    if (classid == 9007){ClassName += " Chronos";};
    if (classid == 9008){ClassName += " Ryuu";};
    if (classid == 9009){ClassName += " Furbus";};
    if (classid == 9010){ClassName += " Angel";};
    if (classid == 9011){ClassName += " HaKen";};
    if (classid == 9012){ClassName += " Kūki";};
    if (classid == 9013){ClassName += " Taka";};
    if (classid == 9014){ClassName += " Ongaku";};
    if (classid == 9015){ClassName += " King";};
    if (classid == 9016){ClassName += " Genm [Grade Zero]";};
    if (classid == 9017){ClassName += " Lovetica";};
    if (classid == 9018){ClassName += " Laser [Grade Zero]";};
    if (classid == 9019){ClassName += " Wallup";};
    if (classid == 9020){ClassName += " Kiin";};
    //if (classid == 9100){ClassName += " <PLACEHOLDER>";};
        if (classid == 9101){ClassName += " {Mighty Action X}";};
        if (classid == 9102){ClassName += " {Mighty Brothers XX}";};
        if (classid == 9103){ClassName += " {Maximum Mighty X}";};
        if (classid == 9104){ClassName += " {Hyper Mutaki}";};
        if (classid == 9105){ClassName += " {Hyper Mutaki} [Pirated]";};
        if (classid == 9106){ClassName += " {Famista}";};
        if (classid == 9107){ClassName += " {Xevious}";};
        if (classid == 9108){ClassName += " {Taiko No Tatsujin}";};
        if (classid == 9109){ClassName += " {Galaxian}";};
        if (classid == 9110){ClassName += " {Taddle Quest}";};
        if (classid == 9111){ClassName += " {Taddle Quest} [Proto]";};
        if (classid == 9121){ClassName += " {Taddle Quest} [Master]";};
        if (classid == 9131){ClassName += " {Taddle Fantasy}";};
        if (classid == 9141){ClassName += " {Taddle Fantasy [Proto]}";};
        if (classid == 9151){ClassName += " {Taddle Fantasy [Master]}";};
        if (classid == 9161){ClassName += " {Taddle Legacy[100]}";};
        if (classid == 9171){ClassName += " {Taddle Legacy [Proto]}";};
        if (classid == 9181){ClassName += " {Taddle Legacy [Master]}";};
        if (classid == 9191){ClassName += " {Bang Bang Fantasy}";};
        if (classid == 9192){ClassName += " {Bang Bang Fantasy [Proto]}";};
        if (classid == 9193){ClassName += " {Bang Bang Fantasy [Master]}";};
        if (classid == 9194){ClassName += " {Taddle Simmulations}";};
        if (classid == 9195){ClassName += " {Taddle Simmulations [Proto]}";};
        if (classid == 9196){ClassName += " {Taddle Simmulations [Master]}";};
        if (classid == 9197){ClassName += " {Taddle Legacy[50]}";};
        if (classid == 9198){ClassName += " {Bang Bang Shooting}";};
        if (classid == 9112){ClassName += " {Bang Bang Shooting} [Proto]";};
        if (classid == 9122){ClassName += " {Bang Bang Shooting} [Master]";};
        if (classid == 9132){ClassName += " {Bang Bang Simulations}";};
        if (classid == 9142){ClassName += " {Bang Bang Simulations} [Proto]";};
        if (classid == 9152){ClassName += " {Bang Bang Simulations} [Master]";};
        if (classid == 9162){ClassName += " {Bang Bang Tanks}";};
        if (classid == 9172){ClassName += " {Bang Bang Tanks} [Proto]";};
        if (classid == 9182){ClassName += " {Bang Bang Tanks} [Master]";};
    //if (classid == 9200){ClassName += " <PLACEHOLDER>";};
        if (classid == 9201){ClassName += " {Giri Giri Chambara}";};
        if (classid == 9202){ClassName += " {Jet Combat}";};
        if (classid == 9203){ClassName += " {Shakariki Sports}";};
        if (classid == 9204){ClassName += " {DoReMiFa Beat}";};
        if (classid == 9205){ClassName += " {Perfect Puzzle}";};
        if (classid == 9206){ClassName += " {Toki Meki Crisis}";};
        if (classid == 9207){ClassName += " {Bakusou Bike}";};
        if (classid == 9210){ClassName += " {Gekitotsu Robots} [Proto]";};
        if (classid == 9211){ClassName += " {Giri Giri Chambara} [Proto]";};
        if (classid == 9212){ClassName += " {Jet Combat} [Proto]";};
        if (classid == 9213){ClassName += " {Shakariki Sports [Proto]}";};
        if (classid == 9214){ClassName += " {Bakusou Bike} [Proto]";};
        if (classid == 9215){ClassName += " {Knock Out Fighter}";};
        if (classid == 9216){ClassName += " {JuJu Burger [Proto]}";};
        if (classid == 9217){ClassName += " {DoReMiFa Beat [Proto]}";};
        if (classid == 9220){ClassName += " {Gekitotsu Robots} [Master]";};
        if (classid == 9221){ClassName += " {Giri Giri Chambara} [Master]";};
        if (classid == 9222){ClassName += " {Jet Combat} [Master]";};
        if (classid == 9223){ClassName += " {Shakariki Sports [Master]}";};
        if (classid == 9224){ClassName += " {DoReMiFa Beat [Master]}";};
        if (classid == 9225){ClassName += " {Perfect Puzzle} [Proto]";};
        if (classid == 9226){ClassName += " {JuJu Burger [Master]}";};
        if (classid == 9227){ClassName += " {Bakusou Bike} [Master]";};
        if (classid == 9230){ClassName += " {Masked Riders of Edenoi}";};
        if (classid == 9232){ClassName += " {Night of Safari}";};
        if (classid == 9233){ClassName += " {Bakusou Bike} [Orgins]";};
        if (classid == 9234){ClassName += " {DoReMiFa Beat [Poppi Edition]}";};
        if (classid == 9235){ClassName += " {Knock Out Fighter} [Proto]";};
        if (classid == 9236){ClassName += " {McDonalds}";};
        if (classid == 9240){ClassName += " {Masked Riders of Edenoi} [Proto]";};
        if (classid == 9242){ClassName += " {Night of Safari} [Proto]";};
        if (classid == 9244){ClassName += " {Mighty Action X [Proto]}";};
        if (classid == 9245){ClassName += " {Perfect Puzzle} [Master]";};
        if (classid == 9246){ClassName += " {McDonalds [Proto]}";};
        if (classid == 9250){ClassName += " {Gekitotsu Robots}";};
        if (classid == 9252){ClassName += " {Night of Safari} [Master]";};
        if (classid == 9254){ClassName += " {Mighty Action X [Master]}";};
        if (classid == 9255){ClassName += " {Knock Out Fighter} [Master]";};
        if (classid == 9256){ClassName += " {McDonalds [Master]}";};
        if (classid == 9262){ClassName += " {Hurricane Ninja}";};
        if (classid == 9264){ClassName += " {Mighty Action X [Orgins]}";};
        if (classid == 9265){ClassName += " {Perfect Knock Out}";};
        if (classid == 9266){ClassName += " {Toki Meki Crisis [Dark]}";};
        if (classid == 9272){ClassName += " {Hurricane Ninja} [Proto]";};
        if (classid == 9274){ClassName += " {Dangerous Zombie}";};
        if (classid == 9275){ClassName += " {Perfect Knock Out} [Proto]";};
        if (classid == 9276){ClassName += " {Toki Meki Crisis} [Proto]";};
        if (classid == 9282){ClassName += " {Hurricane Ninja} [Master]";};
        if (classid == 9284){ClassName += " {Dangerous Zombie [Proto]}";};
        if (classid == 9285){ClassName += " {Perfect Knock Out} [Master]";};
        if (classid == 9286){ClassName += " {Toki Meki Crisis} [Master]";};
        if (classid == 9294){ClassName += " {Dangerous Zombie [Master]}";};
        if (classid == 9295){ClassName += " {JuJu Burger}";};
    if (classid == 9300){ClassName += " Gamer";};
        if (classid == 9301){ClassName += " {Adventure Guy Kuuga}";};
        if (classid == 9302){ClassName += " {Agito OF The Sun}";};
        if (classid == 9303){ClassName += " {Mirror Labryinth Ryuki}";};
        if (classid == 9304){ClassName += " {Moshi Moshi Faiz}";};
        if (classid == 9305){ClassName += " {King of Poker Blade}";};
        if (classid == 9306){ClassName += " {Taiko Master Hibiki}";};
        if (classid == 9307){ClassName += " {Insect Wars Kabuto}";};
        if (classid == 9308){ClassName += " {Time Express Den-O}";};
        if (classid == 9309){ClassName += " {DokiDoki Makai Castle Kiva}";};
        if (classid == 9310){ClassName += " {Barcode Warrior Decade}";};
        if (classid == 9311){ClassName += " {Jungle OOOs}";};
        if (classid == 9312){ClassName += " {Space Galaxy Fourze}";};
        if (classid == 9313){ClassName += " {Magic The Wizard}";};
        if (classid == 9314){ClassName += " {Toukenden Gaim}";};
        if (classid == 9315){ClassName += " {Full Throttle Drive}";};
        if (classid == 9316){ClassName += " {Kaigan Ghost}";};
        if (classid == 9317){ClassName += " {Kamen Rider Cronicle [Master]}";};
        if (classid == 9318){ClassName += " {Drago Knight Hunter Z}";};
        if (classid == 9319){ClassName += " {Drago Knight Hunter Z} [Proto]";};
        if (classid == 9320){ClassName += " {Drago Knight Hunter Z} [Master]";};
        if (classid == 9321){ClassName += " {Drago Knight Hunter Extreme}";};
        if (classid == 9322){ClassName += " {Drago Maid Extreme}";};
        if (classid == 9323){ClassName += " {Drago Maid Extreme Beach Volleyball}";};
        if (classid == 9324){ClassName += " {Masked Riders of Edenoi} [Master]";};
        if (classid == 9325){ClassName += " {Detective Double}";};
        if (classid == 9335){ClassName += " {Masked Riders of Edenoi} [Gold]";};
        if (classid == 9346){ClassName += " {Masked Riders of Edenoi} [Orgins]";};
    if (classid == 9400){ClassName = "Bugster";};
        if (classid == 9401){ClassName += " {Sail Float Adventure}";};
        if (classid == 9402){ClassName += " {Shakariki Burnout}";};
        if (classid == 9403){ClassName += " {Sail Float Burnout}";};
        if (classid == 9404){ClassName += " {400-in-1}";};
        if (classid == 9405){ClassName += " {7_Grand_Dad}";};
        if (classid == 9406){ClassName += " {Gemu VR}";};
        if (classid == 9407){ClassName += " {Sparkeling Cowgirl}";};
        if (classid == 9408){ClassName += " {Killing Floor}";};
        if (classid == 9409){ClassName += " {Rojo Warriors}";};
        if (classid == 9410){ClassName += " {Rennisance Artists}";};
        if (classid == 9411){ClassName += " {Rennisance Warriors}";};
        if (classid == 9412){ClassName += " {Gal Gun}";};
        if (classid == 9413){ClassName += " {Megaman}";};
        if (classid == 9414){ClassName += " {Megaman X}";};
        if (classid == 9415){ClassName += " {Megaman Mega X}";};
        if (classid == 9416){ClassName += " {Megaman Battle Network}";};
        if (classid == 9417){ClassName += " {Megaman Starforce}";};
        if (classid == 9418){ClassName += " {Megaman Battlestar}";};
        if (classid == 9419){ClassName += " {Megaman Legends}";};
        if (classid == 9420){ClassName += " {Megaman MOA}";};
        if (classid == 9421){ClassName += " {Megaman Legends OA}";};
    if (classid == 9500){ClassName = "Ride Player";};
        if (classid == 9501){ClassName += " {Kamen Rider Cronicle}";};
        if (classid == 9502){ClassName += " {Kamen Rider Cronicle [Proto]}";};
        if (classid == 9503){ClassName += " {Maximum Bakusou Bikes Extreme}";};
        if (classid == 9504){ClassName += " {Maximum Bang Bang Thermonuclear War}";};
        if (classid == 9505){ClassName += " {Maximum Dangerous Zombie Survival}";};
        if (classid == 9506){ClassName += " {Maximum Gemu Magnate}";};
        if (classid == 9507){ClassName += " {Maximum Kamen Rider Overdrive}";};
        if (classid == 9508){ClassName += " {Maximum Mighty Brothers XX}";};
        if (classid == 9509){ClassName += " {Maximum Sunset Heist}";};
        if (classid == 9510){ClassName += " {Maximum Taddle Tactics Advance}";};
        if (classid == 9511){ClassName += " {Maximum Toki Meki Beats XXX}";};
    if (classid == 9600){ClassName = "Bugster II";};
        if (classid == 9601){ClassName += " {Gemu Gamer}";};
        if (classid == 9602){ClassName += " {Shezow}";};
        if (classid == 9603){ClassName += " {Mahou Gunsliger}";};
        if (classid == 9604){ClassName += " {Diablo}";};
        if (classid == 9605){ClassName += " {Castlvania}";};
        if (classid == 9606){ClassName += " {Matrix Breakout}";};
        if (classid == 9607){ClassName += " {Overlord Gaim}";};
        if (classid == 9608){ClassName += " {Swarm}";};
        if (classid == 9609){ClassName += " {Ygdrisil}";};
        if (classid == 9610){ClassName += " {Getsumen Rampage}";};
        if (classid == 9611){ClassName += " {Ultimate Demolition}";};
        if (classid == 9612){ClassName += " {Kamen Rider Legacy}";};
        if (classid == 9613){ClassName += " {Clear Chameleon Verde}";};
        if (classid == 9614){ClassName += " {Divine Judgement DX}";};
        if (classid == 9615){ClassName += " {Tears of Akuma DX}";};
        if (classid == 9616){ClassName += " {Tears of Judgement}";};
    if (classid == 9700){ClassName += " Maverik";};
        if (classid == 9701){ClassName += " {Sunset Cowboy}";};
        if (classid == 9702){ClassName += " {Sunset Cowboy [Proto]}";};
        if (classid == 9703){ClassName += " {Sunset Cowboy [Master]}";};
        if (classid == 9704){ClassName += " {Cha Ching Casino}";};
        if (classid == 9705){ClassName += " {Cha Ching Casino [Proto]}";};
        if (classid == 9706){ClassName += " {Cha Ching Casino [Master]}";};
        if (classid == 9707){ClassName += " {Civilization Creation}";};
        if (classid == 9708){ClassName += " {Civilization Creation [Proto]}";};
        if (classid == 9709){ClassName += " {Civilization Creation [Master]}";};
        if (classid == 9710){ClassName += " {Cha Ching Casino [Vegas Version]}";};
    if (classid == 9800){ClassName = "Ride Player Lexx";};
        if (classid == 9801){ClassName += " {Debug}";};
        if (classid == 9802){ClassName += " {Gemu Kaihatsu-Sha}";};
        if (classid == 9803){ClassName += " {Gemu Kaihatsu-Sha [Proto]}";};
        if (classid == 9804){ClassName += " {Gemu Kaihatsu-Sha [Master]}";};
        if (classid == 9805){ClassName += " {Jet Set Radio}";};
        if (classid == 9806){ClassName += " {Jet Set Radio [Proto]}";};
        if (classid == 9807){ClassName += " {Jet Set Radio [Master]}";};
        if (classid == 9808){ClassName += " {Super Mario Oddessey}";};
        if (classid == 9809){ClassName += " {Super Mario Oddessey [Proto]}";};
        if (classid == 9810){ClassName += " {Super Mario Oddessey [Master]}";};
        if (classid == 9811){ClassName += " {The Legend of Zelda: Linka's Quest}";};
        if (classid == 9812){ClassName += " {The Legend of Zelda: Linka's Quest [Proto]}";};
        if (classid == 9813){ClassName += " {The Legend of Zelda: Linka's Quest [Master]}";};
        if (classid == 9814){ClassName += " {Digimon Adventure}";};
        if (classid == 9815){ClassName += " {Pokemon Compilation}";};
        if (classid == 9816){ClassName += " {Digimon Adventure [Proto]}";};
        if (classid == 9817){ClassName += " {Pokemon Compilation [Proto]}";};
        if (classid == 9818){ClassName += " {Digimon Adventure [Master]}";};
        if (classid == 9819){ClassName += " {Pokemon Compilation [Master]}";};
        if (classid == 9820){ClassName += " {Digi-Pocket Monsters}";};
        if (classid == 9821){ClassName += " {Digi-Pocket Monsters [Proto]}";};
        if (classid == 9822){ClassName += " {Digi-Pocket Monsters [Master]}";};
        if (classid == 9823){ClassName += " {Metroid: Federation}";};
        if (classid == 9824){ClassName += " {Metroid: Federation [Proto]}";};
        if (classid == 9825){ClassName += " {Metroid: Federation [Master]}";};
        if (classid == 9826){ClassName += " {Metroid: Galactic Lovers}";};
        if (classid == 9827){ClassName += " {Metroid: Galactic Lovers [Proto]}";};
        if (classid == 9828){ClassName += " {Metroid: Galactic Lovers [Master]}";};
        if (classid == 9829){ClassName += " {Metroid: Galactic Federation Lover}";};
        if (classid == 9830){ClassName += " {Metroid: Galactic Federation Lover [Proto]}";};
        if (classid == 9831){ClassName += " {Metroid: Galactic Federation Lover [Master]}";};
        if (classid == 9832){ClassName += " {Fallout 4}";};
        if (classid == 9833){ClassName += " {Fallout 4 [Proto]}";};
        if (classid == 9834){ClassName += " {Fallout 4 [Master]}";};
        if (classid == 9835){ClassName += " {The Elder Scrolls: Skyrim}";};
        if (classid == 9836){ClassName += " {The Elder Scrolls: Skyrim [Proto]}";};
        if (classid == 9837){ClassName += " {The Elder Scrolls: Skyrim [Master]}";};
        if (classid == 9838){ClassName += " {The Elder Scrolls: Fallout 4}";};
        if (classid == 9839){ClassName += " {The Elder Scrolls: Fallout 4 [Proto]}";};
        if (classid == 9840){ClassName += " {The Elder Scrolls: Fallout 4 [Master]}";};
        if (classid == 9841){ClassName += " {Mighty Creator VRX}";};
        if (classid == 9842){ClassName += " {Mighty Creator VRX [Proto]}";};
        if (classid == 9843){ClassName += " {Mighty Creator VRX [Master]}";};
        if (classid == 9844){ClassName += " {Library}";};
        if (classid == 9845){ClassName += " {QA Tools}";};
    if (classid == 9900){ClassName = "Ride Player [Advance]";};
        if (classid == 9901){ClassName += " {Nation Creation}";};
        if (classid == 9902){ClassName += " {Machine Arena}";};
        if (classid == 9903){ClassName += " {Rocket Punch}";};
        if (classid == 9904){ClassName += " {Robotic Attack}";};
        if (classid == 9905){ClassName += " {Rocket Attack}";};
        if (classid == 9906){ClassName += " {Mighty Sister XX}";};
        if (classid == 9907){ClassName += " {Mighty Sister XX} [Clone]";};
        if (classid == 9908){ClassName += " {Mo & Miiyu Mighty Partners XX}";};
        if (classid == 9909){ClassName += " {Celestial Joker}";};
    if (classid == 9910){ClassName += " Dominion";};
        if (classid == 9911){ClassName += " {Cosmic Invasion}";};
        if (classid == 9912){ClassName += " {Bakusou Car}";};
        if (classid == 9913){ClassName += " {Roaring Hotshot}";};
        if (classid == 9914){ClassName += " {Bites Za Gashato}";};
    if (classid == 9920){ClassName = "Ride Player Zama";};
    if (classid == 9930){ClassName = "Ride Player Exit";};
    if (classid == 9940){ClassName += " Kageki";};
    if (classid == 9950){ClassName += " Phobos";};
    if (classid == 9960){ClassName += " Cosmic";};

    if (classid == 10000){ClassName = "Shishi Red";};
        if (classid == 10010){ClassName = "Sushi Red";};
    if (classid == 10100){ClassName = "Okami Blue";};
    if (classid == 10200){ClassName = "Dodori Yellow";};
    if (classid == 10300){ClassName = "Chameleon Green";};
    if (classid == 10400){ClassName = "Oshi Black";};
    if (classid == 10500){ClassName = "Sasori Orange";};
    if (classid == 10600){ClassName = "Tenbin Gold";};
    if (classid == 10700){ClassName = "Habitski Silver";};
    if (classid == 10800){ClassName = "Aquilla Pink";};
    if (classid == 10900){ClassName = "Ryuu Commander";};
    if (classid == 11000){ClassName = "Kogoma Skyblue";};
        if (classid == 11010){ClassName = "Virgo Skyblue";};
            if (classid == 11011){ClassName += " {Virgo Kyuutama}";};
    if (classid == 11100){ClassName = "Ho oh Soldier";};
    if (classid == 11200){ClassName = "Furbus Brown";};

    if (classid == 20000){ClassName = "Zyou Eagle";};
        if (classid == 20010){ClassName = "Zyou Gorilla";};
        if (classid == 20020){ClassName = "Zyou Whale";};
    if (classid == 20100){ClassName = "Zyou Shark";};
    if (classid == 20200){ClassName = "Zyou Lion";};
    if (classid == 20300){ClassName = "Zyou Elephant";};
    if (classid == 20400){ClassName = "Zyou Tiger";};
    if (classid == 20500){ClassName = "Zyou The World";};
    if (classid == 20600){ClassName = "Zyou Bird";};
        if (classid == 20610){ClassName = "Zyou Condor";};
    if (classid == 20700){ClassName = "Zyou Human";};

    if (classid == 30000){ClassName = "AkaNinger";};
        if (classid == 30010){ClassName = "AkaNinger {Gold}";};
        if (classid == 30020){ClassName = "AkaNinger {Silver}";};
        if (classid == 30030){ClassName = "BlackNinger {Gold}";};
    if (classid == 30100){ClassName = "AoNinger";};
        if (classid == 30110){ClassName = "NavyNinger {Gold}";};
        if (classid == 30120){ClassName = "VioletNinger {Gold}";};
    if (classid == 30200){ClassName = "KiNinger";};
        if (classid == 30210){ClassName = "TanNinger {Gold}";};
    if (classid == 30300){ClassName = "ShiroNinger";};
        if (classid == 30310){ClassName = "SilverNinger {Gold}";};
    if (classid == 30400){ClassName = "MomoNinger";};
        if (classid == 30410){ClassName = "RoseNinger {Gold}";};
    if (classid == 30500){ClassName = "StarNinger";};
    if (classid == 30600){ClassName = "MidoNinger";};

    if (classid == 40000){ClassName = "ToQ Ichigou";};
    if (classid == 40100){ClassName = "ToQ Nigou";};
    if (classid == 40200){ClassName = "ToQ Sangou";};
    if (classid == 40300){ClassName = "ToQ Yongou";};
    if (classid == 40400){ClassName = "ToQ Gogou";};
    if (classid == 40500){ClassName = "ToQ Rokugou";};
    if (classid == 40600){ClassName = "ToQ Nannagou";};
    if (classid == 40700){ClassName = "ToQ Hachigou";};
    if (classid == 40800){ClassName = "ToQ Kyuugou";};
    if (classid == 40900){ClassName = "ToQ Jyugou";};

    if (classid == 50000){ClassName = "Kyoryu Red";};
        if (classid == 50010){ClassName = "Kyoryu Crimson";};
        if (classid == 50020){ClassName = "Kyoryu Yellow";};
        if (classid == 50030){ClassName = "Kyoryu White";};
        if (classid == 50040){ClassName = "Kyoryu Lavender";};
        if (classid == 50050){ClassName = "Kyoryu Lime";};
        if (classid == 50060){ClassName = "Kyoryu Orange";};
        if (classid == 50070){ClassName = "Kyoryu Rose";};
    if (classid == 50100){ClassName = "Kyoryu Blue";};
    if (classid == 50200){ClassName = "Kyoryu Green";};
    if (classid == 50300){ClassName = "Kyoryu Black";};
    if (classid == 50400){ClassName = "Kyoryu Pink";};
    if (classid == 50500){ClassName = "Kyoryu Gold";};
    if (classid == 50600){ClassName = "Kyoryu Silver";};
    if (classid == 50700){ClassName = "Kyoryu Grey";};
    if (classid == 50800){ClassName = "Kyoryu Cyan";};
    if (classid == 50900){ClassName = "Kyoryu Violet";};

    if (classid == 60000){ClassName = "Red Buster";};
        if (classid == 60010){ClassName = "Red Buster {Dobatsu}";};
    if (classid == 60100){ClassName = "Blue Buster";};
        if (classid == 60110){ClassName = "Blue Buster {Dobatsu}";};
    if (classid == 60200){ClassName = "Yellow Buster";};
        if (classid == 60210){ClassName = "Yellow Buster {Dobatsu}";};
    if (classid == 60300){ClassName = "Beet Buster";};
        if (classid == 60310){ClassName = "Beet Buster {Dobatsu}";};
    if (classid == 60400){ClassName = "Stag Buster";};
        if (classid == 60410){ClassName = "Stag Buster {Dobatsu}";};
    if (classid == 60500){ClassName = "Green Buster";};
        if (classid == 60510){ClassName = "Green Buster {Dobatsu}";};
    if (classid == 60600){ClassName = "Black Buster";};
        if (classid == 60610){ClassName = "Black Buster {Dobatsu}";};
    if (classid == 60700){ClassName = "Lady Buster";};
    if (classid == 60800){ClassName = "Pill Buster";};
    if (classid == 60900){ClassName = "Mantis Buster";};

    if (classid == 70000){ClassName = "Gokai Red";};
        if (classid == 70010){ClassName = "Gokai Cinimon";};
    if (classid == 70100){ClassName = "Gokai Blue";};
        if (classid == 70110){ClassName = "Gokai Berry";};
    if (classid == 70200){ClassName = "Gokai Yellow";};
        if (classid == 70210){ClassName = "Gokai Saffron";};
    if (classid == 70300){ClassName = "Gokai Green";};
        if (classid == 70310){ClassName = "Gokai Mint";};
    if (classid == 70400){ClassName = "Gokai Pink";};
        if (classid == 70410){ClassName = "Gokai Eggplant";};
    if (classid == 70500){ClassName = "Gokai Silver";};
        if (classid == 70510){ClassName = "Gokai Vanilla";};
    if (classid == 70600){ClassName = "Gokai Spoiler";};
        if (classid == 70610){ClassName = "Gokai Candy";};

    if (classid == 100000){ClassName = "Overlord";};
    if (classid == 110000){ClassName = "Test Dummy";};
    if (classid == 120000){ClassName = "Freight Train";};
    if (classid == 130000){ClassName = "Head Roleplayer";};
    if (classid == 140000){ClassName = "QA Tools";};
    return ClassName;
}//function

exports.PlayerPerkName = function(skillid, gender = 1){
    var skillname = "";
    if (skillid == 1){skillname = "Iron Fist";};
    if (skillid == 2){skillname = "Pickpocket";};
    if (skillid == 3){skillname = "Toughness";};
    if (skillid == 4){skillname = "Cap Collector";};
    if (skillid == 5){skillname = "VANS";};
    if (skillid == 6){skillname = "Gunslinger";};
    if (skillid == 7){skillname = "Fortune Finder";};

    if (skillid == 110){skillname = "Strength Boost";};
    if (skillid == 120){skillname = "Perception Boost";};
    if (skillid == 130){skillname = "Endurance Boost";};
    if (skillid == 140){skillname = "Charisma Boost";};
    if (skillid == 150){skillname = "Intelligence Boost";};
    if (skillid == 160){skillname = "Agility Boost";};
    if (skillid == 170){skillname = "Luck Boost";};

    if (skillid == 210){skillname = "Big Leagues";};
    if (skillid == 220){if (gender == 1){
                        skillname = "Rifleman";
                        }else{
                        skillname = "Riflewoman";
                        };};
    if (skillid == 230){skillname = "Fireproof";};
    if (skillid == 231){skillname = "Lead Belly";};
    if (skillid == 240){skillname = "Lady Killer";};
    if (skillid == 241){skillname = "Black Widow";};
    if (skillid == 250){skillname = "Medic";};
    if (skillid == 260){skillname = "Commando";};
    if (skillid == 270){skillname = "Scrounger";};

    if (skillid == 310){skillname = "Armorer";};
    if (skillid == 320){skillname = "Awareness";};
    if (skillid == 330){skillname = "Lifegiver";};
    if (skillid == 340){skillname = "Lone Wanderer";};
    if (skillid == 350){skillname = "Gun Nut";};
    if (skillid == 360){skillname = "Sneak";};
    if (skillid == 370){skillname = "Bloody Mess";};

    if (skillid == 410){skillname = "Blacksmith";};
    if (skillid == 420){skillname = "Locksmith";};
    if (skillid == 430){skillname = "Chem Resistant";};
    if (skillid == 440){skillname = "Attack Dog";};
    if (skillid == 450){skillname = "Hacker";};
    if (skillid == 460){skillname = "Mister Sandman";};
    if (skillid == 470){skillname = "Mysterious Stranger";};
    if (skillid == 471){skillname = "Miss Fortune";};

    if (skillid == 510){skillname = "Heavy Gunner";};
    if (skillid == 520){skillname = "Demolition Expert";};
    if (skillid == 530){if (gender == 1){
                        skillname = "Aquaboy";
                        }else{
                        skillname = "Aquagirl";
                        };};
    if (skillid == 531){skillname = "Chilled";};
    if (skillid == 540){skillname = "Animal Friend";};
    if (skillid == 550){skillname = "Scrapper";};
    if (skillid == 560){if (gender == 1){
                        skillname = "Action Boy";
                        }else{
                        skillname = "Action Girl";
                        };};
    if (skillid == 570){skillname = "Idiot Sevant";};

    if (skillid == 610){skillname = "Strong Back";};
    if (skillid == 620){skillname = "Night Person";};
    if (skillid == 630){skillname = "Rad Resistant";};
    if (skillid == 640){skillname = "Local Leader";};
    if (skillid == 650){skillname = "Science!";};
    if (skillid == 651){skillname = "Magick!";};
    if (skillid == 660){skillname = "Moving Target";};
    if (skillid == 670){skillname = "Better Criticals";};

    if (skillid == 710){skillname = "Steady Aim";};
    if (skillid == 720){skillname = "Refractor";};
    if (skillid == 730){skillname = "Adamantium Skeleton";};
    if (skillid == 740){if (gender == 1){
                        skillname = "Party Boy";
                        }else{
                        skillname = "Party Girl";
                        };};
    if (skillid == 750){skillname = "Chemist";};
    if (skillid == 760){skillname = "Ninja";};
    if (skillid == 761){skillname = "Konoichi";};
    if (skillid == 770){skillname = "Critical Banker";};

    if (skillid == 810){skillname = "Basher";};
    if (skillid == 820){skillname = "Sniper";};
    if (skillid == 830){skillname = "Cannibal";};
    if (skillid == 831){skillname = "Antitoxin";};
    if (skillid == 840){skillname = "Inspirational";};
    if (skillid == 850){skillname = "Robotics Expert";};
    if (skillid == 851){skillname = "Magic Expert";};
    if (skillid == 860){skillname = "Quick Hands";};
    if (skillid == 870){skillname = "Grim Reaper's Sprint";};

    if (skillid == 910){skillname = "Rooted";};
    if (skillid == 920){skillname = "Penetrator";};
    if (skillid == 930){skillname = "Ghoulish";};
    if (skillid == 931){skillname = "Bullet Sponge";};
    if (skillid == 932){skillname = "Immolated";};
    if (skillid == 933){skillname = "Frozen";};
    if (skillid == 934){skillname = "Charged";};
    if (skillid == 935){skillname = "Venemous";};
    if (skillid == 936){skillname = "Resonating";};
    if (skillid == 940){skillname = "Wasteland Whisperer";};
    if (skillid == 950){skillname = "Nuclear Physicist";};
    if (skillid == 960){skillname = "Blitz";};
    if (skillid == 970){skillname = "Four Leaf Clover";};

    if (skillid == 1010){skillname = "Pain Train";};
    if (skillid == 1020){skillname = "Concentrated Fire";};
    if (skillid == 1030){skillname = "Solar Powered";};
    if (skillid == 1040){skillname = "Intimidation";};
    if (skillid == 1041){skillname = "Sex Appeal";};
    if (skillid == 1050){skillname = "Nerd Rage!";};
    if (skillid == 1060){skillname = "Gun Fu";};
    if (skillid == 1070){skillname = "Ricochet";};

    if (skillid == 1110){skillname = "Brain";};
    if (skillid == 1120){skillname = "Heart";};
    if (skillid == 1130){skillname = "Counter Culture";};
    if (skillid == 1140){skillname = "Reverse Engineer (Bannon)";};
    if (skillid == 1150){skillname = "Chaser";};
    if (skillid == 1160){skillname = "Angel";};
    if (skillid == 1170){skillname = "Genius (Krim)";};
    if (skillid == 1180){skillname = "Unbound (Lupine)";};
    if (skillid == 1190){skillname = "Dangerous Zombie";};
    return skillname;
}//function

exports.FitnessName = function(skillid){
    var skillname = "";
    if (skillid == -3){skillname = "Morbidly Obease";};
    if (skillid == -2){skillname = "Overweight";};
    if (skillid == -1){skillname = "Slighty Overweight";};
    if (skillid == 0){skillname = "Fit";};
    if (skillid == 1){skillname = "Toned";};
    if (skillid == 2){skillname = "Underweight";};
    if (skillid == 3){skillname = "Anorexic";};
    if (skillid == 21){skillname = "Speciality [S/E]: Beefcake";};
    if (skillid == 22){skillname = "Speciality [P/A]: Speedcake";};
    if (skillid == 23){skillname = "Speciality [C/I]: Cheesecake";};
    if (skillid == 31){skillname = "Extreme [S/E]: Bodybuilder";};
    if (skillid == 32){skillname = "Extreme [P/A]: Athletic";};
    if (skillid == 33){skillname = "Extreme [C/I]: Sexy";};
    return skillname;
}//function

exports.ThirstName = function(skillid){
    var skillname = "";
    if (skillid == 0){skillname = "Well Hydrated";};
    if (skillid == 1){skillname = "Hydrated";};
    if (skillid == 2){skillname = "Mildly Thirsty";};
    if (skillid == 3){skillname = "Thirsty";};
    if (skillid == 4){skillname = "Parched";};
    if (skillid == 5){skillname = "Midly Dehydrated";};
    if (skillid == 6){skillname = "Dehydrated";};
    if (skillid == 7){skillname = "Severly Dehydrated";};
    return skillname;
}//function

exports.HungerName = function(skillid){
    var skillname = "";
    if (skillid == 0){skillname = "Well Satiated";};
    if (skillid == 1){skillname = "Satiated";};
    if (skillid == 2){skillname = "Mildly Hungry";};
    if (skillid == 3){skillname = "Hungry";};
    if (skillid == 4){skillname = "Ravenous";};
    if (skillid == 5){skillname = "Mild Starvation";};
    if (skillid == 6){skillname = "Starving";};
    if (skillid == 7){skillname = "Severe Starvation";};
    return skillname;
}//function

exports.SleepName = function(skillid){
    var skillname = "";
    if (skillid == 0){skillname = "Well Rested";};
    if (skillid == 1){skillname = "Rested";};
    if (skillid == 2){skillname = "Mildly Tired";};
    if (skillid == 3){skillname = "Tired";};
    if (skillid == 4){skillname = "Exausted";};
    if (skillid == 5){skillname = "Mild Sleep Deprevation";};
    if (skillid == 6){skillname = "Sleep Deprevived";};
    if (skillid == 7){skillname = "Severe Sleep Deprevation";};
    return skillname;
}//function

exports.SickName = function(skillid){
    var skillname = "";
    if (skillid == 0){skillname = "Healthy";};
    return skillname;
}//function

exports.RaceName = function(skillid){
    var skillname = "Ningen";
    if (skillid == 0){skillname = "Ningen";};
    if (skillid == 1){skillname = "Bugster V1";};
    if (skillid == 2){skillname = "Bugster V2";};
    if (skillid == 3){skillname = "Roimude";};
    return skillname;
}//function

exports.GenderName = function(skillid){
    var skillname = "Male";
    if (skillid == 0){skillname = "Female";};
    return skillname;
}//function

exports.DamageName = function(skillid){
    var skillname = "Unknown";
    if (skillid == 0){skillname = "Balistic";};
    if (skillid == 1){skillname = "Fire";};
    if (skillid == 2){skillname = "Cryo";};
    if (skillid == 3){skillname = "Poison";};
    if (skillid == 4){skillname = "Toxic";};
    if (skillid == 5){skillname = "Energy";};
    if (skillid == 6){skillname = "Special";};
    if (skillid == 7){skillname = "Electrical";};
    if (skillid == 8){skillname = "Type I (Incremental)";};
    if (skillid == 9){skillname = "Type E (Exponential)";};
    return skillname;
}//function

exports.DamageStyle = function(skillid){
    var skillname = "Single";
    if (skillid == 0){skillname = "Hand-To-Hand";};
    if (skillid == 1){skillname = "Melee";};
    if (skillid == 2){skillname = "Pistol";};
    if (skillid == 3){skillname = "Rifle";};
    if (skillid == 4){skillname = "Heavy Weapons";};
    if (skillid == 5){skillname = "Automatic";};
    if (skillid == 6){skillname = "Ranged";};
    return skillname;
}//function

exports.ParseName = function(arrayname){
        arrayname = arrayname.split('_');
    var FullName = '';
    for (var s = 0; s < arrayname.length; s++){
        FullName += arrayname[s].charAt(0).toUpperCase() + arrayname[s].slice(1).toLowerCase();
        if (s !=  (arrayname.length-1)){FullName += " ";}
    }//for
/*
        arrayname = FullName.split('/');
    var FullName = '';
    for (var s = 0; s < arrayname.length; s++){
        FullName += arrayname[s].charAt(0).toUpperCase() + arrayname[s].slice(1).toLowerCase();
        if (s !=  (arrayname.length-1)){FullName += " ";}
    }//for
        arrayname = FullName.split('[');
    var FullName = '';
    for (var s = 0; s < arrayname.length; s++){
        FullName += arrayname[s].charAt(0).toUpperCase() + arrayname[s].slice(1).toLowerCase();
        if (s !=  (arrayname.length-1)){FullName += " ";}
    }//for
*/
    return FullName;
}//function

exports.SeriesName = function(skillid){
    var skillname = "";
    if (skillid == -10){skillname = "Ichigo";};
    if (skillid == -9){skillname = "The First";};
    if (skillid == -8){skillname = "V3";};
    if (skillid == -7){skillname = "X";};
    if (skillid == -6){skillname = "Amazon";};
    if (skillid == -5){skillname = "Stronger";};
    if (skillid == -4){skillname = "Skyrider";};
    if (skillid == -3){skillname = "Super-1";};
    if (skillid == -2){skillname = "Black";};
    if (skillid == -1){skillname = "Black RX";};
    if (skillid == 0){skillname = "Kuuga";};
    if (skillid == 1){skillname = "Agito";};
    if (skillid == 2){skillname = "Ryuki";};
    if (skillid == 3){skillname = "Faiz";};
    if (skillid == 4){skillname = "Blade";};
    if (skillid == 5){skillname = "Hibiki";};
    if (skillid == 6){skillname = "Kabuto";};
    if (skillid == 7){skillname = "Den-O";};
    if (skillid == 8){skillname = "Kiva";};
    if (skillid == 9){skillname = "G";};
    if (skillid == 10){skillname = "Decade";};
    if (skillid == 11){skillname = "Double";};
    if (skillid == 12){skillname = "OOOs";};
    if (skillid == 13){skillname = "Fourze";};
    if (skillid == 14){skillname = "Wizard";};
    if (skillid == 15){skillname = "Gaim";};
    if (skillid == 16){skillname = "Drive";};
    if (skillid == 17){skillname = "Ghost";};
    if (skillid == 18){skillname = "Amazons";};
    if (skillid == 19){skillname = "Ex-Aid";};
    if (skillid == 20){skillname = "Build";};

    if (skillid == 1000){skillname = "Gorenger";};
    if (skillid == 1001){skillname = "JAKQ";};
    if (skillid == 1002){skillname = "Battle Fever J";};
    if (skillid == 1003){skillname = "Supaiaman";};
    if (skillid == 1004){skillname = "Sun Vulcan";};
    if (skillid == 1005){skillname = "Goggle V";};
    if (skillid == 1006){skillname = "Dynaman";};
    if (skillid == 1007){skillname = "Bioman";};
    if (skillid == 1008){skillname = "Changeman";};
    if (skillid == 1009){skillname = "Flashman";};
    if (skillid == 1010){skillname = "Maskman";};
    if (skillid == 1011){skillname = "Liveman";};
    if (skillid == 1012){skillname = "Turboranger";};
    if (skillid == 1013){skillname = "Fiveman";};
    if (skillid == 1014){skillname = "Jetman";};
    if (skillid == 1015){skillname = "Zyuranger";};
    if (skillid == 1016){skillname = "Ninja Captor";};
    if (skillid == 1017){skillname = "Dairanger";};
    if (skillid == 1018){skillname = "Kakuranger";};
    if (skillid == 1019){skillname = "Ohranger";};
    if (skillid == 1020){skillname = "Carranger";};
    if (skillid == 1021){skillname = "Megaranger";};
    if (skillid == 1022){skillname = "Gingaman";};
    if (skillid == 1023){skillname = "GoGoFive";};
    if (skillid == 1024){skillname = "Timeranger";};
    if (skillid == 1025){skillname = "Gaoranger";};
    if (skillid == 1026){skillname = "Hurricanger";};
    if (skillid == 1027){skillname = "Abaranger";};
    if (skillid == 1028){skillname = "Dekaranger";};
    if (skillid == 1029){skillname = "Magiranger";};
    if (skillid == 1030){skillname = "Boukenger";};
    if (skillid == 1031){skillname = "Gekiranger";};
    if (skillid == 1032){skillname = "Go-Onger";};
    if (skillid == 1033){skillname = "Akibaranger";};
    if (skillid == 1034){skillname = "Go-Buster";};
    if (skillid == 1035){skillname = "Go-Buster II";};
    if (skillid == 1036){skillname = "Kyoryuger";};
    if (skillid == 1037){skillname = "ToQger";};
    if (skillid == 1038){skillname = "Ninninger";};
    if (skillid == 1039){skillname = "MagiMagiger";};
    if (skillid == 1040){skillname = "Zyouger";};
    if (skillid == 1041){skillname = "Kyuranger";};
    if (skillid == 1042){skillname = "Gorider";};
    if (skillid == 1043){skillname = "Shinkenger";};
    if (skillid == 1044){skillname = "Goseiger";};
    if (skillid == 1045){skillname = "Gokaiger";};
    return skillname;
}//function

exports.SubFormName = function(skillid){
    var skillname = "Sub Form";
//    if (skillid == -10){skillname = "Ichigo";};
//    if (skillid == -9){skillname = "The First";};
//    if (skillid == -8){skillname = "V3";};
//    if (skillid == -7){skillname = "X";};
//    if (skillid == -6){skillname = "Amazon";};
//    if (skillid == -5){skillname = "Stronger";};
//    if (skillid == -4){skillname = "Skyrider";};
//    if (skillid == -3){skillname = "Super-1";};
//    if (skillid == -2){skillname = "Black";};
//    if (skillid == -1){skillname = "Black RX";};
//    if (skillid == 0){skillname = "Kuuga";};
//    if (skillid == 1){skillname = "Agito";};
//    if (skillid == 2){skillname = "Ryuki";};
//    if (skillid == 3){skillname = "Faiz";};
//    if (skillid == 4){skillname = "Blade";};
//    if (skillid == 5){skillname = "Hibiki";};
//    if (skillid == 6){skillname = "Kabuto";};
//    if (skillid == 7){skillname = "Den-O";};
    if (skillid == 8){skillname = "Fustle";};//kiva
//    if (skillid == 9){skillname = "G";};
    if (skillid == 10){skillname = "Card";};//Decade
    if (skillid == 11){skillname = "Gaia Memory";};//double
    if (skillid == 12){skillname = "Medal";};//ooos
    if (skillid == 13){skillname = "Module";};//fourze
    if (skillid == 14){skillname = "Ring";};//wizard
    if (skillid == 15){skillname = "Lockseed";};//gaim
    if (skillid == 16){skillname = "Shift Car";};//drivr
    if (skillid == 17){skillname = "Eyecon";};//ghost
//    if (skillid == 18){skillname = "Amazons";};
    if (skillid == 19){skillname = "Gashat";};//Ex-Aid
    if (skillid == 20){skillname = "Bottle";};//Build

//    if (skillid == 1000){skillname = "Gorenger";};
//    if (skillid == 1001){skillname = "JAKQ";};
//    if (skillid == 1002){skillname = "Battle Fever J";};
//    if (skillid == 1003){skillname = "Supaiaman";};
//    if (skillid == 1004){skillname = "Sun Vulcan";};
//    if (skillid == 1005){skillname = "Goggle V";};
//    if (skillid == 1006){skillname = "Dynaman";};
//    if (skillid == 1007){skillname = "Bioman";};
//    if (skillid == 1008){skillname = "Changeman";};
//    if (skillid == 1009){skillname = "Flashman";};
//    if (skillid == 1010){skillname = "Maskman";};
//    if (skillid == 1011){skillname = "Liveman";};
//    if (skillid == 1012){skillname = "Turboranger";};
//    if (skillid == 1013){skillname = "Fiveman";};
//    if (skillid == 1014){skillname = "Jetman";};
//    if (skillid == 1015){skillname = "Zyuranger";};
//    if (skillid == 1016){skillname = "Ninja Captor";};
//    if (skillid == 1017){skillname = "Dairanger";};
//    if (skillid == 1018){skillname = "Kakuranger";};
//    if (skillid == 1019){skillname = "Ohranger";};
//    if (skillid == 1020){skillname = "Carranger";};
//    if (skillid == 1021){skillname = "Megaranger";};
//    if (skillid == 1022){skillname = "Gingaman";};
//    if (skillid == 1023){skillname = "GoGoFive";};
//    if (skillid == 1024){skillname = "Timeranger";};
    if (skillid == 1025){skillname = "Animal Spheres";};//Gaoranger
//    if (skillid == 1026){skillname = "Hurricanger";};
//    if (skillid == 1027){skillname = "Abaranger";};
//    if (skillid == 1028){skillname = "Dekaranger";};
//    if (skillid == 1029){skillname = "Magiranger";};
//    if (skillid == 1030){skillname = "Boukenger";};
//    if (skillid == 1031){skillname = "Gekiranger";};
    if (skillid == 1032){skillname = "Engine Cell";};//Go-Onger
//    if (skillid == 1033){skillname = "Akibaranger";};
//    if (skillid == 1034){skillname = "Go-Buster";};
//    if (skillid == 1035){skillname = "Go-Buster II";};
    if (skillid == 1036){skillname = "Zyudenchi";};//Kyoryuger
    if (skillid == 1037){skillname = "Ressha";};//ToQger
    if (skillid == 1038){skillname = "Nin Shuriken";};//Ninninger
//    if (skillid == 1039){skillname = "MagiMagiger";};
    if (skillid == 1040){skillname = "Cube";};//Zyouger
    if (skillid == 1041){skillname = "Kyutama";};//Kyuranger
//    if (skillid == 1042){skillname = "Gorider";};
    if (skillid == 1043){skillname = "Hidden Disk";};//Shinkenger
    if (skillid == 1044){skillname = "Gosei Card";};//Goseiger
    if (skillid == 1045){skillname = "Ranger Key";};//Gokaiger
    return skillname;
}//function


exports.AttackSoundLevel = function(skillid){
    var skillname = "";
    if (skillid == 0){skillname = "Silent";};
    if (skillid == 1){skillname = "Quiet";};
    if (skillid == 2){skillname = "Normal";};
    if (skillid == 3){skillname = "Loud";};
    if (skillid == 4){skillname = "Really Loud";};
    return skillname;
}//function

exports.MoveType = function(skillid){
    var skillname = "Restoring";
    if (skillid == '-'){skillname = "Attacking";};
    return skillname;
}//function

exports.CarryCalculator = function(strtotal, bonuscarry){
        var carry = 120 + (10 * strtotal) + (bonuscarry*25);
        return carry;
}//function

exports.GenderString = function(genderID){
    var gender = "himself";
    if (genderID == 0){gender = "herself";};
    return gender;
}//function

exports.HeightCalculator = function(heightincm){
        var height = heightincm*0.0328084;
            height = Math.round(100*height)/100;
        return height;
}//function
exports.MaxHPCalculator = function(PlayerLevel2, EndTotal2, powertotal2, bonusHMIP, bonusskill){
    var MaXHPCalc2 = Math.floor(100 + (PlayerLevel2 * 10) + (EndTotal2*10));
        MaXHPCalc2 = Math.floor(MaXHPCalc2 * powertotal2);
        MaXHPCalc2 = Math.floor(MaXHPCalc2 + bonusHMIP + (20*bonusskill));
    return MaXHPCalc2;
}//function
exports.MaxMPCalculator = function(PlayerLevel2, AglTotal2, powertotal2, bonusHMIP, bonusskill){
    var MaXMPCalc2 = Math.floor(100 + PlayerLevel2 + (AglTotal2*2));
        MaXMPCalc2 = Math.floor(MaXMPCalc2*powertotal2);
        MaXMPCalc2 = Math.floor(MaXMPCalc2 + bonusHMIP);
    return MaXMPCalc2;
}//function
exports.MaxIPCalculator = function(PlayerLevel2, IntTotal2, powertotal2, bonusHMIP, bonusskill){
    var MaXIPCalc2 = Math.floor(100 + PlayerLevel2 + (IntTotal2*3));
        MaXIPCalc2 = Math.floor(MaXIPCalc2*powertotal2);
        MaXIPCalc2 = Math.floor(MaXIPCalc2 + bonusHMIP);
    return MaXIPCalc2;
}//function

exports.ResistBALISTICCalculator = function(PlayerLevel, EndTotal, ToughnessCount, powerMultiplier){
        var MaXCalc = Math.floor((PlayerLevel/2) + EndTotal);
            MaXCalc = Math.floor(MaXCalc * powerMultiplier);
            MaXCalc = Math.floor(MaXCalc + (10*ToughnessCount));
        return MaXCalc;
}//function
exports.ResistFIRECalculator = function(PlayerLevel, EndTotal, FireproofCount, powerMultiplier){
        var MaXCalc = Math.floor((PlayerLevel/4) + (EndTotal/3));
            MaXCalc = Math.floor(MaXCalc * powerMultiplier);
            MaXCalc = Math.floor(MaXCalc + (10*FireproofCount));
        return MaXCalc;
}//function
exports.ResistCRYOCalculator = function(PlayerLevel, EndTotal, ChilledCount, powerMultiplier){
        var MaXCalc = Math.floor((PlayerLevel/3) + (EndTotal/4));
            MaXCalc = Math.floor(MaXCalc * powerMultiplier);
            MaXCalc = Math.floor(MaXCalc + (10*ChilledCount));
        return MaXCalc;
}//function
exports.ResistPOSIONCalculator = function(PlayerLevel, EndTotal, AntitoxinCount, powerMultiplier){
        var MaXCalc = Math.floor((PlayerLevel/6) + (EndTotal/5));
            MaXCalc = Math.floor(MaXCalc * powerMultiplier);
            MaXCalc = Math.floor(MaXCalc + (10*AntitoxinCount));
        return MaXCalc;
}//function
exports.ResistTOXICCalculator = function(PlayerLevel, EndTotal, RadResistCount, powerMultiplier){
        var MaXCalc = Math.floor((PlayerLevel/10) + (EndTotal/6));
            MaXCalc = Math.floor(MaXCalc * powerMultiplier);
            MaXCalc = Math.floor(MaXCalc + (10*RadResistCount));
        return MaXCalc;
}//function
exports.ResistENERGYCalculator = function(PlayerLevel, EndTotal, RefractorCount, powerMultiplier){
        var MaXCalc = Math.floor((PlayerLevel/5) + (EndTotal/2));
            MaXCalc = Math.floor(MaXCalc * powerMultiplier);
            MaXCalc = Math.floor(MaXCalc + (10*RefractorCount));
        return MaXCalc;
}//function
exports.ResistELECCalculator = function(PlayerLevel, EndTotal, ChargedCount, powerMultiplier){
        var MaXCalc = Math.floor((PlayerLevel/5) + (EndTotal/2));
            MaXCalc = Math.floor(MaXCalc * powerMultiplier);
            MaXCalc = Math.floor(MaXCalc + (10*ChargedCount));
        return MaXCalc;
}//function

exports.XPtoNextLevel = function(PlayerLevel){
        var xptonext       = Math.floor((PlayerLevel+1) + ((PlayerLevel+1)*0.20));
            xptonext       = Math.floor(xptonext + (((xptonext*0.60)*(xptonext*0.80))*15.3));
        return xptonext;
}//function

exports.XPPercentCalc = function(totalCurrentXP, xptonext){
        var xptonext      = Math.floor((totalCurrentXP/xptonext)*100);
        return xptonext;
}//function

exports.AttackDescription = function(rankstoadd, movelimit, uidname, action, mentionedname){
        var combatlog = '';
        combatlog = uidname + ' used ***' + action + ' x' + rankstoadd.toLocaleString() + '*** on '+ mentionedname + '\n';
            if (rankstoadd < 2){
                combatlog = uidname + ' used ***' + action + '*** on '+ mentionedname + '\n';
            };//if (rankstoadd < 2)
        return combatlog;
}//function
