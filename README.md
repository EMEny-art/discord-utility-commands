# Discord Utility Commands

Repository with a collection of utility command definitions for a Discord.js v14 bot in TypeScript.

Setup

1. Copy `.env.example` to `.env` and set your bot token:

   BOT_TOKEN=your_real_token_here

2. Enable "Message Content Intent" in the Discord Developer Portal for your application:
   - Go to https://discord.com/developers/applications
   - Select your application -> Bot -> Privileged Gateway Intents -> enable "Message Content Intent"

3. Install dependencies:

   npm install

4. Run in development (requires ts-node-dev):

   npm run dev

5. Build and run:

   npm run build
   npm start

Files

- src/app.ts — entrypoint; loads commands and logs in using BOT_TOKEN from environment.
- src/utilityCommands.ts — utility command definitions.
- src/commands.ts — CommandDefinition type and placeholder command arrays (so the project compiles).
- src/index.ts — exports the combined allCommands array.

Quick test commands (in a server where the bot is invited):

- `!avatar @utente`
- `!userinfo @utente`
- `!serverinfo`
- `!say ciao` (bot will resend and delete your message)

Notes

- This is a minimal example to help you run and test the commands locally. Expand commands arrays or integrate into your existing bot as needed.
- Keep your real bot token secret. Do NOT commit `.env` to the repository.

---

Manual workflow trigger

This README was updated automatically to trigger the GitHub Actions workflow that builds and publishes the Docker image to GHCR.

Triggered at: 2026-10-16T00:00:00Z
