

const commando = require('discord.js-commando')
const bot = new commando.Client({
    commandPrefix: 'b!',
    owner: '162644528656941056',    
});

bot.registry
    .registerDefaultTypes()
    .registerGroups([
        ['exciting', 'Exciting'],
        
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

bot.on("guildMemberAdd", function(member) {
    member.guild.channels.find("name", "general").sendMessage(member.toString() + "Ooooi! Who's the new Pixie?");

    member.addRole(member.guild.roles.find("name", "New Arrival"));
});

bot.login();
