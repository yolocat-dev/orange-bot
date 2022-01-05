export = Client;
declare class Client extends DiscordJS.Client<boolean> {
    /**
    * @param {ClientOptions} options Options for the client
    */
    constructor(options: ClientOptions);
    /** @type {Database} */
    database: Database;
}

import DiscordJS = require("discord.js");
import Database = require("./database");
import { ClientOptions } from "./main";

//# sourceMappingURL=client.d.ts.map