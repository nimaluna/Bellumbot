const commando = require('discord.js-commando')
const bot = new commando.Client({
    commandPrefix: 'b!',
    owner: '162644528656941056',    
});

bot.registry.registerGroup('random' , 'Random');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.on('ready', () => {
    bot.user.setActivity('b!help');
});


bot.login('token);
