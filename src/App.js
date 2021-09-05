import React, { useEffect, useState } from 'react';
import './App.css';

import Tmdb from './Tmdb';

import Header from './components/Header';
import FeaturedMovie from './components/FeaturedMovie';
import MovieList from './components/MovieList';
import Footer from './components/Footer';


function App() {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);


  useEffect(() => {   
    const loadAll = async () => {
      // Pegando a lista total de filmes
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      // Pegando o featured (originais do Netflix aleatoriamente)
      let originals = list.filter(i => i.slug === 'originals')
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
      let movieChosen = originals[0].items.results[randomChosen]
      let chosenInfo = await Tmdb.getMovieInfo(movieChosen.id, 'tv')
      setFeaturedData(chosenInfo)
    }

    loadAll();
  }, []);


  // Monitora o evento para scroll do header
  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 10) {
        setBlackHeader(true)
      }
      else{
        setBlackHeader(false)
      }
    }

    window.addEventListener('scroll', scrollListener)

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  })

  
  return(
    <div className="page">

      <Header black={blackHeader}/>

      {featuredData && 
        <FeaturedMovie item={featuredData} />
      }

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieList key={key} title={item.title} items={item.items} />
        ))}
      </section>  
    
      <Footer />
    </div>
  )
} 

export default App;