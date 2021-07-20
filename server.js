const elisjs = require("@aloima/elisjs");
const client = elisjs.create(process.env.token, {
  compress: true // default value is false, enables zlib-stream parsing.
});
const fs = require("fs");
const commandFiles = fs
  .readdirSync("./commands")
  .filter(file => file.endsWith(".js"));
const prefix = "!";
client.events.ready = () => {
  console.log("bot aktif");
  client.user.presence.setStatus("dnd");
  client.user.presence.addActivity({
    name: "activity name",
    type: 0
  });
};

client.commands = new elisjs.Collection();

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
  console.log(command.name + " Yuklendi");
}

client.events.messageCreate = async message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/);
  const command = args.shift().toLowerCase();

  if (!client.commands.has(command)) return;

  try {
    client.commands.get(command).execute(message, client, args);
  } catch (error) {
    console.error(error);
    message.channel.send("Hata cikti");
  }
};

client.login();
