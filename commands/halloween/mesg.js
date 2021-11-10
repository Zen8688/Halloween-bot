module.exports = {
    name: 'fine',
    aliases: ["i'm fine", "im fine", "good", "im good", "i'm good", "im not good", "im not fine", "i'm not good", "i'm not fine", "bad"],
    description: "This tells you about the bot and its author!",
    async execute(client, message, args, Discord){
        await message.channel.send(`Looks like someone is not afraid of GhOsTs!`)
        message.channel.send({
            files: [{
            attachment: "https://c.tenor.com/CWgfFh7ozHkAAAAC/rick-astly-rick-rolled.gif",
            name: "SPOILER_FILE.gif"
         }]});
    }
}