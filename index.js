const Discord=require('discord.js');
const bot = new Discord.Client();
const token='NjA1Njg2MjYxOTMxNDQyMTk2.XUE7rA.tiPsKTImPMXAwwplaBCzpWdGHdk';
const Prefix='!';

bot.on('ready', () =>{
    console.log("this bot is ready");
})
bot.on('message',message=>{
    let args = message.content.substring(Prefix.length).split(" ");
    switch(args[0]){
        case 'embed':
         const embed =new Discord.RichEmbed()
         .setTitle('User Information')
        .addField('Player Name',message.author.username)
        .addField('Version ','1.0.1')
        .addField('Current Server', message.guild.name)
        .setColor(0xFFFF00)
        .setThumbnail(message.author.avatarURL)
        .setTimestamp()
        message.channel.sendEmbed(embed);
        break;

    }
    
})

bot.login(token);
