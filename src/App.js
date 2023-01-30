import React, { useState, useEffect } from 'react'
import './App.css';
import Loadscreen from './Component/Loadscreen';
import Home from './Component/Home';

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 6000)
  }, [loading])

  return (
  <>
{
 
  loading === false?(
    
      
       <Home/>
    
       
   
  ):
  (<Loadscreen/>)
 

}
  </>
  );
}

export default App;
