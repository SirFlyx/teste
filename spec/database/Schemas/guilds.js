module.exports.run = Schema => new Schema({
    _id: String,
    prefix: Array,
    language: String,
    defense: Map
})