const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const params = { timestamps: true, strict: false, strictPopulate: false }
const schema = {
    nombre: { type: String, default: 'Paco' },
    apellidos: { type: String, default: 'Perez Perez' },
    apodo: { type: String, default: 'El miras' }
}



const Esquema = new Schema(schema, params);
const model = mongoose.model('persona', Esquema);

module.exports = model