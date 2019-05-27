const ENDPOINT = 'http://hp-api.herokuapp.com/api/characters';

const fetchCharacters = () => fetch(ENDPOINT).then(data => data.json());

export { fetchCharacters };
