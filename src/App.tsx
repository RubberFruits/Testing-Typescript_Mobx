import React from 'react';
import './App.scss';
import { v4 as uuidv4 } from 'uuid';
import { observer } from 'mobx-react';
import store from './store/store';

const App: React.FC = observer(() => {

  const app: string = uuidv4();

  return (
    < >
      <section className="hero has-background-primary-dark is-fullheight">
        <div className="hero-body">
          <div className="">
            <p className="title has-text-primary-light">
              Fullheight hero{app}
            </p>
            <button className='button is-primary mr-6'>decrement</button>
            <button className='button is-primary'>increment</button>
            <p className="subtitle has-text-primary-light">
              Fullheight subtitle
            </p>
          </div>
        </div>
      </section>
    </>
  );
})

export default App;
