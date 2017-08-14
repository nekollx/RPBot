exports.run = (client, msg) => {
    var msgtlc = msg.content.toLowerCase(); 
    if (msgtlc == 'sparkle'){
        var forms = 'Sparkle, Sparkle!';
        msg.channel.sendMessage(forms);
    };//if
};//run

exports.conf = {
  enabled: true,
};//conf