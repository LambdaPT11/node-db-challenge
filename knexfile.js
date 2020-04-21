// Update with your config settings.
// settings updated. database / migration and seed folders

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/db_proj.db3'
    },
    
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
    useNullAsDefault: true,
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      },
    },
  },
};
