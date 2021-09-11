import {useEffect, useState} from "react";
import Parse from "parse"

export const useTodos = () => {
  useEffect(() => {
    Parse.initialize('myAppId')
    Parse.serverURL = 'http://localhost:1337/parse'
    Parse.liveQueryServerURL = 'ws://localhost:5000'

    const client = new Parse.LiveQueryClient({
      applicationId: 'myAppId',
      serverURL: 'ws://localhost:5000', // Example: 'wss://livequerytutorial.back4app.io'
      javascriptKey: ''
    })

    client.open()
    const Todo = Parse.Object.extend('Todo')
    const query = new Parse.Query(Todo)
    const subscription = client.subscribe(query)

    const todo = new Todo()
    todo.set('title', 'newTitle2')
    todo.save()

    query.find().then(results => {
      setTodos(results)
      setLoading(false)
    })

    subscription.on('create', todo => {
      console.log('On create event', todo)
    })

    client.on('open', () => {
      console.log('connection opened');
    });
    client.on('error', (error) => {
      console.log('connection error' +error);
    });

    return () => {
      client.close()
    }
  }, [])

  const [loading, setLoading] = useState(true)
  const [todos, setTodos] = useState([])

  return { todos, loading }
}
