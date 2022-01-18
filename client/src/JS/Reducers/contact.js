import {
  GET_CONTACTS_LOAD,
  GET_CONTACTS_SUCC,
  GET_CONTACTS_FAIL,
} from "../ActionsType/contact";

const initState = {
  listContacts: [],
  load: false,
  errors: null,
};

export const contactReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_CONTACTS_LOAD:
      return { ...state, load: true };
    case GET_CONTACTS_SUCC:
      return { ...state, load: false, listContacts: payload };
    case GET_CONTACTS_FAIL:
      return { ...state, load: false, errors: payload };

    default:
      return state;
  }
};
export default contactReducer;
