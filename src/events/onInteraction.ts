import { Interaction } from "discord.js";
import {CommandList} from '../commands/_CommandList';

export const onInteraction = async (interaction: Interaction) => {
    if (! interaction.isCommand()) {
        return;
    }

    const command = CommandList.find((command) => interaction.commandName === command.data.name);

    if (! command) {
        return;
    }

    command.run(interaction);
};
