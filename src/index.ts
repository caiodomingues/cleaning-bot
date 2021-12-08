import { Client, Message } from "discord.js";
import config from "./config";

const client = new Client(config.client);
const prefix = config.prefix ?? "!";

client.on("ready", async () => {
  console.log(`Logged in as ${client.user?.tag}!`);
});

client.on("message", async (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift()?.toLowerCase();

  if (command === "ping") {
    message.channel.send(`Pong! ${client.ws.ping}ms`);
  }

  if (command === "clear") {
    const fetched = await message.channel.messages.fetch({ limit: 100 });
    fetched.forEach((msg) => {
      deleteMessage(msg, config.channel, config.user);
    });
    console.log(
      `Finished calling deletion of messages. This may take a while to complete, please wait.`
    );
  }
});

client.login(config.bot.token);

function deleteMessage(msg: Message, channel?: string, user?: string) {
  if (channel && msg.channel.id !== channel) return;
  if (user && msg.author.id !== user) return;

  if (
    msg.content.substring(0, 2) === "//" ||
    msg.author.id === user ||
    msg.content === `${prefix}clear`
  ) {
    msg.delete();
  }
}
