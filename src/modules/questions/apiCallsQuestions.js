import dbRef from '../../firebase'

export const getById = (id) => {
  return dbRef.child(`questions/${id}`).once('value')
}

export const getNewId = () => dbRef.child('questions').push().key

export const update = (question) => {
  return dbRef.child('questions/' + question.id).update(question);
}

export const create = (question, newId, certId) => {
  const updates = {}
  updates['/questions/' + newId] = question
  updates['/certifications/' + certId + '/questions/' + newId] = true

  return dbRef.update(updates)
}