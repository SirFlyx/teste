require('@luskaluck/envVars').config()
require('./utils/MessagePrototype.js').run()

import {
    Client,
    Collection
} from 'discord.js'

import {
    readdirSync
} from 'fs'

import Module from './structures/Module.js.js'

export default class extends Client {
    constructor(options) {
        super(options)

        this.commands = new Collection()
        this.modules = new Module()

        this.loadModules()
        this.loadCommands()
        this.loadEvents()

        this.login(process.env.TOKEN)
    }

    loadModules(path = `${__dirname}/modules/`) {
        return readdirSync(path).forEach(folder => {
            return readdirSync(`${path}${folder}`).forEach(file =>
                    this.modules[file.replace(/.js/g, '')] = require(`${path}${folder}/${file}`))
        })
    }

    loadCommands(path = `${__dirname}/commands/`) {
        return readdirSync(path).forEach(folder => {
            return readdirSync(`${path}${folder}`).forEach(file => {
                const Command = require(`${path}${folder}/${file}`)
                return this.commands.set(file.replace(/.js/g, ''), new Command(this))
            })
        })
    }

    loadEvents(path = `${__dirname}/events/`) {
        return readdirSync(path).forEach(file => {
            const event = require(`${path}${file}`)
            return this.on(file.replace(/.js/g, ''), event)
        })
    }
}