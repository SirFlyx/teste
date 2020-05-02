import {
    readFileSync,
    writeFile
} from 'fs'

const pipe = (path) => `${process.cwd()}/${path}`

function access(path) {
    return readFileSync(pipe(path)).toString()
}

function mk(path, string, encode) {
    return writeFile(pipe(path), string, encode, function(err) {
        if (err) return console.log(err)
    })
}

function standard(string) {
    let str = ''
    const confirmed = /(if\()|[;]/i
    if (confirmed.test(string)) {
        if (string.match(';')) str = string.replaceAll(';', '')
        if (string.match(/(if\()/g)) str = string.replaceAll('if(', 'if (')
    }
    return str
}

export default {
    access,
    mk,
    standard
}