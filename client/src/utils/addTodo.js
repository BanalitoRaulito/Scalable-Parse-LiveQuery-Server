import Parse from "parse"

export const addTodo = async (title) => {
    const Todo = Parse.Object.extend('Todo')
    const todo = new Todo();
    todo.set('title', title);
    todo.save()
        .then(() => console.log('New title added', todo))
        .catch(() => console.log('error adding todo', todo));
}
