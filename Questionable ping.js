const client = new commando.Client();

class bping extends commando.Command{
    constructor(client) {
        super(client,{
            name:ping,

        });
    }

async run(message){
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'b!ping') {
    msg.reply('Pong!');
  }
});

client.login('NDQ1Mjc3MTIyMjUzMDI5Mzg2.Ddo5Ug.I8tHsj-fZS1dMI-JAPRN1wTeyEo');
 }
}
module.exports = ping;
