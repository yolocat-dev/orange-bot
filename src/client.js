const DiscordJS = require("discord.js")

class Client extends DiscordJS.Client {

    /**
    * @param {ClientOptions} options Options for the client
    */
    constructor(options) {
        super(options)
    }

}

module.exports = Client