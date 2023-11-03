import React, { useState, useEffect } from 'react'
import Tours from './Tours';
import './App.css'

const url = 'https://course-api.com/react-tours-project';
const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [tour, setTour] = useState([])

  const fetchTours=()=>{
    const fetchUser = async () => {
      try {
          const response = await fetch(url);
          if (!response.ok) {
              setIsError(true);
              setIsLoading(false);
              return;
          }
          const userData = await response.json();
          setTour(userData);
      } catch (error) {
          setIsError(true);
      }
      setIsLoading(false);
  };
  fetchUser();
  }

  const removeTour=(id)=>{
      const newTours=tour.filter((tours)=>tours.id !== id);
      setTour(newTours);
    }

  useEffect(() => {
      fetchTours();
  }, []);
  
  
  
  if(isLoading){
    return(
      <div className='loading'></div>
    )
  }
  if(isError){
    return(
      <div>Server is Down</div>
    )
  }
  if(tour.length === 0){
    return(
      <main>
        
        <div className='title'>
          <h2>no tours left</h2>
          <div className='underLine'></div>
          <button className='btn' onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    )
  }
 
  return (
    <div>  
      
      <Tours tour={tour} removeTour={removeTour}/>
    </div>
  )
}

export default App