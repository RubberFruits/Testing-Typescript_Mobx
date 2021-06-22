import React from 'react'
import todo from '../../store/todo'
import counter from '../../store/miniStores/counter'
import Todos from './Todos';
import { observer } from 'mobx-react'

const ContainerTodo: React.FC = observer(() => {
   return (
      <Todos
         counter={counter.count}
         incrementCount={counter.increment}
         decrementCount={counter.decrement}
         todos={todo.todos}
         addTodo={todo.addTodo}
         removeTodo={todo.removeTodo}
      />
   )
})

export default ContainerTodo