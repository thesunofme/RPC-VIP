///////////////////////////
// Sahil Khan and Aayu5h
// discord.gg/YttTcsttGw/
// https://s4h1l.ml/youtube/
// https://spicydevs.me/
///////////////////////////

const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: true,
  checkUpdate: true
});

const keepAlive = require('./server.js')
keepAlive()

client.on('ready', async () => {


    console.clear();

    console.log(`${client.user.tag} - rich presence started!`
               )
const r = new Discord.RichPresence()
    .setApplicationId('1076934775404757002')
    .setType('PLAYING')
    .setURL('https://www.youtube.com/watch?v=4UAGmtDEPSc')
    .setState('ㅤㅤㅤ🌸◕ ‿ ◕🌸ㅤhi!')

    .setName('💸better than yesterday💰')
    .setDetails('"𝘐 𝘸𝘰𝘯ʹ𝘵 𝘣𝘪𝘵𝘦 𝘪𝘧 𝘺𝘰𝘶ʹ𝘳𝘦 𝘯𝘪𝘤𝘦 𝘵𝘰 𝘮𝘦"')
    .setParty({
        max: 9999,
        current: 6789,
        id: Discord.getUUID(),
    })*/

    .setStartTimestamp(Date.now())
    .setAssetsLargeImage('https://media0.giphy.com/media/lhQNkbnFxFDYGN7Hb4/giphy.gif')
    .setAssetsLargeText('_reelDuckZ')
    .setAssetsSmallImage('https://media4.giphy.com/media/GPvEcaJt7XVucUr2OR/giphy_s.gif')
    .setAssetsSmallText('Verify User')
    .addButton('Nghe nhạc ko ?', 'https://www.youtube.com/watch?v=ybaISsqERqg')
    .addButton('Discord Server', 'https://discord.gg/9ad8a4YM4nz')
     client.user.setActivity(r);
     client.user.setPresence({ status: "dnd" });
})

client.login(process.env.TOKEN)


///////////////////////////
// Sahil Khan and Aayu5
// discord.gg/YttTcsttGw/
// https://s4h1l.ml/youtube/
// https://spicydevs.me/
///////////////////////////