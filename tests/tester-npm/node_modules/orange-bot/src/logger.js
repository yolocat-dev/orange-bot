const OrangeUtils = require('./utils')

class Logger {
    /** @type {String} */
    name = "";
    /** @type {Boolean} */
    time24 = true;

    /**
     * @param {String} name - The name which will show up when logging to console. Useful for bigger projects.
     * @param {Boolean} [time24=true] - Specifies if the logger should use 24 hour format (true) or 12 hour format (false). Defaults to true (24 hour format).
     */
    constructor(name, time24 = true) {
        this.name = name
        this.time24 = time24
    }

    /**
     * @param {String} message - The message that will be sent to the console in the info-channel. Orange Color Codes will work here.
     */
    log(message) {
        let logMsg = " " + OrangeUtils.format(message.toString())
        let date = new Date()
        if(!this.time24) date.setHours((date.getHours() % 12) || 12)
        let dateStr = date.getHours().toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false }) + ":" +
                      date.getMinutes().toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false }) + ":" +
                      date.getSeconds().toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false })
        let info = OrangeUtils.format(OrangeUtils.terminalEscape("48;2;255;255;255") + "&0&lINFO " + dateStr + "&r ")
        console.log(info + OrangeUtils.format(`&f[${this.name}]`) + logMsg)
    }

    /**
     * @param {String} message - The message that will be sent to the console in the warn-channel. Orange Color Codes will work here.
     */
    warn(message) {
        let logMsg = " " + OrangeUtils.format(message.toString())
        let date = new Date()
        if(!this.time24) date.setHours((date.getHours() % 12) || 12)
        let dateStr = date.getHours().toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false }) + ":" +
                      date.getMinutes().toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false }) + ":" +
                      date.getSeconds().toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false })
        let info = OrangeUtils.format(OrangeUtils.terminalEscape("48;2;255;255;85") + "&0&lWARN " + dateStr + "&r ")
        console.log(info + OrangeUtils.format(`&e[${this.name}]`) + logMsg)
    }

    /**
     * @param {String} message - The message that will be sent to the console in the err-channel. Orange Color Codes will work here.
     */
    error(message) {
        let logMsg = " " + OrangeUtils.format(message.toString())
        let date = new Date()
        if(!this.time24) date.setHours((date.getHours() % 12) || 12)
        let dateStr = date.getHours().toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false }) + ":" +
                      date.getMinutes().toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false }) + ":" +
                      date.getSeconds().toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false })
        let info = OrangeUtils.format(OrangeUtils.terminalEscape("48;2;255;85;85") + "&0&lERR  " + dateStr + "&r ")
        console.log(info + OrangeUtils.format(`&c[${this.name}]`) + logMsg)
    }
}

module.exports = Logger