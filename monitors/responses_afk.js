exports.run = (client, msg) => {
    if (msg.content == 'afk'){
        var forms = '===KOMANDA SYSTEM===\n';
            forms += 'Okay! See you soon '+ msg.author.username + '\n\n';
        msg.channel.sendMessage(forms);
    };//if
};//run

exports.conf = {
  enabled: true,
};//conf