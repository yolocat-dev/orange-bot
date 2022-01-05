import Client = require("./client");
import DiscordJS = require("discord.js");
import Utils = require("./utils");
import Logger = require("./logger");
import mongoose = require("mongoose");
export { Client, DiscordJS, Utils, Logger };

export interface DatabaseOptions extends mongoose.ConnectOptions {
    
}

export interface CommandOptions {
    /** Name of your command. */
    name: string,
    /** Description of your command. Useful for help commands. */
    description?: string,
    /** Category of your command. Useful for help commands. */
    category?: string,
    /** Specifies if your command should be registered as slash command, classic command or both. Required if you don't set a default value when creating your client. */
    type?: CommandType,
    /** An array of permissions. The user must have atleast one of these to execute the command. The allPermissionsRequired property overrides this. */
    permission?: Array<DiscordJS.PermissionFlags>,
    /** An array of role ids. Only use if you add the bot to one single server as role ids are different for every server. */
    role?: Array<string>,
    /** Turn this on to make bots able to execute this command. This could lead to infinite loops. Defaults to false. */
    executedByBot?: boolean,
    /** Makes the bot owner only able to execute the command. Useful for dangerous commands like eval. Defaults to false. */
    botOwnerOnly?: boolean,
    /** If the slash command should be registered in your test server only. This makes the slash commands appear faster. If you turn this feature off, it will take 1-2 hours for the command to register. Classic commands is not affected. Defaults to false. */
    testOnly?: boolean,
    /** If the server owner only should be able to execute this command. Useful for commands the administrators should not have access to, as many give the administrator permission to admins aswell. Defaults to false. */
    serverOwnerOnly?: boolean,
    /** An array of aliases the command can also be executed as. */
    aliases?: Array<string>,
    /** Cooldown in MS. */
    cooldown?: number
}

export interface ClientOptions extends DiscordJS.ClientOptions {
    mongoUrl?: string | URL,
    databaseOptions?: DatabaseOptions,
    isDefaultClient?: boolean
}

export interface CommandExecution {
    command?: string,
    args?: Array<string>,
    interaction?: DiscordJS.CommandInteraction,
    channel?: DiscordJS.TextChannel,
    message?: DiscordJS.Message,
    member?: DiscordJS.GuildMember,
    guild?: DiscordJS.Guild,
    client?: Client
}

export type CommandType = 
    | "SLASH"
    | "BOTH"
    | "CLASSIC"

//# sourceMappingURL=main.d.ts.map
/// <reference path="logger.d.ts" />
/// <reference path="client.d.ts" />
/// <reference path="utils.d.ts" />
/// <reference path="database.d.ts" />
