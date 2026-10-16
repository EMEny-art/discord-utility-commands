# Discord Utility Commands

Repository with a collection of utility command definitions for a Discord.js v14 bot in TypeScript.

Setup

1. Copy `.env.example` to `.env` and set your bot token:

   BOT_TOKEN=your_real_token_here

2. Install dependencies:

   npm install

3. Run in development (requires ts-node-dev):

   npm run dev

4. Build and run:

   npm run build
   npm start

Files

- src/app.ts — entrypoint; loads commands and logs in using BOT_TOKEN from environment.
- src/utilityCommands.ts — utility command definitions (the commands you provided, cleaned up for TypeScript).
- src/commands.ts — CommandDefinition type and placeholder command arrays (so the project compiles).
- src/index.ts — exports the combined allCommands array.

Notes

- This is a minimal example to help you run and test the commands locally. Expand commands arrays or integrate into your existing bot as needed.
