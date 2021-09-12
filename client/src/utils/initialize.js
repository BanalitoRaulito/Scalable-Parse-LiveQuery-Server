import Parse from "parse";

export const initialize = () => {
    Parse.initialize('myAppId')
    Parse.serverURL = 'http://localhost:1337/parse' // Parse Server url
    Parse.liveQueryServerURL = 'ws://localhost:5000'

    const client = new Parse.LiveQueryClient({
        applicationId: 'myAppId',
        serverURL: 'ws://localhost:5000', // LiveQuery Server url
    })

    client.open()
    const todoObject = Parse.Object.extend('Todos')
    const query = new Parse.Query(todoObject)
    const subscription = client.subscribe(query)

    const todo = new todoObject()
    todo.set('title', 'newTitle2')
    todo.save()

    subscription.on('create', todo => {
        console.log('On create event', todo)
    })

    subscription.on('error', todo => {
        console.log('Error on create event', todo)
    })

    client.on('open', () => {
        console.log('connection opened');
    });
    client.on('error', (error) => {
        console.log('connection error' +error);
    });

    return {query, todoObject}
}
