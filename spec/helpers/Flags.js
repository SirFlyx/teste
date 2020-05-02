import Parameter from './StringParameters.js'

export default class {
    constructor(flags, options) {
        this.flags = flags
        this.options = options
        this.param = new Parameter(flags)
    }

    _checkLinks() {
        const expression = /(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/igm
        return this.flags.length > 1 ? this.flags.forEach(flag => expression.test(flag)) : expression.test(this.flags.toString())
    }

    _checkFlags(flag) {
        if (this.param.bySimilarity(flag) || this.param.bySize(flag) && this.options.links ? this._checkLinks() : true) return this.flags.length > 1 ? this.flags[this.flags.indexOf(flag)] : this.flags.toString()
    }
}