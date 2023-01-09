const { getAudioUrl } = require('google-tts-api')
const { joinVoiceChannel,VoiceConnectionStatus, createAudioPlayer, AudioPlayerStatus, getVoiceConnection, createAudioResource, NoSubscriberBehavior, StreamType } = require('@discordjs/voice');
const prism = require('prism-media');
module.exports = {
    name: 'speak',
    aliases: ['speak', 's'],
    category: 'speak',
    run: async (client, message, args) => {
        if(!args[0]) return message.channel.send('Vui lòng nhập gì đó cho Tũn Tũn đi nào!')
        const string = args.join(' ')
        if(string.length > 200) return message.channel.send('Tũn Tũn chỉ cho nhập tối đa 200 ký tự, hay ra zẻ quá đi!')
        const voiceChannel = message.member.voice.channel
        if(!voiceChannel) return message.reply('Bạn phải vào room voice để sử dụng lệnh này!')
        const audioURL = getAudioUrl(string,{
            lang:'vi',
            slow: false,
            host:'https://translate.google.com',

        })
        console.log("audioURL===",audioURL)
        try {
            joinVoiceChannel({
                channelId: voiceChannel.id,
                guildId: message.guild.id,
                adapterCreator: message.guild.voiceAdapterCreator
            })
            const player = createAudioPlayer();
            player.play(createAudioResource(audioURL))
            
        } catch (error) {
            message.channel.send('Bot lỗi, vui lòng thử lại sau')
            console.log(error)
        }
    }
}