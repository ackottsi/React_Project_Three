# Project-3 (3)
## Movie App (3)


[Link to Movie App](Movie-App1-AndyBillEricHector.surge.sh)


[Link to git repository](https://github.com/ackottsi/React_Project_Three) (3)

---
#### Motivation:
Develop an application for Horse Farms to help manage the business.  Include features to track horses and trainers also the horses they train.  Include a centralized database, sign-in, login security.

---
#### Objective Level 1 (MVP) (complete): (3)
- [x] create a pre-defined list of movies for api pull
- [x] pull api info for each movie and create list view
- [x] create routes and links to display separate views for each movie
- [x] minimal styling (no images)

#### Objective Level 2 (partially complete): (3)
* [ ] ratings/likes functionality
* [ ] comments functionality
* [ ] user login
* [ ] improved styling (colored backgrounds, text, and different font styles)

#### Objective Level 3 (partially complete): (3)
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

#### Technology used: (3)
* HTML, CSS, JavaScript
* React
* github - used for revision control
* Surge - used for deployment.

---

#### Main features: (3)
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
* As a Horse Farm Owner, I want to have a functional website for my customers.
* As a Trainer, I want to know which horse my boss wants me to train.
* As an owner, I want to see who is training my horses, using website on my
 phone would be awesome.
* As a Horse Trainer, I want to know which horses to focus on.
* I am thinking about having a horse trained at this Farm and what to learn about
 trainers and which horses they are training.
* I found out this Fancy Horse Farm has a cool web site to keep track of
 horses and trainers.
* As a Horse Farm Owner, I want to keep track of the horses and trainers
 my manager has assigned.
* Anyone associated with this Farm would like to see pictures of the horses and
 their Trainers.
* As a Farm Manager I would like to be able to maintain a current list of horses and trainers on the farm.

---

#### Room for improvement:
1. Add a task list for each trainer with priority value.
2. Add an activity schedule list for each horse.
3. New page to display horse activities and trainer tasks with completion date.
