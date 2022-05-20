const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const params = { timestamps: true, strict: false, strictPopulate: false }
const schema = {
    fuerza: { type: Number},
    destreza:{ type: Number},
    constitucion:{type:String},
    inteligencia: { type: Number},
    sabiduria:{ type: Number},
    carisma:{type:Number}
}
const Esquema = new Schema(schema, params);
const model = mongoose.model('caracteristicas-rol', Esquema);

module.exports = model