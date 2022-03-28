import {Client} from 'discord.js';
import {IntentOptions} from './config/IntentOptions';
import {onInteraction} from './events/onInteraction';
import {onReady} from './events/onReady';

(async () => {
    const BOT = new Client({intents: IntentOptions});

    BOT.on('ready', async () => await onReady(BOT));
    BOT.on('interactionCreate', onInteraction);

    await BOT.login(process.env.DISCORD_TOKEN);
})();
