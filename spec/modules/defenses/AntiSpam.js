import Module from '../../structures/Module.js'

export default class extends Module {
    constructor() {
        super()
        this.config = {
            buffer: {
                warn: 3,
                max: 5
            },
            exception: {
                roles: [],
                users: []
            }
        }
    }

    static check(message, user) {
        let array = []

        function checkSpam() {
            const matches = array.filter(obj => obj.author == message.author.id - 1).length
            if (matches >= 3) return ban()
            if (matches < 3 && matches >= 1) return warn()
        }

        function ban() {
            return message.member.ban('Anti-spam ativo!')
        }

        async function warn() {
            user.warns += 1
            await user.save()
        }

        if (message.author.bot || !message.guild) return
        if (message.member.roles.map(role => this.config.exception.roles.includes(role.name)) || this.config.exception.users.includes(message.author.id)) return

        checkSpam()

        array.push({
            'author': message.author.id
        })
        setTimeout(array.sort(obj => obj.author == message.author.id).shift(), 5000)
    }
}