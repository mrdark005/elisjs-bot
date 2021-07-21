module.exports = {
  name: "help",
  description: "Command List.",
  execute: async (message, client, args) => {
    var commandList = "";
    client.commands.forEach(e => {
      commandList += `!${e.name} > ${e.description} \n\n`;
    });
    message.channel.send({
      embeds: [
        {
          title: "ElisJS - Command List",
          description: commandList,
        }
      ]
    });
  }
};
