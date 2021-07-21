const superagent = require("superagent");

module.exports = {
  name: "nsfw",
  description: "Ping!",
  execute: async (message, client, args) => {
    if (!args[0])
      return (
        message.channel.send("There is no category named **" + args[0]) + "**"
      );
    if (
      args[0] !== "4k" &&
      args[0] !== "anal" &&
      args[0] !== "thigh" &&
      args[0] !== "holo" &&
      args[0] !== "ass" &&
      args[0] !== "hentai"
    )
      return message.channel.send(
        "please specify a category available categories; 4k, anal, thigh, holo, ass, hentai "
      );
    if (message.channel.nsfw) {
      superagent
        .get("https://nekobot.xyz/api/image")
        .query({ type: args[0] })
        .end((err, response) => {
          message.channel.send({
            embeds: [
              {
                title: args[0],
                image: {
                  url: response.body.message
                }
              }
            ]
          });
        });
    } else
      message.channel.send("this channel is not available for this command");
  }
};
