## Frontend URL 
`https://periscope-assignment.vercel.app/`

### Tech Stack - 
``` 
NextJS
TypeScript
Tailwind CSS
Context API

```
### Feature
```
Side bar will show all the menu items like groups, deashbaord and so on. 
Table's row can be clicked and its detail view can be seen in side panel.

```



## Backend URL
(The backend can be slow initially due to a cold start.)
`https://periscope-zjyn.onrender.com/api`

### Tech Stack - 
```
ExpressJS
TypeScript
ZOD
Prisma as ORM (for PostgreSQL)
Supabase for database

```
### Detail
```
Backend has three main parts Users, Groups & Labels. And they all are connected to each other.

```
### Backend all routes

```
1. Users

To create a user & get all users
https://periscope-zjyn.onrender.com/api/user

To update, delete and get a single suer
https://periscope-zjyn.onrender.com/api/user/:id

2. Groups

To create group based on a user
https://periscope-zjyn.onrender.com/api/groups/:userid

To get all groups based on user
https://periscope-zjyn.onrender.com/api/groups/user/:userid

To delete, update & get a single group
https://periscope-zjyn.onrender.com/api/groups/:id

3. Labels

To create label based on a group
https://periscope-zjyn.onrender.com/api/labels/:groupid

To get all labels based on group
https://periscope-zjyn.onrender.com/api/labels/group/:groupid

To delete, update & get a single label
https://periscope-zjyn.onrender.com/api/labels/:id

```







