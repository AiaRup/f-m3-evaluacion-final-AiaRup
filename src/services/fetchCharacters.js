const ENDPOINT = 'http://hp-api.herokuapp.com/api/characters';

const fetchCharacters = dataUrl => fetch(`${ENDPOINT}${dataUrl}`).then(data => data.json());

export { fetchCharacters };
