import DiscordJS from 'discord.js'

class Orange {
    private logger: OrangeLogger;
    private utils: OrangeUtils;

    constructor(client, options) {
        if(options.loggerName == null) options.loggerName = "Orange";
        this.logger = new OrangeLogger(options.loggerName);
    }

    getLogger(): OrangeLogger {
        return this.logger;
    }

    getUtils(): OrangeUtils {
        return this.utils;
    }
}

class OrangeLogger {
    name;

    constructor(name) {
        this.name = name;
    }

    log(message) {
        console.log(`[INFO] ${this.name}: ${message}`)
    }

    warn(message) {
        console.warn(`[WARN] ${this.name}: ${message}`)
    }

    error(message) {
        console.error(`[ERROR] ${this.name}: ${message}`)
    }
}

class OrangeUtils {
    LogColors;

    
}

module.exports = { Orange }