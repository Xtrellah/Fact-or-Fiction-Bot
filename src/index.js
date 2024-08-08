require('dotenv').config()
const { Client, IntentsBitField } = require('discord.js')

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
})


client.on('ready', (c) => {
    console.log(`${c.user.tag} is up and running`)
})

client.on('messageCreate', (message) => {
    if (message.content === 'fof') {
        message.reply('Use slash commands to play')
    }
})


client.login(process.env.TOKEN);



