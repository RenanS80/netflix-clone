import React, { useEffect, useState } from 'react';
import Tmdb from './Tmdb';

function App() {

  const [movieList, setMovieList] = useState([])

  useEffect(() => {   
    const loadAll = async () => {
      // Pegando a lista total
      let list = await Tmdb.getHomeList();
      setMovieList(list);
    }

    loadAll();
  }, []);

  

  return(
    <div>Hello world</div>
  )
} 

export default App;