import {
    readdirSync
} from 'fs'

import {
    Schema,
    model
} from 'mongoose'

export default class {
    constructor() {
        this.schemas = new Map()
        this._run()
        this.schemas.forEach((schema, id) => this._build(id))
    }

    _build(id) {
        if (this.schemas.has(id)) this[id] = model(id, this.schemas.get(id))
    }

    _run(path = `${__dirname}/Schemas/`) {
        return readdirSync(path).forEach(file =>
            this.schemas.set(file.replace(/.js/g, ''), require(`${path}${file}`).run(Schema)))
    }
}