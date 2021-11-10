module.exports = {
    name: '.name',
    description: "NAMMMMMMMMMMMMMME",
    async execute(client, message, args, Discord){
        let names = ["Kool Dude", "Scary Monster", "Not A Dumb", "Moonster", "Rendom Guy", "**No nicknames available for you. 🔪**", "Cutie", "Scary Guy", "PokeMaster", "ooof!", "**No nicknames available for you. 🔪**", "**No nicknames available for you. 🔪**", "Stop **spamming**, I won't give you better nicknames"]
        message.reply(`Your new nickname is ${names[Math.floor(Math.random() * names.length)]}`)
}
};
