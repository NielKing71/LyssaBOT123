const config = require('../config');

// Iniciando a firestore
const admin = require('firebase-admin')
admin.initializeApp({
    credential: admin.credential.cert(require('./key'))
})
const firestore = admin.firestore()


module.exports = {
  firestore: firestore,
  admin: admin,

  //          FUNÇÕES          //

  //      GUILDA DATABASE      //
  Guilda: {
    async Adicionar(GuildaId) {
      await firestore.collection('Guildas').doc(GuildaId)
      .set({
        Idioma: config.Bot.DefaultIdioma,
      })
    },
    async Remover(GuildaId) {
      await firestore.collection('Guildas').doc(GuildaId).delete()
    },
    async Buscar(GuildaId) {
      await firestore.collection('Guildas').doc(GuildaId).get().data()
    },
    async Verificar(GuildaId) {
      await firestore.collection('Guildas').doc(GuildaId)
    }
  },
}