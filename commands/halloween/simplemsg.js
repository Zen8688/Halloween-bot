module.exports = {
    name: 'hi',
    aliases: ['hello', 'yo', 'wassup', 'whatsup', 'hii'],
    description: "This just sends some random dialouges",
    execute(client, message, args, Discord){
        let reply = ["Hello! Spooooky user!", "Yo! I see a g..gh.. ghost behind you!", "HALLOWEEN! MATE!", "woo! helo!", "HAHAHAHA! I SEE YOU!"]
        message.channel.send(`${reply[Math.floor(Math.random() * reply.length)]}`);
    }
}