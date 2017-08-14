exports.run = (client, msg) => {
    var msgtlc = msg.content.toLowerCase(); 
    if (msgtlc == 'timeline change'){
        var forms = 'Timeline chaaaaaaaaaaaaange!';
        msg.channel.sendMessage(forms);
    };//if
    if (msgtlc == 'timeline reset'){
        var forms = 'Timeline Reset!';
        msg.channel.sendMessage(forms);
    };//if
};//run

exports.conf = {
  enabled: true,
};//conf