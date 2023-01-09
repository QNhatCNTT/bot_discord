const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
module.exports = {
    name:'avatar',
    description:'Show user avatar',
    // type: 'ChatInput',
    options: [
        {
            name:'user',
            description:'user is showed user avatar',
            type: 6,
            required: false,
        }
    ],
    run: async (client, interaction) => {
        const user = interaction.options.getUser('user') || interaction.user
        const avatarURL = user.displayAvatarURL({ format: 'png', size: 4096, dynamic: true });
        const color = getRandomColor()
        const embed = new EmbedBuilder ()
            .setColor(color)
            .setDescription(`Tũn Tũn OniChan nè ${user.tag}`)
            .setImage(avatarURL)
            .setTitle(`Avatar của ${user.tag}`)
            .setTimestamp()
            .setFooter({ text: 'Tũn Tũn OniChan', iconURL: `${avatarURL}` })
            interaction.reply({ embeds: [embed] })
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