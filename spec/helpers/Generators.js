export default class {
    static generateChars(x) {
        return new Array(x).fill(1).map(($, i) => String.fromCharCode(65 + i))
    }

    static get getUUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
    }

    static get getKey() {
        const uuid = this.getUUID.split('')
        let encry = []
        let crypt = ''
        let index = 0
        let random = Math.random() * 0xffffffff | 0
        for (let i = 0; i < 256; i++) {
            encry[i] = (i < 16 ? '0' : '') + (i).toString(16)
        }
        while (index++ < 20) {
            let char = uuid[index - 1]
            crypt += (char == '-') ? char : encry[char == 'x' ? random & 0xff : (char == 'y' ? (random & 0xff & 0x3f | 0x80) : (random & 0xff & 0xf | 0x40))]
            random = index % 4 == 0 ? Math.random() * 0xffffffff | 0 : random >> 8
        }
        return crypt
    }
}