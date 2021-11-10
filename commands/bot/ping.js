module.exports = {
    name: '.ping',
    cooldowns: 5,
    description: "This tells you about the bot's current ping!",
    async execute(client, message, args, Discord){
        let embed = new Discord.MessageEmbed()
        .setTitle(`👻💀🔪`)
        .setDescription(`**${Date.now() - message.createdTimestamp}** ms`)
        .setColor(`#FF7F7F`)
        const id = message.id
        const msg = await message.channel.send(`DIE! HAHA! 🔪`).then(message.fetch(id)).then(msg => msg.delete())
        message.channel.send(embed);
    }
}