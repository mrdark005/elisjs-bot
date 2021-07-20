module.exports = {
  name:"ping",
  description: 'Ping!',
  execute:async (message, client, args) => {
    message.channel.send("Pong.")
  }
}
