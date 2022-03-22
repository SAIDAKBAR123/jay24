// const NAMESPACE = 'user'

this.create = {
  request: {
    name: 'name',
    login: 'login',
    password: 'password',
    phone_number: '+998977509532',
    type: 'staff'
  },
  response: {
    id: 'id',
    name: 'name',
    login: 'login',
    password: 'password',
    phone_number: '+998977509532',
    type: 'staff'
  }
}

this.update = {
  request: {
    id: 'id',
    name: 'name',
    login: 'login',
    password: 'password',
    phone_number: '+998977509532',
    type: 'staff'
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
    id: 'id'
  },
  response: {
    id: 'id',
    name: 'name',
    login: 'login',
    password: 'password',
    phone_number: '+998977509532',
    type: 'staff'
  }
}

this.find = {
  request: {

  },
  response: {
    users: [
      {
        id: 'id',
        name: 'name',
        login: 'login',
        password: 'password',
        phone_number: '+998977509532',
        type: 'staff'
      }
    ]
  }
}

this.updateLoginPassword = {
  request: {
    id: 'id',
    login: 'login',
    password: 'password'
  },
  response: {
    acknowledged: true,
    modifiedCount: 1,
    upsertedId: null,
    upsertedCount: 0,
    matchedCount: 1
  }
}

this.login = {
  request: {
    login: 'login',
    password: 'password'
  },
  response: {
    login: true,
    user: {
      id: 'id',
      name: 'name',
      login: 'login',
      password: 'password',
      phone_number: '+998977509532',
      type: 'staff'
    }
  }
}

this.delete = {
  request: {
    id: 'id'
  },
  response: {
    deletedCount: 1
  }
}
