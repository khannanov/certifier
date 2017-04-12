import { certifications } from '../../../../config/firebase.db.mock'
// todo fake snapshot object
const snapshot = {
  obj: {},
  val: () => this.obj
}



export const getAll = () => {
  return new Promise((resolve, reject) => {
    snapshot.obj = certifications
    process.nextTick(() => resolve(snapshot));
  })
}

export const getById = id => {
  return new Promise((resolve, reject) => {
    process.nextTick(() => certifications[id] ?
      resolve(certifications[id]) :
      reject({ error: `certification with id ${id} not found` })
    )
  })
}

export const create = (certification, newId) => {
  return new Promise((resolve, reject) => {
    // no response @see https://firebase.google.com/docs/reference/js/firebase.database.Reference#set
    process.nextTick(() => resolve())
  })
}

export const getNewKey = () => 'mockId'

export const update = (certificate) => {
  return new Promise((resolve, reject) => {
    process.nextTick(() => resolve(certificate))
  })
}