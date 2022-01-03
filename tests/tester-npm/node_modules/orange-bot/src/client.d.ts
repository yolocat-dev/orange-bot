export = Client;
declare class Client extends DiscordJS.Client<boolean> {
    /**
    * @param {ClientOptions} options Options for the client
    */
    constructor(options: ClientOptions);
}

interface ClientOptions extends DiscordJS.ClientOptions {
    mongoUrl?: string
}

import DiscordJS = require("discord.js");
//# sourceMappingURL=client.d.ts.map