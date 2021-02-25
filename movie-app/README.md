# Project-3
## Movie App


[Link to Movie App](couchslothmovies.surge.sh)


[Link to git repository](https://github.com/ackottsi/React_Project_Three)

---
#### Motivation:


---
#### Objective Level 1 (MVP) (complete):
- [x] create a pre-defined list of movies for api pull
- [x] pull api info for each movie and create list view
- [x] create routes and links to display separate views for each movie
- [x] minimal styling (no images)

#### Objective Level 2 (partially complete):
* [ ] ratings/likes functionality
* [ ] comments functionality
* [x] user login
* [x] improved styling (colored backgrounds, text, and different font styles)

#### Objective Level 3 (partially complete):
* [x] movie search functionality
* [ ] multiple users with login required
* [x] improved styling (movie "cards", improved layout, animations)

---
#### Wireframe

##### Page Layout and Website Flow

 * basic structure

    ![basic structure](https://i.imgur.com/LpKhx6S.png)

 * bronze level wireframe

    ![bronze level wireframe](https://i.imgur.com/Laf9ECm.png)

 * silver level wireframe

    ![silver level wireframe](https://i.imgur.com/6p5wT5g.png)

 * header wireframe

    ![header wireframe](https://i.imgur.com/jrYMvuy.png)

 * footer wireframe

    ![footer wireframe](https://i.imgur.com/5NUlAMe.png)


---

#### Technology used:
* HTML, CSS, JavaScript
* React
* github - used for revision control
* Surge - used for deployment.

---

#### Main features:
* List of features
 * display list of items
 * links and routes to detailed item views
 * search functionality

---

#### Code snippet:
This allows for the addition or the removal of horses/trainers:
```
if(req.body.addOrRemove == "add") {
    Trainer.update(req.body, {
        where: {id: req.params.index},
        returning: true
    })
```
.....
```
else {
  Trainer.update(req.body, {
    where: {id: req.params.index},
    returning: true
```

---

#### User stories:
* As a Horse Farm Manager, I want to know who is training which horse.


---

#### Room for improvement:
1. Add a task list for each trainer with priority value.
