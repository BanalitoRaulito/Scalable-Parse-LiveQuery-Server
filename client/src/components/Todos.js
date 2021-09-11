import { useTodos } from "../hooks/useTodos"

export const Todos = () => {
  const { todos, loading } = useTodos()

  return loading ? <div>Loading...</div> : (
    <ul>
      { todos.map(todo => (
        <li key={todo.id}>{todo.attributes.title}</li>
      ))}
    </ul>
  )
}
