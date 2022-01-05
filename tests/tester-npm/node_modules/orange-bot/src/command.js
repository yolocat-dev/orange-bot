const DiscordJS = require('discord.js')

class Command {

    /**
     * @param {CommandOptions} options
     * @param {Function} execute
     */
    constructor(options, execute) {
        if(options && options.name) {
            execute()
        }
    }

}

module.exports = Command