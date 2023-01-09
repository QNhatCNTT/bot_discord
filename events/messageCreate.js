module.exports = (client, message) => {
    if(message.author.bot) return
    const prefix = '?'
    if(!message.content.startsWith(prefix)) return
    if(message.channel.type !== 0) return
    const args = message.content.slice(prefix.length).trim().split(' ')
    const cmd = args.shift().toLocaleLowerCase();
    const command = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd))
    if(command) command.run(client, message, args)
}