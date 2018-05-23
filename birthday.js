const commando = require("discord.js-commando");

class BirthdayCommand extends commando.Command{
    constructor(client) {
        super(client, {
            name:'birthday',
            group:'exciting',
            memberName:'birthday',
            description:'Have Bellum say happy birthday for you or a friend!',
            
        });
    }

    async run(message){
    
    if (message.author.id == 162644528656941056){
        answer = [
            "Aww happy birthday Lu~! Always happy to see you!",
                "Did Fratie give you a present yet? He always was bad with present picking...",
                "Luuna! Teehee! You're getting older! Frater better hurry up and confe-- I mean, see you!",
                "Lu! Luuuuna! I'm sure Fratie's got a present for you~!",
            
            ];
            
        
           var answer = (answer[Math.floor(Math.random() * answer.length)]);
            var result = {
                "embed": {
                "title": ":birthday: | Happy Birthday!",
                "description": answer + "",
                "color": 14493755,
            }
        };     return message.channel.send(result);
    
            
    
        }

    }

}

module.exports = BirthdayCommand;
