import useToken from "../store/storeToken";

export const TOKEN_KEY = "token";
export const ID_USUARIO= "id_user";
export const NOME_USUARIO= "name_user";
const token = useToken((state)=>{state.token})
export const login = (token,id, name) => {
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(NOME_USUARIO, name);
    const setToken = useToken((state)=>{state.setToken})
    setToken(token)
}

export const logout = () => {
    localStorage.clear(TOKEN_KEY);
    localStorage.clear(ID_USUARIO);
    localStorage.clear(NOME_USUARIO);
}

export const headers = 
  {headers: {authorization: "Bearer " + localStorage.getItem(token)}}

