const commando = require('discord.js-commando');

class FratieCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'fratie',
            group: 'random',
            memberName: 'fratie',
            description: 'Frater hates being called Fratie. See what happens!',

        });
    }
    async run(message, args) {
        var choices = [
            "Did you know Frater hates being called *Fratie*? Try it out!",
            "Fraaaatieeee~!",
            "Little brother! I'm over here! Fratieeeee!",
            "Teheee! I see you got your usual grouchy face, Fratie.",
            "Did you get to see Luna, Fratie? I'm sure you froze.",
        ];
        var answer = choices[Math.floor(Math.random() * choices.length)];
        var result = {
            "embed": {
                "title": ":star: | Bellum's words!",
                "description": answer + "",
                "color": 14493755,
            }
        }
        return message.say(result);
    }
}
   
module.exports = FratieCommand;
