module.exports = {
    name: '.kill',
    description: "Killing someone, Sounds Intresting",
    execute(client, message, arg, Discord){
        let victim = message.mentions.users.first() 
        if(!victim) message.reply("Mention someone to Kill. I am **eagerly waiting** to murder someone! 🔪")
        else {
          let kills = ["ate Too much **sugar**", "died by this command L-o-l!", "went into a scary building and never returned..", "striked back, and killed you **:(** \n\n`Get better`", "drowned.", "was trying to jump as high as possible but.... `Some Technical Difficulties..` 😭", "got scared and died from a heart attack.", "got a death note and killed you! 🎃"]
          message.channel.send(`${victim} ${kills[Math.floor(Math.random() * kills.length)]}`)
        }
}
};
