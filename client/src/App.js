import { Todos } from './components/Todos';
import { AddTodo } from './components/AddTodo';
import {initialize} from "./utils/initialize";
import './App.css';

export const App = () => {
    const {query, todoObject} = initialize()

    return <>
        <AddTodo todoObject={todoObject}/>
        <Todos query={query} />
    </>
}
