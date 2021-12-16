import DiscordJS from 'discord.js'

class Orange {
    private logger: OrangeLogger;
    private utils: OrangeUtils;

    constructor(client, options) {
        if(options.loggerName == null) options.loggerName = "Orange";
        this.logger = new OrangeLogger(options.loggerName);
    }

    public getLogger(): OrangeLogger {
        return this.logger;
    }

    public getUtils(): OrangeUtils {
        return this.utils;
    }
}

class OrangeLogger {
    private name: String;

    constructor(name: String) {
        this.name = name;
    }

    log(message: String) {
        console.log(`[INFO] ${this.name}: ${message}`)
    }

    warn(message: String) {
        console.warn(`[WARN] ${this.name}: ${message}`)
    }

    error(message: String) {
        console.error(`[ERROR] ${this.name}: ${message}`)
    }
}

class OrangeUtils {
    public LogColors: LogColors;

    
}

export default { Orange }