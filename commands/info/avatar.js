const { EmbedBuilder  } = require('discord.js');

module.exports = {
    name: 'avatar', 
    category: 'fun',
    aliases: ['avt'],
    run: (client, message, args) => {
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
        const avatarURL = member.displayAvatarURL({ format: 'png', size: 4096, dynamic: true });
        const color = getRandomColor()
        const embed = new EmbedBuilder ()
            .setColor(color)
            .setDescription(`Tũn Tũn OniChan nè ${member.displayName}`)
            .setImage(avatarURL)
            .setTitle(`Avatar của ${member.displayName}`)
            .setTimestamp()
            .setFooter({ text: 'Tũn Tũn OniChan', iconURL: `${avatarURL}` })
        message.channel.send({ embeds: [embed] })
    }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}