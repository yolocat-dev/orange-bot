export = Utils;
declare class Utils {
    /**
     * @param {String} message - Formats the inputted message to work with Orange Color Codes (includes message formatting, for example bold text).
     * @returns {String} The formatted text, for use in console.
     */
    static format(message: string): string;
    /**
     * @param {String} str - ANSI-codes for terminal, use ";" between the codes, if multiple.
     * @returns {String} Returns the ANSI-codes as a stdout command.
     */
    static terminalEscape(str: string): string;
}
//# sourceMappingURL=utils.d.ts.map