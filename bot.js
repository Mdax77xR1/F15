//////////////////////////////////////////////////////////////////////////////////////////////////
const Discord1 = require('discord.js');
const Discord2 = require('discord.js');
const Discord3 = require('discord.js');
const Discord4 = require('discord.js');
const Discord5 = require('discord.js');
const Discord6 = require('discord.js');
const Discord7 = require('discord.js');
const Discord8 = require('discord.js');
const Discord9 = require('discord.js');
const Discord10 = require('discord.js');
const Discord11 = require('discord.js');
const Discord12 = require('discord.js');
const Discord13 = require('discord.js');
const Discord14 = require('discord.js');
const Discord15 = require('discord.js');
//////////////////////////////////////////////////////////////////////////////////////////////////
const client1 = new Discord1.Client();
const client2 = new Discord2.Client();
const client3 = new Discord3.Client();
const client4 = new Discord4.Client();
const client5 = new Discord5.Client();
const client6 = new Discord6.Client();
const client7 = new Discord7.Client();
const client8 = new Discord8.Client();
const client9 = new Discord9.Client();
const client10 = new Discord10.Client();
const client11 = new Discord11.Client();
const client12 = new Discord12.Client();
const client13 = new Discord13.Client();
const client14 = new Discord14.Client();
const client15 = new Discord15.Client();

//////////////////////////////////////////////////////////////////////////////////////////////////
var ServerID = "525661304736710668"; 
var ChannelID = "525965490040995850";
var prefix = "M";
console.log('Bots. Is. Online.');
//////////////////////////////////////////////////////////////////////////////////////////////////
client1.on('ready', () => {  
    function timerFunc() {
        client1.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7));
    }
     setInterval(timerFunc, 1500);
    });
client2.on('ready', () => {
    function timerFunc() {
        client2.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7));
    }
     setInterval(timerFunc, 1500);
    });
client3.on('ready', () => {
    function timerFunc() {
        client3.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7));
    }
     setInterval(timerFunc, 1500);
    });
client4.on('ready', () => {
    function timerFunc() {
        client4.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7));
    }
     setInterval(timerFunc, 1500);
    });
client5.on('ready', () => {
    function timerFunc() {
        client5.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7));
    }
     setInterval(timerFunc, 1500);
    });
client6.on('ready', () => {
    function timerFunc() {
        client6.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7));
    }
     setInterval(timerFunc, 1500);
    });
client7.on('ready', () => {
    function timerFunc() {
        client7.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7));
    }
     setInterval(timerFunc, 1500);
    });
client8.on('ready', () => {
    function timerFunc() {
        client8.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7));
    }
     setInterval(timerFunc, 1500);
    });
client9.on('ready', () => {
    function timerFunc() {
        client9.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7));
    }
     setInterval(timerFunc, 1500);
    });
client10.on('ready', () => {
    function timerFunc() {
        client10.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7));
    }
     setInterval(timerFunc, 1500);
    });
client11.on('ready', () => {  
    function timerFunc() {
        client11.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7));
    }
     setInterval(timerFunc, 1500);
    });
client12.on('ready', () => {
    function timerFunc() {
        client12.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7));
    }
     setInterval(timerFunc, 1500);
    });
client13.on('ready', () => {
    function timerFunc() {
        client13.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7));
    }
     setInterval(timerFunc, 1500);
    });
client14.on('ready', () => {
    function timerFunc() {
        client14.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7));
    }
     setInterval(timerFunc, 1500);
    });
client15.on('ready', () => {
    function timerFunc() {
        client15.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7));
    }
     setInterval(timerFunc, 1500);
    });

//////////////////////////////////////////////////////////////////////////////////////////////////
client1.on('message', message => {
    if(message.author.id !== '335484868479811584') return;
    if(message.content.toLowerCase().split(' ')[0] == '1s') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
client2.on('message', message => {
    if(message.author.id !== '335484868479811584') return;
    if(message.content.toLowerCase().split(' ')[0] == '2s') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
client3.on('message', message => {
    if(message.author.id !== '335484868479811584') return;
    if(message.content.toLowerCase().split(' ')[0] == '3s') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
client4.on('message', message => {
    if(message.author.id !== '335484868479811584') return;
    if(message.content.toLowerCase().split(' ')[0] == '4s') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
client5.on('message', message => {
    if(message.author.id !== '335484868479811584') return;
    if(message.content.toLowerCase().split(' ')[0] == '5s') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
client6.on('message', message => {
    if(message.author.id !== '335484868479811584') return;
    if(message.content.toLowerCase().split(' ')[0] == '6s') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
client7.on('message', message => {
    if(message.author.id !== '335484868479811584') return;
    if(message.content.toLowerCase().split(' ')[0] == '7s') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
client8.on('message', message => {
    if(message.author.id !== '335484868479811584') return;
    if(message.content.toLowerCase().split(' ')[0] == '8s') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
client9.on('message', message => {
    if(message.author.id !== '335484868479811584') return;
    if(message.content.toLowerCase().split(' ')[0] == '9s') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
client10.on('message', message => {
    if(message.author.id !== '335484868479811584') return;
    if(message.content.toLowerCase().split(' ')[0] == '10s') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
client11.on('message', message => {
    if(message.author.id !== '335484868479811584') return;
    if(message.content.toLowerCase().split(' ')[0] == '11s') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
client12.on('message', message => {
    if(message.author.id !== '335484868479811584') return;
    if(message.content.toLowerCase().split(' ')[0] == '12s') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
client13.on('message', message => {
    if(message.author.id !== '335484868479811584') return;
    if(message.content.toLowerCase().split(' ')[0] == '13s') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
client14.on('message', message => {
    if(message.author.id !== '335484868479811584') return;
    if(message.content.toLowerCase().split(' ')[0] == '14s') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
client15.on('message', message => {
    if(message.author.id !== '335484868479811584') return;
    if(message.content.toLowerCase().split(' ')[0] == '15s') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});

//////////////////////////////////////////////////////////////////////////////////////////////////
client1.on('message', message => {
    if(message.author.id !== '335484868479811584') return;
    if(message.content.toLowerCase().split(' ')[0] == 'Msay') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
client2.on('message', message => {
    if(message.author.id !== '335484868479811584') return;
    if(message.content.toLowerCase().split(' ')[0] == 'Msay') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
client3.on('message', message => {
    if(message.author.id !== '335484868479811584') return;
    if(message.content.toLowerCase().split(' ')[0] == 'Msay') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
client4.on('message', message => {
    if(message.author.id !== '335484868479811584') return;
    if(message.content.toLowerCase().split(' ')[0] == 'Msay') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
client5.on('message', message => {
    if(message.author.id !== '335484868479811584') return;
    if(message.content.toLowerCase().split(' ')[0] == 'Msay') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
client6.on('message', message => {
    if(message.author.id !== '335484868479811584') return;
    if(message.content.toLowerCase().split(' ')[0] == 'Msay') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
client7.on('message', message => {
    if(message.author.id !== '335484868479811584') return;
    if(message.content.toLowerCase().split(' ')[0] == 'Msay') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
client8.on('message', message => {
    if(message.author.id !== '335484868479811584') return;
    if(message.content.toLowerCase().split(' ')[0] == 'Msay') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
client9.on('message', message => {
    if(message.author.id !== '335484868479811584') return;
    if(message.content.toLowerCase().split(' ')[0] == 'Msay') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
client10.on('message', message => {
    if(message.author.id !== '335484868479811584') return;
    if(message.content.toLowerCase().split(' ')[0] == 'Msay') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
client11.on('message', message => {
    if(message.author.id !== '335484868479811584') return;
    if(message.content.toLowerCase().split(' ')[0] == 'Msay') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
client12.on('message', message => {
    if(message.author.id !== '335484868479811584') return;
    if(message.content.toLowerCase().split(' ')[0] == 'Msay') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
client13.on('message', message => {
    if(message.author.id !== '335484868479811584') return;
    if(message.content.toLowerCase().split(' ')[0] == 'Msay') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
client14.on('message', message => {
    if(message.author.id !== '335484868479811584') return;
    if(message.content.toLowerCase().split(' ')[0] == 'Msay') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
client15.on('message', message => {
    if(message.author.id !== '335484868479811584') return;
    if(message.content.toLowerCase().split(' ')[0] == 'Msay') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
/////////////////////////////////////////////////////////////////////////////////////////////////
client1.on("message", message => {
          if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "rep")) {
message.delete(3000);
    if(message.author.id !== "335484868479811584") return message.reply(' ').then(msg => msg.delete(3000));
message.channel.send('#rep <@!335484868479811584>').then(s => {
s.delete(3000);
});
message.channel.send('->rep <@!335484868479811584>').then(s => {
s.delete(3000);
});
}
});
client2.on("message", message => {
          if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "rep")) {
message.delete(3000);
    if(message.author.id !== "335484868479811584") return message.reply(' ').then(msg => msg.delete(3000));
message.channel.send('#rep <@!335484868479811584>').then(s => {
s.delete(3000);
});
message.channel.send('->rep <@!335484868479811584>').then(s => {
s.delete(3000);
});
}
});
client3.on("message", message => {
          if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "rep")) {
message.delete(3000);
    if(message.author.id !== "335484868479811584") return message.reply(' ').then(msg => msg.delete(3000));
message.channel.send('#rep <@!335484868479811584>').then(s => {
s.delete(3000);
});
message.channel.send('->rep <@!335484868479811584>').then(s => {
s.delete(3000);
});
}
});
client4.on("message", message => {
          if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "rep")) {
message.delete(3000);
    if(message.author.id !== "335484868479811584") return message.reply(' ').then(msg => msg.delete(3000));
message.channel.send('#rep <@!335484868479811584>').then(s => {
s.delete(3000);
});
message.channel.send('->rep <@!335484868479811584>').then(s => {
s.delete(3000);
});
}
});
client5.on("message", message => {
          if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "rep")) {
message.delete(3000);
    if(message.author.id !== "335484868479811584") return message.reply(' ').then(msg => msg.delete(3000));
message.channel.send('#rep <@!335484868479811584>').then(s => {
s.delete(3000);
});
message.channel.send('->rep <@!335484868479811584>').then(s => {
s.delete(3000);
});
}
});
client6.on("message", message => {
          if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "rep")) {
message.delete(3000);
    if(message.author.id !== "335484868479811584") return message.reply(' ').then(msg => msg.delete(3000));
message.channel.send('#rep <@!335484868479811584>').then(s => {
s.delete(3000);
});
message.channel.send('->rep <@!335484868479811584>').then(s => {
s.delete(3000);
});
}
});
client7.on("message", message => {
          if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "rep")) {
message.delete(3000);
    if(message.author.id !== "335484868479811584") return message.reply(' ').then(msg => msg.delete(3000));
message.channel.send('#rep <@!335484868479811584>').then(s => {
s.delete(3000);
});
message.channel.send('->rep <@!335484868479811584>').then(s => {
s.delete(3000);
});
}
});
client8.on("message", message => {
          if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "rep")) {
message.delete(3000);
    if(message.author.id !== "335484868479811584") return message.reply(' ').then(msg => msg.delete(3000));
message.channel.send('#rep <@!335484868479811584>').then(s => {
s.delete(3000);
});
message.channel.send('->rep <@!335484868479811584>').then(s => {
s.delete(3000);
});
}
});
client9.on("message", message => {
          if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "rep")) {
message.delete(3000);
    if(message.author.id !== "335484868479811584") return message.reply(' ').then(msg => msg.delete(3000));
message.channel.send('#rep <@!335484868479811584>').then(s => {
s.delete(3000);
});
message.channel.send('->rep <@!335484868479811584>').then(s => {
s.delete(3000);
});
}
});
client10.on("message", message => {
          if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "rep")) {
message.delete(3000);
    if(message.author.id !== "335484868479811584") return message.reply(' ').then(msg => msg.delete(3000));
message.channel.send('#rep <@!335484868479811584>').then(s => {
s.delete(3000);
});
message.channel.send('->rep <@!335484868479811584>').then(s => {
s.delete(3000);
});
}
});
client11.on("message", message => {
          if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "rep")) {
message.delete(3000);
    if(message.author.id !== "335484868479811584") return message.reply(' ').then(msg => msg.delete(3000));
message.channel.send('#rep <@!335484868479811584>').then(s => {
s.delete(3000);
});
message.channel.send('->rep <@!335484868479811584>').then(s => {
s.delete(3000);
});
}
});
client12.on("message", message => {
          if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "rep")) {
message.delete(3000);
    if(message.author.id !== "335484868479811584") return message.reply(' ').then(msg => msg.delete(3000));
message.channel.send('#rep <@!335484868479811584>').then(s => {
s.delete(3000);
});
message.channel.send('->rep <@!335484868479811584>').then(s => {
s.delete(3000);
});
}
});
client13.on("message", message => {
          if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "rep")) {
message.delete(3000);
    if(message.author.id !== "335484868479811584") return message.reply(' ').then(msg => msg.delete(3000));
message.channel.send('#rep <@!335484868479811584>').then(s => {
s.delete(3000);
});
message.channel.send('->rep <@!335484868479811584>').then(s => {
s.delete(3000);
});
}
});
client14.on("message", message => {
          if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "rep")) {
message.delete(3000);
    if(message.author.id !== "335484868479811584") return message.reply(' ').then(msg => msg.delete(3000));
message.channel.send('#rep <@!335484868479811584>').then(s => {
s.delete(3000);
});
message.channel.send('->rep <@!335484868479811584>').then(s => {
s.delete(3000);
});
}
});
client15.on("message", message => {
          if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "rep")) {
message.delete(3000);
    if(message.author.id !== "335484868479811584") return message.reply(' ').then(msg => msg.delete(3000));
message.channel.send('#rep <@!335484868479811584>').then(s => {
s.delete(3000);
});
message.channel.send('->rep <@!335484868479811584>').then(s => {
s.delete(3000);
});
}
});
//////////////////////////////////////////////////////////////////////////////////////////////////
client1.login(process.env.BOT1);
client2.login(process.env.BOT2);
client3.login(process.env.BOT3);
client4.login(process.env.BOT4);
client5.login(process.env.BOT5);
client6.login(process.env.BOT6);
client7.login(process.env.BOT7);
client8.login(process.env.BOT8);
client9.login(process.env.BOT9);
client10.login(process.env.BOT10);
client11.login(process.env.BOT11);
client12.login(process.env.BOT12);
client13.login(process.env.BOT13);
client14.login(process.env.BOT14);
client15.login(process.env.BOT15);
"NTI1NjY2MDMxODI2NTAxNzAx.Dv59BA.rsvPa2ZwU6SbfnuTv9UNGTk_f50"
"NTI1NjY3Njk0OTgxMjgzODcx.Dv5-Gg.SDmTwjBmbpRE9WiTVMVYiXvUoO8"
"NTI1NjY4NzU0NDIwNDAwMTMw.Dv5-3w.28Akp72TeGQFIXJgi6MG0bfsDs8"
"NTI1NjcwMzI4MzQ1NTU5MDUw.Dv6Apw.5UUkCbyZh8ZkTNfnXOx765qUcJE"
"NTI1NjY5MDQ1NDIxNDczODQy.Dv6AEA.xB0LoRgzdDEmy5zN7AYG0JG9Ybw"
"NTI1NjcxMjUxMDU0NjkwMzA5.Dv6Baw.F6aUg50yzfx_MsQlMx7zMPOSXVM"
"NDM0NjQ2NTg3NDMyNzYzMzk4.DsCJjA.N1fJDjaBa6L48A2sGaK2hvOnJrM"
"NTA0MzUwODgyNDQ0MzQ1MzQ2.DsB-cg.WxTuCwa9I08UowGzohOk_R4WXrg"
"NTAxODUwNDY4NzIxMzYwODk3.DsE76g.Y1GKz4K4wNFX9aU8dyp-5Tajmqc"
