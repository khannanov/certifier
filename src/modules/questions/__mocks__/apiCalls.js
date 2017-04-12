import { questions } from '../../../../config/firebase.db.mock'

export const getAll = () => {
  return new Promise((resolve, reject) => {
    process.nextTick(() => resolve(questions));
  })
}

export const getById = id => {
  return new Promise((resolve, reject) => {
    process.nextTick(() => questions[id] ?
      resolve(questions[id]) :
      reject({ error: `questions with id ${id} not found` })
    )
  })
}

export const create = (question, cert1) => {
  return new Promise((resolve, reject) => {
    // no response @see https://firebase.google.com/docs/reference/js/firebase.database.Reference#update
    const newId = getNewId()
    process.nextTick(() => resolve({ ...question, id: newId }))
  })
}

export const getNewId = () => 'mockId'

export const update = (question) => {
  return new Promise((resolve, reject) => {
    process.nextTick(() => resolve(question))
  })
}