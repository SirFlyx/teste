import Schema from './SchemaManager.js'
import {
    connect
} from 'mongoose'

export default class extends Schema {
    start() {
        return connect(mongo, {
            useNewUrlParser: true
        }, err => err ? console.error(err) : null)
    }
}