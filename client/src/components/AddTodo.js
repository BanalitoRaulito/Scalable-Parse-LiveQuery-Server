import {useState} from "react"
import { addTodo } from "../utils/addTodo"
import { todoObject } from "../utils/initialize"

export const AddTodo = () => {
    const [todo, setTodo] = useState("")

    return (
        <div className="card m-3">
            <input
                onInput={e => setTodo(e.target.value)}
                value={todo}
            />

            <button
                onClick={() => {
                    addTodo(todo, todoObject).then(() => {
                        setTodo("")
                    })
                }}
            >
                Add todo
            </button>
        </div>
    )
}
