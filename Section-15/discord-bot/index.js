require("dotenv").config({ quiet: true });
const { Client, GatewayIntentBits } = require("discord.js");



const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("messageCreate", (message) => {
    if(message.author.bot) return;
  message.reply({
    content: "Hello from your bot!" 
  });
});

client.on("interactionCreate", (interaction) => {
  interaction.reply("Pong!!")
})

client.login(process.env.DISCORD_BOT_TOKEN);
