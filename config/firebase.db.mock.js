const storeMock = {
  certifications: {
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
  },
  questions: {
    q1: {
      name: 'question #1',
      answers: {
        a1: true,
        a2: true,
        a3: true
      },
    },
    q2: {
      name: 'question #2',
      answers: {
        a4: true,
        a5: true,
        a6: true
      },
    },
    q3: {
      id: 'q3',
      name: 'question #3',
      answers: {
        a7: true,
        a8: true,
        a9: true
      },
    },
    q4: {
      id: 'q4',
      name: 'question #4',
      answers: {
        a10: true,
        a11: true,
        a12: true
      },
    },
  },
}


module.exports = storeMock