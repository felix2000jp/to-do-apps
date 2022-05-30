# To Do Apps
Whenever I feel like trying a new framework this is the app I first build so I can have a good sende how things work. At the moment I have done it with express (using ejs), flask (with jinja2) and django (with django's templating language).

## The App
Because this is something that will be done with 3 different tools, i wanted to make something as simple as possible, and for that purpose there is no better app than a To Do List. There is a reason why most online tutorials use it as first project example, it has create, read, update and delete (CRUD) functionalities,and at the same time it implements them in a very straightforward way. A To Do List would allow me to get a taste of the basic workflow of each one of these frameworks rather quickly.

![Screenshot](https://github.com/felix2000jp/to-do-apps/blob/main/public/todo.png)

The To Do List is just a single page that shows a table with all the tasks you have created and their status. You can change the status of any task from finished (True) to not finished (False) and vice versa (note that this is the only thing you can update about a task, you cannot change it's name). You can also delete any task. Creating a task requires only you give it a name since it's status defaults to False (not finished).

Because the goal here is to compare only django, flask and express, no front-end frameworks (like react) were used, jinja2 was used with django and flask and ejs with express. I also used bootstrap 5.2 because it makes the page presentable very easily and fast.
