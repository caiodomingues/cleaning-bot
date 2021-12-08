import { ClientOptions, Intents } from "discord.js";

export default {
  prefix: process.env.COMMAND_PREFIX,
  channel: process.env.SPECIFIC_CHANNEL,
  user: process.env.SPECIFIC_USER,
  bot: {
    token: process.env.DISCORD_TOKEN,
  },
  client: {
    ws: {
      intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
      ],
    },
  } as ClientOptions,
};
