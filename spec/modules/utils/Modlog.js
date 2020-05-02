import Module from '../../structures/Module.js'
import Server from '../../server/Server'

export default class extends Module {
    static run() {
        Server.write()
    }
}