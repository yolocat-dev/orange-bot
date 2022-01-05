const colors = require("./orangecolors.json")
const fs = require('fs')
const DiscordJS = require('discord.js')
const Utils = require('./utils')
const Logger = require('./logger')
const Client = require('./client')
const Collection = require('./collection')
const Database = require('./database')
const Command = require('./command')

module.exports = { Client, DiscordJS, Utils, Logger, Collection, Database, Command }