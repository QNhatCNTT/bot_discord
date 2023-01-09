// module.exports ={
//     name: 'speak',
//     discription:'Tũn Tũn nói gì đi nè.',
//     type: 1,
//     options: [
//         {
//             name:'text',
//             description:'Vui lòng nhập text muốn nói cho Tũn Tũn.',
//             type: 3,
//             required: true,
//         }
//     ],
//     run : async (client, interaction, args) => {
//         if(!args[0]) return interaction.reply('Vui lofng nhập gì đó cho Tũn Tũn!')
//         c
//         const text = interaction.options.getString('text')
//         interaction.reply({content: 'Tũn Tũn đang nghe nè.', ephemeral: true})
//         interaction.channel.send(text)
//     }
// }