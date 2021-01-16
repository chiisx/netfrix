const API_KEY = '38c007f28d5b66f36b9c3cf8d8452a4b';
const API_BASE = 'https://api.themoviedb.org/3';

const basicFetch = async (endpoint) => {
    const req = await fetch('${API_BASE}${endpoint}');
    const json = await req.json();
    return json;
} 

export default {
 getHomeList: async () =>{
     return [
    {
     slug: 'orginals',
     title: 'orginais do netfrix',
     items: await basicFetch('/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}')
    },

    {
    slug:'trending',
    title: 'recomendaddos para voce',
    items: await basicFetch('/trending/all/week?language=pt-BR&api_key=${API_KEY}')
    },

{
    slug:'toprated',
    title: ' Em Alta',
    items: await basicFetch('/movie/top_rated?language=pt-BR&api_key=${API_KEY}')
},

{
    slug:'Action',
    title: 'Ação',
    items: await basicFetch('/discovery/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}')
},


{
    slug:'Action',
    title: 'COmedia',
    items: await basicFetch('/discovery/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}')
},

{
    slug:'Action',
    title: 'terror',
    items: await basicFetch('/discovery/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}')
},

{
    slug:'Action',
    title: 'romance',
    items: await basicFetch('/discovery/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}')
},

{
    slug:'Action',
    title: 'documentario',
    items: await basicFetch('/discovery/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}')
},
      ];
   }
}

//awaait ele fazr uma requisção pra serviço interneto, espere uma requição e vai proximo