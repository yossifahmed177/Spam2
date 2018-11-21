const Discord = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();

client.on('ready', () => {
   console.log(`----------------`);
   console.log(`Credit Farmm - Script By : YossiF `);
   console.log(`----------------`);
   console.log(`Loadinng`);
   console.log(`Loadinng.`);
   console.log(`Loadinng..`);
   console.log(`Loadinng...`);
   console.log(`This Bots Online ' `);
   console.log(`----------------`);
});


client.on('message', message => {
    if(message.content === '1'){
        message.channel.send('#daily')
    }
});

client.on('message', message => {
    if(message.content === '2'){
        message.channel.send('#credits')
    }
});

client.on('message', message => {
    if(message.content === '3'){
        message.channel.send('#rep <@408396389291393025>')
    }
});





client.on('message', message => { 
if (message.content === 'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**Credit Spam , Frame , Credit  , Farm Credit , ez Farm - سبام اوف ءف اح اح نار ج **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});



client2.on('message', message => {
    if(message.content === '1'){
        message.channel.send('#daily')
    }
});

client2.on('message', message => {
    if(message.content === '2'){
        message.channel.send('#credits')
    }
});

client2.on('message', message => {
    if(message.content === '3'){
        message.channel.send('#rep <@408396389291393025>')
    }
});





client2.on('message', message => { 
if (message.content === 'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**Credit Spam , Frame , Credit  , Farm Credit , ez Farm - سبام اوف ءف اح اح نار ج **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});







client.login(process.env.TOKEN);
client2.login(process.env.TOKEN2);
