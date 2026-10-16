import "dotenv/config";
import { Client, GatewayIntentBits, Partials, Message } from "discord.js";
import { allCommands } from "./index";

const token = process.env.BOT_TOKEN;
if (!token) {
  console.error("Missing BOT_TOKEN in environment. Copy .env.example to .env and set BOT_TOKEN.");
  process.exit(1);
}

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMembers],
  partials: [Partials.Channel]
});

client.once("ready", () => {
  console.log(`Logged in as ${client.user?.tag}`);
});

client.on("messageCreate", async (message: Message) => {
  if (message.author.bot) return;
  const content = message.content;
  for (const cmd of allCommands) {
    const prefixes = cmd.prefixes ?? ["!"];
    for (const prefix of prefixes) {
      if (prefix === "") {
        // prefixless: command name must be the first token
        if (!content.toLowerCase().startsWith(cmd.name.toLowerCase())) continue;
        const args = content.slice(cmd.name.length).trim().split(/\s+/).filter(Boolean);
        try { await cmd.runMessage?.(message, args); } catch (err) { console.error(err); }
        return;
      }
      if (!content.startsWith(prefix)) continue;
      const rest = content.slice(prefix.length).trim();
      const parts = rest.split(/\s+/).filter(Boolean);
      const invoked = parts.shift()?.toLowerCase();
      if (invoked !== cmd.name.toLowerCase()) continue;
      try { await cmd.runMessage?.(message, parts); } catch (err) { console.error(err); }
      return;
    }
  }
});

client.login(token).catch(err => {
  console.error("Failed to login:", err);
  process.exit(1);
});
