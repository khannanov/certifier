const storeMock = {
  certifications: {
    cert1: {
      name: 'Certification name',
      description: 'certification descrition',
      questions: {
        q1: true,
        q2: true,
        q3: true
      }
    },
    cert2: {
      name: 'Certification name #2',
      description: 'certification descrition #2',
      questions: {
        q4: true,
        q5: true,
        q3: true
      }
    },
  },
  questions: {
    cert1: {
      q1: {
        name: 'question?',
        answers: {
          a1: true,
          a2: true,
        },
      }
    },
  },
}


module.exports = storeMock