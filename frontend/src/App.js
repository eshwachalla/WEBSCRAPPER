import axios from 'axios';
import React,{useState,useEffect} from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Search from './components/Search';

function App() {
  
  const [url, setUrl] = useState(null);
  const [html, setHtml] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/', {
      params: { url}
  }).then(response => {
      setHtml(response.data)
      console.log(response.data);
  }).catch(error => {
      console.log(error);
  })
  },[])

  let props = {
    url,
    html,
    setUrl,
    setHtml
  }
  if (url !== null) {
    console.log(url);
  }
  const data = html?.slice(1)
  return (
    <div className="App">
      <Navbar />
      <Search props={props}/>
      <ul>
        {data?.map(ele => (
          <li>{ele}</li>
        ))}
      </ul>
      
    </div>
  );
}

export default App;
