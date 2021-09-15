import {useEffect, useState} from "react";
import { query } from "../utils/initialize";

export const Todos = () => {
    useEffect(() => {
        query.find().then(results => {
            setTodos(results)
            setLoading(false)
        })
    }, [])

    const [loading, setLoading] = useState(true)
    const [todos, setTodos] = useState("")

    return loading ? <div>Loading...</div> : (
        <div className="card m-3">
            <ul>
                { todos.map(todo => (
                    <li key={todo.id}>{todo.attributes.title}</li>
                ))}
            </ul>
        </div>
    )
}
