import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import Inpt from './components/Input/Input';
import MyComponent from './components/MyComponent';
import ShowHideComp from './components/ShowHideComp';
import Form from './components/Form';
import List from './components/List';

function App() {

  const [initial_counter, setInitialCounter] = useState(100)
  const phrase = 'Initial Phrase'

  return (
    <div className='App'>
      <List />
    </div>
  )
}

export default App;


// return (
//   <div className="App">
//     <ShowHideComp init_count={initial_counter} />
//     {/* <Counter init_count={initial_counter} phrase={phrase} /> */}
//     <MyComponent />
//     <Inpt />
//   </div>
// );