import { questions } from '../../../../config/firebase.db.mock'

const snapshot = (obj) => {
  return { val: () => obj }
}

export const getAll = () => {
  return new Promise((resolve, reject) => {
    process.nextTick(() => resolve(snapshot(questions)));
  })
}

export const getById = id => {
  return new Promise((resolve, reject) => {
    process.nextTick(() => questions[id] ?
      resolve(snapshot(questions[id])) :
      reject({ error: `questions with id ${id} not found` })
    )
  })
}

export const create = (question, cert1) => {
  return new Promise((resolve, reject) => {
    // no response @see https://firebase.google.com/docs/reference/js/firebase.database.Reference#update
    const newId = getNewId()
    process.nextTick(() => resolve(snapshot({ ...question, id: newId })))
  })
}

export const getNewId = () => 'mockId'

export const update = (question) => {
  return new Promise((resolve, reject) => {
    process.nextTick(() => resolve(snapshot(question)))
  })
}