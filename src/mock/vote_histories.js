const NAMESPACE = 'vote_histories'

this.create = {
  request: {
    user_id: 'user_id',
    date: new Date(),
    type: true
  },
  response: {
    id: 'id',
    user_id: 'user_id',
    date: new Date(),
    type: true
  }
}

this.find = {
  request: {
    user_id: 'user_id',
    from_date: new Date(),
    to_date: new Date()
  },
  response: {
    vote_histories: [
      {
        user_id: 'user_id',
        type: true,
        date: true
      }
    ]
  }
}

this.getLastVote = {
  request: {
    user_id: 'user_id',
    date: new Date()
  },
  response: {
    vote_history: {
      user_id: 'user_id',
      type: true,
      date: true
    }
  }
}

this.getUserVotes = {
  request: {
    // required
    from_date: new Date(),
    to_date: new Date(),
    // unrequired
    type: true
  },
  response: {
    vote_histories: [
      {
        user_id: 'user_id',
        type: true,
        id: 'id',
        date: true,
        user: [
          {
            // watch model of user
          }
        ]
      }
    ]
  }
}
