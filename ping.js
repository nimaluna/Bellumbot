const commando = require('discord.js-commando');

class BellumPingCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'ping',
            group: 'random',
            memberName: 'ping',
            description: 'Checks the bot\'s ping to the Discord server.',
            throttling: {
                usages: 5,
                duration: 10
            }
        });
    }

    async run(msg) {
        var phrases = [
            "Whoa! What's this?",
            "Hey hey, slow down!!",
            "YIKES! That was too close!",
            "Im'm gonna one up you!",
            "Just in time...",
            "***Wheeze***?"
        ]
        var wphrase = phrases[Math.floor(Math.random() * phrases.length)];

        if(!msg.editable) {
            const pingMsg = await msg.say('Pinging...');
            return pingMsg.edit(
                wphrase + ` \n:ping_pong: | Pong! The message round-trip took` + `**` + ` ${pingMsg.createdTimestamp - msg.createdTimestamp}ms.` + `**
            `);
        } else {
            await msg.edit('Pinging...');
            return msg.edit(
            wphrase + ` \n:ping_pong: | Pong! The message round-trip took` + `**` + `${msg.editedTimestamp - msg.createdTimestamp}ms`+ `**
            `);
        }
    }
};
module.exports = BellumPingCommand;
