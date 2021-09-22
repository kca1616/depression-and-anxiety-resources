import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { baseURL, config } from './services';
import { Route } from 'react-router-dom';


function App() {
  const [resources, setResources] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const getResources = async() => {
      const response = await axios.get(baseURL, config);

      setResources(response.data.records);
    }
    getResources();

  }, [toggleFetch]);

  return (
    <div className="App">
      {/* <Navbar /> */}
      <Route exact path='/'>
        <main>
          <h1>Depression and Anxiety Resources</h1>
        </main>
      </Route>

      
    </div>
  );
}

export default App;
