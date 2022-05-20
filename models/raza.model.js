const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const params = { timestamps: true, strict: false, strictPopulate: false }
const schema = {
    nombre: { type: String, default: 'Mono' },
  
    
}
const Esquema = new Schema(schema, params);
const model = mongoose.model('lugares', Esquema);

module.exports = model