import Module from '../../structures/Module.js'

export default class extends Module {
    constructor() {
        super()
        this.level = 75
    }

    static check(message) {
        const firstIgnored = message.content.slice(1).split(' ')
        const symbolsIgnored = firstIgnored.join(' ').replace(/[ ]/g, '').replace(/[^\w\s]/gi, '')
        const capsIdentify = symbolsIgnored.match(/[A-Z]/gm)
        if (!capsIdentify ? false : true) return
        const result = Math.round((capsIdentify.length / symbolsIgnored.length) * 100)
        if (result >= this.level) return message.delete()
    }
}
