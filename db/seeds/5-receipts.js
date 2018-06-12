
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('receipts').del()
    .then(function () {
      // Inserts seed entries
      return knex('receipts').insert([
        {location: "T&T", total: 220, date: "5/12/18", user_id: 3, project_id: 1, description: "Hot day so I got a milk tea",
        image_url: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
        category_id: 1, status_id: 1},
        {location: "McDonalds", total: 1250, date: "4/21/18", user_id: 4, project_id: 2, description:"Can't say no to dollar drinks",
        image_url: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
        category_id: 2, status_id: 2},
        {location: "Tim Hortons", total: 1300, date: "4/12/18", user_id: 5, project_id: 3, description:"double double all day",
        image_url: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
        category_id: 3, status_id: 3},
        {location: "Lighthouse", total: 100, date: "4/8/18", user_id: 6, project_id: 3, description:"learning how to code is very expensive",
        image_url: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
        category_id: 1, status_id: 2},
        {location: "T&T", total: 220, date: "5/12/18", user_id: 4, project_id: 2, description: "Hot day so I got a milk tea",
        image_url: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
        category_id: 2, status_id: 1},
        {location: "McDonalds", total: 1200, date: "4/21/18", user_id: 5, project_id: 1, description:"Can't say no to dollar drinks",
        image_url: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
        category_id: 3, status_id: 2},
        {location: "Tim Hortons", total: 125, date: "4/12/18", user_id: 3, project_id: 1, description:"double double all day",
        image_url: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
        category_id: 1, status_id: 3},
        {location: "Lighthouse", total: 550, date: "4/8/18", user_id: 6, project_id: 2, description:"learning how to code is very expensive",
        image_url: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
        category_id: 2, status_id: 2},
        {location: "Tim Hortons", total: 1300, date: "4/12/18", user_id: 5, project_id: 3, description:"double double all day",
        image_url: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
        category_id: 3, status_id: 3},
        {location: "Lighthouse", total: 100, date: "4/8/18", user_id: 3, project_id: 3, description:"learning how to code is very expensive",
        image_url: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
        category_id: 1, status_id: 2},
        {location: "T&T", total: 220, date: "5/12/18", user_id: 4, project_id: 2, description: "Hot day so I got a milk tea",
        image_url: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
        category_id: 2, status_id: 1},
        {location: "McDonalds", total: 1200, date: "4/21/18", user_id: 6, project_id: 1, description:"Can't say no to dollar drinks",
        image_url: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
        category_id: 3, status_id: 2},
        {location: "Tim Hortons", total: 1300, date: "4/12/18", user_id: 5, project_id: 3, description:"double double all day",
        image_url: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
        category_id: 3, status_id: 3},
        {location: "Lighthouse", total: 100, date: "4/8/18", user_id: 3, project_id: 3, description:"learning how to code is very expensive",
        image_url: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
        category_id: 1, status_id: 2},
        {location: "T&T", total: 220, date: "5/12/18", user_id: 4, project_id: 2, description: "Hot day so I got a milk tea",
        image_url: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
        category_id: 2, status_id: 1},
        {location: "McDonalds", total: 1200, date: "4/21/18", user_id: 6, project_id: 1, description:"Can't say no to dollar drinks",
        image_url: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
        category_id: 3, status_id: 2},
      ]);
    });
};
