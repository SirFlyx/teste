import Module from '../../structures/Module.js'

export default class extends Module {
    static check(message) {
        if (/(?:(?:https):\/\/|discord\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/igm.test(message.content)) return message.delete()
    }
}