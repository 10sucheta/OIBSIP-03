# OIBSIP-03

A BASIC TO-DO WEBAPP This is my third project for my internship at OASIS  INFOBYTE, where I created a responsive TO-DO WEBAPP using HTML, CSS, and JavaScript.

The HTML structure consists of a header with the title "To-Do List WebApp" and a main container divided into two sections: the left section for adding tasks and the right section for displaying pending and completed tasks.
In the left section, there is a box with two input fields for task title and description, and an "Add Task" button. When the button is clicked, the `addTask` function is called.
The `addTask` function retrieves the values from the input fields, validates the task title, and creates a task summary element. This element includes the task title, description, current date and time, and buttons for marking the task as done, editing the task, and deleting the task.
The task summary element is appended to the "Pending Tasks" section in the right section of the container.
There are three additional functions: `markDone`, `editTask`, and `deleteTask`. `markDone` moves a task to the "Completed Tasks" section when its "Done" button is clicked. `editTask` allows the user to edit the task title and description by prompting for new values. `deleteTask` removes a task when its "Delete" button is clicked
Finally, there are event listeners attached to the task title and description input fields to detect the "Enter" key press and call the `addTask` function, allowing the user to add a task by pressing "Enter" in these fields.

Overall, this web app provides basic functionality for managing a to-do list, including adding, completing, editing, and deleting tasks.
