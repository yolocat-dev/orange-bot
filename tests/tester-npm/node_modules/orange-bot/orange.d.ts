export = Orange;
declare class Orange {
    /**
     * @param {DiscordJS.Client} client - Your instance of your bot.
     * @param {boolean} [time24] - What time format Orange's default logger should be. Defaults to true.
     */
    constructor(client: DiscordJS.Client, time24?: boolean);
    Logger: typeof OrangeLogger;
}
declare class OrangeLogger {
    /**
     * @param {String} name - The name which will show up when logging to console. Useful for bigger projects.
     * @param {Boolean} [time24=true] - Specifies if the logger should use 24 hour format (true) or 12 hour format (false). Defaults to true (24 hour format).
     */
    constructor(name: string, time24?: boolean);
    /** @type {String} */
    name: string;
    /** @type {Boolean} */
    time24: boolean;
    /**
     * @param {String} message - The message that will be sent to the console in the info-channel. Orange Color Codes will work here.
     */
    log(message: string): void;
    /**
     * @param {String} message - The message that will be sent to the console in the warn-channel. Orange Color Codes will work here.
     */
    warn(message: string): void;
    /**
     * @param {String} message - The message that will be sent to the console in the err-channel. Orange Color Codes will work here.
     */
    error(message: string): void;
}
import DiscordJS = require("discord.js");
//# sourceMappingURL=orange.d.ts.map