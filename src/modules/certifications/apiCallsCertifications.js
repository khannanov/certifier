// todo weird naming because of jest mocks problem @see https://github.com/facebook/jest/issues/2070
import dbRef from '../../firebase'

export const getAll = () => dbRef.child('certifications').once('value')

export const getById = (id) => dbRef.child('certifications/' + id).once('value')

export const create = (certificate, newId) => {
  // no response @see https://firebase.google.com/docs/reference/js/firebase.database.Reference#set
  return dbRef.child('certifications/' + newId)
    .set(certificate)
}

export const update = (certificate) => {
  return dbRef.child('certifications/' + certificate.id).update(certificate);
}

export const getNewKey = () => dbRef.child('certifications').push().key
