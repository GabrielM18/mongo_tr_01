const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const params = { timestamps: true, strict: false, strictPopulate: false }
const schema = {
    altura: { type: Number},
    peso:{ type: Number},
    genero:{type:String}
    
}
const Esquema = new Schema(schema, params);
const model = mongoose.model('caracteristicas-fisicas', Esquema);

module.exports = model