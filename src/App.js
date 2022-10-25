import React, {useState}from 'react';
import './App.css';
import List from './component/list';
import value from './data'
function App() {
  const [people,setPeople] = useState(value)
  const clear  =()=>{
    setPeople([])
  }
  return (
    <React.Fragment>
    <section className='container'>
      <h2 className='today'>0 Birthdays Today</h2>
        {people.map((item)=>{
          return <List value={item}/>
        })}
        <button className='btn' onClick={clear}>Clear all</button>
    </section>
    </React.Fragment>
  );
}

export default App;
