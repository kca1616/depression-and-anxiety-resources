import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { baseURL, config } from './services';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Resource from './components/Resource.jsx';
import Form from './components/Form.jsx';


function App() {
  const [resources, setResources] = useState([]);
  

  useEffect(() => {
    const getResources = async() => {
      const response = await axios.get(baseURL, config);
      

      setResources(response.data.records);
    }
    getResources();
  },);

  return (
    <div className="App">
      <Navbar />
      <Route exact path='/'>
        <div className="home">
          <h1>Greener Living Resource Hub</h1>
        </div>
      </Route>
      <Route path ='/resources'>
        <main>
          {resources.map((resource) => (
            <Resource key={resource.id} resource={resource}/>
          ))}
        </main>
      </Route>
      <Route path ='/new'>
            <Form />
      </Route>

      
    </div>
  );
}

export default App;
