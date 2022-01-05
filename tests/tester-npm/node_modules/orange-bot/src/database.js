const mongoose = require('mongoose')

class Database extends mongoose.Mongoose {

    /**
     * @param {string | URL} mongoUrl
     * @param {mongoose.MongooseOptions} options
     */
    constructor(mongoUrl, options = {}) {
        if(mongoUrl instanceof URL) {
            mongoUrl = mongoUrl.toString()
        }
        
        this.connect(mongoUrl, options)
    }
}

module.exports = Database