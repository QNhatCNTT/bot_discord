module.exports = {
    name: 'rainbow',
    category: 'fun',
    aliases : ['rainbow', 'r'],
    run : (client, message, args) => {
        setInterval(()=> {
            const role = message.guild.roles.cache.get('1049492618687565875')
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            role.setColor(randomColor)
            .then(()=>console.log("change color"))
            .catch(err=>console.log(`[ Error ] An error occurred during the role change ${err}.`))
        },20000)
    }
}