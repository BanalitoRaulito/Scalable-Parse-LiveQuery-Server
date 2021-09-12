import {useEffect, useState} from "react";

export const Todos = ({query}) => {
  useEffect(() => {
    query.find().then(results => {
      setTodos(results)
      setLoading(false)
    })
  }, [])

  const [loading, setLoading] = useState(true)
  const [todos, setTodos] = useState("")

  return loading ? <div>Loading...</div> : (
    <ul>
      { todos.map(todo => (
        <li key={todo.id}>{todo.attributes.title}</li>
      ))}
    </ul>
  )
}
