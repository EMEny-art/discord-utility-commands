import type { Message } from "discord.js";

export interface CommandDefinition {
  name: string;
  description?: string;
  prefixes?: string[];
  usage?: string;
  runMessage?: (message: Message, args: string[]) => Promise<any> | any;
}

export const commands: CommandDefinition[] = [];
export const moderationCommands: CommandDefinition[] = [];
export const economyCommands: CommandDefinition[] = [];
export const socialCommands: CommandDefinition[] = [];
export const musicCommands: CommandDefinition[] = [];
