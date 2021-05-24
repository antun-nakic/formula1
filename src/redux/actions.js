import { dohvatiVozaca, dohvatiVoznje } from "../services/formulaAPI";

export const RESET = "RESET";
export const POSTAVI_IME = "POSTAVI_IME";
export const POSTAVI_VOZNJE = "POSTAVI_VOZNJE";

export function vozac(uneseno) {
  return (dispatch) =>
    dohvatiVozaca(uneseno).then((data) => {
      if (data.MRData.DriverTable.Drivers.length === 0)
        throw new Error("Ne postoji traženi vozač");

      dispatch({
        type: POSTAVI_IME,
        payload: data.MRData.DriverTable.Drivers[0],
      });
    });
}

export function voznje(dobiveno) {
  return (dispatch) =>
    dohvatiVoznje(dobiveno).then((data) => {
      if (data.MRData.RaceTable.Races.length === 0)
        throw new Error("Ne postoje zabilježene utrke");

      dispatch({
        type: POSTAVI_VOZNJE,
        payload: data.MRData.RaceTable.Races,
      });
    });
}

export function reset() {
  return { type: RESET };
}
