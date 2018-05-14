
const commando = require('discord.js-commando')
const bot = new commando.Client({
    commandPrefix: 'b!',
    owner: '162644528656941056',    
});

bot.registry
    .registerDefaultTypes()
    .registerGroups([
        ['exciting', 'Exciting'],
        ['conversation', 'Conversation'],
        ['bellumutilities', 'Bellum Utilities'],
            
    ])
    .registerDefaultGroups()
    .registerDefaultCommands({
        ping: false
    })
    .registerCommandsIn(__dirname + "/commands");

bot.on('ready', () => {
    bot.user.setActivity('b!help');
});


bot.login('NDQ1Mjc3MTIyMjUzMDI5Mzg2.Ddo5Ug.I8tHsj-fZS1dMI-JAPRN1wTeyEo');