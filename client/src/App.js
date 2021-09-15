import { Todos } from './components/Todos';
import { AddTodo } from './components/AddTodo';
import './App.css';

export const App = () => {
    return <>
        <AddTodo />
        <Todos />
    </>
}
