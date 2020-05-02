import {
    Message
} from 'discord.js'

export default class {
    static run() {
        Message.prototype.error = function(text) {
            this.channel.send(`❌ **${this.author.tag}** ${text}`)
        }
        String.prototype.replaceAll = function(search, replacement) {
            return this.split(search).join(replacement)
        }
        String.prototype.matchAll = function(regex) {
            return this.match(regex)
        }
    }
}