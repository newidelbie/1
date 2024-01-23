

require('./host.js');



const discord = require('discord.js');
const { Intents, Client, MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
      Intents.FLAGS.GUILD_MESSAGES,
      Intents.FLAGS.GUILD_MEMBERS,
      Intents.FLAGS.DIRECT_MESSAGES,
  ],
});




/*client.on('messageCreate', async (message) => {
  const lk1 = 'http'
  if (message.content.includes(lk1)) {
    if (message.member.roles.cache.has('1175704352984412251')) {
      return;
    } else {
      if (message.content.includes(`"${lk1}"`)) {
        return;
      } 
      if (!message.author.bot) {
      const channel = client.channels.cache.get('1175703618964422736');
      channel.send(`The message: "${message.content}" by ${message.author} was deleted.`);
      message.delete();
      } else if (message.author.bot) {
        return;
      }
    }
  } 
  /*
  const lk12 = 'www'
  if (message.content.includes(lk12)) {
    if (message.member.roles.cache.has('1175704352984412251')) {
      return;
    }
      if (message.content.includes(`"${lk12}"`)) {
        return;
      } 
      if (!message.author.bot) {
      const channel = client.channels.cache.get('1175703618964422736');
      channel.send(`The message: "${message.content}" by ${message.author} was deleted.`);
      message.delete();
      } else if (message.author.bot) {
        return;
      }
    }
  }
  const lk12bw = 'fuck'
  if (message.content.includes(lk1)) {
    if (message.member.roles.cache.has('1175704352984412251')) {
      return;
    } else {
      if (message.content.includes(`"${lk12bw}"`)) {
        return;
      } 
      if (!message.author.bot) {
      const channel = client.channels.cache.get('1175703618964422736');
      channel.send(`The message: "${message.content}" by ${message.author} was deleted.`);
      message.delete();
      } else if (message.author.bot) {
        return;
      }
    }
  }
  */
/*});*/

client.on('guildMemberAdd', (member) => {
  const guild = member.guild;
  const memberCount = guild.memberCount;

  if (memberCount === 250) {
//1>251
    const channel = guild.channels.cache.get('1159035950224121926'); // Replace with your channel ID
    channel.send('Congratulations! The server has reached 250 members! ');
  }
});


client.on('messageCreate', async (message) => {

  if (message.content.includes('<@1155044976506454066>')) {

    if(message.member.roles.cache.has('1187784799386079252')) {
      return
    } else if(!message.member.roles.cache.has('1187784799386079252')) {
    message.delete();
    message.channel.send('The owner was pinged by <@' + message.author.id + '>')

  }
  }
  if (message.content === '?help') {
    const embed = new MessageEmbed()
    .setDescription('?help - Shows this message\ne!help - Economy Commands Help Menu\n?kick - Kick a member\n?ban - Ban a member\n?unban - Unban a member\n?mute - Mute a member\n?nmute - Unmutes a member\n?poll - Make a poll\n?purge - Purge messages\n?warn - Warn a member\n?warnings - Shows warnings of a member\n?unwarn - Clears a warning of a member\n?lock - Locks a channel\n?unlock - Unlocks a channel\n?slowmode - Sets slowmode\n?roleadd - ?roleremove - Add/Remove a role to/from a member\n?8ball\n?randomcolor\n?randomnumber\n?ship\n?avatar\n?servericon - The icon of the server\n?meme - Gives you a meme\n?troll - Troll\n?afk - Sets your AFK\n?membercount - Shows the membercount of the server\n?thx - Thx someone\n?mythx - Thx of someone or you\n?roleinfo - Information about a role\n?serverinfo - Information about the server\n?userinfo - Information about a user\n?server\n?userid - Gives user id\n?weather - Look at a weather of a choosen country\n?achivement - Makes a minecraft achivement\n?start - Starts a giveaway\n?reroll - Rerolls a giveaway\n?end - Ends a giveaway\n?dm - Direct Messages a user\n?nickname - Change a nickname of a member\n?calculate\n?block - Block a user from using tickets - ?unblock - Unblocks a user from using tickets\n?announce - Announces a message\nk!akinator - Play akinator)\nb!help - Musical Commands Help Menu (On maintenance)\nip - Get server ip')

    message.channel.send({embeds:[embed]})
  }
});

client.on('guildMemberAdd', async (member, guild) => {
  const channel = client.channels.cache.get('1159084691169759294');
  const channel2 = client.channels.cache.get('1178257334603108416');
  channel2.send(`Verify ${member}`).then(m => m.delete(360000))
  const channel23 = client.channels.cache.get('1182933933164347412');
  channel23.send('Hi <@' + member + '> make sure to verify at <#1178257334603108416> to get access to the server and before the begin and then read rules at <#1174814327639912558> and type ip for ip')
  
  channel.send(`Hi ${member} Enjoy Your stay in MegaMC`);

  let role1 = member.guild.roles.cache.find(role => role.id === "1159023565702709268");
  let role2 = member.guild.roles.cache.find(role => role.id === "1159091104801619988");
  member.roles.add(role1).then(member.roles.add(role2));
});


client.on('guildMemberRemove', async (member, guild) => {
  const channel = client.channels.cache.get('1159084756244377600');
  channel.send(`${member} Does not want a stay here`);
});

client.on('messageCreate', async (message) => {
  if (message.content === '?verify') {
    const embed = new MessageEmbed()
      .setTitle('Verification')
      .setDescription('To enter this server and see all channels, you must first prove that you are human.\nClick on the button below to start')
      .setColor('GREEN');
    const row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId('verify')
          .setLabel('Verify')
          .setStyle('SUCCESS')
      );
    let c2 = client.channels.cache.get('1178257334603108416');
    c2.send({ embeds: [embed], components: [row] });
  }
}); 
client.on('interactionCreate', async (interaction) => {
  if (!interaction.isButton()) return;
  if (interaction.customId === 'verify') {
    const role = interaction.guild.roles.cache.get('1178002915714146465');
    const member = interaction.member;
    if (member.roles.cache.has(role.id)) return interaction.reply({content:'You are already verified', ephemeral: true});
    interaction.reply({content:'You are verified', ephemeral: true})
    member.roles.add(role);
  }
});

client.on('message', async (message) => {
  if(message.content === 'ip') {
    message.channel.send(`Java IP » MegaMC.Zanity.Net\n\nBedrock IP » MegaMC.Zanity.Net\nPort » 25565\n\nPE IP » MegaMC.Zanity.Net\nPort » 25565 
`);
  }
});

client.login(process.env.token);
