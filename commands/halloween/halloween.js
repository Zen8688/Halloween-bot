module.exports = {
    name: 'story',
    aliases: ['halloween story', 'scary story', 'halloween scary story', 'spooky story'],
    description: "This sends some halloween plans",
    execute(client, message, args, Discord){
        var stories = ["There was once a man named Edward, who designed and built his own perfect house. **He lived in it for many years until he eventually passed away.** A new family soon moved in, but whenever they went into the basement—where Edward’s personal study had been—they would get the feeling that someone was **watching** them. 🎃 \nOne day, the father of the new family decided to fix up an old jacket, which every tailor in town had told him was beyond repair. So, he went down to the old study, laid his jacket on a chair, and then tried to see if there was anything in the old desk that could help him mend it.\n\n But the drawers were all locked, and he couldn’t find a key anywhere. The next morning, he came back down to find the key on the desk, all of the drawers open, and his jacket completely fixed. \nHere are more haunted house mysteries no one can explain.", "Some people actively go out looking for ghost encounters, and every once in a while, they find one. \nWhen Kevin was a teenager, he and his friends had heard about a dangerous turn on the nearby highway that caused many accidents over the years.\n it was now haunted. The most well-known story was of a mother who took her own life after her son had crashed his car and died there. It was said around town that her ghost remained at the deadly turn to protect people from ending up like her deceased child.\n Kevin and his friends decided to put that theory to the test. At night, Kevin drove his friends out to the highway.\n When the group of boys arrived at the turn, they pulled over. They’d brought a bag of flour with them and proceeded to sprinkle the white powder on the road, the grass, and the car.\n The idea was to get footprints to prove that the ghost was indeed real. The boys hopped back in and began to take the car around the turn. Kevin accelerated faster and faster and—THUMP.\n The car came to an abrupt halt as if someone had slammed down on it with their own two hands. They immediately got out of the car and saw two woman-sized handprints in the white flour on the hood.", "Read More : https://www.rd.com/list/scary-halloween-true-events/"];
        var story = Math.floor(Math.random() * stories.length);
        
        var embed = new Discord.MessageEmbed()
          .setTitle('Spooky Story! 💀')
          .setDescription(String([stories[story]]))
          .setImage(`https://c.tenor.com/F55us2_3mpgAAAAC/pumpkin-halloween.gif`)
          .setColor(`#FF7F7F`)
          .setFooter(`Taken from: https://www.rd.com/list/scary-halloween-true-events/`)
         message.channel.send(embed);
    }
}