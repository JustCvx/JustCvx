const mineflayer = require('mineflayer')
const Discord = require('discord.js')
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});
let prefix = '.'

var options = {
    host: 'hypixel.net',
    username: '',
    password: '',
    colorsEnabled: false,
}
var bot = mineflayer.createBot(options);

bindEvents(bot);

function bindEvents(bot) {

    bot.on('error', function(err) {
        console.log('Error attempting to reconnect: ' + err.errno + '.');
        if (err.code == undefined) {
            console.log('Invalid credentials OR bot needs to wait because it relogged too quickly.');
            console.log('Will retry to connect in 30 seconds. ');
            setTimeout(relog, 30000);
        }
    });

    bot.on('end', function() {
        console.log("Bot has ended");
        // If set less than 30s you will get an invalid credentials error, which we handle above.
        setTimeout(relog, 30000);  
    });
}

function relog() {
    console.log("Attempting to reconnect...");
    bot = mineflayer.createBot(options);
    bindEvents(bot);
}

console.log('Bot is connected!')

bot.on('message',async function(message) {
    
  const text = `` + message
  if(text.includes(`test`)){
    bot.chat(`/msg MX1D pong`)
    client.on("message", message =>{
    if(text.includes(`Party > [MVP++] MX1D: ping`)){
    client.channels.cache.get('850843468938870824').send('Hello here!');
    }})
  }

  console.log(text)
  if(!text.includes(`has invited you to join their party!
You have 60 seconds to accept. Click here to join`)) return
    console.log('go invite')
  text.replace(/-----------------------------\n-----------------------------\n/g, '')
  const argsparty = text.trim().split(`has invited you to join their party!
  You have 60 seconds to accept. Click here to join!`);
  //console.log(argsparty[0].trim().split(' '))
  const args = argsparty[0].trim().split(' ')[1] || argsparty[0].trim().split(' ')[0]
  console.log(`parter from ${args}`)
   // console.log(args)
   
   const axios = require('axios')
  
  // Make a request for a user with a given ID
  axios.get(`https://api.mojang.com/users/profiles/minecraft/${args}`)
    .then(async function (response) {
    console.log('trying to get uuid');
        
     // console.log(response.data.id);
  if(response.data.id === "bb63f56c71794495a41eeac7597f1640") {
     await bot.chat(`/p accept ${args}`)

      lastinvite.set(2, Date.now())
     setTimeout(async () => {
       
      await bot.chat(`/p leave`)
       if(dqqs) {
}
}, 5 * 1000);
return

}
    axios.get(`https://api.hypixel.net/findGuild?key=62624353-7b03-4558-9202-45840d56d498&byUuid=${response.data.id}`,).then(async (responses) => { 
     console.log('trying to fetch guild')
      
    if(responses.data.guild !== "60056ef28ea8c9e004b030f7" && responses.data.guild !== null) return
      await bot.chat(`/p accept ${args}`)
        const webhookClient = new Discord.WebhookClient('863524595977945108', 'O4OiDWPwalmka5YsNZVhUNHvZRGrrRH1HgmZBQ7q522n_lwY8b6oiPo888oyQgaPdelY');
        const embed = new Discord.MessageEmbed().setThumbnail(`https://crafatar.com/avatars/${response.data.id}?size=512`).setTitle(`${bot.username} Log`).setDescription(`${args} just partied ${bot.username}`).setFooter('fragbot', `https://crafthead.net/avatar/${response.data.id}`)
   
       await     webhookClient.send('New invite' ,{
          username: `${args}`,
          avatarURL: `https://crafthead.net/avatar/${response.data.id}`,
          embeds: [embed],
        }).catch((err) => console.log(err))
       if(dqqs) {
cooldown.delete(1);
}
      
     }, 5 * 1000);
    })
} )

  //dm part
client.on('message',async function(message) {
    const text = `` + message
        if(text.includes(`Restart`)){
    client.users.get("453557793668988930").send("restart")
    
}
})

bot.on("message", message =>{
  const text = `` + message
  let channel = client.channels.cache.get("863589754548518912")
  if(text.includes('restart')){
    channel.send('<@453557793668988930> <@352848366087962624> Server is restarting on <@352848366087962624> island')
    setTimeout(async () =>{
      channel.send("Don't worry bot visting back after 1 min so the restart is over! :D")
    }, 3000)
  }
})

bot.once("message", message =>{
  const text = `` + message
  if(text.includes("restart")){
    setTimeout(async () =>{
      bot.chat("/hub")
    }, 5000)

    setTimeout(async () => {
      bot.chat("/visit cvx_")
    }, 65000)
    }
  })

  client.once('ready', () => {
    console.log('the bot is on')
});

bot.on("message", message =>{
  const text = `` + message
  if(text.includes("Click here to view them!")){
    setTimeout(async () =>{
      bot.chat("/play sb")
    }, 7000)
  
  setTimeout(async () => {
    bot.chat("/visit cvx_")
  }, 13000)
}
})

bot.on("message", message =>{
  const text = `` + message
  if(text.includes("Friend")){
    bot.chat("/f cvx_")
  }
})
  
  bot.on('windowOpen', (window) => {
    const mouseButton = 0 // 0: left click, 1: right click
    const mode = 0 // 0: single click
    bot.clickWindow(13, 0, 0)
  })

  bot.on('message', message =>{
    const text = `` + message
    if(text.includes("Join Guild")){
      bot.chat("/g join Lost in Dungeons")
    }
  })

  bot.on("message", message =>{
    const text = `` + message
    let channel = client.channels.cache.get("865368397268254740")
    if(!text.includes("100/100❤     100/100✎ Mana")){
    channel.send(`${text}`)
    }
  })

  client.login('ODU1ODQ3MjU2ODU4Njg5NTM2.YM4b3g.YFEGFeW8BHrqRLli7y6NVKD91jc')