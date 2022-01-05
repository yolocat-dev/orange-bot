import { CommandExecution } from "./main";

export = Command;
declare class Command {
    /**
     * @param {CommandOptions} options
     */
    constructor(options: CommandOptions, execute: (args: CommandExecution) => void);
}

//# sourceMappingURL=command.d.ts.map