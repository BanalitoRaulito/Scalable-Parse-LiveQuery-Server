import { useState } from "react"
import { addTodo } from "../utils/addTodo"

export const AddTodo = () => {
  const [todo, setTodo] = useState("")
  const [loading, setLoading] = useState(false)

  return (
    <div>
      <button
        onClick={() => {
          setLoading(true)
          addTodo(todo).then(() => {
            setLoading(false)
            setTodo("")
          })
        }}
        disabled={loading}
      >
        Add todo
      </button>
      <input
        onInput={e => setTodo(e.target.value)}
        value={todo}
        disabled={loading}
      />
    </div>
  )
}
