import { RESET, POSTAVI_IME, POSTAVI_VOZNJE } from "./actions";

const initialState = { name: null, listaVoznji: null };

export function reducer(state = initialState, action) {
  switch (action.type) {
    case POSTAVI_IME:
      return { ...state, name: action.payload };
    case POSTAVI_VOZNJE:
      return { ...state, listaVoznji: action.payload };
    case RESET:
      return initialState;
    default:
      return state;
  }
}
