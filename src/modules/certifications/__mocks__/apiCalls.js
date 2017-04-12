const certifications = {
  cert1: {
    name: 'Certification name',
    description: 'certification description',
    questions: {
      q1: true,
      q2: true,
      q3: true
    }
  },
  cert2: {
    name: 'Certification name #2',
    description: 'certification description #2',
    questions: {
      q3: true,
      q4: true,
      q5: true,
    }
  },
}

export const getAll = () => {
  return new Promise((resolve, reject) => {
    process.nextTick(() => resolve(certifications));
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
//
// export const update = (certificate) => {
//   return dbRef.child('certifications' + certificate.id).update(certificate);
// }