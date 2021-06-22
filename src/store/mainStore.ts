import CounterStore from "./miniStores/counter"
import TodoStore from './miniStores/todo'

class MainStore {
   counterStore: CounterStore
   todoStore: TodoStore

   constructor() {
      this.counterStore = new CounterStore()
      this.todoStore = new TodoStore()
   }
}

export default MainStore