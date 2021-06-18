import { makeAutoObservable } from "mobx"

export interface Todo {
   id: number
   text: string
   done: boolean
}

const addTodoAction = (todos: Array<Todo>, text: string): Array<Todo> => [
   ...todos,
   {
      id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
      text,
      done: false
   }
]

/* const removeTodoAction = (todos: Array<Todo>, id: number): Array<Todo> =>
   todos.filter((todo) => todo.id !== id)
 */

class Store {
   todos: Array<Todo> = []
   newTodo: string = ''
   deleteTodoId: number | null = null

   constructor() {
      makeAutoObservable(this)
   }

   addTodo() {
      this.todos = addTodoAction(this.todos, this.newTodo)
      this.newTodo = '';
   }

   /* removeTodoAction() {
      this.todos = removeTodoAction(this.todos, this.deleteTodoId)
   } */
}

const store = new Store()
export default store