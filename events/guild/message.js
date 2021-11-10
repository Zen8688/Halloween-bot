module.exports = async (Discord, client, message) => {

const arg = message.content.split(" ")

const args = message.content.slice().split(arg[3]);

const cmd = args.shift().toLowerCase();
    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));
    
 
  if(command) command.execute(client, message, args, Discord);
    
};