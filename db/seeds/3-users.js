
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id:1, first_name: '', 'last_name': '', 'email': '', 'password':'', admin: false},
        {id:6, first_name: 'paperless', 'last_name': 'admin', 'email': 'admin', 'password':'admin', admin: true},
        {id:2, first_name: 'Melvin', 'last_name': 'Barbosa', 'email': 'email@email.com', 'password':'12345',admin: false},
        {id:3, first_name: 'Cherie', 'last_name': 'Simkins', 'email': 'email@gmail.com', 'password':'12345',admin: false},
        {id:4, first_name: 'Amanda', 'last_name': 'Railey', 'email': 'test@test.com', 'password':'12345',admin: false},
        {id:5, first_name: 'Lisa', 'last_name': 'Garcia', 'email': 'test@gmail.com', 'password':'12345',admin: false},
      ]);
    });
};
