export default {
  certifications: [
    {
      id: 'cert1',
      name: 'Certification name',
      description: 'certification description',
      questions: ['q1', 'q2', 'q3']
    },
    {
      id: 'cert2',
      name: 'Certification name #2',
      description: 'certification description #2',
      questions: ['q3', 'q4', 'q5']
    },
  ],
  questions: {
    q1: {
      name: 'question #1',
      answers: ['a1', 'a2', 'a3'],
    },
    q2: {
      name: 'question #2',
      answers: ['a4', 'a5', 'a6'],
    },
    q3: {
      name: 'question #3',
      answers: ['a7', 'a8', 'a9'],
    },
    q4: {
      name: 'question #4',
      answers: ['a10', 'a11', 'a12'],
    },
  },
  answers: {
    a1: 'Answer #1',
    a2: 'Answer #2',
    a3: 'Answer #3'
  }
}
