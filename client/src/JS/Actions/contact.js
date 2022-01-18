import axios from "axios";
import { GET_CONTACTS_FAIL, GET_CONTACTS_LOAD, GET_CONTACTS_SUCC } from "../ActionsType/contact";
// import {useDispatch} from 'react'

export const getContacts = () => async (dispatch) => {
    dispatch({
        type:GET_CONTACTS_LOAD
    })
  try {
    let result = await axios.get("/api/contacts");
    dispatch({
      type: GET_CONTACTS_SUCC,
      payload: result.data.listContacts,
    });
  } catch (error) {
    //   console.log (error)  // affichher l'erreur pour connaitre le payload
    dispatch({
      type: GET_CONTACTS_FAIL,
      payload: error.response.data,
    });
  }
};
