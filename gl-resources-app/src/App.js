import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { baseTipsURL, baseURL, config } from './services';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Resource from './components/Resource.jsx';
import Form from './components/Form.jsx';
import Tip from './components/Tip.jsx';
import TipForm from './components/TipForm';


function App() {
  const [resources, setResources] = useState([]);
  const [tips, setTips] = useState([]);
  

  useEffect(() => {
    const getResourcesAndTips = async() => {
      const response = await axios.get(baseURL, config);
      const tipsResponse = await axios.get(baseTipsURL, config);
      

      setResources(response.data.records);
      setTips(tipsResponse.data.records);
    }
    getResourcesAndTips();
  },[]);

  return (
    <div className="App">
      <Navbar />
      <Route exact path='/'>
        <div className="topOfPage" id="hometop">
          <h1>Sustainable Living Resource Hub</h1>
        </div>
        <div className="homeDesc">
          <img className="resize" src="https://i.imgur.com/1OHbEaK.jpeg" alt="Reusable bag and oranges"/>
          <p>This site is designed to help you find valuable resources for more sustainable living. 
            You can find resources uploaded by other users under the Resources tab.
            You can also go ahead and add any resources that you find valuable. Enjoy! <br/><br/><br/>
            Note that we are currently in the process of adding a page where you can share your own
            eco-friendly tips, and see other people's tips as well!</p>
        </div>
        <footer>
          <p>©2021 Kiana</p>
        </footer>
      </Route>
      <Route path ='/resources'>
        <div className= "topOfPage" id="resourceTop">
        <h1>Resources</h1>
        </div>
        <main>
          {resources.map((resource) => (
            <Resource key={resource.id} resource={resource}/>
          ))}
        </main>
        <footer>
          <p>©2021 Kiana</p>
        </footer>
      </Route>
      <Route path ='/new'>
            <div className= "topOfPage" id="addTop">
            <h1>Add a New Resource!</h1>
            </div>
            <div className="addForm">
            <Form />
            </div>
            <footer>
          <p>©2021 Kiana</p>
        </footer>
      </Route>
      <Route path ='/tips'>
        <div className= "topOfPage" id="tipsTop">
        <h1>Tips from the Community</h1>
        </div>
        <main>
        {tips.map((tip) => (
            <Tip key={tip.id} tip={tip}/>
          ))}
        </main>
        <footer>
          <p>©2021 Kiana</p>
        </footer>
      </Route>
      <Route path ='/newTip'>
            <div className="topOfPage" id="addTipTop">
            <h1>Add a New Tip!</h1>
            </div>
            <div className="addForm">
            <TipForm />
            </div>
            <footer>
          <p>©2021 Kiana</p>
        </footer>
      </Route>

      
    </div>
  );
}

export default App;
