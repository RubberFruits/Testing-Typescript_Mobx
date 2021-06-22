import { TodoType } from '../../store/todo'

interface Props {
   todos: Array<TodoType> | []
   addTodo: (todo: TodoType) => void
   removeTodo: (id: string) => void
   counter: number
   incrementCount: () => void
   decrementCount: () => void
}

const Todos: React.FC<Props> = (props) => {

   const plusCount = (): void => {
      debugger;
      props.incrementCount();
   }


   return (
      <section className="hero has-background-primary-dark is-fullheight">
         <div className="hero-body">
            <div className="">
               <p className="title has-text-primary-light">
                  Counter : {props.counter}
               </p>
               <button onClick={() => props.decrementCount()} className='button is-primary mr-6'>decrement</button>
               <button onClick={() => plusCount()} className='button is-primary'>increment</button>
               <p className="subtitle has-text-primary-light">
                  Todo section
               </p>
            </div>
         </div>
      </section>
   )
}

export default Todos