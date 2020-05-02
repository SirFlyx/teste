export default class {
    codeDE(string, type) {
        let str = ''
        for (let i = 0; i < string.length; i++) str += String.fromCharCode(string.charCodeAt(i) + type)
        return str
    }
}