export = Client;
declare class Client extends DiscordJS.Client<boolean> {
    /**
    * @param {ClientOptions} options Options for the client
    */
    constructor(options: ClientOptions);
    /** @type {Database} */
    database: Database;
}

interface ClientOptions extends DiscordJS.ClientOptions {
    mongoUrl?: string | URL
}

import DiscordJS = require("discord.js");
import Database = require("./database");
//# sourceMappingURL=client.d.ts.map