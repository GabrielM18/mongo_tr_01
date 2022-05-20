const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const params = { timestamps: true, strict: false, strictPopulate: false }
const schema = {
  titulo: { type: String, default: 'vacio' },
  descripcion: { type: String, default: 'vacio' },
  cuando: { type: Date, default: Date.now},
  orden: { type: Number, default: '1' },

  personaje_capitulos:[

  ]

}
const Esquema = new Schema(schema, params);
const model = mongoose.model('capitulos', Esquema);

module.exports = model