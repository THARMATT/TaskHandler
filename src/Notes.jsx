import React, { createContext, useContext, useState } from 'react';

// Step 1: Create a Context
const MyContext = createContext();

// Step 2: Create a Context Provider
const MyContextProvider = ({ children }) => {
  // State to be shared via the context
  const [data, setData] = useState('Initial data');

  return (
    <MyContext.Provider value={{ data, setData }}>
      {children}
    </MyContext.Provider>
  );
};

// Step 3: Create a Component that Consumes the Context
const MyComponent = () => {
  // Step 4: Use the useContext hook to access the context
  const { data, setData } = useContext(MyContext);

  return (
    <div>
      <p>Data from context: {data}</p>
      <button onClick={() => setData('Updated data')}>Update Data</button>
    </div>
  );
};

// Step 5: Wrap your App with the Context Provider
function App() {
  return (
    <MyContextProvider>
      <div className="App">
        <h1>Using the Context API</h1>
        <MyComponent />
      </div>
    </MyContextProvider>
  );
}

export default App;
