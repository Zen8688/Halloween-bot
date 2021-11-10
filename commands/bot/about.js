module.exports = {
    name: '.about',
    cooldowns: 8,
    description: "This tells you about the bot and its author!",
    execute(client, message, args, Discord){
        let embed = new Discord.MessageEmbed()
        .setTitle(`About`)
        .setDescription(`MY AUTHOR WAS KILLED BY A DRACULA 5 YRS AGO!\n I AM LEARNING JS MYSELF.\n HIS NAME WAS Zén#8688 BTW. 😥`)
        .setColor(`#FF7F7F`)
        .setImage(`https://everydaypower.com/wp-content/uploads/2021/06/50-Dracula-Quotes-From-Several-Adaptations-of-the-Legendary-Vampire-1000x600.jpg`)
        .setFooter(`lol`)
        message.channel.send(embed);
    }
}