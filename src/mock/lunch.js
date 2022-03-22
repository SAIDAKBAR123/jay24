// const NAMESPACE = 'lunch'
// const application = {}

this.create = {
  request: {
    title: {
      uz: 'uz',
      ru: 'ru',
      en: 'en'
    },
    image: 'url',
    price: 100,
    slug: 'manti'
  },
  response: {
    id: 'e89b2122-b039-4642-a332-d420d62d21fa',
    _id: 'e89b2122-b039-4642-a332-d420d62d21fa',
    title: {
      uz: 'uz',
      ru: 'ru',
      en: 'en'
    },
    image: 'url',
    price: 100,
    slug: 'manti'
  }
}

this.update = {
  request: {
    id: 'e89b2122-b039-4642-a332-d420d62d21fa',
    title: {
      uz: 'uz',
      ru: 'ru',
      en: 'en'
    },
    image: 'url',
    price: 100,
    slug: 'manti'
  },
  response: {
    acknowledged: true,
    modifiedCount: 1,
    upsertedId: null,
    upsertedCount: 0,
    matchedCount: 1
  }
}

this.getByID = {
  request: {
    id: 'e89b2122-b039-4642-a332-d420d62d21fa'
  },
  response: {
    id: 'e89b2122-b039-4642-a332-d420d62d21fa',
    _id: 'e89b2122-b039-4642-a332-d420d62d21fa',
    title: {
      uz: 'uz',
      ru: 'ru',
      en: 'en'
    },
    image: 'url',
    price: 100,
    slug: 'manti'
  }
}

this.find = {
  request: {
  },
  response: {
    lunches: [
      {
        id: 'e89b2122-b039-4642-a332-d420d62d21fa',
        _id: 'e89b2122-b039-4642-a332-d420d62d21fa',
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

this.delete = {
  request: {
    id: 'e89b2122-b039-4642-a332-d420d62d21fa'
  },
  response: {
    deletedCount: 1
  }
}
