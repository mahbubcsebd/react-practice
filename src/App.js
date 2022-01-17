import React from 'react';
import Card from './components/Card';


function App(){
  return   <div className='container'>
  <Card title="My Card 1" desc="This is description no 1" />
  <Card title="My Card 2" desc="This is description no 2" />
  <Card title="My Card 3" desc="This is description no 3" />
  <Card title="My Card 4" desc="This is description no 4" />
  <Card title="My Card 5" desc="This is description no 5" />
  <Card title="My Card 6" desc="This is description no 6" />
</div>;
}

export default App;