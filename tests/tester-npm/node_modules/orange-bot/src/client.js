const DiscordJS = require("discord.js")
const Database = require('./database')

class Client extends DiscordJS.Client {

    /** @type {Database} */
    database

    /**
    * @param {ClientOptions} options Options for the client
    */
    constructor(options) {
        if(options && options.mongoUrl && options.mongoUrl != null && typeof options != 'undefined') {
            // database = 
        }

        super(options)
    }

}

module.exports = Client