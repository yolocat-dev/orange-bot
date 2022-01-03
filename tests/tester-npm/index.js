const Orange = require('orange-bot')
const client = new Orange.Client({ intents: ["DIRECT_MESSAGES"], mongoUrl: "https://hello.world" })
client.login("test")