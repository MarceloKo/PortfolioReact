export const TOKEN_KEY = "token";
export const ID_USUARIO= "id_user";
export const NOME_USUARIO= "name_user";

export const login = (token,id, name) => {
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(NOME_USUARIO, name);

}

export const logout = () => {
    localStorage.clear(TOKEN_KEY);
    localStorage.clear(ID_USUARIO);
    localStorage.clear(NOME_USUARIO);
}

export const headers = ()=>
  {
    const token = localStorage.getItem("token")
      return {headers: {authorization: `Bearer ${token}`}}
    }

