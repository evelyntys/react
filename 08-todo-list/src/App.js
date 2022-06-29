import React from 'react';
import TaskList from './TaskList';
//for css, if import in app.js, will apply to all components
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <React.Fragment>
      <div className='container'>
    <TaskList/>
    </div>
    </React.Fragment>
  );
}

export default App;
