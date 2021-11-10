const fs = require(`fs`);

module.exports = (client, Discord) =>{
  const load_dir = (dir) =>{
    const commands = fs.readdirSync(`./commands/${dir}`).filter(file => file.endsWith('.js'));

    for(const file of commands){
    const command = require(`../commands/${dir}/${file}`);
    if(command.name) {
      client.commands.set(command.name, command);
    } else {
      continue;
}
}
}

['bot', 'halloween', 'fun'].forEach(e => load_dir(e));

}