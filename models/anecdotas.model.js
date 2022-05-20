const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const params = { timestamps: true, strict: false, strictPopulate: false }
const schema = {
    titulo: { type: String, default: 'vacio' },
    descripcion: { type: String, default: 'vacio' },
    id_persona:[
        {
            type: Schema.Types.ObjectId,
            ref : 'persona'
        }
    ],
    cuando: { type: String, default: 'vacio' }
}



const Esquema = new Schema(schema, params);
const model = mongoose.model('anecdotas', Esquema);

module.exports = model