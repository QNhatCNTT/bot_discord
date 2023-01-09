// Require the necessary discord.js classes
const { Client, GatewayIntentBits, Collection } = require('discord.js');
require('dotenv').config();

// Create a new client instance
const client = new Client({ intents: [
    GatewayIntentBits.Guilds, 
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.GuildVoiceStates
] });

client.commands = new Collection();
client.aliases = new Collection();
client.categories = new Collection()
client.interactions = new Collection()

const temp = ['command', 'event', 'slashCommand'] ?? []
temp.forEach(handler => require(`../handlers/${handler}`)(client));

// Log in to Discord with your client's token
client.login(process.env.TOKEN);