const colors = require("./orangecolors.json")

class OrangeLogger {
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

class OrangeUtils {
    /**
     * @param {String} message - Formats the inputted message to work with Orange Color Codes (includes message formatting, for example bold text).
     * @returns {String} The formatted text, for use in console.
     */
    static format(message) {
        let msg = "&r".concat(message)
        msg += "&r"
        msg = msg.replace(/\&0/g, this.terminalEscape(colors["0"]))
        msg = msg.replace(/\&1/g, this.terminalEscape(colors["1"]))
        msg = msg.replace(/\&2/g, this.terminalEscape(colors["2"]))
        msg = msg.replace(/\&3/g, this.terminalEscape(colors["3"]))
        msg = msg.replace(/\&4/g, this.terminalEscape(colors["4"]))
        msg = msg.replace(/\&5/g, this.terminalEscape(colors["5"]))
        msg = msg.replace(/\&6/g, this.terminalEscape(colors["6"]))
        msg = msg.replace(/\&7/g, this.terminalEscape(colors["7"]))
        msg = msg.replace(/\&8/g, this.terminalEscape(colors["8"]))
        msg = msg.replace(/\&9/g, this.terminalEscape(colors["9"]))
        msg = msg.replace(/\&a/g, this.terminalEscape(colors["a"]))
        msg = msg.replace(/\&b/g, this.terminalEscape(colors["b"]))
        msg = msg.replace(/\&c/g, this.terminalEscape(colors["c"]))
        msg = msg.replace(/\&d/g, this.terminalEscape(colors["d"]))
        msg = msg.replace(/\&e/g, this.terminalEscape(colors["e"]))
        msg = msg.replace(/\&f/g, this.terminalEscape(colors["f"]))
        msg = msg.replace(/\&l/g, this.terminalEscape(colors["l"]))
        msg = msg.replace(/\&m/g, this.terminalEscape(colors["m"]))
        msg = msg.replace(/\&n/g, this.terminalEscape(colors["n"]))
        msg = msg.replace(/\&o/g, this.terminalEscape(colors["o"]))
        msg = msg.replace(/\&r/g, this.terminalEscape(colors["r"]))
        return msg
    }

    /**
     * @param {String} str - ANSI-codes for terminal, use ";" between the codes, if multiple.
     * @returns {String} Returns the ANSI-codes as a stdout command.
     */
    static terminalEscape(str) {
        return `\x1B[${str}m`
    }
}

module.exports = { OrangeLogger, OrangeUtils }