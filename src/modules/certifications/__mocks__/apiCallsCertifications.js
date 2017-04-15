import { certifications } from '../../../../config/firebase.db.mock'

const snapshot = (obj) => {
  return { val: () => obj }
}

export const getAll = () => {
  return new Promise((resolve, reject) => {
    process.nextTick(() => resolve(snapshot(certifications)));
  })
}

export const getById = id => {
  return new Promise((resolve, reject) => {
    process.nextTick(() => certifications[id] ?
      resolve(snapshot(certifications[id])) :
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
    process.nextTick(() => resolve(snapshot(certificate)))
  })
}