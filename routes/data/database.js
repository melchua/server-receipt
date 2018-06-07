const pg = require("pg");
const settings = require("./settings");

const knex = require('knex')({
  client: 'pg',
  version: '7.2',
  connection: {
    user: settings.user,
    password: settings.password,
    database: settings.database,
    host: settings.hostname,
  }

});

const returningReceipts = (user_id) => {
  return knex.raw(`
      select r.category_id, r.user_id, r.status_id, r.total, r.location, r.date, r.description, r.id, r.image_url,
      u.first_name, u.last_name, u.email,
      c.cat_name, s.status_name, p.project_name
      from receipts r
      inner join users u on u.id = r.user_id
      inner join categories c on c.id = r.category_id
      inner join statuses s on s.id = r.status_id
      inner join projects p on p.id = r.project_id
      where r.user_id = ${user_id}
      ;`);
};

const returnAllReceipts = () => {
  return knex.raw(`
      select r.category_id, r.user_id, r.status_id, r.total, r.location, r.date, r.description, r.id, r.image_url,
      u.first_name, u.last_name, u.email,
      c.cat_name, s.status_name, p.project_name
      from receipts r
      inner join users u on u.id = r.user_id
      inner join categories c on c.id = r.category_id
      inner join statuses s on s.id = r.status_id
      inner join projects p on p.id = r.project_id
      ;`);
};

// gets a list of all projects
const returnProjectList = () => {
  return knex('projects').select('id', 'project_name');
};

const returningUsers = (userId) => {
  return knex('users').where('id', userId);
};

const insertReceipt = (phoneResObj) => {
  let total = Number(phoneResObj.total) * 100;
  return knex('receipts').insert({
    location: phoneResObj.location,
    total: total,
    date: phoneResObj.date,
    user_id: phoneResObj.user_id,
    project_id: phoneResObj.project_id,
    description: phoneResObj.description,
    image_url: phoneResObj.image_url,
    category_id: phoneResObj.category_id,
    status_id: 1,
  });
};

const validateLogin = (email, password) => {
  return knex('users')
    .where({
      email: email,
      password: password
    })
    .select('id', 'admin', 'first_name', 'last_name');
};

exports.returningReceipts = returningReceipts;
exports.returningUsers = returningUsers;
exports.insertReceipt = insertReceipt;
exports.validateLogin = validateLogin;
exports.returnProjectList = returnProjectList;
exports.returnAllReceipts = returnAllReceipts;
