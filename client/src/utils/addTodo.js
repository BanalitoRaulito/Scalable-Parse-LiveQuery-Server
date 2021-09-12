export const addTodo = async (title, todoObject) => {
    const todo = new todoObject()

    todo.set('title', title);
    todo.save()
        .then(() => console.log('New title added', todo))
        .catch(() => console.log('error adding todo', todo));
}
