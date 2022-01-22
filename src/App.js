import React from 'react';
import Card from './components/Card';
import State from './components/State';
import EVENT_HANDLER_CLASS from './components/EVENT_HANDLER_CLASS/Index'


function App(){
  return (
    <div className='container'>
      {/* Card */}
      <div className="box-1">
        <Card title="My Card 1" desc="This is description no 1" />
        <Card title="My Card 2" desc="This is description no 2" />
        <Card title="My Card 3" desc="This is description no 3" />
        <Card title="My Card 4" desc="This is description no 4" />
        <Card title="My Card 5" desc="This is description no 5" />
        <Card title="My Card 6" desc="This is description no 6" />
      </div>
      {/* Counter */}
      <div className="box-2">
        <State />
      </div>

      {/* OnChange Event */}
      <div className="box-3">
        <EVENT_HANDLER_CLASS/>
      </div>
    </div>
  )

  
}

export default App;