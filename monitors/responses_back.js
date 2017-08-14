exports.run = (client, msg) => {
    if (msg.content == 'back'){
        var forms = '===KOMANDA SYSTEM===\n';
            forms += 'Welcome back '+ msg.author.username + ' :)\n\n';
        msg.channel.sendMessage(forms);
    };//if
};//run

exports.conf = {
  enabled: true,
};//conf