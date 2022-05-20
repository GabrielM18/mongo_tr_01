const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const params = { timestamps: true, strict: false, strictPopulate: false }
const schema = {
    nombre: { type: String, default: 'correr' },
    descripcion: { type: String, default: 'sprint super rápido' },
    
}
const Esquema = new Schema(schema, params);
const model = mongoose.model('habilidades', Esquema);

module.exports = model