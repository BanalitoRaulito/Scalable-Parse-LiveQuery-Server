import {useState} from "react"
import { addTodo } from "../utils/addTodo"

export const AddTodo = ({todoObject}) => {
    const [todo, setTodo] = useState("")

    return (
        <div>
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
