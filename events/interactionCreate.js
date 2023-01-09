module.exports = (client, interaction) => {
    if(!interaction.isCommand()) return
    const command = client.interactions.get(interaction.commandName)
    if(!command) interaction.reply('Error')
    command.run(client, interaction)
}