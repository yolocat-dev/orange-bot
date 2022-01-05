export = Database;
declare class Database extends mongoose.Mongoose {
    /**
     * @param {string | URL} mongoUrl
     * @param {DatabaseOptions} options
     */
    constructor(mongoUrl: string | URL, options?: DatabaseOptions);
    static DatabaseOptions: DatabaseOptions
}

import { DatabaseOptions } from "./main";
import mongoose = require("mongoose");
//# sourceMappingURL=database.d.ts.map