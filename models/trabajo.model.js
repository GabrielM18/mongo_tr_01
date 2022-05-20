const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const params = { timestamps: true, strict: false, strictPopulate: false }
const schema = {
    nombre: { type: String, default: 'striper' },
   
    
}
const Esquema = new Schema(schema, params);
const model = mongoose.model('trabajo', Esquema);

module.exports = model