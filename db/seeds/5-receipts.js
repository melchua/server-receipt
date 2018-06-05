
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('receipts').del()
    .then(function () {
      // Inserts seed entries
      return knex('receipts').insert([
        {id: 1, location: "T&T", total: 200, date: "5/12/18", user_id: 2, project_id: 1, description: "Hot day so I got a milk tea",
        image_url: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
        category_id: 1, status_id: 1},
        {id: 2, location: "McDonalds", total: 1200, date: "4/21/18", user_id: 2, project_id: 1, description:"Can't say no to dollar drinks",
        image_url: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
        category_id: 1, status_id: 2},
        {id: 3, location: "Tim Hortons", total: 10000, date: "4/12/18", user_id: 2, project_id: 1, description:"double double all day",
        image_url: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
        category_id: 1, status_id: 3},
        {id: 4, location: "Lighthouse", total: 1000000, date: "4/8/18", user_id: 2, project_id: 1, description:"learning how to code is very expensive",
        image_url: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
        category_id: 2, status_id: 2},
        {id: 5, location: "T&T", total: 200, date: "5/12/18", user_id: 2, project_id: 1, description: "Hot day so I got a milk tea",
        image_url: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
        category_id: 1, status_id: 1},
        {id: 6, location: "McDonalds", total: 1200, date: "4/21/18", user_id: 2, project_id: 1, description:"Can't say no to dollar drinks",
        image_url: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
        category_id: 1, status_id: 2},
        {id: 7, location: "Tim Hortons", total: 10000, date: "4/12/18", user_id: 2, project_id: 1, description:"double double all day",
        image_url: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
        category_id: 1, status_id: 3},
        {id: 8, location: "Lighthouse", total: 1000000, date: "4/8/18", user_id: 2, project_id: 1, description:"learning how to code is very expensive",
        image_url: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
        category_id: 2, status_id: 2},
        {id: 9, location: "T&T", total: 200, date: "5/12/18", user_id: 2, project_id: 1, description: "Hot day so I got a milk tea",
        image_url: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
        category_id: 1, status_id: 1},
        {id: 10, location: "McDonalds", total: 1200, date: "4/21/18", user_id: 2, project_id: 1, description:"Can't say no to dollar drinks",
        image_url: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
        category_id: 1, status_id: 2},
        {id: 11, location: "Tim Hortons", total: 10000, date: "4/12/18", user_id: 2, project_id: 1, description:"double double all day",
        image_url: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
        category_id: 1, status_id: 3},
        {id: 12, location: "Lighthouse", total: 1000000, date: "4/8/18", user_id: 2, project_id: 1, description:"learning how to code is very expensive",
        image_url: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
        category_id: 2, status_id: 2},

      ]);
    });
};
