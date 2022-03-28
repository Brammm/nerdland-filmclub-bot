import { Command } from "../interfaces/Command";
import {SlashCommandBuilder} from '@discordjs/builders';

export const Filmclub: Command = {
    data: new SlashCommandBuilder()
        .setName("filmclub")
        .setDescription("Schrijf je in voor de filmclub."),
    run: async (interaction) => {
        const {user} = interaction;

        console.log(user.username);

        await interaction.reply({content: 'Hello ' + user.username})
        await interaction.followUp({content: 'You rock!'})
    }
};
