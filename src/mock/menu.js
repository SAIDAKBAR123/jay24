// const NAMESPACE = 'menu'

this.upsertMany = {
  request: {
    menus: [
      {
        date: new Date(1995, 11, 17),
        lunches: ['slug']
      }
    ]
  },
  response: 'success'
}

this.create = {
  request: {
    date: Date.now(),
    lunches: ['03040426-10d5-461b-a45a-f930335c063a']
  },
  response: {
    id: 'e89b2122-b039-4642-a332-d420d62d21fa',
    _id: 'e89b2122-b039-4642-a332-d420d62d21fa',
    date: Date.now(),
    lunches: ['03040426-10d5-461b-a45a-f930335c063a']
  }
}

this.update = {
  request: {
    id: 'e89b2122-b039-4642-a332-d420d62d21fa',
    date: Date.now(),
    lunches: ['03040426-10d5-461b-a45a-f930335c063a'],
    vote: 41
  },
  response: {
    acknowledged: true,
    modifiedCount: 1,
    upsertedId: null,
    upsertedCount: 0,
    matchedCount: 1
  }
}

this.getById = {
  request: {
    id: 'e89b2122-b039-4642-a332-d420d62d21fa'
  },
  response: {
    id: 'e89b2122-b039-4642-a332-d420d62d21fa',
    _id: 'e89b2122-b039-4642-a332-d420d62d21fa',
    date: Date.now(),
    lunches: ['03040426-10d5-461b-a45a-f930335c063a'],
    lunch_infos: [
      {
        id: '03040426-10d5-461b-a45a-f930335c063a',
        _id: '03040426-10d5-461b-a45a-f930335c063a',
        title: {
          uz: 'uz',
          ru: 'ru',
          en: 'en'
        },
        image: 'url',
        price: 100,
        slug: 'manti'
      }
    ]
  }
}

this.find = {
  request: {
  },
  response: {
    id: 'e89b2122-b039-4642-a332-d420d62d21fa',
    _id: 'e89b2122-b039-4642-a332-d420d62d21fa',
    date: Date.now(),
    lunches: ['03040426-10d5-461b-a45a-f930335c063a']
  }
}

this.delete = {
  request: {
    id: 'e89b2122-b039-4642-a332-d420d62d21fa'
  },
  response: {
    deletedCount: 1
  }
}

this.getMenuExpense = {
  request: {
    from_date: new Date(1995, 11, 17),
    to_date: new Date(1995, 11, 17),
    user_id: 'user_id'
  },
  response: {
    expenses: [
      {
        date: new Date(1995, 11, 17),
        count: 1,
        sum: 10
      }
    ],
    sum: 10
  }
}

this.updateVotes = {
  request: {
    date: new Date(1995, 11, 17),
    votes: 31
  },
  response: {
    acknowledged: true,
    modifiedCount: 1,
    upsertedId: null,
    upsertedCount: 0,
    matchedCount: 1
  }
}
