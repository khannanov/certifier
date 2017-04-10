import dbRef from '../../firebase'

export const getAll = () => dbRef.child('certifications').once('value')