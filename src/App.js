import React, { useEffect } from 'react';
import Imdb from './Imdb';
export default ()=>{

useEffect(()=>{
  const loadAll = async () => {
    // Pegando a lista TOTAL
    let list = await Imdb.getHomeList();
    console.log(list);
}
  loadAll();
  }, []);
}
