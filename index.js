const { Client, GatewayIntentBits, Events, SlashCommandBuilder } = require("discord.js");
const search = require("./commands/search");
require('dotenv').config()


const default_prefix = "!";

const client = new Client({ intents: [
    GatewayIntentBits.MessageContent, 
    GatewayIntentBits.Guilds, 
    GatewayIntentBits.GuildMembers, 
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildMessages
] })

const token = process.env.BOT_TOKEN;

client.once(Events.ClientReady, (client) => {
    console.log(`Bot Logged on: ${client.user.tag}`)
})


client.on('messageCreate', (message) => {
    if(!message.content.startsWith(default_prefix) || message.author.bot) return;
    const args = message.content.slice(default_prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();
    const channel = message.channel;
    switch (command) {
        case 'random':
            search(channel, args, command, client)
            break;
    
        default:
            message.reply("Lệnh này không hợp lệ, vui lòng thử lại")
            break;
    }
})




client.login(token)