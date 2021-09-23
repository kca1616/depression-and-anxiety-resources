import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { baseURL, config } from './services';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Resource from './components/Resource.jsx';


function App() {
  const [resources, setResources] = useState([]);
  

  useEffect(() => {
    const getResources = async() => {
      const response = await axios.get(baseURL, config);
      console.log(response.data.records);

      setResources(response.data.records);
    }
    getResources();
  },);

  return (
    <div className="App">
      <Navbar />
      <Route exact path='/'>
        <div>
          <h1>Greener Living Resources</h1>
        </div>
      </Route>
      <Route path ='/resources'>
        <main>
          {resources.map((resource) => (
            <Resource />
          ))}
        </main>
      </Route>
      <Route path ='/new'>

      </Route>

      
    </div>
  );
}

export default App;
