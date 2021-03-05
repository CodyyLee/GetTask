import React, { useState } from 'react';
import store from './store/store';

//component imports
import Navigation from './components/navigation/Navigation';

export const AppContext = React.createContext(store)

function App() {

  const [data, setData] = useState(store);
  const value = { data, setData };

  return (
    <div className="App">
      <AppContext.Provider value={value}>
        <Navigation />
      </AppContext.Provider>
    </div>
  );
}

export default App;
