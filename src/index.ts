import { allUtilityCommands } from "./utilityCommands";
import type { CommandDefinition } from "./commands";
import { commands, moderationCommands, economyCommands, socialCommands, musicCommands } from "./commands";

export const allCommands: CommandDefinition[] = [
  ...commands,
  ...moderationCommands,
  ...economyCommands,
  ...socialCommands,
  ...musicCommands,
  ...allUtilityCommands,
];
