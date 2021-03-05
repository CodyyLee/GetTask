import React from 'react';

//data import
import store from './store/store';

//component imports
import Navigation from './components/navigation/Navigation';
import Tasks from './components/tabs/Tasks';
import Settings from './components/tabs/Settings';

function App() {
  return (
    <div className="App">
      <Navigation />
    </div>
  );
}

export default App;
