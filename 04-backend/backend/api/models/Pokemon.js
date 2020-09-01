/**
 * Pokemon.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombre: {
      type: 'string',
      required: true
    },
    //Relacion
    //Pokemon -> Usuario
    usuario:{
      model: 'Usuario', //Modelo a relacionar
      required: true// Requerida 1-N
      // false opcional 0-N (por defecto)
    }

  },

};

