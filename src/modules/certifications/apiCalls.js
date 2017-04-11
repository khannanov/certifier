import dbRef from '../../firebase'

export const getAll = () => dbRef.child('certifications').once('value')

export const getById = id => dbRef.child('certifications' + id).once('value')

export const create = (certificate) => {
  return dbRef.child('certifications' + getNewKey())
    .set(certificate)
}

export const update = (certificate) => {
  return dbRef.child('certifications' + certificate.id).update(certificate);
}

const getNewKey = () => dbRef.child('certifications').push().key
