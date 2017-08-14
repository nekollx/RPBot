exports.run = (client, msg) => {
    var msgtlc = msg.content.toLowerCase(); 
    if (msgtlc.startsWith('covfefe')){
        var forms = 'Processing command Master '+ msg.author.username + '...';
        var stringarray = msgtlc.split(" ");        
        if (stringarray.length > 1){
            //forms += '\nCommand array size is '+stringarray.length;
            var confefeCMD = stringarray[1];
            var confefeTGT = stringarray[2];
            forms += '\n'+confefeCMD+ ' Command reconized';
            forms += '\n'+confefeTGT+ ' Target acknowledged';
            if (confefeCMD == 'kill'){
                forms += '\n\nDid you ask me to kill someone Master '+ msg.author.username + '? ';
                forms += '\nSorry, the Kill Command has not been implemented yet.'
            }//if
        };//if
        msg.channel.sendMessage(forms);
    };//if
};//run

exports.conf = {
  enabled: true,
};//conf