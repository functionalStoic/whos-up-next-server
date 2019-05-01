module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'jasonsooter',
      password: 'FutureJasonIsAwesome'
    },
    useNullAsDefault: true,
    migrations: {
      tableName: 'migrations'
    }
  },
  production: {
    client: 'pg',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'migrations'
    }
  }
};
