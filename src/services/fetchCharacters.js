const ENDPOINT = 'http://hp-api.herokuapp.com/api/characters';

const fetchCharacters = baseUrl => {
  return fetch(`${ENDPOINT}${baseUrl}`).then(data => data.json());
};

export { fetchCharacters };
