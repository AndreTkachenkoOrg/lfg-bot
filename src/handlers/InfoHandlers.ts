import { Message, MessageEmbed } from "discord.js";
import { Config } from "../config";
import { BotCommand } from "../enums/BotCommand";

export class InfoHandlers {
    private config: Config

    constructor(config: Config) {
        this.config = config
    }

    public handleHelpCall(message: Message) {
        if (message.content === this.config.prefix + BotCommand.Help) {
            this.giveHelp(message)
            return
        }
    }
    private giveHelp(message: Message) {
        let embed = new MessageEmbed()
        .setAuthor('LFG Bot - event manager', this.config.img, 'https://github.com/AndreTkachenkoOrg/lfg-bot')
        .setColor("#0099ff")
        .setDescription(`**List of available commands**
        **${this.config.prefix}setup** - make this channel an lfg channel. Bot will only react to messages in the lfg channel. Requires user to have 'Manage Channels' permission.
        **${this.config.prefix}ignore [message]** - add message to the lfg channel. Other messages (ignoring commands) will be deleted immediately from lfg channel. Example: "lfg ignore This message is introductory thus should not be deleted". Requires user to have 'Manage Channels' permission.
        **${this.config.prefix}moderate #{channel} [0/1]** - enable/disable deletion of messages and reactions. Example: \`lfg moderate #lfg 0\` to disable moderation, \`lfg moderate #lfg 1\` to enable. Requires user to have 'Manage Channels' permission.
        **${this.config.prefix}start** - add lfg message to the lfg channel. New temp channel will be created, where the user will be prompted to complete survey. User's answers will be collected into an embed and sent to the lfg channel.
        `)
        .addField("**Want to use it on your server?**", "Follow this link: https://github.com/AndreTkachenkoOrg/lfg-bot#want-to-use-at-your-server")
        .addField("**Any issues or missing feature?**", "You can suggest it via https://github.com/AndreTkachenkoOrg/lfg-bot/issues")
        message.channel.send(embed)
    }
}