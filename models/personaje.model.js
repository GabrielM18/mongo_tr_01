const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const params = { timestamps: true, strict: false, strictPopulate: false }
const schema = {
    nombre: { type: String, default: 'Paco' },
    apodo: { type: String, default: 'El miras' },
    id_raza :[
        {
            type: Schema.Types.ObjectId,
            ref : 'raza'
        }
    ],
    id_trabajo:[
        {
            type: Schema.Types.ObjectId,
            ref : 'trabajo'
        }
    ],
    edad :{type: Number, default: '25'},
    id_persona:[
        {
            type: Schema.Types.ObjectId,
            ref: 'persona'
        }
    ],
    descripcion: {type:String, default: 'nada'},
    id_fisicas : [
        {
            
                type: Schema.Types.ObjectId,
                ref : 'caracteristicas_fisicas'
            
        }
    ],

    id_rol:[
        {
            type: Schema.Types.ObjectId,
            ref : 'caracteristicas_rol'
        }
    ],
    relacion:[
        {

            id_personaje:{  type: Schema.Types.ObjectId,
                ref : 'personaje'},
            id_relacionado:{  type: Schema.Types.ObjectId,
                ref : 'personaje'},
            id_tipo_relacion:{
                type: Schema.Types.ObjectId,
                ref : 'tipo_relacion'
            }

        }
    ],
    habilidad_personaje: [
        {
            id_personaje:{
                type: Schema.Types.ObjectId,
                ref : 'personaje'
            },
            id_habilidad:{
                type: Schema.Types.ObjectId,
                ref : 'habilidades'
            }
        }
    ]

    
}



const Esquema = new Schema(schema, params);
const model = mongoose.model('personaje', Esquema);

module.exports = model