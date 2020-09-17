const API = 'https://rickandmortyapi.com/api/character/';
//const API = 'https://rickandmortyapi.com/api/episode/';
//const API = 'https://rickandmortyapi.com/api/location/';

const getData = async (id) => {

  const apiURL = id ? `${API}${id}` : API
  console.log(apiURL);

  try {
    const response = await fetch(apiURL);
    const data = response.json();
    return data;
  } catch (error) {
    console.log(`Ups, algo paso. Fetch error: ${error}`);
  }
}

export default getData;