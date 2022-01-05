const mongoose = require('mongoose')

class Database extends mongoose.Mongoose {

    /**
     * @param {string | URL} mongoUrl - Your specified MongoDB URL.
     * @param {DatabaseOptions} [options] - Connection options.
     */
    constructor(mongoUrl, options = {}) {
        if(mongoUrl instanceof URL) {
            mongoUrl = mongoUrl.toString()
        }
        
        this.connect(mongoUrl, options, () => {})
    }
}

module.exports = Database