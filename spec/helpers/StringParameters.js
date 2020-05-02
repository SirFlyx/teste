import Generator from './src/helpers/Generators.js'

export default class {
    constructor(parameter) {
        this.param = parameter
    }

    bySize(string) {
        const sizes = [this.param.length, string.length]
        const dif = 100 / sizes[0] * sizes[1]
        return 100 - dif
    }

    bySimilarity(string) {
        const constants = {
            '1': generate(0, 5),
            '2': generate(5, 12),
            '3': generate(12, 18),
            '4': generate(18, 23),
            '5': generate(23, 26)
        }
        let str = ''
        str += string[0].toUpperCase()
        const consonants = string.matchAll(/[^aeiou]/gi)
        consonants.slice(1).forEach((letter, i) => {
            const index = Object.values(constants).indexOf(Object.values(constants).find(similar => similar.includes(letter)))
            return str += consonants[i + 1].replace(letter, index)
        })
        return str === this.param
    }
}

function generate(old, current) {
    const alpha = Generator.genAlpha(26).join('')
    return alpha.substring(old, current)
}