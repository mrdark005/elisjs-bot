module.exports = {
  name: "invite",
  description: "add a bot.",
  execute: async (message, client, args) => {
    var msg = "Merhaba, ben elisjs ile yapılmış ilk botum. \n\n [beni ekle](https://discord.com/oauth2/authorize?client_id=867386136145428531&scope=bot&permissions=0) \n [GITHUB](https://github.com/mrdark005/elisjs-bot) [GLITCH](https://glitch.com/edit/#!/elisjs)";
   console.log(message.channel)
    message.channel.send({
      embeds: [
        {
          title: "ElisJS - Invite",
          description: msg,
        }
      ]
    });
  }
};
