{
    //asynchronous Typescript

    type Todo = {
        userId: number,
        id: number,
        title: string,
        completed: boolean
    }

    const singleTodo = async (): Promise<Todo> => {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const data = await res.json()
        return data
    }

    const todo = singleTodo()
    console.log(todo)

    // const createPromise = ()=>{
    //     return new Promise(())
    // }
}