module.exports = {
    name: 'something spooky',
    aliases: ['ss', 'halloween', 'halloween special', 'scare me'],
    description: "This just sends some random halloween images!",
    execute(client, message, args, Discord){
        var images = ["https://i.pinimg.com/originals/3e/b2/a8/3eb2a8e1eec5a15c7d6669fd346ba508.gif", "https://s1.r29static.com/bin/entry/db2/960xbm,70/1676416/image.jpg", "https://www.techgrapple.com/wp-content/uploads/2016/10/Halloween-GIFs.gif", "https://cdn.dribbble.com/users/559/screenshots/3852797/frankestien_pre2.gif", "https://c.tenor.com/ql1VCIekTRIAAAAC/skeleton-happy.gif", "https://c.tenor.com/pqh1ti_wo68AAAAM/scary-halloween.gif"];
        var image = Math.floor(Math.random() * images.length);
        
        let embed = new Discord.MessageEmbed()
          .setTitle('Bhoo! 👻')
          .setImage(String([images[image]]))
          .setColor(`#FF7F7F`)
         message.channel.send(embed);
    }
}