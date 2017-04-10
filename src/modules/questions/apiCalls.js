import dbRef from '../../firebase'

export function getQuestion(id) {
  return dbRef.child(`questions/${id}`).once('value')
}