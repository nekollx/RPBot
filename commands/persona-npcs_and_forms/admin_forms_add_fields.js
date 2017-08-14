const discord = require ('discord.js');
var settings = require('../../settings.js');
var randomHex = require('random-hex');
var Client    = require('mysql');
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
    var uid       = msg.author.id;
    var uidname   = msg.author.username;
    var uidavatar = msg.author.avatarURL;

    var mentionedid     = uid;
    var mentionedname   = uidname;
    var mentionedavatar = uidavatar;

    //if (msg.mentions.users.first()){
    //  mentionedid = msg.mentions.users.first().id;
    //  mentionedname = msg.mentions.users.first().username;
    //};//if

    var arrayname = msg.content.split(' ');
    var Series_ID    = parseInt(arrayname[1]);
    var SPECIAL    = arrayname[2];
    var SPECIALName    = "Strength";

    if (isNaN(Series_ID) || (Series_ID == null) || (Series_ID == undefined)){Series_ID = 0;}

    if (msg.content.toLowerCase().startsWith("!my-gender")){SPECIALName = "Gender";}
    if (msg.content.toLowerCase().startsWith("!mygender")){SPECIALName = "Gender";}
    if (msg.content.toLowerCase().startsWith("!my-height")){SPECIALName = "Height";}
    if (msg.content.toLowerCase().startsWith("!myheight")){SPECIALName = "Height";}
    if (msg.content.toLowerCase().startsWith("!my-weight")){SPECIALName = "Weight";}
    if (msg.content.toLowerCase().startsWith("!myweight")){SPECIALName = "Weight";}
    if (msg.content.toLowerCase().startsWith("!my-race")){SPECIALName = "Race";}
    if (msg.content.toLowerCase().startsWith("!myrace")){SPECIALName = "Race";}
    if (msg.content.toLowerCase().startsWith("!my-fitness")){SPECIALName = "Fitness";}
    if (msg.content.toLowerCase().startsWith("!myfitness")){SPECIALName = "Fitness";}

    if (msg.content.toLowerCase().startsWith("!my-perception")){SPECIALName = "Perception";}
    if (msg.content.toLowerCase().startsWith("!myperception")){SPECIALName = "Perception";}
    if (msg.content.toLowerCase().startsWith("!my-endurance")){SPECIALName = "Endurance";}
    if (msg.content.toLowerCase().startsWith("!myendurance")){SPECIALName = "Endurance";}
    if (msg.content.toLowerCase().startsWith("!my-charisma")){SPECIALName = "Charisma";}
    if (msg.content.toLowerCase().startsWith("!mycharisma")){SPECIALName = "Charisma";}
    if (msg.content.toLowerCase().startsWith("!my-intelligence")){SPECIALName = "Intelligence";}
    if (msg.content.toLowerCase().startsWith("!myintelligence")){SPECIALName = "Intelligence";}
    if (msg.content.toLowerCase().startsWith("!my-agility")){SPECIALName = "Agility";}
    if (msg.content.toLowerCase().startsWith("!myagility")){SPECIALName = "Agility";}
    if (msg.content.toLowerCase().startsWith("!my-luck")){SPECIALName = "Luck";}
    if (msg.content.toLowerCase().startsWith("!myluck")){SPECIALName = "Luck";}

    mysqlPool.getConnection(function(err_u, connection) {
        if(err_u) {console.log("Error on - mysqlPool.getConnection for add weapons/armor/items: "+ err_u)};

        var SQLString  = "SELECT * FROM " + settings.playerforms + " ";
            SQLString += "WHERE Series_ID = " + Series_ID + " ";
            SQLString += "AND User_ID = '" + mentionedid +"'";
        connection.query(SQLString, {title: 'Update'}, function(errU, resultU) {
            if (errU) console.log(errU);
                if (resultU.length > 0){
                    var NPCID = resultU[0].Table_ID;
                    var SPECIAL_CAP = 35;
                    var Total_Specials = 0;
                    var Strength = parseInt(settings.User_Forms.get(NPCID).Strength);
                        if (SPECIALName != "Strength"){Total_Specials += Strength;} 
                    var Perception = parseInt(settings.User_Forms.get(NPCID).Perception);
                        if (SPECIALName != "Perception"){Total_Specials += Perception;} 
                    var Endurance = parseInt(settings.User_Forms.get(NPCID).Endurance);
                        if (SPECIALName != "Endurance"){Total_Specials += Endurance;} 
                    var Charisma = parseInt(settings.User_Forms.get(NPCID).Charisma);
                        if (SPECIALName != "Charisma"){Total_Specials += Charisma;} 
                    var Intelligence = parseInt(settings.User_Forms.get(NPCID).Intelligence);
                        if (SPECIALName != "Intelligence"){Total_Specials += Intelligence;} 
                    var Agility = parseInt(settings.User_Forms.get(NPCID).Agility);
                        if (SPECIALName != "Agility"){Total_Specials += Agility;} 
                    var Luck = parseInt(settings.User_Forms.get(NPCID).Luck);
                        if (SPECIALName != "Luck"){Total_Specials += Luck;} 

                    if (msg.content.toLowerCase().startsWith("!my-strength")){Total_Specials += parseInt(SPECIAL);}
                    if (msg.content.toLowerCase().startsWith("!mystrength")){Total_Specials += parseInt(SPECIAL);}
                    if (msg.content.toLowerCase().startsWith("!my-perception")){Total_Specials += parseInt(SPECIAL);}
                    if (msg.content.toLowerCase().startsWith("!myperception")){Total_Specials += parseInt(SPECIAL);}
                    if (msg.content.toLowerCase().startsWith("!my-endurance")){Total_Specials += parseInt(SPECIAL);}
                    if (msg.content.toLowerCase().startsWith("!myendurance")){Total_Specials += parseInt(SPECIAL);}
                    if (msg.content.toLowerCase().startsWith("!my-charisma")){Total_Specials += parseInt(SPECIAL);}
                    if (msg.content.toLowerCase().startsWith("!mycharisma")){Total_Specials += parseInt(SPECIAL);}
                    if (msg.content.toLowerCase().startsWith("!my-intelligence")){Total_Specials += parseInt(SPECIAL);}
                    if (msg.content.toLowerCase().startsWith("!myintelligence")){Total_Specials += parseInt(SPECIAL);}
                    if (msg.content.toLowerCase().startsWith("!my-agility")){Total_Specials += parseInt(SPECIAL);}
                    if (msg.content.toLowerCase().startsWith("!myagility")){Total_Specials += parseInt(SPECIAL);}
                    if (msg.content.toLowerCase().startsWith("!my-luck")){Total_Specials += parseInt(SPECIAL);}
                    if (msg.content.toLowerCase().startsWith("!myluck")){Total_Specials += parseInt(SPECIAL);}

                    if (msg.content.toLowerCase().startsWith("!my-gender")){
                        if (settings.User_Forms.get(NPCID)[SPECIALName] == 0){SPECIAL = 1;}else{SPECIAL = 0;}
                    };
                    if (msg.content.toLowerCase().startsWith("!mygender")){
                        if (settings.User_Forms.get(NPCID)[SPECIALName] == 0){SPECIAL = 1;}else{SPECIAL = 0;}
                    };

                    if (Total_Specials <= SPECIAL_CAP){                  
                    var UpdateString  = "UPDATE " + settings.playerforms+" ";
                        UpdateString += "SET ";
                        UpdateString += SPECIALName+" = '" + SPECIAL +"' ";
                        UpdateString += "WHERE Table_ID = " + NPCID;
                    connection.query(UpdateString);
                    settings.User_Forms.get(NPCID)[SPECIALName] = SPECIAL;
                    };//if (Total_Specials < SPECIAL_CAP)

                        Total_Specials = 0;
                    var BIO = settings.User_Forms.get(NPCID).Bio;
                    var URL = settings.User_Forms.get(NPCID).Avatar_URL;
                    var Avatar_URL2 = settings.User_Forms.get(NPCID).Avatar_URL;
                    var Power = parseInt(settings.User_Forms.get(NPCID).Power);
                    var Bonus_Level = parseInt(settings.User_Forms.get(NPCID).Bonus_Level);
                    var Level = (Bonus_Level) + Power/10;
                    var Strength = parseInt(settings.User_Forms.get(NPCID).Strength);
                        Total_Specials += Strength; 
                    var Perception = parseInt(settings.User_Forms.get(NPCID).Perception);
                        Total_Specials += Perception; 
                    var Endurance = parseInt(settings.User_Forms.get(NPCID).Endurance);
                        Total_Specials += Endurance; 
                    var Charisma = parseInt(settings.User_Forms.get(NPCID).Charisma);
                        Total_Specials += Charisma; 
                    var Intelligence = parseInt(settings.User_Forms.get(NPCID).Intelligence);
                        Total_Specials += Intelligence; 
                    var Agility = parseInt(settings.User_Forms.get(NPCID).Agility);
                        Total_Specials += Agility; 
                    var Luck = parseInt(settings.User_Forms.get(NPCID).Luck);
                        Total_Specials += Luck; 
                    var SpecialPoints = SPECIAL_CAP - Total_Specials;
                    var PerkPoints = Bonus_Level + (parseInt(settings.User_Forms.get(NPCID).Power)/10);

                    var Fitness = parseInt(settings.User_Forms.get(NPCID).Fitness);
                    var Gender = parseInt(settings.User_Forms.get(NPCID).Gender);
                    var Height = parseInt(settings.User_Forms.get(NPCID).Height);
                    var Weight = parseInt(settings.User_Forms.get(NPCID).Weight);
                    var Race = parseInt(settings.User_Forms.get(NPCID).Race);
                    var PlayerHeight       = settings.HeightCalculator(Height);
                    var PlayerHeightFeet   = Math.floor(PlayerHeight);
                    var PlayerHeightInches = PlayerHeight % 1;
                        PlayerHeightInches = PlayerHeightInches * 100;
                        PlayerHeightInches = Math.floor(PlayerHeightInches);
                        PlayerHeightInches = PlayerHeightInches / 12;
                        PlayerHeightInches = Math.round(100*PlayerHeightInches)/100;
                    var PlayerHeightString = PlayerHeightFeet + ' Feet, ' + PlayerHeightInches + ' Inches';

                    var Current_HP = parseInt(settings.User_Forms.get(NPCID).Current_HP);
                    var Current_MP = parseInt(settings.User_Forms.get(NPCID).Current_MP);
                    var Current_IP = parseInt(settings.User_Forms.get(NPCID).Current_IP);
                    var Bonus_HP = parseInt(settings.User_Forms.get(NPCID).Bonus_HP);
                    var Bonus_MP = parseInt(settings.User_Forms.get(NPCID).Bonus_MP);
                    var Bonus_IP = parseInt(settings.User_Forms.get(NPCID).Bonus_IP);
                    var Total_Levels = parseInt(Level) + parseInt(Bonus_Level);

                    var MaxH = settings.MaxHPCalculator(Total_Levels, Endurance, Power, Bonus_HP, 0/*LifegiverCount2*/);
                    var MaxM = settings.MaxMPCalculator(Total_Levels, Agility, Power, Bonus_MP, 0/*bonus skill count*/);
                    var MaxI = settings.MaxIPCalculator(Total_Levels, Intelligence, Power, Bonus_IP, 0/*bonus skill count*/);
                    var HP_String = Current_HP.toLocaleString()+"/"+MaxH.toLocaleString()+"["+((Current_HP/MaxH)*100)+"%]";
                    var MP_String = Current_MP.toLocaleString()+"/"+MaxM.toLocaleString()+"["+((Current_MP/MaxM)*100)+"%]";
                    var IP_String = Current_IP.toLocaleString()+"/"+MaxI.toLocaleString()+"["+((Current_IP/MaxI)*100)+"%]";

                    var Bonus_Ballistic_Resist = parseInt(settings.User_Forms.get(NPCID).Bonus_Ballistic_Resist);
                    var Bonus_Fire_Resist = parseInt(settings.User_Forms.get(NPCID).Bonus_Fire_Resist);
                    var Bonus_Cryo_Resist = parseInt(settings.User_Forms.get(NPCID).Bonus_Cryo_Resist);
                    var Bonus_Posion_Resist = parseInt(settings.User_Forms.get(NPCID).Bonus_Posion_Resist);
                    var Bonus_Toxic_Resist = parseInt(settings.User_Forms.get(NPCID).Bonus_Toxic_Resist);
                    var Bonus_Energy_Resist = parseInt(settings.User_Forms.get(NPCID).Bonus_Energy_Resist);
                    var Bonus_Electric_Resist = parseInt(settings.User_Forms.get(NPCID).Bonus_Electric_Resist);
                    var Bonus_Special_Resist = parseInt(settings.User_Forms.get(NPCID).Bonus_Special_Resist);

                    var Bonus_Ballistic_Threshold = parseInt(settings.User_Forms.get(NPCID).Bonus_Ballistic_Threshold);
                    var Bonus_Fire_Threshold = parseInt(settings.User_Forms.get(NPCID).Bonus_Fire_Threshold);
                    var Bonus_Cryo_Threshold = parseInt(settings.User_Forms.get(NPCID).Bonus_Cryo_Threshold);
                    var Bonus_Posion_Threshold = parseInt(settings.User_Forms.get(NPCID).Bonus_Posion_Threshold);
                    var Bonus_Toxic_Threshold = parseInt(settings.User_Forms.get(NPCID).Bonus_Toxic_Threshold);
                    var Bonus_Energy_Threshold = parseInt(settings.User_Forms.get(NPCID).Bonus_Energy_Threshold);
                    var Bonus_Electric_Threshold = parseInt(settings.User_Forms.get(NPCID).Bonus_Electric_Threshold);
                    var Bonus_Special_Threshold = parseInt(settings.User_Forms.get(NPCID).Bonus_Special_Threshold);

                    var Class_ID = parseInt(settings.User_Forms.get(NPCID).Class_ID);
                    var Class_ID_Sub1 = parseInt(settings.User_Forms.get(NPCID).Class_ID_Sub1);                                   
                    var Class_ID_Sub2 = parseInt(settings.User_Forms.get(NPCID).Class_ID_Sub2);                                   
                    var Class_ID_Sub3 = parseInt(settings.User_Forms.get(NPCID).Class_ID_Sub3);                                   
                    var Class_ID_Sub4 = parseInt(settings.User_Forms.get(NPCID).Class_ID_Sub4);                                   

                    var slapdesc  = '['+ settings.User_Forms.get(NPCID).Self_ID +']';
                        slapdesc  += settings.User_Forms.get(NPCID).Name
                    var Series_Name = ' ['+settings.SeriesName(settings.User_Forms.get(NPCID).Series_ID)+']';

                    const RiderEmbed = new discord.RichEmbed()
                          RiderEmbed.setThumbnail(URL)
                          RiderEmbed.setColor(randomHex.generate())
                          RiderEmbed.setDescription(BIO)
                          RiderEmbed.setAuthor(settings.PlayerClassName(Class_ID) + " ["+mentionedname+" - "+Series_Name+"]", mentionedavatar)
                          RiderEmbed.addField("Gender", settings.GenderName(Gender), true)
                          RiderEmbed.addField("Height", PlayerHeightString+" ["+Height+" cm]", true)
                          RiderEmbed.addField("Weight", Weight.toLocaleString()+" lbs ["+settings.FitnessName(Fitness)+"]", true)
                          RiderEmbed.addField("Race", settings.RaceName(Race), true)
                          RiderEmbed.addField("Level", Level.toLocaleString(), true)
                          RiderEmbed.addField("Power", Power.toLocaleString(), true)
                          RiderEmbed.addField("Perk Points", PerkPoints.toLocaleString(), true)
                          if (SpecialPoints > 0){RiderEmbed.addField("SPECIAL Point", SpecialPoints.toLocaleString(), true)}
                          else {RiderEmbed.addBlankField (true)}
                          RiderEmbed.addField("HP", HP_String, true)
                          RiderEmbed.addField("AP", MP_String, true)
                          RiderEmbed.addField("IP", IP_String, true)
                          RiderEmbed.addField("Strength", Strength.toLocaleString(), true)
                          RiderEmbed.addField("Perception", Perception.toLocaleString(), true)
                          RiderEmbed.addField("Endurance", Endurance.toLocaleString(), true)
                          RiderEmbed.addField("Charisma", Charisma.toLocaleString(), true)
                          RiderEmbed.addField("Intelligence", Intelligence.toLocaleString(), true)
                          RiderEmbed.addField("Agility", Agility.toLocaleString(), true)
                          RiderEmbed.addField("Luck", Luck.toLocaleString(), true)
                    msg.channel.send({embed: RiderEmbed});

                    const RiderEmbed2 = new discord.RichEmbed()
                          RiderEmbed2.setThumbnail(Avatar_URL2)
                          RiderEmbed2.setAuthor(settings.PlayerClassName(Class_ID) + " ["+mentionedname+" - "+Series_Name+"]", mentionedavatar)
                          RiderEmbed2.addField("Balistic Resist", Bonus_Ballistic_Resist.toLocaleString(), true)
                          RiderEmbed2.addField("Fire Resist", Bonus_Fire_Resist.toLocaleString(), true)
                          RiderEmbed2.addField("Cryo Resist", Bonus_Cryo_Resist.toLocaleString(), true)
                          RiderEmbed2.addField("Posion Resist", Bonus_Posion_Resist.toLocaleString(), true)
                          RiderEmbed2.addField("Toxic Resist", Bonus_Toxic_Resist.toLocaleString(), true)
                          RiderEmbed2.addField("Energy Resist", Bonus_Energy_Resist.toLocaleString(), true)
                          RiderEmbed2.addField("Electricity Resist", Bonus_Electric_Resist.toLocaleString(), true)
                          RiderEmbed2.addField("Special Resist", Bonus_Special_Resist.toLocaleString(), true)
                          RiderEmbed2.addBlankField (true)
                          RiderEmbed2.addField("Balistic Threshold", Bonus_Ballistic_Threshold.toLocaleString(), true)
                          RiderEmbed2.addField("Fire Threshold", Bonus_Fire_Threshold.toLocaleString(), true)
                          RiderEmbed2.addField("Cryo Threshold", Bonus_Cryo_Threshold.toLocaleString(), true)
                          RiderEmbed2.addField("Posion Threshold", Bonus_Posion_Threshold.toLocaleString(), true)
                          RiderEmbed2.addField("Toxic Threshold", Bonus_Toxic_Threshold.toLocaleString(), true)
                          RiderEmbed2.addField("Energy Threshold", Bonus_Energy_Threshold.toLocaleString(), true)
                          RiderEmbed2.addField("Electricity Threshold", Bonus_Electric_Threshold.toLocaleString(), true)
                          RiderEmbed2.addField("Special Threshold", Bonus_Special_Threshold.toLocaleString(), true)
                          RiderEmbed2.addBlankField (true)
                    msg.channel.send({embed: RiderEmbed2});
                };//if (resultU > 0)
       });//connection.query(SQLString
        connection.release(); // if error occured closed the connection
    });//get connection
};//run

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: [
            "my-strength",
            "my-perception", "myperception",
            "my-endurance", "myendurance",
            "my-charisma", "mycharisma",
            "my-intelligence", "myintelligence",
            "my-agility", "myagility",
            "my-luck", "myluck",
            "my-gender", "mygender",
            "my-height", "myheight",
            "my-weight", "myweight",
            "my-fitness", "myfitness",
            "my-race", "myrace",
           ],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "mystrength",
  description: "",
  usage: "",
  usageDelim: ""
//  extendedHelp: "";
};
