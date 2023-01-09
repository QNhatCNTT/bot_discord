module.exports = (client) => {
    console.log(`Ready! Logged in as ${client.user.tag}`);
    client.user.setPresence({ activities: [{ name: `Tũn Tũn oni Chan`}], status: 'online' });
    client.guilds.cache.forEach((guild)=>{
        const role = guild.roles.cache.get('1049492618687565875')
        if(role){
            setInterval(()=> {
                const randomColor = getRandomColor();
                role.setColor(randomColor)
                .then(()=>console.log("change color"))
                .catch(err=>console.log(`[ Error ] An error occurred during the role change ${err}.`))
            },20000)
        }
    })
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}