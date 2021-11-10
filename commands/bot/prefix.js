module.exports = {
    name: '.prefix',
    cooldowns: 30,
    description: "PREFIX?",
    execute(client, message, args, Discord){
        message.channel.send(`THIS BOT HAS no prefix currently!\n BUT for commands like ping,about and this msg itself, I use '.'`);
    }
}