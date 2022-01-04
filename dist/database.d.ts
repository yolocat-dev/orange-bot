export = Database;
declare class Database extends mongoose {
    /**
     * @param {string | URL} mongoUrl
     * @param {mongoose.MongooseOptions} options
     */
    constructor(mongoUrl: string | URL, options?: mongoose.MongooseOptions);
}
import mongoose = require("mongoose");
//# sourceMappingURL=database.d.ts.map