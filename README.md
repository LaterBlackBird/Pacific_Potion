![Site Preview](/public/images/site-preview.png)
# Pacific Potion

## Explanation
A clone of GoodReads.com that holds a database of D&D potions that users can search and make comments on built using NodeJs, PostgreSQL, Sequel, & Express.

## Dev Environment Setup
Environment file can be created using .env.example file, npm install will install all required dependencies, and using postgresql/sequelize to create database and user.  `npm start` will initialize the app.

## Link to Live Site
https://pacific-potion.herokuapp.com/

## Wiki Docs
### Feature list document
https://github.com/le-as-a/jspy-grp-express/wiki/MVP-Feature-List
### User Stories
https://github.com/le-as-a/jspy-grp-express/wiki/User-Stories
### Database Schema
https://github.com/le-as-a/jspy-grp-express/wiki/Database-Schema
### Frontend Routes
https://github.com/le-as-a/jspy-grp-express/wiki/Frontend-Routes
### API Documentation
https://github.com/le-as-a/jspy-grp-express/wiki/API-Documentation

## Feature Highlight
### Potions
Each potion has a dedicated details page showing an image with distinct coloring based on potion type, a name, potion, type, and description.  Potions can be viewed by all site visitors, but can only be interacted with by authenticated users.  

### Comments
Each potion page has a comments section related to that specific potion.  Logged in users can add, edit, or delete their comments from the page.  Comments can be viewed by all visitors regardless of authentication.

### Search
From the home screen or all pages, can search by potion name.  Searching an empty field returns all potions.  Potion type filtering can be performed from the search results page.  The search feature can be accessed by all visitors.

### Demo
Visitors wishing to access all site features granted to logged in users can use the 'Demo' button to bypass the signup/login process.

## Challenges
### AJAX requests
  - Using AJAX in a real world application proved more difficult than implementing in a controlled educational environment.
    - All persons worked together to find the solution breaking down the problems and resolving one section at a time.

## Code Highlight
### AJAX resolution
#### Frontend
```js
async function postNewComment(url = '', data) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "comm": data })
    });
    return response.json(); // returns a promise
};

window.addEventListener('DOMContentLoaded', event => {
    const addCom = document.querySelector('.commentSubmit');

    addCom.addEventListener('click', postComment);

    async function postComment(e) {
        const potionId = e.target.id;
        const newComment = document.getElementById('commentInput');
        const response = await postNewComment(`/potions/${potionId}`, newComment.value);
```
#### Backend
```js
router.post('/:id(\\d+)', asyncHandler(async (req, res, next) => {
  const { userId } = req.session.auth;
  const users = await db.User.findByPk(userId);
  const comment = await db.Comment.create({
    comment: req.body.comm,
    user_id: userId,
    potion_id: req.params.id
  });
  res.json({ "comm": comment, "users": users });
}));
```


