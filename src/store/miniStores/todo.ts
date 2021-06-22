import { makeAutoObservable } from "mobx"
import { v4 as uuidv4 } from 'uuid';

export type TodoType = {
   id: string
   text: string
   done: boolean
}

class TodoStore {
   todos: Array<TodoType> = [
      { id: uuidv4(), text: 'Hi', done: false },
      { id: uuidv4(), text: 'Hello', done: false }
   ]

   constructor() {
      makeAutoObservable(this)
   }

   addTodo(todo: TodoType) {
      this.todos.push(todo)
   }

   removeTodo(id: string) {
      this.todos = this.todos.filter(todo => todo.id !== id)
   }
}

export default TodoStore