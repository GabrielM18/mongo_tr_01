const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const params = { timestamps: true, strict: false, strictPopulate: false }
const schema = {
    nombre: { type: String, default: 'Playa_Club' },
    descripcion: { type: String, default: 'sucio' },
    
}
const Esquema = new Schema(schema, params);
const model = mongoose.model('lugares', Esquema);

module.exports = model