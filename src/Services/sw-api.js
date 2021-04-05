export function getStarships() {
    return fetch('https://swapi.dev/api/starships/').then(res => res.json()) };