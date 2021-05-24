// http://ergast.com/api/f1/drivers/${uneseno}.json
// http://ergast.com/api/f1/drivers/${dobiveno}/results.json?limit=10

function resolveResponse(response) {
  if (response.status === 200) {
    return response.json();
  }

  if (response.status === 404) {
    throw new Error("No such driver!");
  }

  throw new Error("Nešto nije u redu sa serverom.");
}

export function dohvatiVozaca(uneseno) {
  const url = `http://ergast.com/api/f1/drivers/${uneseno}.json`;
  return fetch(url).then((response) => resolveResponse(response));
}

export function dohvatiVoznje(dobiveno) {
  const url = `http://ergast.com/api/f1/drivers/${dobiveno}/results.json?limit=10`;
  return fetch(url).then((response) => resolveResponse(response));
}
